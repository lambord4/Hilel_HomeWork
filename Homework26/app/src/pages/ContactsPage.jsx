
import ContactTable from '../ContactTable';

function ContactsPage({ contacts, onDelete, onEdit, t }) {
  return (
    <div className="contacts-list">
      <h2>{t('yourContacts')}</h2>
      <ContactTable
        contacts={contacts}
        onDelete={onDelete}
        onEdit={onEdit}
        t={t}
      />
    </div>
  );
}

export default ContactsPage;
