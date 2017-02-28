// State argument is not application state,
// on the state this reducer is responsible for
// 记录着上一次return的obj
    // ex: state += 1, 每次action触发,这个state自增1
const initialState = {
    title: 'Select a Book'
}

export default (state = initialState, action) => {  // if state is undefined, assign
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;   // redux do not allow return undefined from reducer
}