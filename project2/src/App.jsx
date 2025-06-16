import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

const App = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    age: '', diagnosis: '', schoolType: '',
    supportTypes: [], frequency: '', requirements: '',
    parentName: '', email: '', phone: '',
  });
  const [errors, setErrors] = useState({});

  const next = () => {
    if (validate()) setStep(s => s + 1);
  };
  const prev = () => setStep(s => s - 1);

  const validate = () => {
    const errs = {};
    if (step === 1) {
      if (!data.age) errs.age = 'Required';
      if (!data.diagnosis) errs.diagnosis = 'Required';
      if (!data.schoolType) errs.schoolType = 'Required';
    } else if (step === 2) {
      if (data.supportTypes.length === 0) errs.supportTypes = 'Select at least one';
      if (!data.frequency) errs.frequency = 'Required';
    } else if (step === 3) {
      if (!data.parentName) errs.parentName = 'Required';
      if (!data.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) errs.email = 'Invalid email';
      if (!data.phone.match(/^\d{10,}$/)) errs.phone = 'Invalid phone';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', data);
      alert('Thank you! Your request has been submitted.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Service Request Form</h1>
      <form onSubmit={handleSubmit}>
        {step === 1 && <Step1 data={data} setData={setData} errors={errors} />}
        {step === 2 && <Step2 data={data} setData={setData} errors={errors} />}
        {step === 3 && <Step3 data={data} setData={setData} errors={errors} />}
        <div className="flex justify-between mt-6">
          {step > 1 && <button type="button" onClick={prev} className="px-4 py-2 bg-gray-200 rounded">Previous</button>}
          {step < 3 && <button type="button" onClick={next} className="ml-auto px-4 py-2 bg-blue-500 text-white rounded">Next</button>}
          {step === 3 && <button type="submit" className="ml-auto px-4 py-2 bg-green-500 text-white rounded">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default App;
