import React from 'react';

import { CardContainer, CardHeader, Calculation, Date, ImcResult } from './styles'

export default function ResultCard() {
  return(
    <CardContainer>
      {/* { props.imc ? ( */}
      {/* <>
        <CardHeader>
          <Calculation>IMC = {props.weight} / ({props.height} x {props.height})</Calculation>
          <Date>dd/mm/aa</Date>
        </CardHeader>
        <ImcResult>{props.imc}</ImcResult>
      </> */}
      {/* ) : ( */}
        <>
          <CardHeader>
            <Calculation>IMC = weight / (height x height)</Calculation>
            <Date>dd/mm/aa</Date>
          </CardHeader>
          <ImcResult>IMC</ImcResult>
        </>
      {/* )} */}
      
    </CardContainer>
  )
}