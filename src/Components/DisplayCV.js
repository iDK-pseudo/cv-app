const DisplayCV = (props) => {
    const output = [];
    for(let key in props.fields){
        output.push(
            <div>
                <label>{key}</label>
                <li>{props.fields[key]}</li>
            </div>
        );
    }
    return <ul> {output} </ul>;
}

export default DisplayCV;