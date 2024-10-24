import React from 'react';

const ThemedButton = ({ label, onClick, theme, style }) => {
    const combinedStyles = {
        ...style,
        backgroundColor: theme.background,
        color: theme.color,
        border: '1px solid',
        padding: '10px 20px',
        cursor: 'pointer',
    };

    return (
        <button style={combinedStyles} onClick={onClick}>
            {label}
        </button>
    );
};

export default ThemedButton;
