import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from './entities/card.entity';
import { UserRepository } from './repositories/user.repository';
import { CreateUserController } from './useCases/createUser/create-user.controller';
import { CreateUserUseCase } from './useCases/createUser/create-user.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity])],
  providers: [CreateUserUseCase, UserRepository],
  controllers: [CreateUserController],
})
export class CardModule {}
