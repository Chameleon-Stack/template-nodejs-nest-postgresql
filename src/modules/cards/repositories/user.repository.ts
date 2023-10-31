import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CardEntity } from '../entities/card.entity';
import { UserRepositoryInterface } from './interfaces/user-repository.interface';

@Injectable()
export class UserRepository
  extends Repository<CardEntity>
  implements UserRepositoryInterface
{
  constructor(private readonly dataSource: DataSource) {
    super(CardEntity, dataSource.manager);
  }
  public async createAndSave(new_user: CardEntity): Promise<CardEntity> {
    const user: CardEntity = this.create(new_user);

    return await this.save(user);
  }
  public async updateAndSave(user: CardEntity): Promise<CardEntity> {
    return await this.save(user);
  }
  public async findById(id: string): Promise<CardEntity> {
    return this.dataSource
      .createQueryBuilder(CardEntity, 'user')
      .where(`"user"."id" = '${id}'`)
      .getRawOne();
  }
  public async findByEmail(email: string): Promise<CardEntity> {
    return this.dataSource
      .createQueryBuilder(CardEntity, 'user')
      .where(`"user"."email" = '${email}'`)
      .getRawOne();
  }
  public async deleteUser(user: CardEntity): Promise<void> {
    await this.remove(user);
  }
}
