import React from 'react';
import { IndexRedirect, Route, browserHistory } from 'react-router';
import GifSearch from './GifSearch';

function getRoutes(store) {

    // Publish the location to the store
    browserHistory.listen(location => {
        store.dispatch({
            type: 'FETCH_LOCATION',
            payload: location
        });
    });

    return (
        <Route name="root">
            <IndexRedirect to="/" />
            <Route name="gifSearch" path="/" component={GifSearch}/>
        </Route>
    )

}

export default getRoutes;