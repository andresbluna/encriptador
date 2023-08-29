$(document).ready(function() {
    // Funcion para encriptar el texto
    $("#encryptBtn").click(function() {
        var plaintext = $(".textarea").val();
        var encryptedText = CryptoJS.AES.encrypt(plaintext, "secret key");
        $("#output").text(encryptedText);
    });

    // Funcion para desencriptar el texto
    $("#decryptBtn").click(function() {
        var encryptedText = $(".textarea").val();
        var bytes = CryptoJS.AES.decrypt(encryptedText, "secret key");
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        $("#output").text(originalText);
    });

    // Funcion para copiar el texto
    $("#copyBtn").click(function() {
        var temp = $("<textarea>");
        $("body").append(temp);
        temp.val($("#output").text()).select();
        document.execCommand("copy");
        temp.remove();
    });
});
