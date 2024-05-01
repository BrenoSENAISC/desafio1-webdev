const form = document.querySelector('#myForm');/* Busca na página pelo  elemento id myForm e armazena numa constante chamada 'form' */

form.addEventListener('submit', (event) =>{ /* listener de evento submit do formulário. Se houver submit, algo poderá ser feito */
    event.preventDefault();

    const formData = new FormData(form);
    const json = {};

    for (const [key, value] of formData.entries()){  /*Percorre cada um dos campos do formulário e vai populando o json com os dados */
        json[key] = value;
    }

    console.log(json);  /*exibe o json no console*/
    //Aqui você pode enviar o objeto JSON par aum servidor ou salv=a-lo em um banco de dados
    form.reset(); /*Limpa o formulário */

});
