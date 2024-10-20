// src/CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ categories, setSelectedCategory }) => {
  return (
    <div>
      <h2>Filter by Category</h2>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
