import React from 'react'
import styled from 'styled-components'
import { Button } from '../elements/button'

const Wrapper = styled.div`
max-width: 1440px;
margin: auto;
background: white;
margin-top: 50px;
padding: 25px;
position: relative;
border-radius: 10px;
${p=>p.featured && `border-left: 10px solid ${p.theme.color1}`};
& > section{
    &:nth-child(1){
        & > img{
            width: 50px;
            top: -25px;
            left: 25px;
            position: absolute;
        }
        & > div{
            margin-top: 20px;
            & > section{
                display: flex;
                align-items: center;
                &:nth-child(1){
                    flex-wrap: wrap;
                    & > button{
                        &:nth-child(2){
                            margin: 0px 20px;
                        }
                    }
                }
                &:nth-child(3){
                    text-align: center;
                    & > p{
                        margin: 0px 5px;
                        opacity: .5;
                        &:nth-child(1){
                            margin-left: 0;
                        }
                    }
                }
            }
            & > h2{
                font-size: 1rem;
                margin: 15px 0px;
            }
        }
    }
    &:nth-child(3){
        & > button{
            margin: 5px 0;
            margin-right: 15px;
        }
    }
}
& > hr{
    height: 1px;
    border: none;
    background: ${p=>p.theme.color6};
    margin: 20px 0;
}

${p=>p.theme.media.desktop1}{
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > hr{
        display: none;
    }
    & > section{
        &:nth-child(3){
            text-align: right;
            width: 50%;
        }
    }
}
`

export default function job({props}) {
    const { img, featured, company, position } = props
    return (
        <Wrapper featured={featured}>
            <section>
                <img src={require(`../../asset/${img}.svg`).default} alt="company" />
                <div>
                    <section>
                        <p>{company}</p>
                        <Button case1 color1>NEW!</Button>
                        {featured && <Button case1 color2>FEATURED</Button>}
                    </section>
                    <h2>{position}</h2>
                    <section>
                        <p>1d ago</p>
                        <p>&middot;</p>
                        <p>Full Time</p>
                        <p>&middot;</p>
                        <p>USA only</p>
                    </section>
                </div>
            </section>
            <hr></hr>
            <section>
                <Button case2>Frontend</Button>
                <Button case2>Senior</Button>
                <Button case2>HTML</Button>
                <Button case2>CSS</Button>
                <Button case2>JavaScript</Button>
            </section>
        </Wrapper>
    )
}
