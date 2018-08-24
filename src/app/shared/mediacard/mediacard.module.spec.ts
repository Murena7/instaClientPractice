import { MediacardModule } from './mediacard.module';

describe('MediacardModule', () => {
  let mediacardModule: MediacardModule;

  beforeEach(() => {
    mediacardModule = new MediacardModule();
  });

  it('should create an instance', () => {
    expect(mediacardModule).toBeTruthy();
  });
});
