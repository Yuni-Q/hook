import React, { useContext, useEffect, useCallback } from 'react'

import { MyContext } from './App'
import {useInput} from './util/hook'
import {StyledButtonWrapper, StyledComponent, StyledWrapper, StyledText} from './util/style'

const Effect = () => {
  const { context }: any = useContext(MyContext);
  const [text, setText] = useInput('')
  const [text2, setText2] = useInput('')
  
  const onClick = useCallback(() => {
    context.dispatch({ type: 'change', page: 0 });
  }, [context]);
  const scroll = useCallback(() => {
    console.log('scroll');
  }, []);

  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('scroll', scroll, true);
    return () => {
      console.log('bye useEffect')
      window.removeEventListener('scroll', scroll, true);
    }
  }, [scroll])
  useEffect(() => {
    console.log('useEffect text')
  }, [text])
  useEffect(() => {
    console.log('useEffect text2')
  }, [text2])
  
  return (
    <StyledComponent>
      <StyledButtonWrapper onClick={onClick}>x</StyledButtonWrapper>
      <StyledWrapper height="200vh">
        <input type="text" value={text} onChange={setText} />
        <StyledText>{text}</StyledText>
        <input type="text" value={text2} onChange={setText2} />
        <StyledText>{text2}</StyledText>
      </StyledWrapper>
    </StyledComponent>
  )
}

export default Effect;