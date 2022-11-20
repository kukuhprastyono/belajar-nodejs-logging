import winston from 'winston';

test('transport file level', () => {
  const logger = winston.createLogger({
    level: 'info',
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: 'application.log',
      }),
      new winston.transports.File({
        filename: 'application-error.log',
        level: 'error',
      }),
    ],
  });

  logger.info('logger info');
  logger.error('logger error');
});
