import { MultiButtonModule } from './multi-button.module';

describe('MultiButtonModule', () => {
  let multiButtonModule: MultiButtonModule;

  beforeEach(() => {
    multiButtonModule = new MultiButtonModule();
  });

  it('should create an instance', () => {
    expect(multiButtonModule).toBeTruthy();
  });
});
