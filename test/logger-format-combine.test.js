import winston from 'winston';

test('logging format combine', () => {
  const logger = winston.createLogger({
    // format: winston.format.simple(),
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.colorize(),
      winston.format.ms(),
      winston.format.simple()
    ),
    transports: [new winston.transports.Console({})],
  });

  logger.error('logger infoo error');
  logger.warn('logger infoo warn');
  logger.info('logger infoo format');
});
