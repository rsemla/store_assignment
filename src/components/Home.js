import React from "react";
import {useDispatch} from "react-redux";
import {add_person} from "../redux/setActions";

function Home(){

    const [obj, setObj]=React.useState({
        name:"",
        age:"",
        occupation:""
    })

    const dispatch = useDispatch();


    const addPerson = () => {
            dispatch(add_person(obj))
    }

    const handleChange = (event) => {
        if( [event.target.name !==""] || [event.target.name !== null] ) {
        const newInput = {
            ...obj,
            [event.target.name]: event.target.value
        }
                setObj(newInput);
            }
            else {
                setObj(obj);
            }

        }
    const handleSubmit = (event) => {
        event.preventDefault();
    }



    return(
        <form onSubmit={handleSubmit}>
        <div>
            <h1>Home</h1>
            <input type="text" required={true}
                placeholder={"Name"} name={"name"}  onChange={handleChange}  />
            <input type="number" required={true}
                   placeholder={"Age"} name={"age"} onChange={handleChange}/>
            <input type="text" required={true}
                   placeholder={"Occupation"} name={"occupation"} onChange={handleChange}/>
            <button type="submit" onClick={addPerson}>Submit Person</button>
            </div>
        </form>


    )
}
export default Home;
