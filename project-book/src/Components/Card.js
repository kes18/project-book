import React from 'react';
import {StyledDiv,StyledCard,StyledPara,StyledIconBox} from './Styled';
import {Box} from '@mui/material';
 const Card =(props)=>{
    return(
        
        <StyledCard>
            <StyledIconBox>
        <StyledDiv>{props.data.title} </StyledDiv>
        <Box>
     {props.data.icon}
        </Box>
        </StyledIconBox>
            <StyledPara>{props.data.description} </StyledPara>
            
        </StyledCard>
        
    )
 }
 export default Card;