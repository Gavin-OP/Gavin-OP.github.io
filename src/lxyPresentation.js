import React from 'react';


class StaticHTML extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            html: ''
        }
    }

    componentDidMount() {
        // fetch the HTML file
        fetch('./MDS.html')
            .then(response => response.text())
            .then(html => {
                this.setState({ html: html })
                console.log(html)
            })
    }

    render() {
        console.log(this.state.html)
        return (
            <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
        );
    }
}

export default StaticHTML;
