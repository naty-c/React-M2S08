import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import HomePage from '../pages/Home/Home';
import Products from '../pages/Products/Products';

function RoutesComponent() {
    
    const isAuthenticated = true;

    function loginRedirect(component) {
        if (isAuthenticated) {
            return <Navigate to='/home' replace />
        }
        return component;
    }

    return (
        <>
            <Routes>
                {/* Login Page, accessible without authentication */}
                <Route path='/login' element={loginRedirect(<Login />)} />

                {/* Protected Routes */}
                {isAuthenticated ? (
                    <>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/home' element={<HomePage />} />
                        <Route path='/products' element={<Products />} />
                    </>
                ) : (
                    <>
                    <Route path='*' element={<Navigate replace to='/login' />} />
                    </>
                )
                }
            </Routes>
        </>
    )
}

export default RoutesComponent