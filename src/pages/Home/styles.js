import styled from 'styled-components/native'
// import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Platform } from 'react-native'

export const HomeContainer = styled.View`
  flex: 1;
  margin-top: ${ Platform.OS === 'ios' ? 30+'px' : 20+'px' };
`;

export const LastResultContainer = styled.View`
  padding: 0 20px;
  margin-bottom: 10px;
  justify-content: center;
`;

export const CalculateContainer = styled.View`
  width: 100%;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #114B5F;
`;

export const InputContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  /* border: 1px solid #114B5F; */
  background-color: #fff;
  border-radius: 10px;
  margin: 15px auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 80px;
  font-size: 16px;
`;

export const CalculateButton = styled.TouchableOpacity`
  background-color: #88D498;
  width: 100%;
  height: 80px;
  margin: 15px auto;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  elevation: 15;
`;

export const CalculateButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const ResultContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  /* border: 1px solid #114B5F; */
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  margin: 15px auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Result = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #114B5F;
`