import React from 'react';
import { ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { AboutContainer, AboutHeader, Logo, AboutContent, Title, Text, TableContainer, TableImage } from './styles'

export default function About() {
  return(
    <LinearGradient colors={['#fff', '#f1f2f5']} style={{ flex: 1}}>
      <AboutContainer>
        <AboutHeader>
          <Logo source={require('../../assets/logo.png')} />
        </AboutHeader>
        <ScrollView>
          <AboutContent>
            <Title>O que é IMC?</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque nisl nec semper porttitor. Nullam vel massa eget lorem porta finibus tempus sit amet purus.</Text>
            <Title>Como posso calcular meu IMC?</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque nisl nec semper porttitor. Nullam vel massa eget lorem porta finibus tempus sit amet purus.</Text>
            <ScrollView horizontal={true}>            
              <TableContainer>
                <TableImage source={require('../../assets/tabela_imc.png')}  />
              </TableContainer>
            </ScrollView>
            <Title>O que fazer caso meu IMC não esteja no peso normal?</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque nisl nec semper porttitor. Nullam vel massa eget lorem porta finibus tempus sit amet purus.</Text>
          </AboutContent>
        </ScrollView>
      </AboutContainer>
    </LinearGradient>
  )
}