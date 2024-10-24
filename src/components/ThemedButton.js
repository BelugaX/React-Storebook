import React from 'react';

const ThemedButton = ({ label, onClick, theme }) => {
    const styles = {
        backgroundColor: theme.background,
        color: theme.color,
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
    };

    return (
        <button style={styles} onClick={onClick}>
            {label}
        </button>
    );
};

export default ThemedButton;
