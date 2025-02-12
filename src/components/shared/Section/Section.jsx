import Container from '../Container/Container';
import styles from './Section.module.css';

export default function Section({ children, className = '' }) {
	return (
		<section className={`${styles.section} ${className}`}>
			<Container>{children}</Container>
		</section>
	);
}
