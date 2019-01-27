import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
    renderOrder = (key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';

      if (!isAvailable) {
        return (
          <li key={key}>
            Sorry, {fish ? fish.name : 'fish'} is no longer available
        </li>
        )
      }

      return (
        <li key={key}>
          {count} lbs {fish.name}

          {formatPrice(count * fish.price)}
        </li>
      );
    };

    render() {
        const orderIds = Object.keys(this.props.order);
        const totalPrice = orderIds.reduce((total, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if (isAvailable) {
                return total + (count * fish.price);
            }
            else {
                return total;
            }
      }, 0.0);

        return (
            <div className="order-wrap">
              <h2>Your Order!</h2>
              <div className="total">
                    Total: <strong>{formatPrice(totalPrice)}</strong>
              </div>
                <ul className='order'>
                  {orderIds.map(key => this.renderOrder(key))}
                </ul>
            </div>
        );
    }
}

export default Order
