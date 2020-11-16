const TOGGLE_EJECT = 'filter/toggle_eject'
const ADD_FILTER = 'filter/add'
const REMOVE_FILTER = 'filter/remove'


const initState = {
    filterEject: false,
    filters: [],
}

const reducer=( state=initState, {type, payload} )=>{
    switch(type){
        case TOGGLE_EJECT: return{
            ...state, filterEject: !state.filterEject
        }

        case ADD_FILTER: 
        let item = state.filters.find(item=>item===payload)
        if(item){
            return state
        }else{
            return {...state, filters: [...state.filters, payload]}
        }

        case REMOVE_FILTER: return{
            ...state, filters: state.filters.filter(filtr=>filtr!==payload)
        }
        default: return state
    }
}

export const toggleEject = ()=>({type: TOGGLE_EJECT})
export const addFilter = payload=>({type: ADD_FILTER, payload})
export const removeFilter = payload=>({type: REMOVE_FILTER, payload})

export default reducer