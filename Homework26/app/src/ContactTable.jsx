import { useNavigate } from 'react-router';
import { useTranslation } from './TranslationContext';


function ContactTable({ contacts, onDelete, onEdit }) {
  const navigate = useNavigate();
  const t = useTranslation();
  const handleEditClick = (contact) => {
    onEdit(contact);          
    navigate('/newcontact');  
  };

  return (
    <table>
      <thead>
        <tr>
          <th>{t('name')}</th>
          <th>{t('surname')}</th>
          <th>{t('phone')}</th>
          <th>{t('actions')}</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.surname}</td>
            <td>{contact.tel}</td>
            <td>
              <button className="button" onClick={() => onDelete(contact.id)}>{t('delete')}</button>
              <button className="button" onClick={() => handleEditClick(contact)}>✏️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactTable;

  