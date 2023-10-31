import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import request from 'supertest';
import { UserRepository } from '../../../repositories/user.repository';
import { DeleteUserController } from '../delete-user.controller';
import { DeleteUserUseCase } from '../delete-user.usecase';

describe('Delete user Controller', () => {
  let app: INestApplication;
  let deleteUserUseCase: DeleteUserUseCase;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [DeleteUserController],
      providers: [
        DeleteUserUseCase,
        {
          provide: getRepositoryToken(UserRepository),
          useValue: {},
        },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    deleteUserUseCase = moduleRef.get<DeleteUserUseCase>(DeleteUserUseCase);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    app.close();
  });

  it('should be defined', async () => {
    expect(deleteUserUseCase).toBeDefined();
  });

  it('Should be able to delete user and return status 204', async () => {
    await request(app.getHttpServer())
      .delete('/user/uuid')
      .expect(HttpStatus.NO_CONTENT);
  });
});
