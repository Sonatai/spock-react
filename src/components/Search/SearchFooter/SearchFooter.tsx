import './styles.css';

export const SearchFooter = (): JSX.Element => {
	return (
		<div className='modal-footer'>
			<a href='https://github.com/Gleethos/neureka'>
				<img src='/Octocat.png' className='modal-footer-image' />
			</a>
			<a href='https://github.com/Gleethos' className='modal-footer-link'>
				Gleethos
			</a>

			<a
				href='https://gleethos.github.io/neureka/index.html'
				className='modal-footer-link'>
				Why Neureka?
			</a>
		</div>
	);
};
