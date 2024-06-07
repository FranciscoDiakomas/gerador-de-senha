window.onload = function () {
    
    const btn = document.getElementById("btb")
    btn.addEventListener("click",()=>{
        const entrada = document.getElementById("entrada")
        if(String(entrada.value).length === 0){
            window.alert("Entre com o tamanho da senha!")
        }else{
            const span = document.getElementById("senhagerada")
            let limit = 1
            let senha = "";
            let chars = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@_-#*'!\|"
            let pos
            while(entrada.value >= limit){
                pos = chars.charAt(Math.floor(Math.random() * chars.length))
                senha += pos
                limit++
            }
            span.textContent = senha
        }
    })
}