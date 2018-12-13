/* Définition d'une fonction constructeur de nom Grille */

function Grille(nbX, nbY, canvaID){

    /* Attributs de l'objet */
    this.nbX   = nbX;
    this.nbY   = nbY;
    this.canva = canvaID;
    this.ctx   = this.canva.getContext("2d");
    this.dX    = 350/nbX;
    this.dY    = 350/nbY;
    this.tab   = [[]];
    this.obj   = [];
    this.nbC   = (nbX)*(nbY);
    this.nbCur = 0;
}
