'use client';

import React, { useEffect, useState } from 'react';

function Footer() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        setIsLogin(window.location.href.toString().includes('sign-in'));
        setIsLogin(window.location.href.toString().includes('sign-up'));
    });

    return !isLogin && <div>Footer</div>;
}

export default Footer;
