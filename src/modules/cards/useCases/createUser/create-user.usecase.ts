import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateUserDTO } from '../../dtos/request/create-user-request.dto';
import { CardEntity } from '../../entities/card.entity';
import { UserRepositoryInterface } from '../../repositories/interfaces/user-repository.interface';
import { UserRepository } from '../../repositories/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  public async execute({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<CardEntity> {
    if (!name || !email || !password) {
      throw new BadRequestException('Missins params!');
    }

    const foundUser = await this.userRepository.findByEmail(email);

    if (foundUser) {
      throw new BadRequestException('User already exists!');
    }

    const user = (await this.userRepository.createAndSave(
      {} as CardEntity,
    )) as CardEntity;

    return user;
  }
}
