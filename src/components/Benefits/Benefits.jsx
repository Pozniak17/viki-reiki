import Icon from '../shared/Icon/Icon';
import Section from '../shared/Section/Section';
import Title from '../shared/Title/Title';
import styles from './Benefits.module.css';

export default function Benifits() {
	return (
		<Section className={styles.benifits}>
			<Title className={styles.title}>Key Benefits</Title>
			<img
				src="../../../public/images/Benefits/EllipsePix.jpg"
				alt="cirlce portrait"
				className={styles.circleImage}
			/>
			<Icon
				className={styles.icon}
				id="i-round-text"
				width="1115.268px"
				height="812.516px"
			/>
		</Section>
	);
}
