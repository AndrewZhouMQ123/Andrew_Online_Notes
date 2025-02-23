export const generalCMD = [
  {
    cmd: "sudo [command] [argument]",
    desc: "Run Command as Super User - Use the sudo command to authenticate as an administrator.",
  },
  {
    cmd: "![value]",
    desc: "Execute a command by referring to its value in history.",
  },
  { cmd: "!!", desc: "Execute the last history entry (the previous command)." },
  {
    cmd: "[command] --help",
    desc: "Displays a summary of the command's functionalities.",
  },
  { cmd: "man [command]", desc: "A detailed overview of the command." },
  { cmd: "exit", desc: "Exit the current terminal session." },
  {
    cmd: "history",
    desc: "The system keeps a record of the executed commands. See the list of the commands you previously used.",
  },
  {
    cmd: "history -[number-of-items]",
    desc: "Limit the number of displayed history entries.",
  },
  { cmd: "caffeinate", desc: "Keep Mac awake." },
  { cmd: "softwareupdate -l", desc: "Check for system updates." },
  { cmd: "sudo softwareupdate -i -a -R", desc: "Apply system updates." },
  {
    cmd: "cd ~/Library/Mobile\\ Documents/com~apple~CloudDocs/",
    desc: "Access iCloud documents.",
  },
];

export const readWriteCMD = [
  {
    cmd: "echo [text]",
    desc: "Print text to standard output with the echo command.",
  },
  { cmd: "touch [filename]", desc: "Create an empty file." },
  { cmd: "open [filename]", desc: "Open any file on the system." },
  {
    cmd: "cat [filename]",
    desc: "Print the contents of the file to the standard output.",
  },
  {
    cmd: "cat myfile.txt | pbcopy",
    desc: "Copy the contents of file to the clipboard.",
  },
  { cmd: "echo [text] | pbcopy", desc: "Copy text to the clipboard." },
  { cmd: "pbpaste", desc: "Paste the contents of the clipboard." },
  {
    cmd: 'echo "[text]" >> [path-to-file]/[filename]',
    desc: "Append content to a text file using the >> symbol.",
  },
  {
    cmd: "cat [filename] >> [path-to-destination-file]/[filename]",
    desc: "Append the contents of an entire file to another file.",
  },
  {
    cmd: 'echo "[text]" > [path-to-file]/[filename]',
    desc: "Overwrite the contents of a file from the command line by using the > symbol.",
  },
  {
    cmd: "cat [filename] > [path-to-file]/[filename]",
    desc: "If the file does not exist, the system creates it. By using cat, you can replace the entire file contents with another file.",
  },
];

export const taskManageMCD = [
  {
    cmd: "ps -ax",
    desc: "List the currently running processes sorted by PID (Process ID) with the ps command.",
  },
  {
    cmd: "ps aux",
    desc: "To see more details about each process, including the CPU and memory consumption.",
  },
  {
    cmd: "top",
    desc: "For a detailed process list that updates in real time, use the top command. By default, top refreshes the view every second.",
  },
  { cmd: "top -s [number-of-seconds]", desc: "Set a custom refresh interval." },
  {
    cmd: "top -o rsize",
    desc: " Adjust the view in top to see the data sorted by memory usage.",
  },
  { cmd: "top -o cpu", desc: "To sort the processes by CPU." },
  {
    cmd: "ps -ax | grep [process-name-or-PID]",
    desc: "Search for a specific process by piping the output of the ps command to grep.",
  },
  {
    cmd: "kill [PID]",
    desc: "Use the kill command to quit a misbehaving process by entering its PID.",
  },
  {
    cmd: "killall [process-name]",
    desc: "Quit a process by its name with the killall command.",
  },
  { cmd: "killall Dock", desc: "Reset macOS Dock." },
  {
    cmd: "defaults write com.apple.dock ResetLaunchPad -bool true; killall DockCopied!",
    desc: "Reset Launchpad.",
  },
  {
    cmd: "sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder",
    desc: "Flush DNS cache.",
  },
  { cmd: "sudo shutdown -r now", desc: "Restart Mac." },
  { cmd: "sudo shutdown -h now", desc: "Shut down Mac." },
];

