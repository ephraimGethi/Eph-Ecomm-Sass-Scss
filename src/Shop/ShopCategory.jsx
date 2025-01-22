import React from 'react'
import { data } from '../products'
const ShopCategory = ({filterItem,setItem,menuItems,setProducts,selectedCategory,setSelectedCategory}) => {
  return (
   <>
   <div className="widget-header">
    <h5 className="ms-2">All Categories</h5>
   </div>
   <div>
    <button onClick={()=>{setProducts(data);
    setSelectedCategory("All")
    }} className={`m-2 ${selectedCategory==='All' ?"bg-warning":""}`}>All</button>
    {
      menuItems.map((menu,id)=>{
        return(
          <button className={`m-2 ${selectedCategory===menu ?"bg-warning":""}`} key={id} 
          onClick={()=>{filterItem(menu)}}>{menu}</button>
        )
      })
    }
   </div>
   </>
  )
}

export default ShopCategory