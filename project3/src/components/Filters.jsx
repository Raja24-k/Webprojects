import React from 'react';

export default function Filters({ categories, types, selected, onFilterChange }) {
  return (
    <div className="flex space-x-4 mb-4">
      <select value={selected.category} onChange={e => onFilterChange('category', e.target.value)} className="p-2 border rounded">
        <option value="">All Categories</option>
        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select>
      <select value={selected.type} onChange={e => onFilterChange('type', e.target.value)} className="p-2 border rounded">
        <option value="">All Types</option>
        {types.map(type => <option key={type} value={type}>{type}</option>)}
      </select>
    </div>
  );
}
