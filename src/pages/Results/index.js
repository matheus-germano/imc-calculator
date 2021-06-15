import React from 'react';
import { ResultsContainer, Title } from './styles'
import ResultCard from '../../components/ResultCard'
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';

export default function Results() {
  return(
    <LinearGradient colors={['#fff', '#f1f2f5']} style={{ flex: 1 }}>
      <StatusBarPage
        barStyle='light-content' 
        backgroundColor='#88D498'
      />
      <ResultsContainer>
        <Title>Results Page</Title>
        <ResultCard />
      </ResultsContainer>
    </LinearGradient>
  )
}