import { helloWorldRepository } from '../repositories';

export const hello = async () => {
  const result = helloWorldRepository.get();
  return result;
};
