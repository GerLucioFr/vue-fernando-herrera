import { MutationTree } from 'vuex';
import { ExampleState } from './state';

const mutation: MutationTree<ExampleState> = {
  someMutation(/* state: ExampleState */) {
    // a line to prevent linter errors
  },
};

export default mutation;
