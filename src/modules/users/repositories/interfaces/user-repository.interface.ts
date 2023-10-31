import { ICreateUserDTO } from '../../dtos/request/create-user-request.dto';
import { UserEntity } from '../../entities/user.entity';

export interface UserRepositoryInterface {
  createAndSave(new_user: ICreateUserDTO): Promise<UserEntity>;
  updateAndSave(user: UserEntity): Promise<UserEntity>;
  findById(id: string): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
  deleteUser(user: UserEntity): Promise<void>;
}
