import React from 'react';
import Project from "./components/project";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects : [
                {
                    title : "Gloeiend Goed",
                    image : "https://www.studiozoetekauw.nl/wp-content/uploads/2014/09/fonkelEdit.jpg"
                },
                {
                    title : "Project 2",
                    image : "https://www.studiozoetekauw.nl/wp-content/uploads/2013/12/camille01.jpg"
                }
            ]
        };

    }

    render() {
        return (
            <div className="app">
                {this.state.projects.map(project => (
                    <Project
                        title={project.title}
                        image={project.image}
                        onClick={() => console.log(project)}
                    />
                ))}
            </div>
        );
    }

}

export default App;