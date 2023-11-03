import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../users/repositories/user.repository';
import { CategoryEntity } from './entities/category.entity';
import { CategoryRepository } from './repositories/category.repository';
import { CreateCategoryController } from './useCases/createCategory/create-category.controller';
import { CreateCategoryUseCase } from './useCases/createCategory/create-category.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CreateCategoryUseCase, CategoryRepository, UserRepository],
  controllers: [CreateCategoryController],
})
export class CategoryModule {}
