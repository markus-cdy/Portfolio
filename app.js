//JOB PANEL ANIMATION

const panels = document.querySelectorAll('.panel');
const containerJob = document.querySelector('.container-job');

function jobPanelAnimation() {
    panels.forEach((panel) => {
        panel.onclick = () => {
            removeActiveClasses()
            panel.classList.add('active');
        };
    });
};

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
};

jobPanelAnimation();

window.addEventListener('scroll', () => {
    console.log(containerJob.getBoundingClientRect().top);
    if(containerJob.getBoundingClientRect().top >= 869 || containerJob.getBoundingClientRect().top <= -434) {
        removeActiveClasses();
    }
});