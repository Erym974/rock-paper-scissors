import React from 'react'

export const Timer = ({ timer }) => {
  return (
    <div className={`timer ${timer == 0 ? 'hide': null}`}>
        <span>{timer}</span>
    </div>
  )
}
