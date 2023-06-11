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
        <DialogDisclosure {...dialog} className="group modal__button">
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
