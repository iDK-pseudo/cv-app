import React, {Component} from 'react';
import './Styles/main.css';

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
      jobEndDate: ""
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitHandler(event){
    event.preventDefault();
    console.log(this.state);
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
    return (
      <div>
        <h1> Resume </h1>
        <form onSubmit={this.submitHandler}>
          <fieldset>
            <legend> General Information </legend>
            <label for="name"> Name </label> 
            <input type="text" id="name" onChange={this.handleChange}/>
            <label for="email"> Email </label> 
            <input type="email" id="email" onChange={this.handleChange}/>
            <label for="contact"> Contact </label> 
            <input type="text" id="contact" onChange={this.handleChange}/>
          </fieldset>
          <fieldset>
            <legend> Educational Experience </legend>
              <label for="school-name"> School Name </label> 
              <input type="text" id="school-name" onChange={this.handleChange}/>
              <label for="school-location"> School Location </label> 
              <input type="text" id="school-location" onChange={this.handleChange}/>
              <label for="degree"> Degree </label> 
              <input type="text" id="degree" onChange={this.handleChange}/>
              <label for="major"> Major </label> 
              <input type="text" id="major" onChange={this.handleChange}/>
              <label for="school-start-date"> Start Date </label> 
              <input type="date" id="school-start-date" onChange={this.handleChange}/>
              <label for="school-end-date"> End Date </label> 
              <input type="date" id="school-end-date" onChange={this.handleChange}/>
          </fieldset>
          <fieldset>
            <legend> Work Experience </legend>
            <label for="company"> Company </label>
            <input type="text" id="company" onChange={this.handleChange}/>
            <label for="title"> Job Title </label>
            <input type="text" id="title" onChange={this.handleChange}/>
            <label for="job-location"> Job location </label>
            <input type="text" id="job-location" onChange={this.handleChange}/>
            <label for="job-start-date"> Start Date </label> 
            <input type="date" id="job-start-date" onChange={this.handleChange}/>
            <label for="job-end-date"> End Date </label> 
            <input type="date" id="job-end-date" onChange={this.handleChange}/>
          </fieldset>
          <button type="submit"> Done </button>
        </form>
      </div>
    );
  }
}

export default App;