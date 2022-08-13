import React from 'react'
import Image from '../../Assets/590b699853054886ad72f7a18bd26e73.png';
const PreviewUnits_Sm = ({image}) => {
  return (
   
    <div className="picture-icon-sm h-full w-80px overflow-hidden p-1" onClick={(e) => {
        e.currentTarget.style.border = '3px solid black';
      }}>
        <img src={image} className='object-contain'/>
      </div>
  )
}

export default PreviewUnits_Sm