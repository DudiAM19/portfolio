import {React} from 'react';

const Experience = () => {
    const ExperienceData = [
        {
            title: 'Front End Mobile Project Based (React Native)',
            desc: 'create a mobile-based used goods market application.'
        },
        {
            title: 'Front End Mobile Project Based (React Native)',
            desc: 'make an Android-based soil moisture monitoring application for the final project.'
        },
        {
            title: 'Front End Mobile Project Based (React Native)',
            desc: 'redesigning the mobile phone marketplace project and gadget accessories'
        },
        {
            title: 'Front End Mobile (React Native)',
            company: 'Pt Infosys Solusi Terpadu',
            job: 'membuat beberapa fitur, memperbaiki bug, build apk',
            long: '2022 - now',
        },
    ]
    return(
        <div>
            <section class="resume-section" id="experience">
                <div class="resume-section-content">
                    <h2 class="mb-5">Experience</h2>
                    {ExperienceData.map((val, index) => {
                        return (
                            <div key={index} class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div class="flex-grow-1">
                                    <h3 class="mb-0">{val.title}</h3>
                                    {val.company && (
                                        <>
                                            <div class="subheading mb-0">{val.company}, {val.long}</div>
                                            <p>{val.job}</p> 
                                        </>
                                    )}
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <hr class="m-0" />
        </div>
    )
}

export default Experience;