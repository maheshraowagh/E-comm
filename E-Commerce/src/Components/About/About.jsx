
import './about.css'


const About = () => {
  return (
    <div>
          <section className="mission">
            <h2>Our Mission</h2>
            <p>MaxShop is dedicated to providing our customers with the best shopping experience possible. We strive to offer high-quality products at competitive prices, ensuring our customers receive great value for their money.</p>
        </section>

        <section className="vision">
            <h2>Our Vision</h2>
            <p>We envision a future where online shopping is seamless and enjoyable for everyone. Our goal is to make MaxShop the go-to destination for all your shopping needs, offering a wide range of products and exceptional customer service.</p>
        </section>

        <section className="team">
            <h2>Meet Our Team</h2>
            <p>Our team consists of passionate individuals who are committed to making MaxShop the best eCommerce platform. From our customer service representatives to our logistics team, we work together to ensure every aspect of your shopping experience is top-notch.</p>
        </section>

        <section className="testimonials">
            <h2>What Our Customers Say</h2>
            <blockquote>
                "MaxShop has made my shopping experience so much easier. I love the variety of products and the fast delivery."
                <footer>- Happy Customer</footer>
            </blockquote>
            <blockquote>
                "I was impressed by the quality of the products and the excellent customer service. Highly recommend!"
                <footer>- Satisfied Shopper</footer>
            </blockquote>
        </section>
    </div>
  )
}

export default About