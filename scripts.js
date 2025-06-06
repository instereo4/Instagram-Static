{let elementoAtual = null;
    var defaultValue = null;
    var bgvalues = [];
    
    const elementosAlvo = document.querySelectorAll(".img_icon");
    elementosAlvo.forEach(elemento => {
        //bgvalues.push(elemento.src);
        elemento.addEventListener("mouseenter", changeImage);
        elemento.addEventListener("mouseleave", revertImage);
    });
    
    var button = null;
    
    function changeImage(event){
        button = event.target.src;
        elementoAtual = button.slice(0, -4);
        event.target.src = elementoAtual + "_hover.png";
        console.log(elementoAtual + "_hover.png");
    }
    
    
    function revertImage(event){
        defaultValue = event.target.src;
        defaultValue = defaultValue.slice(0, -10);
        event.target.src = defaultValue + ".png";
        
        console.log(event.target.src);
    }}
    
    //Arrow button ocultar/expandir tela de perfil
    {const section = document.getElementsByClassName('content-section');
    const toggleButton = document.getElementById('toggleButton');
    const arrowImg = document.getElementById('arrow-img');
    const tableSection = document.getElementsByClassName('posts-profile-table')[0];
    const tableImg = document.getElementsByClassName('posts-img');
    const tableImgArray = Array.from(tableImg);
    let isOpen = true;
    
    
    
    toggleButton.addEventListener('click', () => {
        if (isOpen) {
            section[0].style.width = '0';
            toggleButton.style.marginLeft = '0';
            arrowImg.style.transform = 'rotateZ(0deg)';
            tableSection.style.width = '100%';

            tableImgArray.forEach(function(imagem) {
                imagem.style.width = "80%";
            });
            
            isOpen = false;
        } else {
            section[0].style.width = '40%'; 
            toggleButton.style.marginLeft = '0'; 
            arrowImg.style.transform = 'rotateZ(180deg)';
            tableSection.style.width = '80%';

            tableImgArray.forEach(function(imagem) {
                imagem.style.width = "100%";
            });
            isOpen = true;
            
        }
    });}
    
    
    //Add Imagem de link antes da tag "a"
    {const links = document.querySelectorAll('.root-section a');
    function adicionarImagem(link) {
        const imagem = document.createElement('img');
        imagem.src = 'link.png'; 
        imagem.alt = 'Ícone de Link';
        imagem.className = 'icone-link';
        
        link.insertBefore(imagem, link.firstChild);
    }
    
    links.forEach(function(link) {
        adicionarImagem(link);
    });}
    
    
    // Adiciona um evento scroll de clique à seta para cima/baixo
    {document.getElementById("arrow-down").addEventListener("click", function() {
        // Role para baixo quando a seta para baixo é clicada
        document.querySelector(".scrollable-section").scrollTop += 20; // Você pode ajustar a quantidade de rolagem conforme necessário
    });
    
    // Adiciona um evento de clique à seta para cima
    document.getElementById("arrow-up").addEventListener("click", function() {
        // Role para cima quando a seta para cima é clicada
        document.querySelector(".scrollable-section").scrollTop -= 20; // Você pode ajustar a quantidade de rolagem conforme necessário
    });}
    
    //Adicionar class Selected nos botoes selecionados do perfil
    {function handleButtonClick() {
        // Remove a classe adicional de todos os botões
        var buttons = document.querySelectorAll(".btn-right-side");
        buttons.forEach(function(button) {
            button.classList.remove("button-selected");
        });
        
        // Adiciona a classe adicional apenas ao botão clicado
        this.classList.add("button-selected");
    }
    
    // Seleciona todos os botões com a classe "btn"
    var buttons = document.querySelectorAll(".btn-right-side");
    
    // Itera sobre cada botão e adiciona um event listener
    buttons.forEach(function(button) {
        button.addEventListener("click", handleButtonClick);
    });}
    
    
    {
        var defaultValueImgImg = null;
        
        const imgsAlvo = document.querySelectorAll(".posts-img");
        imgsAlvo.forEach(img => {
            
            img.addEventListener("mouseenter", changeImageSize);
            img.addEventListener("mouseleave", revertImageSize);
        });
        
        var button = null;
        
        function changeImageSize(){
            var t1 = this.style.width;
            if (t1 == '80%'){
                this.style.width = '75%';
            } else{
                this.style.width = '90%';
            }
        }
        
        
        function revertImageSize(){
            var t1 = this.style.width;
            if (t1 == '75%'){
                this.style.width = '80%';
            } else{
                this.style.width = '100%';
            }
        }
    }