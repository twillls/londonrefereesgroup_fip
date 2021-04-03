export default {
    name: "Services",

    props: [""],

    data() {
        return {
        };
    },

    template: 
    ` <div id="services">
        <div class="services-container">
                <div class="service">
                    <i class="fas fa-address-card"></i>
                    <h2 class="service-name">MEMBERSHIP</h2>
                    <p class="service-desc">Description of service here. Insert a summary about how the service works, 
                    how to access it, etc.</p>
                   
                    <p class="learn">Learn more  <router-link to="/membership"><a class="service-link">here</a></router-link>.</p>
                    
                </div>
                <div class="service">
                    <i class="fas fa-user-graduate"></i>
                    <h2 class="service-name">TRAINING</h2>
                    <p class="service-desc">Description of service here. Insert a summary about how the service works, 
                    how to access it, etc.</p>
                    
                    <p class="learn">Learn more <router-link to="/education"><a class="service-link">here</a> </router-link>.</p>
                   

                </div>
                <div class="service">
                    <i class="fas fa-hockey-puck"></i>
                    <h2 class="service-name">BOOKING</h2>
                    <p class="service-desc">Description of service here. Insert a summary about how the service works, 
                    how to access it, etc.</p>
                   
                    <p class="learn">Learn more <router-link to="/booking"><a class="service-link"> here</a></router-link>.</p>
                    
                </div>
        </div>
    </div>
    `,

    methods: {
    }

}