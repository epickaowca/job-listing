import React from 'react'
import Filtr from '../structure/Filtr'
import styled from 'styled-components'
import { ReactComponent as Close } from '../../asset/icon-remove.svg'
import { removeFilter } from '../../redux/ducks/filter'
import { useSelector, useDispatch } from 'react-redux'

const Wrapper = styled.div`
z-index: 2;
top: 0;
position: sticky;
display: flex;
flex-direction: column;
background: white;
flex-wrap: wrap;
border-bottom: 1px solid rgba(0,0,0,.5);
& > section{
    display: flex;
    padding: 20px;
    &:nth-child(1){
        justify-content: space-between;
        & > svg{
            transform: scale(1.5);
            & > path{
                fill: rgba(0,0,0,.7);
            }
        }
    }
    &:nth-child(2){
        max-height: 155px;
        overflow: auto;
        padding-top: 0;
        flex-wrap: wrap;
        & > div{
            margin: 10px;
        }
    }
}
`

export default function Filters() {
    const state = useSelector(state=>state.filter)
    const dispatch = useDispatch()
    return (
        <Wrapper>
            <section>
                <p>Filters</p>
                <Close />
            </section>
            <section>
                {state.filters.map((filtr, index)=><Filtr key={index} name={filtr} click={()=>dispatch(removeFilter(filtr))} />)}
            </section>
        </Wrapper>
    )
}
