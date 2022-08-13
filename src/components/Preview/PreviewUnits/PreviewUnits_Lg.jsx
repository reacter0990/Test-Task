import React from 'react'

const PreviewUnits_Lg = ({image}) => {
  return (
    <div className="picture-icon w-full 2xl:h-15% xl:h-15% lg:h-15% overflow-hidden mb-2" onClick={(e) => {
      e.currentTarget.style.border = '3px solid black';
    }}>
      <img src={image} alt="" className='h-full w-full object-contain' />
    </div>
  )
}

export default PreviewUnits_Lg