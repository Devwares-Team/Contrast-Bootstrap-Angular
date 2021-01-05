import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { DropdownToggleComponent } from './dropdown-toggle/dropdown-toggle.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';

@NgModule({
  declarations: [
    DropdownComponent,
    DropdownToggleComponent,
    DropdownMenuComponent,
    DropdownItemComponent,
  ],
  imports: [CommonModule],
  exports: [
    DropdownComponent,
    DropdownToggleComponent,
    DropdownMenuComponent,
    DropdownItemComponent,
  ],
})
export class DropdownModule {}
