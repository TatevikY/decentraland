import { Login } from '../support/src/login';
import { WebElements } from "../support/src/webElements";

const login = new Login();
const webElements = new WebElements();

before(() =>{
    login.login_discord()
});

it('Login discord',() => {
    cy.contains('Welcome to Decentraland!').should('be.visible')
})