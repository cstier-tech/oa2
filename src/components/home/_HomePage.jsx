import { Button } from 'react-bootstrap'


// Rendered at "/" once ProtectedRoute confirms isLoggedIn is true (see App.jsx).
function HomePage({ onLogout }) {
    return (
        <div>
            <div className='jumbotron'>
                <h1>Welcome to the Print Store</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Start Shopping</Button>
                </p>
            </div>
            <h1 className="h3">Welcome back!</h1>
            <p>You're logged in.</p>
            <Button variant="secondary" onClick={onLogout}>Log Out</Button>
        </div>
    )
}

export default HomePage;
