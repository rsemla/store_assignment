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
        const newInput = {
            ...obj,
            [event.target.name]: event.target.value
        }

        setObj(newInput);
    }

    return(
        <div>
            <h1>Home</h1>

            <input type="text" placeholder={"Name"} name={"name"} onChange={handleChange}/>
            <input type="text" placeholder={"Age"} name={"age"} onChange={handleChange}/>
            <input type="text" placeholder={"Occupation"} name={"occupation"} onChange={handleChange}/>
            <button onClick={addPerson}>Submit Person</button>
        </div>

    )
}
export default Home;
