import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputgroupComponent } from './inputgroup.component';
import { InputModule } from './../input/input.module';
import { IconModule } from "../icon/icon.module";

@NgModule({
    declarations: [InputgroupComponent],
    exports: [InputgroupComponent],
    imports: [CommonModule, InputModule, IconModule]
})
export class InputgroupModule {}
