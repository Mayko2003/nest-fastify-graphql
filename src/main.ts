import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import Config from './config/env';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );
  const port = Config().port;
  const host = Config().host;
  await app.listen(port, host, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.info(`Server listening on ${address}`);
  });
}
bootstrap();
