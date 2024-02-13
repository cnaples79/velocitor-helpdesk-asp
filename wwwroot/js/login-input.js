console.log('login-input.ts');
document.addEventListener("DOMContentLoaded", function () {
    function toggleLabelClass(input) {
        if (input.value) {
            input.classList.add('has-content');
        }
        else {
            input.classList.remove('has-content');
        }
    }
    document.querySelectorAll('.login-input').forEach(function (input) {
        console.log(input);
        // Check on load
        toggleLabelClass(input);
        // Check on input change
        input.addEventListener('input', function () {
            toggleLabelClass(input);
        });
    });
});
//# sourceMappingURL=login-input.js.map