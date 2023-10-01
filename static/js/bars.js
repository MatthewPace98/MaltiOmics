// Animates competency bars

document.addEventListener('DOMContentLoaded', (event) => {

    function animateBar(elementId, maxBarWidth) {
        const element = document.getElementById(elementId);
    
        function updateBar() {
            let currentWidth = element.textContent.replace(/ /g, '').length;
    
            if (currentWidth < maxBarWidth) {
                currentWidth++;
                element.innerHTML =
                    '<span class="c_low">' + '|'.repeat(currentWidth) + '</span>' +
                    ' '.repeat(element.textContent.length - currentWidth);
            } else {
                clearInterval(intervalId); // Stop updating when bar is full
            }
        }
    
        // Update the bar
        const intervalId = setInterval(updateBar, 70);
    }
    
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    animateBar('r', 28);
                    animateBar('python', 28);
                    animateBar('bash', 32);
                    animateBar('web', 21);
                    animateBar('latex', 19);
                    animateBar('rna', 33);
                    animateBar('wgs', 19);
                    animateBar('crispr', 28); 
                    animateBar('git', 25); 
                    animateBar('ai', 19); 
    
                    observer.unobserve(entry.target); // Stop observing once the animation is started
                }
            });
        });
        observer.observe(document.getElementById('r'));
    });