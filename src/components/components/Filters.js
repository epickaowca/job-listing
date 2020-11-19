import React from 'react'
import FiltersCart from '../structure/FiltersCart'
import FiltersOption from '../structure/FiltersOption'
import styled from 'styled-components'
import { useSelector } from 'react-redux'


const Wrapper = styled.div`
    display: flex; 
    top: -50px;
    position: relative;
    margin: auto;
    max-width: 1440px;
    z-index: 5;
`

export default function Filters() {
    const state = useSelector(state=>state.filter)
    return (
        <Wrapper>
            {(state.filters.length!==0 || state.filterEject) && <FiltersCart />}
            <FiltersOption />
        </Wrapper>
    )
}
