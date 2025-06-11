import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployee
} from '../store/employeesSlice';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Employees = () => {
  const employees = useSelector((state) => state.employees.data);
  const status = useSelector((state) => state.employees.status);
  const error = useSelector((state) => state.employees.error);
  const dispatch = useDispatch();

  const [newEmployee, setNewEmployee] = useState({ name: '', position: '', departmentId: '' });
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({ name: '', position: '', departmentId: '' });
  const [departments, setDepartments] = useState([]);

  const [searchName, setSearchName] = useState('');
  const [filterDeptId, setFilterDeptId] = useState('');

  useEffect(() => {
    fetch('/departments.json')
      .then(res => res.json())
      .then(data => setDepartments(data));
  }, []);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEmployees());
    }
  }, [dispatch, status]);

  const handleAdd = () => {
    if (!newEmployee.name || !newEmployee.position || !newEmployee.departmentId) return;
    const id = Date.now();
    dispatch(addEmployee({ id, ...newEmployee, departmentId: Number(newEmployee.departmentId) }));
    setNewEmployee({ name: '', position: '', departmentId: '' });
  };

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  const handleEdit = (id) => {
    const emp = employees.find(e => e.id === id);
    setEditingId(id);
    setEditValues({ name: emp.name, position: emp.position, departmentId: emp.departmentId });
  };

  const handleSave = (id) => {
    dispatch(updateEmployee({ id, ...editValues, departmentId: Number(editValues.departmentId) }));
    setEditingId(null);
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchName.toLowerCase()) &&
    (filterDeptId === '' || emp.departmentId === Number(filterDeptId))
  );

  return (
    <div>
      <h2>Сотрудники</h2>
      {status === 'loading' && <p>Загрузка сотрудников...</p>}
      {status === 'failed' && <p style={{ color: 'red' }}>Ошибка: {error}</p>}

      <h3>Добавить нового</h3>
      <div style={{ display: 'flex', flexDirection: 'column', width: '20%', margin: '20px auto' }}>
        <Form.Control
          type="text"
          placeholder="Имя"
          value={newEmployee.name}
          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
          className="mb-2"
        />
        <Form.Control
          type="text"
          placeholder="Должность"
          value={newEmployee.position}
          onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
          className="mb-2"
        />
        <Form.Select
          value={newEmployee.departmentId}
          onChange={(e) => setNewEmployee({ ...newEmployee, departmentId: e.target.value })}
          className="mb-2"
        >
          <option value="">Выберите отдел</option>
          {departments.map(dep => (
            <option key={dep.id} value={dep.id}>{dep.name}</option>
          ))}
        </Form.Select>
        <Button variant="success" onClick={handleAdd}>Добавить</Button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
        <Form.Control
          type="text"
          placeholder="Поиск по имени"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          style={{ width: '200px' }}
        />
        <Form.Select
          value={filterDeptId}
          onChange={(e) => setFilterDeptId(e.target.value)}
          style={{ width: '200px' }}
        >
          <option value="">Все отделы</option>
          {departments.map(dep => (
            <option key={dep.id} value={dep.id}>{dep.name}</option>
          ))}
        </Form.Select>
      </div>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Должность</th>
            <th>Отдел</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>
                {editingId === emp.id ? (
                  <Form.Control
                    value={editValues.name}
                    onChange={(e) => setEditValues({ ...editValues, name: e.target.value })}
                  />
                ) : emp.name}
              </td>
              <td>
                {editingId === emp.id ? (
                  <Form.Control
                    value={editValues.position}
                    onChange={(e) => setEditValues({ ...editValues, position: e.target.value })}
                  />
                ) : emp.position}
              </td>
              <td>
                {editingId === emp.id ? (
                  <Form.Select
                    value={editValues.departmentId}
                    onChange={(e) => setEditValues({ ...editValues, departmentId: e.target.value })}
                  >
                    <option value="">Выберите отдел</option>
                    {departments.map(dep => (
                      <option key={dep.id} value={dep.id}>{dep.name}</option>
                    ))}
                  </Form.Select>
                ) : (
                  departments.find(dep => dep.id === emp.departmentId)?.name || '—'
                )}
              </td>
              <td>
                {editingId === emp.id ? (
                  <Button variant="success" onClick={() => handleSave(emp.id)}>Сохранить</Button>
                ) : (
                  <>
                    <Button variant="warning" className="me-2" onClick={() => handleEdit(emp.id)}>Редактировать</Button>
                    <Button variant="danger" onClick={() => handleDelete(emp.id)}>Удалить</Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Employees;
