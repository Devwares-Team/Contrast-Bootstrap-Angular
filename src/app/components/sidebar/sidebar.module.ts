import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarMenuitemComponent } from './sidebar-menuitem/sidebar-menuitem.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { SidebarService } from './sidebar.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarMenuitemComponent,
    SidebarMenuComponent,
    SidebarHeaderComponent,
    SidebarFooterComponent,
    SidebarContentComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SidebarComponent,
    SidebarMenuitemComponent,
    SidebarMenuComponent,
    SidebarHeaderComponent,
    SidebarFooterComponent,
    SidebarContentComponent,
  ],
  providers: [SidebarService],
})
export class SidebarModule {}
