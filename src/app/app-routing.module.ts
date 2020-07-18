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
import { RapportsComponent } from './rapports/rapports.component';
import { ConsulterSeuilComponent } from './consulter-seuil/consulter-seuil.component';
import { DefinirSeuilComponent } from './definir-seuil/definir-seuil.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { InfosPersoComponent } from './infos-perso/infos-perso.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { UpdateOFComponent } from './update-of/update-of.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { AjoutEtapeComponent } from './ajout-etape/ajout-etape.component';
import { GestionEtapeComponent } from './gestion-etape/gestion-etape.component';
import { LesProduitsComponent } from './les-produits/les-produits.component';
import { TableComponent } from './table/table.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
//import { UpdateUserComponent } from './update-user/update-user.component';


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
{ path:'gestionClient',
component:GestionClientComponent
  
},
{ path:'gestionOf',
component:GestionOfComponent
  
},
{ path:'ordresFab',
component:GestionOrdreFabComponent
  
},
{ path:'produits',
component:LesProduitsComponent
  
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
{ path:'rapports',
component:RapportsComponent
  
},
{ path:'diffuserNotif',
component:DiffuserNotifComponent
  
},
{ path:'Notifs',
component:NotifsComponent
  
},
{ path:'consultSeuil',
component:ConsulterSeuilComponent
  
},
{ path:'defSeuil',
component:DefinirSeuilComponent
  
},
{ path:'infoPerso',
component:InfosPersoComponent
  
},
{ path:'forgetPassword',
component:ForgetPasswordComponent
  
},

{ path:'updateUser',
component:UpdateUserComponent
  
},
{ path:'updateProduit/:idProduit',
component:UpdateProduitComponent
  
},
{ path:'updateOF/:idOf',
component:UpdateOFComponent
  
},

{ path:'updateClient/:idClient',
component:UpdateClientComponent
  
},
{ path:'ajoutEtape',
component:AjoutEtapeComponent
  
},
{ path:'gestionEtape',
component:GestionEtapeComponent
  
},
{ path:'suiviProd',
component:TableComponent
  
},
{ path:'tableauDeBord',
component:TableauBordComponent
  
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
