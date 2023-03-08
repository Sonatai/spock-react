import './styles.css';

import config from '../../../../environment.json';
import Octocat from '../../../img/Octocat.png';

export const SearchFooter = (): JSX.Element => {
    return (
        <div className="modal-footer">
            <a href={config.repoUrl}>
                <img
                    src={Octocat}
                    className="modal-footer-image"
                    alt={config.githubLogo}
                />
            </a>

            <a href={config.profile.url} className="modal-footer-link">
                {config.profile.name}
            </a>

            <a href={config.projectPage.url} className="modal-footer-link">
                {config.projectPage.displayText}
            </a>
        </div>
    );
};
