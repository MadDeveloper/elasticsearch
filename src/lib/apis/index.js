module.exports = {
  get '5.5'() { return require('./5_5'); },
  get '_default'() { return require('./5_4'); },
  get '5.4'() { return require('./5_4'); },
  get '5.6'() { return require('./5_6'); },
  get 'master'() { return require('./master'); },
};
