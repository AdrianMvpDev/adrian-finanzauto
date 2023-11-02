import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import { fetchUserData } from '../../services/api';
import Table from '../widgets/Table';

export default function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData()
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

console.log(userData);

  return (
    <>
      <Header />
      <main className='bg-[#fefffd]'>
        <Table data={userData} />
      </main>
    </>
  );
}
