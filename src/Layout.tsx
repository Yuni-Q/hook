import React, { useContext } from 'react'
import styled from 'styled-components';

import First from './First';
import Second from './Secod';
import Third from './Third';
import { MyContext } from './App';
import State from './State';
import Effect from './Effect';
import Form from './Form';

const StyledLayout = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const StyledWrapper = styled.div`
 display: flex;
 justify-content: space-around;
 width: 200px;
`;



export default function Layout() {
  const { context }: any = useContext(MyContext);
  return (
    <StyledLayout>
      <h1>{context.value.title}</h1>
      <StyledWrapper>
        <First />
        <Second />
        <Third />
      </StyledWrapper>
      {context.value.page as number === 1 && <State />}
      {context.value.page as number === 2 && <Effect />}
      {context.value.page as number === 3 && <Form />}
    </StyledLayout>
  )
}
