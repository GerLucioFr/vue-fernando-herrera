import { GetterTree } from 'vuex';
import { ExampleState } from './state';
import { State } from '../state';

const getters: GetterTree<ExampleState, State> = {
  someGetter(/* state */) {
    // return true;
  },
};

export default getters;
