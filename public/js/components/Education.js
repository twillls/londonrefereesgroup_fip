export default {
    name: "Education",

    props: [""],

    data() {
        return {
        };
    },

    template: 
    `  <div id="edu">
        <div class="edu-container">
            <div class="left">
                <div class="intro">
                    <h2 class="edu-head">WHAT IS A REFEREE?</h2>
                    <h4 class="edu-desc">Description of the role of the referree, maybe
                    a brief summary of the history behind referees in hockey, etc.</h4>
                    <h4 class="edu-desc">Description of the role of the referree, maybe
                    a brief summary of the history behind referees in hockey, etc.</h4>
                </div>
                <div class="signals-container">
                    <div class="desc">
                        <p>The referee uses some special hand signals to communicate with players and coaches.</p>
                        <p>Do you recognize any of them?</p>
                        <p class="rules">Click on the arrows to see the different referee signals. Hover over the image to see what each signal means!</p>
                    </div>
                    <div class="signals">
                        <div class="box">
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <h3 class="edu-subhead">A REFEREE MUST BE...</h3>
                <div class="ref-container">
                    <div class="left">
                        <div class="ref-fact">
                            <h4>Patient</h4>
                            <p>A few words about why the referee should be patient.</p>
                        </div>
                        <div class="ref-fact">
                            <h4>Fair</h4>
                            <p>A few words about why the referee should be fair.</p>
                        </div>
                        <div class="ref-fact">
                            <h4>Respectful</h4>
                            <p>A few words about why the referee should be respectful.</p>
                        </div>
                    </div>
                    <div class="middle">
                        <div class="ref-pic"></div>
                    </div>
                    <div class="right">
                       <div class="ref-fact">
                            <h4>Responsible</h4>
                            <p>A few words about why the referee should be responsible.</p>
                        </div>
                        <div class="ref-fact">
                            <h4>Clear</h4>
                            <p>A few words about why the referee should be clear.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,

    computed: {
    },

    components: {

    },

    methods: {
    }

}