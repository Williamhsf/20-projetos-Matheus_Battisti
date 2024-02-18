const calculateBtn = document.querySelector("#calculateBtn");

function calculateTip() {
  // obtendo os valores que estão presentes no formulario
  // billAmount - valor da conta
  // parseFloat - transoformando os itens em numericos
  const billAmount = parseFloat(document.querySelector("#billAmount").value);
  const serviceQuality = parseFloat(document.querySelector("#serviceQuality").value);

  // checagem se o biilAmount ta funcionando 
  // validando a entrada
  if(billAmount === "" || serviceQuality == 0) {
    alert("Por favor, preencha os dados!!");
    return;    
  }

  // calculando a gorjeta e valor total
  const tipAmount = billAmount * serviceQuality; // 100 * 0.1
  const totalAmount = billAmount + tipAmount;

  // console.log(tipAmount, totalAmount);
  
  // imprimindo os valores nos inputs
  document.querySelector("#tipAmount").value = `R$ ${tipAmount.toFixed(2)}`;
  document.querySelector("#totalAmount").value = `R$ ${totalAmount.toFixed(2)}`; 
}

calculateBtn.addEventListener("click", calculateTip);