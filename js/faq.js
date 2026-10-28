const perguntas = [
    
  { pergunta: "Quem vocês querem ajudar?",
    resposta: 'Este projeto está voltado especialmente para <a href="https://turmadobem.org.br/a-turma-do-bem/" target="_blank" rel="noopener noreferrer">Turma do Bem.</a>' },

  { pergunta: "Como funciona o projeto?",
    resposta: `Nosso projeto tem como objetivo identificar e contribuir para a resolução de problemas reais, buscando soluções eficientes, 
    acessíveis e sem custos para os beneficiários. Para isso, priorizamos a automação de processos e o desenvolvimento de iniciativas que otimizem recursos e 
    ampliem o alcance das nossas ações.<br>Uma das principais estratégias é incentivar a participação de doadores automáticos, que contribuem de forma recorrente para a 
    sustentabilidade do projeto. Acreditamos que, por meio da tecnologia, da solidariedade e do engajamento da comunidade, é possível fortalecer nossas iniciativas, 
    alcançar um número maior de pessoas e estabelecer parcerias que contribuam para a continuidade e a expansão do nosso impacto social.` },

  { pergunta: "Quais problemas o grupo vai resolver?",
    resposta: `O grupo pretende atuar na identificação e na busca por soluções para problemas reais apresentados pela comunidade, 
    priorizando alternativas acessíveis, eficientes e sem custos para os beneficiários. Entre os principais desafios, estão as dificuldades de captação de recursos, 
    a limitação do alcance de iniciativas sociais e a necessidade de aproximar pessoas que precisam de ajuda daquelas que desejam contribuir.<br>Por meio da tecnologia, 
    da automação de serviços e do incentivo a doações recorrentes, buscamos otimizar processos, ampliar o alcance das ações e fortalecer o impacto social do projeto.` },

  { pergunta: "Como pretendem resolver problemas de Captação?",
    resposta: `Pretendemos ampliar sua capacidade de captação de recursos por meio da automação de processos e do incentivo à participação de doadores automáticos e parceiros. 
    Essa estratégia busca estabelecer contribuições recorrentes, promovendo maior estabilidade financeira e sustentabilidade para as iniciativas.` },

  { pergunta: "Ainda tenho dúvidas sobre o projeto",
    resposta: 'Se ainda estiver com alguma dúvida, envie em <a href="./contato.html">CONTATO</a><br>A SUA DÚVIDA PODE SER A DE MAIS ALGUÉM!' }

];

const lista = document.getElementById("faq");
perguntas.forEach((item, i) => {
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" id="faq-${i}">
    <label for="faq-${i}"><span>${i + 1}</span>${item.pergunta}</label>
    <div class="resposta"><p>${item.resposta}</p></div>`;
  lista.appendChild(li);
});

document.getElementById("busca").addEventListener("input", (e) => {
  const termo = e.target.value.toLowerCase().trim();
  let achou = 0;
  lista.querySelectorAll("li").forEach((li) => {
    const ok = li.textContent.toLowerCase().includes(termo);
    li.style.display = ok ? "" : "none";
    if (ok) achou++;
  });
  document.getElementById("vazio").style.display = achou ? "none" : "block";
});
