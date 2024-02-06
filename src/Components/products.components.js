import Product from './product.components';

function Products() {
    return (
        <>
            <div className='product_container'>
                <Product name="T-Shirt shine" price="250" url="http://images-platform.99static.com/TI0KHcu8pvnGpzPSgIJQ7f3HNR4=/83x67:884x868/580x580/projects-files/165/16521/1652149/9124bd29-e6dd-4ea5-8945-cc7145e22bc9.jpg" />
                <Product name="T-Shirt wear to tear" price="250" url="http://images-platform.99static.com/f2RYxjx4NS-EcNEN0OvAExdOBUc=/84x56:884x856/580x580/projects-files/126/12651/1265139/e5413446-1f4b-4f0d-bcde-e5b0273d82c7.jpg" />
                <Product name="T-Shirt jaguar" price="250" url="http://images-platform.99static.com/ehhtid5pf69pgTbJvOj3Ew3eXL4=/78x78:882x882/580x580/99designs-contests-attachments/74/74586/attachment_74586586" />
            </div>
        </>
    )
}

export default Products;