import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '../ui/alertdialog';


const StartQuestionnaire = () => {
  return (
  <div className="flex justify-center items-center h-screen w-screen bg-cyan-500 text-default-yellow text-5xl font-black">
      <Link to="/" className="absolute top-5 left-5 text-lg font-semibold text-default-yellow hover:text-white flex items-center">
        <IoArrowBack className="mr-2" /> Back to Home
      </Link>
      <AlertDialog>
        <AlertDialogTrigger className="text-center hover:text-white">Press to start now!</AlertDialogTrigger>
  
        <AlertDialogContent className='bg-gray-200'>
          <AlertDialogHeader>
            <AlertDialogTitle>Disclaimer alert</AlertDialogTitle>
            <AlertDialogDescription>
              The Prediction Modal is only for educational purposes and <span className='text-red-500 underline'>should not be used as a substitute for a professional medical diagnosis </span>. 
              If you have any concerns about your health, please consult a medical professional. For the most accurate result, kindly take a <a className='text-yellow-600 font-semibold underline' href='https://princecourt.com/allied-health-services/sleep-lab-polysomnography#:~:text=Prince%20Court%20is%20one%20of,consultations%20and%20trials%2C%20among%20others.'>polysomnography </a>
              test at a hospital.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className='transition hover:scale-105'><Link to="tonsil-size">OK, I understand.</Link></AlertDialogAction>
            <Link to="/"><AlertDialogCancel>Cancel</AlertDialogCancel></Link>            
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
    
  )
}

export default StartQuestionnaire