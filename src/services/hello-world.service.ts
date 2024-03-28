import { helloWorldRepository } from '../repositories';

export const hello = async () => {
  try {
    const result = helloWorldRepository.get();
    return result;
  } catch (error) {
    throw error;
  }
}
