import React from 'react';
import ListOfGoods from './ListOfGoods';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    loaded: false
  };

  loadList = () => {
    this.setState({ loaded: true });
  };

  render() {
    return (
      <div className="App">
        {
          this.state.loaded
            ? <ListOfGoods goods={goodsFromServer} />
            : <button onClick={this.loadList}>Load</button> 
        }
      </div>
    );
  };

};

export default App;
