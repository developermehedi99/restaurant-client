import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Home/share/Navbar';
import Footer from '../pages/Home/share/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;