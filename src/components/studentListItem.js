import React,{ Component } from 'react';

class StudentListItem extends Component {
    render(){
        return(
            <div className="card col-xs-12 col-sm-3 col-md-3 margin__top-xs">
                <div className="panel panel-default no-shadow no-border">
                    <div className="panel-body no-border no-shadow">
                        <div className="card__photo"></div>
                        <div className="card__details">
                            <img className="card__photo-thumb img-circle" src='https://avatars2.githubusercontent.com/u/2795724?v=4&s=460' alt="profile"/>
                            <h4>Daniel Anthony Juwon</h4>
                        </div>
                        <div className="card__btn">
                            <button className="btn btn__main btn__style">view</button>
                            <button className="btn btn__primary btn__style"><i className="icons icon-pencil"></i>&nbsp;Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentListItem;