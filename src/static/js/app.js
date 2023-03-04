const styleComponents = {backgroundColor: "#fef5ff", padding: 20 + "px", color: "#545453", marginTop: 10 + "px"};
const styleItems = {backgroundColor: "#fef5ff", padding: 5 + "px", marginTop: 10 + "px", color: "#545453"};
const styleTitle = {fontSize: 1.5 + "em", }

class Header extends React.Component {
	constructor(props){
		super(props);
	}

  	render() {
    	return (
	      	<div className="Header" style={styleComponents}>
	        	<div className="Header-title">
	        		<img style={{borderRadius: 100 + 'px'}} src={this.props.avatar}/>
	          		<p><b style={{fontSize: 2.5 + "em", }}> {this.props.nameHeader} </b></p>
	          		<div>
	          			<span>{this.props.phone} - </span>
	          			<span>{this.props.email}</span><br/>
	          			<span><a href="#" style={{textDecoration: 'none',}}>{this.props.website}</a></span>
	          		</div>
	    		</div>
	    	</div>
    	);
  	}
};

class Profile extends React.Component {
	constructor(props){
		super(props);
	}
  	render() {
    	return (
	      	<div className="Profile" style={styleComponents}>
	        	<div className="Profile-title">
	          	<b style={styleTitle}>{this.props.title}</b>
	        	</div>
	        	<div className="Profile-desc">
	          	{this.props.description}
	        	</div>
	    	</div>
    	);
  	}
};

class Experience extends React.Component {
	constructor(props){
		super(props);
	}
  	render() {
    	return (
    		<div className="Experience" style={styleComponents}>
	        	<div className="Experience-title">
	        		<b style={styleTitle}>Experience</b>
	        	</div>
		        <div className="Experience-item" style={styleItems}>
		        	<b>{this.props.experience[0][0]}</b><br/>
		        	<span>{this.props.experience[0][1]}</span><br/>
		        	<span>{this.props.experience[0][2]}</span><br/>
		        	<span>{this.props.experience[0][3]}</span>
		        </div>
		        <div className="Experience-item" style={styleItems}>
		        	<b>{this.props.experience[1][0]}</b><br/>
		        	<span>{this.props.experience[1][1]}</span><br/>
		        	<span>{this.props.experience[1][2]}</span><br/>
		        	<span>{this.props.experience[1][3]}</span>
		        </div>
		        <div className="Experience-item" style={styleItems}>
		        	<b>{this.props.experience[1][0]}</b><br/>
		        	<span>{this.props.experience[1][1]}</span><br/>
		        	<span>{this.props.experience[1][2]}</span><br/>
		        	<span>{this.props.experience[1][3]}</span>
		        </div>
	      	</div>
      	);
  	}
};

class Academic extends React.Component {
	constructor(props){
		super(props);
	}
  	render() {
    	return (
    		<div className="Academic" style={styleComponents}>
	        	<div className="Academic-title">
	        		<b style={styleTitle}>Academic</b>
	        	</div>
		        <div className="Academic-item" style={styleItems}>
		        	<b>{this.props.academic[0][0]}</b><br/>
		        	<span>{this.props.academic[0][1]}</span><br/>
		        	<span>{this.props.academic[0][2]}</span><br/>
		        	<span>{this.props.academic[0][3]}</span>
		        </div>
		        <div className="Academic-item" style={styleItems}>
		        	<b>{this.props.academic[1][0]}</b><br/>
		        	<span>{this.props.academic[1][1]}</span><br/>
		        	<span>{this.props.academic[1][2]}</span><br/>
		        	<span> <a src="#"> {this.props.academic[1][3]} </a></span><br/>
		        </div>
		        <div className="Academic-item" style={styleItems}>
		        	<b>{this.props.academic[1][0]}</b><br/>
		        	<span>{this.props.academic[1][1]}</span><br/>
		        	<span>{this.props.academic[1][2]}</span><br/>
		        	<span>{this.props.academic[1][3]}</span><br/>
		        </div>
	      	</div>
      	);
  	}
};

class Skills extends React.Component {
	constructor(props){
		super(props);
	}
  	render() {
    	return (
    		<div className="Skills" style={styleComponents}>
	        	<div className="Skills-title">
	        		<b style={styleTitle}>Skills</b>
	        	</div>
		        <div className="Skills-item" style={styleItems}>
		        	<b>{this.props.skills[0][0]}</b><br/>
		        	<span>{this.props.skills[0][1]}</span><br/>
		        </div>
		        <div className="Skills-item" style={styleItems}>
		        	<b>{this.props.skills[1][0]}</b><br/>
		        	<span>{this.props.skills[1][1]}</span><br/>
		        </div>
		        <div className="Skills-item" style={styleItems}>
		        	<b>{this.props.skills[1][0]}</b><br/>
		        	<span>{this.props.skills[1][1]}</span><br/>
		        </div>
	      	</div>
      	);
  	}
};

class Interest extends React.Component {
	constructor(props){
		super(props);
	}
  	render() {
    	return (
    		<div className="Interest" style={styleComponents}>
	        	<div className="Interest-title">
	        		<b style={styleTitle}>Interest</b>
	        	</div>
		        <div className="Interest-item">
		        	<span>
		        		{this.props.interest[0]} - {this.props.interest[1]} - {this.props.interest[2]}
		        	</span>
		        </div>
	      	</div>
      	);
  	}
};