export const networkCMD = [
  {
    cmd: "ping [hostname-or-IP-address]",
    desc: "Test if a remote host is reachable on the network with the ping command.",
  },
  {
    cmd: "arp -a",
    desc: "Use the arp command to view a list of devices on the local network, with their IP and MAC addresses.",
  },
  {
    cmd: "traceroute [hostname-or-IP-address]",
    desc: "View the path of the packets from the machine to the destination with the traceroute command.",
  },
  {
    cmd: "ifconfig",
    desc: "Display the connected network adapters with the ifconfig command.",
  },
  {
    cmd: "ifconfig [network-adapter-name]",
    desc: "To view a specific adapter, pass its name as an argument to the command.",
  },
  {
    cmd: "curl -O [URL]/[filename]",
    desc: "The curl command allows data transfers to and from remote servers. Use curl to download a file to your machine by using the -O option and passing the full URL as an argument.",
  },
  {
    cmd: "ssh [username]@[hostname-or-IP-address]",
    desc: "Establish an SSH connection with a remote server.",
  },
  {
    cmd: "ssh-keygen",
    desc: "When connecting to a remote host for the first time, you may need to generate an SSH key.",
  },
  {
    cmd: "ssh-copy-id -i [path-to-PUB-key] [username]@[hostname-or-IP-address]",
    desc: "After generating the key, copy it to the remote host.",
  },
];

export const findgrepCMD = [
  {
    cmd: 'find [directory] -name "[filename]"',
    desc: "Find a file within a directory.",
  },
  {
    cmd: 'find testing -name "*.txt"',
    desc: "Use the wildcard character * to broaden your search.",
  },
  {
    cmd: 'grep "[text]" [filename]',
    desc: "Use grep to search for text within a file.",
  },
  {
    cmd: '[command] | grep "[text]"',
    desc: "Find text in the command output by piping the output to grep.",
  },
  {
    cmd: 'grep -rl "[text]" [directory]',
    desc: "To search for text across the files in a directory.",
  },
];

export const directoryCommands = [
  { cmd: "/", desc: "Root directory" },
  { cmd: "~/", desc: "Home directory" },
  { cmd: "./", desc: "Current directory" },
  { cmd: "../", desc: "Parent directory" },
  {
    cmd: "pwd",
    desc: "Display the name of the current working directory with the pwd command.",
  },
  {
    cmd: "cd [directory-path]",
    desc: "The cd command helps the directory tree navigation in macOS. If the user does not specify the path, cd opens the home directory.",
  },
  { cmd: "cd ~", desc: "Go to the home directory." },
  { cmd: "cd /", desc: "The root directory of the drive." },
  { cmd: "cd -", desc: "Previously browsed directory." },
  { cmd: "cd ..", desc: "Parent directory." },
  { cmd: "cd ../..", desc: "The directory two levels above." },
  {
    cmd: "mv [path-to-file] [destination-path]",
    desc: "Move the file to another location.",
  },
  { cmd: "mv [filename] [new-filename]", desc: "Rename a file." },
  {
    cmd: "mv [directory] [destination-path]",
    desc: "The mv command moves the directory to another directory.",
  },
  {
    cmd: "mv -i [filename] [destination-path]",
    desc: "Receive a warning before overwriting a file.",
  },
  {
    cmd: "mv *.[extension] [destination-path]",
    desc: "Move all the files with the same extension at once.",
  },
  {
    cmd: "rm [filename]",
    desc: "Use the rm command to delete files from the system.",
  },
  {
    cmd: "rm -i [filename]",
    desc: "Add the -i option to receive a deletion confirmation message.",
  },
  {
    cmd: "rm -f [filename]",
    desc: "Force remove the file with the -f option.",
  },
  {
    cmd: "rm [file1] [file2] [file3]",
    desc: "Remove multiple files at the same time.",
  },
  {
    cmd: "rm -r [directory]",
    desc: "Delete directories with the rm command and the -r option.",
  },
  {
    cmd: "rm -rf [directory]",
    desc: "Add the -f option to force-remove all the files and sub-directories.",
  },
  {
    cmd: "du",
    desc: "Output the amount of space utilized by files and subdirectories in the current directory.",
  },
  { cmd: "which", desc: "Searches the PATH variable for files" },
  { cmd: "df -h", desc: "Display the free disk space of the system." },
  { cmd: "ls", desc: "View the contents of a directory with the ls command." },
  {
    cmd: "ls -l [filename]",
    desc: "View the permissions related to a specific file by using the -l option and providing the filename as the argument.",
  },
  {
    cmd: "ls -ld [directory-path]",
    desc: "To view directory permissions, add the -d option.",
  },
  {
    cmd: "ls -a",
    desc: "See all directories and files, including the ones that are hidden.",
  },
  {
    cmd: "ls -l",
    desc: "View the list of directories and files with more details, including the file size, ownership, and permissions.",
  },
  { cmd: "ls -S", desc: "Sort files and directories by size." },
  { cmd: "ls -C", desc: "View the list in multiple columns." },
  { cmd: "ls -la", desc: "To see all the files in a detailed list." },
  {
    cmd: "cp -r [directory] [destination-path]",
    desc: "Use the cp command with the -r option to copy directories.",
  },
  {
    cmd: "ditto [directory] [destination-path]",
    desc: "To copy directory contents rather than the directory itself, use the ditto command.",
  },
  { cmd: "rmdir", desc: "Removes empty directories" },
  { cmd: "mkdir", desc: "Creates empty directories" },
];

