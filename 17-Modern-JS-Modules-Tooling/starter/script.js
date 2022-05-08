// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price, tq);
// console.log('Importing module');
// addToCart('bread', 5);

// import * as ShoppingCart from './shoppingCart.js'

// ShoppingCart.addToCart('bread', 5);

// import add, {cart} from './shoppingCart.js'
// add('pizza', 2)
// add('POOP', 22)
// add('water', 25)

// // console.log(cart)

// // console.log('asdjfk');
// // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// // const data = await res.json();
// // console.log(data);
// // console.log('asdjfk');

// const getLastPost = async function(){
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const data = await res.json();

//     return {titles: data.at(-1).title, text: data.at(-1).body}
// }
// const lastPost = getLastPost()
// console.log(lastPost);

// // lastPost.then(last => console.log(last))

// const lastPost2 = await getLastPost()
// console.log(lastPost2);

const ShopingCart2 = (function () {
    const cart = [];
    const shoppingCost = 10
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
    };

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    }
})()

ShopingCart2.addToCart('apple', 3)