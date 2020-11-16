import React from 'react'
import sImg from '../../asset/bg-header-mobile.svg'
import bImg from '../../asset/bg-header-desktop.svg'
import styled from 'styled-components'

const Wrapper = styled.header`
    background: ${p=>p.theme.color1};
    width: 100vw;
    height: 150px;
    & > picture{
        & > source{
            height: 0px !important;
        }
        & > img{
            height: 100%;
            width: 100%;
        }
     }
`

export default function Header() {
    return (
        <Wrapper>
        <picture>
            <source media="(min-width:650px)" srcSet={bImg} />
            <img src={sImg} alt="Flowers" />
        </picture>
        </Wrapper>
    )
}
