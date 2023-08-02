export const ProfileCard = ({ item: {avatar, username, tag, location }}) => {
    return (
        <div>
            <img src={avatar} alt="User Avatar" />;
            <h2>{username}</h2>;
            <p>{tag}</p>;
            <p>{location}</p>
        </div>
    );
};
