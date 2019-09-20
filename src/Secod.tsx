import React, { useContext, useCallback } from 'react';

import { MyContext } from './App'
import { StyledButton } from './util/style';
import {changePage} from './util/action'

const Secod: React.FC = () => {
  const { context }: any = useContext(MyContext);
  const onClick = useCallback(() => {
    changePage(context, 2);
  }, [context]);
  return (
    <>
      <StyledButton onClick={onClick}>
        Effect
      </StyledButton>
    </>
  );
}

export default Secod;
