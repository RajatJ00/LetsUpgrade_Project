import { useState } from "react";

function Product(props) {
    let [a, setPrice] = useState(0);

    let productname = props.name;
    let productprice = props.price;
    function plusData() {
        setPrice(a = a + 1);
    }
    function minusData() {
        if (a > 0) {
            setPrice(a = a - 1)
        }
        else {
            setPrice(a = 0);
        }
    }
    function Buy_btn() {
        setPrice(a = 0)
        alert("Buying..."+productname+" Price "+productprice);
    }
    return (
        <>
            <div className="product">
                <img alt={props.name} src={props.url} />
                <h1>{props.name}</h1>
                <p>₹ {props.price}</p>
                <div className="btn_div">
                    <div>
                        <button className='btn' onClick={() => { minusData() }}>-
                        </button>
                        <a>{a}</a>
                        <button className='btn' onClick={() => { plusData() }}>+
                        </button>
                    </div>
                    <button className='btn' onClick={() => { Buy_btn() }}>Buy
                    </button>
                </div>
            </div>
        </>
    )
}

export default Product;
