import './CategoryProduct.css';

function CategoryProduct({ text, image }) {
    return (
        <>
            <div className='card-product'>
                <div className='card-product-bg'>
                    <img src={image}/>
                </div>
                <p>{text}</p>
            </div>
        </>
    )
}

export default CategoryProduct