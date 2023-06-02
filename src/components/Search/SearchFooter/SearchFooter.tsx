import './styles.css';

import config from '../../../../environment.json';
import Octocat from '../../../assets/img/Octocat.png';

export const SearchFooter = (): JSX.Element => {
    return (
        <div className="modal__footer">
            <a href={config.repoUrl}>
                <img
                    src={Octocat}
                    className="modal__footer__image"
                    alt={config.githubLogo}
                />
            </a>

            <a href={config.profile.url} className="modal__footer__link">
                {config.profile.name}
            </a>

            <a href={config.projectPage.url} className="modal__footer__link">
                {config.projectPage.displayText}
            </a>
        </div>
    );
};
