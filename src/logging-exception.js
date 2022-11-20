import winston from 'winston';

winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.File({
      handleExceptions: true,
      filename: "exceptions.log"
    })
  ]
})

hello()