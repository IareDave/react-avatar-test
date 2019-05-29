import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
  max-width: 25%;

  &:p {
    font-size: 1rem;
  }

  &:em {
    font-size: .8rem;
  }
`;

export const Dropbox = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;
border-width: 2px;
border-radius: 2px;
border-color: #eeeeee;
border-style: dashed;
background-color: #fafafa;
color: #bdbdbd;
outline: none;
transition: border .24s ease-in-out;
&:hover {
  border-color: #2196f3;
}

&:disabled {
  opacity: 0.6;
}
`;
