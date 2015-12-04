import React from 'react';

export default class CartItem extends React.Component {
    state = {
        qty: this.props.initialQty,
        total: 0
    };
    constructor(props) {
        super(props);
        //this.state = {
        //
        //};


    }

    componentWillMount() {
        this.recalculateTotal();
    }

    increaseQty() {
        this.setState({qty: this.state.qty + 1}, this.recalculateTotal);
    }

    decreaseQty() {
        let newQty = this.state.qty > 0 ? this.state.qty - 1 : 0;
        this.setState({qty: newQty}, this.recalculateTotal);
    }

    recalculateTotal() {
        this.setState({total: this.state.qty * this.props.price})
    }

    render() {
        return <article className="row">
            <figure className="text-center">
                <p>
                    <img src={this.props.image}/>
                </p>
                <figcaption>
                    <h2>{this.state.title}</h2>
                </figcaption>
            </figure>
            <p className="large-4 column text-center"><strong>Quantity: {this.state.qty}</strong></p>

            <p className="large-4 column text-center">
                <button onClick={this.increaseQty.bind(this)} className="button success">+</button>
                <button onClick={this.decreaseQty.bind(this)} className="button alert">-</button>
            </p>

            <p className="large-4 column text-center"><strong>Price per item:</strong> ${this.props.price}</p>

            <h3 className="large-12 column text-center">
                Total: ${this.state.total}
            </h3>

        </article>;
    }

}
CartItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    initialQty: React.PropTypes.number
};
CartItem.defaultProps = {
    title: 'Undefined Product',
    price: 100,
    initialQty: 0
};