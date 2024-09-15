/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'
import './Head.css'

const Head = ({subTitle, title}) => {
        // console.log('Success!')
    return (
        <div className='head'>  
        <span>{subTitle}</span>          
        <h2 className='text-4xl text-black'>{title}</h2>
        </div>
    );
}

// Head.propTypes = {
//     title: PropTypes.string.isRequired,
//     subTitle: PropTypes.string.isRequired,
// };

export default Head;
