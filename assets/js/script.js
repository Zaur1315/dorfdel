document.addEventListener("DOMContentLoaded", function() {
    function handleTabSwitching(tabs, bodies) {
        tabs.forEach(function(tab) {
            tab.addEventListener('click', function(event) {
                event.preventDefault();
                tabs.forEach(function(t) {
                    t.classList.remove('active');
                });
                bodies.forEach(function(body) {
                    body.classList.remove('active');
                });
                var tabId = this.getAttribute('id').replace('nav-', '');
                var bodyId = 'body-' + tabId;
                document.getElementById(this.getAttribute('id')).classList.add('active');
                document.getElementById(bodyId).classList.add('active');
            });
        });
    }

    const regular_tabs = document.querySelectorAll('.nav-regular');
    const regular_bodies = document.querySelectorAll('.card-regular > div');
    handleTabSwitching(regular_tabs, regular_bodies);

    const inter_tabs = document.querySelectorAll('.nav-inter');
    const inter_bodies = document.querySelectorAll('.card-inter > div');
    handleTabSwitching(inter_tabs, inter_bodies);
});