import winston from 'winston';
import TransportStream from 'winston-transport';

test("logger custom transport", () => {
  class MyTransport extends TransportStream {
    constructor(options){
      super(options)
    }

    log(info, next){
      console.log(`${new Date} : ${info.level.toUpperCase()} => ${info.message}`);
      next()
    }
  }

  const logger = winston.createLogger({
    transports: new MyTransport({})
  })

  logger.error("Hello error")
  logger.warn("Hello warn")
  logger.info("Hello info")
})