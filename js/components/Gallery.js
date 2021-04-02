export default {
    name: "Gallery",

    props: [""],

    data() {
        return {
        };
    },

    /****** TO-DO: change the template to use dynamic gallery data instead of placeholder image ******/
    /* STEP 1: retrieve data source for gallery entry containing image urls, titles, descriptions, photographer names, date taken */
    /* STEP 2: adjust template to display gallery entries as a v-for dynamic rendered list */
    /* STEP 3: add code to convert the gallery into separate arrays with each row containing 2 entries. 
        - if stuck, adapt solution from this example:
            https://stackoverflow.com/questions/53075877/v-if-inside-v-for-display-list-of-items-in-two-columns
    */
    /* STEP 4 - EITHER: 
       - put an <img> in the "entry" div and set the src to dynamic image url from data source
       OR
       - dynamically set the background-image css property of "entry" to dynamic image url from data source */
    /* STEP 5: change "this.$emit" line in "expandImage()" to make it pass a variable instead of static placeholder image url
       - said variable should be set to the image url from the "entry" div that was clicked */
    /* STEP 6: hover functions probably need to be adjusted too - see "Education.js" for example code that can be copied/adapted*/
    
    /****** KNOWN BUGS  ******/
    /* on mouseleave the last image's opacity gets set to 0 instead of the info box - something to do with event targeting */

    template: 
    ` <div id="members">
        <div class="left">
            <div class="login-container">
                <h2 class="login-head">MEMBERS LOGIN</h2>
                <form class="login-form">
                    <input type="email" placeholder="Email Address"></input>
                    <input type="password" placeholder="Password"></input>
                    <input type="submit" value="SIGN IN"></input>
                </form>
                <div class="bottom-text">
                    <p>Want to become a member?</p>
                    <p>Apply <a href="/" class="apply-link">HERE</a>.</p>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="members-text">
                <div class="gallery-top">
                    <h2 class="members-head">GALLERY</h2>
                </div>
                <div class="gallery-bottom">
                    <div class="row">
                        <div @mouseover="showDesc" class="entry">
                            <div class="entry-info"  @mouseleave="hideDesc">
                                <div class="full-icon"><i @click="expandImage" class="fas fa-expand-arrows-alt"></i></div>
                                <h4 class="entry-title">Event/Photo Title</h4>
                                <p>Caption for the image appears on hover.
                                Expand button in top right can be
                                clicked to view the photo in full within a
                                lightbox.</p>
                                <h5 class="photographer">© Photographer Name</h5>
                                <h5 class="date">DD/MM/YYYY</h5>
                            </div>
                        </div>
                        <div @mouseover="showDesc" class="entry">
                        <div class="entry-info"   @mouseleave="hideDesc">
                            <div class="full-icon"><i @click="expandImage" class="fas fa-expand-arrows-alt"></i></div>
                            <h4 class="entry-title">Event/Photo Title</h4>
                            <p>Caption for the image appears on hover.
                            Expand button in top right can be
                            clicked to view the photo in full within a
                            lightbox.</p>
                            <h5 class="photographer">© Photographer Name</h5>
                            <h5 class="date">DD/MM/YYYY</h5>
                        </div>
                    </div>
                    </div>
                     <div class="row">
                          <div @mouseover="showDesc" class="entry">
                            <div class="entry-info"  @mouseleave="hideDesc">
                                <div class="full-icon"><i @click="expandImage" class="fas fa-expand-arrows-alt"></i></div>
                                <h4 class="entry-title">Event/Photo Title</h4>
                                <p>Caption for the image appears on hover.
                                Expand button in top right can be
                                clicked to view the photo in full within a
                                lightbox.</p>
                                <h5 class="photographer">© Photographer Name</h5>
                                <h5 class="date">DD/MM/YYYY</h5>
                            </div>
                        </div>
                        <div @mouseover="showDesc" class="entry">
                        <div class="entry-info" @mouseleave="hideDesc">
                            <div class="full-icon"><i @click="expandImage" class="fas fa-expand-arrows-alt"></i></div>
                            <h4 class="entry-title">Event/Photo Title</h4>
                            <p>Caption for the image appears on hover.
                            Expand button in top right can be
                            clicked to view the photo in full within a
                            lightbox.</p>
                            <h5 class="photographer">© Photographer Name</h5>
                            <h5 class="date">DD/MM/YYYY</h5>
                        </div>
                    </div>
                    </div>
                     <div class="row">
                         <div @mouseover="showDesc"  class="entry">
                            <div class="entry-info"@mouseleave="hideDesc">
                                <div class="full-icon"><i @click="expandImage" class="fas fa-expand-arrows-alt"></i></div>
                                <h4 class="entry-title">Event/Photo Title</h4>
                                <p>Caption for the image appears on hover.
                                Expand button in top right can be
                                clicked to view the photo in full within a
                                lightbox.</p>
                                <h5 class="photographer">© Photographer Name</h5>
                                <h5 class="date">DD/MM/YYYY</h5>
                            </div>
                        </div>
                        <div @mouseover="showDesc" @mouseleave="hideDesc" class="entry">
                        <div class="entry-info">
                            <div class="full-icon"><i @click="expandImage" class="fas fa-expand-arrows-alt"></i></div>
                            <h4 class="entry-title">Event/Photo Title</h4>
                            <p>Caption for the image appears on hover.
                            Expand button in top right can be
                            clicked to view the photo in full within a
                            lightbox.</p>
                            <h5 class="photographer">© Photographer Name</h5>
                            <h5 class="date">DD/MM/YYYY</h5>
                        </div>
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
        showDesc(e) {
            let entry = e.target;
            entry.style.opacity = 1;
        },

        hideDesc(e) {
            let entry = e.target;
            entry.style.opacity = 0;
        },

        expandImage() {
            document.querySelector(".lightbox").style.opacity = 0;
            document.querySelector(".lightbox").style.display = "block";
            setTimeout(function(){ 
                document.querySelector(".lightbox").style.opacity = 1;
             }, 100);
             /* change "refs" to a variable that is set to dynamic image url of the element clicked */
             this.$emit("lbcontents", "refs");
        }
    }

}