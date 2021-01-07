/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
var TooltipWrapperComponent = /** @class */ (function () {
    function TooltipWrapperComponent() {
    }
    TooltipWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-slider-tooltip-wrapper',
                    template: "<ng-container *ngIf=\"template\">\n  <ng-template *ngTemplateOutlet=\"template; context: {tooltip: tooltip, placement: placement, content: content}\"></ng-template>\n</ng-container>\n\n<ng-container *ngIf=\"!template\">\n  <div class=\"ngx-slider-inner-tooltip\" [attr.title]=\"tooltip\" [attr.data-tooltip-placement]=\"placement\">\n    {{content}}\n  </div>\n</ng-container>",
                    styles: [".ngx-slider-inner-tooltip{height:100%}"]
                },] },
    ];
    TooltipWrapperComponent.propDecorators = {
        template: [{ type: Input }],
        tooltip: [{ type: Input }],
        placement: [{ type: Input }],
        content: [{ type: Input }]
    };
    return TooltipWrapperComponent;
}());
export { TooltipWrapperComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXNsaWRlci9uZ3gtc2xpZGVyLyIsInNvdXJjZXMiOlsidG9vbHRpcC13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztnQkFFN0QsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSwwWEFRSTtvQkFDZCxNQUFNLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQztpQkFDbkQ7OzsyQkFFRSxLQUFLOzBCQUdMLEtBQUs7NEJBR0wsS0FBSzswQkFHTCxLQUFLOztrQ0F6QlI7O1NBZWEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXNsaWRlci10b29sdGlwLXdyYXBwZXInLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZW1wbGF0ZVwiPlxuICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZTsgY29udGV4dDoge3Rvb2x0aXA6IHRvb2x0aXAsIHBsYWNlbWVudDogcGxhY2VtZW50LCBjb250ZW50OiBjb250ZW50fVwiPjwvbmctdGVtcGxhdGU+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0ZW1wbGF0ZVwiPlxuICA8ZGl2IGNsYXNzPVwibmd4LXNsaWRlci1pbm5lci10b29sdGlwXCIgW2F0dHIudGl0bGVdPVwidG9vbHRpcFwiIFthdHRyLmRhdGEtdG9vbHRpcC1wbGFjZW1lbnRdPVwicGxhY2VtZW50XCI+XG4gICAge3tjb250ZW50fX1cbiAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5gLFxuICBzdHlsZXM6IFtgLm5neC1zbGlkZXItaW5uZXItdG9vbHRpcHtoZWlnaHQ6MTAwJX1gXVxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwV3JhcHBlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXA6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwbGFjZW1lbnQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjb250ZW50OiBzdHJpbmc7XG59XG4iXX0=