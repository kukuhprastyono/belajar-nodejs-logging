import winston from 'winston';

test('logging default format', () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
    format: winston.format.json(),
  });

  logger.info('logger infoo format');
});

test('logging simple format', () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
  });

  logger.info('logger infoo format');
});

test('logging simple printf', () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
    format: winston.format.printf(log => {
      return `${new Date}: ${log.level.toUpperCase()}: ${log.message}`
    })
  });

  logger.info('logger infoo format');
});
