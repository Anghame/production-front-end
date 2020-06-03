import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';

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
import { LogoutComponent } from './logout/logout.component';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-htpp-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticateService } from './service/authenticate.service';




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
    LogoutComponent
  
   
  
  
  
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  
    
  ],
  providers: [AuthenticateService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
