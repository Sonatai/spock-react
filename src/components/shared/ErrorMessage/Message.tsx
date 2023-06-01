import './styles.css';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IErrorMessage {
    headline: string;
    level?: 'Error' | 'Success' | 'Info' | 'Warning';
}

export const Message = (props: IErrorMessage) => {
    const { headline } = props;

    return (
        <div className="error__message">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
            {headline}
        </div>
    );
};
