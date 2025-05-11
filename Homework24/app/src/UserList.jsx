function UserList({ users, onSelect }) {
    return (
      <div>
        <h2>Список пользователей</h2>
        <ul>
          {users.map(user => (
            <li key={user.id} onClick={() => onSelect(user)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default UserList