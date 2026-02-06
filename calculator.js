function getNumber(id){
  const value = document.getElementById(id).value.trim();
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function showResult(result){
  const out = document.getElementById("output");

  if (result === null){
    out.innerHTML = "Result: invalid input";
    out.style.color = "";
    return;
  }

  out.innerHTML = "Result: " + String(result);

  if (result < 0){
    out.style.color = "red";
  } else {
    out.style.color = "";
  }
}

function addition(){
  const a = getNumber("first-number");
  const b = getNumber("second-number");
  if (a === null || b === null) return showResult(null);
  showResult(a + b);
}

function subtraction(){
  const a = getNumber("first-number");
  const b = getNumber("second-number");
  if (a === null || b === null) return showResult(null);
  showResult(a - b);
}

function multiplication(){
  const a = getNumber("first-number");
  const b = getNumber("second-number");
  if (a === null || b === null) return showResult(null);
  showResult(a * b);
}

function division(){
  const a = getNumber("first-number");
  const b = getNumber("second-number");
  if (a === null || b === null || b === 0) return showResult(null);
  showResult(a / b);
}

function power(){
  const base = getNumber("first-number");
  const exp  = getNumber("second-number");
  if (base === null || exp === null) return showResult(null);
  if (!Number.isInteger(exp)) return showResult(null);

  let result = 1;

  if (exp >= 0){
    for (let i = 0; i < exp; i++){
      result *= base;
    }
  } else {
    for (let i = 0; i < Math.abs(exp); i++){
      result *= base;
    }
    result = 1 / result;
  }

  showResult(result);
}

function clearAll(){
  document.getElementById("first-number").value = "";
  document.getElementById("second-number").value = "";
  const out = document.getElementById("output");
  out.innerHTML = "Result: (waiting)";
  out.style.color = "";
}
