import { Link } from 'react-router-dom';

import config from '../../../environment.json';
import './styles.css';

export const Header = (): JSX.Element => {
    return (
        <div className="header">
            <div className="link-wrapper ">
                <Link to="/" className="link">
                    {config.appName}
                </Link>
            </div>
        </div>
    );
};
