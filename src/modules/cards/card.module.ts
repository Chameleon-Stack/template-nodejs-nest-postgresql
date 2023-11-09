import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../users/repositories/user.repository';
import { CardEntity } from './entities/card.entity';
import { CardRepository } from './repositories/card.repository';
import { CreateCardController } from './useCases/createCard/create-card.controller';
import { CreateCardUseCase } from './useCases/createCard/create-card.usecase';
import { DeleteCardController } from './useCases/deleteCard/delete-card.controller';
import { DeleteCardUseCase } from './useCases/deleteCard/delete-card.usecase';
import { GetCardsController } from './useCases/getCards/get-cards.controller';
import { GetCardsUseCase } from './useCases/getCards/get-cards.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity])],
  providers: [
    CardRepository,
    UserRepository,
    CreateCardUseCase,
    DeleteCardUseCase,
    GetCardsUseCase,
  ],
  controllers: [CreateCardController, DeleteCardController, GetCardsController],
})
export class CardModule {}
