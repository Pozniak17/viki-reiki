import styles from './Title.module.css';

export default function Title({ children, className = '' }) {
	return <h2 className={`${styles.title} ${className}`}>{children}</h2>;
}
