import profileInfo from '../user.json'
import { ProfileCard } from './ProfileCard';
import { ProfileList } from './ProfileList';




export const App = () => {
  return (
    <>
    <ProfileCard/>
    <ProfileList infos={profileInfo}/>
    </>
  );
};
