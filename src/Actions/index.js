let nextId = 0
export const someAction = obj => {
  return {
    type: 'SOME_ACTION',
    id: nextId++,
    obj
  }
}
