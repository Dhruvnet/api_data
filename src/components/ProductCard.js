import 'tailwindcss/tailwind.css';
import React, { useState, useEffect } from 'react'

const ProductCard = ({ product }) => {

  const [activeImg, setActiveImage] = useState('');
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  useEffect(() => {
    setActiveImage(product.thumbnail);
  }, [product.thumbnail]);


  const renderRatingStars = (rating) => {
    const maxRating = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = maxRating - fullStars - (halfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-yellow-500">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
        </svg>

      );
    }

    if (halfStar) {
      stars.push(
        <svg
          key="half-star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-yellow-500"
        >
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />

        </svg>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-star-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-gray-400"
        >
          <path d="M12 2l1.495 4.722h4.702l-3.792 2.76 1.478 4.762-3.84-2.813-3.84 2.813 1.477-4.762-3.792-2.76h4.702z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="md:container md:mx-auto shadow-2xl rounded-3xl m-4 md:m-20">
      <div className="max-w-7xl mx-auto p-4 md:p-8 font-serif filter">
        <div className="flex flex-col gap-4 lg:flex-row gap-4 lg:items-left">
          <div className="flex flex-col gap-4 lg:w-2/4">
            <img
              src={activeImg}
              alt=""
              className="w-full h-48 md:h-full aspect-video object-contain cursor-pointer"
              onClick={() => setIsImageEnlarged(true)}
            />
            <div className="flex overflow-x-scroll md:overflow-x-auto">
              {product.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={imgIndex}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer mx-1"
                  onClick={() => setActiveImage(image)}
                />
              ))}
            </div>
          </div>
          <div class="md:flex-1 px-2 md:px-4">
            <p className="inline-block rounded-lg bg-indigo-600 font-extrabold text-white px-1">{product.category}</p>
            <p class="mb-2 leading-tight tracking-tight font-extrabold text-xl md:text-3xl mt-4 md:mt-8">{product.title}</p>
            <p class="mb-2 leading-tight tracking-tight ">{product.description}</p>
            <p class="text-gray-500 text-sm">By <a href="#" class="text-indigo-600 hover:underline">{product.brand}</a></p>
            <div class="flex items-center space-x-2 my-2 md:my-4">
              <div>
                <div class="rounded-lg bg-gray-100 flex py-1 px-2 md:py-2 md:px-3">
                  <span class="text-indigo-500 mr-1 mt-0.5 md:mt-1">$</span>
                  <span class="font-bold text-indigo-600 text-xl md:text-3xl">{product.price}</span>
                </div>
              </div>
              <div class="flex-1">
                <p class="text-green-500 text-base md:text-xl font-semibold">Save {product.discountPercentage}%</p>
                <p class="text-gray-400 text-xs md:text-sm">Inclusive of all Taxes.</p>
              </div>
            </div>
            <div className="flex items-center space-x-1 my-2 md:my-4 text-base md:text-xl">
              {renderRatingStars(product.rating)}
              <p>{product.rating}</p>
            </div>
            <div class="flex py-2 space-x-2">
              <div class="relative">
                <div class="text-center left-0 pt-1 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
                <select class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-3 pr-6 h-10 md:h-14 flex items-end pb-0.5">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-400 absolute right-0 bottom-0 mb-1 md:mb-2 mr-1 md:mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
              <button type="button" class="h-10 md:h-14 px-4 md:px-6 py-1.5 md:py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default ProductCard;



{/* 
        <p>
          {product.images.map((image, imgIndex) => (
            <img
              key={imgIndex}
              src={image}
              alt={imgIndex}
              className="product-image"
            />
          ))}
        </p> */}

{/* <p>
          <img
            src={product.thumbnail}
            alt={`Thumbnail for ${product.name}`}
            className="thumbnail-image"
          />
        </p> */}