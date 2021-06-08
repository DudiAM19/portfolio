import {React} from 'react';

const Education = () => {
    return(
        <div>
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">University of Mercu Buana Yogyakarta</h3>
                            <div class="subheading mb-3">Technical Information</div>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">2017 - Now</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">SMAN 1 Rajagaluh</h3>
                            <div class="subheading mb-3">Senior HighSchool</div>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">2015 - 2017</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
        </div>
    )
}

export default Education;