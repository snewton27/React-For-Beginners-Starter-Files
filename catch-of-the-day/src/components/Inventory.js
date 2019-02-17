import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import PropTypes from 'prop-types';

class Inventory extends React.Component {
    static propTypes = {
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        addFish: PropTypes.func,
        fishes: PropTypes.array,
        loadSampleFishes: PropTypes.func,
    };

    render() {
        return (
          <div className="inventory">
            <h2>Inventory</h2>
            {Object.keys(this.props.fishes).map(key => {
              return <EditFishForm
                updateFish={this.props.updateFish}
                deleteFish={this.props.deleteFish}
                fish={this.props.fishes[key]}
                key={key}
                index={key}
                />
            })}
            <AddFishForm addFish={this.props.addFish}/>
            <button onClick={this.props.loadSampleFishes}>Add Sample Fishes</button>
          </div>
        );
    }
}

export default Inventory
