/**
 * Class for Base page which is super class for all page class.
 **/
export default class BasePage {

    open(route){
        browser.url(route);
    }
}
