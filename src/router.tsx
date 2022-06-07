import { BrowserRouter, Route} from 'react-router-dom';
import { formStep1 } from './pages/formStep1';
import { formStep2 } from './pages/formStep2';
import { formStep3 } from './pages/formStep3';


export const Router = () => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={formStep1} />
            <Route path='/step2' component={formStep2} />
            <Route path='/step3' component={formStep3}/>  
        </BrowserRouter>
    );
}