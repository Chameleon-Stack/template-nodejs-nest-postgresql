import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from '../../../categories/repositories/category.repository';
import { CategoryRepositoryInterface } from '../../../categories/repositories/interfaces/category-repository.interface';
import { UserRepositoryInterface } from '../../repositories/interfaces/user-repository.interface';
import { UserRepository } from '../../repositories/user.repository';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepositoryInterface,

    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepositoryInterface,
  ) {}

  public async execute(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException('User does not exists!');
    }

    const categories = await this.categoryRepository.findAll(id);

    categories.forEach(async (category) => {
      try {
        await this.categoryRepository.deleteCategory(category);
      } catch (err) {
        throw new BadRequestException(`Error deleting category ${err}`);
      }
    });

    await this.userRepository.deleteUser(user);
  }
}
