import styled from 'styled-components';

interface StyledWrapperProps {
  height?: string;
}

export const StyledButton = styled.button`
width: 50px;
height: 50px;
background-color: black;
color: white;
font-weight: bold;
`;

export const StyledComponent = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: gray;
  overflow: scroll;
`;

export const StyledButtonWrapper = styled.button`
  position: fixed;
  width: 30px;
  height: 30px;
  top: 30px;
  right: 30px;
  background-color: white;
  line-height: 30px;
  text-align: center;
`;

export const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: ${({ height }) => !!height ? height : '100vh'};
`;

export const StyledText = styled.div`
  color: white;
  margin-top: 30px;
  font-size: 50px;
`;