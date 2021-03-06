import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClipingPage } from './cliping.page';

import { ArticleDetailsPage } from '../article-details/article-details.page'

const routes: Routes = [
  {
    path: '',
    component: ClipingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClipingPage,ArticleDetailsPage],
  entryComponents :[ArticleDetailsPage]
})
export class ClipingPageModule {}
