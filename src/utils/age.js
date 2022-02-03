export const getAge = (birthday) => {
  const dateParts = birthday.split('/')

  const today = new Date()
  const birthDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  return age
}
