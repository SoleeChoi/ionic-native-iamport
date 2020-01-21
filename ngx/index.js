var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var IamportCordova = /** @class */ (function (_super) {
    __extends(IamportCordova, _super);
    function IamportCordova() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IamportCordova.prototype.payment = function (paymentObject) { return cordova(this, "payment", {}, arguments); };
    IamportCordova.prototype.certification = function (certificationObject) { return cordova(this, "certification", {}, arguments); };
    IamportCordova.pluginName = "IamportCordova";
    IamportCordova.plugin = "iamport-cordova";
    IamportCordova.pluginRef = "cordova.plugins.IamportCordova";
    IamportCordova.repo = "https://github.com/iamport/iamport-cordova";
    IamportCordova.install = "";
    IamportCordova.installVariables = [];
    IamportCordova.platforms = ["ios", "android"];
    IamportCordova = __decorate([
        Injectable()
    ], IamportCordova);
    return IamportCordova;
}(IonicNativePlugin));
export { IamportCordova };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lhbXBvcnQtY29yZG92YS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7O0lBNkZ4RixrQ0FBaUI7Ozs7SUFTbkQsZ0NBQU8sYUFBQyxhQUE0QjtJQUtwQyxzQ0FBYSxhQUFDLG1CQUF3Qzs7Ozs7Ozs7SUFkM0MsY0FBYztRQUQxQixVQUFVLEVBQUU7T0FDQSxjQUFjO3lCQXpHM0I7RUF5R29DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgY29uc3QgY29yZG92YTogQ29yZG92YTtcblxuZXhwb3J0IGludGVyZmFjZSBQYXltZW50T2JqZWN0IHtcbiAgdGl0bGU/OiBUaXRsZURhdGE7XG4gIHVzZXJDb2RlOiBzdHJpbmc7XG4gIGRhdGE6IFBheW1lbnREYXRhO1xuICBjYWxsYmFjazogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENlcnRpZmljYXRpb25PYmplY3Qge1xuICB0aXRsZT86IFRpdGxlRGF0YTtcbiAgdXNlckNvZGU6IHN0cmluZztcbiAgZGF0YTogQ2VydGlmaWNhdGlvbkRhdGE7XG4gIGNhbGxiYWNrOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGl0bGVEYXRhIHtcbiAgbmFtZT86IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudERhdGEge1xuICBwZz86IHN0cmluZztcbiAgcGF5X21ldGhvZD86IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBtZXJjaGFudF91aWQ/OiBzdHJpbmc7XG4gIGFtb3VudDogc3RyaW5nO1xuICBidXllcl9uYW1lPzogc3RyaW5nO1xuICBidXllcl90ZWw/OiBzdHJpbmc7XG4gIGJ1eWVyX2VtYWlsPzogc3RyaW5nO1xuICBidXllcl9hZGRyPzogc3RyaW5nO1xuICBidXllcl9wb3N0Y29kZT86IHN0cmluZztcbiAgYXBwX3NjaGVtZTogc3RyaW5nO1xuICBjdXN0b21fZGF0YT86IGFueTtcbiAgbm90aWNlX3VybD86IHN0cmluZztcbiAgZXNjcm93PzogYm9vbGVhbjtcbiAgZGlnaXRhbD86IGJvb2xlYW47XG4gIGRpc3BsYXk/OiB7XG4gICAgY2FyZF9xdW90YT86IFtudW1iZXJdO1xuICB9O1xuICBjdXJyZW5jeT86IHN0cmluZztcbiAgY3VzdG9tZXJfdWlkPzogc3RyaW5nO1xuICB0YXhfZnJlZT86IHN0cmluZztcbiAgbGFuZ3VhZ2U/OiBzdHJpbmc7XG4gIHZiYW5rX2R1ZT86IHN0cmluZztcbiAgYml6X251bT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDZXJ0aWZpY2F0aW9uRGF0YSB7XG4gIGNvbXBhbnk/OiBzdHJpbmc7XG4gIHBob25lPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBjYXJyaWVyPzogc3RyaW5nO1xuICBiaXJ0aD86IHN0cmluZztcbiAgbWVyY2hhbnRfdWlkPzogc3RyaW5nO1xuICBtaW5fYWdlPzogc3RyaW5nO1xuICBwb3B1cD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgSWFtcG9ydCBDb3Jkb3ZhXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJYW1wb3J0Q29yZG92YSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaWFtcG9ydC1jb3Jkb3ZhJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpYW1wb3J0Q29yZG92YTogSWFtcG9ydENvcmRvdmEpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmlhbXBvcnRDb3Jkb3ZhLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSWFtcG9ydENvcmRvdmEnLFxuICBwbHVnaW46ICdpYW1wb3J0LWNvcmRvdmEnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLklhbXBvcnRDb3Jkb3ZhJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lhbXBvcnQvaWFtcG9ydC1jb3Jkb3ZhJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnaW9zJywgJ2FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSWFtcG9ydENvcmRvdmEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZG9lcyBzb21ldGhpbmdcbiAgICogQHBhcmFtIGFyZzEge3N0cmluZ30gU29tZSBwYXJhbSB0byBjb25maWd1cmUgc29tZXRoaW5nXG4gICAqIEBwYXJhbSBhcmcyIHtudW1iZXJ9IEFub3RoZXIgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwYXltZW50KHBheW1lbnRPYmplY3Q6IFBheW1lbnRPYmplY3QpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBjb3Jkb3ZhLnBsdWdpbnMuSWFtcG9ydENvcmRvdmEucGF5bWVudChwYXltZW50T2JqZWN0KTsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGNlcnRpZmljYXRpb24oY2VydGlmaWNhdGlvbk9iamVjdDogQ2VydGlmaWNhdGlvbk9iamVjdCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGNvcmRvdmEucGx1Z2lucy5JYW1wb3J0Q29yZG92YS5jZXJ0aWZpY2F0aW9uKGNlcnRpZmljYXRpb25PYmplY3QpOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxufVxuIl19