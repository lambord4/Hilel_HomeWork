import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchDepartments,
  addDepartment,
  deleteDepartment,
  updateDepartment
} from '../store/departmentsSlice';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Departments = () => {
  const dispatch = useDispatch();
  const departments = useSelector(state => state.departments.data);
  const status = useSelector(state => state.departments.status);
  const error = useSelector(state => state.departments.error);

  const [newDept, setNewDept] = useState({ name: '', head: '' });
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({ name: '', head: '' });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDepartments());
    }
  }, [dispatch, status]);

  const handleAdd = () => {
    if (!newDept.name || !newDept.head) return;
    const id = Date.now();
    dispatch(addDepartment({ id, ...newDept }));
    setNewDept({ name: '', head: '' });
  };

  const handleDelete = (id) => {
    dispatch(deleteDepartment(id));
  };

  const handleEdit = (id) => {
    const dep = departments.find(d => d.id === id);
    setEditingId(id);
    setEditValues({ name: dep.name, head: dep.head });
  };

  const handleSave = (id) => {
    dispatch(updateDepartment({ id, ...editValues }));
    setEditingId(null);
  };

  return (
    <div>
      <h2>Отделы</h2>
      {status === 'loading' && <p>Загрузка...</p>}
      {status === 'failed' && <p style={{ color: 'red' }}>Ошибка: {error}</p>}

      <h3>Добавить отдел</h3>
      <div style={{ display: 'flex', flexDirection: 'column', width: '20%', margin: '20px auto' }}>
        <input
          type="text"
          placeholder="Название"
          value={newDept.name}
          onChange={(e) => setNewDept({ ...newDept, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Руководитель"
          value={newDept.head}
          onChange={(e) => setNewDept({ ...newDept, head: e.target.value })}
        />
        <Button variant="success" style={{ marginTop: '20px' }} onClick={handleAdd}>
          Добавить
        </Button>
      </div>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Название</th>
            <th>Руководитель</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dep) => (
            <tr key={dep.id}>
              <td>
                {editingId === dep.id ? (
                  <input
                    value={editValues.name}
                    onChange={(e) =>
                      setEditValues({ ...editValues, name: e.target.value })
                    }
                  />
                ) : (
                  dep.name
                )}
              </td>
              <td>
                {editingId === dep.id ? (
                  <input
                    value={editValues.head}
                    onChange={(e) =>
                      setEditValues({ ...editValues, head: e.target.value })
                    }
                  />
                ) : (
                  dep.head
                )}
              </td>
              <td>
                {editingId === dep.id ? (
                  <Button variant="success" onClick={() => handleSave(dep.id)}>
                    Сохранить
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="warning"
                      style={{ marginRight: '15px' }}
                      onClick={() => handleEdit(dep.id)}
                    >
                      Редактировать
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(dep.id)}>
                      Удалить
                    </Button>
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

export default Departments;
