import axios from "axios"

// CAT ACTIONS
export const FETCH_CAT_START = "FETCH_CAT_START"
export const FETCH_CAT_COMPLETE = "FETCH_CAT_COMPLETE"
export const FETCH_CAT_FAIL = "FETCH_CAT_FAIL"

// FAVORITES ACTIONS
export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

// export const functionName = (params) => (dispatch) => {}
export const addFavorite = (cat) => (dispatch) => {
    dispatch({type: ADD_FAVORITE, payload: cat})
}

export const removeFavorite = (cat) => (dispatch) => {
    dispatch({type: REMOVE_FAVORITE, payload: cat})
}

export const fetchCats = () => dispatch => {
    dispatch({type: FETCH_CAT_START})
    
    axios
    .get('https://aws.random.cat/meow')
    .then(data => { console.log(data);
        dispatch({type: FETCH_CAT_COMPLETE, payload: data.data.file})
    })
    .catch(err => {
        dispatch({type: FETCH_CAT_FAIL, payload: err.message})
    })
    // try {
    //     const data = await axios.get('https://aws.random.cat/meow')
    //     dispatch({type: FETCH_CAT_COMPLETE, payload: data.data.message})
    // } catch (err) {
    //     dispatch({type: FETCH_CAT_FAIL, payload: err.message})
    // }
}
