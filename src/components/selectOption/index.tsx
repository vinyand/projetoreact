import * as C from './styles';

type Props = {
    title: string,
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}



export const selectOption = ({title, description, icon, selected, onClick}: Props) => {
    return (
        <C.Container onClick={onClick} selected={selected}>
            <C.icon>{icon}</C.icon>
            <c.info>
                <C.title>{title}</C.title>
                <C.description>{description}</C.description>
            </c.info>
        </C.Container> 
    );
}