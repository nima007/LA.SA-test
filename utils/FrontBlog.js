let fa = ""
let en = ""
export default class FrontBlog {
    constructor(title={fa,en},content={fa,en},image=null,slug="",categories=[]) {
        this.title=title;
        this.content=content;
        this.image=image;
        this.slug=slug;
        this.categories=categories
    }
}