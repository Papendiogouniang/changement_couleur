// Attend que le DOM (Document Object Model) soit complètement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function() {
    // 1. SÉLECTION DES ÉLÉMENTS DU DOM
    // Récupère la boîte de couleur par son ID
    const colorBox = document.getElementById('color-box');
    // Récupère le bouton par son ID
    const changeColorBtn = document.getElementById('change-color-btn');
    
    // 2. FONCTION DE GÉNÉRATION DE COULEUR ALÉATOIRE
    function getRandomColor() {
        /**
         * Génère une couleur RGB aléatoire
         * Math.random() génère un nombre entre 0 (inclus) et 1 (exclus)
         * Multiplié par 256 (0-255 pour les valeurs RGB)
         * Math.floor() arrondit à l'entier inférieur
         */
        const r = Math.floor(Math.random() * 256); // Composante rouge (0-255)
        const g = Math.floor(Math.random() * 256); // Composante verte (0-255)
        const b = Math.floor(Math.random() * 256); // Composante bleue (0-255)
        
        // Retourne la couleur au format "rgb(r, g, b)"
        return `rgb(${r}, ${g}, ${b})`;
        
       
    }
    
    // 3. GESTION DE L'INTERACTIVITÉ
    // Ajoute un écouteur d'événement sur le bouton
    changeColorBtn.addEventListener('click', function() {
        // Génère une nouvelle couleur aléatoire
        const newColor = getRandomColor();
        // Applique la nouvelle couleur à la boîte
        colorBox.style.backgroundColor = newColor;
        
        // Affiche la valeur de la couleur dans la console (pour débogage)
        console.log("Nouvelle couleur:", newColor);
    });
});
