import React from 'react';
import { Routes as SwitchRoutes, Route } from 'react-router-dom';

import { FormPage, DataList } from '@/pages';

const Routes: React.FC = () => {
  return (
    <SwitchRoutes>
      <Route path='/' element={<FormPage />} />
      <Route path='/data-list' element={<DataList />} />
    </SwitchRoutes>
  );
};

export default Routes;
