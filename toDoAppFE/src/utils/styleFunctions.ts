export const toggleScreenLock = (isLockActive: boolean) => {
    scrollToTop();
    document.body.style.overflowY = `${isLockActive ? "hidden" : ""}`;
}

export const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "instant"});
}