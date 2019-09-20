import React, { useContext, useCallback } from 'react';

import { MyContext } from './App'
import { StyledButton } from './util/style';
import { changePage } from './util/action'

const First: React.FC = () => {
  const { context }: any = useContext(MyContext);
  const onClick = useCallback(() => {
    changePage(context, 1);
  }, [context]);
  return (
    <>
      <StyledButton onClick={onClick}>
        state
      </StyledButton>
    </>
  );
}

export default First;
