import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import CategoryProduct from "../../components/Category/CategoryProduct";
import Products from "../Products/Products";
import AgeVerificationModal from "../../components/Modal/Modal";
import './Home.css';

function HomePage() {

    const CATEGORIAS = [
        {
            id: 1,
            text: 'Special Offers',
            image: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_ofertas_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 2,
            text: 'Beers',
            image: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_cervejas_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 3,
            text: 'Water and Ice',
            image: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_gelo_e_agua_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 4,
            text: 'Alcohol-Free',
            image: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Frefri.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 5,
            text: 'Chopp',
            image: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_chopp_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 6,
            text: 'Barbecue',
            image: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_churrasco_v2_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 7,
            text: 'Grocery',
            image: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_mercearia_v3.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 8,
            text: 'Beats and Ice',
            image: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fdrinks-prontos.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 9,
            text: 'Wines',
            image: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fvinhos2.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 10,
            text: 'Snacks',
            image: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_petiscos_v3_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 11,
            text: 'Distillates',
            image: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_destilados_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 12,
            text: 'Sweets',
            image: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_bomboniere_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 13,
            text: 'Convenience',
            image: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_conveniencia_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 14,
            text: 'News',
            image: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_novidades_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        }
    ]
    
    return (
        <>

            <AgeVerificationModal />

            <Header />
            <Hero />
            <section className="content">
                <div className="category-list">
                    {CATEGORIAS.map(category => 
                        <CategoryProduct key={category.id} text={category.text} image={category.image}/> )}
                </div>

                <Link to='/products'>Products</Link>

            </section>
        </>
    )
}

export default HomePage
