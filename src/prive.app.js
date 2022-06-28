import { Suspense } from 'react';
import Layoutpage from './components/Layout/Layout';
import {Routes} from './routes/Routes';


function Prive() {

    return (
        <Layoutpage>
          <Suspense>
           <Routes />
          </Suspense>
        </Layoutpage>
    );
}

export default Prive;