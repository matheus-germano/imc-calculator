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
            <Text>O Índice de Massa Corporal (IMC) é uma
            classificação utilizada mundialmente para
            identificar se o indivíduo está com
            peso dentro das medidas adequadas
            para sua altura, se seu peso está abaixo
            do esperado ou acima do desejado.</Text>

            <Text>A partir da aplicação do cálculo do IMC,
            médicos, nutricionistas e outros profissionais
            da saúde podem formular hipóteses
            sobre as razões do resultado apresentado.
            É comum que, logo após a leitura de
            resultados de sobrepeso ou de peso abaixo
            do ideal, a pessoa seja a encaminhada
            para a realização de exames
            complementares.</Text>
            
            <Title>Como posso calcular meu IMC?</Title>
            <Text>O cálculo do IMC deve ser feito usando a seguinte fórmula matemática: peso ÷ (altura x altura). 
            E assim você poderá saber sua classificação de acordo com a tabela de resultados de IMC.</Text>
            <ScrollView horizontal={true}>            
              <TableContainer>
                <TableImage source={require('../../assets/tabela_imc.png')}  />
              </TableContainer>
            </ScrollView>
            <Title>O que fazer caso meu IMC não esteja no peso ideal?</Title>
            <Text>Quem não estiver dentro do peso ideal deve adequar a alimentação e fazer exercícios para 
            conseguir atingir o peso mais indicado para sua altura e idade. Mas tudo isso com orientação médica.</Text>
          </AboutContent>
        </ScrollView>
      </AboutContainer>
    </LinearGradient>
  )
}