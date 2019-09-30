import React from 'react';
//import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Modal from 'bootstrap/js/dist/modal.js';
import './App.css';


function App(){
  return (
    <div className="App">
	    <div className="container">
			<div className="jumbotron">
				<h1>Resume App</h1> <br/>
				<p>This app will save your info in a Resume Format</p>
			</div>
			<hr className="Decor"/><br/><br/>
			<div className="resume" id="resume" align="left">
				<h1><label id="name"> </label></h1>	{/* &nbsp; is used to leave blank space */}
					<h3><label id="email"></label></h3>
				<br/><br/><br/><br/><br/>	
				<hr width="100%"/><br/>
				<p align="center">
					<img id="avatar" alt="Enter Valid URL" src="https://icon-library.net/images/profile-picture-icon/profile-picture-icon-0.jpg" height="300px" width="300px"/> <br/><br/><br/>
				</p>
				<p>
					Education: <br/>
					Studied in <label id="school"></label> and secured <label id="sMarks"></label>% in 10th Examination<br/>
					Studied in <label id="jc"></label> and secured <label id="jcMarks"></label>% in 12th Examination<br/>
					Studied Bachelors in <label id="c"></label> and secured <label id="cMarks"></label><br/>
					<div id="optionalDegree"> Degrees: <label id="degree"></label> </div><br/>
					Interests: <label id="interests"></label><br/><br/>
					Achievements: <label id="achvmnt"></label><br/><br/>
					Projects: <label id="project"></label><br/><br/>
				</p>
			</div>
		{/*==============================================================================================================*/}
			<div className="form" id="input" onSubmit={makeResume1}>
				<h1>Fill in the details below to generate your Resume </h1><hr/><br/>
				<form>
					<div className="row">
						<div className="col-md-2">Name:</div> 
    					<div className="col-md-10"><input type="text" id="nameIp" placeholder="Name" required/></div>
    				</div><br/>
					<div className="row">
						<div className="col-md-2">Email:</div> 
    					<div className="col-md-10"><input type="email" id="emailIp" placeholder="name@example.com" required/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-2">Image:</div> 
    					<div className="col-md-10"><input type="url" id="imageIp" required/></div>
    				</div><br/>
    				Education:<br/>
    				<div className="row">
						<div className="col-md-2">School:</div> 
    					<div className="col-md-4"><input type="text" id="schoolIp" placeholder="School Name" required/></div>
    					<div className="col-md-2">Percentage:</div>
    					<div className="col-md-4"><input type="number" step="0.01" min="0" max="100" id="sMarksIp" placeholder="% out of 100" required/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-2">Jr College:</div> 
    					<div className="col-md-4"><input type="text" id="jcIp" placeholder="Juniour College Name" required/></div>
    					<div className="col-md-2">Percentage:</div>
    					<div className="col-md-4"><input type="number" step="0.01" id="jcMarksIp" min="0" max="100" placeholder="% out of 100" required/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-2">College:</div> 
    					<div className="col-md-4"><input type="text" id="cIp" placeholder="College Name" required/></div>
    					<div className="col-md-2">Percentage/GPA:</div>
    					<div className="col-md-4"><input type="number" step="0.01" min="0" max="100" id="cMarksIp" placeholder="Enter GPA or %" required/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-6">[Optional] Any Other Qualifications/Degree:</div> 
    					<div className="col-md-6"><input type="text" id="degreeIp" placeholder="Other Degree(s). (Leave blank if N/A)"/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-2">Interests:</div> 
    					<div className="col-md-10"><input type="text" id="interestIp" placeholder="Interests" required/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-2">Achievements:</div> 
    					<div className="col-md-10"><input type="text" id="achvmntIp" placeholder="Achievements" required/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-2">Projects:</div> 
    					<div className="col-md-10"><input type="text" id="projectIp" placeholder="Projects" required/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-6"><input type="submit" className="btn btn-lg btn-success" id="sub"/></div> 
    					<div className="col-md-6"><input className="btn btn-lg btn-danger" id="reset" type="reset"/></div>
    				</div>
				</form>
				<br/>
			</div>
	    </div>
	</div>
  );
}
class makeResume extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: document.getElementById('nameIp').value,
			email: document.getElementById('emailIp').value,
			image: document.getElementById('imageIp').value,
			school: document.getElementById('schoolIp').value,
			sMarks: document.getElementById('sMarksIp').value,
			jc: document.getElementById('jcIp').value,
			jcMarks: document.getElementById('jcMarksIp').value,
			c: document.getElementById('cIp').value,
			cMarks: document.getElementById('cMarksIp').value,
			interests: document.getElementById('interestsIp').value}
		}
	};
	function makeResume1(e){
		e.preventDefault();							//This will prevent page from automatically reloading
		//document.getElementsByTagName('input').forEach(function(){if(this.value()==""){
			//	alert(this.placeholder);}	
			//});
		document.getElementById('resume').style.display='block';
		document.getElementById('input').style.display='none';
		document.getElementById('name').innerHTML = "&nbsp;&nbsp;&nbsp;" + document.getElementById('nameIp').value;
		document.getElementById('email').innerHTML = document.getElementById('emailIp').value;
		document.getElementById('school').innerHTML = document.getElementById('schoolIp').value;
		document.getElementById('sMarks').innerHTML = document.getElementById('sMarksIp').value;
		document.getElementById('jc').innerHTML = document.getElementById('jcIp').value;
		document.getElementById('jcMarks').innerHTML = document.getElementById('jcMarksIp').value;
		document.getElementById('c').innerHTML = document.getElementById('cIp').value;
		document.getElementById('cMarks').innerHTML = document.getElementById('cMarksIp').value;
		if (document.getElementById('cMarksIp').value<=10) 
			document.getElementById('cMarks').innerHTML += " GPA"				//Im assuming if input is less than 10, its GPA
		else
			document.getElementById('cMarks').innerHTML += "%"					//Input > 10 is for percentage
		if (document.getElementById('degreeIp').value!=="") {
			document.getElementById('optionalDegree').style.display='block';
			document.getElementById('degree').innerHTML = document.getElementById('degreeIp').value;
		}
		document.getElementById('interests').innerHTML = document.getElementById('interestIp').value;
		document.getElementById('achvmnt').innerHTML = document.getElementById('achvmntIp').value;
		document.getElementById('project').innerHTML = document.getElementById('projectIp').value;
		document.getElementById('avatar').setAttribute("src",document.getElementById('imageIp').value)
	}
