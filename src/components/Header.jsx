import globe from '../assets/images/globe.svg';
import './Header.css';

export default function Header() {
    return (
        <header>
            <img src={globe} alt='' />
            <h1>my travel journal</h1>
        </header>
    );
}