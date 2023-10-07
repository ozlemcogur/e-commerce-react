import React from 'react';
import { useContext } from 'react';
import { BasketContext } from '../context/basketContext';
import { toast } from 'react-toastify';


const Card = ({ item }) => {
    const context = useContext(BasketContext)
    const showToast=()=>{
        toast.info("Product added")
    }
    return (
        <div className='card py-2' style={{ width: "250px" }}>
            <div className='d-flex justify-content-center'>
                <img src={item.image} height={120} className='object-fit-contain' />
            </div>
            <div className='card-body d-flex flex-column justify-content-between'>
                <h4>{item.title.slice(0, 30) + "..."}</h4>
                <p className='text-success'>${item.price}</p>
                <p>{item.category}</p>
                <button onClick={() => {  
                    context.addToBasket(item)
                    showToast() }}
                    
                    className='w-100 bg-dark text-white'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card
