import { Controller, Delete, HttpCode, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BaseControllerInterface } from '../../../../common/interfaces/base-controller.interface';
import { CustomApiResponseGetDataWrapper } from '../../../../system/decorators/swagger/api-response-get.decorator';
import { DeleteUserUseCase } from './delete-user.usecase';
import { CreateUserResponseDTO } from './dtos/response/create-user.response.dto';

@ApiTags('User')
@Controller('user')
export class DeleteUserController implements BaseControllerInterface {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}

  @Delete('/')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete user' })
  @CustomApiResponseGetDataWrapper({
    status: 204,
    description: 'Delete user',
    type: CreateUserResponseDTO,
  })
  public async handle(@Query() id: string): Promise<void> {
    return this.deleteUserUseCase.execute(id);
  }
}
