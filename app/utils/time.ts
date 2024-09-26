const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', timeZone: 'America/Monterrey'});
};

const getTimeDifference = (start: Date, end: Date): string => {
    const diffInMilliseconds = end.getTime() - start.getTime();
    const minutes = Math.floor(diffInMilliseconds / (1000 * 60));
    return `${minutes} min`;
}

export {formatTime, getTimeDifference};