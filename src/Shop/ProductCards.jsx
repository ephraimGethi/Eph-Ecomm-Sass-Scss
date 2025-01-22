import React from 'react'
import { data } from '../products'
import { Link } from 'react-router-dom'
import Ratting from '../components/Ratting'

const ProductCards = ({gridList,products}) => {
   console.log(data)
  return (
    <div className={`shop-product-wrap row justify-content-center ${gridList ? "grid" :"list"}`}>
        {
            products.map((product,i)=>(
                <div key={i} className='col-lg-4 col-md-6 col-12'>
                    <div className="product-item">
                        <div className="product-thumb">
                            <div className="pro-thumb">
                                <img src={product.img} alt="" />
                            </div>
                            <div className='product-action-link'>
                                <Link to={`/shop`}><i className="icofont-eye"></i></Link>
                                <a href="#">
                                    <i className="icofont-heart"></i>
                                </a>
                                <Link to='/shop'><i className="icofont-cart-alt"></i></Link>
                            </div>
                        </div>
                        <div className="product-content">
                            <h5><Link to={`/shop`}>{product.name}</Link></h5>
                            <p className='productRating'>
                                <Ratting/>
                            </p>
                            <h6>Ksh. {product.price}</h6>
                        </div>
                    </div>
                    <div className="product-list-item">
                        <div className="product-thumb">
                            <div className="pro-thumb">
                                <img src={product.img} alt="" />
                            </div>
                            <div className='product-action-link'>
                                <Link to={`/shop`}><i className="icofont-eye"></i></Link>
                                <a href="#">
                                    <i className="icofont-heart"></i>
                                </a>
                                <Link to='/shop'><i className="icofont-cart-alt"></i></Link>
                            </div>
                        </div>
                        <div className="product-content">
                            <h5><Link to={`/shop`}>{product.name}</Link></h5>
                            <p className='productRating'>
                                <Ratting/>
                            </p>
                            <h6>Ksh. {product.price}</h6>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ProductCards