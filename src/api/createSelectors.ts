const createSelectors = (
  _store
) => {
  let store = _store
  for (let k of Object.keys(store.getState())) {
    ({} as any)[k] = () => store((s:any) => s[k])
  }

  return store
}

export default createSelectors