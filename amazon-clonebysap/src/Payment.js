import React, { useState, useEffect } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeded, setSucceded] = useState(false);
  const [processing, setProcessing] = useState("");  
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
     // generate the special stripe secret which allows to charge a customer

     const getClientSecret = async () => {
         const response = await axios({
             method: "post",
             url: `/payments/create?total=₹{getBasketTotal(basket) * 100}`
         });
         setClientSecret(response.data.clientSecret)
     }

     getClientSecret();
  }, [basket])

  console.log("THE SECRET IS >>>", clientSecret)

  const handleSubmit = async (event) => {
      // do all the fancy stripe stuffff...
      event.preventDefault();
      setProcessing(true);

      const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
              card: elements.getElement(CardElement)
          }
      }).then(({ paymentIntent }) => {


          setSucceded(true);
          setError(null)
          setProcessing(false)

          dispatch({
              type: "EMPTY_BASKET"
          })

      })

  }

  const handleChange = event => {
      // Listen for changes in the CardElement
      // and display any errors as the customer types their card details
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
  }

  return (
    <div className="payment">
        <div className="payment__container">
            <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                    )
            </h1>

            {/* Payment section - delivery address */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>Gr. Floor, Sitalraj Niwas</p>
                    <p>Raja Rammohan Roy Road</p>
                    <p>Near Kamakhya Mistanna Bhander</p>
                    <p>Hakimpara, Siliguri, W/B</p>
                    <p>India, PIN-734001</p>
                </div>
            </div>

            {/* Payment section - Review Items */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>

                </div>
                <div className="payment__items">
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            {/* Payment section - Payment method */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                        {/* Stripe magic will go */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                                />
                                <button disabled={processing || disabled ||succeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                                <div className="payment__done">
                                    <button onClick={e => history.push("/orders")}>Done</button>
                                    <p>Dear customer, please click on the DONE button if processing is shown</p>
                                </div>
                            </div>

                              {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment
