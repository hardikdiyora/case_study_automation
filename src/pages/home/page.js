import BasePage from "../base";
import _elements from "./selectors";


/**
 * Class for main landing page for haveibeenpwned.com platform.
 **/
class HomePage extends BasePage {
    open() {
        super.open('/');
        _elements.mainLogo.waitForDisplayed();
    }

    /***
     * Check whether the email is pwned or not.
     *
     * @param email the email address
     * @returns {boolean} returns True if it pwned otherwise false
     */
    verifyEmailPwnedOrNot(email) {
        _elements.emailInput.setValue(email);
        _elements.checkPwnedBtn.click();
        browser.waitUntil(() => {
            return (_elements.pwnedTrue.isDisplayed() || _elements.pwnedFalse.isDisplayed());
        }, 10000, "Expected Email pwned result couldn't displayed within 10s", 500);
        return _elements.pwnedTrue.isDisplayed();
    }
}

export default new HomePage();
