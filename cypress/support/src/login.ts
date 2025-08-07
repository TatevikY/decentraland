import { WebElements } from "./webElements";

const webElements = new WebElements();

export class Login{
    baseURL: string = 'https://decentraland.org/play/';
    
    login_google(){
        cy.visit(this.baseURL)
        webElements.login_page_username().clear().type(this.username)
        webElements.login_page_password().clear().type(this.pwd).type('{enter}')
    }

    login_metamask(){
        cy.visit(this.baseURL)
        webElements.login_page_username().clear().type(this.username)
        webElements.login_page_password().clear().type(this.pwd).type('{enter}')
    }

    login_discord(){
        cy.visit(this.baseURL)
        //
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