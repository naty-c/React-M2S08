import './Header.css'

function Header() {
    return (
        <>
            <header className='header'>
                <div className='header-logo'>
                    <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fwhite-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D121%26h%3D40%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Zé Delivery Logo" /> 
                </div>
                <div className='header-button'>    
                    <button className='header-btn' type="submit" ><strong>Login</strong></button>            
                </div>
            </header>
        </>
    )
}

export default Header