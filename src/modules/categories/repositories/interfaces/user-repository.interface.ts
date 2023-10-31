import { ICreateUserDTO } from '../../dtos/request/create-user-request.dto';
import { CategoryEntity } from '../../entities/category.entity';

export interface UserRepositoryInterface {
  createAndSave(new_user: ICreateUserDTO): Promise<CategoryEntity>;
  updateAndSave(user: CategoryEntity): Promise<CategoryEntity>;
  findById(id: string): Promise<CategoryEntity | null>;
  findByEmail(email: string): Promise<CategoryEntity | null>;
  deleteUser(user: CategoryEntity): Promise<void>;
}
