import { useMediaQuery } from 'react-responsive';
import Icon from '../shared/Icon/Icon';
import Section from '../shared/Section/Section';
import Title from '../shared/Title/Title';
import styles from './Benefits.module.css';

export default function Benefits() {
	const isMobile = useMediaQuery({ maxWidth: 743 });
	const isTablet = useMediaQuery({ minWidth: 744, maxWidth: 1439 });

	const deviceAssets = {
		mobile: {
			backgroundClass: styles.benefitsMobile,
			circleImageSrc: '/images/Benefits/EllipsePix-mob.jpg',
			iconId: 'i-vecText-mob',
			size: { width: '408px', height: '386px' },
		},
		tablet: {
			backgroundClass: styles.benefitsTablet,
			circleImageSrc: '/images/Benefits/EllipsePix-tab.jpg',
			iconId: 'i-vecText-tab',
			size: { width: '683.844px', height: '640.763px' },
		},
		desktop: {
			backgroundClass: styles.benefitsDesktop,
			circleImageSrc: '/images/Benefits/EllipsePix-desk.jpg',
			iconId: 'i-vecText-desk',
			size: { width: '1115.268px', height: '812.516px' },
		},
	};

	const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';
	const { backgroundClass, circleImageSrc, iconId, size } =
		deviceAssets[deviceType];

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
					width={size.width}
					height={size.height}
				/>
			</div>
		</Section>
	);
}
