import React from "react";

class TeamMemberClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };

    console.log(this.props.name + " Child Construtor");
  }

  componentDidMount() {
    console.log(this.props.name + " Child component did mount!");
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    console.log(name + " Child render");

    return (
      <div className="team-member">
        <div className="team-member-card">
          <h1>Even: {count}</h1>
          <h1>Odd: {count2}</h1>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 2,
                count2: this.state.count2 + 2,
              });
            }}
          >
            Update state variables
          </button>
          <h1>{name} from class</h1>
          <span>{location}</span>
        </div>
      </div>
    );
  }
}

export default TeamMemberClass;
