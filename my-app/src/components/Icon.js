import React from 'react'

const Icon = ({IconName, alt,size}) => {
  return (
               <div className='col-3 mt-3'>
                <img src={IconName} alt={alt} style={{ width: `${size}rem`}} />
                </div>
  )
}

export default Icon;