export const fileCMD = [
  { cmd: "cp [path-to-file] [destination-path]", desc: "Copy files." },
  {
    cmd: "cp [filename] [new-filename]",
    desc: " Create a copy of a file in the same directory.",
  },
  {
    cmd: "cp [file1] [file2] [file3] [destination-path]",
    desc: "Copy multiple files to the same location.",
  },
  {
    cmd: "cp -i [filename] [destination-path]",
    desc: "See the warning if completing the operation would overwrite an already existing file.",
  },
  {
    cmd: "chmod [number] [filename]",
    desc: "Change read, write, and execute privileges of a file with the chmod command. <p>The [number] is a three-digit number in which digits represent user, group, and owner permissions. The number is a sum of all the permissions (read, write, and execute) given to the user, group, and owner.</p> <p>The numerical values of the permissions are: <ul><li>read has a value of 4.</li><li>write has a value of 2.</li><li>execute has a value of 1.</li><li>no permission has a value of 0.</li></ul></p>",
  },
  {
    cmd: "chmod -R [number] [directory]",
    desc: "Use the -R option to change directory permissions.",
  },
  {
    cmd: "chown [username]:[group] [filename]",
    desc: "Change which user owns the file.",
  },
  {
    cmd: "chown -R [username]:[group] [directory-path]",
    desc: "To change directory ownership, add the -R flag.",
  },
  {
    cmd: "printenv",
    desc: "Display the list of all the variables on the system with the printenv command.",
  },
  {
    cmd: "echo $[variable]",
    desc: "Use echo to print the value of a specific variable.",
  },
  {
    cmd: "export PATH=$PATH:[path-to-executable]",
    desc: "Add a new binary path to the PATH variable.",
  },
  {
    cmd: "export [variable-name]=[variable-value]",
    desc: "Create a new variable by passing its name and value to the export command.",
  },
];

export const brewCMD = [
  {
    cmd: "brew",
    desc: "Homebrew is the default package manager for macOS. It provides Mac with functionalities usually found in Linux package managers, such as APT, RPM, etc. Below is the list of the most common Homebrew operations.",
  },
  { cmd: "brew update", desc: "Update the formulae." },
  { cmd: "brew upgrade", desc: "Upgrade the formulae." },
  { cmd: "brew upgrade [formula]", desc: "Upgrade a specific formula." },
  {
    cmd: "brew pin [installed-formula]",
    desc: "Prevent a formula from receiving an update.",
  },
  {
    cmd: "brew unpin [pinned-formula]",
    desc: "Remove the pin and allow the formula to update.",
  },
  { cmd: "brew install [formula]", desc: "Install a formula." },
  {
    cmd: "brew uninstall [formula]",
    desc: "Remove a formula from the system.",
  },
  {
    cmd: "brew list --formula",
    desc: "Display a list of the formulae currently installed on the system.",
  },
  {
    cmd: "brew list --cask",
    desc: "View a list of the currently installed casks.",
  },
  {
    cmd: "brew deps [formula]",
    desc: "Show dependency packages for a specified formula.",
  },
  {
    cmd: "brew outdated --formula",
    desc: "Display outdated formulae on the system.",
  },
  { cmd: "brew outdated --cask", desc: "List outdated casks." },
  { cmd: "brew doctor", desc: "Execute the doctor subcommand." },
  { cmd: "brew help", desc: "Access the help resources." },
  {
    cmd: "brew cleanup",
    desc: "Clean the system from outdated packages and stale lock files",
  },
];

