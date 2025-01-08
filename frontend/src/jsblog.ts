const npmCommands = [
  { command: "npm", description: "JavaScript package manager" },
  { command: "npm access", description: "Set access level on published packages" },
  { command: "npm adduser", description: "Add a registry user account" },
  { command: "npm audit", description: "Run a security audit" },
  { command: "npm bugs", description: "Bugs for a package in a web browser maybe" },
  { command: "npm cache", description: "Manipulates packages cache" },
  { command: "npm ci", description: "Install a project with a clean slate" },
  { command: "npm completion", description: "Tab completion for npm" },
  { command: "npm config", description: "Manage the npm configuration files" },
  { command: "npm dedupe", description: "Reduce duplication" },
  { command: "npm deprecate", description: "Deprecate a version of a package" },
  { command: "npm diff", description: "The registry diff command" },
  { command: "npm dist-tag", description: "Modify package distribution tags" },
  { command: "npm docs", description: "Docs for a package in a web browser maybe" },
  { command: "npm doctor", description: "Check your environments" },
  { command: "npm edit", description: "Edit an installed package" },
  { command: "npm exec", description: "Run a command from an npm package" },
  { command: "npm explain", description: "Explain installed packages" },
  { command: "npm explore", description: "Browse an installed package" },
  { command: "npm find-dupes", description: "Find duplication in the package tree" },
  { command: "npm fund", description: "Retrieve funding information" },
  { command: "npm help", description: "Search npm help documentation" },
  { command: "npm help-search", description: "Get help on npm" },
  { command: "npm init", description: "Create a package.json file" },
  { command: "npm install", description: "Install a package" },
  { command: "npm install-ci-test", description: "Install a project with a clean slate and run tests" },
  { command: "npm install-test", description: "Install package(s) and run tests" },
  { command: "npm link", description: "Symlink a package folder" },
  { command: "npm login", description: "Login to a registry user account" },
  { command: "npm logout", description: "Log out of the registry" },
  { command: "npm ls", description: "List installed packages" },
  { command: "npm org", description: "Manage orgs" },
  { command: "npm outdated", description: "Check for outdated packages" },
  { command: "npm owner", description: "Manage package owners" },
  { command: "npm pack", description: "Create a tarball from a package" },
  { command: "npm ping", description: "Ping npm registry" },
  { command: "npm pkg", description: "Manages your package.json" },
  { command: "npm prefix", description: "Display prefix" },
  { command: "npm profile", description: "Change settings on your registry profile" },
  { command: "npm prune", description: "Remove extraneous packages" },
  { command: "npm publish", description: "Publish a package" },
  { command: "npm query", description: "Retrieve a filtered list of packages" },
  { command: "npm rebuild", description: "Rebuild a package" },
  { command: "npm repo", description: "Open package repository page in the browser" },
  { command: "npm restart", description: "Restart a package" },
  { command: "npm root", description: "Display npm root" },
  { command: "npm run-script", description: "Run arbitrary package scripts" },
  { command: "npm sbom", description: "Generate a Software Bill of Materials (SBOM)" },
  { command: "npm search", description: "Search for packages" },
  { command: "npm shrinkwrap", description: "Lock down dependency versions for publication" },
  { command: "npm star", description: "Mark your favorite packages" },
  { command: "npm stars", description: "View packages marked as favorites" },
  { command: "npm start", description: "Start a package" },
  { command: "npm stop", description: "Stop a package" },
  { command: "npm team", description: "Manage organization teams and team memberships" },
  { command: "npm test", description: "Test a package" },
  { command: "npm token", description: "Manage your authentication tokens" },
  { command: "npm uninstall", description: "Remove a package" },
  { command: "npm unpublish", description: "Remove a package from the registry" },
  { command: "npm unstar", description: "Remove an item from your favorite packages" },
  { command: "npm update", description: "Update a package" },
  { command: "npm version", description: "Bump a package version" },
  { command: "npm view", description: "View registry info" },
  { command: "npm whoami", description: "Display npm username" },
  { command: "npx", description: "Run a command from an npm package" }
];

const npmheaders = ["Command", "Description"];

const npmcheatsheet = document.querySelector("#npmcommands") as HTMLDivElement;
const npmtable = npmcheatsheet.querySelector('table') as HTMLTableElement;
const npmthead = npmtable.querySelector('thead') as HTMLTableSectionElement;
const npmtbody = npmtable.querySelector('tbody') as HTMLTableSectionElement;

const npmcap = document.createElement('caption') as HTMLTableCaptionElement;
npmcap.innerHTML = "NPM Commands"
npmtable.appendChild(npmcap);
const npmtrow = document.createElement('tr') as HTMLTableRowElement;
npmthead.appendChild(npmtrow);
for (let str of npmheaders) {
  const head = document.createElement('th');
  head.innerHTML = str;
  npmtrow.appendChild(head);
}

npmCommands.forEach(({command, description}) => {
  const row = document.createElement('tr');
  row.innerHTML = `
  <td><code>${command}</code></td>
  <td>${description}</td>
  `;
  npmtbody.appendChild(row);
});