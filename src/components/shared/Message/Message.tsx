import './styles.css';

import {
    faCircleCheck,
    faCircleInfo,
    faCircleXmark,
    faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';

type TLevel = 'error' | 'success' | 'info' | 'warning';

interface IErrorMessage {
    headline: string;
    level: TLevel;
    children: ReactNode;
}

export const Message = (props: IErrorMessage): JSX.Element => {
    const { headline, level, children } = props;

    return (
        <div className="message">
            <div className={`message__header message__${level}`}>
                <FontAwesomeIcon icon={icon(level)} className="message__icon" />
                {headline}
            </div>
            <div className="message__content">{children}</div>
        </div>
    );
};

const icon = (level: TLevel) => {
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