import React from 'react'
import styled from 'styled-components'
import Filtr from '../structure/Filtr'
import { Button } from '../elements/button'
import { useSelector, useDispatch } from 'react-redux'
import { addFilter, toggleEject } from '../../redux/ducks/filter'
import {ReactComponent as CloseImg} from '../../asset/icon-remove.svg'


const Wrapper = styled.div`
    top: 100%;
    width: 90%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    height: 0px;
    overflow: hidden;
    ${p=>p.filterEject && `
        height: auto;
    `}
    & > div{
        padding: 0 15px;
        margin: 50px 0;
        display: flex;
        flex-direction: column;
        &:first-child{
            margin-top: 20px;
        }
        & > p{
            margin-left: 10px;
            font-weight: bold;
            opacity: .7;
        }
        & > div{
            display: flex;
            flex-wrap: wrap;
            & > div{
                margin: 15px 10px;
            }
        }
    }
    & > button{
        border: 1px solid black;
        box-shadow: none;
        left: 50%;
        transform: translateX(-50%);
        position: relative;
        &:hover{
            border: none;
        }
    }
    & > svg{
        cursor: pointer;
        position: absolute;
        right: 40px;
        top: 40px;
        transform: scale(2);
        & > path{
            fill: black;
        }
        &:hover{
            & > path{
                fill: ${p=>p.theme.color1}
            }
        }
    }
`
export default function FiltersOption() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <Wrapper filterEject={state.filter.filterEject}>
            <CloseImg onClick={()=>dispatch(toggleEject())} />
            {Object.entries(state.jobs.requirements).map((item, index)=>
                <div key={index}>
                    <p>{item[0]}</p>
                    <div>
                        {Object.values(item[1]).map((filtr, index)=>
                            <Filtr key={index} case2 name={filtr} click={()=>dispatch(addFilter(filtr))} />
                        )}
                    </div>
                </div>
            )}
            <Button case3 onClick={()=>dispatch(toggleEject())}>done</Button>
        </Wrapper>
    )
}
