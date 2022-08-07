import React from 'react';

interface ILayout {
	onPageNav?: JSX.Element;
}

export const Layout = (
	props: React.PropsWithChildren<ILayout>
): JSX.Element => {
	const { onPageNav, children } = props;

	return (
		<>
			<div className={`${onPageNav ? 'w-8/12' : 'w-10/12'} px-6 py-[2rem]`}>
				{children}
			</div>
			{onPageNav && (
				<div
					className={`
                    sideNavBar
					w-2/12
					`}>
					<h5>On the Page</h5>
					{onPageNav}
				</div>
			)}
		</>
	);
};
