import React from "react";

const Dropdown = ({ options, SelectedOption, onSelect}) => {
    return (
        <select
            value={SelectedOption}
            onChange={(e) => onSelect(e.target.value)}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;