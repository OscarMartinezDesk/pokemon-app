import { Routes, Route, BrowserRouter } from "react-router-dom";

import Inicio from "../components/Inicio/Inicio";
import Tienda from "../components/Tienda/Tienda";
import Contacto from "../components/Contacto/Contacto";
import NotFound from '../components/NotFound/NotFound';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            
        </BrowserRouter>
    )
}
