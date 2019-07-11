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
    loaded: false,
    goods: [],
    filteredLength: 1
  };

  loadList = () => {
    this.setState({
      loaded: true,
      goods: [...goodsFromServer],
    });
  };

  reverseData = () => {
    this.setState({ goods: [...goodsFromServer].reverse() });
  };

  sortAlphabetically = () => {
    this.setState({ goods: [...goodsFromServer].sort() });
  };

  resetData = () => {
    this.setState({
      filteredLength: 1,
      goods: [...goodsFromServer]
    });
  };

  sortByLength = () => {
    this.setState({ goods: [...goodsFromServer].sort((a, b) => a.length - b.length) });
  };

  filerByLength = (event) => {
    this.setState({
      filteredLength: event.target.value,
      goods: [...goodsFromServer]
        .filter(good => (good.length >= event.target.value))
    });
  };

  render() {
    const { loaded, goods, filteredLength } = this.state;
    
    return (
      <div className="App">
        {
          loaded
            ? <div>
                <ListOfGoods goods={goods} />
                <button onClick={this.reverseData}>Reverse</button>
                <button onClick={this.sortAlphabetically}>Sort alphabetically</button>
                <button onClick={this.resetData}>Reset</button>
                <button onClick={this.sortByLength}>Sort by length</button>
                <select onChange={this.filerByLength} value={filteredLength}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
            : <button onClick={this.loadList}>Load</button> 
        }
      </div>
    );
  };

};

export default App;
