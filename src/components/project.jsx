import React from 'react';

class Project extends React.Component {

    render() {

        return (
            <div className="project">
                <div className="project__title">
                    {this.props.title}
                </div>
                <div className="project__image">
                    <img src={this.props.image}/>
                </div>
                <div
                    className="project__button"
                    onClick={this.props.onClick}
                >
                    Meer informatie
                </div>
            </div>
        );
    }

}
export default Project;