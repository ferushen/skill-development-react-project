import * as articleCommands from './commands/article';
import * as commentCommands from './commands/comment';
import * as commonCommands from './commands/common';
import * as ratingCommands from './commands/rating';
import * as profileCommands from './commands/profile';

Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentCommands);
Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(ratingCommands);
Cypress.Commands.addAll(profileCommands);
