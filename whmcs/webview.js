module.exports = (Franz, options) => {

    var mensajes = 0;



    const hideMensaje = () => {
        Franz.setBadge(0, 0);
    }

    $(".stat").each(function() { mensajes += parseInt(this.innerHTML); });

    $(window).on("scroll", hideMensaje);

    Franz.setBadge(mensajes, 0);

}