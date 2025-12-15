function mensagem(){
    let input = document.getElementById("inputBox");
    if(!input) return;
    let text = input.value.trim();

    if(text === ""){
        alert("Não pensou em nada? Eu também não... por isso escreva algo.");
        return;
    }
    if(text.length > 200){
        alert("Tem muito para dizer. Mesmo assim, não vou conseguir ler.");
        return;
    }

    const t = text.toLowerCase();
    if(t === "upupdowndownleftrightleftrightbastart"){
        alert("Cheat code detetado! Recebeste: Absolutamente nada! hahah.");
        return;
    }
    if(t.includes("say my name")){
        alert("Heisenberg");
        return;
    }
    if(t.includes("never gonna give you up")){
        alert("Never gonna let you down!");
        return;
    }

    alert("Enviou o seguinte: " + text);
    alert("Pena que não posso ler o que pensou logo está descansado :)");
    let opinion = confirm("Gostou do website?");
    if(opinion === false){
        alert("Obrigado por não gostar do website. Isto não é sarcasmo");
        alert("...");
        alert("Não obrigado pelo feedback.");
    } else {
        alert("Obrigado por gostar do website! :)");
    }
}
document.addEventListener('DOMContentLoaded', function(){
    const divs = Array.from(document.querySelectorAll('div'));
    divs.forEach((d, i) => setTimeout(() => d.classList.add('in-view'), i * 80));

    const sendBtn = document.getElementById('sendBtn');
    if(sendBtn) sendBtn.addEventListener('click', mensagem);
});
