import { Test, TestingModule } from '@nestjs/testing';
import { RadniciService } from './radnici.service';

describe('RadniciService', () => {
  let service: RadniciService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RadniciService],
    }).compile();

    service = module.get<RadniciService>(RadniciService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
