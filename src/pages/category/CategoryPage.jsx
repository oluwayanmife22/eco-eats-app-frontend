import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryWrapper from './CategoryWrapper';
import axios from 'axios';
import Card from '../../components/Card';

const CategoryPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      if (!category) {
        setError('');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null); // clear previous errors
        const response = await axios.get(`http://localhost:5000/api/categories/${category}`);
        setItems(response.data);
      } catch (error) {
        setError(error.response?.data?.message || 'Error loading category');
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [category]);

  return (
    <div className='px-6 lg:py-12 py-20'>
      <h1 className='text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize'>
        {category || ''}
      </h1>

      <CategoryWrapper />

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {items.map(item => (
            <Card item={item} key={item._id || item.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryPage;
