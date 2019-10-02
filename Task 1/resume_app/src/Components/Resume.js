import React from 'react';							//To import Components and other Library Functions
import ReactDOM from 'react-dom';					//To import ReactDOM for render

class MakeResume extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',			//Name 
			email: '',			//Email
			image: '',			//Image
			school: '',			//School Name
			sMarks: '',			//School %
			jc: '',				//Jr College Name
			jcMarks: '',		//Jr College %
			c: '',				//College Name
			cMarks: '',			//College GPA Score
			degree: '',			//Other degree (optional)
			achvmnt : '',		//Achievements
			project: '',		//Projects
			interests: ''		//Interests
		};
		this.handleChange = this.handleChange.bind(this);		//Connects Function handleChange to Class	
    	this.handleSubmit = this.handleSubmit.bind(this);		//Connects Function handleSubmit to Class
	}

	handleChange(event) {											//For Anything changed in any input field
	    this.setState({[event.target.name]: event.target.value});		//Assigns the value of input to its corresponding state variable
	    if (this.state.degree !== '')
	    	document.getElementById('optionalDegree').style.display='block';
  	}

 	handleSubmit(event) {											//For Final Form Submit
 		event.preventDefault();										//To prevent page reload
		document.getElementById('resume').style.display='block';	//Makes the Resume div visible
		document.getElementById('successform').style.display='block';	//Makes the success alert visible
		ReactDOM.render("Fill in the details below to update your Resume",document.getElementById('title'));	//Changes text for better UI
		ReactDOM.render("Note: The information will update live. There is no need to press generate button again",document.getElementById('note'));
	}
		render(){
			return (
			<div>
			<div className="resume" id="resume" align="left">
				<h1 id="name">{this.state.name}</h1>		
				<h3 id="email">{this.state.email}</h3>
				<br/> <br/> <br/> 
				<hr width="100%"/><br/>
				<p align="center">
					<img id="avatar" alt="Enter Valid URL" src={this.state.image} height="300px" width="300px"/> <br/><br/><br/>
				</p>
					<b><span className="glyphicon glyphicon-education"> </span>Education:</b><br/>
					<ul>
					<li>Studied in <i>{this.state.school}</i> and secured <u>{this.state.sMarks}%</u> in 10th Examination</li>
					<li>Studied in <i>{this.state.jc}</i> and secured <u>{this.state.jcMarks}%</u> in 12th Examination</li>
					<li>Studied Bachelors in <i>{this.state.c}</i> and secured <u>{this.state.cMarks}GPA</u> </li>
					</ul><br/>
					<div id="optionalDegree"><b>More Degrees: </b><i>{this.state.degree}</i> </div><br/>
					<b>Interests:</b> <i>{this.state.interests}</i><br/><br/>
					<b>Achievements:</b> <i>{this.state.achvmnt}</i><br/><br/>
					<b>Projects:</b> <i>{this.state.project}</i><br/><br/>
			<br/><br/>
			</div><br/><br/>
			<div className="form" id="input">
				<h1 id="title">Fill in the details below to generate your Resume </h1>	
				<p id="note"></p>
				<hr/><br/>		
		     	<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col-md-2">Name:</div> 
    					<div className="col-md-10"><input type="text" onChange={this.handleChange} placeholder="Full Name" name="name" required/></div>
    				</div><br/>
					<div className="row">
						<div className="col-md-2">Email:</div> 
    					<div className="col-md-10"><input type="email" onChange={this.handleChange} placeholder="name@example.com" name="email" required/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-2">Image:</div> 
    					<div className="col-md-10"><input type="url" name="image" onChange={this.handleChange} placeholder="Enter Image URL" required/></div>
    				</div><br/>
    				Education:<br/>
    				<div className="row">
						<div className="col-md-2">School:</div> 
    					<div className="col-md-4"><input type="text" name="school" onChange={this.handleChange} placeholder="School Name" required/></div>
    					<div className="col-md-2">Percentage:</div>
    					<div className="col-md-4"><input type="number" step="0.01" name="sMarks" onChange={this.handleChange} min="0" max="100" placeholder="% out of 100" required/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-2">Jr College:</div> 
    					<div className="col-md-4"><input type="text" name="jc" onChange={this.handleChange} placeholder="Juniour College Name" required/></div>
    					<div className="col-md-2">Percentage:</div>
    					<div className="col-md-4"><input type="number" step="0.01" name="jcMarks" onChange={this.handleChange} min="0" max="100" placeholder="% out of 100" required/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-2">College:</div> 
    					<div className="col-md-4"><input type="text" name="c" onChange={this.handleChange} placeholder="College Name" required/></div>
    					<div className="col-md-2">GPA:</div>
    					<div className="col-md-4"><input type="number" step="0.01" name="cMarks" onChange={this.handleChange} min="0" max="10" placeholder="Enter GPA" required/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-6">[Optional] Any Other Qualifications/Degree:</div> 
    					<div className="col-md-6"><input type="text" name="degree" onChange={this.handleChange} placeholder="Other Degree(s). (Leave blank if N/A)"/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-2">Interests:</div> 
    					<div className="col-md-10"><input type="text" name="interests" onChange={this.handleChange} placeholder="Interests" required/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-2">Achievements:</div> 
    					<div className="col-md-10"><input type="text" name="achvmnt" onChange={this.handleChange} placeholder="Achievements" required/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-2">Projects:</div> 
    					<div className="col-md-10"><input type="text" name="project" onChange={this.handleChange} placeholder="Projects" required/></div>
    				</div><br/>
    				<div className="row">
						<div className="col-md-6"><input type="submit" id="sub" value="Generate"/></div> 
    					<div className="col-md-6"><input id="reset" type="reset" onClick={resetFunction}/></div>
    				</div>
				</form><br/>
				<div class="alert alert-success" id="successform">
    				<strong>Success!</strong> Your Resume has been successfully updated. Scroll Up to check it.
  				</div>
				<div class="alert alert-success" id="successform">
    				<strong>Success!</strong> Your Resume has been successfully updated. Scroll Up to check it.
  				</div>
			</div>
			</div>
		    );
		}
   	}
function resetFunction(){							//This function will hide Resume div when user clicks on Reset
	document.getElementById('resume').style.display='none';		//To hide Resume div
	document.getElementById('successform').style.display='none';	//Makes the success alert hidden
	ReactDOM.render("Fill in the details below to generate your Resume",document.getElementById('title'))
	ReactDOM.render("",document.getElementById('note'));
}
export default MakeResume