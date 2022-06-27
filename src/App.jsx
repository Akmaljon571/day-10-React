import './App.scss';
import Public from './public.app';
import Prive from './prive.app';
function App() {
    let local = window.localStorage.getItem('token')

    if (local) {
      return <Prive />
    } else {
       return <Public />
    }
}

export default App;
