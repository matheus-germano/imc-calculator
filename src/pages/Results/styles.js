import styled from 'styled-components/native'

export const ResultsContainer = styled.View`
  flex: 1;
  padding: 0 20px;
  margin-top: ${ Platform.OS === 'ios' ? 30+'px' : 20+'px' };
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #114B5F;
`;