import React, { useState } from 'react';
import './app.css'
import UserList from './UserList';
import UserDetail from './UserDetail';
import users from './Users';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [blockedUsers, setBlockedUsers] = useState([]);

  const handleBlock = (userId) => {
    setBlockedUsers([...blockedUsers, userId]);
  };

  return (
    <div>
      <UserList users={users} onSelect={setSelectedUser} />
      
      {selectedUser ? (
        <UserDetail
          user={selectedUser}
          isBlocked={blockedUsers.includes(selectedUser.id)}
          onBlock={() => handleBlock(selectedUser.id)}
        />
      ) : (
        <p>Пожалуйста, выберите пользователя</p>
      )}
    </div>
  );
}

export default App;
