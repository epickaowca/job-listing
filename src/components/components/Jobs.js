import React from 'react'
import Job from '../structure/Job'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
    padding: 0 20px;
`




export default function Jobs() {
    const state = useSelector(state => state.jobs)
    return (
        <Wrapper>
            {state.jobs.map((elem, index)=><Job key={index} props={elem} />)}
        </Wrapper>
    )
}
