function abrirModal() //Função que abre o modal
{
    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    // Caso a largura da tela seja <500px
    if(window.matchMedia("(max-width: 500px)").matches)
    {
        const body = document.getElementsByTagName('body')
        body[0].style.overflowY = 'hidden'; //Trava o Scroll
    }
}

function fecharModal() //Função que fecha o modal
{
    const modal = document.getElementById('modal');
    window.onclick = (event) => {
        if(event.target == modal)
            modal.style.display='none';
    }

    // Caso a largura da tela seja <500px
    if(window.matchMedia("(max-width: 500px)").matches)
    {
        const body = document.getElementsByTagName('body')
        body[0].style.overflowY = 'scroll'; //Libera o Scroll
    }
}