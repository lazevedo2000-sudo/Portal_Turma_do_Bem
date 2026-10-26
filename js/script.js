const menu = document.querySelector('.menu-centro');
const areaBotoes = document.querySelector('.botoes-direita') || document.querySelector('header');

if (menu && areaBotoes) {
  const btnMenu = document.createElement('button');
  btnMenu.className = 'btn-menu';
  btnMenu.setAttribute('aria-label', 'Abrir menu');
  btnMenu.setAttribute('aria-expanded', 'false');
  btnMenu.innerHTML = '<span></span><span></span><span></span>';
  areaBotoes.appendChild(btnMenu);

  function abrirMenu(abrir) {
    menu.classList.toggle('aberto', abrir);
    btnMenu.classList.toggle('aberto', abrir);
    btnMenu.setAttribute('aria-expanded', abrir);
    btnMenu.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
  }

  btnMenu.addEventListener('click', () => {
    abrirMenu(!menu.classList.contains('aberto'));
  });

  // Fecha o menu ao clicar em um link
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => abrirMenu(false));
  });

  // Fecha com a tecla Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') abrirMenu(false);
  });

  // Fecha se a tela voltar para o tamanho desktop
  window.matchMedia('(min-width: 992px)').addEventListener('change', (e) => {
    if (e.matches) abrirMenu(false);
  });
}

function cpfOuCnpj() {
  const tipoPessoa = document.querySelector('#tipoPessoa').value;
  const campoCpf = document.querySelector('#campo-cpf');
  const campoCnpj = document.querySelector('#campo-cnpj');

  if (tipoPessoa === 'pj') {
    campoCpf.classList.add('oculta');
    campoCnpj.classList.remove('oculta');
  } else {
    campoCpf.classList.remove('oculta');
    campoCnpj.classList.add('oculta');
  }
}