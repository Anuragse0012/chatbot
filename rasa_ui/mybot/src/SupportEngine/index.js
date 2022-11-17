import React, { useRef, useEffect, useState } from 'react';

import Avatar from './SupportWindow/Avatar';
import SupportWindow from './SupportWindow';

const SupportEngine = () => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(()=>{
        // When mouse is clicked outside the chat window, window gets closed
        // Because ref.current will be the window and ref.current.contains(event.target) will be zero as it is clicked outside window
        // But the 2nd value is negated as it's clicked outside and AND logic becomes true and setVisible sets visible to false
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setVisible(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref])

    return (
        <div ref={ref}>
            <SupportWindow 
                visible={visible}
            />
            <Avatar
                onClick={() => setVisible(true)}
                style={{ position: 'fixed', bottom: '24px', right: '24px' }}
            />
        </div>
    )
}

export default SupportEngine;