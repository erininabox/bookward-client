import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Catalog from '../pages/Catalog';
import BookShowPage from '../pages/BookShowPage';
import TeachersList from '../pages/TeachersList';
import TeacherShowPage from '../pages/TeacherShowPage';
import TeacherCreatePage from '../pages/TeacherCreatePage';
import BookSetCreatePage from '../pages/BookSetCreatePage';

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/books' component={Catalog} />
            <Route exact path='/books/add' component={BookSetCreatePage} />
            <Route exact path='/books/:id' render={(props) => <BookShowPage {...props} />} />
            <Route exact path='/teachers' component={TeachersList} />
            <Route exact path='/teachers/add' component={TeacherCreatePage} />
            <Route exact path='/teachers/:id' render={(props) => <TeacherShowPage {...props} />} />
        </Switch>
    )
}

export default Routes