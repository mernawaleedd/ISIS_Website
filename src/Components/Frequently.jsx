import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Frequently = ({
    bgColor,
    text,
    plusIcon,
    minusIcon,
    iconBgColor,
    iconOpenBgColor,
    description
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className={`p-4 rounded-2xl transition-all duration-300 animate-on-scroll ${isOpen ? 'bg-[#24698F]' : bgColor}`}>
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <p className={`text-base mt-3 font-semibold transition-all mb-4 duration-300 ${isOpen ? 'text-[#FBFBFB]' : 'text-[#0E2F40]'}`}>
                        {text}
                    </p>

                </div>
                <div
                    className={`rounded-full  p-2 flex justify-center items-center cursor-pointer transition-all duration-300 ${isOpen ? iconOpenBgColor : iconBgColor}`}
                    onClick={handleToggle}
                >
                    <img
                        src={isOpen ? minusIcon : plusIcon}
                        alt="toggle icon"
                        className="w-5 h-5 transition-all duration-300"
                    />
                </div>
            </div>

            {isOpen && description && (
                <p className="mt-2 text-md text-[#FBFBFB] tracking-widest leading-loose">{description}</p>
            )}
        </div>
    );
};

Frequently.propTypes = {
    bgColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    plusIcon: PropTypes.string.isRequired,
    minusIcon: PropTypes.string.isRequired,
    iconBgColor: PropTypes.string,
    iconOpenBgColor: PropTypes.string,
    description: PropTypes.string,
};

Frequently.defaultProps = {
    iconBgColor: 'bg-[#24698F]',
    iconOpenBgColor: 'bg-white',
    description: '',
    bgColor: 'bg-[#FBFBFB]'
};

export default Frequently;
