async function pesquisarRede(){
    let url="http://localhost:3000/redes";
    let dados= await fetch(url);
    const response= await dados.json();
    console.log(response);
}