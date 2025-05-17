import { useState } from 'react';
import './App.css';
import contactsData from './ContactsData';
import ContactTable from './ContactTable';
import AddContactForm from './AddContactForm';
import handleSaveContact from './formHandlers';

function App() {
  const [showContacts, setShowContacts] = useState(false);
  const [showAddContacts, setShowAddContacts] = useState(false);
  const [editingContactId, setEditingContactId] = useState(null);

  const [contacts, setContacts] = useState(contactsData);

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    tel: ''
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    surname: '',
    tel: ''
  });

  const handleClickContactList = () => {
    setShowContacts(true);
    setShowAddContacts(false);
  };

  const handleClickAddContacts = () => {
    setShowAddContacts(true);
    setShowContacts(false);
  };

  const handleDelete = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleSave = () => {
    const isEdit = editingContactId !== null;
  
    const result = handleSaveContact({
      formData,
      setFormErrors,
      setContacts,
      setFormData,
      setShowAddContacts,
      setShowContacts,
      editingContactId,   
      isEdit
    });
  
    if (result?.success) {
      setEditingContactId(null); 
    }
  };

  const handleEdit = (contact) => {
    setFormData({
      name: contact.name,
      surname: contact.surname,
      tel: contact.tel
    });
    setEditingContactId(contact.id);
    setShowAddContacts(true);
    setShowContacts(false);
  };
  

  const handleCancel = () => {
    setFormData({ name: '', surname: '', tel: '' });
    setShowAddContacts(false);
  };

  return (
    <>
      <nav>
        <button className='button' style={{ marginRight: '2rem' }} onClick={handleClickContactList}>Список Контактов</button>
        <button className='button' onClick={handleClickAddContacts}>Добавить Контакт</button>
      </nav>

      {showContacts && (
        <div className='contacts-list'>
          <h2>Список ваших контактов</h2>
          <ContactTable
            contacts={contacts}
            onDelete={handleDelete}
            onEdit={handleEdit} 
          />
        </div>
      )}

      {showAddContacts && (
        <AddContactForm
          formData={formData}
          formErrors={formErrors}
          onChange={setFormData}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </>
  );
}

export default App;
