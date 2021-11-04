const initState = {
    name:"Ryan",
    tags:[]
}

const rootReducer = (state = initState, action) => {


    if (action.type === 'ADD_PERSON') {
        let newArray = state.tags;
        newArray.push(action.person);

        return {
            ...state,
            tags: newArray
        }
    }




    return state;
}

export default rootReducer;