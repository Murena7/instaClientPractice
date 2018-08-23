import { TimelinefeedModule } from './timelinefeed.module';

describe('TimelinefeedModule', () => {
  let timelinefeedModule: TimelinefeedModule;

  beforeEach(() => {
    timelinefeedModule = new TimelinefeedModule();
  });

  it('should create an instance', () => {
    expect(timelinefeedModule).toBeTruthy();
  });
});
