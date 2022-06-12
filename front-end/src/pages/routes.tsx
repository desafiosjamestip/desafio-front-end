import { Route, Routes } from 'react-router-dom';

import HomePage from './Home';
import Categories from './Categories';
import Form from './Form';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/form' element={<Form />} />
    </Routes>
  )
}