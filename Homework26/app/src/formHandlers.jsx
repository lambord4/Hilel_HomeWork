const handleSaveContact = ({
    formData,
    setFormErrors,
    setContacts,
    setFormData,
    setShowAddContacts,
    setShowContacts,
    editingContactId,
    isEdit
  }) => {
    const errors = {};
    const phoneRegex = /^\+380\d{9}$/;
  
    if (!formData.name.trim()) errors.name = 'Имя обязательно';
    if (!formData.surname.trim()) errors.surname = 'Фамилия обязательна';
    if (!formData.tel.trim()) errors.tel = 'Номер обязателен';
    else if (!phoneRegex.test(formData.tel)) errors.tel = 'Формат: +380XXXXXXXXX';
  
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return { success: false };
  
    if (isEdit) {
      setContacts(prev =>
        prev.map(contact =>
          contact.id === editingContactId ? { ...contact, ...formData } : contact
        )
      );
    } else {
      const newContact = { id: Date.now(), ...formData };
      setContacts(prev => [...prev, newContact]);
    }
  
    setFormData({ name: '', surname: '', tel: '' });
    setFormErrors({});
    setShowAddContacts(false);
    setShowContacts(true);
  
    return { success: true };
  };
  
  export default handleSaveContact;
  
  