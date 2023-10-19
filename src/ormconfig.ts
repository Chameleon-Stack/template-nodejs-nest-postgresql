import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: configService.get('POSTGRESQL_PORT') || 5432,
  username: 'postgres',
  password: configService.get('POSTGRESQL_PASSWORD'),
  database: process.env.NODE_ENV === 'test' ? 'test' : 'chameleon',
  entities: ['src/**/**/entities/*.entity{.ts,.js}'],
  logging: false,
  synchronize: false,
  migrationsTableName: 'migrations',
});
