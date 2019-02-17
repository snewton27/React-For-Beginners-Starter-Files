import React from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

class Order extends React.Component {
    static propTypes = {
      fishes: PropTypes.array,
      order: PropTypes.array,
    };

    renderOrder = (key) => {
      const fish = this.props.fishes[key];
      const transitionOptions = {
        classNames: "order",
        key,
        enter: 500,
        exit: 500
      };

      if (!fish) {
        return null;
      }

      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';

      if (!isAvailable) {
        return (
          <CSSTransition {...transitionOptions}>
            <li key={key}>
              Sorry, {fish ? fish.name : 'fish'} is no longer available
            </li>
          </CSSTransition>
        )
      }

      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            <span>
              <TransitionGroup component="span" className="count">
                <CSSTransition classNames="count" key={count} timeout={{ enter: 500, exit: 500 }}>
                  <span>{count}</span>
                </CSSTransition>
              </TransitionGroup>
              lbs {fish.name} {formatPrice(count * fish.price)}
              <button onClick={() => this.props.deleteFishFromOrder(key)}>&times;</button>
              </span>
          </li>
        </CSSTransition>
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
                <TransitionGroup component='ul' className='order'>
                  {orderIds.map(key => this.renderOrder(key))}
                </TransitionGroup>
            </div>
        );
    }
}

export default Order