export const scpcommands = [
  {
    cmd: "sudo route add -net -interface [interface] [destination]",
    desc: "Add a new route",
  },
  { cmd: "sudo route delete [destination]", desc: "Delete a route" },
  {
    cmd: "scp /path/to/local/file.txt username@remote:/path/to/remote/directory/",
    desc: "Upload a file from your local machine to a remote server.",
  },
  {
    cmd: "scp username@remote:/path/to/remote/file.txt /path/to/local/directory/",
    desc: "Download a file from a remote server to your local machine.",
  },
  {
    cmd: "scp -r /path/to/local/directory username@remote:/path/to/remote/directory/",
    desc: "Upload an entire directory (including its contents) from your local machine to a remote server.",
  },
  {
    cmd: "scp -r username@remote:/path/to/remote/directory /path/to/local/directory",
    desc: "Download an entire directory (including its contents) from a remote server to your local machine.",
  },
  {
    cmd: "scp username1@remote1:/path/to/file.txt username2@remote2:/path/to/destination/",
    desc: "Transfer a file from one remote server to another.",
  },
  {
    cmd: "scp -P 2222 /path/to/local/file.txt username@remote:/path/to/remote/directory/",
    desc: "Specify a custom port for the SSH connection.",
  },
  {
    cmd: "scp -l 1000 /path/to/local/file.txt username@remote:/path/to/remote/directory/",
    desc: "Limit the transfer speed to 1000 Kbps.",
  },
  {
    cmd: "scp -p /path/to/local/file.txt username@remote:/path/to/remote/directory/",
    desc: "Preserve the file's modification and access times.",
  },
  {
    cmd: "scp -i /path/to/private/key /path/to/local/file.txt username@remote:/path/to/remote/directory/",
    desc: "Use a specific private key for authentication.",
  },
  {
    cmd: "scp -v /path/to/local/file.txt username@remote:/path/to/remote/directory/",
    desc: "Enable verbose mode to display detailed information about the transfer.",
  },
  {
    cmd: "scp -C /path/to/local/file.txt username@remote:/path/to/remote/directory/",
    desc: "Compress the file during transfer to reduce bandwidth usage.",
  },
  {
    cmd: "scp file1.txt file2.txt username@remote:/path/to/remote/directory/",
    desc: "Transfer multiple files at once.",
  },
  {
    cmd: "scp /path/to/local/file.txt username@remote:/path/to/remote/directory/newfile.txt",
    desc: "Rename the file during transfer.",
  },
  {
    cmd: "scp -q /path/to/local/file.txt username@remote:/path/to/remote/directory/",
    desc: "Suppress the progress meter and non-error messages.",
  },
  {
    cmd: "scp -6 /path/to/local/file.txt username@remote:/path/to/remote/directory/",
    desc: "Use IPv6 for the connection.",
  },
  {
    cmd: "scp -c aes256-ctr /path/to/local/file.txt username@remote:/path/to/remote/directory/",
    desc: "Specify the encryption algorithm for the transfer.",
  },
];

export const vscodecmd = [
  { cmd: "CMD+B", desc: "Toggle the sidebar." },
  { cmd: "CMD+J", desc: "Toggle the panel." },
  { cmd: "CMD+`", desc: "Toggle the terminal." },
  { cmd: "CMD+SHIFT+B", desc: "Select Build Task to Run." },
  { cmd: "CMD+Shift+X", desc: "Open the extensions view." },
  { cmd: "CMD+Shift+E", desc: "Open the file explorer." },
  { cmd: "CMD+Shift+F", desc: "Open the search view." },
  { cmd: "CMD+Shift+G", desc: "Open the source control view." },
  { cmd: "CMD+Shift+D", desc: "Open the run and debug view." },
  { cmd: "CMD+Shift+M", desc: "Open the problems view." },
  { cmd: "CMD+Shift+O", desc: "Toggle the output panel." },
];

export const vimcommands = [
  { cmd: "vi", desc: "Open a file in Vim." },
  { cmd: "vim", desc: "Open a file in Vim." },
  { cmd: "i", desc: "Enter insert mode before the cursor." },
  { cmd: "esc", desc: "Return to normal mode." },
  { cmd: ":q", desc: "Quit Vim and Close the file." },
  { cmd: ":q!", desc: "Quit Vim and Close the file without saving changes." },
  { cmd: ":w", desc: "Save File and Write the changes to the file." },
  { cmd: ":wq", desc: "Save and Write the changes to the file and close it." },
  {
    cmd: ":wq!",
    desc: "Save and Write the changes to the file and close it without saving changes.",
  },
  { cmd: ":x", desc: "Save and Write the changes to the file and close it." },
  { cmd: ":e [filename]", desc: "Open a file for editing." },
  { cmd: ":e!", desc: "Discard changes and reload the file." },
  {
    cmd: ":e! [filename]",
    desc: "Discard changes and reload a specific file.",
  },
  { cmd: ":w [filename]", desc: "Save the file with a new name." },
  {
    cmd: ":wq [filename]",
    desc: "Save the file with a new name and close it.",
  },
  { cmd: ":q [filename]", desc: "Close the file." },
  { cmd: ":q! [filename]", desc: "Close the file without saving changes." },
  {
    cmd: ":r [filename]",
    desc: "Read and Insert the contents of a file into the current file.",
  },
  {
    cmd: ":r !ls",
    desc: "Read and Insert the output of a shell command into the current file.",
  },
  { cmd: ":set number", desc: "Show line numbers." },
  { cmd: ":set nonumber", desc: "Hide line numbers." },
  { cmd: ":set autoindent", desc: "Automatically indent new lines." },
  { cmd: ":set noautoindent", desc: "Disable automatic indentation." },
  { cmd: ":set list", desc: "Show special characters." },
  { cmd: ":set nolist", desc: "Hide special characters." },
  { cmd: ":set ignorecase", desc: "Case Insensitive Search" },
  { cmd: ":set noignorecase", desc: "Case Sensitive Search" },
  { cmd: ":set hlsearch", desc: "Highlight Search" },
  { cmd: ":set nohlsearch", desc: "Disable Highlight Search" },
  { cmd: ":set incsearch", desc: "Incremental Search" },
  { cmd: ":set noincsearch", desc: "Disable Incremental Search" },
];

