import * as C from './styles';
import { ReactNode } from './styles';
import { Header } from './components/Header';
import {SidebarItem} from '../../components/SidebarItem'
import { description } from '../../selectOption/styles';
import {} from '../../context/formContext';

type Props = {
    children: ReactNode;
}

export const theme = ({children}: Props) => {
    const {state} = useForm;
    return (
        <C.container>
            <C.area>
                <header />
                <C.steps>
                    <C.sidebar>

                        <C.sidebarItem
                            title="Pessoal"
                            description="se identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <C.sidebarItem
                            title="Pessoal"
                            description="Seu nivel"
                            icon="Book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                        <C.sidebarItem
                            title="Contatos"
                            description="como te achar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                    </C.sidebar>
                        <C.page>
                            {children}
                        </C.page>
                </C.steps>
            </C.area>
        </C.container>
    )
}