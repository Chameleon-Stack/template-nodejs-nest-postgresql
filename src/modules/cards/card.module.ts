import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../users/repositories/user.repository';
import { CardEntity } from './entities/card.entity';
import { CardRepository } from './repositories/card.repository';
import { CreateCardController } from './useCases/createCard/create-card.controller';
import { CreateCardUseCase } from './useCases/createCard/create-card.usecase';
import { DeleteCardController } from './useCases/deleteCard/delete-card.controller';
import { DeleteCardUseCase } from './useCases/deleteCard/delete-card.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity])],
  providers: [
    CardRepository,
    UserRepository,
    CreateCardUseCase,
    DeleteCardUseCase,
  ],
  controllers: [CreateCardController, DeleteCardController],
})
export class CardModule {}
