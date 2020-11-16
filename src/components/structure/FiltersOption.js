import React from 'react'
import styled from 'styled-components'
import Filtr from '../structure/Filtr'
import { Button } from '../elements/button'
import { useSelector, useDispatch } from 'react-redux'
import { addFilter } from '../../redux/ducks/filter'

const Wrapper = styled.div`
    background: white;
    padding: 25px 15px;
    & > div{
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
        left: 50%;
        transform: translateX(-50%);
        position: relative;
    }
`
const filters = [
    {
        filtr: 'Role',
        option:[
            'Frontend',
            'Backend',
            'Fullstack',
        ]
    },
    {
        filtr: 'Level',
        option:[
            'Junior',
            'Midweight',
            'Senior',
        ]
    },
    {
        filtr: 'Languages',
        option:[
            'Python',
            'Ruby',
            'JavaScript',
            'HTML',
            'CSS',
        ]
    },
    {
        filtr: 'Tools',
        option:[
            'React',
            'Sass',
            'Vue',
            'Django',
            'RoR'
        ]
    },
]

export default function FiltersOption() {
    const state = useSelector(state => state.filter)
    const dispatch = useDispatch()
    console.log(state)
    return (
        <Wrapper>
            {filters.map(({filtr, option}, index)=>
            <div key={index}>
                <p>{filtr}</p>
                <div>
                    {option.map((filtr, index)=>
                        <Filtr key={index} case2 name={filtr} click={()=>dispatch(addFilter(filtr))}
                    />)}
                </div>
            </div>
            )}
            <Button>done</Button>
        </Wrapper>
    )
}
