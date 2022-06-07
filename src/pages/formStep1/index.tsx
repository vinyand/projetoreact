import { useHistory} from 'react-router-dom';
import * as C from './styles.ts';
import { useForm, formAction } from '../../contexts/formContext'
import { theme } from '../../components/theme';
import {ChangeEvent, useEffect} from 'react';

export const formStep1 = () => {
    const history = useHistory();
    const {state, dispatch} = useForm();

    useEffect(() =>{
        dispatch({
            type: formAction.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
        history.push('./step2');
        } else {
            alert('Digite seu nome!');
        }

    }
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: formAction.setName,
            payload: e.target.value 
        });
    }
    return (
        <theme>
        <C.container>
            <p>Passo 1/3 - {state.name}</p>
            <h1>Vamos Comecar com seu nome</h1>
            <p>Preencha o campo abaixo com seu nome completo.</p>

            <hr/>

            <label>
                Seu nome Completo
                <input 
                    type="text"
                    autoFocus
                    value={state.name}
                    onChange={handleNameChange}
                />
            </label>
            <button onClick={handleNextStep}>Próximo</button>
        </C.container>
        </theme>
    );
}