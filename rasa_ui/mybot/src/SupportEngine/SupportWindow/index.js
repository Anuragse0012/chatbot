import React, { useState } from 'react';

import { styles } from '../../styles'

import Chatbot from './Chatbot';


const SupportWindow = props => {
    return(
        <div
            className="transition-5"
            style={{
                ...styles.supportWindow,
                ...{ opacity: props.visible ? '1' : '0'}
            }}
        >
            <Chatbot />
        </div>
    )
}

export default SupportWindow