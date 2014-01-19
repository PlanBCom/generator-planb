'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var PlanbGenerator = module.exports = function PlanbGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        // this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(PlanbGenerator, yeoman.generators.Base);

PlanbGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // Welcome message
    console.log(this.yeoman);

    var prompts = [
        {
            type : 'input',
            name : 'projectName',
            message : 'Qual o nome do projeto?',
            validate : function (input) {
                return (input.length) ? true : 'Informe o nome do projeto'
            }
        },
        {
            type : 'input',
            name : 'projectDescription',
            message : 'Qual a descricao do projeto?'
        }
    ];

    this.prompt(prompts, function (props) {
        this.projectName = props.projectName;
        this.projectDescription = props.projectDescription;

        cb();
    }.bind(this));
};

PlanbGenerator.prototype.structure = function structure() {
    this.mkdir('assets');
    this.mkdir('assets/css');
    this.mkdir('assets/css/fonts');
    this.mkdir('assets/img');
    this.mkdir('assets/js');
    this.mkdir('assets/scss');
};

PlanbGenerator.prototype.images = function images() {
    // Apple touch
    this.copy('apple-touch-icon-144x144-precomposed.png', 'apple-touch-icon-144x144-precomposed.png');
    this.copy('apple-touch-icon-114x114-precomposed.png', 'apple-touch-icon-114x114-precomposed.png');
    this.copy('apple-touch-icon-72x72-precomposed.png', 'apple-touch-icon-72x72-precomposed.png');
    this.copy('apple-touch-icon-57x57-precomposed.png', 'apple-touch-icon-57x57-precomposed.png');
    this.copy('apple-touch-icon-precomposed.png', 'apple-touch-icon-precomposed.png');
    this.copy('apple-touch-icon.png', 'apple-touch-icon.png');
    // Favicon
    this.copy('favicon.ico', 'favicon.ico');
};

PlanbGenerator.prototype.styles = function styles() {
    this.template('assets/scss/_main.scss', 'assets/scss/main.scss');
    this.copy('assets/css/main.css', 'assets/css/main.css');
};

PlanbGenerator.prototype.scripts = function scripts() {
    this.template('assets/js/_main.js', 'assets/js/main.js');
};

PlanbGenerator.prototype.projectfiles = function projectfiles() {
    this.template('_index.html', 'index.html');
    this.template('_404.html', '404.html');

    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.template('_humans.txt', 'humans.txt');

    this.copy('editorconfig', '.editorconfig');
    this.copy('gitattributes', '.gitattributes');
    this.copy('gitignore', '.gitignore');
    this.copy('htaccess', '.htaccess');
    this.copy('jshintrc', '.jshintrc');
};
