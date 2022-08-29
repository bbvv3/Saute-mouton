
etatDuJeu = ['>', '>', '>', ' ', '<', '<', '<'];

/********************************************************/
function place(col){
    const carre = etatDuJeu[col-1];
    let indice = stuck(col);
    const valeur = "col".concat(col);
    let selection = document.getElementById(valeur);
    switch (indice){
        case 2: selection.style.backgroundImage = "url('./images/casevide.jpg')";
                if (carre === '>'){
                    let val2 = "col".concat(col+2);
                    etatDuJeu[col+1] = '>';
                    selection = document.getElementById(val2);
                    selection.style.backgroundImage = "url('./images/moutonGauche.jpg')";
                }else{
                    let val2 = "col".concat(col-2);
                    etatDuJeu[col-3] = '<';
                    selection = document.getElementById(val2);
                    selection.style.backgroundImage = "url('./images/moutonDroite.jpg')";
                }
                etatDuJeu[col-1] = ' ';
                break;
        case 1: selection.style.backgroundImage = "url('./images/casevide.jpg')";
                if (carre === '>'){
                    let val2 = "col".concat(col+1);
                    etatDuJeu[col] = '>';
                    selection = document.getElementById(val2);
                    selection.style.backgroundImage = "url('./images/moutonGauche.jpg')";
                }else{
                    let val2 = "col".concat(col-1);
                    etatDuJeu[col-2] = '<';
                    selection = document.getElementById(val2);
                    selection.style.backgroundImage = "url('./images/moutonDroite.jpg')";
                }
                etatDuJeu[col-1] = ' ';
                break; 
    }
    test();
}

/********************************************************/
function stuck(col){
    const carre = etatDuJeu[col-1];
    
    switch (carre){
        case ' ' : return 0; break;
        case '>' : let suivant = etatDuJeu[col];
                    switch (col){ 
                        case 7 : return -1; break;
                        case 6 :if (suivant === ' '){
                                    return 1;
                                }else{
                                    return -1;
                                }break;
                        default :if (suivant === ' '){
                                    return 1;
                                }else{
                                    suivant = etatDuJeu[col+1];
                                    if (suivant === ' '){
                                        return 2;
                                    }else{
                                        return -1;
                                    }
                                }
                        break;
                    }
        break;
        case '<' : let suivant2 = etatDuJeu[0];
                    switch (col){ 
                        case 0 : return -1; break;
                        case 1 :if (suivant2 === ' '){
                                    return 1;
                                }else{
                                    return -1;
                                }break;
                        default :suivant2 = etatDuJeu[col-2];
                                if (suivant2 === ' '){
                                    return 1;
                                }else{
                                    suivant2 = etatDuJeu[col-3];
                                    if (suivant2 === ' '){
                                        return 2;
                                    }else{
                                        return -1;
                                    }
                                }
                        break;
                    }
        break;
    }
}
        
/********************************************************/
function test(){
    let cpt = 0;
    let tour = 0;
    for (let i = 1; i<8; i++) {
        cpt = cpt + stuck(i);
    }
    if (cpt === -6){
        for (let i = 0; i<3; i++){
            if(etatDuJeu[i] === '<'){
                tour = tour + 1;
            }
            if(etatDuJeu[6-i] === '>'){
                tour = tour + 1;
            }
        }
        if(etatDuJeu[3] === ' ' && tour === 6) {modal(true);}
        else{modal(false);}
    }
}

/********************************************************/
function modal(win){
    let panneau = document.getElementById("myModal");
    let titre = document.querySelector("#myModal h1");
    panneau.style.display = "block";
    if (win){
        titre.innerText = "GAGNÉ";
    }else{
        titre.innerText = "PERDU";
    }
    setTimeout(function(){panneau.style.display = "none"},2000);
}

/********************************************************/
function nouvellePartie(){
    for (let i = 0; i < 3; i++){
        let valeur = "col".concat(i+1);
        let selection = document.getElementById(valeur);
        selection.style.backgroundImage = "url('./images/moutonGauche.jpg')"
        valeur = "col".concat(7-i);
        selection = document.getElementById(valeur);
        selection.style.backgroundImage = "url('./images/moutonDroite.jpg')"
        console.log(i)
        console.log(7-i)
    }
    selection = document.getElementById("col4");
    selection.style.backgroundImage = "url('./images/casevide.jpg')";
    etatDuJeu = ['>', '>', '>', ' ', '<', '<', '<'];
}
