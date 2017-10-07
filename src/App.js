import React, { Component } from 'react';
import Header from './components/header';
import StudentListItem from './components/studentListItem';
import './App.css';

class App extends Component {
  
  // componentDidMount() {
  //   this.fetchData()
  // }

  // fetchData(){
  //   fetch('localhost:3000/api/students')
  // }
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container margin__top--sm">
          <div className="row">
            <StudentListItem />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
