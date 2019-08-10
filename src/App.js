import React from 'react';
import FruitList from './FruitList';
import FruitFilter from './FruitFilter';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // intialize the filter value to an empty string
      filterValue: '',
      fruitsToDisplay: props.fruits
    }
  }

  handleFilterChange = (event) => {
    const searchValue = event.target.value;

    this.setState(function(prevState, props) {
      
      const filteredFruitList = props.fruits.filter(function(fruit) {
        return fruit.toLowerCase().includes(searchValue.toLowerCase())
      });

      return {
        filterValue: searchValue,
        fruitsToDisplay: filteredFruitList
      };
    });
  }

  render() {
    return (
      <div>
        <FruitFilter 
          value={this.state.filterValue}
          onChange={this.handleFilterChange} />
        <FruitList fruits={this.state.fruitsToDisplay} />
      </div>
    );
  }
}

export default App;
