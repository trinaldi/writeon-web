export const parseDate = (date) => {
  return splitDate(date)
}

const splitDate = (date) => {
  date = date.split('-')
  return `${date[2]}/${date[1]}/${date[0]}`
}

// `Date` was returning a day before. JsvaScript's `Date`is actually a
// timestampa. This is such a mess. I do not want to add any other library
// to deal with this (momen.js or whatever the flavor of the week is).
