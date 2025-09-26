import './Me.css'
import Myimg from './assets/IMG_1110.PNG'

export default function Me(){

    return(
    
    <div className="hero-section">

      <div className="hero-text">
        <p className="greeting">Hello!</p>
        <h1>I'm Dinesh Boddapati.</h1>
        <h2 className="job-title">Software Developer</h2>
      </div>

      <div className="hero-image-container">
        <img src={Myimg} alt="Dinesh Boddapati" className="profile-image" />
      </div>

    </div>
    );
}