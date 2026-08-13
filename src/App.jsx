import { useRef, useState } from 'react'
// Routes/Route declare the URL -> component map
import { Routes, Route } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Header from './components/shared/header/_Header.jsx';
import Body from './components/shared/_Main.jsx';
import Footer from './components/shared/footer/_Footer.jsx'
import ExportToolbar from './components/exportTools/ExportToolbar.jsx';
import LoginBoxCard from './components/customer/login/_LoginBoxCard.jsx';
import SSOLoginPage from './components/customer/login/_SSOLoginPage.jsx';
import DefaultLoginPage from './components/customer/login/_DefaultLoginPage.jsx';
import RegisterPage from './components/customer/register/_RegisterPage.jsx';
import Layout from './components/shared/_Layout.jsx';
import PlainLayout from './components/shared/_PlainLayout.jsx';
import RedirectSimulation from './components/customer/login/_RedirectSimulation.jsx';
import ProtectedRoute from './components/shared/_ProtectedRoute.jsx';
import HomePage from './components/home/_HomePage.jsx';


function App() {
  const exportRegionRef = useRef(null);
  // Plain lifted state - this is a demo with no real auth, so there's no need for anything
  // beyond a boolean here. It's passed down as props to whatever needs to read or flip it.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // Routes reads the current URL (relative to the basename set on BrowserRouter in main.jsx)
    // and renders the first matching Route's element.
    <Routes>
      {/* A layout route: it has no path of its own, so it matches whatever its children match.
          Layout renders the header/main/footer chrome plus an <Outlet /> where the matched
          child route below gets rendered - so every route nested here shares that chrome. */}
      <Route element={<Layout />}>
        {/* ProtectedRoute is itself a layout route nested inside Layout's: it checks isLoggedIn
            and either renders its child (HomePage) via <Outlet /> or redirects to /regular-login.
            "/" has no unconditional page anymore - what shows there now depends on isLoggedIn. */}
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/" element={<HomePage onLogout={() => setIsLoggedIn(false)} />} />
        </Route>
        <Route path="/sso-login" element={<SSOLoginPage onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/regular-login" element={<DefaultLoginPage onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Sibling of the layout route above, not nested inside it, so it renders on its own -
          no Header/Main/Footer wrapper. */}
      <Route element={<PlainLayout />}>
        <Route path="/redirected-to-sso" element={<RedirectSimulation />} />
        <Route path="/admin-login" element={<DefaultLoginPage onLogin={() => setIsLoggedIn(true)} />} />
      </Route>
    </Routes>

    // need to fix what is showing in the panel, its currently not updating
    // <ExportToolbar targetRef={exportRegionRef} />
  )
}

export default App
