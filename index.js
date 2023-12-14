let fecharopcao = 0
        let opcao = document.getElementById("opcao")
        let opcaoaberta = document.getElementById("opcaoaberta")

        let menu = document.getElementById("menu")
        let habilidades = document.getElementById("habilidades")
        let contato = document.getElementById("contato")
        let projetos = document.getElementById("projetos")
        let sobremim = document.getElementById("sobremim")

       var verificar = localStorage.getItem("verificar")

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
            opcao.style.transform = "rotate(-90deg)"
        })
        opcao.addEventListener("mouseleave", function rotacionarAoContrario() {
            opcao.style.transform = "rotate(180deg)"
            }
        )
        
        if(verificar == 0){
            menu.style.textDecoration = "underline"
            menu.style.textDecorationColor = "purple"
            menu.style.cursor = "default"
            menu.style.color = "purple"
        }
        
        if(verificar == 1) {
            habilidades.style.textDecoration = "underline"
            habilidades.style.textDecorationColor = "purple"
            habilidades.style.cursor = "default"
            habilidades.style.color = "purple"
        }

        if(verificar == 2){
            projetos.style.textDecoration = "underline"
            projetos.style.textDecorationColor = "purple"
            projetos.style.cursor = "default"
            projetos.style.color = "purple"
        }

        if(verificar == 3){
            sobremim.style.textDecoration = "underline"
            sobremim.style.textDecorationColor = "purple"
            sobremim.style.cursor = "default"
            sobremim.style.color = "purple"
        }
        menu.addEventListener("click", function entrarmenu() {
            document.getElementById("linkmenu").href = "index.html"
            localStorage.setItem("verificar", 0)
        })
        habilidades.addEventListener("click", function  entrarHabilidades() {
        document.getElementById("linkhabilidades").href = "habilidades.html"
        verificar = 1
        localStorage.setItem("verificar", 1)
        })
        projetos.addEventListener("click", function entrarprojetos() {
            document.getElementById("linkprojetos").href = "projetos.html"
            verificar = 2
            localStorage.setItem("verificar", 2)
        })
        sobremim.addEventListener("click", function entrarsobremim () {
            document.getElementById("linksobremim").href = "sobremim.html"
            verificar = 3
            localStorage.setItem("verificar", 3)
        })
        /*
        menu.addEventListener("mouseenter", function adicionarunderlinepromenu() {
        projetos.addEventListener()
        sobremim.addEventListener()
        oi
*/