const {exec} = require("child_process");
const path = require("path");


let name = process.argv[2];

if (!name) {
    console.error('Please provide a name for the page!!!');
    process.exit(1);
    return;
}

name = name.split("")
name[0] = name[0].toUpperCase();

let command = `generate-react component ${name.join("")} --path=src/containers/ --type=container`;

exec(
    command,
    {
        cwd: path.join(__dirname, "../")
    },
    (err, stdout, stderr) => {


        if (err || stderr) {
            console.log(stderr);
            console.log(err);
            return;
        }
        console.log(stdout);
    }
);
