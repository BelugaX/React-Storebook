import React from 'react';

const ThemedButton = ({ label, onClick, theme, disabled }) => {
    const styles = {
        backgroundColor: theme.background,
        color: theme.color,
        border: 'none',
        padding: '10px 20px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
    };

    return (
        <button style={styles} onClick={disabled ? null : onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default ThemedButton;
