import React, { useEffect, useState } from 'react';
import { resources as data } from './data/resources';
import ResourceCard from './components/ResourceCard';
import Filters from './components/Filters';
import Sort from './components/Sort';

function App() {
  const [resources, setResources] = useState([]);
  const [filters, setFilters] = useState({ category: '', type: '' });
  const [sortKey, setSortKey] = useState('title');

  useEffect(() => {
    // simulate fetch
    setTimeout(() => setResources(data), 500);
  }, []);

  const toggleLike = id => {
    setResources(prev => prev.map(r => r.id === id ? { ...r, isLiked: !r.isLiked } : r));
  };

  const filtered = resources
    .filter(r => (filters.category ? r.category === filters.category : true))
    .filter(r => (filters.type ? r.type === filters.type : true));

  const sorted = [...filtered].sort((a, b) => {
    if (sortKey === 'title') return a.title.localeCompare(b.title);
    if (sortKey === 'timeAsc') {
      const tA = a.readTime ?? a.duration;
      const tB = b.readTime ?? b.duration;
      return tA - tB;
    }
    return 0;
  });

  const categories = [...new Set(data.map(r => r.category))];
  const types = [...new Set(data.map(r => r.type))];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Learning Resources Browser</h1>
      <Filters categories={categories} types={types} selected={filters} onFilterChange={(k, v) => setFilters(prev => ({ ...prev, [k]: v }))} />
      <Sort value={sortKey} onSortChange={setSortKey} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sorted.map(res => (
          <ResourceCard key={res.id} resource={res} toggleLike={toggleLike} />
        ))}
      </div>
    </div>
  );
}

export default App;

