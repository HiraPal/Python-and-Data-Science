$('#testForm').submit(() => {
  $('#test').val('tesaja');
  return;
})

$('#lvq-form').submit((e) => {
  var agecheck = validateAge();
  if(agecheck) {
    depCalc();
  }  else {
    return false;
  }
})

function validateAge() {
    var txtVal = document.getElementById("umur").value; 
    if (txtVal >= 10 && txtVal <= 100) {               
        return true;
    }          
    else
        alert('Age must be between 10-100');
        return false;
};

function depCalc() {
  var ap = 0;
  var af = 0;
  for(let i=1;i<=8;i++){
    ap = ap + parseInt($('#ap'+i).val());
  }
  for(let i=1;i<=5;i++){
    af = af + parseInt($('#af'+i).val());
  }
  $('.aphidden').val(ap/8);
  $('.afhidden').val(af/5);
  return;
};