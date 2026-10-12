const TeamMember = ({name, location}) => {
    return (
        <div className="team-member">
            <div className="team-member-card">
                <h1>{name}</h1>
                <span>{location}</span>
            </div>
        </div>
    )
}

export default TeamMember;