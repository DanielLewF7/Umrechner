    $(".sub").click(function () {
        var dec = $("#dez").val();
        var bin = $('#bin').val();
        var hex = $("#hex").val();
        switch ($("#Umrechner option:selected").val()) {
            case "bin":
                $("#dez").val(bin2dec(bin));
                $("#hex").val(dec2hexa(bin2dec(bin)));
                break;
            case "hex":
                $("#dez").val(hex2dec(hex));
                $("#bin").val(dec2bin(hex2dec(hex)));
                break;
            case "dez":
                $("#bin").val(dec2bin(dec));
                $("#hex").val(dec2hexa(dec));
                break;
            default:
        }
    });
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
function dec2hexa(dec) {
    var rest = 0;
    var ergebniss = "";
    while (dec > 0) {
        rest = parseInt(dec % 16);
        dec = parseInt(dec / 16);
        ergebniss = rest.toString(16) + ergebniss;
    }
    return ergebniss;
}

function bin2dec (vbin) {
    var multiplikator = 1;
    var counter = vbin.length;
    var i = 0;
    var result = 0;
    var index;
    while (i < counter) {
        index = counter - ( i + 1);
        var tempresult = vbin[index] * multiplikator;
        i++;
        multiplikator = multiplikator * 2;
        result = parseInt(tempresult) + parseInt(result);
    }
    return result;
}
function hex2dec (vhex) {
    var hexresult = 0;
    var i = 0;
    var multiplikator = 1;
    var hexcounter = vhex.length;
    var index = 0;
    while (hexcounter > i) {
        index = hexcounter - ( i + 1);
        var tempresult = numberconvert(vhex[index])  * multiplikator;
        i++;
        hexresult = parseInt(tempresult) + parseInt(hexresult);
        multiplikator = Math.pow(16, i);
    }
    return hexresult;
}
function numberconvert (hexindex) {
    hexindex = hexindex.toUpperCase();//8
    switch (hexindex) {
        case "A":
            return 10;
            break;
        case 'B':
            return 11;
            break;
        case 'C':
            return 12;
            break;
        case 'D':
            return 13;
            break;
        case 'E':
            return 14;
            break;
        case 'F':
            return 15;
            break;
        default:
            return hexindex;
    }
}

$(".sub").click(function () {
    var inputvalue = $("#bin").val();
    if (inputvalue.match(/^[0-1]*$/)) {
    } else {
        $("input").attr('readonly', true);
        $("#bin").val("Error!");
    }
});
$(".sub").click(function () {
    var inputvalue = $("#hex").val();
    if (inputvalue.match(/^[a-f]*$/)) {
    } else {
        $("input").attr('readonly', true);
        $("#hex").val("Error!");
    }
});

$("#Umrechner").change(function () {
    if ($("#Umrechner option:selected").text() == "Binär") {
        $("input").attr('readonly', true);
        $("#bin").attr('readonly', false);
        $("input").val("");
    }
    else if ($("#Umrechner option:selected").text() == "Hexadezimal") {
        $("input").attr('readonly', true);
        $("#hex").attr('readonly', false);
        $("input").val("");
    }
    else {
        $("input").attr('readonly', true);
        $("#dez").attr('readonly', false);
        $("input").val("");
    }

});