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

Robot.prototype.perception = function(){

    var tabMvt = [];

    if (gr.mvtAdmis(this, 0, gr.dY)) {
        tabMvt.push("Up");
    }
    if (gr.mvtAdmis(this, 0, -gr.dY)) {
        tabMvt.push("Down");
    }
    if (gr.mvtAdmis(this, gr.dX,0)) {
        tabMvt.push("Right");
    }
    if (gr.mvtAdmis(this, -gr.dX,0)) {
        tabMvt.push("Left");
    }
    if(this.eveille){
        this.reflexion(tabMvt);
    }
}

Robot.prototype.reflexion   = function(tabMvt){

    var randInt = getRandomInt(0,tabMvt.lenght);
    var act     = tabMvt[randInt];

    this.action(act);
}

Robot.prototype.action = function(act){

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

    gr.majDessin(this, gr.dX, gr.dY);
    this.perception();
}

/* positionne eveille à TRUE  et lance la boucle perception-reflexion-action*/
Robot.prototype.reveille = function(){

    this.eveille = true;
    this.perception();
}
