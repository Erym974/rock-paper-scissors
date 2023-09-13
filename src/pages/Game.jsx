import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { uniqId, checkUniqId } from '../functions/uniqId';
import thunderbolt from '../assets/thunderbolt.svg'
import io from "socket.io-client";

import '../styles/game.scss'
import { Selection } from '../components/Selection';
import { Waiting } from '../components/Waiting';
import { Choices } from '../components/Choices';
import { useDispatch, useSelector } from 'react-redux';
import { Timer } from '../components/Timer';
import { gameRestart, setOpponnent, startGame } from '../slices/GameSlices';
import { getChoice, getDefaultChoice } from '../functions/choices';
import { Result } from '../components/Result';

export const Game = () => {

    const { id } = useParams()
    const game = useSelector((state) => state.game)
    const [socket, setSocket] = useState(null);
    const [timer, setTimer] = useState(0)
    const [result, setResult] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
      if(!id) return navigate(`/game/${uniqId()}`)
      if(!checkUniqId(id)) return navigate(`/game/${uniqId()}`)

      setSocket(io("http://localhost:3001"))
    }, [])

    useEffect(() => {
        if(socket === null) return;
        socket.emit('room-join', id);

        socket.on('has-opponent', () => dispatch(setOpponnent(getDefaultChoice())))
        socket.on('set-opponent', (choice) => dispatch(setOpponnent(getChoice(choice))))
        socket.on('start-game', () => {
            dispatch(startGame())
        })
        socket.on('set-timer', (time) => setTimer(parseInt(time)))
        socket.on('set-result', (newResult) => setResult(newResult))
        socket.on('room-closed', () => {
            setResult(null)
            dispatch(setOpponnent(null))
            navigate(`/game/${uniqId()}`)
        })
        socket.on('game-restart', () => {
            dispatch(gameRestart())
            setTimer(0)
            setResult(null)
        })

    }, [socket])

    

    return (
        <div className="game">
            <div className="player you">
                <Selection datas={game?.you} animate={timer != 0} />
            </div>
            <div className="separator">
                <img src={thunderbolt} alt="" />
            </div>
            <div className="player opponent">
                {game?.opponent ?
                <Selection datas={game?.opponent} animate={timer != 0} />
                :
                <Waiting />
                }
            </div>
            <Choices socket={socket} />
            <Timer timer={timer} />
            {result != null && <Result result={result} socket={socket} />}
        </div>
    )
}
