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
    height: 35px;
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
        cursor: pointer;
        height: 35px;
        width: 30px;
        display: flex;
        background: ${p=>p.theme.color1};
        & > svg{
            transition: all .3s ease; 
            margin: auto;
        }
        &:hover{
            & > svg{
                transform: rotate(${p=>p.case2 ? '225deg' : '180deg' });
            }
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
