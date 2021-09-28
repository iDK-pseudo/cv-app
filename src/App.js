import React, {Component} from 'react';
import './Styles/main.css';
import Form from './Components/MainPage.js';
import DisplayCV from './Components/DisplayCV.js';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      contact: "",
      schoolName: "",
      schoolLocation: "",
      degree: "",
      major: "",
      schoolStartDate: "",
      schoolEndDate: "",
      company: "",
      title: "",
      jobLocation: "",
      jobStartDate: "",
      jobEndDate: "",
      submitted: false
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitHandler(event){
    event.preventDefault();
    this.setState({submitted:true});
  }

  handleChange(event){
    switch(event.target.id){
      case "name": this.setState({name: event.target.value}); break;
      case "email": this.setState({email: event.target.value}); break;
      case "contact": this.setState({contact: event.target.value}); break;
      case "school-name": this.setState({schoolName: event.target.value}); break;
      case "school-location": this.setState({schoolLocation: event.target.value}); break;
      case "degree": this.setState({degree: event.target.value}); break;
      case "major": this.setState({major: event.target.value}); break;
      case "school-start-date": this.setState({schoolStartDate: event.target.value}); break;
      case "school-end-date": this.setState({schoolEndDate: event.target.value}); break;
      case "company": this.setState({company: event.target.value}); break;
      case "title": this.setState({title: event.target.value}); break;
      case "job-location": this.setState({jobLocation: event.target.value}); break;
      case "job-start-date": this.setState({jobStartDate: event.target.value}); break;
      case "job-end-date": this.setState({jobEndDate: event.target.value}); break;
    }
  }

  render () {
    if(!this.state.submitted){
      return <Form parentThis={this}/>;
    }else{
      return <DisplayCV fields={this.state}/>;
    }
  }
}

export default App;