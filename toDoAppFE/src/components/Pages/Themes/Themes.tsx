import {useState} from 'react';
import './themes.css';
import {navigate} from "../../../utils/navigator.ts";

const themes = [
    {
        name: 'Light Theme',
        value: 'light-theme',
        image: '/assets/mountains3.webp'
    },
    {
        name: 'Dark Theme',
        value: 'dark-theme',
        image: '/assets/mountains4.webp'
    },
    // Dodaj więcej motywów według potrzeb
];

function Themes() {
    const [selectedTheme, setSelectedTheme] = useState(themes[0]);

    const handleThemeClick = (theme: typeof themes[0]) => {
        setSelectedTheme(theme);
    };

    const handleSave = () => {
        localStorage.setItem('theme', selectedTheme.value);
        navigate("/")
        alert('Theme saved!');
    };

    return (
        <div className="themes-container">
            {themes.map((theme, index) => (
                <div
                    key={index}
                    className={`theme-card ${selectedTheme.name === theme.name ? 'selected' : ''}`}
                    onClick={() => handleThemeClick(theme)}
                >
                    <img src={theme.image} alt={theme.name}/>
                    <h3>{theme.name}</h3>
                </div>
            ))}
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export {Themes};
