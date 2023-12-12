let fecharopcao = 0
        let opcao = document.getElementById("opcao")
        let opcaoaberta = document.getElementById("opcaoaberta")

        let menu = document.getElementById("menu")
        let habilidades = document.getElementById("habilidades")
        let contato = document.getElementById("contato")
        let projetos = document.getElementById("projetos")
        let sobremim = document.getElementById("sobremim")

        let pagina = document.location.pathname

        document.getElementById("opcao").addEventListener("click", function abriropcoes() {
            if(fecharopcao == 0){
            fecharopcao = 1
            opcaoaberta.classList.add("abrir")
            document.getElementById("menu").innerHTML = "Menu"
            document.getElementById("habilidades").innerHTML = "Habilidades"
            document.getElementById("projetos").innerHTML = "Projetos"
            document.getElementById("sobremim").innerHTML = "Sobre mim"
            }else{
                opcaoaberta.classList.remove("abrir")
                fecharopcao = 0
                document.getElementById("menu").innerHTML = ""
            document.getElementById("habilidades").innerHTML = ""
            document.getElementById("projetos").innerHTML = ""
            document.getElementById("sobremim").innerHTML = ""
            }
        })
        opcao.addEventListener("mouseenter", function rotacionar() {
            opcao.style.transform = "rotate(180deg)"
        })
        opcao.addEventListener("mouseleave", function rotacionarAoContrario() {
            opcao.style.transform = "rotate(-180deg)"
            }
        )
        
        if(pagina == "http://127.0.0.1/"){
            menu.style.textDecoration = "underline"
            menu.style.textDecorationColor = "purple"
            menu.style.cursor = "default"
        }
        if(pagina == "/index.html"){
            menu.style.textDecoration = "underline"
            menu.style.textDecorationColor = "purple"
            menu.style.cursor = "default"
        }
        if(pagina == "/habilidades.html") {
            habilidades.style.textDecoration = "underline"
            habilidades.style.textDecorationColor = "purple"
            habilidades.style.cursor = "default"
        }
        if(pagina == "/projetos.html"){
            projetos.style.textDecoration = "underline"
            projetos.style.textDecorationColor = "purple"
            projetos.style.cursor = "default"
        }
        if(pagina == "/sobremim.html"){
            sobremim.style.textDecoration = "underline"
            sobremim.style.textDecorationColor = "purple"
            sobremim.style.cursor = "default"
        }
        menu.addEventListener("click", function entrarmenu() {
            document.getElementById("linkmenu").href = "index.html"
        })
        habilidades.addEventListener("click", function  entrarHabilidades() {
        document.getElementById("linkhabilidades").href = "habilidades.html"
        })
        projetos.addEventListener("click", function entrarprojetos() {
            document.getElementById("linkprojetos").href = "projetos.html"
        })
        sobremim.addEventListener("click", function entrarsobremim () {
            document.getElementById("linksobremim").href = "sobremim.html"
        })
        /*
        menu.addEventListener("mouseenter", function adicionarunderlinepromenu() {
        projetos.addEventListener()
        sobremim.addEventListener()
      */