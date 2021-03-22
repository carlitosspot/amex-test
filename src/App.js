import Header from './components/Header/Header'
import BodyLayout, { LeftSide, RightSide } from "./components/BodyLayout/BodyLayout";
import ListItems from "./components/ListItems/ListItems";
import './App.css';

function App() {


  return (
    <div className="App">
      <Header/>
      <BodyLayout>
          <LeftSide>
              <button className={'body-left-actions'}>Calculate</button>
              <button className={'body-left-actions'}>Print</button>
              <button className={'body-left-actions'}>Close</button>
          </LeftSide>
          <RightSide>
              <ListItems onAddItem={() => { /* callback to track total of line items */}}/>
          </RightSide>
      </BodyLayout>

    </div>
  );
}

export default App;
