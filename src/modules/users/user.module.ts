import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { CreateUserController } from './useCases/createUser/create-user.controller';
import { CreateUserUseCase } from './useCases/createUser/create-user.usecase';
import { DeleteUserController } from './useCases/deleteUser/delete-user.controller';
import { DeleteUserUseCase } from './useCases/deleteUser/delete-user.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [CreateUserUseCase, UserRepository, DeleteUserUseCase],
  controllers: [CreateUserController, DeleteUserController],
})
export class UserModule {}
