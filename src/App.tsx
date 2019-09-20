import React, { createContext, useReducer } from 'react';
import Layout from './Layout';

export const MyContext = createContext({});

const App: React.FC = () => {
  const initialUserState = {
    title: 'React Hook',
    page: 0,
  }

  const userReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'change': {
        return { ...state, page: action.page }
      }
      case 'title': {
        return { ...state, title: action.title }
      }
      default: {
        throw new Error(`unexpected action.type: ${action.type}`)
      }
    }
  }

  const [value, dispatch] = useReducer(userReducer, initialUserState)
  const context = {
    value,
    dispatch,
  }
  return (

    <>
      <MyContext.Provider value={{ context }} >
        <Layout />
      </MyContext.Provider>
    </>
  );
}

export default App;
