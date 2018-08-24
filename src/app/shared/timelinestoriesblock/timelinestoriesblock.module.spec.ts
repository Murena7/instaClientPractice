import { TimelinestoriesblockModule } from './timelinestoriesblock.module';

describe('TimelinestoriesblockModule', () => {
  let timelinestoriesblockModule: TimelinestoriesblockModule;

  beforeEach(() => {
    timelinestoriesblockModule = new TimelinestoriesblockModule();
  });

  it('should create an instance', () => {
    expect(timelinestoriesblockModule).toBeTruthy();
  });
});
