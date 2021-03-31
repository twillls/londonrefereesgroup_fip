export default {
    name: "Booking",

    props: [""],

    data() {
        return {
        };
    },

    template: 
    `  <div id="booking">
        <div class="booking-container">
            <div class="booking-top">
                <div class="booking-text">
                    <h1 class="booking-head">NEED AN OFFICIAL FOR YOUR GAME?</h1>
                    <h3 class="booking-subhead">We can help.</h3>
                    <button @click="scrollDown" class="go">GO</button>
                </div>
            </div>

            <div class="steps-container">
                <h2 class="intro-subhead">SUBHEADING HERE.</h2>
                <p>Paragraph description/overview of what referees are available, how to
                book one, rules, etc. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Phasellus eu nibh eget erat accumsan suscipit. Quisque ac condimentum
                ante, a porttitor nunc.</p>

                <div class="step">
                    <div class="step-intro">
                        <h3 class="step-head">STEP 1: Choose your type of game.</h3>
                        <p>If you don’t see yours here, please specify it in the “comments” section
                        of the form below.</p>
                    </div>

                    <div class="options-container">
                        <div class="option">
                            <h4 class="options-head">MINOR HOCKEY</h4>
                            <p>Space for details about
                            this league specification.
                            Could be about 1 paragraph.</p>
                            <p class="list">Could also include a list:</p>
                            <ul>
                                <li>- Example 1</li>
                                <li>- Example 2</li>
                                <li>- Example 3</li>
                            </ul>
                        </div>
                        <div class="option">
                            <h4 class="options-head">SLEDGE HOCKEY</h4>
                            <p>Space for details about
                            this league specification.
                            Could be about 1 paragraph.</p>
                            <p class="list">Could also include a list:</p>
                            <ul>
                                <li>- Example 1</li>
                                <li>- Example 2</li>
                                <li>- Example 3</li>
                            </ul>
                        </div>
                        <div class="option">
                            <h4 class="options-head">RECREATIONAL HOCKEY/ADULT LEAGUES</h4>
                            <p>Space for details about
                            this league specification.
                            Could be about 1 paragraph.</p>
                            <p class="list">Could also include a list:</p>
                            <ul>
                                <li>- Example 1</li>
                                <li>- Example 2</li>
                                <li>- Example 3</li>
                            </ul>
                        </div>
                        <div class="option">
                            <h4 class="options-head">CITY OF LONDON REGULAR SEASON</h4>
                            <p>Space for details about
                            this league specification.
                            Could be about 1 paragraph.</p>
                            <p class="list">Could also include a list:</p>
                            <ul>
                                <li>- Example 1</li>
                                <li>- Example 2</li>
                                <li>- Example 3</li>
                            </ul>
                        </div>
                        <div class="option">
                            <h4 class="options-head">TOURNAMENTS</h4>
                            <p>Space for details about
                            this league specification.
                            Could be about 1 paragraph.</p>
                            <p class="list">Could also include a list:</p>
                            <ul>
                                <li>- Example 1</li>
                                <li>- Example 2</li>
                                <li>- Example 3</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="step">
                    <div class="step-intro">
                        <h3 class="step-head">STEP 2: Choose your season.</h3>
                        <p>If you’re only booking for one game, skip this section.</p>
                    </div>

                    <div class="options-container">
                        <div class="option">
                            <h4 class="options-head">SPRING</h4>
                            <p>Space for details about
                            this season and what is
                            provided. Could be about 1
                            paragraph.</p>
                            <p class="season-text">
                                <b>SEASON START:</b> DD/MM/YYYY <br>
                                <b>SEASON END:</b> DD/MM/YYYY 
                            </p>
                        </div>
                        <div class="option">
                            <h4 class="options-head">SUMMER</h4>
                            <p>Space for details about
                            this season and what is
                            provided. Could be about 1
                            paragraph.</p>
                            <p class="season-text">
                                <b>SEASON START:</b> DD/MM/YYYY <br>
                                <b>SEASON END:</b> DD/MM/YYYY 
                            </p>
                        </div>
                        <div class="option">
                            <h4 class="options-head">WINTER</h4>
                            <p>Space for details about
                            this season and what is
                            provided. Could be about 1
                            paragraph.</p>
                            <p class="season-text">
                                <b>SEASON START:</b> DD/MM/YYYY <br>
                                <b>SEASON END:</b> DD/MM/YYYY 
                            </p>
                        </div>
                    </div>
                </div>

                <div class="step" id="book">
                    <div class="step-intro">
                        <h3 class="step-head">STEP 3: Fill out our booking form.</h3>
                        <p>Line here with details/instructions.</p>
                    </div>

                    <div class="booking-form-container">
                        <form class="booking-form">
                            <div class="row">
                                <input type="text" placeholder="First and Last Name"></input>
                                <input type="email" placeholder="Email Address"></input>
                            </div>
                            <div class="row">
                                <input class="long" type="text" placeholder="Do you need a ref for a single game, or a seaosn? (Multiple Choice)"></input>
                            </div>
                            <div class="row">
                                <h5 class="label">Single game: (leave blank if not applicable.)</h5>
                            </div>
                            <div class="row">
                                <input type="text" placeholder="League/Association Name"></input>
                                <input type="text" placeholder="Arena Name"></input>
                            </div>
                            <div class="row">
                                <input type="short" placeholder="Date of Game"></input>
                                <input type="short" placeholder="Game Start Time"></input>
                                <input type="short" placeholder="Game End Time"></input>
                            </div>
                            <div class="row">
                                <h5 class="label">Full season: (leave blank if not applicable.)</h5>
                            </div>
                            <div class="row">
                                <input type="text" placeholder="League/Association Name"></input>
                                <input type="text" placeholder="Season/Year (ig. Winter '21)"></input>
                            </div>
                            <div class="row">
                                <h5 class="label">Comments & extra information:</h5>
                            </div>
                            <div class="row">
                                <textarea class="message" placeholder="Use this section to tell us about any other specifications you’d like to include, if you’d like to book for multiple dates but not a whole season, etc..."></textarea>
                            </div>
                            <div class="row">
                                <input type="submit" value="SUBMIT"></input>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="step">
                    <div class="step-intro">
                        <h3 class="step-head">STEP 4: Watch out for us in your inbox!</h3>
                        <p>We’ll be in touch once we’ve found the perfect match for your required
                        dates. We’ll send you an email, and just to be sure that you’re happy with
                        our choice, we’ll give you a phone call as well.</p>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    </div>
    `,

    methods: {

        scrollDown() {
            let form = document.querySelector("#book");
           form.scrollIntoView({behavior:"smooth"});
        }
    }

}

