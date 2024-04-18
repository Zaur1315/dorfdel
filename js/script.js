    document.addEventListener("DOMContentLoaded", function() {
        // Получаем ссылки на табы и соответствующее содержимое
        var tabs = document.querySelectorAll('.nav-link');
        var bodies = document.querySelectorAll('.card-body > div');

        // Обрабатываем клики по табам
        tabs.forEach(function(tab) {
            tab.addEventListener('click', function(event) {
                event.preventDefault();
                // Удаляем класс активности у всех табов и соответствующего содержимого
                tabs.forEach(function(t) {
                    t.classList.remove('active');
                });
                bodies.forEach(function(body) {
                    body.classList.remove('active');
                });
                // Добавляем класс активности выбранному табу и соответствующему содержимому
                var tabId = this.getAttribute('id').replace('nav-', '');
                var bodyId = 'body-' + tabId;
                document.getElementById(this.getAttribute('id')).classList.add('active');
                document.getElementById(bodyId).classList.add('active');
            });
        });
    });
