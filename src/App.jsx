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
import CangguTutoring from './pages/CangguTutoring';
import UbudTutoring from './pages/UbudTutoring';
import SanurTutoring from './pages/SanurTutoring';
import IBMathTutoring from './pages/IBMathTutoring';
import OnlineTutoring from './pages/OnlineTutoring';
import ExamPreparation from './pages/ExamPreparation';
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
                        {/* Location-specific pages */}
                        <Route path="/canggu-ib-tutoring" element={<CangguTutoring />} />
                        <Route path="/ubud-ib-tutoring" element={<UbudTutoring />} />
                        <Route path="/sanur-ib-tutoring" element={<SanurTutoring />} />
                        {/* Subject-specific pages */}
                        <Route path="/ib-math-tutoring" element={<IBMathTutoring />} />
                        {/* Service-specific pages */}
                        <Route path="/online-tutoring" element={<OnlineTutoring />} />
                        <Route path="/exam-preparation" element={<ExamPreparation />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
