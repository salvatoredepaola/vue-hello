const { createApp } = Vue

createApp({
        data() {
            return {
                message: 'Hello Vue!',
                testo: 'testo',
                input: 'inputssss',
                titoloprincipale: 'rosso', //rosso = classe css
                immagine: 'https://picsum.photos/200'
        }
    }
}).mount('#app')
