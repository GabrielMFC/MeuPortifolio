let fecharopcao = 0
        let opcao = document.getElementById("opcao")
        let opcaoaberta = document.getElementById("opcaoaberta")

        let menu = document.getElementById("menu")
        let contato = document.getElementById("contato")

       var verificar = 0

        document.getElementById("opcao").addEventListener("click", function abriropcoes() {
            if(fecharopcao == 0){
            fecharopcao = 1
            opcaoaberta.classList.add("abrir")
            document.getElementById("menu").innerHTML = "Menu"
            document.getElementById("contato").innerHTML = "Contato"
            }else{
                opcaoaberta.classList.remove("abrir")
                fecharopcao = 0
                document.getElementById("menu").innerHTML = ""
            document.getElementById("contato").innerHTML = ""
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
            contato.style.textDecoration = "underline"
            contato.style.textDecorationColor = "purple"
            contato.style.cursor = "default"
            contato.style.color = "purple"
        }

        menu.addEventListener("click", function entrarmenu() {
            document.getElementById("linkmenu").href = "index.html"
            localStorage.setItem("verificar", 0)
        })
        contato.addEventListener("click", function  entrarContato() {
        document.getElementById("linkcontatos").href = "contatos.html"
        localStorage.setItem("verificar", 1)
        })