export const gitCommands = [
  {
    cmd: "git remote rename old-repo-name new-repo-name",
    desc: "Rename the local repository",
  },
  {
    cmd: "git remote set-url origin https://github.com/username/new-repo-name.git",
    desc: "Update the remote URL to the new repo name",
  },
  { cmd: "git add .", desc: "Stage all changes for commit" },
  { cmd: "git push", desc: "Push the changes to the remote repository" },
  { cmd: "git pull", desc: "Pull the changes from the remote repository" },
  {
    cmd: 'git commit -m "YOUR_COMMIT_MESSAGE"',
    desc: "Commit the changes with a message",
  },
  {
    cmd: "git push origin main",
    desc: "Push the changes to the main branch (or master)",
  },
  {
    cmd: "git push origin --delete old-repo-name",
    desc: "Delete the old remote repository",
  },
  { cmd: "git branch -m main", desc: "Rename the main branch to master" },
  {
    cmd: "git push origin master",
    desc: "Push the changes to the master branch",
  },
  {
    cmd: 'ssh-keygen -t ed25519 -C "your_email@example.com"',
    desc: "Generate a new SSH key",
  },
  { cmd: 'eval "$(ssh-agent -s)"', desc: "Start the SSH agent" },
  { cmd: "~ % open ~/.ssh/config", desc: "Open the SSH config file" },
  { cmd: "~ % touch ~/.ssh/config", desc: "Create an SSH config file" },
  { cmd: "~ % vi ~/.ssh/config", desc: "Edit the SSH config file" },
  {
    cmd: "~ % ssh-add --apple-use-keychain ~/.ssh/id_ed25519",
    desc: "Add the SSH key to the keychain",
  },
  {
    cmd: "~ % pbcopy < ~/.ssh/id_ed25519.pub",
    desc: "Copy the SSH key to the clipboard",
  },
  { cmd: "~ % ssh -T git@github.com", desc: "Test the SSH connection" },
  {
    cmd: "git config --global user.name 'Your Name'",
    desc: "Set the username for Git",
  },
  {
    cmd: "git config --global user.email 'Your Email'",
    desc: "Set the email for Git",
  },
  {
    cmd: "git config --global gpg.format ssh",
    desc: "Set the GPG format to SSH",
  },
  {
    cmd: "git config --global user.signingkey ~/.ssh/id_ed25519.pub",
    desc: "Set the signing key for Git",
  },
  {
    cmd: "git config --global commit.gpgsign true",
    desc: "Enable GPG signing for commits",
  },
  {
    cmd: "git config --global --unset gpg.format",
    desc: "Unset the GPG format",
  },
  {
    cmd: "git config --global --unset user.signingkey",
    desc: "Unset the signing key",
  },
  { cmd: 'git commit -S -m "YOUR_COMMIT_MESSAGE"', desc: "Signed commits" },
];

export const shortcuts = [
  { cmd: "Command - N", desc: "Open a new window." },
  { cmd: "Shift - Command - W", desc: "Close the window." },
  { cmd: "Command - T", desc: "Open a new tab." },
  { cmd: "Command - W", desc: "Close the tab." },
  {
    cmd: "Option - Shift - Command - W",
    desc: "Close all terminal instances.",
  },
  { cmd: "Command - +/-", desc: "Make the text bigger/smaller." },
  { cmd: "Command - D", desc: "Split the window into two panes." },
  { cmd: "Shift - Command - D", desc: "Close the split pane." },
  {
    cmd: "Control - C",
    desc: "Terminate terminal process. A shortcut key for sending the interrupt (terminate) signal SIGINT to the current process running in the foreground.",
  },
];
