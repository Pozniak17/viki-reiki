import './App.css';
import Benifits from './components/Benifits/Benifits';
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
			<Benifits />
			<Certification />
			<Video />
		</>
	);
}

export default App;
