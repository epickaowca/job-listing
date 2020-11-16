import React from 'react'
import FiltersCart from '../structure/FiltersCart'
import FiltersOption from '../structure/FiltersOption'
import styled from 'styled-components'

const Wrapper = styled.div`
margin: auto;
max-width: 700px;

`

export default function Filters() {
    return (
        <Wrapper>
            <FiltersCart />
            <FiltersOption />
        </Wrapper>
    )
}
