import React, { Fragment } from 'react'
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.value.value;

    this.props.history.push(`/store/${storeName}`);
  };

  render() {
      return (
          <Fragment>
              <h1>Store Selector</h1>
              <form className="store-selector" onSubmit={this.goToStore}>
                  <h2>Please Select a Store</h2>
                  <input ref={this.myInput}
                         type="text"
                         required
                         placeholder="Store Name"
                         defaultValue={getFunName()} />
                  <button type="submit">Visit Store</button>
              </form>
          </Fragment>
      );
  }
}

export default StorePicker
