import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from './entities/card.entity';
import { UserRepository } from './repositories/user.repository';
import { CreateUserController } from './useCases/createCard/create-card.controller';
import { CreateUserUseCase } from './useCases/createCard/create-card.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity])],
  providers: [CreateUserUseCase, UserRepository],
  controllers: [CreateUserController],
})
export class CardModule {}
