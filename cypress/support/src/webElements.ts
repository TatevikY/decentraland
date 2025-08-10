export class WebElements{

    decentraland_URL: string = 'https://decentraland.org/play/';
    discord_URL: string = 'https://discord.com';

    login_google(){
        return cy.get('[data-testid="primary-test-id-google-button"]') 
    }

    login_metamask(){
        return cy.get('[data-testid="secondary-test-id-metamask-button"]') 
    }

    login_discord(){
        return cy.get('[data-testid="extra-options-test-id-discord-button"]') 
    }

    login_apple(){
        return cy.get('[data-testid="extra-options-test-id-apple-button"]') 
    }

    login_x(){
        return cy.get('[data-testid="extra-options-test-id-x-button"]') 
    }

    login_formatic(){
        return cy.get('[data-testid="extra-options-test-id-fortmatic-button"]') 
    }

    login_coinbase(){
        return cy.get('[data-testid="extra-options-test-id-coinbase-button"]') 
    }

    login_wallet_connect(){
        return cy.get('[data-testid="extra-options-test-id-wallet-connect-button"]') 
    }
}