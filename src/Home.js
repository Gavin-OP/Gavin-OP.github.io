import Navigation from './Navbar';
function Home() {
    return (
        <>
            {/* <div
                class="lazyload s-bg-image s-bg-blurred s-bg-light-text s-new-hero-section s-section s-hero-section   background-image"
                style="background-repeat:no-repeat;background-size:cover;background-color:#E8EAEC;background-position:50% 50%;background-image:url(Capilano_Suspension_Bridge.jpg)"
                data-bg="Capilano_Suspension_Bridge.jpg"
                data-react-style="{&quot;backgroundRepeat&quot;:&quot;no-repeat&quot;,&quot;backgroundSize&quot;:&quot;cover&quot;,&quot;backgroundColor&quot;:&quot;#E8EAEC&quot;,&quot;backgroundPosition&quot;:&quot;50% 50%&quot;}">

            </div> */}
            {/* <img
                alt=''
                src='/avatar.png'
                width='auto'

                className='d-inline-block align-top'
            /> */}



            <div style={{
                backgroundImage: 'url(/Capilano_Suspension_Bridge.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                height: '500px',
                // backdropFilter: "blur(10px)"
            }}>
                <div className='=mask'
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        height: '500px',
                        backdropFilter: "blur(10px)"
                    }}>
                    <Navigation />
                </div>
            </div>
        </>
    )
}


export default Home;