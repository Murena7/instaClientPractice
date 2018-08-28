import { MiniuserblockModule } from './miniuserblock.module';

describe('MiniuserblockModule', () => {
  let miniuserblockModule: MiniuserblockModule;

  beforeEach(() => {
    miniuserblockModule = new MiniuserblockModule();
  });

  it('should create an instance', () => {
    expect(miniuserblockModule).toBeTruthy();
  });
});
