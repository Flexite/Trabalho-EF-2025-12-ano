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

    const colorSlider = document.getElementById('colorSlider');
    const colorLabel = document.getElementById('colorLabel');
    const cookieName = 'waveColor';
    const colors = {
        '1': ['rgb(194, 244, 148)', 'Verde'],
        '2': ['rgb(244, 194, 148)', 'Laranja'],
        '3': ['rgb(148, 194, 244)', 'Azul'],
        '4': ['rgb(244, 148, 194)', 'Rosa'],
        '5': ['rgb(148, 244, 234)', 'Azul Claro']
    };

    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    };

    const getCookie = name => {
        const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
        return match ? match[1] : null;
    };

    const applyWaveColor = (value, save = false) => {
        const [color, label] = colors[value] || colors['1'];
        document.documentElement.style.setProperty('--wave-color', color);
        if(colorLabel) colorLabel.textContent = label;
        if(save) {
            setCookie(cookieName, value, 365);
        }
    };

    const savedValue = getCookie(cookieName) || '1';
    applyWaveColor(savedValue, false);

    if(colorSlider) {
        colorSlider.value = savedValue;
        colorSlider.addEventListener('input', event => applyWaveColor(event.target.value, true));
    }
});
