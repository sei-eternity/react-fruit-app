import React from 'react';
import ListItem from './ListItem';


class FruitList extends React.Component {
  render() {
    const items = this.props.fruits.map(function(item, index) {
      return <ListItem name={item} key={index} />
    });

    return (
      <ul>
        {items}
      </ul>
    );
  }
}

export default FruitList;