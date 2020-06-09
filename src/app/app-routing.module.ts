import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreationCompteComponent } from './creation-compte/creation-compte.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { PropsComponent } from './props/props.component';
import { HomeEmComponent } from './home-em/home-em.component';
import { HomeRPComponent } from './home-rp/home-rp.component';
import { GestionUserComponent } from './gestion-user/gestion-user.component';
import { AjoutOFComponent } from './ajout-of/ajout-of.component';
import { GestionOfComponent } from './gestion-of/gestion-of.component';
import { TableauComponent } from './tableau/tableau.component';
import { GestionOrdreFabComponent } from './gestion-ordre-fab/gestion-ordre-fab.component';
import { ChartsRapportComponent } from './charts-rapport/charts-rapport.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';
import { DiffuserNotifComponent } from './diffuser-notif/diffuser-notif.component';
import { NotifsComponent } from './notifs/notifs.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [{
  path:'',
  component:FirstPageComponent
},
{
  path:'gestionUser',
  component:GestionUserComponent
},

{ path:'login',
component:LoginComponent
  
},
{ path:'ajoutOf',
component:AjoutOFComponent
  
},

{ path:'ajoutProduit',
component:AjoutProduitComponent
  
},
{ path:'gestionProduit',
component:GestionProduitComponent
  
},
{ path:'ajoutClient',
component:AjoutClientComponent
  
},
{ path:'gestionOf',
component:GestionOfComponent
  
},
{ path:'ordresFab',
component:GestionOrdreFabComponent
  
},
{ path:'creationCompte',
component:CreationCompteComponent
  
},
{ path:'home',
component:HomeComponent
  
},
{ path:'tableau',
component:TableauComponent
  
},
{ path:'homeEm',
component:HomeEmComponent
  
},
{ path:'homeRp',
component:HomeRPComponent
  
},
{ path:'props',
component:PropsComponent
  
},
{ path:'charts',
component:ChartsRapportComponent
  
},
{ path:'diffuserNotif',
component:DiffuserNotifComponent
  
},
{ path:'Notifs',
component:NotifsComponent
  
},
{ path: 'logout', 
component: LogoutComponent

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
