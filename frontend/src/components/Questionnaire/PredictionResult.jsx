
import React from 'react';

const PredictionResult = ({ result }) => {
  //interpret the prediction
  const interpretResult = (resultArray) => {
    // Destructure the result array to get OSA status and severity
    const [osaStatus, severityIndex] = resultArray;
    const osaMessage = osaStatus === 1 ? 'Positive for OSA' : 'Negative for OSA';
    let severityMessage = '';

    if (osaStatus === 1) {
      // Map the severity index to a descriptive string
      const severityMap = ['Mild', 'Moderate', 'Severe'];
      severityMessage = `Severity: ${severityMap[severityIndex] || 'Unknown'}`;
    }

    return `${osaMessage}${severityMessage ? ', ' + severityMessage : ''}`;
  };

  return (
    <div>
      <h2>Prediction Result:</h2>
      {/* Only interpret and display the result if it exists */}
      {result && <p>{interpretResult(result)}</p>}
    </div>
  );
};

export default PredictionResult;
