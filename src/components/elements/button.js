import styled from 'styled-components'

export const  Button = styled.button`
    border: none;
    outline none;
    cursor: pointer;
    font-weight: bold;
    font-size: ${p=>p.case2 ? '.9rem' : '.7rem'};
    border-radius:${p=>p.case2 ? '5px' : '40px'};
    padding: 6px  ${p=>p.case2 ? '8px' : '10px'};
    padding-top: ${p=>p.case2 ? '8px' : '9px'};
    color: ${p=>p.case2 ? p.theme.color1 : 'white'};
    background: ${p=>p.case2 ? 'rgba(0,0,0,.1);' : p.color1 ? p.theme.color1 : p.theme.color5 };
    
    &:hover{
        color: white;
        background: ${p=>p.case1 ? '' : p.theme.color6};
    }

` 