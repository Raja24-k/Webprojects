import React from 'react';

export default function Sort({ value, onSortChange }) {
  return (
    <div className="mb-4">
      <select value={value} onChange={e => onSortChange(e.target.value)} className="p-2 border rounded">
        <option value="title">Title A-Z</option>
        <option value="timeAsc">Shortest Time</option>
      </select>
    </div>
  );
}
