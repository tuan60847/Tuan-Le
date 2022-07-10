function checkemail(){
	var x = document.DangkiForm.email.value;
	var atposition = x.indexOf("@");
	var endpostion = x.lastIndexOf(".");
	var nmFullName = document.DangkiForm.nmFullName.value;
	var nmAddress = document.DangkiForm.nmAddress.value;
	var nmCellphone = document.DangkiForm.nmCellphone.value;
	for (var i = 0 ; i < nmFullName.length;i++){
			if(isNumeric(nmFullName[i])==true||nmFullName.length<10)
				{
					alert("Nhập lại Họ Tên");
					return false;	
			}
		}
	if	(nmAddress.length<10){
		alert("làm ơn lại địa chỉ");
		return false;
	}
	else if(!isNumeric(nmCellphone)){
		alert("làm ơn nhập đúng số Điện thoại giúp");
		return false;
	}
	
	else if(atposition<1|| endpostion<(atposition+2)||(endpostion+2)>=x.length){
		alert("làm ơn nhập đúng gmail giúp");
		return false;
	}
}
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
  }
