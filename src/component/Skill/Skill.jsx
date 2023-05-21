import {React} from 'react';

const Skill = () => {
    return(
        <div>
            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-5">Skills</h2>
                    <div class="subheading mb-3">Programming Languages & Tools</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                        <li class="list-inline-item"><i class="fab fa-react"></i></li>
                        <li class="list-inline-item"><i class="fab fa-git-alt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-android"></i></li>
                    </ul>
                    <div class="subheading mb-3">Workflow</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Front End Web
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Front End Mobile
                        </li>
                    </ul>
                </div>
            </section>
            <hr class="m-0" />
        </div>
    )
}

export default Skill;