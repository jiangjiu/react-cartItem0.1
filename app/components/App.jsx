import React from 'react';
import CartItem from './CartItem.jsx';
require('./App.css');

const order = {
    title: 'Fresh fruits package',
    image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
    initialQty: 3,
    price: 8
};

export default class App extends React.Component {
    render() {
        return <CartItem title={order.title}
                         image={order.image}
                         initialQty={order.initialQty}
                         price={order.price}/>;

    }

}





