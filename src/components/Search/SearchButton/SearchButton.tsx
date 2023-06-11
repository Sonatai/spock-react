import './styles.css';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DialogDisclosure } from 'reakit';
import { DialogStateReturn } from 'reakit/ts/Dialog/DialogState';

interface ISearchButton {
    dialog: DialogStateReturn;
}

export const SearchButton = (props: ISearchButton): JSX.Element => {
    const { dialog } = props;

    return (
        <DialogDisclosure {...dialog} className="modal__button">
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                className="
                modal-button-icon"
            />
            <div className="modal-button-text">Search</div>
        </DialogDisclosure>
    );
};
