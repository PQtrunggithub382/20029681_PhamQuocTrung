$(document).ready(function () {
    var i = 1;
    $("#btn2").click(function () {
        $("#myModal").modal();
    });
    function KiemTraTen() {
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("không để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(KiemTraTen);

    function KiemTraCMND() {
        var mauKT = "[0-9]{9}"; ;
        if ($ * ("#CMND").val() == "") {
            $("#tbDc").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#CMND").val())) {
            $("#tbCMND").html("Nhập đúng 9 chữ số không rỗng");
            return false;
        }
        $("#tbCMND").html("*");
        return true;
    }
$("#Ao").blur(KiemTraCMND);

function KiemTraDiaChi() {
    var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
    if ($ * ("#DC").val() == "") {
        $("#tbDc").html("Không để trống");
        return false;
    }
    if (!mauKT.test($("#DC").val())) {
        $("#tbDc").html("MỖi ký tự viết đầu viết hoa không sử dụng số");
        return false;
    }
    $("#tbDc").html("*");
    return true;
}
$("#DC").blur(KiemTraDiaChi);

function kiemtraEmail() {
    if ($ * ("#Email").val() == "") {
        $ * ("#Email").html("Không để trống");
        return false;
    }
    var email = document.getElementById('email'); 
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email.value)) { 
             alert('Hay nhap dia chi email hop le.\nxxxxxx@iuh.edu.vn');
             email.focus; 
             return false; 
    }
    else{ 
             alert('Email nay hop le.'); 
    } 
} 
$("#Email").blur(kiemtraEmail);

function kiemtraSDT() {
    var mauKT = /^0\d{3}-\d{3}-\{3}$/;
    if ($ * ("#SDT").val() == "") {
        $ * ("#SDT").html("Không để trống");
        return false;
    }
    if (!mauKT.test($("#sdt").val())) {
        $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx trong đó là x là số");
        return true;
    }
    $("#tbSDT").html("*");
    return true;
}
$("#SDT").blur(kiemtraSDTS);

$("#Save").click(function () {
    if (KiemTraTen() == true && KiemtraCMND() == true && kiemtraSDT() == true && kiemtraEmail() == true && KiemTraDiaChi() == true) {
        row = "<tr>";
        row = "<tr>"; + (i++) + "</th>";
        row = "<tr>"; + $("#Name").val() + "</th>";
        row = "<tr>"; + $("#CMND").val() + "</th>";
        row = "<tr>"; + $("#DC").val() + "</th>";
        row = "<tr>"; + $("#Email").val() + "</th>";
        row = "<tr>"; + $("#SDT").val() + "</th>";
        row = "<tr>"; + $("#ADD").val() + "</th>";
        $("##danhSach").append(row);
        $("#myModal").modal("hide");
    }
})
 })
