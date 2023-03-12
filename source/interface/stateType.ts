import {store} from '../store/store';

export type RootState = ReturnType<typeof store.getState>;
export type ApiDispatch = typeof store.dispatch;
