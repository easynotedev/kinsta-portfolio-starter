import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';

import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Antonin's Portfolio</title>
				<meta name="description" content="Antonin's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.jpeg" />
			</Head>
			<div>
				<Hero />
				<About />
				<Skills />
				{/*<Projects />
				<Contact />  */}
			</div>
		</>
	);
};

export default Home;
