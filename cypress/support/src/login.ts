import { WebElements } from "./webElements";
import { Credentials } from "./credentials";

const webElements = new WebElements();
const credentials = new Credentials();

export class Login{
    
    login_google(){
        cy.visit(webElements.decentraland_URL)
    
    }

    login_metamask(){
        cy.visit(webElements.decentraland_URL)
        //
    }

    login_discord(){
        cy.visit(webElements.decentraland_URL)
        webElements.login_discord().click()
        cy.wait(10000)
        cy.origin(webElements.discord_URL, () => {
            cy.wait(10000)
            cy.get('[aria-label="Email or Phone Number"]').click().clear().type(credentials.discord_email)
            cy.get('[aria-label="Password"]').click().clear().type(credentials.discord_password)
            cy.get('[type="submit"]').click()
            cy.contains('https://decentraland.org').scrollIntoView(); 
            cy.contains('Authorize').click();
            cy.wait(10000)
        })
    }

    login_apple(){
        cy.visit(webElements.decentraland_URL)
        //
    }

    login_space_x(){
        cy.visit(webElements.decentraland_URL)
        //
    }

    login_formatic(){
        cy.visit(webElements.decentraland_URL)
        //
    }

    login_coinbase(){
        cy.visit(webElements.decentraland_URL)
        //
    }

    login_wallet_connect(){
        cy.visit(webElements.decentraland_URL)
        //
    }
};