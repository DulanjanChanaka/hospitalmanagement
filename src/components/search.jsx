import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import db from '../firebase/firebase';
import Modal from 'react-modal';

const Search = () => {
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    const fetchData = onSnapshot(collection(db, 'opdpatient'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRows(data);
    });

    return () => {
      fetchData();
    };
  }, []);

  const calculateAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  const handleDelete = async (row) => {
    try {
      const docRef = doc(db, 'opdpatient', row.id);
      await deleteDoc(docRef);
      alert('Deleted successfully:', row);
    } catch (error) {
      console.error('Error deleting row:', error);
    }
  };

  const openModal = (row) => {
    setSelectedRow(row);
  };

  const closeModal = () => {
    setSelectedRow(null);
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    {
      field: 'age',
      headerName: 'Age',
      width: 100,
      valueGetter: (params) => calculateAge(params.row.byear),
    },
    
    {
      field: 'view',
      headerName: 'View',
      width: 60,
      renderCell: (params) => (
        <button className='px-2 py-1 text-white rounded-lg bg-blue-600' onClick={() => openModal(params.row)}>
          View
        </button>
      ),
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 80,
      renderCell: (params) => (
        <button className='px-2 py-1 text-white rounded-lg bg-red-600' onClick={() => handleDelete(params.row)}>
          Delete
        </button>
      ),
    },
  ];

  return (
    <div className='mx-1 mt-5'>
      <DataGrid rows={rows} columns={columns} pageSize={10} className='custom-data-grid' style={{ border: '1px solid darkgray' }} />
      
      <Modal
        isOpen={selectedRow !== null}
        onRequestClose={closeModal}
        className='modal'
        overlayClassName='modal-overlay fixed inset-0 bg-gray-500 bg-opacity-50 z-50'
        contentLabel='Detailed View'
      >
        <div className='modal-content  bg-white p-20 rounded-lg shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h2 className='text-lg font-bold mb-4'>Detailed View</h2>
          {selectedRow && (
            <div className='flex flex-col '>
              <p>Name: {selectedRow.name}</p>
              <p>Age: {calculateAge(selectedRow.byear)}</p>
              <p>Telephone: {selectedRow.phone}</p>
              <p>Address: {selectedRow.address}</p>
              
            </div>
          )}
          <button className='px-4 py-2 mt-4 bg-blue-500 text-white rounded-md' onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Search;
