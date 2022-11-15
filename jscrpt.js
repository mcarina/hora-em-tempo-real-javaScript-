function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var horas = data.getHours()
  var min = data.getMinutes()
  msg.innerHTML = `São ${horas} horas e ${min} minutos em Manaus - AM`
  if (horas >= 5 && horas < 12) {
    img.src =
      'https://18horas.com.br/wp-content/uploads/2020/03/imagem-aerea-manaus.jpg'
  } else if (horas >= 12 && horas <= 18) {
    img.src =
      'https://portaldacapitalam.com.br/wp-content/uploads/2020/09/show_ponta_negra_81FD2513-98B4-47B6-BC0A-9D8CBCE3FB36.jpg'
  } else {
    img.src =
      'http://2.bp.blogspot.com/_i8Ot120HlpY/S9mD9vRQwCI/AAAAAAAAAV0/aV5IQ6dBpPU/s400/Manaus+a+noite.jpg'
  }
}
