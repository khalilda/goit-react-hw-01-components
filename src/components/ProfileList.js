import { ProfileCard } from "./ProfileCard";


export const ProfileList = ({ infos }) => {
    return (
        <ul>
            {infos.map(info => (
                <li>
                    <ProfileCard item={info}/>
                </li>
            ))}
        </ul>
    );
};