function AddContactForm({ formData, onChange, onSave, onCancel, formErrors }) {
    return (
      <div className='wrapper'>
        <h2>Добавить новый контакт</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <label htmlFor="name">Имя:</label>
            <div className="input-group">
              <input
                id="name"
                value={formData.name}
                onChange={(e) => onChange({ ...formData, name: e.target.value })}
                className={formErrors.name ? 'error' : ''}
              />
              {formErrors.name && <div className="error-text">{formErrors.name}</div>}
            </div>
          </div>
  
          <div className="form-row">
            <label htmlFor="surname">Фамилия:</label>
            <div className="input-group">
              <input
                id="surname"
                value={formData.surname}
                onChange={(e) => onChange({ ...formData, surname: e.target.value })}
                className={formErrors.surname ? 'error' : ''}
              />
              {formErrors.surname && <div className="error-text">{formErrors.surname}</div>}
            </div>
          </div>
  
          <div className="form-row">
            <label htmlFor="tel">Номер:</label>
            <div className="input-group">
              <input
                id="tel"
                value={formData.tel}
                onChange={(e) => onChange({ ...formData, tel: e.target.value })}
                className={formErrors.tel ? 'error' : ''}
              />
              {formErrors.tel && <div className="error-text">{formErrors.tel}</div>}
            </div>
          </div>
        </form>
  
        <button className='button' style={{ marginRight: '1.5rem', width: '120px' }} onClick={onSave}>Сохранить</button>
        <button className='button' style={{ width: '120px' }} onClick={onCancel}>Отмена</button>
      </div>
    );
  }
  
  export default AddContactForm;
  
  