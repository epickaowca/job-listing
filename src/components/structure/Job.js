import React from 'react'
import styled from 'styled-components'
import { Button } from '../elements/button'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
box-shadow: 0px 5px 15px rgba(0,0,0,.2);
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
        &:nth-child(1){
            display: flex;
            align-items: center;
            & > img{
                margin-right: 25px;
                object-fit: contain;
                width: auto;
                top: unset;
                left: unset;
                position: relative;
            }
            & > div{
                margin-top: unset;
            }
        }
        &:nth-child(3){
            text-align: right;
            width: 50%;
        }
    }
}

`

export default React.memo(({jobs, requ}) => {
    const state = useSelector(state => state.jobs)
    const { positions, agreements, locations } = state
    const { img, featured, company, relesed, new:isNew, position, agreement, location } = jobs
    return (
        <Wrapper featured={featured}>
            <section>
                <img src={require(`../../asset/${img}.svg`).default} alt="company" />
                <div>
                    <section>
                        <p>{company}</p>
                        {isNew && <Button case1 color1>NEW!</Button>}
                        {featured && <Button case1 color2>FEATURED</Button>}
                    </section>
                    <h2>{positions[position]}</h2>
                    <section>
                        <p>{relesed}</p>
                        <p>&middot;</p>
                        <p>{agreements[agreement]}</p>
                        <p>&middot;</p>
                        <p>{locations[location]}</p>
                    </section>
                </div>
            </section>
            <hr></hr>
            <section>
                {requ && requ.map((elem, index)=><Button key={index} case2>{elem}</Button>)}
            </section>
        </Wrapper>
    )
})
