import React from 'react'
import "./Aboutus2.css"
import Aboutus2b from './Aboutus2b'
import Malik from '../Images/Malik2.jpg'
import Chinedu from '../Images/chinedu-samuel.jpg'
import Glory from '../Images/caricature4.svg'
import Aminu from '../Images/Aminu.png'



 function About() {
    return (
        <div className="imagediv margin-bottom">
             <Aboutus2b
             img={Malik}
             name="Malik Muktar"
             namedescrip="Back-end Developer"/>
             <Aboutus2b
             img="https://github.com/ekesolonge.png"
             name="Longe Ekeso"
             namedescrip="Back-end Developer"/>
             <Aboutus2b
             img={Chinedu}
             name="Chinedu Samuel"
             namedescrip="Back-end Developer"/>
             <Aboutus2b
             img={Glory}
             name="Glory a.k.a. Boss Lady  a.k.a. Super Woman"
             namedescrip="Front-end Developer"/>
             <Aboutus2b
             img={Aminu}
             name="Aminu Muhammad"
             namedescrip="Front-end Developer"/>
                 
        </div>
    )
}
export default About;