import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Pagination } from './pagination';

export const Data = () => {
  const API = 'https://dummyjson.com/products';
  const perPage = 10; 

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async (url) => {
    try {
      const res = await fetch(`${url}?limit=${perPage}&skip=${currentPage * perPage}`);
      const data = await res.json();
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / perPage));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(API);
  }, [currentPage]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Pagination pageCount={totalPages} onPageChange={handlePageClick} />
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  );
};
