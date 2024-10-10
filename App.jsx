import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Registration from './pages/registration';
import Login from './pages/login';

function GridComplexExample() {
  return (
    <div>
        <h3 style={{marginLeft: '500px'}}>REGISTRATION</h3>
        <Registration/>
        <h3 style={{marginLeft: '500px'}}>LOGIN</h3>
        <Login/>
    </div>
  );
}

export default GridComplexExample;