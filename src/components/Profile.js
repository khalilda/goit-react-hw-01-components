import ProfileModule from '../components/Profile.module.css';

export const Profile = user => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className={ProfileModule.profile}>
      <div className={ProfileModule.description}>
        <img src={avatar} alt="User avatar" className={ProfileModule.avatar} />
        <p className={ProfileModule.name}>{username}</p>
        <p className={ProfileModule.string}>{tag}</p>
        <p className={ProfileModule.string}>{location}</p>
      </div>

      <ul className={ProfileModule.stats}>
        <li className={ProfileModule.item}>
          <span className={ProfileModule.label}>Followers</span>
          <span className={ProfileModule.quantity}>{stats.followers}</span>
        </li>
        <li className={ProfileModule.item}>
          <span className={ProfileModule.label}>Views</span>
          <span className={ProfileModule.quantity}>{stats.views}</span>
        </li>
        <li className={ProfileModule.item}>
          <span className={ProfileModule.label}>Likes</span>
          <span className={ProfileModule.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
