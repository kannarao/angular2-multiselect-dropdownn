import { Pipe } from '@angular/core';
import { DataService } from './multiselect.service';
var ListFilterPipe = /** @class */ (function () {
    function ListFilterPipe(ds) {
        this.ds = ds;
        this.filteredList = [];
    }
    ListFilterPipe.prototype.transform = function (items, filter, searchBy) {
        var _this = this;
        if (!items || !filter) {
            this.ds.setData(items);
            return items;
        }
        this.filteredList = items.filter(function (item) { return _this.applyFilter(item, filter, searchBy); });
        this.ds.setData(this.filteredList);
        return this.filteredList;
    };
    ListFilterPipe.prototype.applyFilter = function (item, filter, searchBy) {
        var found = false;
        if (searchBy.length > 0) {
            for (var t = 0; t < searchBy.length; t++) {
                if (filter && item[searchBy[t]] && item[searchBy[t]] != "") {
                    if (item[searchBy[t]].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                        found = true;
                    }
                }
            }
        }
        else {
            for (var prop in item) {
                if (filter && item[prop]) {
                    if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                        found = true;
                    }
                }
            }
        }
        return found;
    };
    ListFilterPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'listFilter',
                    pure: true
                },] },
    ];
    /** @nocollapse */
    ListFilterPipe.ctorParameters = function () { return [
        { type: DataService, },
    ]; };
    return ListFilterPipe;
}());
export { ListFilterPipe };
//# sourceMappingURL=list-filter.js.map