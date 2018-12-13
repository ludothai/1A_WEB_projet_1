function Grille(nbX, nbY, canvasID){

    /* Attributs de l'objet */
    this.nbX    = nbX;
    this.nbY    = nbY;
    this.canvas = document.getElementById(canvasID);
    this.ctx    = this.canvas.getContext("2d");
    this.dX     = this.canvas.width  / nbX;
    this.dY     = this.canvas.height / nbY;
    this.tab    = [[false]*nbY]*nbX;
    this.obj    = [];
    this.nbC    = (nbX)*(nbY);
    this.nbCur  = 0;
}

Grille.prototype.dessinGrille = function(){
    this.ctx.beginPath();
    for(var i = 0; i < this.nbX; i++){
        for(var j = 0; j < this.nbY; j++){
            this.ctx.strokeStyle = "#D3D3D3";
            this.ctx.rect(i*this.dX, j*this.dY, this.dX, this.dY);
        }
    }

    this.ctx.stroke();
    this.ctx.closePath();
}

Grille.prototype.ajoutObjet = function(objet){
    this.tab.push(objet);
    this.nbCur = this.nbCur + 1;
    this.tab[objet.posX][objet.posY] = true;
}

Grille.prototype.dessin = function(){
    for(var i = 0; i <nbCur; i++){
        this.obj[i].dessin();
    }
    this.dessinGrille;
}

Grille.prototype.mvtAdmis = function(objet, dx, dy){
    if ((objet.posX+dx < 0) || (objet.posX+dx > this.canvas.width)){
        return false;
    } else if ((objet.posY+dy < 0) || (objet.posY+dy > this.canvas.width)){
        return false;
    } else if (( (dy+dx)<(-thid.dX)) || (dy+dx)>thid.dX){ //on suppose que dX = dY
        return false;
    }

    return true;
}

Grille.prototype.majDessin = function(objet, dx, dy){
    
}

Grille.prototype.stopObjet = function(){

}
