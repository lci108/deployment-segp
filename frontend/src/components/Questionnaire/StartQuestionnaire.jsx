import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';


const StartQuestionnaire = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-cyan-500 text-default-yellow text-5xl font-black">
      <Link to="/" className="absolute top-5 left-5 text-lg font-semibold text-default-yellow hover:text-white flex items-center">
        <IoArrowBack className="mr-2" /> Back to Home
      </Link>
      <Link to="tonsil-size" className="text-center hover:text-white">
        Press to start now!
      </Link>
    </div>
    
  )
}

export default StartQuestionnaire