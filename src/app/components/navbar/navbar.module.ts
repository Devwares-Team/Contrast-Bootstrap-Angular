import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarNavComponent } from './navbar-nav/navbar-nav.component';
import { NavToggleComponent } from './nav-toggle/nav-toggle.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavBrandComponent } from './nav-brand/nav-brand.component';
import { LinkModule } from './../link/link.module';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarNavComponent,
    NavToggleComponent,
    NavLinkComponent,
    NavItemComponent,
    NavBrandComponent,
  ],
  imports: [CommonModule, LinkModule],
  exports: [
    NavbarComponent,
    NavbarNavComponent,
    NavToggleComponent,
    NavLinkComponent,
    NavItemComponent,
    NavBrandComponent,
  ],
})
export class NavbarModule {}
