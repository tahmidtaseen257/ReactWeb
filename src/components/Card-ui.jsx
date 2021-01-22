import React from 'react';

export default function Cardui(props){
    return(
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={props.img} alt="blog" />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">{props.title}</h1>
            <h3 class="title-font text-lg font-medium text-white mb-3">Price: {props.prc}</h3>
            <p class="leading-relaxed mb-3">{props.des}</p>
            <div class="flex items-center flex-wrap ">
              <a class="btn btn-outline-primary text-blue-400 inline-flex items-center md:mb-2 lg:mb-0">Buy
              </a>
              &nbsp;
            <a class="btn btn-outline-primary text-blue-400 inline-flex items-center md:mb-2 lg:mb-0">Add To Cart
              </a>
             
            </div>
          </div>
        </div>
      </div>
    );
}