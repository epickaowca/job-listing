import React, { useEffect, useRef } from 'react'
import Filtr from '../structure/Filtr'
import styled from 'styled-components'
import { removeFilter } from '../../redux/ducks/filter'
import { useSelector, useDispatch } from 'react-redux'
import { clearFilter } from '../../redux/ducks/filter'


const Wrapper = styled.div`
margin: auto;
padding: 15px 0;
width: 90%;
z-index: 2;
top: 0;
position: sticky;
display: flex;
flex-direction: row-reverse;
justify-content: space-between;
align-items: center;
background: white;
border-bottom: 1px solid rgba(0,0,0,.5);
${p=>!p.filterEject && `
border: none;
border-radius: 8px;
box-shadow: 0px 5px 15px rgba(0,0,0,.2);
`}
padding-right: 40px;
& > div{
    padding-left: 20px;
    & > p{
        font-weight: 600;
        color: ${p=>p.theme.color1};
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }
}
& > section{
    display: flex;
    padding: 20px;
    max-height: 155px;
    overflow: auto;
    flex-wrap: wrap;
    & > div{
        margin: 10px;
    }
}
`

export default function Filters() {
    const Wrapp = useRef()
    const state = useSelector(state=>state.filter)
    const dispatch = useDispatch()
    return (
        <Wrapper ref={Wrapp} filterEject={state.filterEject}>
            <div>
                <p onClick={()=>dispatch(clearFilter())}>Clear</p>
            </div>
            <section>
                {state.filters.map((filtr, index)=><Filtr key={index} name={filtr} click={()=>dispatch(removeFilter(filtr))} />)}
            </section>
        </Wrapper>
    )
}
