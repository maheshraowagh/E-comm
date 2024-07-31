// import React from 'react'
import a from '../../assets/Gallery/a.jpg'
// import b from '../../assets/Gallery/b.jpg'
// import c from '../../assets/Gallery/c.jpg'
import d from '../../assets/Gallery/d.jpg'
import e from '../../assets/Gallery/e.jpg'
// import f from '../../assets/Gallery/f.jpg'
import g from '../../assets/Gallery/g.jpg'
import h from '../../assets/Gallery/h.jpg'
// import i from '../../assets/Gallery/i.jpg'
import j from '../../assets/Gallery/j.jpg'

const Gallery = () => {
  return (
    <>
    
    <section className="text-gray-600 body-font z-10">
  <div className="container px-5 py-20 mx-auto flex flex-wrap">
   
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-75 translate-x-4 skew-y-3 transition duration-500 " src={a}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-75 translate-x-4 skew-y-3 transition duration-500" src={d}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block hover:scale-75 translate-x-4 skew-y-3 transition duration-500" src={g}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block hover:scale-75 translate-x-4 skew-y-3 transition duration-500" src={h}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-75 translate-x-4 skew-y-3 transition duration-500" src={e}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-75 translate-x-4 skew-y-3 transition duration-500" src={j}/>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}

export default Gallery