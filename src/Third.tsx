import React, { useContext, useCallback } from 'react';

import { MyContext } from './App'
import { StyledButton } from './util/style';
import { changePage } from './util/action'

const Third: React.FC = () => {
  const { context }: any = useContext(MyContext);
  const onClick = useCallback(() => {
    changePage(context, 3);
  }, [context]);
  return (
    <>
      <StyledButton onClick={onClick}>
        Form
      </StyledButton>
    </>
  );
}

export default Third;
