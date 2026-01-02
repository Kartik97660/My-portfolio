import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const scrollToId = sessionStorage.getItem('scrollToId');

        if (scrollToId) {
            // Scroll to specific element ID from session storage
            setTimeout(() => {
                const element = document.getElementById(scrollToId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    // Clear the storage so refresh goes to top
                    sessionStorage.removeItem('scrollToId');
                }
            }, 100);
        } else if (hash) {
            // Normal hash scrolling
            setTimeout(() => {
                const element = document.getElementById(hash.slice(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // Scroll to top
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
