import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';

import './App.css';

function App() {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
