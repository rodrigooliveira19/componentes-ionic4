import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'instalacao', 
    loadChildren: './instalacao/instalacao.module#InstalacaoPageModule' },

  { path: 'layout',
    loadChildren: './layout/layout.module#LayoutPageModule' },

  { path: 'layout-header-footer', 
    loadChildren: './layout-header-footer/layout-header-footer.module#LayoutHeaderFooterPageModule' },
    
  { path: 'layout-tabs', 
    loadChildren: './layout-tabs/layout-tabs.module#LayoutTabsPageModule' },

  { path: 'layout-menu', 
    loadChildren: './layout-menu/layout-menu.module#LayoutMenuPageModule' },

  { path: 'layout-split-pane', 
    loadChildren: './layout-split-pane/layout-split-pane.module#LayoutSplitPanePageModule' },

  { path: 'layout-grid', 
    loadChildren: './layout-grid/layout-grid.module#LayoutGridPageModule' },

  { path: 'layout-css-utilities', 
    loadChildren: './layout-css-utilities/layout-css-utilities.module#LayoutCssUtilitiesPageModule' },

  { path: 'componentes', 
    loadChildren: './componentes/componentes.module#ComponentesPageModule' },

  { path: 'layout-input', 
    loadChildren: './layout-input/layout-input.module#LayoutInputPageModule' },

  { path: 'layout-list', 
    loadChildren: './layout-list/layout-list.module#LayoutListPageModule' },

  { path: 'layout-nossa-gelada', 
    loadChildren: './layout-nossa-gelada/layout-nossa-gelada.module#LayoutNossaGeladaPageModule' },

  { path: 'layout-estabelecimento', 
    loadChildren: './layout-estabelecimento/layout-estabelecimento.module#LayoutEstabelecimentoPageModule' },

  { path: 'layout-estabelecimento-tab', 
    loadChildren: './layout-estabelecimento-tab/layout-estabelecimento-tab.module#LayoutEstabelecimentoTabPageModule' },

  { path: 'componente-action-sheet', 
    loadChildren: './componente-action-sheet/componente-action-sheet.module#ComponenteActionSheetPageModule' },
    
  { path: 'componente-alert', 
    loadChildren: './componente-alert/componente-alert.module#ComponenteAlertPageModule' },

  { path: 'badges', 
    loadChildren: './badges/badges.module#BadgesPageModule' },

  { path: 'componente-badges', 
    loadChildren: './componente-badges/componente-badges.module#ComponenteBadgesPageModule' },

  { path: 'componente-botao',
     loadChildren: './componente-botao/componente-botao.module#ComponenteBotaoPageModule' },

  { path: 'componente-card',
     loadChildren: './componente-card/componente-card.module#ComponenteCardPageModule' },

  { path: 'componente-checkbox',
     loadChildren: './componente-checkbox/componente-checkbox.module#ComponenteCheckboxPageModule' },

  { path: 'componente-radio', 
    loadChildren: './componente-radio/componente-radio.module#ComponenteRadioPageModule' },

  { path: 'componente-datetime',
   loadChildren: './componente-datetime/componente-datetime.module#ComponenteDatetimePageModule' },

  { path: 'componente-loading', 
    loadChildren: './componente-loading/componente-loading.module#ComponenteLoadingPageModule' },

  { path: 'componente-modal', 
    loadChildren: './componente-modal/componente-modal.module#ComponenteModalPageModule' },

  { path: 'componente-range', 
    loadChildren: './componente-range/componente-range.module#ComponenteRangePageModule' },

  { path: 'componente-spinner', 
    loadChildren: './componente-spinner/componente-spinner.module#ComponenteSpinnerPageModule' },

  { path: 'componente-toast', 
    loadChildren: './componente-toast/componente-toast.module#ComponenteToastPageModule' },

  { path: 'componente-infinit-scroll', 
    loadChildren: './componente-infinit-scroll/componente-infinit-scroll.module#ComponenteInfinitScrollPageModule' },

  { path: 'componente-popover',
     loadChildren: './componente-popover/componente-popover.module#ComponentePopoverPageModule' },

  { path: 'componente-refresher', 
    loadChildren: './componente-refresher/componente-refresher.module#ComponenteRefresherPageModule' },

  { path: 'componente-searchbar', 
    loadChildren: './componente-searchbar/componente-searchbar.module#ComponenteSearchbarPageModule' },

  { path: 'componente-searchbar-youtube', 
    loadChildren: './componente-searchbar-youtube/componente-searchbar-youtube.module#ComponenteSearchbarYoutubePageModule' },

  { path: 'componente-toggle', 
    loadChildren: './componente-toggle/componente-toggle.module#ComponenteTogglePageModule' },

  { path: 'app-todoconahack', 
    loadChildren: './app-todoconahack/app-todoconahack.module#AppTodoconahackPageModule' },

  { path: 'componentes-nativos', 
    loadChildren: './componentes-nativos/componentes-nativos.module#ComponentesNativosPageModule' },

  { path: 'componente-nativo-camera', 
    loadChildren: './componente-nativo-camera/componente-nativo-camera.module#ComponenteNativoCameraPageModule' },

  { path: 'componente-texttospeech',
    loadChildren: './componente-texttospeech/componente-texttospeech.module#ComponenteTexttospeechPageModule' },
  
  { path: 'minha-tabs', 
    loadChildren: './minha-tabs/minha-tabs.module#MinhaTabsPageModule' },

  { path: 'tab1', 
    loadChildren: './tab1/tab1.module#Tab1PageModule' },

  { path: 'tab2', 
    loadChildren: './tab2/tab2.module#Tab2PageModule' },

  { path: 'layout-css-utilities-two', 
    loadChildren: './layout-css-utilities-two/layout-css-utilities-two.module#LayoutCssUtilitiesTwoPageModule' },

  { path: 'componente-fab', 
    loadChildren: './componente-fab/componente-fab.module#ComponenteFabPageModule' },

  { path: 'componente-select', 
    loadChildren: './componente-select/componente-select.module#ComponenteSelectPageModule' },

  { path: 'modal-page-interno', 
    loadChildren: './modal-page-interno/modal-page-interno.module#ModalPageInternoPageModule' },
  { path: 'animacoes', loadChildren: './animacoes/animacoes.module#AnimacoesPageModule' },  { path: 'componente-midia', loadChildren: './componente-midia/componente-midia.module#ComponenteMidiaPageModule' },
  { path: 'componente-media-capture', loadChildren: './componente-media-capture/componente-media-capture.module#ComponenteMediaCapturePageModule' },
  { path: 'comp-media-capture-ionic-academy', loadChildren: './comp-media-capture-ionic-academy/comp-media-capture-ionic-academy.module#CompMediaCaptureIonicAcademyPageModule' },


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
