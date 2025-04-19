import React from 'react';
import { Link } from 'react-router-dom';
import { GoClock } from 'react-icons/go';

const Card = ({ item }) => {
  const categoryStyles = {
    Entrees: { backgroundColor: '#f0f5c4', color: '#59871f' },
    Breakfast: { backgroundColor: '#efedfa', color: '#3c3abf' },
    Lunch: { backgroundColor: '#e5f7f3', color: '#1f8787' },
    Desserts: { backgroundColor: '#e8f5fa', color: '#397a9e' },
    Sides: { backgroundColor: '#feefc9', color: '#d16400' },
    Drinks: { backgroundColor: '#ffeae3', color: '#f0493e' },
    default: { backgroundColor: '#fff', color: '#000' }
  };

  const getCategoryStyle = (category) => {
    return categoryStyles[category] || categoryStyles.default;
  };

  const categoryStyle = getCategoryStyle(item?.category);

  return (
    <div className='container mx-auto flex justify-center md:justify-start'>
      <div className='max-w-sm'>
        <div className='bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg'>

          {/* Image with fallback */}
          <img
            src={item?.image || '/images/fallback.jpg'}
            alt={item?.name}
            className='rounded-t-lg w-full h-48 object-cover'
            onError={(e) => { e.target.src = '/images/fallback.jpg'; }}
          />

          <div className='py-6 px-5 rounded-lg bg-white'>
            <div>
              <Link to={`/items/${item._id}`}>
                <h1 className='text-gray-700 font-bold text-2xl mb-8 hover:text-gray-900 hover:cursor-pointer'>
                  {item?.name}
                </h1>
              </Link>

              {/* Category and timing */}
              <div className='flex justify-between items-center flex-wrap'>
                <button
                  className='mt-2 py-2 px-4 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300'
                  style={{
                    backgroundColor: categoryStyle.backgroundColor,
                    color: categoryStyle.color,
                  }}
                >
                  {item?.category}
                </button>

                <div className='flex items-center py-2 mt-2'>
                  <GoClock />
                  <span className='ml-1'>
                    {item?.more?.prep_time || 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Difficulty badge */}
          <div className='absolute top-2 right-2 py-2 px-4 bg-white rounded-lg shadow'>
            <span>{item?.more?.difficulty || 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
