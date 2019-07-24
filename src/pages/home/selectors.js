/**
 * Class for web elements of home page.
 **/
export default class Selectors {
    static get mainLogo() { return $('.logo'); }
    static get emailInput() { return $('#Account'); }
    static get checkPwnedBtn() { return $('#searchPwnage'); }
    static get pwnedFalse() { return $('h2=Good news — no pwnage found!'); }
    static get pwnedTrue() { return $('h2=Oh no — pwned!'); }
}
