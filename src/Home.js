import Navigation from './Navbar';


function Home() {
    return (
        <>
            <div style={{
                backgroundImage: 'url(/Capilano_Suspension_Bridge.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                height: '70vh',
            }}>
                <div className='=mask'
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        height: '70vh',
                        backdropFilter: "blur(10px)"
                    }}>
                    <Navigation />
                    <div className='text-start' style={{ marginLeft: '27vh', marginTop: '33vh' }}>
                        <p>
                            <span style={{ fontSize: '60px', fontWeight: 'bold', color: 'white', marginBottom: '-10px', lineHeight: '6vh' }}>ZHANG Haoxiang (Gavin)</span>
                            <br></br>
                            <span style={{ fontSize: "40px", color: 'white', marginTop: '-100px' }}>Quantitative Finance and Risk Management</span>
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ marginLeft: '8vw', marginTop: '60px', marginBottom: '60px', marginRight: '8vw' }}>
                <h1>
                    Personal Profile
                </h1>
                <p style={{ marginTop: '30px' }}>
                    Being a multitasker who is not only good at risk management but also
                    talented in time management, paperwork, communication, coding, and
                    various tasks, I can deal with the stress even under CUHK courses
                    and NTU exchange while managing 5 associations and organizing
                    voluntary teams simultaneously. I would like to take on the coming
                    challenges and innovations to embrace the goal of joining the
                    financial industry.
                </p>
            </div>

        </>
    )
}

export default Home;