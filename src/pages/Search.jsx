import React, { useEffect } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import {useParams} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const Search = () => {
  const searchText =useParams();
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const queryParam = params.get('query');
      if (queryParam) {
        setQuery(queryParam);
      }

    }, [])

    useEffect(() => {
      const fetchItems =async () => {
        setLoading(true);
        try{
          const response = await axios.get(`https://eco-eats-app-backend.vercel.app/api/items`, {
            params: {q: query}
          });
          setResults(response.data);

        } catch (err) {
          setError(err.message)
        } finally {
          setLoading(false);
        }
      }
      fetchItems();
    },[query]);
    const handleSearch = (e) => {
      setQuery(e.target.value);
    }
console.log(results)


  
  return (
    <div className='px-6 lg:px-12 py-20'>
      <h1 className='text-center text-3xl py-10  font-semibold text-secondary sm:text-6xl sm:leading-relaxed' >Search</h1>
      <div className='bg-white  md:max-w-3xl mx-auto p-4 rounded relative flex items-center'>
        
               
                <div className='flex items-center'>
  <IoSearchOutline className='w-100 h-5 mr-2 text-neutral-300' />
  <input
    value={query}
    onChange={handleSearch}
    className='outline-none w-full placeholder:text-[#1b2629]'
    name='query'
    type='search'
    placeholder='search for a recipe'
    id='search'
    required
  />
</div>
              
      </div>




{loading && <div>Loading.....</div>}
{error && <div> Unknown Error Happens....</div>}

<ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
{
  results && results?.map((item) => (
    <Card item={item} key={item._id} ></Card>
  ))
}
</ul>

    </div>
  )
}

export default Search
