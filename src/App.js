import React from 'react';

class App extends React.PureComponent {

  renderListWithoutPrototype = (object) => {
    const items = [];
      Object.keys(object).forEach((record, index) => {
        if(typeof(object[record]) === 'object') {
          this.renderListWithoutPrototype(record);
        } else {
          if(typeof(object[record]) === 'string' || typeof(object[record]) === 'number' ) {
            items.push(<div key={index}>{`${record} => ${object[record] ? object[record] : 'Value not exist'}`}</div>)
          }
        }
      })
    return items || [];
  }

  renderListWithPrototype = (object) => {
    const items = [];
      Object.keys(Object.getPrototypeOf(object)).forEach((record, index) => {
        if(typeof(object[record]) === 'object') {
          this.renderListWithPrototype(record);
        } else {
          if(typeof(object[record]) === 'string' || typeof(object[record]) === 'number' ) {
            items.push(<div key={index}>{`${record} => ${object[record] ? object[record] : 'Value not exist'}`}</div>)
          }
        }
      })
    return items || [];
  }

  render() {
      
    return (
      <div style={{ fontSize : '15px', marginLeft : '50px', fontFamily : 'calibri'}}>
        <h3>Window Navigator Object Common Properties</h3>
        {this.renderListWithPrototype(window.navigator)}
        <h3>Window History Object Common Properties</h3>
        {this.renderListWithPrototype(window.history)}
        <h3>Window Location Object Common Properties</h3>
        {this.renderListWithoutPrototype(window.location)}
        <h3>Window Screen Object Common Properties</h3>
        {this.renderListWithPrototype(window.screen)}
        <h3>Window Frames Object Common Properties</h3>
        {this.renderListWithoutPrototype(window.frames)}
      </div>
    );
  }
  
}

export default App;
