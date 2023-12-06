import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"

function Home() {
    const [product, setProduct] = useState([])

    useEffect(() => {
      fetch("https://fakestoreapi.com/products/")
      .then((res)=>res.json())
      .then((data)=>setProduct(data))
    }, [])
    console.log(product);
  return (
    <div className='page'><div className='cards'>

    {product
    .map((x) =>
       
        <ul className='card'>
            <li className='image'><img src={x.image} /><div className='hoverIcon'>

           <NavLink to={"/detail/"+x.id}> <i class="fa-regular fa-eye"></i></NavLink>

            <i class="fa-solid fa-basket-shopping"></i>   
            <i class="fa-regular fa-heart"></i>
                </div></li>
            <li className='name'>{x.title}</li>
            <li className='cost'>${x.price}.00 <span className='discount'>$35.00</span></li>
            
            
        </ul>
       )}
</div></div>
  )
}

export default Home