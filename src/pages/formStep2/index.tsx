import { useHistory, link} from 'react-router-dom';
import * as C from './styles.ts';
import { useForm, formAction } from '../../contexts/formContext'
import { theme } from '../../components/theme';
import {ChangeEvent, useEffect} from 'react';
import { createAbstractBuilder } from 'typescript';
imort {selectOption} from '../../components/selectOption'

export const formStep2 = () => {
    const history = useHistory();
    const {state, dispatch} = useForm();

    useEffect(() =>{
        if(state.name === '') {
            history.push('/');
        } else {
        dispatch({
            type: formAction.setCurrentStep,
            payload: 1
        });
    }}, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            history.push('./step3');
        } else {
            alert('Preencha os dados');
        }

    }
    const setLevel = (level: number) => {
        dispatch({
            type: formAction.setLevel,
            payload: level
        });
    }
    return (
        <theme>
        <C.container>
            <p>Passo 2/3 - {state.name}</p>
            <h1>{state.name}, O que melhor descreve você?</h1>
            <p>Descreva seu momento atual</p>

            <hr/>

            <selectOption 
             title="Sou inciante"
             description= "comecei agora"
             icon= ":)"
             selcted= {state.level === 0}
             onClick={()=>selLevel(0)}
            />

            <selectOption 
             title="Sou programador"
             description= "Já programei"
             icon= ":)"
             {state.level === 1}
             onClick={()=>selLevel(1)}
            />
            
            <link to="/" className='backButton'>Voltar</link>
            <button onClick={handleNextStep}>Próximo</button>
        </C.container>
        </theme>
    );
}