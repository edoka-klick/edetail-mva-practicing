/* dist/boilerplate.clickstreamer.js v1.0.1 Sun Oct 18 2020 16:17:44 GMT-0400 (Eastern Daylight Time) */
var irep = !1 === navigator.standalone,
    cs,
    irepcallbuffer,
    irepMediaMode = !1,
    unscopedReturnVariable;

function IRepCallBuffer() {
  this.buffer = [];
}

function ircbcb(e) {
  irepcallbuffer.callback(e);
}

function initClickStreamer(e) {
  0 == e.success ? irepMediaMode = !0 : (cs = new ClickStreamer(e.Call.ID), irepcallbuffer = new IRepCallBuffer()), $(document).trigger("clickstreamready");
}

function ClickStreamer(e) {
  if (this.sessionID = e, this.saveBuffer = [], this.saveBufferRunning = !1, null !== localStorage.getItem("clickstreamer")) try {
    this.allData = JSON.parse(localStorage.getItem("clickstreamer"));
  } catch (e) {
    this.allData = {};
  } else this.allData = {};

  for (thesession in this.allData.hasOwnProperty(this.sessionID) || (this.allData[this.sessionID] = {
    datetime: Number(new Date())
  }), this.allData) 432e5 < Number(new Date()) - this.allData[thesession].datetime && delete this.allData[thesession];
}

function CSUpdateValue(e) {
  cs.captureClickStreamID(e);
}

IRepCallBuffer.prototype.addToBuffer = function (e, t, a) {
  this.buffer.push({
    functionName: e,
    argumentArray: t,
    callback: a
  }), 1 == this.buffer.length && this.executeBottomBufferAction();
}, IRepCallBuffer.prototype.executeBottomBufferAction = function () {
  var dis = this.buffer[0];
  if ("clickstream" == dis.functionName) cs.executeSave(dis.argumentArray[0], dis.argumentArray[1]);else {
    for (var executeString = "com.veeva.clm." + dis.functionName + "(", i = 0; i < dis.argumentArray.length; i++) -1 == dis.argumentArray[i].toLowerCase().indexOf("object") ? executeString += "'" + dis.argumentArray[i] + "'," : executeString += dis.argumentArray[i] + ",";

    executeString += "ircbcb)", eval(executeString);
  }
}, IRepCallBuffer.prototype.callback = function (returnedValueFromIRep) {
  unscopedReturnVariable = returnedValueFromIRep, eval(this.buffer[0].callback + "(unscopedReturnVariable)"), this.advance();
}, IRepCallBuffer.prototype.advance = function () {
  0 != this.buffer.length && (this.buffer = this.buffer.splice(1, this.buffer.length - 1), 0 < this.buffer.length && this.executeBottomBufferAction());
}, $(document).ready(function () {
  irep ? com.veeva.clm.getDataForCurrentObject("Call", "ID", initClickStreamer) : initClickStreamer({
    Call: {
      ID: "fakeCallID"
    },
    success: !0
  });
}), ClickStreamer.prototype.saveBackJSON = function () {
  localStorage.setItem("clickstreamer", JSON.stringify(this.allData)), irepcallbuffer.advance();
}, ClickStreamer.prototype.captureClickStreamID = function (e) {
  this.allData[this.sessionID][irepcallbuffer.buffer[0].argumentArray[0]].id = e.Call_Clickstream_vod__c.ID, this.saveBackJSON();
}, ClickStreamer.prototype.setValue = function (e, t) {
  irepcallbuffer.addToBuffer("clickstream", [e, t]);
}, ClickStreamer.prototype.executeSave = function (e, t) {
  this.allData[this.sessionID].hasOwnProperty(e) ? this.allData[this.sessionID][e].value = t : this.allData[this.sessionID][e] = {
    value: t
  };
  var a = {};
  a.Answer_vod__c = t, a.Question_vod__c = e, a.Survey_Type_vod__c = "Text", a.Track_Element_Type_vod__c = e, a.Track_Element_Description_vod__c = e, irep && (this.allData[this.sessionID][e].hasOwnProperty("id") ? com.veeva.clm.updateRecord("Call_Clickstream_vod__c", this.allData[this.sessionID][e].id, a, CSUpdateValue) : com.veeva.clm.createRecord("Call_Clickstream_vod__c", a, CSUpdateValue));
}, ClickStreamer.prototype.getValue = function (e) {
  return void 0 !== this.allData[this.sessionID] && this.allData[this.sessionID].hasOwnProperty(e) ? this.allData[this.sessionID][e].value : null;
}, ClickStreamer.prototype.currentSessionData = function () {
  return this.allData[this.sessionID];
};