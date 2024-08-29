/* eslint-disable react/prop-types */
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="fixed top-20 right-5 z-50 p-2 rounded-full bg-primary text-secondary"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
    );
};

export default ThemeToggle;