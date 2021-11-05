import React from "react";
import {useDispatch} from "react-redux";
import {add_person} from "../redux/setActions";

function Home(){

    const [obj, setObj]=React.useState([{
        name: "",
        age: "",
        occupation: ""
    }])

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


    const  handleSubmit  = (event) => {
        if (!obj.name  || !obj.age || !obj.occupation) {
            event.preventDefault();

        } else {
            addPerson()
        }
    }

    return(
        <form onSubmit={handleSubmit}>
        <div>
            <h1>Home</h1>
            <input type="text" required={true}
                placeholder={"Name"} name={"name"} value={obj.name} onChange={handleChange}/>
            <input type="number" required={true}
                   placeholder={"Age"} name={"age"} value={obj.age} onChange={handleChange}/>
            <input type="text" required={true}
                   placeholder={"Occupation"} name={"occupation"} value={obj.occupation} onChange={handleChange}/>
            <button type={"button"} onClick={handleSubmit}>Submit Person</button>
            </div>
        </form>


    )
}
export default Home;