/*	function makeResume1(e){
	e.preventDefault();							//This will prevent page from automatically reloading
	//document.getElementsByTagName('input').forEach(function(){if(this.value()==""){
		//	alert(this.placeholder);}	
		//});
	document.getElementById('resume').style.display='block';
	document.getElementById('input').style.display='none';
	document.getElementById('name').innerHTML = "&nbsp;&nbsp;&nbsp;" + document.getElementById('nameIp').value;
	document.getElementById('email').innerHTML = document.getElementById('emailIp').value;
	document.getElementById('school').innerHTML = document.getElementById('schoolIp').value;
	document.getElementById('sMarks').innerHTML = document.getElementById('sMarksIp').value;
	document.getElementById('jc').innerHTML = document.getElementById('jcIp').value;
	document.getElementById('jcMarks').innerHTML = document.getElementById('jcMarksIp').value;
	document.getElementById('c').innerHTML = document.getElementById('cIp').value;
	document.getElementById('cMarks').innerHTML = document.getElementById('cMarksIp').value;
	if (document.getElementById('cMarksIp').value<=10) 
		document.getElementById('cMarks').innerHTML += " GPA"				//Im assuming if input is less than 10, its GPA
	else
		document.getElementById('cMarks').innerHTML += "%"					//Input > 10 is for percentage
	if (document.getElementById('degreeIp').value!=="") {
		document.getElementById('optionalDegree').style.display='block';
		document.getElementById('degree').innerHTML = document.getElementById('degreeIp').value;
	}
	document.getElementById('interests').innerHTML = document.getElementById('interestIp').value;
	document.getElementById('achvmnt').innerHTML = document.getElementById('achvmntIp').value;
	document.getElementById('project').innerHTML = document.getElementById('projectIp').value;
	document.getElementById('avatar').setAttribute("src",document.getElementById('imageIp').value)
}
*/
export default App;