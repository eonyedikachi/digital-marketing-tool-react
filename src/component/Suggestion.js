import React from 'react'
import "./suggestions.css"

export default function Suggestion() {
    return (
        <div  style={{width: '60%', backgroundColor: '#F4F5F7', margin: 'auto', minHeight: '100vh'}}>
           
            <h1 class="heading">Suggestions</h1>
            <div class="select-category">
            <div className="selectcat">
            <h2> Select Category</h2>
            <select name="" id="catlist" className="categorylists">
                <option value="Email Template">Email Template
                </option>
                <option value="Landing Page">Landing Page
                </option>
                <option value="Social media"> Social media
                </option>
                <option value="Posters">Posters
                </option>
                <option value="Fliers">Fliers
                </option>
                <option value="Cards">Cards
                </option>
                <option value="Presentation">Presentation
                </option>
                <option value="Complains">Complains
                </option>
                <option value="Others">Others
                </option>
            </select>
            </div>

        <div className="mainsuggestion">
        <form >
        <textarea id="comment" name="comment" placeholder="Enter your suggestion"></textarea>
        <br/>
        <button type="button" class="btn sendtoall suggestionbtn">Send </button>
        </form>
        </div>
        </div>
        </div>
    )
}
