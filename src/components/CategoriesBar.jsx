import React from 'react';
import { categories } from '../data/categories';

const CategoriesBar = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8 py-4 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`whitespace-nowrap font-semibold text-sm pb-3 transition-colors ${
                category.active
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesBar;