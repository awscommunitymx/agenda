const toggleFavorite = (sessionId: string) => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as string[];

    if (favorites.includes(sessionId)) {
        favorites = favorites.filter((id: string) => id !== sessionId);
    } else {
        favorites.push(sessionId);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const isFavorite = (sessionId: string): boolean => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as string[];
    return favorites.includes(sessionId);
}

const getFavoriteSessions = () => {
    return JSON.parse(localStorage.getItem('favorites') || '[]') as string[];
}

export {toggleFavorite, isFavorite, getFavoriteSessions};
