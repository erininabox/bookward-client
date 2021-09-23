import TeachersSort from './TeachersSort'

function TeachersList() {
    return(
        <div className='teachers-list'>
            <TeachersSort />
            <TeachersList />
            Individual teachers listed here.
        </div>
    )
}

export default TeachersList