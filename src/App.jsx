import { useRef, useState } from 'react'
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


function App() {
  const exportRegionRef = useRef(null);
  const [activePage, setActivePage] = useState('sso-login');

  const handleNavClick = (page) => {
    setActivePage(page);
  }

  return (
    <Layout activePage={activePage} onNavClick={handleNavClick} >
      {activePage === 'sso-login' &&
        <SSOLoginPage activePage={activePage} onNavClick={handleNavClick} />
      }
      {activePage === 'regular-login' &&
        <DefaultLoginPage activePage={activePage} onNavClick={handleNavClick} />
      }
      {activePage === 'register' &&
        <RegisterPage activePage={activePage} onNavClick={handleNavClick} />
      }

      {/* need to fix what is showing in the panel, its currently not updating */}
      {/* <ExportToolbar targetRef={exportRegionRef} /> */}
    </Layout>



  )
}

export default App
