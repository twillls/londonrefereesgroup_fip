import SignalBox from "./SignalBox.js";

export default {
    name: "Education",

    props: "",

    data() {
        return {
            signals: { 
                        1: { "name": "Boarding", "url": "boarding", "desc": "Striking the clenched fist of one hand into the open palm of the opposite hand in front of the chest."}, 
                        2: { "name": "Bodychecking", "url": "bodychecking", "desc": "Open palm of the non-whistle hand, with fingers together, comes across body on to the opposite shoulder."}, 
                        3: { "name": "Butt-ending", "url": "butt-ending", "desc": "A cross motion of the forearms, one moving under the other arm."}, 
                        4: { "name": "Charging", "url": "charging", "desc": "Rotating clenched fists around one another in front of the chest."},
                        5: { "name": "Checking from Behind", "url": "checking-from-behind", "desc": "A forward motion of both arms, with the palms of the hands open and facing away from the body, fully extended from the chest at shoulder level."}, 
                        6: { "name": "Cross-checking", "url": "cross-checking", "desc": "A forward and backward motion of the arms with both fists clenched, extending from the chest for a distance of about one foot."},
                        7: { "name": "Delayed Calling Penalty", "url": "delayed-calling-penalty", "desc": "Extending the non-whistle arm fully above the head."}, 
                        8: { "name": "Delayed Off-side", "url": "delayed-off-side", "desc": "Non-whistle arm fully extended above the head. To nullify a delayed off-side the Linesperson shall drop the arm to the side."}, 
                        9: { "name": "Goal Scored", "url": "goal-scored", "desc": "A single point directed at the goal in which the puck legally entered."},
                        10: { "name": "Head Contact", "url": "head-contact", "desc": "Patting flat (open palm) of the non-whistle hand on this side of the head."}, 
                        11: { "name": "High-sticking", "url": "high-sticking", "desc": "Holding both fists clenched, one immediately above the other at the height of the forehead."}, 
                        12: { "name": "Icing the Puck", "url": "icing-the-puck", "desc": "The back Referee or Linesperson signals a possible icing by fully extending either arm over their head. The arm should remain raised until the front Referee or Linesperson, either blows the whistle to indicate an icing or until the icing is washed out. Once the icing has been completed, the back Referee or Linesperson will then point to the appropriate face-off spot and skate to it."},
                        13: { "name": "Holding the Stick", "url": "holding-the-stick", "desc": "Two stage signal involving the holding signal (shown above) followed by a signal indicating you are holding onto a stick with two hands in a normal manner."}, 
                        14: { "name": "Hooking", "url": "hooking", "desc": "A tugging motion with both arms as if pulling something from in front toward the stomach."}, 
                        15: { "name": "Interference", "url": "interference", "desc": "Crossing arms stationary in front of the chest."},
                        16: { "name": "Kneeing", "url": "kneeing", "desc": "Slapping either knee with the palm of the hand, while keeping both skates on the ice."}, 
                        17: { "name": "Match Penalty", "url": "match-penalty", "desc": "Patting flat of the hand on the top of the head."}, 
                        18: { "name": "Misconduct", "url": "misconduct", "desc": "Both hands on hips."},
                        19: { "name": "Roughing", "url": "roughing", "desc": "Fist clenched and arm extended out to the front or side of the body."}, 
                        20: { "name": "Slashing", "url": "slashing", "desc": "A chopping motion with the edge of one hand across the opposite forearm."}, 
                        21: { "name": "Spearing", "url": "spearing", "desc": "Jabbing motion with both hands thrust out immediately in front of the body and then hands dropped to the side of the body."},
                        22: { "name": "Too Many Players", "url": "too-many-players", "desc": "Indication with six fingers (one hand open) in front of the chest."}, 
                        23: { "name": "Tripping", "url": "tripping", "desc": "Striking leg with either hand below the knee, keeping both skates on the ice."}, 
                        24: { "name": "Unsportsmanlike Conduct/Diving", "url": "unsportsmanlike", "desc": "Using both hands to form a “T” in front of the chest."},
                        25: { "name": "Wash Out", "url": "wash-out", "desc": "A sweeping sideways motion of both arms across the front of the body at shoulder level with palms down. This signal is used: (a) by the Referee to signal “no goal”; (b) by the Linesperson to signal “no icing” and in certain situations “no off-side”."}, 
                        26: { "name": "Holding", "url": "holding", "desc": "Clasping either wrist with the other hand in front of the chest."} 
                    },
            currentKey: 1,
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
                        <div class="desc-text">
                            <p>The referee uses some special hand signals to communicate with players and coaches.</p>
                            <p>Do you recognize any of them?</p>
                            <p class="rules">To see the different referee signals, click one of the signal names to the right of the image. Hover over the image to see what each signal means!</p>
                        </div>
                    </div>
                    <div class="box">
                    <signal @lbcontents="lightboxContents" :info="currentSignal"></signal>
                        <div class="signal-nav-container">
                            <div class="signal-nav" v-for="signal in this.signals" :name="signal.url">
                                <div @click="selectSignal" class="signal-tab" :name="signal.url">{{signal.name}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <h3 class="edu-subhead">A REFEREE MUST BE...</h3>
                <div class="ref-container">
                    <div class="ref-left">
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
                    <div class="ref-middle">
                        <div class="ref-pic"></div>
                    </div>
                    <div class="ref-right">
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

    mounted: function() {
        this.setSignal();
    },

    computed: {
        currentSignal: function() {
            return this.signals[this.currentKey];
        },
    },

    components: {
        "signal": SignalBox
    },

    props: {
    },

    methods: {
        setSignal() {
            this.currentKey = 1;
        },

        selectSignal(e) {
            let name = e.target.getAttribute("name");
            let signalArr = Object.entries(this.signals);
            var index;
            for(var i = 0; i < signalArr.length; i++) {
                if(signalArr[i][1].url == name) {
                    index = signalArr[i][0];
                } 
            }

            this.currentKey = index;
        },

        getIndex(name) {
            debugger;
        },

        lightboxContents(url) {
            this.$emit("lbcontents", url);
        }
    }
}