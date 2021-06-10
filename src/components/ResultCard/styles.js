import styled from 'styled-components/native'

export const CardContainer = styled.View`
  width: 100%;
  height: 100px;

  background-color: #fff;
  border-radius: 10px;

  margin: 15px auto;
  justify-content: space-between;
  padding: 20px;

  elevation: 6;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Calculation = styled.Text`
  color: #999;
  font-size: 12px;
`;

export const Date = styled.Text`
  color: #999;
  font-size: 12px;
`;

export const ImcResult = styled.Text`
  font-size: 28px;
  font-weight: bold;

  color: #114B5F;
`;