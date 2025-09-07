import css from './footer.module.css';
import { Link } from 'react-router-dom';
import insta from './images/insta.svg';
import facebook from './images/facebook.svg';
import linkedin from './images/linkedin.svg';

const Footer = () => {
  return (
    <footer className={css['footer-premium']}>
      <div className={css['footer-main-content']}>
        <div className={css['footer-grid']}>
          {/* Brand Section */}
          <div className={css['inner-data']}>
          <div className={css['footer-brand']}>
            <img
              src="/images/logo/spardhalogo.png"
              className={css['brand-logo']}
              alt="Spardha IIT BHU Logo"
            />
            <p className={css['brand-description']}>
              <span className={css['brand-highlight']}>Spardha</span> is the
              annual sports festival of IIT (BHU) Varanasi, celebrating athletic
              excellence, competitive spirit, and the pursuit of sporting glory.
              Join us in this magnificent celebration of sportsmanship.
            </p>

            <div className={css['contact-cards']}>
              <div className={css['contact-card']}>
                <h4 style={{ color: '#ddd1d1' }}>General Inquiries</h4>
                <a href="mailto:spardha@itbhu.ac.in">spardha@itbhu.ac.in</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={css['footer-section']}>
            <div className={css['navigate']}>
            <h3>Navigate</h3>
            <ul className={css['nav-links']}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about#about">About Spardha</Link>
              </li>
              <li>
                <Link to="/matches">Live Matches</Link>
              </li>
              <li>
                <Link to="/events#events">Sports Events</Link>
              </li>
              <li>
                <Link to="/teams">Teams</Link>
              </li>
              <li>
                <Link to="/sponsors#sponsors">Our Sponsors</Link>
              </li>
              <li>
                <Link to="/contactus#contactus">Contact Us</Link>
              </li>
            </ul>
            </div>
          </div>

          {/* Contact Team */}
          <div className={css['footer-section']}>
            <h3>Contact Team</h3>
            <div className={css['contact-team']}>
              <div className={css['team-member']}>
                <div style={{ color: '#ddd1d1' }} className={css['team-role']}>
                  Event Convener
                </div>
                <div style={{ color: '#ddd1d1' }} className={css['team-name']}>
                  Devang Darpe
                </div>
                <a
                  href="mailto:convener.spardha@itbhu.ac.in"
                  style={{
                    color: '#64ffda',
                    fontSize: '0.8rem',
                    fontWeight: '400',
                    textDecoration: 'none',
                    padding: '5px 10px',
                    border: '1px solid #64ffda',
                    borderRadius: '8px',
                    background: 'rgba(10,25,47,0.6)',
                    boxShadow: '0 0 10px rgba(100,255,218,0.5)',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#fff';
                    e.target.style.background = 'rgba(100,255,218,0.1)';
                    e.target.style.boxShadow = '0 0 15px rgba(100,255,218,0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#64ffda';
                    e.target.style.background = 'rgba(10,25,47,0.6)';
                    e.target.style.boxShadow = '0 0 10px rgba(100,255,218,0.5)';
                  }}
                >
                  convener.spardha@itbhu.ac.in
                </a>
              </div>

              <div className={css['team-member']}>
                <div style={{ color: '#ddd1d1' }} className={css['team-name']}>
                  Collaboration Team
                </div>
                <a
                  href="mailto:marketing.spardha@itbhu.ac.in"
                  style={{
                    color: '#64ffda',
                    fontSize: '0.8rem',
                    fontWeight: '400',
                    textDecoration: 'none',
                    padding: '5px 10px',
                    border: '1px solid #64ffda',
                    borderRadius: '8px',
                    background: 'rgba(10,25,47,0.6)',
                    boxShadow: '0 0 10px rgba(100,255,218,0.5)',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#fff';
                    e.target.style.background = 'rgba(100,255,218,0.1)';
                    e.target.style.boxShadow = '0 0 15px rgba(100,255,218,0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#64ffda';
                    e.target.style.background = 'rgba(10,25,47,0.6)';
                    e.target.style.boxShadow = '0 0 10px rgba(100,255,218,0.5)';
                  }}
                >
                  marketing.spardha@itbhu.ac.in
                </a>
              </div>

              <div className={css['team-member']}>
                <div style={{ color: '#ddd1d1' }} className={css['team-role']}>
                  Media Relations
                </div>
                <a
                  href="mailto: media.spardha@itbhu.ac.in"
                  style={{
                    color: '#64ffda',
                    fontSize: '0.8rem',
                    fontWeight: '400',
                    textDecoration: 'none',
                    padding: '5px 10px',
                    border: '1px solid #64ffda',
                    borderRadius: '8px',
                    background: 'rgba(10,25,47,0.6)',
                    boxShadow: '0 0 10px rgba(100,255,218,0.5)',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#fff';
                    e.target.style.background = 'rgba(100,255,218,0.1)';
                    e.target.style.boxShadow = '0 0 15px rgba(100,255,218,0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#64ffda';
                    e.target.style.background = 'rgba(10,25,47,0.6)';
                    e.target.style.boxShadow = '0 0 10px rgba(100,255,218,0.5)';
                  }}
                >
                  media.spardha@itbhu.ac.in
                </a>
              </div>
            </div>
          </div>
          </div>

          {/* Social Links & Newsletter */}
          <div className={css['footer-section']}>
            <h3>Connect</h3>
            <div
              style={{ display: 'flex', gap: '15px' }}
              className={css['social-grid']}
            >
              <a
                href="https://www.instagram.com/spardha_iitbhu"
                target="_blank"
                rel="noopener noreferrer"
                className={css['social-link']}
                aria-label="Instagram"
              >
                <img src={insta} alt="Instagram" />
              </a>

              <a
                href="https://www.facebook.com/Spardha.IIT.BHU"
                target="_blank"
                rel="noopener noreferrer"
                className={css['social-link']}
                aria-label="Facebook"
              >
                <img src={facebook} alt="Facebook" />
              </a>

              <a
                href="https://www.linkedin.com/company/spardha"
                target="_blank"
                rel="noopener noreferrer"
                className={css['social-link']}
                aria-label="LinkedIn"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={css['footer-bottom']}>
          <div className={css['footer-bottom-content']}>
            <div className={css['copyright']}>
              © 2025 Spardha, IIT BHU. All Rights Reserved. | Awaken the Arena -
              Where Champions Rise
            </div>
            <div className={css['footer-links']}>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
