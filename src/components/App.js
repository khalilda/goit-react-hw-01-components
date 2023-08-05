import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transaction.json'
import Profile from './Profile/Profile';
import FriendList from './Friends/FriendList';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './Transaction/TransactionHistory';


export const App = () => {
  return (
    <>
     <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
     />
     <FriendList friends={friends} />
     <Statistics title="Upload stats" stats={data} />
     <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
