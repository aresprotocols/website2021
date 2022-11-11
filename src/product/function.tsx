import "./function.scss";
import "./function428.scss";

import func from "../assets/product/Funtion.png";

const ProductFunction = () => {

    return (
        <section className="function">
           <div className="content">
               <div className="desc">
                   <h2>Product Function</h2>
                   <span className="info"></span>
                   <p className="desc-info">
                       Ares oracle is developed based on Substrate, mainly including ares-oracle, oracle-finance, and staking-extend, which pallets are responsible for “Quotation integration,” “validator reward distribution,” and“ validator compliance review”.
                   </p>
               </div>
               <div className="func-logo">
                   <img src={func} alt="ares product function" />
               </div>
           </div>
            <div className="contact">
                <p>
                    Want to integrate our oracle products <span className="email">info@aresprotocol.io</span>
                </p>
                <span>
                    <button>
                        <a href="mailto:info@aresprotocol.io">Contact Us</a>
                    </button>
                </span>
            </div>
        </section>
    );
}

export default ProductFunction