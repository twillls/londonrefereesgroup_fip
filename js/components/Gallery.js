export default {
    title: "Gallery",

    props: [""],

    data() {
        return {
            gallery: [ 
                { "title": "Event/Photo Example 1", "thumb": "../images/gallery1-edit.jpg", "desc": "Caption for the image appears on hover. Expand button in top right can be clicked to view the photo in full within a lightbox.", "date": "DD/MM/YYYY", "credit": "© Photographer title"}, 
                { "title": "Event/Photo Example 2", "thumb": "../images/gallery2-edit.jpg", "desc": "Caption for the image appears on hover. Expand button in top right can be clicked to view the photo in full within a lightbox.", "date": "DD/MM/YYYY", "credit": "© Photographer title"}, 
                { "title": "Event/Photo Example 3", "thumb": "../images/gallery3-edit.jpg", "desc": "Caption for the image appears on hover. Expand button in top right can be clicked to view the photo in full within a lightbox.", "date": "DD/MM/YYYY", "credit": "© Photographer title"}, 
                { "title": "Event/Photo Example 4", "thumb": "../images/gallery4-edit.jpg", "desc": "Caption for the image appears on hover. Expand button in top right can be clicked to view the photo in full within a lightbox.", "date": "DD/MM/YYYY", "credit": "© Photographer title"}, 
                { "title": "Event/Photo Example 5", "thumb": "../images/gallery5-edit.jpg", "desc": "Caption for the image appears on hover. Expand button in top right can be clicked to view the photo in full within a lightbox.", "date": "DD/MM/YYYY", "credit": "© Photographer title"}, 
                { "title": "Event/Photo Example 6", "thumb": "../images/gallery6-edit.jpg", "desc": "Caption for the image appears on hover. Expand button in top right can be clicked to view the photo in full within a lightbox.", "date": "DD/MM/YYYY", "credit": "© Photographer title"}, 
            ],
            rowsnum: 3
        };
    },

    /****** TO-DO ******/
    /* fix code that calls lightbox */

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
                    <div class="row" v-for="row in rows">
                    <div @mouseover="showDesc" class="entry" v-for="entry in row" v-bind:style="{ backgroundImage: 'url(' + entry.thumb + ')' }">
                            <div class="entry-info"  @mouseleave="hideDesc">
                                <div class="full-icon"><i @click="expandImage(entry.thumb)" class="fas fa-expand-arrows-alt"></i></div>
                                <h4 class="entry-title">{{entry.title}}</h4>
                                <p>{{entry.desc}}</p>
                                <h5 class="photographer">{{entry.credit}}</h5>
                                <h5 class="date">{{entry.date}}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </div>
    `,

    computed: {
        rows() {
            let rows = []
            let mid = Math.ceil(this.gallery.length / this.rowsnum);
            for (let i = 0; i < this.rowsnum; i++) { 
                rows.push(this.gallery.slice(i * mid, i * mid + mid))
            }
            return rows;
        }
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

        expandImage(thumb) {
            debugger;
            document.querySelector(".lightbox").style.opacity = 0;
            document.querySelector(".lightbox").style.display = "block";
            setTimeout(function(){ 
                document.querySelector(".lightbox").style.opacity = 1;
             }, 100);
             /* change "refs" to a variable that is set to dynamic image url of the element clicked */
             this.$emit("lbcontents", thumb);
        }
    }

}