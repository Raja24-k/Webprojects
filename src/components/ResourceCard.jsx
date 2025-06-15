import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function ResourceCard({ resource, toggleLike }) {
  const { title, category, type, thumbnailUrl, readTime, duration, isLiked } = resource;
  const timeLabel = type === 'Video' ? `${duration} min` : `${readTime} min read`;

  return (
    <div className="card p-4 shadow rounded-lg flex flex-col">
      <img src={thumbnailUrl} alt={title} className="w-full h-32 object-cover rounded" />
      <h3 className="mt-2 font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{category} • {type}</p>
      <p className="text-sm text-gray-500">{timeLabel}</p>
      <button onClick={() => toggleLike(resource.id)} className="mt-auto self-end">
        {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400" />}
      </button>
    </div>
  );
}
