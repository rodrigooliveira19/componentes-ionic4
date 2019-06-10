import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Instalação',
      url: '/instalacao',
      icon: 'hammer'
    },
    {
      title: 'Layout',
      url: '/layout',
      icon: 'apps'
    },
    {
      title: 'Componentes',
      url: '/componentes',
      icon: 'apps'
    },
    {
      title: 'Nossa Gelada',
      url: '/layout-nossa-gelada',
      icon: 'apps'
    },
    {
      title: 'Todo Conahack',
      url: '/app-todoconahack',
      icon: 'apps'
    },
    {
      title: 'Componentes Nativos',
      url: '/componentes-nativos',
      icon: 'apps'
    },
    {
      title: 'Animações',
      url: '/animacoes',
      icon: 'apps'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
