import React, { useEffect, useState } from "react";

const REDSELECTED = 'red-selected';
const GREENSELECTED = 'green-selected';
const YELLOWSELECTED = 'yellow-selected'

const RED = 'red';
const GREEN = 'green';
const YELLOW = 'yellow';

const Home = () => {
	const [activeLight, setActiveLight] = useState(REDSELECTED); 
	useEffect( () => {
		automaticChange()
	}, [activeLight])

	const automaticChange = () => {
		const delay = activeLight === YELLOWSELECTED ? 2000 : 4000;
		setTimeout( () => {
	
			lightChange();
		},delay)
	}

	const lightChange = () => {
		if( activeLight === REDSELECTED ){
			return setActiveLight( YELLOWSELECTED);
		};
		if( activeLight === YELLOWSELECTED){
			return setActiveLight(GREENSELECTED);	
		};
		
		return setActiveLight(REDSELECTED);
		
	}


	return (<>
	   <div className="trafic-light">
		<div className={activeLight === REDSELECTED ? REDSELECTED : RED}></div>
		<div className={activeLight === YELLOWSELECTED ? YELLOWSELECTED : YELLOW}></div>
		<div className={activeLight === GREENSELECTED ? GREENSELECTED : GREEN}></div>
	   </div>
	   
      	
	</>);
};

export default Home;
