export const changePage = (context: any, page: number ) => {
  context.dispatch({ type: 'change', page })
}

export const changeTitle = (context: any, title: number ) => {
  context.dispatch({ type: 'title', title })
}