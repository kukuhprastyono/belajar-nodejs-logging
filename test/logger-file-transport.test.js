import winston from 'winston';

test("logger file transport", () => {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "app.log",
        
      })
    ]
  })

  logger.info("logger info 1")
  logger.info("logger info 2")
  logger.info("logger info 3")
})