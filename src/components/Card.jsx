import React from 'react';
import Cardui from './Card-ui';

export default function Card (){
    return(
    <>
    <hr/>
 <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
   <h1>Mens Wearable</h1>

    <div class="flex flex-wrap -m-4">
    <Cardui des = "The Rolex Oyster Perpetual Date GMT Master is part of the Rolex Professional Watch Collection. Designed in collaboration with Pan American Airways for use by their pilots and navigators, it was launched in 1954." title = "Men's Watch(Rolex)" prc = "16,500 USD" img = "https://images.pexels.com/photos/47856/rolex-wrist-watch-clock-gmt-47856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <Cardui des = "Gucci is a luxury fashion house based in Florence, Italy. Its product lines include handbags, ready-to-wear, shoes and accessories, makeup, fragrances, and home decoration" title = "T-shirt for men (GUCCI)" prc = "550 USD" img ="https://media.gucci.com/style/White_South_0_160_470x470/1599567304/616036_XJCXX_1082_001_100_0000_Light.jpg" />
    <Cardui des = "Just as you'd expect from Bonobos, the brand offers one of the most comfortable jeans on the market, available in every wash you could imagine, fits that range from tailored to straight, and they even come in the full range of sizes for every man to find his perfect match" title = "Pants for men (Bonobos)" prc = "198 USD" img = "https://bonobos-prod-s3.imgix.net/products/206460/original/DENIM_DENIM-JEAN_27718-BOY19_2_hover.jpg?1611094892=&auto=format%2Ccompress&q=75&fit=clip&cs=srgb&ixlib=react-8.6.1&w=352&dpr=1" />
    </div>

<h1>Womens Wearable</h1>
    <div class="flex flex-wrap -m-4">
    <Cardui des = "Jewels Galaxy is primarily into designer and imitation jewellery, one of the most favorite accessories for women who love to carry unique designed jewellery, while undergoing make-ups to transform their looks" title = "Women's Bracelate(Jewels Galaxy)" prc = "98 USD" img ="https://images.pexels.com/photos/3641059/pexels-photo-3641059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <Cardui des = "Crocs, Inc. is an American company based in Niwot, Colorado that manufactures and markets the Crocs brand of foam clogs" title = "Shoes For Womens (Crocs)" prc = "96.99 USD" img ="https://images.crocs.com/is/image/Crocs/thumbnail/Wheat-Womens-AllCast-II-Luxe-Boot-_203431_209_IS.jpg" />
    <Cardui des = "The Tiffany Yellow Diamond is one of the largest yellow diamonds ever discovered. Its carat weight was originally 287.42 carats in the rough when discovered in 1878 in the Kimberley mine in South Africa." title = "Ring For Womens (Tiffany)" prc = "39,400 USD" img = "https://thefashionfolio.com/wp-content/uploads/2019/09/1-620x420.jpg" />
    </div>

<h1>Tech and Appliances</h1>
   <div class="flex flex-wrap -m-4">
    <Cardui des = "Samsung The Wall is a next-generation display, delivering previously unattainable image presentation through Micro LED technology." title = "Samsung The Wall 8k 146''" prc = "20,000 USD" img = "https://cdn.mos.cms.futurecdn.net/3C8u4pysCpsAA8SebLrVT5.jpg" />
    <Cardui des = "If you're looking for a side-by-side refrigerator with plenty of capacity to store groceries for a family and ample freezer space, plus benefits like an external ice and water dispenser, the GE Side-by-Side GSS25GSHSS is a top-rated option. It ranks No. 3 in our Best Refrigerators of 2021 rating" title = "GE profile series (refrigerator)" prc = "23,200 USD" img = "https://images.homedepot-static.com/productImages/f002ecd5-81d0-4bd7-a171-058172a652de/svn/stainless-steel-ge-side-by-side-refrigerators-pse25kshss-64_1000.jpg" />
    <Cardui des = "1. LG V9 F4V909BTS. It might be a touch more expensive than many washing machines but the LG V9 F4V909BTS is a high-quality washing machine that more than deserves its price. ... As well as being efficient, this machine's direct drive drum means that it's also one of the quietest that we've tested, too." title = "LG WM4000HWA (WashingMachine)" prc = "10,900 USD" img = "https://www.lg.com/us/images/washers/md07513842/gallery/Desktop-01.jpg" />
    </div>

<h1>Furnitures and Decorations</h1>
    <div class="flex flex-wrap -m-4">
    <Cardui des = "ARTEMEST is the leading online marketplace for the finest handmade décor. Our mission is to re-establish the authentic concept of luxury based on heritage, uncompromised quality and craftsmanship." title = "Wardrobe(Artemest)" prc = "3800 USD" img = "https://preview.free3d.com/img/2019/12/2273139636417070921/tiipci2g-900.jpg" />
    <Cardui des = "Edra was born in 1987 in Tuscany. ... Edra creates exclusive and timeless products since always." title = "Dining Table(Edra)" prc = "2500 USD" img = "https://www.switchmodern.com/images/uploads/edra-brasilia-dining-table-fernando-e-humberto-campana-1400x800-4.jpg" />
    <Cardui des = "John Lewis is described by fans as: Good quality, Good customer service, Excellent customer service, Trustworthy and Good Service." title = "Sofa(John Lewis)" prc = "2701 USD" img = "https://johnlewis.scene7.com/is/image/JohnLewisRender?src=ir(JohnLewisRender/charlotte_sofabed?/&obj=main/body&src=236538138&obj=main/feet&src=light&sharpen=1)$rsp-pdp-port-640$" />
    </div>

  </div>
</section>
</>
    );
}