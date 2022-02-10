import React from 'react'
import logofooter from './logofooter.PNG'

export default function Footer() {
  return (
    <div>
        <footer>
            <img className='logofooter' src={logofooter}></img>
            <div className='footeritems'>
                <div className='footeritem1'>
                    Who are we
                </div>
                <a href='#' className='footeritem2'>About us</a>
                <a href='#' className='footeritem2'>Contact us</a>
                <a href='#' className='footeritem2'>For sale through us</a>
            </div>
            <div className='footeritems'>
                <div className='footeritem1'>
                Customers service
                </div>
                <a href='#' className='footeritem2'>Follow up with the order</a>
                <a href='#' className='footeritem2'>Return Policy</a>
                <a href='#' className='footeritem2'>Privacy policy</a>
            </div>
        </footer>
    </div>
  )
}
