/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
export class TooltipWrapperComponent {
}
TooltipWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-slider-tooltip-wrapper',
                template: `<ng-container *ngIf="template">
  <ng-template *ngTemplateOutlet="template; context: {tooltip: tooltip, placement: placement, content: content}"></ng-template>
</ng-container>

<ng-container *ngIf="!template">
  <div class="ngx-slider-inner-tooltip" [attr.title]="tooltip" [attr.data-tooltip-placement]="placement">
    {{content}}
  </div>
</ng-container>`,
                styles: [`.ngx-slider-inner-tooltip{height:100%}`]
            },] },
];
TooltipWrapperComponent.propDecorators = {
    template: [{ type: Input }],
    tooltip: [{ type: Input }],
    placement: [{ type: Input }],
    content: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TooltipWrapperComponent.prototype.template;
    /** @type {?} */
    TooltipWrapperComponent.prototype.tooltip;
    /** @type {?} */
    TooltipWrapperComponent.prototype.placement;
    /** @type {?} */
    TooltipWrapperComponent.prototype.content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXNsaWRlci9uZ3gtc2xpZGVyLyIsInNvdXJjZXMiOlsidG9vbHRpcC13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZTlELE1BQU07OztZQWJMLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxRQUFRLEVBQUU7Ozs7Ozs7O2dCQVFJO2dCQUNkLE1BQU0sRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2FBQ25EOzs7dUJBRUUsS0FBSztzQkFHTCxLQUFLO3dCQUdMLEtBQUs7c0JBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1zbGlkZXItdG9vbHRpcC13cmFwcGVyJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0lmPVwidGVtcGxhdGVcIj5cbiAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IHt0b29sdGlwOiB0b29sdGlwLCBwbGFjZW1lbnQ6IHBsYWNlbWVudCwgY29udGVudDogY29udGVudH1cIj48L25nLXRlbXBsYXRlPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhdGVtcGxhdGVcIj5cbiAgPGRpdiBjbGFzcz1cIm5neC1zbGlkZXItaW5uZXItdG9vbHRpcFwiIFthdHRyLnRpdGxlXT1cInRvb2x0aXBcIiBbYXR0ci5kYXRhLXRvb2x0aXAtcGxhY2VtZW50XT1cInBsYWNlbWVudFwiPlxuICAgIHt7Y29udGVudH19XG4gIDwvZGl2PlxuPC9uZy1jb250YWluZXI+YCxcbiAgc3R5bGVzOiBbYC5uZ3gtc2xpZGVyLWlubmVyLXRvb2x0aXB7aGVpZ2h0OjEwMCV9YF1cbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcFdyYXBwZXJDb21wb25lbnQge1xuICBASW5wdXQoKVxuICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICB0b29sdGlwOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcGxhY2VtZW50OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY29udGVudDogc3RyaW5nO1xufVxuIl19