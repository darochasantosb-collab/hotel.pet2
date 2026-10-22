document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu a");

    links.forEach(function (link) {
        link.addEventListener("click", function (evento) {
            const destino = link.getAttribute("href");

            if (!destino || destino === "#") {
                evento.preventDefault();
                alert("Página ainda não configurada.");
            }
        });
    });
});