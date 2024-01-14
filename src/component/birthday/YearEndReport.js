import React from 'react';
// import '../../css/YearEndReport.css';

class PictureGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pictures: [
                "../../image/20240109/01.png",
                "../../image/20240109/02.png",
                "../../image/20240109/03.png",
                "../../image/20240109/04.png",
                "../../image/20240109/05.png",
            ],
            currentPage: 0,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        // Calculate the current page based on the scroll position and window height
        const currentPage = Math.floor(window.scrollY / window.innerHeight);
        this.setState({ currentPage });
    }


    render() {
        return (
            <div>
                {this.state.pictures.map((picture, index) => (
                    <div
                        key={index}
                        className={`page ${index === this.state.currentPage ? 'active' : ''}`}
                    >
                        <img
                            src={picture}
                            alt={`Picture ${index + 1}`}
                            style={{ width: '100%', height: 'auto', maxHeight: '100vh' }}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default PictureGallery;
