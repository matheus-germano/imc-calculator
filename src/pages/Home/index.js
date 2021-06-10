import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard, 
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import StatusBarPage from '../../components/StatusBarPage'
import ResultCard from '../../components/ResultCard';

import { 
  HomeContainer,
  LastResultContainer,
  CalculateContainer,
  Title, 
  InputContainer, 
  Input, 
  CalculateButton, 
  CalculateButtonText,
  ResultContainer,
  Result,
} from './styles'

export default function Home() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [imc, setImc] = useState(0)

  function CalculateIMC() {
    try {
      if(height > 0 && height != '') {
        console.log(height)
      }
      else {
        alert('Por favor, insira valores validos.')
      }
  
      if(weight > 0 && weight != '') {
        console.log(weight)
      }
      else {
        alert('Por favor, insira valores validos.')
      }
  
      const tempHeight = parseFloat(height)
      const tempWeight = parseFloat(weight)
      const tempImc = (tempWeight / (tempHeight * tempHeight)).toFixed(2)
  
      setImc(tempImc)
      console.log(imc)
    } 
    catch (err) {
      consolo.log(err)
    }
  }

  return(
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <LinearGradient colors={['#fff', '#f1f2f5']} style={{ flex: 1 }}>
        <StatusBarPage
          barStyle='light-content' 
          backgroundColor='#88D498'
        />

        <HomeContainer>

          <LastResultContainer>
            <Title>Ultimo resultado</Title>
            <ResultCard height={height} weight={weight} imc={imc} />
          </LastResultContainer>

          <CalculateContainer>
            <Title>Calcule seu IMC</Title>

            <InputContainer>
              <Input 
                placeholder='Insira sua altura (cm)' 
                placeholderTextColor='#114B5F'
                color='#114B5F'
                keyboardType='decimal-pad'
                defaultValue=''
                onChangeText={(heightValue) => setHeight(heightValue)}
              />
            </InputContainer>
            <InputContainer>
              <Input 
                placeholder='Insira seu peso (kg)' 
                placeholderTextColor='#114B5F'
                color='#114B5F'
                keyboardType='decimal-pad'
                defaultValue=''
                onChangeText={(weightValue) => setWeight(weightValue)}
              />
            </InputContainer>
            <CalculateButton onPress={CalculateIMC}>
              <CalculateButtonText>Calcular</CalculateButtonText>
            </CalculateButton>

            { imc ? (
            <ResultContainer>
              <Result>Seu IMC é: {imc}</Result>
            </ResultContainer>) : null }
            
          </CalculateContainer>
        </HomeContainer>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}