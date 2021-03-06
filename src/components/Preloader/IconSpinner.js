import React from 'react';

const IconSpinner = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
    <path
      fill='#323232'
      opacity='.9'
      d='M20.2 5.17c-8.253 0-14.945 6.69-14.945 14.945 0 8.255 6.692 14.946 14.946 14.946S35.15 28.37 35.15 20.117c0-8.254-6.692-14.946-14.946-14.946zm0 26.58c-6.424 0-11.633-5.21-11.633-11.635S13.777 8.48 20.2 8.48c6.426 0 11.634 5.21 11.634 11.635 0 6.426-5.208 11.634-11.633 11.634z'
    />
    <path
      className='loaderPath'
      d='M26.013 10.047l1.654-2.866C25.47 5.91 22.924 5.17 20.2 5.17v3.31c2.12 0 4.1.577 5.813 1.567z'
      fill='#fff'
    />
  </svg>
);

export default IconSpinner;
