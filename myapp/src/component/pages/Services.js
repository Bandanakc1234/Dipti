import React from 'react'
import threading from './../../assets/images/threading.jpg'
import tinting from './../../assets/images/tinting.jpg'
import hinart from './../../assets/images/hinart.jpg'
import wax from './../../assets/images/wax.jpg'

const Services = () => {
    return (
        <>
            <div className='flex'>
                <div className="flex flex-wrap w-full justify-evenly">
                    <div className="py-5 px-2 hover:bg-blue-200 rounded-md shadow-lg my-3 " >
                        <div className="flex justify-center py-3 px-5 capitalize">
                            <img src={threading} alt="" className="w-56 h-56 rounded-md" />
                        </div>
                        <h1 className="text-center md:text-xl capitalize">THREADING</h1>
                        <p className="text-center">Removal of hair using
                            thread.</p>
                    </div>
                </div>



                <div className="flex flex-wrap w-full justify-evenly">
                    <div className="py-5 px-2 hover:bg-blue-200 rounded-md shadow-lg my-3 " >
                        <div className="flex justify-center py-3 px-5 capitalize">
                            <img src={hinart} alt="" className="w-56 h-56 rounded-md" />
                        </div>
                        <h1 className="text-center md:text-xl capitalize">HENNA ART</h1>
                        <p className="text-center">Temporary henna tattoo
                            for beautiful body art</p>
                    </div>
                </div>



                <div className="flex flex-wrap w-full justify-evenly">
                    <div className="project-div py-5 px-2 hover:bg-blue-200 rounded-md shadow-lg my-3 " >
                        <div className="flex justify-center py-3 px-5 capitalize">
                            <img src={wax} alt="" className="w-56 h-56 rounded-md" />
                        </div>
                        <h1 className="text-center md:text-xl capitalize">WAXING</h1>
                        <p className="text-center">Removal of hair using
                            wax.</p>
                    </div>
                </div>



                <div className="flex flex-wrap w-full justify-evenly">
                    <div className="project-div py-5 px-2 hover:bg-blue-200 rounded-md shadow-lg my-3 " >
                        <div className="flex justify-center py-3 px-5 capitalize">
                            <img src={tinting} alt="" className="w-56 h-56 rounded-md" />
                        </div>
                        <h1 className="text-center md:text-xl capitalize">TINTING</h1>
                        <p className="text-center">Dying of the eyebrow using hair dye dint and henna.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services