import { Link } from 'react-router-dom';
import AcademicCapIcon from '@heroicons/react/24/outline/AcademicCapIcon';

export const Navbar = () => {
    // Define a common style object for links to avoid repetition
    const linkStyle = {
        display: 'flex',
        alignItems: 'center', // Centers items vertically
        gap: '8px', // Creates a gap between icon and text
        textDecoration: 'none', // Removes underline from links
        color: 'inherit', // Uses the inherited font color
    };

    return (
        <nav style={{
            display: 'flex',
            height: '64px',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderBottom: '1px solid #ccc',
            padding: '0.5rem',
        }}>
            <Link to="/" style={linkStyle}>
                <AcademicCapIcon style={{ width: '24px', height: '24px' }} />
                <span>pomodoro</span>
            </Link>

            <Link to="/" style={linkStyle}>
                <AcademicCapIcon style={{ width: '24px', height: '24px' }} />
                <span>no1</span>
            </Link>

            <Link to="/" style={linkStyle}>
                <AcademicCapIcon style={{ width: '24px', height: '24px' }} />
                <span>no2</span>
            </Link>
        </nav>
    );
};
