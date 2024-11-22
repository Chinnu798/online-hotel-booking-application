import { Link } from "react-router-dom";
import "./Footer.css"
const Footer = () => {
  return (
   <>
<footer class="footer">
  <div class="container ">
    <div class="row">
      <div class="col-md-4">
        <h5>About Us</h5>
        <p className="about">Welcome to OHBS, a dynamic and expanding hospitality brand shaping India's travel landscape. With a robust portfolio encompassing over 100+ properties nationwide and Neighbor Country.</p>
        
      </div>
      <div class="col-md-4 text-center">
        <h5>Social Links</h5>
        <ul class="social-links">
          <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>Facebook</li>
          <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a>Instagram</li>
          <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a>Twitter</li>
        </ul>
      </div>
      <div class="col-md-4">
        <h5>Contact Us</h5>
        <p><i class="fas fa-map-marker-alt"></i> 123 Main St, Anytown, USA</p>
        <p><i class="fas fa-phone"></i> (123) 456-7890</p>
        <p><i class="fas fa-envelope"></i> <a href="mailto:info@example.com">info@example.com</a></p>
      </div>
      
    </div>
  </div>
  
</footer>
   </>
  );
};

export default Footer;
