import React from 'react'
import hinart from './../../assets/images/hinart.jpg'
import hinart2 from './../../assets/images/hinart2.jpg'
import hinart3 from './../../assets/images/hinart3.jpg'
import hinart4 from './../../assets/images/hinart4.jpg'
import hinart6 from './../../assets/images/hinart6.jpeg'
import hinart7 from './../../assets/images/hinart7.jpg'
import hinart8 from './../../assets/images/hinart8.jpeg'

const Gallary = () => {
  return (
    <>
    <div className="border border-t-4 border-b-4 text-center md:p-12 p-10 bg-white">
                    <h1 className="text-3xl font-bold">GALLERY</h1>
                
                    <p className=" p-5">VIEW OUR HINA WORK</p>              
                    <div className="flex gap-3 justify-center py-3 px-5 capitalize">
                        <div className='flex flex-col gap-3'>
                            <img src={hinart} alt="" className="w-64 h-64 border-2 border-black" />
                            <img src={hinart2} alt="" className="w-64 h-96 border-2 border-black rounded-md" />

                        </div>
                        <div className='flex flex-col gap-3'>
                            <img src={hinart3} alt="" className="w-64 h-96 border-2 border-black rounded-md" />
                            <img src={hinart4} alt="" className="w-64 h-64 border-2 border-black" />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <img src={hinart6} alt="" className="w-64 h-64 border-2 border-black" />
                            <img src={hinart7} alt="" className="w-64 h-96 border-2 border-black rounded-md" />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <img src={hinart8} alt="" className="w-64 h-96 border-2 border-black rounded-md" />
                            <img src={hinart2} alt="" className="w-64 h-64 border-2 border-black" />
                        </div>
                    </div>


                    <p className=" p-5">VIEW OUR HAIR WORK</p>              
                    <div className="flex gap-3 justify-center py-3 px-5 capitalize">
                        <div className='flex flex-col gap-3'>
                            <img src={hinart} alt="" className="w-64 h-64 border-2 border-black" />
                            <img src={hinart2} alt="" className="w-64 h-96 border-2 border-black rounded-md" />

                        </div>
                        <div className='flex flex-col gap-3'>
                            <img src={hinart3} alt="" className="w-64 h-96 border-2 border-black rounded-md" />
                            <img src={hinart4} alt="" className="w-64 h-64 border-2 border-black" />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <img src={hinart6} alt="" className="w-64 h-64 border-2 border-black" />
                            <img src={hinart7} alt="" className="w-64 h-96 border-2 border-black rounded-md" />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <img src={hinart8} alt="" className="w-64 h-96 border-2 border-black rounded-md" />
                            <img src={hinart2} alt="" className="w-64 h-64 border-2 border-black" />
                        </div>
                    </div>


                    <p className=" p-5">VIEW OUR EYES WORK</p>              
                    <div className="flex gap-3 justify-center py-3 px-5 capitalize">
                        <div className='flex flex-col gap-3'>
                            <img src={hinart} alt="" className="w-64 h-64 border-2 border-black" />
                            <img src={hinart2} alt="" className="w-64 h-96 border-2 border-black rounded-md" />

                        </div>
                        <div className='flex flex-col gap-3'>
                            <img src={hinart3} alt="" className="w-64 h-96 border-2 border-black rounded-md" />
                            <img src={hinart4} alt="" className="w-64 h-64 border-2 border-black" />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <img src={hinart6} alt="" className="w-64 h-64 border-2 border-black" />
                            <img src={hinart7} alt="" className="w-64 h-96 border-2 border-black rounded-md" />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <img src={hinart8} alt="" className="w-64 h-96 border-2 border-black rounded-md" />
                            <img src={hinart2} alt="" className="w-64 h-64 border-2 border-black" />
                        </div>
                    </div>
                
            </div>
    </>
  )
}

export default Gallary