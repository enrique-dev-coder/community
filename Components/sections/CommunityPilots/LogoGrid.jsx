import React from 'react'

const LogoGrid = ({ imagenes }) => {
  return (
    <div className="mx-auto mt-5 flex h-[480px] flex-wrap md:h-auto">
      {imagenes.map((i) => (
        <div className="mb-10 basis-1/2 md:basis-1/4">
          <img src={i.img} className="mx-auto" />
        </div>
      ))}
    </div>
  )
}

export default LogoGrid
