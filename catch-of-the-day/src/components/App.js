import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
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

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
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
              <Order order={this.state.order}/>
              <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
          </div>
        );
    };
}

export default App;
