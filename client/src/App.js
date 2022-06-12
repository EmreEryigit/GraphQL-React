
import './App.css';
import { Col, Row } from 'antd';
import Home from './pages/Home';
import { Route,Switch } from 'react-router-dom';
import Header from './components/Header';
import NewPost from "./pages/NewPost"
import Event from './pages/Event';
function App() {
  return (
    <div className="App">
     <Row justify='center'>
     <Col span={18}>
     <div className='navbar' ><Header/></div>
     </Col>
     
      <Col className='content' span={18}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/new" component={NewPost}/>
          <Route path="/event/:id" component={Event}/>
        </Switch>
      </Col>
    </Row>
    </div>
  );
}

export default App;
