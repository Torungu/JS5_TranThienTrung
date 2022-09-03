function ketQua() {
    var diemChuan = document.getElementById('diemChuan').value * 1;
    if (diemChuan <= 30) {
        var diemToan = document.getElementById('diemToan').value * 1;
        var diemVan = document.getElementById('diemVan').value * 1;
        var diemAnh = document.getElementById('diemAnh').value * 1;
        var khuVuc = document.getElementById('khuVuc').value * 1;
        var doiTuong = document.getElementById('doiTuong').value * 1;
        var tongDiem = diemToan + diemAnh + diemVan + khuVuc + doiTuong;
        var output = document.getElementById('xuatThongbao')
        if (diemToan == 0 || diemAnh == 0 || diemVan == 0) {
            var ketQua = "Bạn rớt do điểm liệt"
        }
        else if (tongDiem >= diemChuan) {
            var ketQua = "Bạn đã đậu với số điểm " + tongDiem
        }
        else {
            var ketQua = "Bạn đã rớt với số điểm " + tongDiem
        }
        output.style.display = "block"
        output.innerHTML = ketQua;
    }
    else {
        alert('Nhập lại điểm chuẩn')
    }
}
function tinhTien() {
    var ten = document.getElementById('tenKhach').value;
    var kW = document.getElementById('kW').value * 1;
    var output = document.getElementById('thanhToan')
    if (kW <= 50) {
        tongTien = kW * 500;
    }
    else if (kW <= 100) {
        tongTien = 500 * 50 + 650 * (kW - 50);
    }
    else if (kW <= 200) {
        tongTien = 500 * 50 + 650 * 50 + 850 * (kW - 100)
    }
    else if (kW <= 350) {
        tongTien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (kW - 200)
    }
    else if (kW > 350) {
        tongTien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (kW - 350)
    }
    tongTien=new Intl.NumberFormat('Vn-vn').format(tongTien)
    var ketQua = "Ông/Bà " + ten + " cần thanh toán " + tongTien + " tiền điện"
    output.style.display = "block"
    output.innerHTML = ketQua;
}