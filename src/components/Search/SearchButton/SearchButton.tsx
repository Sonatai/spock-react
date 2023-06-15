import './styles.css';

import { DialogDisclosure } from 'reakit';
import { DialogStateReturn } from 'reakit/ts/Dialog/DialogState';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ISearchButton {
    dialog: DialogStateReturn;
}

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
