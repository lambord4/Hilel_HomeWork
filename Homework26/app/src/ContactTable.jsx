function ContactTable({ contacts, onDelete, onEdit }) {
    return (
        
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Номер</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.surname}</td>
              <td>{contact.tel}</td>
              <td>
                <button className='button' onClick={() => onDelete(contact.id)}>Удалить</button>
                <button className='button' onClick={() => onEdit(contact)}>✏️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default ContactTable;
  