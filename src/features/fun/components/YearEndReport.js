import React from 'react';

const pictures = [
    '/image/20240109/01.png',
    '/image/20240109/02.png',
    '/image/20240109/03.png',
    '/image/20240109/04.png',
    '/image/20240109/05.png'
];

const YearEndReport = () => {
    return (
        <section className="year-end-report" aria-label="20240109 gallery">
            {pictures.map((picture, index) => (
                <article key={picture} className="year-end-report__page">
                    <img
                        src={`${process.env.PUBLIC_URL}${picture}`}
                        alt={`20240109 gallery slide ${index + 1}`}
                        className="year-end-report__image"
                        loading={index === 0 ? 'eager' : 'lazy'}
                    />
                </article>
            ))}
        </section>
    );
}

export default YearEndReport;
