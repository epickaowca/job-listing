import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../elements/button'
import { toggleEject } from '../../redux/ducks/filter'
export default function FiltersButton() {
    const dispatch = useDispatch()
    return (
        <Button case3 onClick={()=>dispatch(toggleEject())}>Filters</Button>
    )
}
