import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './utiles/sidebar/sidebar.component';
import { TopbarComponent } from './utiles/topbar/topbar.component';
import { FooterComponent } from './utiles/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CreationCompteComponent } from './creation-compte/creation-compte.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { PropsComponent } from './props/props.component';
import { HomeEmComponent } from './home-em/home-em.component';
import { SidebareEmComponent } from './sidebare-em/sidebare-em.component';
import { SidebareRPComponent } from './sidebare-rp/sidebare-rp.component';
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
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { InfosPersoComponent } from './infos-perso/infos-perso.component';
import { ConsulterSeuilComponent } from './consulter-seuil/consulter-seuil.component';
import { DefinirSeuilComponent } from './definir-seuil/definir-seuil.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ListeClientComponent } from './liste-client/liste-client.component';

//import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: 'doughnut-chart', component: MyDoughnutChartComponent},
  {path: 'radar-chart', component: MyRadarChartComponent},
  {path: 'pie-chart', component: MyPieChartComponent},

];


@NgModule({
  declarations: [
    AppComponent,
 
    HomeComponent,
  
    SidebarComponent,
  
    TopbarComponent,
  
    FooterComponent,
  
    LoginComponent,
  
    CreationCompteComponent,
  
    FirstPageComponent,
  
    PropsComponent,
  
    HomeEmComponent,
  
    SidebareEmComponent,
  
    SidebareRPComponent,
  
    HomeRPComponent,
  
    GestionUserComponent,
  
    AjoutOFComponent,
  
    GestionOfComponent,
  
    TableauComponent,
  
    GestionOrdreFabComponent,
  
    ChartsRapportComponent,
    AjoutProduitComponent,
    AjoutClientComponent,
    GestionProduitComponent,
    DiffuserNotifComponent,
    NotifsComponent,
    RapportsComponent,
    MyBarChartComponent,
    MyDoughnutChartComponent,
    MyRadarChartComponent,
    MyPieChartComponent,
    InfosPersoComponent,
    ConsulterSeuilComponent,
    DefinirSeuilComponent,
    GestionClientComponent,
    ForgetPasswordComponent,
    UpdateUserComponent,
    UpdateProduitComponent,
    UpdateOFComponent,
    UpdateClientComponent,
    AjoutEtapeComponent,
    GestionEtapeComponent,
    LesProduitsComponent,
    TableauBordComponent,
    TableauBordComponent,
    ListeClientComponent,
    //SuiviProdComponent,
    //UpdateUserComponent,

  
   
  
  
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ChartsModule
  
    
  ],
 
  
  providers: [authInterceptorProviders],

  bootstrap: [AppComponent]
})
export class AppModule { }
