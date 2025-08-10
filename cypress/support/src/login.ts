import { WebElements } from "./webElements";

const webElements = new WebElements();

export class Login{
    baseURL: string = 'https://decentraland.org/play/';
    
    login_google(){
        //
    }

    login_metamask(){
        cy.visit(this.baseURL)
        //
    }

    login_discord(){
        cy.visit(this.baseURL)
        webElements.login_discord().click()
    }

    login_apple(){
        cy.visit(this.baseURL)
        //
    }

    login_space_x(){
        cy.visit(this.baseURL)
        //
    }

    login_formatic(){
        cy.visit(this.baseURL)
        //
    }

    login_coinbase(){
        cy.visit(this.baseURL)
        //
    }

    login_wallet_connect(){
        cy.visit(this.baseURL)
        //
    }
};