class HelloWorldService {
  constructor() { }

  async hello() {
    return 'Hello World';
  }
};

export const helloWorldService = new HelloWorldService();
