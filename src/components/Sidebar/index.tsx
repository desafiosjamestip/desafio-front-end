import { Link } from 'react-router-dom';
import * as C from './styles';
import { ReactComponent as DocumentIcon } from '../../svgs/document.svg'

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const Sidebar = ({ title, description, icon, path, active }: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    <DocumentIcon fill="white" width={24} height={24} />
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}