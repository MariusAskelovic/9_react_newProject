import styled from 'styled-components';
import Btn from './components/UI/Btn.styled';

const MainTitle = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
  color: tomato;
`;

const Wrap = styled.div`
  padding-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

export default function App() {
  return (
    <Wrap>
      <MainTitle>Styled Components</MainTitle>
      <Btn>Get Started</Btn>
      <Btn secondary>Learn More</Btn>
    </Wrap>
  );
}
