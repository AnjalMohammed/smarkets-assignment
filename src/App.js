import { RootProvider } from './contexts/RootProvider';
import './styles/App.css';
import { AppLayout } from './Components/AppLayout';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <RootProvider>
      <Router>
        <AppLayout />
      </Router>
    </RootProvider>
  );
}
