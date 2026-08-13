import { Navigate, Outlet } from 'react-router-dom';

// Used as a layout route, the same way Layout is: <Route element={<ProtectedRoute isLoggedIn={...} />}>
// wraps whichever child routes require a logged-in user. If isLoggedIn is true it renders
// <Outlet /> so the matched child route shows; otherwise it redirects to the login page
// instead of rendering the child at all.
function ProtectedRoute({ isLoggedIn, redirectTo = '/regular-login' }) {
    return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} replace />;
}

export default ProtectedRoute;
