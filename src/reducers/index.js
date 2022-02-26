import {
    FETCH_CAT_START, 
    FETCH_CAT_COMPLETE, 
    FETCH_CAT_FAIL,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
} from '../actions';

const initialState = {
    CatList: "",
    isLoading: false,
    error: "",
    favorites: []  
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case ADD_FAVORITE: 
            //spread state & grab the piece that you need, grab key: [...spreading state.location]
            return{
                ...state, favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE:
            let newState = state.favorites.filter(cat => cat !== action.payload)
            return {
                ...state, favorites: newState,
            }
        case  FETCH_CAT_START: 
            return {
                ...state, isLoading: true, CatList: "", error: ""
            }
        case FETCH_CAT_COMPLETE: 
        console.log(action.payload)
        return {
            ...state, CatList: action.payload, isLoading: false, error: "",
        }
        case FETCH_CAT_FAIL:
            return {
                ...state, isLoading: false, error: action.payload, CatList: ""
            }
        default: return state;
    }
}
