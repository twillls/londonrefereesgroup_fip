export default {
    name: "Partners",

    props: [""],

    data() {
        return {
            partners: [ 
                { "name": "Hockey Canada", "thumb": "../images/canada.jpg", "logo": "../images/canada.png",  "desc": "Description of Hockey Canada partnership.", "date": "19XX", "website": "https://www.hockeycanada.ca/en-ca/home"}, 
                { "name": "Alliance Hockey", "thumb": "../images/alliance.jpg", "logo": "../images/alliance.png",  "desc": "Description of Alliance Hockey partnership.", "date": "19XX", "website": "https://alliancehockey.com/"}, 
                { "name": "Ontario Hockey Federation", "thumb": "../images/ohf.jpg", "logo": "../images/ohf.png",  "desc": "Description of OHF partnership.", "date": "19XX", "website": "https://www.ohf.on.ca/"}, 
                { "name": "Ontario Minors Hockey Association", "thumb": "../images/omha.jpg", "logo": "../images/omha.png",  "desc": "Description of OMHA partnership.", "date": "19XX", "website": "https://www.omha.net/"}, 
                { "name": "Ontario Women's Hockey Association", "thumb": "../images/owha.jpg", "logo": "../images/owha.png",  "desc": "Description of OWHA partnership.", "date": "19XX", "website": "https://www.owha.on.ca/"}, 
                { "name": "Sportability CP Sports of BC", "thumb": "../images/sportability.jpg", "logo": "../images/sportability.png",  "desc": "Description of Sportability partnership.", "date": "19XX", "website": "https://sportabilitybc.ca/"}, 
            ],
            rowsnum: 2,
            selected: { "name": "Hockey Canada", "thumb": "../images/canada.jpg", "logo": "../images/canada.png",  "desc": "Description of Hockey Canada partnership.", "date": "19XX", "website": "https://www.hockeycanada.ca/en-ca/home"}
        };
    },

    /****** TO-DO *******/
    /* - adjust the template to use data (nested object) */
    /* - adjust css as needed */
    /* - add hover functions & css */
    /* - SEE NOTES @ Gallery.js -- this will be using the same process */
    


    template: 
    ` <div id="partners">
        <div class="left">
            <div class="partner-display">
                <div class="partner-logo-big"><img :src="this.selected.logo">
                </div>
                <div class="partner-info">
                    <div>
                        <h4 class="partner-name">{{this.selected.name}}</h4>
                        <p class="partner-desc">{{this.selected.desc}}</p>
                        <p class="partner-date"><b>Partner since:</b> {{this.selected.date}}</p>
                    </div>
                    <div class="visit-website">
                        <button @click="partnerSite" class="website-button">VISIT WEBSITE</button>
                    </div>
                </div>
            </div>
        </div>
            <div class="become">
                <h3 class="become-head">WANT TO BECOME A PARTNER?</h3>
                <p><b>Email us!</b></p>
                <p>example@email.com</p>
            </div>
        <div class="right">
            <div class="row" v-for="row in rows">
                <div @click="setPartner" v-for="partner in row" class="partner" :id="partner.name" v-bind:style="{ backgroundImage: 'url(' + partner.thumb + ')' }"></div>
                >
                </div>
            </div>
        </div>
    </div>
    `,

    computed: {
        rows() {
            let rows = []
            let mid = Math.ceil(this.partners.length / this.rowsnum);
            for (let i = 0; i < this.rowsnum; i++) { 
                rows.push(this.partners.slice(i * mid, i * mid + mid))
            }
            return rows;
        }
    },

    components: {

    },

    methods: {
        setPartner(partner) {
            partner = partner.target.id;
                let newpartner = null;
                for (var i=0; i < this.partners.length; i++) {
                    if (this.partners[i].name == partner) {
                        newpartner = this.partners[i];
                    }
                }
                console.log(newpartner);
                this.selected = newpartner;
        },

        partnerSite() {
            window.open(this.selected.website);
        }

    }

}