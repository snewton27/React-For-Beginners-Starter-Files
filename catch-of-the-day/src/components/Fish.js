import React from 'react'
import { formatPrice } from '../helpers'

class Fish extends React.Component {
  render() {
    const { fishDetails } = this.props;
    const isAvailable = fishDetails.status === "available";
    return(
      <li className="menu-fish">
        <img src={fishDetails.image} alt={fishDetails.name} />
        <h3 className="fish-name">
          {fishDetails.name}
          <span className="price">{formatPrice(fishDetails.price)}</span>
        </h3>
        <p>{fishDetails.desc}</p>
        <button
          onClick={() => {this.props.addFishToOrder(this.props.index)}}
          disabled={!isAvailable}>
            {isAvailable ? 'Add To Cart' : 'Sold Out'}
        </button>
      </li>
    );
  };
}

export default Fish
