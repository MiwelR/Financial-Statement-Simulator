export const checkResultToShowMessage = (result) => {
  if (result > 1) {
    return 'moreThanOne'
  } else if (result === 1) {
    return 'equalToOne'
  } else if (result < 1) {
    return 'lessThanOne'
  }
}
