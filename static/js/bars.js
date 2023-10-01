// Animates competency bars

document.addEventListener('DOMContentLoaded', (event) => {

    function animateBar(elementId, maxBarWidth) {
        const element = document.getElementById(elementId);
    
        function updateBar() {
            let currentWidth = element.textContent.replace(/ /g, '').length;
        
            if (currentWidth < maxBarWidth) {
                currentWidth++;
        
                let redBars = currentWidth > 30 ? '|'.repeat(currentWidth - 30) : '';
                let yellowBars = currentWidth > 25 ? '|'.repeat(Math.min(currentWidth, 30) - 25) : '';
                let remainingBars = '|'.repeat(Math.min(currentWidth, 25));
        
                element.innerHTML =
                    '<span class="c_low">' + remainingBars + '</span>' +
                    '<span style="color: yellow;">' + yellowBars + '</span>' +
                    '<span style="color: red;">' + redBars + '</span>' +
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
                    animateBar('r', 32);
                    animateBar('python', 29);
                    animateBar('bash', 31);
                    animateBar('web', 21);
                    animateBar('latex', 17);
                    animateBar('rna', 33);
                    animateBar('wgs', 20);
                    animateBar('crispr', 29); 
                    animateBar('git', 27); 
                    animateBar('ai', 22); 
    
                    observer.unobserve(entry.target); // Stop observing once the animation is started
                }
            });
        });
        observer.observe(document.getElementById('r'));
    });