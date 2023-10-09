import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navi = useNavigate();
    const goTo = () => {
        navi('/sing-up');
    }
    return (
        <div>
            <Link to={ '/about' }>
                <button>About</button>
            </Link>
            <Link to={ '/faqs' }>
                <button>Faqs</button>
            </Link>
            <Link to={ '/login' }>
                <button>Login</button>
            </Link>
            <button onClick={ goTo }>Singup</button>
        </div>
    )
}

export default Home