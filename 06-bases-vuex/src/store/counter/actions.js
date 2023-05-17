import { generateRandomNumber } from '@/helpers/number';

export const incrementRandom = async (context) => {
  context.commit('changeIsLoading', { value: true });
  const randomNumber = await generateRandomNumber(1, 10);
  context.commit('incrementBy', { value: randomNumber });
  context.commit('changeIsLoading', { value: false });
};
