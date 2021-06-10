import React from 'react';

import { CardContainer, CardHeader, Calculation, Date, ImcResult } from './styles'

export default function ResultCard(props) {
  return(
    <CardContainer>
      <CardHeader>
        <Calculation>IMC = {props.weight} / ({props.height} x {props.height})</Calculation>
        <Date>dd/mm/aa</Date>
      </CardHeader>
      <ImcResult>{props.imc}</ImcResult>
    </CardContainer>
  )
}