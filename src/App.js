import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './containers/Homepage';
import Events from './containers/Events';
import About from './containers/About';
import Donates from './containers/Donates';
import Detail from './containers/Detail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<Detail />} />
        <Route path="/donates" element={<Donates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
