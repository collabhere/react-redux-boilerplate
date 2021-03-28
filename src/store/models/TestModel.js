import { action } from 'easy-peasy';


const defaultValues = {
    name: '',
}

export default {

    setTestState: action((state, payload) => {
        return {
            ...state,
            name: payload.name
        }   
    }),

    resetReduxState: action(() => {
        return {
            ...defaultValues
        }
    }),

};