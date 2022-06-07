// Context, reducer, Provider, hook  
import {createContext, useContext, useReducer} from 'react';

type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}

type Action = { 
    type: formAction;
    payload: any;
};

type contextType = {
    state: State;
    dispatch: (action: Action) => void;
};

type formProviderProps = {
    children: ReactNode
};

const inicialData: State = {
    currentStep: 0,
    name:'',
    level: 0,
    email: '',
    github: ''
};

// Context 

const formContext = createContext<contextType | undefined>(undefined);

// reducer 
export enum formAction {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
const formReducer = (state: State, action: Action) => {
    switch(action.type) {
        case formAction.setCurrentStep:
            return {...state, currentStep: action.payload};
        case formAction.setName:
            return {...state, name: action.payload};
        case formAction.setLevel:
            return {...state, level: action.payload};
        case formAction.setEmail:
            return {...state, email: action.payload};
        case formAction.setGithub:
            return {...state, github: action.payload};
        default:
            return state;
    }

}

// provider 

export const formProvider = ({children}: formProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, inicialData)
    const value = {state, dispatch};

    return (
        <formContext.Provider value={value}>
            {children}
        </formContext.Provider>
    )
}

// Context hook 
export const useForm = () => {
    const context = useContext(formContext);
    if (context === undefined) {
        throw new Error ('useForm precisa ser usado dentro do formProvider');    
    }
    return context;
}

