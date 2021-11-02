import React from "react";
import {useSelector} from "react-redux";

function Blogs(){

    const tags = useSelector(state=>state.tags);

    const tagEles = tags.map((tg, idx)=>
        <div key={idx}>
            <h1>{tg.name}</h1>
            <h2>{tg.age}</h2>
            <h2>{tg.occupation}</h2>
        </div>
    )

    return(
        <span>
            <h1>Blogs</h1>
            <div>
                {tagEles}
            </div>
        </span>
    )
}
export default Blogs;