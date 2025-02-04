import React from 'react';
import Image from 'next/image';

// Added a comment to test git
// Added another comment to test git
function Home(){
	return (
		<div>
		<h1>Para Mamae e Julie</h1>
			<div>Papai fez esse site para treinar e dizer que ama voces!</div>
			<div>Mamae, se voce ama o papai, da uma risadinha.</div>
			<Image src="/Deia-Beto-Julie-Montreal-2024-12-27.jpg" alt="Deia-Beto-Julie-Montreal-2024-12-27.jpg" width={500} height={600}/>
		</div>);
}

export default Home;

