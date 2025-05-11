import React from 'react';

function UserDetail({ user, isBlocked, onBlock }) {
  return (
    <div>
      <h2>Детали пользователя</h2>
      <p><strong>Имя:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      {isBlocked ? (
        <p style={{ color: 'red' }}>Пользователь заблокирован</p>
      ) : (
        <button onClick={onBlock}>Заблокировать</button>
      )}
    </div>
  );
}

export default UserDetail;
