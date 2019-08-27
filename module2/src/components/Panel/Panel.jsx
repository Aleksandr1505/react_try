import React from 'react';
import PropTypes from 'prop-types';
import './Panel.css';

const Panel = ({ title, children }) => {
    // console.log(children);
    return (
        <section className='section'>
            <h2 className='title'>{title}</h2>
            {children}
        </section>
    )
};

Panel.defaultProps = {
    title: "User profile"
}

Panel.propTypes = {
    title: PropTypes.string
}

export default Panel;