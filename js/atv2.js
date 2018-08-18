function maiorIdade(){
  var ano = document.getElementById("ano");
  console.log(ano.value);
  var idade = 2018 - ano.value;
  console.log(idade);
  ///// pagar o ano do sistema
  var DataSistema = new Date();
  var anoSystema = DataSistema.getFullYear();
  console.log(anoSystema);
  idade = anoSystema - ano.value;
  console.log("você possui: "+idade);
}
