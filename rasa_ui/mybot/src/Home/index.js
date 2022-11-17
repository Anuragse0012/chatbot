import React from 'react';

import SupportEngine from '../SupportEngine'


const Home = () => {
    return(
        <div style= {{ background: "black"}}>
            {/* <div>dangerouslySetInnerHTML={{ __html: htmlCode}}</div> */}
            <SupportEngine />
         </div>
    )
}

export default Home;

export const htmlCode = ``