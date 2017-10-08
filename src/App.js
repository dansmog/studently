import React, { Component } from 'react';
import Header from './components/header';
import StudentList from './components/studentList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      students: [],
      requestFailed: null,
      isLoading: false,
    }
  }
  
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("/api/students")
      .then( response => response.json())
      .then( data => this.setState({ students: data, isLoading: false }) )
      .catch(error => this.setState({ requestFailed: error, isLoading: false }));
  }


  renderStudents = () => {
    const {students, isLoading, requestFailed} = this.state;
    if(students.length === 0 && isLoading === true ){
      return (
        <div className="container">
          <div className="col-xs-12 text-center box-shadow margin__top-sm">
            <div style={{paddingTop: 100}}>
             <h4>Loading....</h4>
            </div>
          </div>
        </div>
      )
    }else if(students.length === 0 ){
      return (
        <div className="container">
          <div className="col-xs-12 text-center box-shadow margin__top-sm">
            <div style={{paddingTop: 100}}>
              <i className="icons icon-drawer" style={{fontSize: 50, color: "#8e44ad"}}></i>
              <h4>Student List is empty</h4>
            </div>
          </div>
        </div>
      )
    }else if(requestFailed){
      return <h4>{requestFailed}</h4>
    }else{
       return <StudentList students={this.state.students}/>
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        { this.renderStudents() }
      </div>
    );
  }
}

export default App;
