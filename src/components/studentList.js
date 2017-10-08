import React,{ Component } from 'react';
import StudentListItem from './studentListItem';

class StudentList extends Component {
    render(){
        let listItem = this.props.students.map( (item) => {
            return  <StudentListItem student={item} key={item._id}/>
        })
        return(
         <div className="container margin__top--sm">
            <div className="row">
               {listItem}
            </div>
          </div>
        )
    }
}

export default StudentList;