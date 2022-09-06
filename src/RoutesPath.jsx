import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import APropos from './pages/APropos/Apropos';
import Logement from './pages/Logement/Logement';


function RoutesPath() {

    return (
        <div className='RoutesPath'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/apropos' element={<APropos />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='/ficheLogement/:id' element={<Logement />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RoutesPath;