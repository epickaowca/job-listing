import React, {useMemo} from 'react'
import Job from '../structure/Job'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import FiltersButton from './FiltersButton'

const Wrapper = styled.div`
    margin-top: -150px;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    & > div{
        width: 90%;
    }
    & > button{
        margin: auto;
        margin-top: 150px;
    }
`

export default React.memo(()=> {
    const { jobs, requirements } = useSelector(state => state.jobs)
    const filters = useSelector(state=>state.filter.filters)    

    const allRequ = (requirement)=>{
        let allRequirment = []
        requirement.map(re=>re.options.map(rre=>
                allRequirment.push(requirements[re.name][rre]) 
        ))
        return allRequirment
    }

    const Visible = (requ)=>{
        let bol = [];
        let visible = true
        filters.map(e=>{
            let tr;
            requ.map(el=>{
                if(e.includes(el)){
                    tr = true
                }
            })
            bol.push(tr)
        })
        bol.map(e=>{
            if(!e){
                visible = false
            }
        })
        return visible;
    }
    
    
    let res = jobs.map((elem, index)=>{
        let requ = allRequ(elem.requirement)
        return(
            <Job key={index} jobs={elem} requ={requ} visible={Visible(requ)} />
            )
        })
        
    let filteredRes = res.filter(elem=>elem.props.visible)

    
    
    return (
        <Wrapper>
            <FiltersButton />
            {filteredRes}
        </Wrapper>
    )
})
