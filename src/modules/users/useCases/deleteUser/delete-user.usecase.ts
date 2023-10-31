import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepositoryInterface } from '../../repositories/interfaces/user-repository.interface';
import { UserRepository } from '../../repositories/user.repository';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  public async execute(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException('User does not exists!');
    }

    await this.userRepository.deleteUser(user);
  }
}
