/* Fonction constructeur Robot */

function Robot(x, y, vitesse, couleur) {
    this.posX    = x;
    this.posY    = y;
    this.temps   = vitesse;
    this.couleur = couleur;
    this.timeID;
    this.eveille = false;
}

Robot.prototype.dessin = function(ctx, dx, dy){

    ctx.beginPath();
    ctx.fillStyle = this.couleur
    ctx.arc(this.posX*dx + dx/2 , this.posY*dx + dy/2, dx/3, 0, 2* Math.PI);
    ctx.fill()

};

Robot.prototype.perception = function(Grille){

    var tabMvt = [];
    if (Grille.mvtAdmis(Robot, 0, Grille.dY)) {
        tabMvt.push("Up");
    }
    if (Grille.mvtAdmis(Robot, 0, -Grille.dY)) {
        tabMvt.push("Down");
    }
    if (Grille.mvtAdmis(Robot, Grille.dX,0)) {
        tabMvt.push("Right");
    }
    if (Grille.mvtAdmis(Robot, -Grille.dX,0)) {
        tabMvt.push("Left");
    }

    return tabMvt;
}

Robot.prototype.reflexion   = function(tabMvt){

    var randInt = getRandomInt(0,tabMvt.lenght);
    var act     = tabMvt(randInt);

    return act;
}

Robot.prototype.action = function(act,Grille){

    switch (act) {
        case "Up":
            this.posY++;
            break;
        case "Down":
            this.posY--;
            break;
        case "Right":
            this.posY++;
            break;
        case "Left":
            this.posY--;
            break;
    
        default:
            break;
    }
}

/* positionne eveille à TRUE  et lance la boucle perception-reflexion-action*/
Robot.prototype.reveille = function(){
    this.eveille = true;

    while(this.eveille){
        var tabMvt = this.perception(Grille);
        var act    = this.reflexion(tabMvt);
        this.action(act);
    }

}
