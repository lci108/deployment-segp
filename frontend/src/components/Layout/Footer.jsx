import React from 'react'
import {PiInstagramLogoFill} from 'react-icons/pi';
import {ImFacebook2} from 'react-icons/im';



const Footer = () => {
  return (
    <div className="xl:px-40 bg-default-blue-500 text-default-yellow">
      <div className="p-10 lg:py-28 lg:px-20 grid grid-cols-1 gap-y-2 lg:grid-cols-8 gap-x-4">
        <div className="col-span-2 flex flex-col lg::gap-y-4">
            <p className="font-black text-lg">made by</p>
            <p className="font-bold text-sm text-white">SEGP GROUP V</p>

        </div>
        <div className="col-span-3 flex flex-col lg:gap-y-4">
            <p className="font-black text-lg">members</p>
            <p className="font-bold text-sm text-white">chai jun hao</p>
            <p className="font-bold text-sm text-white">low chen ing</p>
            <p className="font-bold text-sm text-white">khaw yong cheng</p>
            <p className="font-bold text-sm text-white">gabriel yong ting qian</p>

        </div>
        <div className="col-span-1 flex flex-col gap-y-4">
            <p className="font-black text-lg">our socials</p>
            <div className="icons-container flex text-white gap-4 items-center">
                    <PiInstagramLogoFill className='text-2xl'/>
                    <ImFacebook2 className='text-xl'/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer