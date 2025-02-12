import './App.css';
import Benefits from './components/Benefits/Benefits';
import Certification from './components/Certification/Certification/Certification';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Introduce from './components/Introduce/Introduce';
import Services from './components/Services/Services/Services';
import Video from './components/Video/Video';

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Introduce />
			<Services />
			<Benefits />
			<Certification />
			<Video />
		</>
	);
}

export default App;
