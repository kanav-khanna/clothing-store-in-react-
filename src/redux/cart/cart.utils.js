
export const addItemToCart = (cartItem, cartItemToAdd) =>{
    const existingCartItem = cartItem.find(
        cartItem => cartItem.id = cartItemToAdd.id
        ); 

        //return cartItem.map()  will return us a new array
        //we need to return a new array as react only rerenders when their is a new obj
        if(existingCartItem){
            return cartItem.map(cartItem => 
                cartItem.id = cartItemToAdd.id
                    ?{...cartItem,quantity:cartItem.quantity+1}
                    :  cartItem 
                ) 
        }
        //here we can see some sasti programming lol
        return [...cartItem,{ ...cartItemToAdd, quantity: 1}];
};