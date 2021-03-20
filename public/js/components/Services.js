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
=                <div class="service">
                    <i class="fas fa-address-card"></i>
                    <h2 class="service-name">MEMBERSHIP</h2>
                    <p class="service-desc">Description of service here. Insert a summary about how the service works, 
                    how to access it, etc.</p>
                    <p class="learn">Learn more <a class="service-link" href="/">here</a>.</p>
                </div>
                <div class="service">
                    <i class="fas fa-user-graduate"></i>
                    <h2 class="service-name">TRAINING</h2>
                    <p class="service-desc">Description of service here. Insert a summary about how the service works, 
                    how to access it, etc.</p>
                    <p class="learn">Learn more <a class="service-link" href="/">here</a>.</p>
                </div>
                <div class="service">
                    <i class="fas fa-hockey-puck"></i>
                    <h2 class="service-name">BOOKING</h2>
                    <p class="service-desc">Description of service here. Insert a summary about how the service works, 
                    how to access it, etc.</p>
                    <p class="learn">Learn more <a class="service-link" href="/">here</a>.</p>
                </div>
        </div>
    </div>
    `,

    methods: {
    }

}