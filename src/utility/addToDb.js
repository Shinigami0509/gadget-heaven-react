import { toast } from "react-toastify"

const getStoredCart = () => {
    const storedListStr = localStorage.getItem('cart-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList
    } else {
        return []
    }
}
const addtoStoredCart = (id) => {
    const storedList = getStoredCart()
    if (storedList.includes(id)) {
        console.log(id, 'Already exists in the Cart list')
    } else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('cart-list', storedListStr)
        toast('This item is added to your cart')
    }
}

const updateCart = (id) => {
    const storedList = getStoredCart()
    const updateCart = storedList.filter(p => p !== id)
    localStorage.setItem('cart-list', JSON.stringify(updateCart))
    // console.log(updateCart)
}



const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList
    } else {
        return []
    }
}
const addtoStoredWishList = (id) => {
    const storedList = getStoredWishList()
    if (storedList.includes(id)) {
        console.log(id, 'Already exists in the wish list')
    } else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list', storedListStr)
        toast('This item is added to your wish list')
    }
}



export { updateCart, addtoStoredCart, addtoStoredWishList, getStoredCart, getStoredWishList }