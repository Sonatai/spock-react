import './styles.css';

import { ILoadingSpinner } from 'spock-react/shared/loading-spinner-types';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoadingSpinner = (props: ILoadingSpinner): JSX.Element => {
    const { isLoading } = props;

    return (
        <>
            {isLoading && (
                <div id="backdrop">
                    <div className="text--center">
                        <FontAwesomeIcon
                            icon={faSpinner}
                            spin
                            className=" spinner__border"
                            role="status"
                            aria-label="page is loading"
                        />
                    </div>
                </div>
            )}
        </>
    );
};
