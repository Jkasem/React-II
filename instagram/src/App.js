import React, { Component } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar.js';
import { PostContainer } from './components/PostContainer/PostContainer.js';
import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Data: [],
    }
  }

  componentDidMount() {
    this.setState( {Data: dummyData} );
  }

    
  addComment = (event) => {
    const index = event.target.id;
    const newData = this.state.Data;
    newData[index].comments.push({username: "newuser", text: event.target.firstChild.value});
    this.setState({Data: newData});
}

  incrementValue = (index) => {
    const newData = this.state.Data;
    newData[index].likes += 1;
    this.setState({Data: newData});
}

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.Data.map(((data, index) => <PostContainer click={this.incrementValue} comment={this.addComment} data={data} i={index} key={index}/>))}
      </div>
    );
  }
}

export default App;
