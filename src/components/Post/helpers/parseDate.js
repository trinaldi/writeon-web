export const parseDate = (date) => {
  date = new Date(date)
  const day = date.getDate() + 1 // This is *so* stupid.
  const month = date.getMonth() + 1 // This is *so* stupid.
  const year = date.getFullYear()

  const parsedDate = `${day}/${month}/${year}`
  return parsedDate
}
