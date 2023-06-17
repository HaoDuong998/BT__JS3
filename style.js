var arrSoNguyen = [];
document.getElementById("themSoDuong").onclick = function () {
    var soNguyen = document.getElementById("themSoNguyen").value * 1;
    arrSoNguyen.push(soNguyen);
    document.getElementById("hienThi").innerHTML = arrSoNguyen;
}

// bài tập 1: Tổng Số Dương
document.getElementById("BtnMot").onclick = function () {
    var demSoDuong = 0;
    for (var i = 0; i < arrSoNguyen.length; i++) {
        //Lấy dữ liệu
        var dem = arrSoNguyen[i];
        if (dem > 0) {
            demSoDuong = dem + demSoDuong;
        }
    }


    document.getElementById("xuatKetQua").innerHTML = `Kết quả tổng số dương là: ${demSoDuong}`;
};

// bài tập 2: Đếm Số Dương
document.getElementById("BtnHai").onclick = function () {
    var tongSoDuong = 0;
    for (var i = 0; i < arrSoNguyen.length; i++) {
        // Lấy dữ liệu
        var tong = arrSoNguyen[i];
        if (tong > 0) {
            tongSoDuong++;
        }
    }

    document.getElementById("xuatKetQua").innerHTML = `Kết Qua Đếm Các Số Dương: ${tongSoDuong}`;
};

// bài tập 3: Tìm Số Nhỏ Nhất
document.getElementById("BtnBa").onclick = function () {
    var min = arrSoNguyen[0];
    for (var i = 0; i < arrSoNguyen.length; i++) {
        var soBe = arrSoNguyen[i];
        if (soBe < min) {
            min = soBe;
        }
    }
    // var min = Math.min(...arrSoNguyen);
    
    document.getElementById("xuatKetQua").innerHTML = `kết quả số dương nhỏ nhất là: ${min}`;
};

// bài tập 4: Tìm Số Dương Nhỏ Nhất
document.getElementById("BtnBon").onclick = function () {
    var min = arrSoNguyen[0];
    for (var i = 1; i < arrSoNguyen.length; i++) {
        var soDuong = arrSoNguyen[i];
        if (soDuong > min) {
            min = soDuong ;
        }
        
    }


    document.getElementById("xuatKetQua").innerHTML = `Số Dương Nhỏ Nhất Là ${min}`;
};

// bài tập 5: Tìm Số Chẵn Cuối Cùng
document.getElementById("BtnNam").onclick = function () {
    var min = arrSoNguyen[0];
    for (var i = 0; i < arrSoNguyen.length; i++) {
        var soChanCuoi  = arrSoNguyen[i];
        if (soChanCuoi % min === 0) {
           min = soChanCuoi;
        }
    }
    document.getElementById("xuatKetQua").innerHTML = `Số Chẵn Cuối Cùng Là: ${min}`;
}

// Bài tập 6:

//Bài tập 7: Sắp xếp tăng dần
document.getElementById("BtnBay").onclick = function () {
    var soTangDan = arrSoNguyen.sort((a, b) => a - b)
    document.getElementById("xuatKetQua").innerHTML = `Số Tăng Dần lần lượt là ${soTangDan}`;
}














// var min = arrSoNguyen[0];
//     for (var i = 0; i < arrSoNguyen.length; i++) {
//         //Lấy Gía trị
//         var soNho = arrSoNguyen[i];
//         if (soNho < min) {
//            min = soNho;
//         }
//     }




