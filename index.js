document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const additionalContent = document.getElementById('additionalContent');
  
    toggleButton.addEventListener('click', function () {
        if (additionalContent.classList.contains('hidden')) {
            additionalContent.classList.remove('hidden');
            toggleButton.textContent = 'Show Less';
        } else {
            additionalContent.classList.add('hidden');
            toggleButton.textContent = 'Show More';
        }
    });
});

