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
  const [imc, setImc] = useState([])
  const [newImc, setNewImc] = useState({ id: 0, height: '', weight: '', imc: ''})

  function calculateImc() {
    let imcResult = ''
    let tempHeight = parseFloat(newImc.height)
    let tempWeight = parseFloat(newImc.weight)

    if(tempHeight > 1 && tempWeight > 0) {
      imcResult = ((tempWeight / (tempHeight * tempHeight)).toFixed(2)).toString();

      setNewImc({ ...newImc, imc: imcResult, id: imc.lenght + 1 })
      setImc([ ...imc, newImc ])
      
      console.log('\nnovo imc\n', newImc, '\n\nhistorico de imc\n', imc)

      setNewImc({ height: '', weight: '', imc: '' })
    }
    else {
      alert('Por favor, insira valores validos.')
      setNewImc({ height: '', weight: '' })
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
            <ResultCard />
          </LastResultContainer>

          <CalculateContainer>
            <Title>Calcule seu IMC</Title>

            <InputContainer>
              <Input 
                placeholder='Insira sua altura (m)' 
                placeholderTextColor='#114B5F'
                color='#114B5F'
                keyboardType='decimal-pad'
                value={newImc.height}
                onChangeText={(value) => setNewImc({ ...newImc, height: value })}
              />
            </InputContainer>
            <InputContainer>
              <Input 
                placeholder='Insira seu peso (kg)' 
                placeholderTextColor='#114B5F'
                color='#114B5F'
                keyboardType='decimal-pad'
                value={newImc.weight}
                onChangeText={(value) => setNewImc({ ...newImc, weight: value })}
              />
            </InputContainer>
            <CalculateButton onPress={calculateImc}>
              <CalculateButtonText>Calcular</CalculateButtonText>
            </CalculateButton>

            { newImc.imc ? (
            <ResultContainer>
              <Result>Seu IMC é: {newImc.imc}</Result>
            </ResultContainer>) : null }
            
          </CalculateContainer>
        </HomeContainer>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}