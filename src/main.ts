import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import * as swaggerStats from 'swagger-stats';
import { AppModule } from './app.module';
import { initial } from './system/utils/initial';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotenv.config();

const getHost = (): string => {
  const port = process.env.PORT || 3333;

  return process.env.HOST || `http://localhost:${port}`;
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Supplier Portal')
    .setDescription('Supplier Portal endpoints')
    .setVersion('1.0')
    .addServer(getHost())
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(
    swaggerStats.getMiddleware({
      swaggerSpec: document,
      swaggerOnly: true,
      name: 'supplier-portal-service',
      hostname: getHost(),
      uriPath: '/observability',
    }),
  );

  await app.listen(process.env.PORT || 3333);

  initial(getHost());
}

bootstrap();
