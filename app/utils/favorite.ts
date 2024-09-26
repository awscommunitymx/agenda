const baseUri = 'https://9drgkyu77h.execute-api.us-east-1.amazonaws.com/Prod/favorite';

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

const registerFavorite = async (sessionId: string, inc: number) => {
    const uri = `${baseUri}/${inc > 0 ? 'inc' : 'dec'}/${sessionId}`;

    const response = await fetch(uri, {method: 'POST'});

    if (!response.ok) {
        throw new Error('Failed to register favorite');
    }
}

export {toggleFavorite, isFavorite, getFavoriteSessions, registerFavorite, baseUri};
