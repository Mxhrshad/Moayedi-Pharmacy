import './App.css'
import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  </Layout>
  )
}

export default App
