import { TasksService } from '../module/tasks/service/tasks.service';
import { TasksRepository } from '../module/tasks/repository/tasks.repository';
import { Test } from '@nestjs/testing';
import { TaskStatus } from '../module/tasks/entity/tasks-status.enum';
import { NotFoundException } from '@nestjs/common';

const mockTasksRepository = () => ({
  getTasks: jest.fn(),
  getTaskById: jest.fn(),
});

const mockUser = {
  id: 'someId',
  username: 'someUsername',
  password: 'somePassword',
  tasks: [],
};

const mockTask = {
  id: 'someId',
  title: 'someTitle',
  description: 'someDescription',
  status: TaskStatus.OPEN,
};

describe('TaskService', () => {
  let tasksService: TasksService;
  let taskRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TasksRepository, useFactory: mockTasksRepository },
      ],
    }).compile();

    tasksService = module.get(TasksService);
    taskRepository = module.get(TasksRepository);
  });

  describe('getTasks', () => {
    it('calls TasksRepository.getTasks and return the result', async () => {
      taskRepository.getTasks.mockResolvedValue('someValue');
      const result = await tasksService.getTasks(null, mockUser);
      expect(result).toEqual('someValue');
    });
  });

  describe('getTasksById', () => {
    it('calls TasksRepository.getTaskById and return the result', async () => {
      taskRepository.getTaskById.mockResolvedValue(mockTask);
      const result = await tasksService.getTaskById('someId', mockUser);
      expect(result).toEqual(mockTask);
    });
    it('calls TasksRepository.getTaskById and handles an error', async () => {
      taskRepository.getTaskById.mockImplementation(() => {
        throw new NotFoundException(`Task with ID "someId" not found`);
      });
      await expect(
        tasksService.getTaskById('someId', mockUser),
      ).rejects.toThrow(NotFoundException);
    });
  });
});
