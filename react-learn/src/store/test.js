import store from './index';
import { asyncIncrease, asyncDecrease } from './action/counter'

store.dispatch(asyncIncrease());
store.dispatch(asyncDecrease());
