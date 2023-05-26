import { ref } from 'vue';

const useCounter = (initValue = 0) => {
  const counter = ref(initValue);
  return {
    counter,
    addCounter: () => counter.value++,
    minusCounter: () => counter.value--,
  };
};

export default useCounter;
