export const getSession = () => window.localStorage.getItem('contoh_gratis_session');

export const removeSession = () => window.localStorage.removeItem('contoh_gratis_session');

export const saveSession = (session) => window.localStorage.setItem('contoh_gratis_session', session);
