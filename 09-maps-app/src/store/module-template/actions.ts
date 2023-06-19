import { ActionTree } from 'vuex';
import { ExampleState } from './state';
import { State } from '../state';

const actions: ActionTree<ExampleState, State> = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  },
};

export default actions;
