import React, { useContext } from 'react';
import { BasketContext } from '../context/basketContext';

const Checkout = () => {
    const context = useContext(BasketContext);
    const total = context.basket.reduce((total,i)=>total+ (i.amount*i.price),0)
  
    return (
        <div>
            {context.basket.length === 0 && <h3 className='text-center my-5'>Kindly add items to your shopping cart first</h3>}
            {context.basket.length > 0 && (
                <div>
                    <h3 className='mx-4'>Total: ${total.toFixed(2)}</h3>
                    {context.basket?.map((i) => (
                        <div className='d-flex justify-content-between align-items-center p-3 gap-3' key={i.id}>
                            <img className='object-fit-contain rounded' src={i.image} height={120} width={80} alt={i.title} />
                            <h4>{i.title.slice(0, 15)}</h4>
                            <h3>${(i.price * i.amount).toFixed(2)}</h3>
                            <p>amount:{i.amount}</p>
                            <div>
                                <button onClick={() => context.addToBasket(i)} className='bg-dark text-light'>+</button>
                                <button onClick={() => context.removeFromBasket(i.id)} className='bg-dark text-light'>-</button>
                            </div>
                        </div>
                    ))}
                   
                </div>
            )}
        </div>
    )
}

export default Checkout;

