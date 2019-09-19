/**
 * @class Pages
 */
class Pages {
    /**
     * @constructor
     */
    constructor(pages, size) {
        this.pages       = pages;
        this.currentPage = 1;
        this.size        = size;
    }

    /**
     *
     * @param page
     */
    getPageViewable(page) {
        let ret = [page];
        page || (page = this.currentPage);
        let pages = this.pages;
        let size  = this.size;
        for (let i = 1; ret.length < size && ret.length <= pages; i++) {
            let pre = page - i;
            pre > 0 && ret.unshift(pre);
            if(ret.length<size){
                let nxt = page + i;
                nxt <= pages && ret.push(nxt);
            }
        }
        if (ret[0] !== 1) {
            ret[1] = '…';
            ret[0] = 1;
        }
        let retLen = ret.length;
        if (ret[retLen - 1] !== pages) {
            ret[retLen - 2] = '…';
            ret[retLen - 1] = pages;
        }
        return ret;
    }
}

module.exports=Pages;
// let pageObj = new Pages(100, 10);
// console.log(pageObj.getPageViewable(7));
