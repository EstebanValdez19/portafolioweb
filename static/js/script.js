document.addEventListener("DOMContentLoaded", () => {
    // Efecto hover para los enlaces de redes sociales
    const socialLinks = document.querySelectorAll(".social-links a");

    socialLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
        });
        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Efecto hover para los bloques de la hoja de vida
    const infoBlocks = document.querySelectorAll(".info-block");

    infoBlocks.forEach(block => {
        block.addEventListener("mouseover", () => {
            block.style.transform = "translateY(-5px)";
        });
        block.addEventListener("mouseout", () => {
            block.style.transform = "translateY(0)";
        });
    });
});
function abrirPDF() {
    const rutaPDF = '/static/pdf/ia.pdf';
    window.open(rutaPDF, '_blank');
}
function abrirPDF1() {
    const rutaPDF = '/static/pdf/ciberseguridad-terminologia.pdf';
    window.open(rutaPDF, '_blank');
}
function abrirPDF2() {
    const rutaPDF = '/static/pdf/ciberseguridad.pdf';
    window.open(rutaPDF, '_blank');
}
function abrirPDF3() {
    const rutaPDF = '/static/pdf/ia-promt.pdf';
    window.open(rutaPDF, '_blank');
}
function abrirPDF4() {
    const rutaPDF = '/static/pdf/microsoft.pdf';
    window.open(rutaPDF, '_blank');
}
function abrirPDF5() {
    const rutaPDF = '/static/pdf/computacion.pdf';
    window.open(rutaPDF, '_blank');
}