import React from 'react';
import Navbar from '../components/Navbar';
import store1 from './StoresIMG/store1.jpg'
import store2 from './StoresIMG/store2.png'
import store3 from './StoresIMG/store3.png'
import store4 from './StoresIMG/store4.jpg'

function Stores() {
  return <div>
      <Navbar></Navbar>
      <div>
      <p className='pp'>Popular Fashion Stores</p>
      <div className='stores'>
                <div class="store">
                    <img className='storeimg' src={store1} alt='img'/>
                </div>
                <div class="store">
                    <img className='storeimg' src={store2} alt='img'/>
                </div>
                <div class="store">
                    <img className='storeimg' src={store3} alt='img'/>
                </div>
                <div class="store">
                    <img className='storeimg' src={store4} alt='img'/>
                </div>
                
      </div>
      <p className='pp'>Popular Fashion Stores</p>
      <div className='stores'>
                <div class="store">
                    <img className='storeimg' src={store1} alt='img'/>
                </div>
                <div class="store">
                    <img className='storeimg' src={store2} alt='img'/>
                </div>
                <div class="store">
                    <img className='storeimg' src={store3} alt='img'/>
                </div>
                <div class="store">
                    <img className='storeimg' src={store4} alt='img'/>
                </div>
                
      </div>
      <p className='pp'>Popular Fashion Stores</p>
      <div className='stores'>
                <div class="store">
                    <img className='storeimg' src={store1} alt='img'/>
                </div>
                <div class="store">
                    <img className='storeimg' src={store2} alt='img'/>
                </div>
                <div class="store">
                    <img className='storeimg' src={store3} alt='img'/>
                </div>
                <div class="store">
                    <img className='storeimg' src={store4} alt='img'/>
                </div>
                
      </div>
      </div>
  </div>;
}

export default Stores;
