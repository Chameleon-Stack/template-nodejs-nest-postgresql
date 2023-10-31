import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ICreateUserDTO } from '../dtos/request/create-user-request.dto';
import { CategoryEntity } from '../entities/category.entity';
import { UserRepositoryInterface } from './interfaces/user-repository.interface';

@Injectable()
export class UserRepository
  extends Repository<CategoryEntity>
  implements UserRepositoryInterface
{
  constructor(private readonly dataSource: DataSource) {
    super(CategoryEntity, dataSource.manager);
  }
  public async createAndSave(
    new_user: ICreateUserDTO,
  ): Promise<CategoryEntity> {
    const user = this.create(new_user);

    return await this.save(user);
  }
  public async updateAndSave(user: CategoryEntity): Promise<CategoryEntity> {
    return await this.save(user);
  }
  public async findById(id: string): Promise<CategoryEntity> {
    return this.dataSource
      .createQueryBuilder(CategoryEntity, 'user')
      .where(`"user"."id" = '${id}'`)
      .getRawOne();
  }
  public async findByEmail(email: string): Promise<CategoryEntity> {
    return this.dataSource
      .createQueryBuilder(CategoryEntity, 'user')
      .where(`"user"."email" = '${email}'`)
      .getRawOne();
  }
  public async deleteUser(user: CategoryEntity): Promise<void> {
    await this.remove(user);
  }
}
