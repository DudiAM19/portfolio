import {React} from 'react';
import './index.css'

const About = () => {
    return(
        <div>
            <section class="resume-section bg-light" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        DUDIALI
                        <span class="text-primary text-secondary">MURTADO</span>
                    </h1>
                    <div class="subheading mb-5">
                        Jl Jembatan Merah 1 · Sleman, Yogyakarta · (+62) 8956-0468-4777 ·
                        <a href="mailto:dudiali79@gmail.com" class="text-secondary">dudiali79@gmail.com</a>
                    </div>
                    <p class="lead mb-5">Introducing my name is Dudi Ali Murtado, I am a front end developer. I come from West Java, and I am a graduate of the University of Mercu Buana, Yogyakarta, majoring in informatics. I really like learning new things, especially in the field of information technology.</p>
                    <div class="social-icons">
                        <a class="social-icon" href="https://www.linkedin.com/in/dudi-ali-b3b837163"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="https://github.com/DudiAM19"><i class="fab fa-github"></i></a>
                        <a class="social-icon" href="https://www.instagram.com/dudialimurtado/"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
        </div>
    )
}

export default About;