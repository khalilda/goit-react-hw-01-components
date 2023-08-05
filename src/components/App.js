import { Profile } from './Profile';
import user from '../data/user.json';
import data from '../data/data.json';
import { Statistics } from './Statistics';
import friends from '../data/friends.json';
import items from '../data/transaction.json'
import { TransactionHistory } from './TransactionHistory';
import { FriendList } from './FriendList';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={items} />
    </>
  );
};
