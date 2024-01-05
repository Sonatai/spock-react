import './styles.css';

import {
    faCircleCheck,
    faCircleInfo,
    faCircleXmark,
    faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IErrorMessage, TLevel } from 'spock-react/shared/message-types';

export const Message = (props: IErrorMessage): JSX.Element => {
    const { headline, level, children } = props;

    return (
        <div className="message">
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <div className={`message__header message__${level}`}>
                <FontAwesomeIcon
                    icon={getIcon(level)}
                    className="message__icon"
                />
                {headline}
            </div>
            <div className="message__content">{children}</div>
        </div>
    );
};

const getIcon = (level: TLevel) => {
    switch (level) {
        case 'error':
            return faCircleXmark;
        case 'info':
            return faCircleInfo;
        case 'success':
            return faCircleCheck;
        case 'warning':
            return faTriangleExclamation;
    }
};
