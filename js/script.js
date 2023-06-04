const  menu  =  documento . querySelector ( '.menu' ) ;
const  NavMenu  =  documento . querySelector ( '.nav-menu' ) ;

cardápio . addEventListener ( 'clique' ,  ( )  =>  {
    cardápio . classList . alternar ( 'ativo' ) ;
    NavMenu . classList . alternar ( 'ativo' ) ;
} )