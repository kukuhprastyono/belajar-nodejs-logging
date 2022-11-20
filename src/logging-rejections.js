import winston from 'winston';

winston.createLogger({
  level:"info",
  transports: [
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "rejections.log"
    })
  ]
})

async function asyncFunction() {
  return Promise.reject("reject function")
}

asyncFunction()