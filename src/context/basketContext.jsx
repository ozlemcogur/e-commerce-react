import { createContext, useState } from "react";
import {toast} from "react-toastify"

export const BasketContext = createContext()
export function BasketProvider({ children }) {
    const [basket, setBasket] = useState([])
    const addToBasket = (product) => {
        const found = basket.find((i) => i.id === product.id)
        if (found) {
            const updated = { ...found, amount: found.amount + 1 }
            const newBasket = basket.map((i) => i.id === updated.id ? updated : i)
            setBasket(newBasket)
        } else {
            setBasket(basket.concat({ ...product, amount: 1 }))
        }
    }

    const removeFromBasket = (deleteId) => {
        const found = basket.find((i) => i.id === deleteId)
        if (found.amount > 1) {
            const updated = { ...found, amount: found.amount - 1 }
            const newBasket = basket.map((i) => i.id === updated.id ? updated : i)
            setBasket(newBasket)
        } else {
            const newBasket = basket.filter((i) => i.id !== deleteId)
            setBasket(newBasket)
            toast.error("Removed from cart")
        }
    }

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
            {children}
        </BasketContext.Provider>
    )
}