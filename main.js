const botao = document.querySelector('[data-button]');
const lista = document.querySelector('[data-list]');
const input = document.querySelector('[data-input]');



const criaTarefa = () =>{
  const li = document.createElement('li');
  lista.appendChild(li)
  const p = document.createElement('p');
  p.setAttribute('class', 'd-inline');
  const tarefa = input.value;
  p.innerText = tarefa;
  li.appendChild(p);
  input.value = " ";
  li.appendChild(BotaoConcluir());
  li.appendChild(BotaoDeleta());
  

}
botao.addEventListener('click', criaTarefa)


const BotaoConcluir = function (){
   const botaoconcluir = document.createElement('button');
   botaoconcluir.innerText = 'concluir';
   botaoconcluir.setAttribute('class', 'btn btn-success');
   botaoconcluir.addEventListener('click', ()=>{
       const paiBotao = botaoconcluir.parentElement;
       paiBotao.classList.toggle('text-decoration-line-through')
 
   })
   return botaoconcluir
}

const BotaoDeleta = function (){
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'Deletar';
    botaoDeleta.setAttribute('class', 'btn btn-danger')
    botaoDeleta.addEventListener('click', () =>{
        const paibtnbotao = botaoDeleta.parentElement;
        paibtnbotao.remove();
    })
    return botaoDeleta
}






