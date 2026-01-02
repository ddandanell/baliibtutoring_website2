import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import PYP from './pages/PYP';
import MYP from './pages/MYP';
import DP from './pages/DP';
import Locations from './pages/Locations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-layout">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pyp-tutoring" element={<PYP />} />
                        <Route path="/myp-tutoring" element={<MYP />} />
                        <Route path="/diploma-programme-tutoring" element={<DP />} />
                        <Route path="/locations" element={<Locations />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
