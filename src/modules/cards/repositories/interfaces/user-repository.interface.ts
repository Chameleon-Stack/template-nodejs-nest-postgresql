import { CardEntity } from '../../entities/card.entity';

export interface UserRepositoryInterface {
  createAndSave(new_user: CardEntity): Promise<CardEntity>;
  updateAndSave(user: CardEntity): Promise<CardEntity>;
  findById(id: string): Promise<CardEntity | null>;
  findByEmail(email: string): Promise<CardEntity | null>;
  deleteUser(user: CardEntity): Promise<void>;
}
