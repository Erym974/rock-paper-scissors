import React, { useEffect, useRef } from 'react'
import { Fireworks  } from '@fireworks-js/react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


export const Result = ({ result, socket }) => {

    const ref = useRef(null)
    const { id } = useParams()

    const handleRestart = (choice) => {
        socket.emit('game-restart', { id })
    }

  return (
    <div className='result'>
        <div className="content">
            <div className="fireworks">
            {result == "won" &&
                <Fireworks
                    options={{ opacity: 0.5, intensity: 20 }}
                    ref={ref}
                />
            }
            </div>
            <span className='text'>{result == "won" && "Gagné"}{result == "loose" && "Perdu"}{result == "equality" && "Égalité"}</span>
            <button onClick={handleRestart}>Rejouer</button>
        </div>
    </div>
  )
}
