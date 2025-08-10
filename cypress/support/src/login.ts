import { WebElements } from "./webElements";
import { Credentials } from "./credentials";

const webElements = new WebElements();
const credentials = new Credentials();

export class Login{
    
    login_google(){
        cy.visit(webElements.decentraland_URL)
        webElements.google_dctr_login().click()
        //
    
    }

    login_metamask(){
        cy.visit(webElements.decentraland_URL)
        webElements.metamask_dctr_login().click()
        //
    }

    login_discord(){
        cy.visit(webElements.decentraland_URL)
        webElements.discord_dctr_login().click()
        cy.wait(15000)

        const sentArgs = { username: credentials.discord_email, password: credentials.discord_password}
        cy.origin('https://discord.com',{ args: sentArgs }, ({ username, password }) => {
            cy.wait(15000)
            cy.get('[aria-label="Email or Phone Number"]').click().clear().type(username);
            cy.get('[aria-label="Password"]').click().clear().type(password);
            cy.get('[type="submit"]').click();
            cy.contains('https://decentraland.org').scrollIntoView(); 
            cy.contains('Authorize').click();
            cy.wait(15000)
        })
    }

    login_apple(){
        cy.visit(webElements.decentraland_URL)
        webElements.apple_dctr_login().click()
        //
    }

    login_x(){
        cy.visit(webElements.decentraland_URL)
        webElements.x_dctr_login().click()
        //
    }

    login_formatic(){
        cy.visit(webElements.decentraland_URL)
        webElements.formatic_dctr_login().click()
        //
    }

    login_coinbase(){
        cy.visit(webElements.decentraland_URL)
        webElements.coinbase_dctr_login().click()
        //
    }

    login_wallet_connect(){
        cy.visit(webElements.decentraland_URL)
        webElements.walletConnect_dctr_login().click()
        //
    }
};