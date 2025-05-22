import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router'
import './App.css';
import contactsData from './ContactsData';
import handleSaveContact from './formHandlers';
import MainPage from './pages/MainPage';
import ContactsPage from './pages/ContactsPage';
import AddNewContactPage from './pages/AddNewContactPage'
import translations from './Translations';
import { TranslationContext } from './TranslationContext';


const initialFormData = {
  name: '',
  surname: '',
  tel: ''
};

const initialFormErrors = {
  name: '',
  surname: '',
  tel: ''
};

function App() {
  const [language, setLanguage] = useState('ru');

  const t = (key) => translations[language][key];

  
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.className = isDark ? 'dark-theme' : '';
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };
  const [editingContactId, setEditingContactId] = useState(null);

  const [contacts, setContacts] = useState(contactsData);

  const [formData, setFormData] = useState(initialFormData);
  
  const [formErrors, setFormErrors] = useState(initialFormErrors);

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
  };
  

  const handleCancel = () => {
    setFormData(initialFormData);
    setEditingContactId(null);
  };

  return (
    <>
      <button className="button" onClick={() => setLanguage('ru')}>RU</button>
      <button className="button" onClick={() => setLanguage('en')}>EN</button>
      <button className="button" onClick={toggleTheme}>
        {isDark ? t('lightTheme') : t('darkTheme')}
      </button>
      <TranslationContext.Provider value={t}>
      <BrowserRouter>
        <Link to="/">
          <button className='button' style={{ marginBottom: '2rem' }}>{t('home')}</button>
        </Link>
        <nav>
          <Link to="/contactslist">
            <button className='button' style={{ marginRight: '2rem' }}>{t('contacts')}</button>
          </Link>
          <Link to="/newcontact">
            <button className='button'>{t('addContact')}</button>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<MainPage /> }/>
          <Route
            path="/contactslist"
            element={
              <ContactsPage
                
                contacts={contacts}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            }
          />
          <Route
            path="/newcontact"
            element={
              <AddNewContactPage
                
                formData={formData}
                formErrors={formErrors}
                onChange={setFormData}
                onSave={handleSave}
                onCancel={handleCancel}
                isEdit={editingContactId !== null}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      </TranslationContext.Provider>
    </>
  );
}

export default App;
