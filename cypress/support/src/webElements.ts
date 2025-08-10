export class WebElements{

    decentraland_URL: string = 'https://decentraland.org/play/';
    discord_URL: string = 'https://discord.com';
//******************************************************************************************************//
    google_dctr_login(){
        return cy.get('[data-testid="primary-test-id-google-button"]') 
    }
//******************************************************************************************************//
    metamask_dctr_login(){
        return cy.get('[data-testid="secondary-test-id-metamask-button"]') 
    }
//******************************************************************************************************//
    discord_dctr_login(){
        return cy.get('[data-testid="extra-options-test-id-discord-button"]') 
    }
    discord_email(){
        return cy.get('[aria-label="Email or Phone Number"]')
    }   
      
    discord_password(){
        return cy.get('[aria-label="Password"]')
    }
    discord_loginButton(){
        return cy.get('[type="submit"]')
    }
    discord_textForScroll(){
        return cy.contains('https://decentraland.org')
    }
    discord_authorizeButton(){
        return cy.contains('Authorize')
    }   
        

//******************************************************************************************************//
    apple_dctr_login(){
        return cy.get('[data-testid="extra-options-test-id-apple-button"]') 
    }
//******************************************************************************************************//
    x_dctr_login(){
        return cy.get('[data-testid="extra-options-test-id-x-button"]') 
    }
//******************************************************************************************************//
    formatic_dctr_login(){
        return cy.get('[data-testid="extra-options-test-id-fortmatic-button"]') 
    }
//******************************************************************************************************//
    coinbase_dctr_login(){
        return cy.get('[data-testid="extra-options-test-id-coinbase-button"]') 
    }
//******************************************************************************************************//
    walletConnect_dctr_login(){
        return cy.get('[data-testid="extra-options-test-id-wallet-connect-button"]') 
    }
}