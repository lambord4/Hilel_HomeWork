import AddContactForm from '../AddContactForm';


function AddNewContactPage({ formData, formErrors, onChange, onSave, onCancel }) {
  return (
    <div className="add-contact-page">
      <AddContactForm
        formData={formData}
        formErrors={formErrors}
        onChange={onChange}
        onSave={onSave}
        onCancel={onCancel}
      />
    </div>
  );
}

export default AddNewContactPage;
