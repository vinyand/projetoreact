import { useHistory, Link} from 'react-router-dom';
import * as C from './styles.ts';
import { useForm, formAction } from '../../contexts/formContext'
import { theme } from '../../components/theme';
import {ChangeEvent, useEffect} from 'react';

export const formStep3 = () => {
    const history = useHistory();
    const {state, dispatch} = useForm();

    useEffect(() =>{
        if(state.name === ''){
            history.push('/');
        } else {
        dispatch({
            type: formAction.setCurrentStep,
            payload: 3
        });
    }}, []);

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            console.log(state);
        } else {
            alert('Preencha os dados!');
        }
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: formAction.setEmail,
            payload: e.target.value 
        });
    }
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: formAction.setGithub,
            payload: e.target.value 
        });
    } 
    return (
        <theme>
        <C.container>
            <p>Passo 3/3 - {state.name}</p>
            <h1>Legal {state.name}, onde te achamos</h1>
            <p>Preencha com seu contato</p>

            <hr/>

            <label>
                Aual seu email
                <input 
                    type="email"
                    value={state.email}
                    onChange={handleEmailChange}
                />
            </label>
            <label>
                Aual seu Github
                <input 
                    type="url"
                    value={state.github}
                    onChange={handleGithubChange}
                />
            </label>

            <link to="/" className='backButton'>Voltar</link>
            <button onClick={handleNextStep}>Próximo</button>
        </C.container>
        </theme>
    );
}