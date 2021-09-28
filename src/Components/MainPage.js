const Form = (props) => {
    const {parentThis} = props;
    return (
        <div>
        <h1> Resume </h1>
        <form onSubmit={parentThis.submitHandler}>
        <fieldset>
            <legend> General Information </legend>
            <label for="name"> Name </label> 
            <input type="text" id="name" onChange={parentThis.handleChange}/>
            <label for="email"> Email </label> 
            <input type="email" id="email" onChange={parentThis.handleChange}/>
            <label for="contact"> Contact </label> 
            <input type="text" id="contact" onChange={parentThis.handleChange}/>
        </fieldset>
        <fieldset>
            <legend> Educational Experience </legend>
            <label for="school-name"> School Name </label> 
            <input type="text" id="school-name" onChange={parentThis.handleChange}/>
            <label for="school-location"> School Location </label> 
            <input type="text" id="school-location" onChange={parentThis.handleChange}/>
            <label for="degree"> Degree </label> 
            <input type="text" id="degree" onChange={parentThis.handleChange}/>
            <label for="major"> Major </label> 
            <input type="text" id="major" onChange={parentThis.handleChange}/>
            <label for="school-start-date"> Start Date </label> 
            <input type="date" id="school-start-date" onChange={parentThis.handleChange}/>
            <label for="school-end-date"> End Date </label> 
            <input type="date" id="school-end-date" onChange={parentThis.handleChange}/>
        </fieldset>
        <fieldset>
            <legend> Work Experience </legend>
            <label for="company"> Company </label>
            <input type="text" id="company" onChange={parentThis.handleChange}/>
            <label for="title"> Job Title </label>
            <input type="text" id="title" onChange={parentThis.handleChange}/>
            <label for="job-location"> Job location </label>
            <input type="text" id="job-location" onChange={parentThis.handleChange}/>
            <label for="job-start-date"> Start Date </label> 
            <input type="date" id="job-start-date" onChange={parentThis.handleChange}/>
            <label for="job-end-date"> End Date </label> 
            <input type="date" id="job-end-date" onChange={parentThis.handleChange}/>
        </fieldset>
        <button type="submit"> Done </button>
        </form>
        </div>
    );
}

export default Form;