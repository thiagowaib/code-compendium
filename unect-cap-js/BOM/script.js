function salvar()
{
    // Acha o Input, salva seu valor e apaga o campo
        const input = document.getElementsByTagName('input')[0];
        const nomeInserido = input.value;
        input.value = "";

    // FUNÇÃO DE DATA DE EXPIRAÇÃO
        let data = new Date();
        let segundos = 10;
        data.setTime(data.getTime() + (segundos*1000));
        // console.log(data);

    // SINTAXES DE COOKIE
        document.cookie = `nome=${nomeInserido}`;
        // document.cookie = `nome=${nomeInserido}; expires=Mon, 28 Jun 2021 22:02:00 UTC`;
        document.cookie = `nome=${nomeInserido}; expires=${data.toUTCString()}`;

        // document.cookie = `outroDado=É Sexta Feira; expires=${data.toUTCString()}`;

    refresh();
}

function refresh()
{    
    // MANIPULA OS COOKIES E ACHA O {nome}
        let meuCookie;
        try{
            meuCookie = document.cookie //Recebe os Cookies
            .split('; ')    //Separa eles por ;
            .find(item => item.startsWith('nome=')) //Filtra o valor da key "nome"
            .split('=')[1]; //Separa pelo = e assume a posição [1]
        }catch{}

    // REFRESCA O TEXTO COM VALOR DO COOKIE, SE TIVER
        const span = document.getElementsByTagName('span')[0];
        if(meuCookie) //Se tiver cookie
            span.innerHTML=`Bem vindo de volta ${meuCookie}!`;
        else //Se não tiver cookie
            span.innerHTML="Olá estranho,";

    // MANIPULA OS COOKIES E ACHA O {outroDado}
        let outroCookie;
        try{
            outroCookie = document.cookie //Recebe os Cookies
            .split('; ')    //Separa eles por ;
            .find(item => item.startsWith('outroDado=')) //Filtra o valor da key "outroDado"
            .split('=')[1]; //Separa pelo = e assume a posição [1]
        }catch{}

    // try{console.log(`Cookies: ${document.cookie}`)}catch{}
    // console.log(`Outro Cookie: ${outroCookie}`);
}


window.onload = refresh; //Roda 1 vez ao carregar todos os elementos da página


// Referências:
// https://www.w3schools.com/js/js_cookies.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie