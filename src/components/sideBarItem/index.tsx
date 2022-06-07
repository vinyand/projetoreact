import * as C from '/.styles';
import { ReactComponent as LogoIcon} from '../../svg/logo.svg';
import {Link} from 'react-router-dom';

type Props = {
    title: string,
    description: string,
    icon: string,
    path: string;
    active: boolean;
}

export const SidebarItem = ({ title, description, path, icon, active}: Props ) => {
    return (
        <C.container>
           <Link to={path}>
                <C.info>
                    <C.title>{title}</C.title>
                    <C.description>{description}</C.description>
                </C.info>
                <C.iconArea active={active}>
                    {icon === 'profile' && <C.LogoIcon fill="white" width= {24} height={24} />}
                </C.iconArea>
                <C.Point active={active}></C.Point>
           </Link>
        </C.container>
    );
}