// Fonction pour vérifier si l'alerte a déjà été montrée
function checkAlert() {
    // Vérifie si la clé 'alertShown' est présente dans le stockage local
    const alertShown = localStorage.getItem('alertShown');
    
    // Si l'alerte n'a pas été montrée, affichez l'alerte
    if (!alertShown) {
        alert('Bienvenue sur mon portfolio');
        // Enregistrez dans le stockage local que l'alerte a été montrée
        localStorage.setItem('alertShown', 'true');
    }
}

// Appelez la fonction pour vérifier l'alerte
checkAlert();
// Pour réinitialiser l'état de l'alerte (pour la montrer à nouveau)
localStorage.setItem('alertShown', 'true');