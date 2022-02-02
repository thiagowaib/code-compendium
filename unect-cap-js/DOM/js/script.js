function descer() //Função para descer a tela
{
    window.scrollTo(0, 450);
}

function add() //Função para adicionar elemento
{
    const artigo = document.getElementById('artigo');
    const elementosExistentes = artigo.children.length;

    const input = document.getElementById('input');
    const valorInput = `"${input.value}"`; //Salva o valor do input
    input.value = ""; //Limpa o input

    const div = document.createElement('div'); //Adiciona a DIV
    div.id = elementosExistentes+1;
    artigo.appendChild(div);
    
    const p = document.createElement('p'); //Adiciona o P com o Texto
    p.innerText = valorInput;
    div.appendChild(p);
    
    const span = document.createElement('span'); //Adiciona o SPAN com a função de deletar
    span.innerText = 'X';
    div.appendChild(span);
    
    span.addEventListener("click", () => { 
        const div = document.getElementById(`${elementosExistentes+1}`); //Procura o elemento
        div.remove(); //Deleta
    });
}

