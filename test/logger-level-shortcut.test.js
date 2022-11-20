import winston from 'winston';

test('logging level', () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
    level: 'silly',
  });

  logger.error('hello error');
  logger.warn('hello warn');
  logger.info('hello info');
  logger.http('hello http');
  logger.verbose('hello verbose');
  logger.debug('hello debug');
  logger.silly('hello silly');
});
