import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import base from '../base';
import sampleFishes from '../sample-fishes';

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // 1. Make copy of existing state
    const fishes = { ...this.state.fishes };

    // 2. Modify copy of state
    fishes[`fish-${Date.now()}`] = fish;

    // 3. Overwrite original state with new state
    this.setState({
      fishes
    });
  };

  updateFish = (key, updatedFish) => {
    // Take a copy of current state
    const fishes = { ...this.state.fishes };

    // Modify copy of fishes
    fishes[key] = updatedFish;

    // Set state to be our modified copy
    this.setState({
      fishes
    });
  };

  deleteFish = (key) => {
    const fishes = { ...this.state.fishes };

    fishes[key] = null;

    this.setState({
      fishes
    });
  }

  addFishToOrder = key => {
    // 1. Make copy of existing state
    const order = { ...this.state.order };

    // 2. Modify copy of state to add new fish or increment counter
    order[key] = order[key] + 1 || 1;

    // 3. Overwrite original state with new state
    this.setState({
      order
    });
  };

  deleteFishFromOrder = (key) => {
    const order = { ...this.state.order };

    delete order[key];

    this.setState({
      order
    });
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  };

  async componentDidMount() {
    const { params } = this.props.match;

    this.ref = await base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    // Reinstate order in local storage on refresh
    const localStorageRef = localStorage.getItem(`order-${params.storeId}`);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef)});
    }
  };

  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(`order-${params.storeId}`, JSON.stringify(this.state.order));
  };

  componentWillUnmount() {
    base.removeBinding(this.ref);
  };

    render() {
        return (
          <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Seafood Market"/>
              <ul className="fishes">
                {Object.keys(this.state.fishes).map(key => {
                  return(
                    <Fish key={key} index={key} addFishToOrder={this.addFishToOrder} fishDetails={this.state.fishes[key]} />
                  )
                })}
              </ul>
            </div>
              <Order deleteFishFromOrder={this.deleteFishFromOrder} order={this.state.order} fishes={this.state.fishes}/>
              <Inventory
                  addFish={this.addFish}
                  updateFish={this.updateFish}
                  deleteFish={this.deleteFish}
                  fishes={this.state.fishes}
                  loadSampleFishes={this.loadSampleFishes}
                  storeId={this.props.match.params.storeId}/>
              </div>
        );
    };
}

export default App;
