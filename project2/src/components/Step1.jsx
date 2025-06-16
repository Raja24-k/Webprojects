import React from 'react';

const Step1 = ({ data, setData, errors }) => (
  <div>
    <div className="mb-4">
      <label className="block mb-1">Child's Age</label>
      <input type="number" value={data.age} onChange={e => setData(d => ({ ...d, age: e.target.value }))} className="w-full border p-2 rounded" />
      {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
    </div>
    <div className="mb-4">
      <label className="block mb-1">Diagnosis</label>
      <input type="text" value={data.diagnosis} onChange={e => setData(d => ({ ...d, diagnosis: e.target.value }))} className="w-full border p-2 rounded" />
      {errors.diagnosis && <p className="text-red-500 text-sm">{errors.diagnosis}</p>}
    </div>
    <div>
      <p className="mb-1">School Type</p>
      {['Public','Private','Home School'].map(type => (
        <label key={type} className="mr-4">
          <input type="radio" name="schoolType" value={type} checked={data.schoolType===type} onChange={e => setData(d => ({ ...d, schoolType: e.target.value }))} /> {type}
        </label>
      ))}
      {errors.schoolType && <p className="text-red-500 text-sm">{errors.schoolType}</p>}
    </div>
  </div>
);

export default Step1;
