import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer";
import CartLayout from "./CartLayout";

export default function Cart() {
    //replace from here until you see ---------- with cart from local storage
    const [dairyEggsData, setDairyEggsData] = React.useState([]);
    const [fruitsVegetablesData, setFruitsVegetablesData] = React.useState([]);

    React.useEffect(() => {
        const fetchMenu = async () => {
            var requestOptions = {
                method: "GET",
                redirect: "follow",
            };
            try {
                const response = await fetch(
                    "http://localhost/menu.php?category=all",
                    requestOptions
                );
                const result = await response.json();
                const dairyEggs = result.filter(
                    (item) => item.category === "Dairy" || item.category === "Eggs"
                );
                setDairyEggsData(dairyEggs);
                const fruitsVegetables = result.filter(
                    (item) => item.category === "Fruits" || item.category === "Vegetables"
                );
                setFruitsVegetablesData(fruitsVegetables);
            } catch (e) {
                console.error(e.message);
            }
        };
        fetchMenu();
    }, []);

    const dairyEggs = dairyEggsData.map((item) => {
        return <CartLayout key={item.id} item={item} />;
    });
    const fruitsVegetables = fruitsVegetablesData.map((item) => {
        return <CartLayout key={item.id} item={item} />;
    });
    //----------------------------------- stop here --------------------------------------
    var price=0;
    const cost = dairyEggsData.map((item) => {
        return(price+= parseFloat( item.price))
    })
    const vat = (price*0.15).toFixed(2);
    const totaPrice = parseFloat(price) + parseFloat(vat);
    return (
        <>

            <Navbar />
            <div className="cart-container">
                <div className="cart-inside">
                    {dairyEggs}
                    <hr />
                    <div className="cart-stats">
                        <h3>Cost: {price}</h3>
                        <h3>Vat 15%: {vat}</h3>
                        <h3>Total Cost: {totaPrice}</h3>
                        <button className="btn">Proceed to checkout</button>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}

