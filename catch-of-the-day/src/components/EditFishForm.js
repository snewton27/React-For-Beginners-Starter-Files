import React from 'react'
import { formatPrice } from '../helpers';

class EditFishForm extends React.Component {
  handleChange = (event) => {
    // event.currentTarget is the html element
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };

    this.props.updateFish(this.props.index ,updatedFish);
  };

  render() {
    const fish = this.props.fish;

    return (
      <div className="fish-edit" >
        <input type="text" name="name" onChange={this.handleChange} value={fish.name}/>
        <input type="text" name="price" onChange={this.handleChange} value={formatPrice(fish.price)}/>
        <select type="text" name="status" onChange={this.handleChange} value={fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={fish.desc}/>
        <input type="text" name="image" onChange={this.handleChange} value={fish.image}/>
      </div>
    )
  }
}

export default EditFishForm;
