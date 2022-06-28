import './App.scss';
import Public from './public.app';
import Prive from './prive.app';
import useStart from './hooks/useStart';
function App() {
    let {start} = useStart()

    if (start.token) {
      return <Prive />
    } else {
       return <Public />
    }
}

export default App;
