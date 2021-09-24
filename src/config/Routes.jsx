import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Catalog from '../pages/Catalog';
import BookShowPage from '../pages/BookShowPage';

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/books' component={Catalog} />
            <Route path='/books/:id' render={(props) => <BookShowPage {...props} />} />
        </Switch>
    )
}

export default Routes