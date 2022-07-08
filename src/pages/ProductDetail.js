// import {useParams} from 'react-router-dom';

// function ProductDetail() {
//     const params = useParams ();
//     // console.log(params);
//   return (
//     <div>
//     <p>ProductDetail page </p>
//     <p>{params.productId}</p>

//     </div>
//   )
// }

// export default ProductDetail;

import React from 'react';
 import { useParams } from 'react-router-dom';

 const ProductDetail = () => {
   const params = useParams ();
   console.log(params.productId);

   return (
    <div>
        <h1> detail page </h1>
        <p>{params.productId}</p>
    </div>
   );
 }
export default ProductDetail;