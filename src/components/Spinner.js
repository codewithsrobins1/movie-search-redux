import React from 'react'
import popcorn from './popcorn.gif'

function Spinner() {
    return (
        <div>
            <img
                src={popcorn}
                style={{width: '300px', margin: 'auto', display: 'block'}}
                alt="Fetching Your Movies!"
            />
        </div>
    )
}

export default Spinner
