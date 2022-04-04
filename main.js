function getELE(id) {
  return document.getElementById(id);
}
// lấy value và push mảng
var mang = [];
getELE("btnThem").addEventListener("click", function () {
  var soDuong = getELE("txtDuong").value * 1;
  mang.push(soDuong);
  getELE("footer").innerHTML = mang;
});
/// bài 1
getELE("btnTinh").addEventListener("click", function () {
  var sum = 0;
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] > 0) {
      sum += mang[i];
    } else {
      sum = "vui lòng nhập số dương";
    }
  }
  getELE("footer").innerHTML = "tổng số dương là : " + sum;
});
// bài 2
getELE("btnDemSo").addEventListener("click", function () {
  var count = 0;
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] > 0) {
      count++;
    } else {
      count = "vui lòng nhập số dương ạ";
    }
  }
  getELE("footer").innerHTML = "có tất cả là : " + count + " Số Dương ạ";
});
// bài 3
getELE("btnTimSoNN").addEventListener("click", function () {
  let min = mang[0];
  for (var i = 1; i < mang.length; i++) {
    if (min > mang[i]) {
      min = mang[i];
    }
  }
  getELE("footer").innerHTML = " Số nhỏ nhất là : " + min;
});
// bài 4
getELE("btnTimSoDNN").addEventListener("click", function () {
  let soDuongNN = mang[0];
  for (var i = 1; i < mang.length; i++) {
    if (soDuongNN > mang[i]) {
      soDuongNN = mang[i];
    }
  }
  getELE("footer").innerHTML = " Số dương nhỏ nhất là : " + soDuongNN;
});
// bài 5
getELE("btnTimSoChan").addEventListener("click", function () {
  var ketQuaChan = timChan(mang);
  getELE("footer").innerHTML = ketQuaChan;
});
function kiemTraChan(n) {
  var kiemTraSoChan;
  if (n % 2 === 0) {
    kiemTraSoChan = 0;
  }
  return kiemTraSoChan;
}
function timChan(mang) {
  for (var i = mang.length - 1; i >= 0; i--) {
    if (kiemTraChan(mang[i]) === 0) {
      return "số chẵn cuối cùng trong mảng  " + mang[i];
    }
  }
  return "không có số chẵn cuối cùng trong mảng  " + -1;
}
// bài 6
getELE("btnDoiCho").addEventListener("click", function () {
  var soThuNhat = mang[0];
  var soThuHai = mang[1];
  if (soThuNhat < soThuHai) {
    soThuNhat = mang[1];
    soThuHai = mang[0];
  } else if (soThuNhat > soThuHai) {
    soThuNhat = mang[1];
    soThuHai = mang[0];
  }
  getELE("footer").innerHTML = soThuNhat + " , " + soThuHai;
});
// bài 7
getELE("btnTangDan").addEventListener("click", function () {
  for (var i = 0; i < mang.length - 1; i++) {
    for (var j = i + 1; j < mang.length; j++) {
      if (mang[i] > mang[j]) {
        var temp = mang[i];
        mang[i] = mang[j];
        mang[j] = temp;
      }
    }
  }
  getELE("footer").innerHTML = " Thứ tự tăng dần : " + mang;
});
// bài 8
getELE("btnTimNT").addEventListener("click", function () {
  var ketQuaNT = timSNT(mang);
  getELE("footer").innerHTML = ketQuaNT;
});

function kiemTraNT(n) {
  var checkSNT = true;
  if (n < 2) {
    checkSNT = false;
  } else {
    for (var i = 2; i < n - 1; i++) {
      if (n % i === 0) {
        checkSNT = false;
        break;
      }
    }
    return checkSNT;
  }
  console.log(checkSNT);
}
function timSNT(mang) {
  for (var i = 0; i < mang.length - 1; i++) {
    if (kiemTraNT(mang[i]) === true) {
      return "số nguyên tố đầu tiên trong mảng là : " + mang[i];
    }
  }
  return "mảng không có số nguyên tố  " + mang[i];
}
// bài 9
var mang2 = [];
getELE("btnThemMang").addEventListener("click", function () {
  var soThuc = getELE("txtSoThuc").value * 1;
  mang2.push(soThuc);
  console.log(mang2);
  getELE("footer").innerHTML = mang2;
});
getELE("btnTimSoNguyen").addEventListener("click", function () {
  var kqNguyen;
  var countSoNguyen = 0;
  for (var i = 0; i < mang2.length; i++) {
    if (Number.isInteger(mang2[i]) === true) {
      countSoNguyen++;
    }
  }
  console.log("số lượng số nguyên là ", countSoNguyen);
  kqNguyen = countSoNguyen + mang.length * 1;

  getELE("footer").innerHTML = "Số lượng số nguyên trong mảng : " + kqNguyen;
});
// bài 10
getELE("btnSoSanh").addEventListener("click", function () {
  var countDuong = 0;
  var countAm = 0;
  var ketQua = " ";
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] > 0) {
      countDuong++;
    } else if (mang[i] < 0) {
      countAm++;
    }
  }
  if (countDuong > countAm) {
    ketQua = "Số dương nhiều hơn số âm : " + countDuong + " Số";
  } else {
    ketQua = "Số âm nhiều hơn số dương : " + countAm + " Số";
  }
  getELE("footer").innerHTML = ketQua;
});
