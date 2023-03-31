export const sleepFun = (times) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, times)
  })
}
