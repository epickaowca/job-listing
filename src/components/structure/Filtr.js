import React from 'react'
import styled from 'styled-components'
import {ReactComponent as  Closeimg} from '../../asset/icon-remove.svg'

const Wrapper = styled.div`
    color: rgba(0,0,0,.6);
    position: relative;
    display: flex;
    align-items: center;
    background: ${p=>p.theme.color3};
    ${p=>p.case2 && `
    background: white;
    border: 1px solid black;
    border-right: none;
    & > div{
        border: 1px solid ${p.theme.color1};
        & > svg{
            transform: rotate(45deg);
        }
    }
    `}
    & > p{
        margin: 7px 10px;
        font-weight: 700;
    }
    & > div{
        height: 100%;
        width: 30px;
        display: flex;
        background: ${p=>p.theme.color1};
        & > svg{
            margin: auto;
        }
    }
`

export default function Filtr({case2, name, click}) {
    return (
        <Wrapper case2={case2}>
            <p>{name}</p>
            <div onClick={click}>
                <Closeimg />
            </div>
        </Wrapper>
    )
}
