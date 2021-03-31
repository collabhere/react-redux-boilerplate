import { createStore } from 'easy-peasy';

import testModel from './models/TestModel';


const getStoreModels = () => {
    return {
        testModel,
    }
};

export const store = createStore(getStoreModels(), {
    disableImmer: true,
});

