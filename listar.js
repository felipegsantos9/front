const modal = document.getElementById('fotoModal');
  const imgModal = document.getElementById('Imagem-Veiculo');
  const corpo = document.getElementById('corpo-modal')

  function abrirModal(urlImagem, textoAlt) {
    imgModal.src = urlImagem;   
    imgModal.alt = textoAlt;   
    modal.showModal();         
  }

  function fecharModal() {
    modal.close();      
    imgModal.src = '';         
  }