import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async() => {
    //get products data
    const productsData = await fetch('http://localhost:5000/products');
    const {products} = await productsData.json();
    
    //get cart
    const saveCart = getStoredCart();
    const initialCart = [];
    // console.log(products)
    // console.log("save cart", saveCart);
    for(const id in saveCart){
        const addedProduct = products.find(product => product._id === id)
        // console.log(id, addedProduct)
        if(addedProduct){
            const quantity = saveCart[id]
            // console.log(id, quantity)
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return {products: products, initialCart: initialCart};
}