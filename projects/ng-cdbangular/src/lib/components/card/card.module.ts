import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardTextComponent } from './card-text/card-text.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { ViewModule } from './../view/view.module';

@NgModule({
  declarations: [
    CardComponent,
    CardBodyComponent,
    CardImageComponent,
    CardTextComponent,
    CardTitleComponent,
  ],
  imports: [CommonModule,ViewModule],
  exports: [
    CardComponent,
    CardBodyComponent,
    CardImageComponent,
    CardTextComponent,
    CardTitleComponent,
  ],
})
export class CardModule {}
