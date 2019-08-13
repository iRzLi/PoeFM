export const UPDATE_SEARCH_STRING = 'UPDATE_SEARCH_STRING';

export const updateSearchString = (searchString) => {
    return {
        type: UPDATE_SEARCH_STRING,
        searchString,
    };
};

