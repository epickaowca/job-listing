const FILTER_TOGGLE = 'filter/toggle'


const initState = {
    filterEject: false,
}

const reducer=( state=initState, payload )=>{
    switch(payload.type){
        case FILTER_TOGGLE: return{
            ...state, filterEject: !state.filterEject
        }
        default: return state
    }
}

export const filterToggle = ()=>({type: FILTER_TOGGLE})

export default reducer