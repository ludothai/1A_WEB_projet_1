/* Fonction constructeur Robot */
function Robot(x, y, vitesse, couleur) {
    this.posX    = x;
    this.posY    = y;
    this.temps   = vitesse;
    this.couleur = couleur;
    this.timeID  = null;
    this.eveille = false;
}

Robot.prototype.dessin = function(ctx, dx, dy){
    ctx.beginPath();
    ctx.fillStyle = this.couleur;
    ctx.arc(this.posX*dx + dx/2 , this.posY*dx + dy/2, dx/3, 0, 2* Math.PI);
    ctx.fill();
};

Robot.prototype.perception = function(){

    var tabMvt = []; //contient les possibilités de mouvements

    // Remplit tabMvt
    if (gr.mvtAdmis(this, 0, -gr.dY)) {
        tabMvt.push("Up");
    }
    if (gr.mvtAdmis(this, 0, gr.dY)) {
        tabMvt.push("Down");
    }
    if (gr.mvtAdmis(this, gr.dX, 0)) {
        tabMvt.push("Right");
    }
    if (gr.mvtAdmis(this, -gr.dX, 0)) {
        tabMvt.push("Left");
    }

    var that = this;

    if(this.eveille){
        setTimeout(function(){
            that.reflexion(tabMvt)}, that.temps*1000);
    }
}

Robot.prototype.reflexion = function(tabMvt){
    var that = this;
    var randInt = getRandomInt(0,tabMvt.length-1);
    var act = tabMvt[randInt]; // choix (aléatoire) du mouvement

    setTimeout(function(){
        that.action(act)}, that.temps*1000);
}

Robot.prototype.action = function(act){
    var mvt = [0,0]; //représente le mouvement: 1er élément = mouvement horizontal (droite / gauche); 2eme élément = mouvement vertical (haut/bas)

    //modifie posX et posY en fonction du mouvement donné par act puis met le mouvement dans le tableau mvt
    switch (act) {
        case "Up":
            this.posY--;
            mvt[1] = -1;
            break;
        case "Down":
            this.posY++;
            mvt[1] = 1;
            break;
        case "Right":
            this.posX++;
            mvt[0] = 1;
            break;
        case "Left":
            this.posX--;
            mvt[0] = -1;
            break;
        default:
            break;
    }

    gr.majDessin(this, mvt[0] * gr.dX, mvt[1] * gr.dY);
    this.perception();
}

/* positionne eveille à TRUE  et lance la boucle perception-reflexion-action */
Robot.prototype.reveille = function(){
    this.eveille = true;
    this.perception();
}
