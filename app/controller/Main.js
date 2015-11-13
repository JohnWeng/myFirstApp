/**
 * Created by jweng on 11/12/2015.
 */
Ext.define('myFirstApp.controller.Main', {
    extend: 'Ext.app.Controller',
    view: ['Home', 'Card'],
    init: function () {
        console.log('the controller has been instantiated.');
    }

});