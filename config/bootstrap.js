/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */


module.exports.bootstrap = function (cb) {
  sails.config.johnny.board.on("ready", function () {

    var led = new sails.config.johnny.five.Led.RGB({
      pins: {
        red: 9,
        green: 10,
        blue: 11
      }
    });

    sails.config.johnny.led = led;

    sails.config.johnny.led.on();
    sails.config.johnny.led.color({red: 0, blue: 0, green: 255});
    cb();
  });
};
