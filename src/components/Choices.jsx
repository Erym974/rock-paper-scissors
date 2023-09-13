import React, { useEffect } from 'react'

import { getChoices } from '../functions/choices'
import { useDispatch, useSelector } from 'react-redux'
import { setChoice } from '../slices/GameSlices'
import { useParams } from 'react-router-dom'

export const Choices = ({ socket }) => {

    const game = useSelector((state) => state.game)
    const dispatch = useDispatch();
    const { id } = useParams()

    const handleSelect = (choice) => {
        if(game.locked) return
        dispatch(setChoice({...choice, locked: true}))
        socket.emit('set-selected', { id, selected: choice.id })
    }

    return (
        <div className='choices'>
            {getChoices().map((choice) => {
                return <button disabled={game.locked} key={choice?.id} className={`${(game?.you?.id === choice?.id && game?.you?.locked) ? "selected" : undefined}`} onClick={() => { handleSelect(choice) }}>
                    <img src={choice?.image} alt="" />
                </button>
            })}
        </div>
    )
}
