import styled from 'styled-components/native'

export const AboutContainer = styled.View`
  flex: 1;
`;

export const AboutHeader = styled.View`
  align-items: center;
  justify-content: center;

  height: 128px;
`;

export const Logo = styled.Image`
  width: 128px;
  height: 100%;
`;

export const AboutContent = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #114B5F;

  margin-top: 10px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #333;
  text-align: justify;

  margin-bottom: 15px;
`;