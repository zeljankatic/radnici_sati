import { Test, TestingModule } from '@nestjs/testing';
import { RadniciController } from './radnici.controller';
import { RadniciService } from './radnici.service';

describe('RadniciController', () => {
  let controller: RadniciController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RadniciController],
      providers: [RadniciService],
    }).compile();

    controller = module.get<RadniciController>(RadniciController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
