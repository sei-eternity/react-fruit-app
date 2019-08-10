import React from 'react';

class FruitFilter extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="fruit-filter">
          Filter these Fruits: 
        </label>
        <input type="text"
               value={this.props.value}
               onChange={this.props.onChange}
               name="fruit-filter" />
      </div>
    );
  }
}

export default FruitFilter;