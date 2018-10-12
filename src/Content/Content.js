import React from 'react';
import '../App.css';
import temporarymap from '../temporarymap.png';
import logo from '../vt.png';

const Content = (props) => {
	return (
		<div className="App">
			<div className="Logo-Bar">
				<img src={logo} />
			</div>
			<div className="Header">
				<h3 className="VTService">VT Services at</h3>
				<h1 className="City">ALBANY</h1>
			</div>
			<div className="Content">
				<div className="Address">
					<h2 className="Blue-Border">Address</h2>
					<p>814 RADFORD BLVD ALBANY, GA 31704</p>
				</div>
				<div className="Hours">
					<h2 className="Blue-Border">Hours</h2>
					<p>0730-1430, F 0730-1400</p>
				</div>
				<div className="Contact">
					<h2 className="Blue-Border">For More Information</h2>
					<p>Contact: Dave</p>
					<p>Phone Number: 229-639-5860</p>
				</div>
				<div className="Map">
					<h2 className="Blue-Border">Map</h2>
					<img src={temporarymap} />
				</div>
				<div className="Directions">
					<h2 className="Blue-Border">Directions</h2>
					<p>
						From I-185 take exit 1 to Victory Dr go to third traffic light turn left, go through check
						point, cross bridge, take first right, go straight, turn right on Spangler Street. First
						building on right.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Content;
