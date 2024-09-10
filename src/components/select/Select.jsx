import React, { useState } from 'react';

import arrowDown from '../../source/svg/icons/arrow-down.svg';
import arrowUp from '../../source/svg/icons/arrow-up.svg';

import './select.scss';

export const Select = ({ label, setValue, option }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLabelClick = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleOptionClick = (value) => {
        setValue(value);
        setIsOpen(false);
    };

    return (
        <div className="block__select">
            <label className="block__select-label" onClick={handleLabelClick}>
                {label}
                <img className="block__select-arrow" src={isOpen ? arrowUp : arrowDown} alt="arrow" />
            </label>

            {isOpen && (
                <ul className="block__select-list">
                    {option.map((item) => (
                        <li
                            key={item.id}
                            className="block__select-item"
                            onClick={() => handleOptionClick(item.value)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
