export const ACTION_BAR_CHANGED = "ACTION_BAR_CHANGED"
export const actionBarChange = (event) => ({
  type: ACTION_BAR_CHANGED,
  payload: event.target.value,
})

export const WINDOW_KEYUP = "WINDOW_KEYUP"
export const windowKeyup = (event) => ({
  type: WINDOW_KEYUP,
  payload: event.key,
})
