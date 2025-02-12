import { useMediaQuery } from 'react-responsive';
import Icon from '../shared/Icon/Icon';
import Section from '../shared/Section/Section';
import Title from '../shared/Title/Title';
import styles from './Benefits.module.css';

export default function Benefits() {
	const isMobile = useMediaQuery({ maxWidth: 743 });
	const isTablet = useMediaQuery({ minWidth: 744, maxWidth: 1439 });

	const backgroundClass = isMobile
		? styles.benefitsMobile
		: isTablet
		? styles.benefitsTablet
		: styles.benefitsDesktop;

	const circleImageSrc = isMobile
		? '../../../public/images/Benefits/EllipsePix-mob.jpg'
		: isTablet
		? '../../../public/images/Benefits/EllipsePix-tab.jpg'
		: '../../../public/images/Benefits/EllipsePix-desk.jpg';

	const iconId = isMobile
		? 'i-vecText-mob'
		: isTablet
		? 'i-vecText-tab'
		: 'i-vecText-desk';

	const sizes = {
		mobile: { width: '408px', height: '386px' },
		tablet: { width: '683.844px', height: '640.763px' },
		desktop: { width: '1115.268px', height: '812.516px' },
	};

	const iconWidth = isMobile
		? sizes.mobile.width
		: isTablet
		? sizes.tablet.width
		: sizes.desktop.width;
	const iconHeight = isMobile
		? sizes.mobile.height
		: isTablet
		? sizes.tablet.height
		: sizes.desktop.height;

	return (
		<Section className={`${styles.benefits} ${backgroundClass}`}>
			<Title className={styles.title}>Key Benefits</Title>

			<div className={styles.visualContainer}>
				<img
					src={circleImageSrc}
					alt="cirlce portrait"
					className={styles.circleImage}
				/>
				<Icon
					className={styles.icon}
					id={iconId}
					width={iconWidth}
					height={iconHeight}
				/>
			</div>
		</Section>
	);
}
