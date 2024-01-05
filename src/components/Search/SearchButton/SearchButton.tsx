import './styles.css';

import { DialogDisclosure } from 'reakit';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISearchButton } from 'spock-react/components/search-button-types';

export const SearchButton = (props: ISearchButton): JSX.Element => {
    const { dialog } = props;

    return (
        <DialogDisclosure {...dialog} className="modal__button group">
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                className="
                modal__button__icon"
            />
            <div className="modal__button__text">Search</div>
        </DialogDisclosure>
    );
};
