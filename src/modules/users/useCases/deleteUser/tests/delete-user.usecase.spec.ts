import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../../../entities/user.entity';
import { UserRepository } from '../../../repositories/user.repository';
import { DeleteUserUseCase } from '../delete-user.usecase';

describe('Delete user UseCase', () => {
  let deleteUserUseCase: DeleteUserUseCase, repository: UserRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteUserUseCase,
        {
          provide: getRepositoryToken(UserRepository),
          useValue: {
            findByEmail: jest.fn(),
            createAndSave: jest.fn(),
          },
        },
      ],
    }).compile();

    deleteUserUseCase = module.get<DeleteUserUseCase>(DeleteUserUseCase);

    repository = await module.resolve<UserRepository>(
      getRepositoryToken(UserRepository),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', async () => {
    expect(deleteUserUseCase).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('Should be able to delete user', async () => {
    const user = {
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
      password: '******',
    } as UserEntity;

    const createAndSaveUserSpy = jest
      .spyOn(repository, 'findById')
      .mockResolvedValueOnce(user);

    await deleteUserUseCase.execute('1');

    expect(createAndSaveUserSpy).toHaveBeenCalled();
  });
});
