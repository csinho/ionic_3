import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicío', component: HomePage, icon: "ios-home-outline" },
      { title: 'Busca', component: ListPage, icon: "ios-search-outline" },
      { title: 'Cadastro Domiciliar', component: HomePage, icon: "ios-list-box-outline" },
      { title: 'Família', component: HomePage, icon: "ios-list-box-outline" },
      { title: 'Cadastro Individual', component: HomePage, icon: "ios-list-box-outline" },
      { title: 'Atividade Coletiva', component: HomePage, icon: "ios-list-box-outline" },
      { title: 'Eventos', component: HomePage, icon: "ios-calendar-outline" },
      { title: 'Sicronização', component: HomePage, icon: "ios-cloud-done-outline" },
      { title: 'Sistema Web', component: HomePage, icon: "md-globe" },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
