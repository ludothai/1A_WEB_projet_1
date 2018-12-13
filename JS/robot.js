function Robot(x, y, vitesse, couleur) {
    this.posX    = x;
    this.posY    = y;
    this.temps   = vitesse;
    this.couleur = couleur;
    this.timeID  = NULL;
    this.eveille = false;
}

Grille.prototype.dessin(ctx, dx, dy) = function(){
    };

Grille.prototype.perception()      = function(){
        tabMvt = [];
        if (gr.mvtAdmis(robot, 0,1)) {
            tabMvt.push("Up")
        }
        if (gr.mvtAdmis(robot, 0,-1)) {
            tabMvt.push("Down")
        }
        if (gr.mvtAdmis(robot, 1,0)) {
            tabMvt.push("Right")
        }
        if (gr.mvtAdmis(robot, -1,0)) {
            tabMvt.push("Left")
        }

        return tabMvt;
    }
Grille.prototype.reflexion(tabMvt) = function(){

    }
Grille.prototype.action(act)       = function(){

    }
Grille.prototype.reveille()        = function(){
        
    }
