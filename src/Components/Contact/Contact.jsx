import React from 'react'
import './Contact.css'
import monk from '../../assets/monk.png'
const Contact = () => {
  return (
    <div className='contact'>
        <img src={monk} alt="" />
       <div className="contact-col">
        <h3>"Feel Free to Reach Out!"</h3>
        <p>Feel free to contact us through the form below or find our contact details listed below.</p>
        <p>Your feedback, suggestions, and messages are important to us, and we truly appreciate hearing from you.</p>
        <h4>Hare Krishna!😊</h4>
        <ul>
        <li>Email : iyfsouthareaghaziabad@gmail.com</li>
        <li>Contact : 9654865863</li>
        <li>Ahobilam Bace , Green Park Colony , Near Jaat Chowk Chipiyana,Ghaziabad 201009</li>
       </ul>
       </div>
    </div>
  )
}

export default Contact
