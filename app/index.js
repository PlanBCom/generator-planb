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

    var prompts = [{
        type: 'confirm',
        name: 'someOption',
        message: 'Would you like to enable this option?',
        default: true
    }];

    this.prompt(prompts, function (props) {
        this.someOption = props.someOption;

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
    this.copy('assets/scss/_main.scss', 'assets/scss/main.scss');
};

PlanbGenerator.prototype.scripts = function scripts() {
    this.copy('assets/js/_main.js', 'assets/js/main.js');
};

PlanbGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('_index.html', 'index.html');
    this.copy('_404.html', '404.html');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_humans.txt', 'humans.txt');

    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('htaccess', '.htaccess');
    this.copy('jshintrc', '.jshintrc');
};
