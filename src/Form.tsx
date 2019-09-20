import React, { useContext, useCallback } from 'react'
import styled from 'styled-components';

import { MyContext } from './App'
import { useInput } from './util/hook'
import { changePage } from './util/action'
import { changeTitle} from './util/action'
import { StyledButtonWrapper, StyledComponent, StyledWrapper } from './util/style'

const StyledSubmitButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;


const Form = () => {
  const { context }: any = useContext(MyContext);
  const [text, setText] = useInput('')
  const onClick = useCallback(() => {
    changePage(context, 0);
  }, [context]);
  const onSubmit = useCallback((event: any) => {
    event.preventDefault();
    event.stopPropagation();
    changeTitle(context, text);
    changePage(context, 0);
  }, [text, context])
  return (
    <StyledComponent>
      <StyledButtonWrapper onClick={onClick}>x</StyledButtonWrapper>
      <StyledWrapper>
        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={setText} />
          <br/>
          <StyledSubmitButtonWrapper>
            <input type="submit" value={'수정'} />
          </StyledSubmitButtonWrapper>
        </form>
      </StyledWrapper>
    </StyledComponent>
  )
}

export default Form;