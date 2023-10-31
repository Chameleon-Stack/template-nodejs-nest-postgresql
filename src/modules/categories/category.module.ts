import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { UserRepository } from './repositories/user.repository';
import { CreateUserController } from './useCases/createUser/create-user.controller';
import { CreateUserUseCase } from './useCases/createUser/create-user.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CreateUserUseCase, UserRepository],
  controllers: [CreateUserController],
})
export class CategoryModule {}
