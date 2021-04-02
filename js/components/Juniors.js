export default {
    name: "Juniors",

    props: [""],

    data() {
        return {
            levels: [
                {"title": "Level 1", "thumb": "../images/kids-team-edit.jpg", "desc": "This is a spot for a description of what is taught at Level 1, what is pre-requisite, background should be a picture taken of students at that level.", "skillA": "Level 1 Skill 1", "skillB": "Level 1 Skill 2", "skillC": "Level 1 Skill 3", "prereqA": "Level 1 Pre-requisite Skill 1", "prereqB": "Level 1 Pre-requisite Skill 2","prereqC": "Level 1 Pre-requisite Skill 3", },
                {"title": "Level 2", "thumb": "../images/kids-team-2-edit.jpg", "desc": "This is a spot for a description of what is taught at Level 2, what is pre-requisite, background should be a picture taken of students at that level.", "skillA": "Level 2 Skill 1", "skillB": "Level 2 Skill 2", "skillC": "Level 2 Skill 3", "prereqA": "Level 2 Pre-requisite Skill 1", "prereqB": "Level 2 Pre-requisite Skill 2","prereqC": "Level 2 Pre-requisite Skill 3", },
                {"title": "Level 3", "thumb": "../images/kids-team-3-edit.jpg", "desc": "This is a spot for a description of what is taught at Level 3, what is pre-requisite, background should be a picture taken of students at that level.", "skillA": "Level 3 Skill 1", "skillB": "Level 3 Skill 2", "skillC": "Level 3 Skill 3", "prereqA": "Level 3 Pre-requisite Skill 1", "prereqB": "Level 3 Pre-requisite Skill 2","prereqC": "Level 3 Pre-requisite Skill 3", },
                {"title": "Level 4", "thumb": "../images/kids-team-4-edit.jpg", "desc": "This is a spot for a description of what is taught at Level 4, what is pre-requisite, background should be a picture taken of students at that level.", "skillA": "Level 4 Skill 1", "skillB": "Level 4 Skill 2", "skillC": "Level 4 Skill 3", "prereqA": "Level 4 Pre-requisite Skill 1", "prereqB": "Level 4 Pre-requisite Skill 2","prereqC": "Level 4 Pre-requisite Skill 3", },
            ],
            newlevel: {"title": "Level 1", "thumb": "../images/kids-team-edit.jpg", "desc": "This is a spot for a description of what is taught at Level 1, what is pre-requisite, background should be a picture taken of students at that level.", "skillA": "Level 1 Skill 1", "skillB": "Level 1 Skill 2", "skillC": "Level 1 Skill 3", "prereqA": "Level 1 Pre-requisite Skill 1", "prereqB": "Level 1 Pre-requisite Skill 2","prereqC": "Level 1 Pre-requisite Skill 3", },
        };
    },

    /***** TO-DO *****/
    /* create nested object with level data to use in template */
    /* adjust template to use v-for list for each level, update contents with dynamic data */
    /* add hover & click functions to circle icon navigation to update current level */
    /* find link for application and add it to href under "apply for the 2021 fall program" */
    
    template: 
    `  <div id="juniors">
        <div class="jr-container">
            <div class="left">
                <h2 class="jr-head">THE JR. OFFICIALS DEVELOPMENT PROGRAM</h2>
                <div class="info-container">
                    <div class="info">
                        <div class="about">
                            <h4>About the program</h4>
                            <p>Lorem ipsum dolor sit
                            amet, consectetur adipiscing
                            elit. Phasellus eu
                            nibh eget erat accumsan
                            suscipit. Quisque ac condimentum
                            ante, a porttitor
                            nunc. Lorem ipsum dolor sit
                            amet, consectetur adipiscing
                            elit.</p>
                        </div>
                        <div class="apply">
                            <h4>Apply for the 2021 Fall Program</h4>
                            <p>Download, print out and fill out our application
                            <a href="/">HERE</a>.
                            <p class="q">Questions?<br>
                            Call or email us!</p>
                        </div>
                    </div>
                    <div class="dates">
                        <h4>IMPORTANT DATES</h4>
                        <div class="dates-container">
                            <div class="events">
                                <p>DD/MM/YYYY: Event Title.</p>
                                <p>DD/MM/YYYY: Event Title.</p>
                                <p>DD/MM/YYYY: Event Title.</p>
                                <p>DD/MM/YYYY: Event Title.</p>
                                <p>DD/MM/YYYY: Event Title.</p>
                                <p>DD/MM/YYYY: Event Title.</p>
                                <p>DD/MM/YYYY: Event Title.</p>
                                <p>DD/MM/YYYY: Event Title.</p>
                                <p>DD/MM/YYYY: Event Title.</p>
                                <p>DD/MM/YYYY: Event Title.</p>
                                <p>DD/MM/YYYY: Event Title.</p>
                                <p>DD/MM/YYYY: Event Title.</p>
                                <p>DD/MM/YYYY: Event Title.</p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-calendar-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="level-container" v-bind:style="{ backgroundImage: 'url(' + currentlevel.thumb + ')' }">
                    <h3>{{currentlevel.title}}</h3>
                    <div class="level-info">
                        <p>{{currentlevel.desc}}</p>
                        <p>What participants will know at
                        the end of this level:
                            <ul>
                                <li>{{currentlevel.skillA}}</li>
                                <li>{{currentlevel.skillB}}</li>
                                <li>{{currentlevel.skillC}}</li>
                            </ul>
                        </p>
                        <p>Pre-requisite skills/certifications
                        needed:
                            <ul>
                                <li>{{currentlevel.prereqA}}</li>
                                <li>{{currentlevel.prereqB}}</li>
                                <li>{{currentlevel.prereqC}}</li>
                            </ul>
                        </p>
                    </div>
                    <div class="level-select">
                        <div @click="changeLevel" style="color:#bd2025" id="lvl1" class="select">⬤</div>
                        <div @click="changeLevel"  id="lvl2" class="select">⬤</div>
                        <div  @click="changeLevel" id="lvl3" class="select">⬤</div>
                        <div @click="changeLevel"  id="lvl4" class="select">⬤</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,

    computed: {
        currentlevel() {
            return this.newlevel;
        }
    },

    components: {

    },

    methods: {
        changeLevel(e) {
            debugger;
            let lvlid = e.target.id;
            if (lvlid == "lvl1") {
                this.newlevel = this.levels[0];
            } else if (lvlid == "lvl2") {
                this.newlevel = this.levels[1];
            } else if (lvlid == "lvl3") {
                this.newlevel = this.levels[2];
            } else if (lvlid == "lvl4") {
                this.newlevel = this.levels[3];
            }
            let buttons = document.querySelectorAll(".select");
           for (var i = 0; i < buttons.length; i++) {
               buttons[i].style.color = "#eaeff0";
           }
            e.target.style.color = "#bd2025";
        }
    }

}