class Languages extends React.Component {
	constructor(props){
		super(props);
	}
  	render() {
    	return (
    		<div className="Languages" style={styleComponents}>
	        	<div className="Languages-title">
	        		<b style={styleTitle}>Languages</b>
	        	</div>
		        <div className="Languages-item">
		        	{this.props.languages[0][0]} - {this.props.languages[0][1]}
		        </div>
		        <div className="Languages-item">
		        	{this.props.languages[1][0]} - {this.props.languages[0][1]}
		        </div>
		        <div className="Languages-item">
		        	{this.props.languages[1][0]} - {this.props.languages[0][1]}
		        </div>
	      	</div>
      	);
  	}
};

const api = {
  "data": {
    "name": "Melissa Walsh",
    "profession": "FrontEnd Developer",
    "address": "Bogotá, Colombia.",
    "email": "melissa@example.com",
    "website": "https://example.com",
    "phone": "3042034240",
    "avatar": "https://arepa.s3.amazonaws.com/melissa.jpg",
    "Profile": "Ignore the squirrels, you'll never catch them anyway hack, for floof tum, tickle bum, jellybean footies curly toes climb leg roll over and sun my belly, ",
    "certificate": [
      {
        "date": "Jan 2021",
        "description": "Hack up furballs try to jump onto window and fall while scratching at wall. ",
        "institution": "Platzi",
        "name": "FrontEnd Developer"
      },
      {
        "date": "Jan 2021",
        "description": "Scratch at the door then walk away wack the mini furry mouse",
        "institution": "Platzi",
        "name": "Backend Developer"
      }
    ],
    "Academic": [
      {
        "degree": "Atomic Master",
        "description": " I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms",
        "endDate": "Jan 2017",
        "institution": "MIT",
        "startDate": "Jan 2018"
      },
      {
        "degree": "Space Engineering",
        "description": "Meow in empty rooms. Find empty spot in cupboard and sleep all day check cat door for ambush 10 times before coming in for hack. ",
        "endDate": "Decenber 2015",
        "institution": "Harvard",
        "startDate": "Jan 2017"
      }
    ],
    "experience": [
      {
        "company": "PugStar",
        "endDate": "Present",
        "jobDescription": "scratch the furniture. Good now the other hand, too lay on arms while you're using the keyboard.",
        "jobTitle": "Frontend",
        "startDate": "Jan 2020"
      },
      {
        "company": "CatStore",
        "endDate": "Jan 2016",
        "jobDescription": "Meow in empty rooms lick left leg for ninety minutes, still dirty.",
        "jobTitle": "Backend",
        "startDate": "Sept 2019"
      }
    ],
    "skills": [
      {
        "name": "HTML5",
        "percentage": "75%"
      },
      {
        "name": "CSS",
        "percentage": "25%"
      },
      {
        "name": "JavaScript",
        "percentage": "55%"
      },
      {
        "name": "React",
        "percentage": "90%"
      }
    ],
    "interest": [
      "javascript",
      "develop",
      "backend",
      "frontend"
    ],
    "languages": [
      {
        "name": "Spanish",
        "percentage": "90%"
      },
      {
        "name": "English",
        "percentage": "50%"
      }
    ],
    "social": [
      {
        "name": "facebook",
        "url": "https://facebook.com/"
      },
      {
        "name": "twitter",
        "url": "https://twitter.com/"
      },
      {
        "name": "github",
        "url": "https://github.com/"
      },
      {
        "name": "linkedin",
        "url": "https://www.linkedin.com/"
      }
    ]
  }
}

class ElementApp extends React.Component {
	constructor(props){
		super(props);
		
		this.experience = [
			[api.data.experience[0].company, api.data.experience[0].jobDescription, api.data.experience[0].jobTitle], 
			[api.data.experience[1].company, api.data.experience[1].jobDescription, api.data.experience[1].jobTitle]]
		
		this.academic = [
			[api.data.Academic[0].degree, api.data.Academic[0].description, api.data.Academic[0].institution],
			[api.data.Academic[1].degree, api.data.Academic[1].description, api.data.Academic[1].institution]]

		this.skills = [
			[api.data.skills[0].name, api.data.skills[0].percentage],
			[api.data.skills[1].name, api.data.skills[1].percentage],
			[api.data.skills[2].name, api.data.skills[2].percentage]]

		this.interest = api.data.interest

		this.languages = [
			[api.data.languages[0].name, api.data.languages[0].percentage],
		 	[api.data.languages[1].name, api.data.languages[1].percentage]]
	}
  	render() {
    	return (
    		<div style={{maxWidth: 70 + "%", margin: 'auto '}}>
    			<Header nameHeader={api.data.name} avatar={api.data.avatar} website={api.data.website} phone={api.data.phone} email={api.data.email} />
	    		<Profile title={api.data.profession} description={api.data.Profile} />
	    		<Experience experience={this.experience} />
				<Academic  academic={this.academic} />
				<Skills skills={this.skills} />
				<Interest interest={this.interest} />
				<Languages languages={this.languages} />
			</div>
      	);
  	}
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
	<ElementApp />
);