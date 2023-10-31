import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { CreateUserController } from './useCases/createUser/create-user.controller';
import { CreateUserUseCase } from './useCases/createUser/create-user.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [CreateUserUseCase, UserRepository],
  controllers: [CreateUserController],
})
export class UserModule {}
