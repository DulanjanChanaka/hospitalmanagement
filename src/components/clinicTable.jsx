import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import db from '../firebase/firebase';

const ClinicTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchdata = onSnapshot(collection(db, 'clinicpatient'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRows(data);
    });

    return () => {
      fetchdata();
    };
  }, []);

  const handleDelete = async (row) => {
    try {
      const docRef = doc(db, 'contact', row.id);
      await deleteDoc(docRef);
      console.log('Row deleted successfully:', row);
    } catch (error) {
      console.error('Error deleting row:', error);
    }
  };

  const columns = [
    { field: 'bookno', headerName: 'No', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'team', headerName: 'Gp', width: 90 },
    { field: 'phone', headerName: 'Tele', width: 110 },
    {
        field: 'delete',
        headerName: 'Delete',
        width: 100,
        renderCell: (params) => (
          <button className='px-2 py-1 text-white rounded-lg bg-red-600' onClick={() => handleDelete(params.row)}>Delete</button>
        ),
      },
  ];

  return (
    <div className='mx-1 mt-5'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        className='custom-data-grid'
        style={{  border: '1px solid darkgray' }}
      />
    </div>
  );
};

export default ClinicTable;
