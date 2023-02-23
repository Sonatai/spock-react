import { Link } from 'react-router-dom';

import config from '../../../environment.json';

export const Header = (): JSX.Element => {
    return (
        <div
            className={`
				sticky 
				top-0 
				z-40 
				w-full 
				backdrop-blur 
				transition-colors 
				duration-500 
				border-b 
				border-slate-50/[0.06] 
				bg-transparent
			`}
        >
            <div className="max-w-7xl mx-auto py-4">
                <Link to="/" className="text-2xl text-[#ff3f81]">
                    {config.appName}
                </Link>
            </div>
        </div>
    );
};
