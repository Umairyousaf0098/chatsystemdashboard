import Dashboard from '../containers/Dashboard/Dashboard';
import Voice from '../containers/Voice/Voice';
import BizInfo from '../containers/BizInfo/BizInfo';
import ContantBank from '../containers/ContantBank/ContantBank';
import { Routes, Route } from 'react-router-dom';

function AppRoutes() {
    return (  <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Voice' element={<Voice/>}/>
        <Route path='/BizInfo' element={<BizInfo/>}/>
        <Route path='/ContantBank' element={<ContantBank/>}/>
    </Routes>);
}

export default AppRoutes;