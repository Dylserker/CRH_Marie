import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Profile from './pages/profile/profile';
import Resume from './pages/resume/resume';
import JobOffer from './pages/job_offer/job_offer';
import About from './pages/about/about';
import Login from './pages/login/login';
import Register from './pages/register/register';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/job_offer" element={<JobOffer />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;