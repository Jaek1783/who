import React from 'react';
import styled from 'styled-components';

const Spinner = (props) => {
    return (
        <Container>
            <ul>
                <li>L</li>
                <li>O</li>
                <li>A</li>
                <li>D</li>
                <li>I</li>
                <li>N</li>
                <li>G</li>
            </ul>
         
        </Container>
    );
};
export default Spinner

const Container = styled.div`
width:100%;
height:100vh;
position:fixed;
top:0;
left:0;
background-color:skyblue;
    ul{ display:flex;
        font-size:30px;
        font-weight:bold;
        color:#fff;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%);
        li{
            list-style-type:none;
            
        }
    }
`;