import './App.css';
function App() {
  return (
  <div>  
    <div class="top-container">
      <img id="top-cloud" src={`${process.env.PUBLIC_URL}/cloud.png`} alt="cloud img"/>
      <h1>I'm Prashant</h1>
      <h2 class="about">an <span class="auto">auto</span>mation <span class="auto">prog</span>rammer.</h2>
      <img id="bottom-cloud" src={`${process.env.PUBLIC_URL}/cloud.png`} alt="cloud img"/>
      <img id="mountain" src={`${process.env.PUBLIC_URL}/mountain.png`} alt="mountain img"/>
    </div>
    <div class="middle-container">
      <div class="profile">
        <img class="myImage circular"
            src="https://media-exp1.licdn.com/dms/image/C5603AQFEzp-CSk57Qw/profile-displayphoto-shrink_200_200/0/1600402274009?e=1613606400&v=beta&t=_9PDywqu5aJCKH8yhPPDIklXAWLtb2-eGY-GORB4IFU"
            alt="My image"/>
        <h2>Hi there.</h2>
        <p>I am a functional tester with 6+ years of experience with automation(mobile and web, api) and API testing
        </p>
      </div>
      <hr/>
    <div class="skills">
        <h2>My Skills.</h2>
        <div class="skill-row">
            <img class="test-automation" src={`${process.env.PUBLIC_URL}/automation-test.png`} alt="auotmation test"/>
            <h3>Automation Tester(UI and API)</h3>
            <p>Have extensively worked on automation design using UI tools like cucumber, Selenium with TestNG and
                Appium or WebdriverIO ; UFT tool ; API automation with Rest Assured</p>
        </div>
        <div class="skill-row">
            <img class="technologies " src={`${process.env.PUBLIC_URL}/automation-tools.jpg`} alt="tech image"/>
            <h3>Tech skills</h3>
            <p>Have experience in cloud device technologies (Device Connect,Perfecto, Browserstack,Seetest) and
                Languages like JAVA, PYTHON and JAVASCRIPT.</p>
        </div>
    </div>
    <hr></hr>
    <div class="contact-me">
        <h2>Get In Touch</h2>
        <h3>If you like what I do</h3>
        <p>Thanks for visiting my profile page.You could connect to me via below link:</p>
        <a class="BUTTON_RNI" href="mailto:pkaustralia10@gmail.com">CONTACT ME</a>
    </div>
</div>
<div class="bottom-container">
    <button onclick={window.open('\https://www.linkedin.com/in/prashant-kumar-44022341/','_blank')} class="footer-link" type="button"><i class="fab fa-linkedin fa-2x"></i> LinkedIn</button>
    {/* <a class="footer-link" role="button" href="https://www.linkedin.com/in/prashant-kumar-44022341/"></a> */}
    <p class="copyrightText">© 2020 Prashant Kumar.</p>
</div>
</div>
  );
}

export default App;
