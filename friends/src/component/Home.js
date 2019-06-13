import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <Link to='/friend' > View Friends </Link>
        </div>
    )
}
export default Home;