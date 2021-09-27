import './Styles/main.css'

function App() {
  return (
    <div>
       <h1> Resume </h1>
      <form>
        <fieldset>
          <legend> General Information </legend>
          <label for="name"> Name </label> 
          <input type="text" id="name"/>
          <label for="email"> Email </label> 
          <input type="email" id="email"/>
          <label for="contact"> Contact </label> 
          <input type="text" id="contact"/>
        </fieldset>
        <fieldset>
          <legend> Educational Experience </legend>
            <label for="school-name"> School Name </label> 
            <input type="text" id="school-name"/>
            <label for="location"> School Location </label> 
            <input type="text" id="location"/>
            <label for="degree"> Degree </label> 
            <input type="text" id="degree"/>
            <label for="major"> Major </label> 
            <input type="text" id="major"/>
            <label for="start-date"> Start Date </label> 
            <input type="date" id="start-date"/>
            <label for="end-date"> End Date </label> 
            <input type="date" id="end-date"/>
        </fieldset>
        <fieldset>
          <legend> Work Experience </legend>
          <label for="company"> Company </label>
          <input type="text" id="company"/>
          <label for="title"> Job Title </label>
          <input type="text" id="title"/>
          <label for="location"> Job Location </label>
          <input type="text" id="location"/>
          <label for="start-date"> Start Date </label> 
          <input type="date" id="start-date"/>
          <label for="end-date"> End Date </label> 
          <input type="date" id="end-date"/>
        </fieldset>
      </form>
    </div>
  );
}

export default App;