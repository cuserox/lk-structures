export const scrollToTop = () => {
    if (window) {
        window.scrollTo(0, 0, {behaviour: 'smooth'})
    }
};