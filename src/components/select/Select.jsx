import React, { useEffect, useRef, useState } from 'react';

import { Chevron } from '../chevron/Chevron';

import './select.scss';

// dropdown filter: shows the chosen value on the button,
// a check mark and the number of items next to every option
export const Select = ({ label, value, setValue, option, counts = {} }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const selected = option.find((item) => item.value === value && item.value !== '');

    // close on click outside and on Escape
    useEffect(() => {
        if (!isOpen) return;

        const handleClick = (event) => {
            if (!ref.current.contains(event.target)) setIsOpen(false);
        };
        const handleKey = (event) => {
            if (event.key === 'Escape') setIsOpen(false);
        };

        document.addEventListener('mousedown', handleClick);
        document.addEventListener('keydown', handleKey);

        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('keydown', handleKey);
        };
    }, [isOpen]);

    const handleOptionClick = (optionValue) => {
        setValue(optionValue);
        setIsOpen(false);
    };

    return (
        <div className="block__select" ref={ref}>
            <button
                type="button"
                className={`block__select-label ${selected ? 'block__select-label-active' : ''}`}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
            >
                {label}
                {selected && <span className="block__select-value">: {selected.name}</span>}
                {selected && <span className="block__select-dot" aria-hidden="true" />}
                <Chevron open={isOpen} className="block__select-arrow" />
            </button>

            {isOpen && (
                <ul className="block__select-list">
                    {option.map((item) => {
                        const isSelected = item.value === value;
                        const count = counts[item.value];
                        const isEmpty = item.value !== '' && count === 0;

                        return (
                            <li key={item.id}>
                                <button
                                    type="button"
                                    className={`block__select-item ${isSelected ? 'block__select-item-selected' : ''}`}
                                    onClick={() => handleOptionClick(item.value)}
                                    disabled={isEmpty}
                                >
                                    <span className="block__select-check">{isSelected ? '✓' : ''}</span>
                                    {item.name}
                                    {count !== undefined && (
                                        <span className="block__select-count">{count}</span>
                                    )}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
