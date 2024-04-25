import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionnaireContext } from './QuestionnaireContext';

const BMICalculator = () => {
    const navigate = useNavigate();
    const { updateFormData } = useContext(QuestionnaireContext);
    const [weight, setWeight] = useState(() => localStorage.getItem('weight') || '');
    const [height, setHeight] = useState(() => localStorage.getItem('height') || '');


    const handleWeightChange = (e) => {setWeight(e.target.value); localStorage.setItem('weight', e.target.value)}
    const handleHeightChange = (e) => {setHeight(e.target.value); localStorage.setItem('height', e.target.value)}

    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            return weight / (heightInMeters * heightInMeters);
        }
        return 0;
    };

    const handleSubmit = () => {
        const bmi = calculateBMI();
        const isMorbidlyObese = bmi > 40;
        updateFormData({ isMorbidlyObese });
        navigate('../has-posterior-pillar-webbing');
    };
    const handleBackClick = () => {
        navigate("../ess");
      };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-slate-950 text-slate-300 p-4">
            <p className="text-5xl mb-8">BMI Calculator</p>
            <input
                type="number"
                placeholder="Weight in kg"
                value={weight}
                onChange={handleWeightChange}
                className="mb-4 px-4 py-2 text-xl placeholder-slate-950 text-slate-950 rounded bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
            />
            <input
                type="number"
                placeholder="Height in cm"
                value={height}
                onChange={handleHeightChange}
                className="mb-8 px-4 py-2 text-xl placeholder-slate-950 text-slate-950 rounded bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-blue-500 focus:ring-opacity-50"
            />
            <button onClick={handleSubmit}
                    className="bg-slate-300 w-[120px] text-slate-950 font-bold rounded py-2 px-4 transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-default-blue-500 focus:ring-opacity-50 mb-8">
                Next Step
            </button>
            <button onClick={handleBackClick}
                    className="bg-slate-300 w-[120px] text-slate-950 font-bold rounded py-2 px-4 transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-default-blue-500 focus:ring-opacity-50 mb-8">
                Back 
            </button>
            {weight && height && (
                <p className="text-xl font-semibold">Your BMI is: {calculateBMI().toFixed(2)}</p>
            )}
        </div>
    );
};

export default BMICalculator;
