//Ce Lance au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    const precedent = document.getElementById("precedent");
    const suivant = document.getElementById("suivant");//definie les bouton Precedent et suivant
    
                        if(document.getElementById('page2') != null){
                            const veggie=document.getElementById('page1');
                            const hamburger = document.getElementById('page2');
                            const pasta = document.getElementById('page3');
                            // const wrap = document.getElementById('pageWraps');
                            // const pizza = document.getElementById('pagePizza');
                            // const asianfood = document.getElementById('pageSalade');
                            let page = 1 //Compteur de Page pour le carousel
                            if(document.getElementById("checkplathtml")!=null){
                            hamburger.style.display= 'none';
                            pasta.style.display= 'none';
                            // wrap.style.display= 'none';
                            // pizza.style.display= 'none';
                            // asianfood.style.display='none';
                            // veggie.style.display='none';}//definie et desactive tout les cellule sauf la premiere si checkplat existe
                            
                            
                            suivant.addEventListener('click',function suivant(){
                                page++;
                                if (page > 3) {
                                    page = 1;
                                }
                                pages(page);
                            })//fait tourner le carousel avec Suivant
                        
                        precedent.addEventListener('click',function precedent(){
                            page--;
                            if ( page < 1) {
                                page = 3;
                            }
                            pages(page);
                        })//fait tourner le carousel avec Precedent
                    }
                        
                        
            function pages(page){ //fonctionne pour afficher la page en fonction du compteur page
  
                veggie.style.display= 'none';
                hamburger.style.display= 'none';
                pasta.style.display= 'none';
                // wrap.style.display= 'none';
                // pizza.style.display= 'none';
                // asianfood.style.display='none';
               
                if (page==1) {
                    veggie.style.display= 'block';
                } else if (page==2) {
                    hamburger.style.display= 'block';
                } else if (page==3) {
                    pasta.style.display= 'block';
                }
            }
            }});//fin de fonction
            
            // if(document.getElementById('insertbgimg')!=null){ //regade si insert insertbgimg existe et la fait diparaitre pour la faire faire apparaitre plus tard
            // document.getElementById('insertbgimg').style.display="none";}
            // function commande(N) { //fait apparaitre le formulaire quand l'utilisateur clique sur commander 
                    
            //     if(document.getElementById("Titre")!=null){
            //         document.getElementById("Titre").style.display="none"; //fait disparaitre le titre h1
            //     }
            //         const card = document.getElementsByClassName('card'); // mets dans un tableau toute mes div plat/card
                    
            //         for(let i=0;i<card.length;i++)// fait disparaitre toute les cards
            //         {
            //             card[i].style.display='none';
            //         }
                    
            //         const balisea = document.getElementsByClassName('btn-primary');//mets dans un tableau tout les bouton
                    
            //         for(let i=0;i<balisea.length;i++)//fait disparaitre tout les bouton commander
            //         {
            //             balisea[i].style.display='none';
            //         }
                    
            //         const insertquantite = document.getElementsByClassName('insertquantité'); //mets dans un tableau tout les <span> avec la class isertquantité pour le injecter le menu deroulant 
            //         const ChoixQuantité = document.getElementById("ChoixQuantité").innerHTML; // enregistre dans une constiable le menu dreoulant
            //         document.getElementById("ChoixQuantité").style.display="none";//fait disparaitre le menu deroulant
            //         insertquantite[N].innerHTML= ChoixQuantité ;//insert le menu deroulant dans le <Span> du plat correspondant 
            //         // document.getElementById('img-top').style.display="none"
            //         if(document.getElementById('boutonarmy')!=null){
            //         document.getElementById('boutonarmy').style.display="none";}//regard si les bouton du carousel sont la et les desactives 

            //         document.getElementById('insertbgimg').style.display="block";// fait apparaitre le formulaire
            //         document.getElementById('insertcommande').innerHTML += card[N].innerHTML; //insert le plat dans le formulaire dans la div insertcommande
            //     }
