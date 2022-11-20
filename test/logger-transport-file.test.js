import DailyRotateFile from 'winston-daily-rotate-file';
import winston from 'winston';

test('logger daily rotate file', () => {
  const logger = winston.createLogger({
    level: 'info',
    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        filename: 'application-%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '1m',
        maxFiles: '14d',
      }),
    ],
  });

  for (let index = 0; index <= 10000; index++) {
    logger.info(`Hello logger ${index}`);
  }
});
