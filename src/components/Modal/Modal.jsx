import { useState, useEffect } from "react";
import './Modal.css';

function AgeVerificationModal() {

    const [showModal, setShowModal] = useState(true);

    function handleCloseModal() {
        setShowModal(false);
    };

    useEffect(() => {
        setShowModal(true);
    }, []);

    return (

        showModal && (
        <div className='modal-container'>
                <div className='modal-logo'>
                <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fsmall-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D83%26h%3D83%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Zé Delivery Logo" />
            </div>
                <h2>Are 18 years or more?</h2>
                <div className='modal-actions'>
                    <button className='btn-no' onClick={handleCloseModal}>No</button>
                    <button className='btn-yes' onClick={handleCloseModal}>Yes</button>
                </div>
        </div>
        )
    );
}

export default AgeVerificationModal