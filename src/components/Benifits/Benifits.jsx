import Section from '../shared/Section/Section';
import Title from '../shared/Title/Title';
import styles from './Benifits.module.css';

export default function Benifits() {
	return (
		<section className={styles.benifits}>
			<Section>
				<Title className={styles.title}>Benifits</Title>
			</Section>
		</section>
	);
}
