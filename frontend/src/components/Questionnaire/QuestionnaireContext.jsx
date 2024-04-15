import React, { createContext, useState } from 'react';

export const QuestionnaireContext = createContext();

export const QuestionnaireProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    tonsilSize: null,
    MP: null,
    isNeckCircumferenceLargerThan40: null,
    ESS: null,
    isMorbidlyObese: null,
    hasPosteriorPillarWebbing: null,
    hasRetrognathia: null,
    hasMicrognathia: null,
  });
  const [errors, setErrors] = useState({});

  const validateData = (newData) => {
    let newErrors = {};

    // Tonsil Size: Must be a number between 0 and 4
    if (newData.tonsilSize !== undefined) {
      if (newData.tonsilSize < 0 || newData.tonsilSize > 4) {
        newErrors.tonsilSize = 'Tonsil size must be between 0 and 4';
      }
    }

    // MP (Mallampati Score): Must be a number between 1 and 4
    if (newData.MP !== undefined) {
      if (newData.MP < 1 || newData.MP > 4) {
        newErrors.MP = 'Mallampati score must be between 1 and 4';
      }
    }

    // ESS (Epworth Sleepiness Scale): Must be a number between 0 and 24
    if (newData.ESS !== undefined) {
      if (newData.ESS < 0 || newData.ESS > 24) {
        newErrors.ESS = 'ESS score must be between 0 and 24';
      }
    }

    // Booleans: isNeckCircumferenceLargerThan40, isMorbidlyObese, hasPosteriorPillarWebbing, hasRetrognathia, hasMicrognathia
    // These should be either true or false
    const booleanFields = [
      'isNeckCircumferenceLargerThan40',
      'isMorbidlyObese',
      'hasPosteriorPillarWebbing',
      'hasRetrognathia',
      'hasMicrognathia'
    ];
    booleanFields.forEach(field => {
      if (newData[field] !== undefined && typeof newData[field] !== 'boolean') {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} must be true or false`;
      }
    });

    return newErrors;
  };

  const updateFormData = (newData) => {
    const newErrors = validateData(newData);
    if (Object.keys(newErrors).length === 0) {
      setFormData({ ...formData, ...newData });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <QuestionnaireContext.Provider value={{ formData, updateFormData, errors }}>
      {children}
    </QuestionnaireContext.Provider>
  );
};
