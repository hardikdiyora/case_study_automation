import homePage from "../../pages/home/page";
import { randomText } from "../../utils/general";

const testdata = [
    {
        email: randomText() + '@abc.com',
        pwned: false
    },
    {
        email: randomText() + '@abc.com',
        pwned: false
    },
    {
        email: randomText() + '@abc.com',
        pwned: false
    },
    {
        email: 'abc@abc.com',
        pwned: true
    },
    {
        email: 'qwerty@abc.com',
        pwned: true
    },
    {
        email: 'xyz@abc.com',
        pwned: true
    }
];

describe("Tests related to check given email is pwned or not", () => {
    testdata.forEach((data) => {
            it(`Verify for email ${data.email}, the pwned result is ${data.pwned}`, () => {
                homePage.open();
                expect(homePage.verifyEmailPwnedOrNot(data.email)).to.equal(data.pwned);
            });
        }
    );
});
