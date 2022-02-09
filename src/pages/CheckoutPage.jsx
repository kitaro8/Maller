import React from 'react';
import Navbar from '../components/Navbar'

function CheckoutPage() {
  return <div>
      <Navbar></Navbar>
      <div>
          <div className='payment'>Payment info</div>
          <div className='pmethod'>
              <p>Payment method:</p>
                <input type="radio" id="credit_card" name="fav_language" value="credit_card"/>
                <label for="credit_card">Credit Card</label><br/>
                <input type="radio" id="paypal" name="fav_language" value="paypal"/>
                <label for="paypal">Paypal</label>

          </div>
          <div className='card_info'>
              <p className='hn'>Holder Name:</p>
              <input  className="holder_name"/>
              <p className='cn'>Card Number:</p>
              <input  className="card_number"/>
              <p className='date'>Ex Date:</p>
              <input  className="ex_date"/>
          </div>

          <div>
              <button className='purchase'>Purchase</button>
          </div>
      </div>
  </div>
}

export default CheckoutPage;
