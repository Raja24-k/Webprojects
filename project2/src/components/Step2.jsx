import React from 'react';

const supports = ['Tutoring','Therapy','Assessment','Counseling'];

const Step2 = ({ data, setData, errors }) => {
  const toggleSupport = type => {
    setData(d => {
      const arr = d.supportTypes.includes(type)
        ? d.supportTypes.filter(t => t!==type)
        : [...d.supportTypes, type];
      return { ...d, supportTypes: arr };
    });
  };

  return (
    <div>
      <div className="mb-4">
        <p className="mb-1">Type of Support</p>
        {supports.map(type => (
          <label key={type} className="block">
            <input type="checkbox" checked={data.supportTypes.includes(type)} onChange={() => toggleSupport(type)} /> {type}
          </label>
        ))}
        {errors.supportTypes && <p className="text-red-500 text-sm">{errors.supportTypes}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1">Preferred Frequency</label>
        <select value={data.frequency} onChange={e => setData(d => ({ ...d, frequency: e.target.value }))} className="w-full border p-2 rounded">
          <option value="">Select...</option>
          <option>Weekly</option>
          <option>Bi-Weekly</option>
          <option>Monthly</option>
        </select>
        {errors.frequency && <p className="text-red-500 text-sm">{errors.frequency}</p>}
      </div>
      <div>
        <label className="block mb-1">Specific Requirements</label>
        <textarea value={data.requirements} onChange={e => setData(d => ({ ...d, requirements: e.target.value }))} className="w-full border p-2 rounded" />
      </div>
    </div>
  );
};

export default Step2;
