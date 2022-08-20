import './styles.css';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchButton = () => {
	return (
		<>
			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				className='fa-lg modal-button-icon'
			/>
			<div className='modal-button-text'>Search</div>
		</>
	);
};
