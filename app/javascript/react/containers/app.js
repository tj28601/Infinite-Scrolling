// import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ItemTile from '../components/ItemTile';

// const App = props => {
//
//   return(
//     <div>Boa noiteeeeasdfsdf</div>
//   )
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      dates: [],
      items: [],
    }
  }

  componentDidMount() {
    fetch('https://www.stellarbiotechnologies.com/media/press-releases/json')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(json => {
        this.setState({ items: json.news })
      })
  }

  render(){

    let dataObjects = this.state.items.map((item) =>{

      return(
        <ItemTile
          title={ item.title }
          published={ item.published }
          key={ item.id }
         />
      )

    })


    return(
      <div>{dataObjects}</div>
    )
  }
}


export default App;
