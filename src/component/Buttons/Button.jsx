import React from 'react'
import './Button.css'

const Button = (props) => {
    const { color, name, clickTo } = props;
    return (
        <>
            <div className="btn">
                <button onClick={ () => {
                    console.log('ok::: ')
                } }
                    style={ { backgroundColor: color } }>
                    { name }
                </button>
            </div>
        </>
    )
}

export default Button