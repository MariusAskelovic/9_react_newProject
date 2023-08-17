import styled from 'styled-components'

const Btn = styled.button`
  font-size: 18px;
  padding: 16px 28px;
  border-radius: 5px;
  font-weight: 500;
  border: none;
  line-height: 1;

  color: ${(props) => props.secondary ? '#333f51' : 'white'};
  background-color: ${(props) => props.secondary ? '#d5dae1' : '#22c55e'};
`

export default Btn
