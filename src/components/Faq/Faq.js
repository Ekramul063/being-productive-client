import React from 'react';

const Faq = () => {
    return (
        <div>
            <div tabIndex={1} className="collapse">
                <div className="collapse-title text-xl font-medium">
                    Who is this course for?
                </div>
                <div className="collapse-content">
                    <p>Who can be a web developer. Those who want to start their public no zero to end up software company as a web development teacher. For those who don't know about plastic or web development. Even those who are not able to do CSE after studying four years, have not learned anything, from this point of view they can learn Complete Web Developed and run them in the job.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse">
                <div className="collapse-title text-xl font-medium">
                    What I have to know start for start this course?
                </div>
                <div className="collapse-content">
                    <p>Since we are teaching from scratch. So you don't need to know anything beforehand. But if you have time, you can do these three things. 1. You need to keep some brain space to get the things in your head after watching the video. 2. Just joining the course will not make you an auto web developer. Must have a hard-working, stick-to-it mentality. 3. If you get stuck somewhere, you have to have the mentality of asking for help and the will to stick around.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse">
                <div className="collapse-title text-xl font-medium">
                    How can I get the video of the course?
                </div>
                <div className="collapse-content">
                    <p>Course videos will be pre-recorded. You open an account and enroll in this course. Videos will be given one module per day from the start of the course. Each module usually has 10 to 12 videos. You have to finish watching these videos within the day they are released. Therefore, dedicated time should be kept daily for the course. And during that time, you can watch the video lying down, standing, leaning, swinging your legs, dancing, or even hiding under the bed.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse">
                <div className="collapse-title text-xl font-medium">
                    How long will it take to complete this course?
                </div>
                <div className="collapse-content">
                    <p>If you watch videos for 1 to 1.5 hours every day, along with extra 4 to 6 hours of practice, it will take you about 5 months. However, sometimes extra time should be reserved for homework and take away projects. Must bring hard work mentality. There are no cheats or shortcuts.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse">
                <div className="collapse-title text-xl font-medium">
                What is the educational background required to do the course?
                </div>
                <div className="collapse-content">
                    <p>We have designed the course in such a way that academic background does not matter. You can do this course from any academic background. University students, college students, job seekers, unemployed, lovers, runaway lovers, even lovers who don't pick up the phone, have been started from scratch so that everyone can learn. But must give time 6-8 hours. Minimum 4-5 hours.</p>
                </div>
            </div>

        </div>
    );
};

export default Faq;