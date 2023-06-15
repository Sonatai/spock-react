import './styles.css';

import { ReactNode } from 'react';

import {
    faCircleCheck,
    faCircleInfo,
    faCircleXmark,
    faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
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
