// src/js/script.js
console.log('🚀 Gulp funcionando!');

// Código para o botão
document.addEventListener('DOMContentLoaded', function() {
  const botao = document.getElementById('meuBotao');
  const mensagemDiv = document.getElementById('mensagem');
  
  if (botao) {
    botao.addEventListener('click', function() {
      const mensagem = document.getElementById('mensagem');
      mensagem.textContent = '🎉 Parabéns! O JavaScript está funcionando perfeitamente! O Gulp minificou e concatenou este arquivo.';
      mensagem.style.display = 'block';
      mensagem.style.backgroundColor = '#2ecc71';
      mensagem.style.color = 'white';
      mensagem.style.padding = '1rem';
      mensagem.style.borderRadius = '5px';
      mensagem.style.marginTop = '1rem';
      
      // Some depois de 3 segundos
      setTimeout(() => {
        mensagem.style.opacity = '0';
        setTimeout(() => {
          mensagem.style.display = 'none';
          mensagem.style.opacity = '1';
        }, 500);
      }, 3000);
    });
  }
});