import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Contact from "../pages/Contact";

export default function Router() {
    return(

        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path='contact' element={<Contact/>}/>
                
            </Routes>
        </BrowserRouter>

    )        
}