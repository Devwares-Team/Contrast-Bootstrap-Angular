/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Helper with mathematical functions
 */
export class MathHelper {
    /**
     * @param {?} value
     * @param {?} precisionLimit
     * @return {?}
     */
    static roundToPrecisionLimit(value, precisionLimit) {
        return +(value.toPrecision(precisionLimit));
    }
    /**
     * @param {?} value
     * @param {?} modulo
     * @param {?} precisionLimit
     * @return {?}
     */
    static isModuloWithinPrecisionLimit(value, modulo, precisionLimit) {
        /** @type {?} */
        const limit = Math.pow(10, -precisionLimit);
        return Math.abs(value % modulo) <= limit || Math.abs(Math.abs(value % modulo) - modulo) <= limit;
    }
    /**
     * @param {?} value
     * @param {?} floor
     * @param {?} ceil
     * @return {?}
     */
    static clampToRange(value, floor, ceil) {
        return Math.min(Math.max(value, floor), ceil);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aC1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1zbGlkZXIvbmd4LXNsaWRlci8iLCJzb3VyY2VzIjpbIm1hdGgtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxNQUFNOzs7Ozs7SUFFSixNQUFNLENBQUMscUJBQXFCLENBQUMsS0FBYSxFQUFFLGNBQXNCO1FBQ2hFLE9BQU8sQ0FBQyxDQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUUsQ0FBQztLQUMvQzs7Ozs7OztJQUVELE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLGNBQXNCOztRQUN2RixNQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDO0tBQ2xHOzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLElBQVk7UUFDNUQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQy9DO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogSGVscGVyIHdpdGggbWF0aGVtYXRpY2FsIGZ1bmN0aW9ucyAqL1xuZXhwb3J0IGNsYXNzIE1hdGhIZWxwZXIge1xuICAvKiBSb3VuZCBudW1iZXJzIHRvIGEgZ2l2ZW4gbnVtYmVyIG9mIHNpZ25pZmljYW50IGRpZ2l0cyAqL1xuICBzdGF0aWMgcm91bmRUb1ByZWNpc2lvbkxpbWl0KHZhbHVlOiBudW1iZXIsIHByZWNpc2lvbkxpbWl0OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiArKCB2YWx1ZS50b1ByZWNpc2lvbihwcmVjaXNpb25MaW1pdCkgKTtcbiAgfVxuXG4gIHN0YXRpYyBpc01vZHVsb1dpdGhpblByZWNpc2lvbkxpbWl0KHZhbHVlOiBudW1iZXIsIG1vZHVsbzogbnVtYmVyLCBwcmVjaXNpb25MaW1pdDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbGltaXQ6IG51bWJlciA9IE1hdGgucG93KDEwLCAtcHJlY2lzaW9uTGltaXQpO1xuICAgIHJldHVybiBNYXRoLmFicyh2YWx1ZSAlIG1vZHVsbykgPD0gbGltaXQgfHwgTWF0aC5hYnMoTWF0aC5hYnModmFsdWUgJSBtb2R1bG8pIC0gbW9kdWxvKSA8PSBsaW1pdDtcbiAgfVxuXG4gIHN0YXRpYyBjbGFtcFRvUmFuZ2UodmFsdWU6IG51bWJlciwgZmxvb3I6IG51bWJlciwgY2VpbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIGZsb29yKSwgY2VpbCk7XG4gIH1cbn1cbiJdfQ==