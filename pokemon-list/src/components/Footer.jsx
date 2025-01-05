import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Pokemon</h3>
          <p>I'm Array (hrsdfordev) Developer</p>
          <p>Now I'm studying in Songkhla University major Comsci</p>
        </div>
        <div className="footer-section">
          <h3>Speck with me</h3>
          <p>📞 Telephone: 0955057316</p>
          <h3>Contacts with me</h3>
          <p>📘 Facebook: Haris Sadeen</p>
          <p>📱 Line: wiolj</p>
          <p>💻 Github: cs634234024, hrsdfordev</p>
        </div>
        <div className="footer-section">
          <h3>Projects</h3>
          <div className="projects">
            <p><strong>Final Projects:</strong> A Mobile Application for Binary Image Classification of Skin Moles</p>
            <p><strong>Other Projects:</strong> PokemonList Website (React), Application Calculator Water (Dart, Flutter)</p>
          </div>

        </div>
      </div>
      <div className="footer-bottom">
        Developer By Array (hrsdfordev)
        <button className="footer-button">hrsdfordev</button>        
      </div>
    </footer>
  );
};

export default Footer;
