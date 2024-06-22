import React from 'react';
  
  const Utils = () =>  {
	return (
	  <div>
	  </div>
	);
  }
  
  export default Utils;
  export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}