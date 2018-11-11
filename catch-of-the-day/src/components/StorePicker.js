import React, { Fragment } from 'react'

class StorePicker extends React.Component {
    render() {
        return (
            <Fragment>
                <h1>Store Selector</h1>
                <form className="store-selector">
                    <h2>Please Select a Store</h2>
                    <input type="text" required placeholder="Store Name" />
                    <button type="submit">Visit Store</button>
                </form>
            </Fragment>
        );
    }
}

export default StorePicker
