export const FETCH_GIF = 'FETCH_GIF';
export const FETCH_GIF_SUCCESS = 'FETCH_GIF_SUCCESS';
export const FETCH_GIF_ERROR  = 'FETCH_GIF_ERROR';

export const fetchGif = (searchTerm) => {
    return {
        type: FETCH_GIF,
        searchTerm
    }
}