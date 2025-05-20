import AddContactForm from '../AddContactForm';

function AddNewContactPage({ formData, formErrors, onChange, onSave, onCancel, t }) {
  return (
    <div className="add-contact-page">
      <AddContactForm
        formData={formData}
        formErrors={formErrors}
        onChange={onChange}
        onSave={onSave}
        onCancel={onCancel}
        t={t}
      />
    </div>
  );
}

export default AddNewContactPage;
