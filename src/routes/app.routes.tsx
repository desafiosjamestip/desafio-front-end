import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layout'
import Consult from '../pages/product/consult'

const AppRouter: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="/" element={<Consult />} />
        </Routes>
    </Layout>
)

export default AppRouter