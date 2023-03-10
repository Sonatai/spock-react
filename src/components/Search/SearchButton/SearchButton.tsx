import './styles.css';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchButton = (): JSX.Element => {
    return (
        <>
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                //  eslint-disable-next-line tailwindcss/no-custom-classname
                className="fa-lg modal-button-icon"
            />
            <div className="modal-button-text">Search</div>
        </>
    );
};
