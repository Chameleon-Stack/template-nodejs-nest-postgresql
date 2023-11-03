import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BaseControllerInterface } from '../../../../common/interfaces/base-controller.interface';
import { CustomApiResponseGetDataWrapper } from '../../../../system/decorators/swagger/api-response-get.decorator';
import { CardEntity } from '../../entities/card.entity';
import { CreateUserUseCase } from './create-card.usecase';
import { CreateUserDTO } from './dtos/request/create-user-request.dto';
import { CreateUserResponseDTO } from './dtos/response/create-user.response.dto';

@ApiTags('Card')
@Controller('card')
export class CreateUserController implements BaseControllerInterface {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post('/')
  @HttpCode(201)
  @ApiOperation({ summary: 'Create user' })
  @CustomApiResponseGetDataWrapper({
    status: 201,
    description: 'Create user',
    type: CreateUserResponseDTO,
  })
  public async handle(@Body() user: CreateUserDTO): Promise<CardEntity> {
    return this.createUserUseCase.execute(user);
  }
}
