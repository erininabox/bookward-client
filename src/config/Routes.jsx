import { Switch, Route } from 'react-router-dom';
import BooksList from '../components/BooksList';
import Landing from '../pages/Landing';

function Routes() {
    return (
        <Switch>
            <Route path="/books">
                <BooksList />
            </Route>
            <Route path="/">
                <Landing />
            </Route>
        </Switch>
    )
}

export default Routes