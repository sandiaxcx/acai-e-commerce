import Header from './components/layout/Header';
import Dashboard from './views/dashboard';
import './styles/layout.scss';

export default function Layout() {
    return (
        <section className="layoutContainer">
            <Header />
            <Dashboard />
        </section>
    );
}