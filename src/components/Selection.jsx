import React from 'react'

export const Selection = ({ datas, animate }) => {
  return (
    <div className={`selection ${animate ? 'animate' : null}`}>
        <img src={datas?.image} alt="" className="choice" />
    </div>
  )
}
