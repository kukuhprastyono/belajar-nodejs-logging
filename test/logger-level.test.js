import winston from 'winston';

test('logging level', () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
    level: "silly"
  });

  logger.log({level: "error", message: "hello error"})
  logger.log({level: "warn", message: "hello warn"})
  logger.log({level: "info", message: "hello info"})
  logger.log({level: "http", message: "hello http"})
  logger.log({level: "verbose", message: "hello verbose"})
  logger.log({level: "debug", message: "hello debug"})
  logger.log({level: "silly", message: "hello silly"})
});
