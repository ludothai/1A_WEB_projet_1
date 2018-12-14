/* Constructeur de la grille */
function Grille(nbX, nbY, canvasID){

    /* Attributs de l'objet */
    this.nbX    = nbX;
    this.nbY    = nbY;
    this.canvas = document.getElementById(canvasID);
    this.ctx    = this.canvas.getContext("2d");
    this.dX     = this.canvas.width  / nbX;
    this.dY     = this.canvas.height / nbY;
    this.tab    = [];
    this.obj    = [];
    this.nbC    = (nbX)*(nbY);
    this.nbCur  = 0;

    for(i = 0; i < this.nbX; i++){
        this.tab.push([])
        for(j = 0; j < this.nbY; j++){
            this.tab[i].push(false);
        }
    }
}

/* Dessine la grille */
Grille.prototype.dessinGrille = function(){
    this.ctx.beginPath();
    for(var i = 0; i < this.nbX; i++){
        for(var j = 0; j < this.nbY; j++){
            this.ctx.strokeStyle = "#D3D3D3";
            this.ctx.rect(i*this.dX, j*this.dY, this.dX, this.dY);
        }
    }

    this.ctx.stroke(); //dessine le rectangle
    this.ctx.closePath();
}

/* Ajoute un nouvel objet tableau obj, incrément nbCur et positionne à "explorée
 la cellule" */
Grille.prototype.ajoutObjet = function(objet){
    this.obj.push(objet);
    this.nbCur = this.nbCur + 1;
    this.tab[objet.posX][objet.posY] = true;
}

/* Dessin les objets sur la grille */
Grille.prototype.dessin = function(){
    for(var i = 0; i < this.nbCur; i++){
        this.obj[i].dessin(this.ctx, this.dX, this.dY);
    }
    this.dessinGrille();
}

/* Retourne TRUE si l'objet peut se déplacer d'un mouvement de (dx, dy) */
Grille.prototype.mvtAdmis = function(objet, dx, dy){
    if ((objet.posX+dx < 0) || (objet.posX+dx > this.canvas.width)){
        return false;
    } else if ((objet.posY+dy < 0) || (objet.posY+dy > this.canvas.width)){
        return false;
    } else {
        return true;
    }
}

/* met à jour l'affichage d'un objet suite à son déplacement sur la grille
de (dx, dy) */
Grille.prototype.majDessin = function(objet, dx, dy){
    this.ctx.clearRect(objet.posX + dx, objet.posY + dy, this.dX, this.dY);
    
    objet.dessin(this.ctx, dx, dy);
}

/* Annule le déplacement de tous les objets en les rendant endormis */
Grille.prototype.stopObjet = function(){
    for (var i = 0; i < this.nbCur; i++){
        this.obj[i].eveille = false;
    }
}
