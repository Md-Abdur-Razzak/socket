import React from 'react';
import { Outlet } from 'react-router-dom';

const Maincontiner = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Maincontiner;