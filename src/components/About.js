import { Component } from "react";
import TeamMemberClass from "./TeamMemberClass";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor"); 
  }

  componentDidMount(){
    console.log("Parent component did mount!")
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about-us">
        <h1>Welcome to React starter project</h1>
        {/* <TeamMember name="Prabhu" location="Hyderabad"/> */}
        <TeamMemberClass name="First" location="Hyderabad" />
        <TeamMemberClass name="Second" location="Hyderabad" />
        <TeamMemberClass name="Third" location="Hyderabad" />
      </div>
    );
  }
}

export default About;
