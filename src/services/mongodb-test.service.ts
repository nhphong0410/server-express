import { mongodbTestRepository } from '../repositories';

export const getSampleText = async () => {
  const result = mongodbTestRepository.getSampleText();
  return result;
};
