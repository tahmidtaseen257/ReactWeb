import React from 'react';
import '../styles/Hi.css';
import down from '../image/hi.svg';

export default function Hi(){
    return (
<section className ="text-gray-400 bg-gray-900 body-font">
  <div className ="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className ="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className ="img" alt="hero" src = {down} />
    </div>
    <div className ="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className ="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"><i className = "bi bi-bag" ></i> ShopGO
        <br className ="hidden lg:inline-block" />
      </h1>
      <p className ="mb-8 leading-relaxed">A Place To Find Everything ...!
      &nbsp;
      <span>Our Pleasure is in your trust </span>
      </p>
      <div className ="flex justify-center">
        
      </div>
    </div>
  </div>
</section>
);
}