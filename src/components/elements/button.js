import styled from 'styled-components'

export const  Button = styled.button`
    ${p=>p.case3 && 'box-shadow: 2px 2px 15px rgba(0,0,0,.1)'};
    border: none;
    outline none;
    cursor: pointer;
    font-weight: bold;
    font-size: ${p=>p.case2 ? '.9rem' : p.case3 ? '1.2rem' : '.7rem'};
    border-radius:${p=>p.case2 ? '5px' : p.case3 ? '5px' : '40px'};
    padding: ${p=>p.case2 ? '6px 8px' : p.case3 ? '10px 25px' : '6px 10px'};
    padding-top: ${p=>p.case2 ? '8px' : p.case3 ? '' : '9px'};
    color: ${p=>(p.case2 || p.case3) ? p.theme.color1 : 'white'};
    background: ${p=>p.case2 ? 'rgba(0,0,0,.1);' : p.case3 ? 'white' : p.color1 ? p.theme.color1 : p.theme.color5 };
    
    &:hover{
        color: white;
        background: ${p=>p.case1 ? '' : p.theme.color6};
    }
` 