// setTimeOut roda uma função depois de X milissegundos

const timeOut = 3000
const finished = () => {console.log('finished time')}

setTimeout(finished, timeOut)
console.log('aguardar')
