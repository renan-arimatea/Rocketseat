// clearTimeOut cancela um timeOut

const timeOut = 3000
const finished = () => {console.log('finished time')}

let timer = setTimeout(finished, timeOut)

clearTimeout(timer)
