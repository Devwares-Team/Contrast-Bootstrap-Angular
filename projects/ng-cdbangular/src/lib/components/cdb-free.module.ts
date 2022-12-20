import { IconModule } from './icon/icon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from './accordion/accordion.module';
import { AlertModule } from './alert/alert.module';
import { AnimationModule } from './animation/animation.module';
import { BadgeModule } from './badge/badge.module';
import { BoxModule } from './box/box.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { ButtonModule } from './button/button.module';
import { ButtongroupModule } from './buttongroup/buttongroup.module';
import { ButtontoolbarModule } from './buttontoolbar/buttontoolbar.module';
import { CarouselModule } from './carousel/carousel.module';
import { CardModule } from './card/card.module';
import { CloseiconModule } from './closeicon/closeicon.module';
import { CollapseModule } from './collapse/collapse.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { FooterModule } from './footer/footer.module';
import { IframeModule } from './iframe/iframe.module';
import { InputModule } from './input/input.module';
import { InputgroupModule } from './inputgroup/inputgroup.module';
import { LinkModule } from './link/link.module';
import { ListgroupModule } from './listgroup/listgroup.module';
import { MaskModule } from './mask/mask.module';
import { ModalModule } from './modal/modal.module';
import { NavbarModule } from './navbar/navbar.module';
import { PaginationModule } from './pagination/pagination.module';
import { ProgressModule } from './progress/progress.module';
import { SelectModule } from './select/select.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { SliderModule } from './slider/slider.module';
import { SpinnerModule } from './spinner/spinner.module';
import { SwitchModule } from './switch/switch.module';
import { TableModule } from './table/table.module';
import { ViewModule } from './view/view.module';
import { IconComponent } from './icon/icon.component';

export {
  AccordionModule,
  AccordionComponent,
  AccordionitemComponent,
} from './accordion/index';

export { AlertModule, AlertComponent } from './alert/index';

export { AnimationModule, AnimationComponent } from './animation/index';

export { BadgeModule, BadgeComponent } from './badge/index';

export { BoxModule, BoxComponent } from './box/index';

export { BreadcrumbModule, BreadcrumbComponent } from './breadcrumb/index';

export { ButtonModule, ButtonComponent } from './button/index';

export { ButtongroupModule, ButtongroupComponent } from './buttongroup/index';

export {
  ButtontoolbarModule,
  ButtontoolbarComponent,
} from './buttontoolbar/index';

export {
  CarouselModule,
  CarouselComponent,
  CarouselindicatorComponent,
  CarouselItemComponent,
  CarouselInnerComponent,
  CarouselControlComponent,
} from './carousel/index';

export {
  CardModule,
  CardComponent,
  CardBodyComponent,
  CardImageComponent,
  CardTextComponent,
  CardTitleComponent,
} from './card/index';

export { CloseiconModule, CloseiconComponent } from './closeicon/index';

export { CollapseModule, CollapseComponent } from './collapse/index';

export {
  DropdownModule,
  DropdownComponent,
  DropdownToggleComponent,
  DropdownMenuComponent,
  DropdownItemComponent,
} from './dropdown/index';

export { FooterModule, FooterComponent } from './footer/index';

export { IframeModule, IframeComponent } from './iframe/index';

export { InputModule, InputComponent } from './input/index';

export { InputgroupModule, InputgroupComponent } from './inputgroup/index';

export { LinkModule, LinkComponent } from './link/index';

export {
  ListgroupModule,
  ListgroupComponent,
  ListgroupitemComponent,
} from './listgroup/index';

export { MaskModule, MaskComponent } from './mask/index';

export {
  ModalModule,
  ModalComponent,
  ModalHeaderComponent,
  ModalFooterComponent,
  ModalBodyComponent,
} from './modal/index';

export {
  NavbarModule,
  NavbarComponent,
  NavbarNavComponent,
  NavToggleComponent,
  NavLinkComponent,
  NavItemComponent,
  NavBrandComponent,
} from './navbar/index';

export {
  PaginationModule,
  PaginationComponent,
  PagelinkComponent,
  PageitemComponent,
} from './pagination/index';

export { ProgressModule, ProgressComponent } from './progress/index';

export { SelectModule, SelectComponent } from './select/index';

export {
  SidebarModule,
  SidebarComponent,
  SidebarMenuitemComponent,
  SidebarMenuComponent,
  SidebarHeaderComponent,
  SidebarFooterComponent,
  SidebarContentComponent,
  SidebarService,
} from './sidebar/index';

export { SliderModule, SliderComponent } from './slider/index';

export { SpinnerModule, SpinnerComponent } from './spinner/index';

export { SwitchModule, SwitchComponent } from './switch/index';

export {
  TableModule,
  TableComponent,
  TablePaginationComponent,
  CdbTableScrollDirective,
  CdbTableSortDirective,
  CdbTableDirective,
  TableDirective,
} from './table/index';

export { ViewModule, ViewComponent } from './view/index';

export {IconModule, IconComponent } from './icon/index'

const MODULES = [
  AccordionModule,
  AlertModule,
  AnimationModule,
  BadgeModule,
  BoxModule,
  BreadcrumbModule,
  ButtonModule,
  ButtongroupModule,
  ButtontoolbarModule,
  CarouselModule,
  CardModule,
  CloseiconModule,
  CollapseModule,
  DropdownModule,
  FooterModule,
  IconModule,
  IframeModule,
  InputModule,
  InputgroupModule,
  LinkModule,
  ListgroupModule,
  MaskModule,
  ModalModule,
  NavbarModule,
  PaginationModule,
  ProgressModule,
  SelectModule,
  SidebarModule,
  SliderModule,
  SpinnerModule,
  SwitchModule,
  TableModule,
  ViewModule,
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class CDBFreeModule {}
