import { useTranslation } from '../TranslationContext';
import ContactTable from '../ContactTable';

function ContactsPage({ contacts, onDelete, onEdit }) {
  const t = useTranslation();
  return (
    <div className="contacts-list">
      <h2>{t('yourContacts')}</h2>
      <ContactTable
        contacts={contacts}
        onDelete={onDelete}
        onEdit={onEdit}
        
      />
    </div>
  );
}

export default ContactsPage;
