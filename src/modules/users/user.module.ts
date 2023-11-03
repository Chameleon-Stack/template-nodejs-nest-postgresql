import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { CreateUserController } from './useCases/createUser/create-user.controller';
import { CreateUserUseCase } from './useCases/createUser/create-user.usecase';
import { DeleteUserController } from './useCases/deleteUser/delete-user.controller';
import { DeleteUserUseCase } from './useCases/deleteUser/delete-user.usecase';
import { GetUserByIdController } from './useCases/getUserById/get-user-by-id.controller';
import { GetUserByIdUseCase } from './useCases/getUserById/get-user-by-id.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    CreateUserUseCase,
    UserRepository,
    DeleteUserUseCase,
    GetUserByIdUseCase,
  ],
  controllers: [
    CreateUserController,
    DeleteUserController,
    GetUserByIdController,
  ],
})
export class UserModule {}
