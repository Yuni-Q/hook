import React, { useContext, useCallback } from 'react'
import styled from 'styled-components';

import { MyContext } from './App'
import { useInput } from './util/hook'
import { changePage } from './util/action'
import { StyledButtonWrapper, StyledComponent, StyledWrapper, StyledText } from './util/style'

const State = () => {
  const { context }: any = useContext(MyContext);
  const [text, setText] = useInput('')
  const onClick = useCallback(() => {
    changePage(context, 0);
  }, [context]);
  return (
    <StyledComponent>
      <StyledButtonWrapper onClick={onClick}>x</StyledButtonWrapper>
      <StyledWrapper>
        <input type="text" value={text} onChange={setText} />
        <StyledText>{text}</StyledText>
      </StyledWrapper>
    </StyledComponent>
  )
}

export default State;