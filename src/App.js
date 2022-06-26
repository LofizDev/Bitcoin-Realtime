import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import News from './components/News';
import { jumbotron } from 'bootstrap-css'
import Weather from './components/Weather';
import Bitcoin from './components/Bitcoin/Bitcoin'
import TableCoin from './components/Bitcoin/TableCoin';
import TableTrade from './components/TableTrade/TableTrade';
function App() {
  return (

    <Tabs
      defaultActiveKey="news"
      id="uncontrolled-tab-example"
      className="mb-3 tab_custom"
    >
      <Tab eventKey="news" title="Tin Tức">
        <News />
      </Tab>
      <Tab eventKey="weather" title="Thời Tiết">
        <Weather />
      </Tab>
      <Tab eventKey="bitcoin" title="Tiền Điện Tử">
        <TableCoin />
      </Tab>
      <Tab eventKey="bitcoinRealtime" title="Bitcoin Realtime">
        <TableTrade />
      </Tab>

    </Tabs>
  );
}

export default App;
