'use strict';
import FormHandler from './formhandler';

var FORM_SELECTOR = '[data-coffee-order="form"]';
var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
var App = window.App;
var Truck = App.Truck;
var DataStore = App.DataStore;
var CheckList = App.CheckList;
var myTruck = new Truck('ncc-1701', new DataStore());
var checkList = new CheckList(CHECKLIST_SELECTOR);
var formHandler = new FormHandler(FORM_SELECTOR);

window.myTruck = myTruck;
window.checkList = checkList;
checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
formHandler.addSubmitHandler((data) => {
  return myTruck.createOrder(data)
    .then(() => {
      checkList.addRow(data);
    });
});
myTruck.printOrders(checkList.addRow.bind(checkList));
