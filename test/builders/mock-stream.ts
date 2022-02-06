export class MockStream {
  private readonly events: any = {};
  constructor() {
    this.events = {};
  }
  on(event: string, func: () => {}) {
    this.events[event] = func;
    return this;
  }
  pipe(file: any) {
    return this;
  }
  emit(event: string, err?: Error) {
    this.events[event](err);
  }
}
