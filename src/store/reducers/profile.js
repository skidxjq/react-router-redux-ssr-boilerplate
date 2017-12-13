const initialState = {
  "name": "peter",
  "age": 30,
  "career": "Engineer",
  "link": "http://www.google.com"
}

export default function (state = initialState, action) {
  const type = action.type
  switch (type) {
    default: return state
  }
}