let chart,annotation1={id:"e-p-anno",shapes:[{point:{xAxis:0,yAxis:0,x:Date.UTC(2020,3,1),y:69.67},type:"circle",r:8},{point:{xAxis:0,yAxis:0,x:Date.UTC(2020,1,1),y:80.45},type:"circle",r:8},{points:[{xAxis:0,yAxis:0,x:Date.UTC(2020,3,1),y:69.67},{xAxis:0,yAxis:0,x:Date.UTC(2e3,1,1),y:69.67}],type:"path"},,{points:[{xAxis:0,yAxis:0,x:Date.UTC(2020,1,1),y:80.45},{xAxis:0,yAxis:0,x:Date.UTC(2001,7,1),y:80.45}],type:"path"}]},annotation2={labels:[{text:"Men",point:{x:Date.UTC(2019,1,1),y:66,xAxis:0,yAxis:0}},{text:"Women",point:{x:Date.UTC(2019,1,1),y:55,xAxis:0,yAxis:0}}]};$(".chart-area-womens-recession-intro").parent().css("overflow","visible"),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("TwoStep",[],t):"object"==typeof exports?exports.TwoStep=t():e.TwoStep=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[40,32,39,34].indexOf(e)>-1?1:[37,38,33].indexOf(e)>-1?-1:0},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.instances=[]}return i(e,[{key:"register",value:function(e){return this.instances.push(e),this}},{key:"getActiveInstances",value:function(){return this.instances.filter(function(e){return e.enabled})}}]),e}();t.default=a,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=i(n(0)),r=new(i(n(1)).default),s=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),0===t.elements.length)throw"Elements array is empty";if(t.narrative){if(t.elements.length!==t.narrative.length)throw"Elements and narrative are different lengths";if(!1==!t.narrative.filter(function(e){return"function"!=typeof e}).length)throw"Narrative contains non-functions";this.narrative=t.narrative}this.onChange=t.onChange,this.elements=Array.prototype.slice.call(t.elements),this.enabled=!0,this.offset=t.hasOwnProperty("offset")?t.offset:{down:"50%",up:"0"};var n=this.setWaypoints(this.elements,function(e){if("down"==e){var t=a.elements.indexOf(this.element);t!==this.index&&a.goTo(t,!1,e)}},t.continuous,this.offset.down),i=this.setWaypoints(this.elements,function(e){if("up"==e){var t=a.elements.indexOf(this.element);t!==this.index&&a.goTo(t,!1,e)}},t.continuous,this.offset.up);if(this.waypoints=[n,i],t.stick){if(void 0===$().fixTo)throw"fixTo is not present on the page, or may have been loaded in before jQuery.";$(t.stick).wrapInner('<div class="two-step-sticky-wrapper"></div>'),this.sticky=$(t.stick).find(".two-step-sticky-wrapper").fixTo($(t.stick))}this.setKeyboard(),this.index=-1,r.register(this),setInterval(function(){Waypoint.refreshAll()},1e3);var a=this}return a(e,[{key:"goTo",value:function(e,t,n){var i=this;if(!1===this.isValidIndex(e))throw e+" is not a valid index. Must be between 0 and "+(this.elements.length-1)+" (inclusive).";this.narrative&&this.narrative[e]({element:this.elements[e],index:e,direction:n}),this.onChange&&this.onChange({element:this.elements[e],index:e,direction:n}),this.index=e;var a=$(this.elements).eq(e);return $(this.elements).removeClass("active"),a.addClass("active"),!0===t?(this.disableWaypoints(),$("html, body").animate({scrollTop:a.offset().top-100},500).promise().then(function(){i.enableWaypoints()})):$.Deferred().resolve()}},{key:"setWaypoints",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return e.map(function(e){return new Waypoint({element:e,handler:t,continuous:n,offset:i})})}},{key:"setKeyboard",value:function(){var e=this;$(window).keydown(function(t){if(e.disabled)return!0;var n=(0,o.default)(t.keyCode),i=r.getActiveInstances();if(0!==n&&t.target===document.body&&!1===t.metaKey&&1===i.length){var a=e.index+n;return!e.isValidIndex(a)||(e.goTo(a,!0),t.preventDefault(),!1)}})}},{key:"isValidIndex",value:function(e){return e<this.elements.length&&e>-1}},{key:"disableWaypoints",value:function(){[].concat.apply([],this.waypoints).forEach(function(e){return e.disable()})}},{key:"enableWaypoints",value:function(){[].concat.apply([],this.waypoints).forEach(function(e){return e.enable()})}},{key:"disable",value:function(){this.disabled=!0,this.enabled=!1,this.disableWaypoints(),this.sticky&&this.sticky.fixTo("stop")}},{key:"enable",value:function(){this.disabled=!1,this.enabled=!0,this.enableWaypoints(),this.sticky&&this.sticky.fixTo("start")}}]),e}();t.default=s,e.exports=t.default}])});var ts=new TwoStep({elements:document.querySelectorAll(".parent .narrative-item"),onChange:function(e){console.log("Item "+e.index)},stick:document.querySelector(".parent .sticky-outer"),narrative:[function(e){$(".chart-title").text("Percent of people 25-54 who are employed"),chart.removeAnnotation(annotation2),chart.addAnnotation(annotation1),chart.update({chart:{type:"area"},data:{csvURL:"https://raw.githubusercontent.com/kschmidt2/grow-womens-recession-intro/master/app/data/e-p-rate.csv"},yAxis:{min:60,max:85}})},function(e){chart.removeAnnotation("e-p-anno"),chart.addAnnotation(annotation2),$(".chart-title").text("Percent of men and women employed"),chart.update({chart:{type:"line"},data:{csvURL:"https://raw.githubusercontent.com/kschmidt2/grow-womens-recession-intro/master/app/data/e-p-gender.csv"},yAxis:{min:45,max:70}})},function(e){chart.removeAnnotation("e-p-anno")},function(e){chart.removeAnnotation("e-p-anno"),$(".chart-title").text("Percent change in labor force participation since February"),chart.update({chart:{type:"line"},data:{csvURL:"https://raw.githubusercontent.com/kschmidt2/grow-womens-recession-intro/master/app/data/lfl-gender.csv"},yAxis:{min:-8,max:2}})}],offset:{up:"-10%",down:"70%"}});function drawHighcharts(){chart=Highcharts.chart("chart-container-intro",{chart:{type:"area",styledMode:!0,spacingBottom:25,spacingRight:25,spacingLeft:5,spacingTop:20,animation:{duration:1e3}},title:{text:null},data:{csvURL:"https://raw.githubusercontent.com/kschmidt2/grow-womens-recession-intro/master/app/data/e-p-rate.csv"},annotations:[{}],plotOptions:{series:{lineWidth:1,states:{hover:{enabled:!1}},marker:{enabled:!1,symbol:"circle",fillColor:"#ffffff",states:{hover:{fillColor:"#ffffff"}}}}},legend:{enabled:!1},xAxis:{labels:{style:{whiteSpace:"nowrap"}},tickLength:5,plotBands:[{from:Date.UTC(2020,1,1),to:Date.UTC(2020,9,30),label:{text:"Pandemic",textAlign:"center"}}]},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow"},min:60,max:85,tickAmount:6},credits:{enabled:!1},tooltip:{enabled:!1},defs:{gradient0:{tagName:"linearGradient",id:"gradient-0",x1:0,y1:0,x2:0,y2:1,children:[{tagName:"stop",offset:0},{tagName:"stop",offset:1}]}},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:25,spacingLeft:10},legend:{align:"left",x:-18},tooltip:{enabled:!1}}}]}})}Highcharts.setOptions({lang:{thousandsSep:","}}),"complete"===document.readyState||"interactive"===document.readyState?drawHighcharts():document.addEventListener("DOMContentLoaded",drawHighcharts);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY2hhcnQiLCJhbm5vdGF0aW9uMSIsImlkIiwic2hhcGVzIiwicG9pbnQiLCJ4QXhpcyIsInlBeGlzIiwieCIsIkRhdGUiLCJVVEMiLCJ5IiwidHlwZSIsInIiLCJwb2ludHMiLCJhbm5vdGF0aW9uMiIsImxhYmVscyIsInRleHQiLCIkIiwicGFyZW50IiwiY3NzIiwiZSIsInQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwiVHdvU3RlcCIsInRoaXMiLCJpIiwibiIsIm8iLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInZhbHVlIiwiaW5kZXhPZiIsImxlbmd0aCIsIndyaXRhYmxlIiwia2V5IiwiVHlwZUVycm9yIiwiaW5zdGFuY2VzIiwicHVzaCIsImZpbHRlciIsImVuYWJsZWQiLCJhIiwiZWxlbWVudHMiLCJuYXJyYXRpdmUiLCJvbkNoYW5nZSIsIkFycmF5Iiwic2xpY2UiLCJvZmZzZXQiLCJkb3duIiwidXAiLCJzZXRXYXlwb2ludHMiLCJlbGVtZW50IiwiaW5kZXgiLCJnb1RvIiwiY29udGludW91cyIsIndheXBvaW50cyIsInN0aWNrIiwiZml4VG8iLCJ3cmFwSW5uZXIiLCJzdGlja3kiLCJmaW5kIiwic2V0S2V5Ym9hcmQiLCJyZWdpc3RlciIsInNldEludGVydmFsIiwiV2F5cG9pbnQiLCJyZWZyZXNoQWxsIiwiaXNWYWxpZEluZGV4IiwiZGlyZWN0aW9uIiwiZXEiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZGlzYWJsZVdheXBvaW50cyIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ0b3AiLCJwcm9taXNlIiwidGhlbiIsImVuYWJsZVdheXBvaW50cyIsIkRlZmVycmVkIiwicmVzb2x2ZSIsImFyZ3VtZW50cyIsIm1hcCIsImhhbmRsZXIiLCJ3aW5kb3ciLCJrZXlkb3duIiwiZGlzYWJsZWQiLCJrZXlDb2RlIiwiZ2V0QWN0aXZlSW5zdGFuY2VzIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJib2R5IiwibWV0YUtleSIsInByZXZlbnREZWZhdWx0IiwiY29uY2F0IiwiYXBwbHkiLCJmb3JFYWNoIiwiZGlzYWJsZSIsImVuYWJsZSIsInRzIiwicXVlcnlTZWxlY3RvckFsbCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmVBbm5vdGF0aW9uIiwiYWRkQW5ub3RhdGlvbiIsInVwZGF0ZSIsImRhdGEiLCJjc3ZVUkwiLCJtaW4iLCJtYXgiLCJkcmF3SGlnaGNoYXJ0cyIsIkhpZ2hjaGFydHMiLCJzdHlsZWRNb2RlIiwic3BhY2luZ0JvdHRvbSIsInNwYWNpbmdSaWdodCIsInNwYWNpbmdMZWZ0Iiwic3BhY2luZ1RvcCIsImFuaW1hdGlvbiIsImR1cmF0aW9uIiwidGl0bGUiLCJhbm5vdGF0aW9ucyIsInBsb3RPcHRpb25zIiwic2VyaWVzIiwibGluZVdpZHRoIiwic3RhdGVzIiwiaG92ZXIiLCJtYXJrZXIiLCJzeW1ib2wiLCJmaWxsQ29sb3IiLCJsZWdlbmQiLCJzdHlsZSIsIndoaXRlU3BhY2UiLCJ0aWNrTGVuZ3RoIiwicGxvdEJhbmRzIiwiZnJvbSIsInRvIiwibGFiZWwiLCJ0ZXh0QWxpZ24iLCJ1c2VIVE1MIiwib3ZlcmZsb3ciLCJ0aWNrQW1vdW50IiwiY3JlZGl0cyIsInRvb2x0aXAiLCJkZWZzIiwiZ3JhZGllbnQwIiwidGFnTmFtZSIsIngxIiwieTEiLCJ4MiIsInkyIiwiY2hpbGRyZW4iLCJyZXNwb25zaXZlIiwicnVsZXMiLCJjb25kaXRpb24iLCJtYXhXaWR0aCIsImNoYXJ0T3B0aW9ucyIsImFsaWduIiwic2V0T3B0aW9ucyIsImxhbmciLCJ0aG91c2FuZHNTZXAiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBT0EsSUFBQUEsTUFFQUMsWUFBQSxDQUNBQyxHQUFBLFdBQ0FDLE9BQUEsQ0FBQSxDQUNBQyxNQUFBLENBQ0FDLE1BQUEsRUFDQUMsTUFBQSxFQUNBQyxFQUFBQyxLQUFBQyxJQUFBLEtBQUEsRUFBQSxHQUNBQyxFQUFBLE9BRUFDLEtBQUEsU0FDQUMsRUFBQSxHQUNBLENBQ0FSLE1BQUEsQ0FDQUMsTUFBQSxFQUNBQyxNQUFBLEVBQ0FDLEVBQUFDLEtBQUFDLElBQUEsS0FBQSxFQUFBLEdBQ0FDLEVBQUEsT0FFQUMsS0FBQSxTQUNBQyxFQUFBLEdBQ0EsQ0FDQUMsT0FBQSxDQUFBLENBQ0FSLE1BQUEsRUFDQUMsTUFBQSxFQUNBQyxFQUFBQyxLQUFBQyxJQUFBLEtBQUEsRUFBQSxHQUNBQyxFQUFBLE9BQ0EsQ0FDQUwsTUFBQSxFQUNBQyxNQUFBLEVBQ0FDLEVBQUFDLEtBQUFDLElBQUEsSUFBQSxFQUFBLEdBQ0FDLEVBQUEsUUFFQUMsS0FBQSxRQUNBLENBQUEsQ0FDQUUsT0FBQSxDQUFBLENBQ0FSLE1BQUEsRUFDQUMsTUFBQSxFQUNBQyxFQUFBQyxLQUFBQyxJQUFBLEtBQUEsRUFBQSxHQUNBQyxFQUFBLE9BQ0EsQ0FDQUwsTUFBQSxFQUNBQyxNQUFBLEVBQ0FDLEVBQUFDLEtBQUFDLElBQUEsS0FBQSxFQUFBLEdBQ0FDLEVBQUEsUUFFQUMsS0FBQSxVQUlBRyxZQUFBLENBQ0FDLE9BQUEsQ0FBQSxDQUNBQyxLQUFBLE1BQ0FaLE1BQUEsQ0FDQUcsRUFBQUMsS0FBQUMsSUFBQSxLQUFBLEVBQUEsR0FDQUMsRUFBQSxHQUNBTCxNQUFBLEVBQ0FDLE1BQUEsSUFFQSxDQUNBVSxLQUFBLFFBQ0FaLE1BQUEsQ0FDQUcsRUFBQUMsS0FBQUMsSUFBQSxLQUFBLEVBQUEsR0FDQUMsRUFBQSxHQUNBTCxNQUFBLEVBQ0FDLE1BQUEsTUFLQVcsRUFBQSxzQ0FBQUMsU0FBQUMsSUFBQSxXQUFBLFdBQ0EsU0FBQUMsRUFBQUMsR0FBQSxpQkFBQUMsU0FBQSxpQkFBQUMsT0FBQUEsT0FBQUQs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LFNBQ0FDLFVBQUEsVUFDQUosT0FBQSxDQUNBQyxNQUFBLENBQ0FHLFVBQUEsZUFNQUMsT0FBQSxDQU1BMUYsU0FBQSxHQUVBbkQsTUFBQSxDQUNBVSxPQUFBLENBQ0FvSSxNQUFBLENBQ0FDLFdBQUEsV0FHQUMsV0FBQSxFQUNBQyxVQUFBLENBQUEsQ0FDQUMsS0FBQS9JLEtBQUFDLElBQUEsS0FBQSxFQUFBLEdBQ0ErSSxHQUFBaEosS0FBQUMsSUFBQSxLQUFBLEVBQUEsSUFDQWdKLE1BQUEsQ0FDQXpJLEtBQUEsV0FDQTBJLFVBQUEsYUFTQXBKLE1BQUEsQ0FDQWtJLE9BQUEsRUFDQXpILE9BQUEsQ0FDQTRJLFNBQUEsRUFDQUMsU0FBQSxTQUVBL0IsSUFBQSxHQUNBQyxJQUFBLEdBQ0ErQixXQUFBLEdBTUFDLFFBQUEsQ0FDQXRHLFNBQUEsR0FFQXVHLFFBQUEsQ0FDQXZHLFNBQUEsR0FFQXdHLEtBQUEsQ0FDQUMsVUFBQSxDQUNBQyxRQUFBLGlCQUNBaEssR0FBQSxhQUNBaUssR0FBQSxFQUNBQyxHQUFBLEVBQ0FDLEdBQUEsRUFDQUMsR0FBQSxFQUNBQyxTQUFBLENBQUEsQ0FDQUwsUUFBQSxPQUNBbkcsT0FBQSxHQUNBLENBQ0FtRyxRQUFBLE9BQ0FuRyxPQUFBLE1BSUF5RyxXQUFBLENBQ0FDLE1BQUEsQ0FBQSxDQUNBQyxVQUFBLENBQ0FDLFNBQUEsS0FFQUMsYUFBQSxDQUNBNUssTUFBQSxDQUNBbUksYUFBQSxHQUNBQyxZQUFBLElBRUFjLE9BQUEsQ0FDQTJCLE1BQUEsT0FDQXRLLEdBQUEsSUFFQXdKLFFBQUEsQ0FDQXZHLFNBQUEsU0ExSUF3RSxXQUFBOEMsV0FBQSxDQUNBQyxLQUFBLENBQ0FDLGFBQUEsT0FnSkEsYUFBQXZFLFNBQUF3RSxZQUFBLGdCQUFBeEUsU0FBQXdFLFdBQ0FsRCxpQkFFQXRCLFNBQUF5RSxpQkFBQSxtQkFBQW5EIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZGRzIHNvY2lhbCBjbGFzcyB0byBnZXQgc29jaWFsIGNoYXJ0XG4vLyBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1hcmVhXCIpO1xuLy8gZm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspXG4vLyB7XG4vLyAgICAgZWxlbWVudFtpXS5jbGFzc05hbWUgKz0gXCIgc29jaWFsXCI7XG4vLyB9XG5cbmxldCBjaGFydDtcblxubGV0IGFubm90YXRpb24xID0ge1xuICAgIGlkOiAnZS1wLWFubm8nLFxuICAgIHNoYXBlczogW3tcbiAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgIHhBeGlzOiAwLFxuICAgICAgICAgICAgeUF4aXM6IDAsXG4gICAgICAgICAgICB4OiBEYXRlLlVUQygyMDIwLCAzLCAxKSxcbiAgICAgICAgICAgIHk6IDY5LjY3IFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICAgICAgcjogOFxuICAgIH0se1xuICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgeEF4aXM6IDAsXG4gICAgICAgICAgICB5QXhpczogMCxcbiAgICAgICAgICAgIHg6IERhdGUuVVRDKDIwMjAsIDEsIDEpLFxuICAgICAgICAgICAgeTogODAuNDUgXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgICByOiA4IFxuICAgIH0se1xuICAgICAgICBwb2ludHM6IFt7XG4gICAgICAgICAgICB4QXhpczogMCxcbiAgICAgICAgICAgIHlBeGlzOiAwLFxuICAgICAgICAgICAgeDogRGF0ZS5VVEMoMjAyMCwgMywgMSksXG4gICAgICAgICAgICB5OiA2OS42NyBcbiAgICAgICAgfSx7XG4gICAgICAgICAgICB4QXhpczogMCxcbiAgICAgICAgICAgIHlBeGlzOiAwLFxuICAgICAgICAgICAgeDogRGF0ZS5VVEMoMjAwMCwgMSwgMSksXG4gICAgICAgICAgICB5OiA2OS42NyAgXG4gICAgICAgIH1dLFxuICAgICAgICB0eXBlOiAncGF0aCdcbiAgICB9LCx7XG4gICAgICAgIHBvaW50czogW3tcbiAgICAgICAgICAgIHhBeGlzOiAwLFxuICAgICAgICAgICAgeUF4aXM6IDAsXG4gICAgICAgICAgICB4OiBEYXRlLlVUQygyMDIwLCAxLCAxKSxcbiAgICAgICAgICAgIHk6IDgwLjQ1ICBcbiAgICAgICAgfSx7XG4gICAgICAgICAgICB4QXhpczogMCxcbiAgICAgICAgICAgIHlBeGlzOiAwLFxuICAgICAgICAgICAgeDogRGF0ZS5VVEMoMjAwMSwgNywgMSksXG4gICAgICAgICAgICB5OiA4MC40NSAgXG4gICAgICAgIH1dLFxuICAgICAgICB0eXBlOiAncGF0aCdcbiAgICB9XSxcbn07XG5cbmxldCBhbm5vdGF0aW9uMiA9IHtcbiAgICBsYWJlbHM6IFt7XG4gICAgICAgIHRleHQ6ICdNZW4nLFxuICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgeDogRGF0ZS5VVEMoMjAxOSwgMSwgMSksXG4gICAgICAgICAgICB5OiA2NixcbiAgICAgICAgICAgIHhBeGlzOiAwLFxuICAgICAgICAgICAgeUF4aXM6IDBcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICB0ZXh0OiAnV29tZW4nLFxuICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgeDogRGF0ZS5VVEMoMjAxOSwgMSwgMSksXG4gICAgICAgICAgICB5OiA1NSxcbiAgICAgICAgICAgIHhBeGlzOiAwLFxuICAgICAgICAgICAgeUF4aXM6IDBcbiAgICAgICAgfSBcbiAgICB9XVxufVxuXG4kKCBcIi5jaGFydC1hcmVhLXdvbWVucy1yZWNlc3Npb24taW50cm9cIiApLnBhcmVudCgpLmNzcyggXCJvdmVyZmxvd1wiLCBcInZpc2libGVcIiApXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIlR3b1N0ZXBcIixbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlR3b1N0ZXA9dCgpOmUuVHdvU3RlcD10KCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChpKXtpZihuW2ldKXJldHVybiBuW2ldLmV4cG9ydHM7dmFyIG89bltpXT17aTppLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbaV0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsdCksby5sPSEwLG8uZXhwb3J0c312YXIgbj17fTtyZXR1cm4gdC5tPWUsdC5jPW4sdC5pPWZ1bmN0aW9uKGUpe3JldHVybiBlfSx0LmQ9ZnVuY3Rpb24oZSxuLGkpe3QubyhlLG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6aX0pfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIG49ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChuLFwiYVwiLG4pLG59LHQubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdC5wPVwiXCIsdCh0LnM9Mil9KFtmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaShlKXt2YXIgdD1bNDAsMzIsMzksMzRdLG49WzM3LDM4LDMzXTtyZXR1cm4gdC5pbmRleE9mKGUpPi0xPzE6bi5pbmRleE9mKGUpPi0xPy0xOjB9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5kZWZhdWx0PWksZS5leHBvcnRzPXQuZGVmYXVsdH0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgaT10W25dO2kuZW51bWVyYWJsZT1pLmVudW1lcmFibGV8fCExLGkuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIGkmJihpLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLmtleSxpKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixpKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxpJiZlKHQsaSksdH19KCkscj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtpKHRoaXMsZSksdGhpcy5pbnN0YW5jZXM9W119cmV0dXJuIG8oZSxbe2tleTpcInJlZ2lzdGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuaW5zdGFuY2VzLnB1c2goZSksdGhpc319LHtrZXk6XCJnZXRBY3RpdmVJbnN0YW5jZXNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmluc3RhbmNlcy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZW5hYmxlZH0pfX1dKSxlfSgpO3QuZGVmYXVsdD1yLGUuZXhwb3J0cz10LmRlZmF1bHR9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1mdW5jdGlvbiBvKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIGk9dFtuXTtpLmVudW1lcmFibGU9aS5lbnVtZXJhYmxlfHwhMSxpLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBpJiYoaS53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaS5rZXksaSl9fXJldHVybiBmdW5jdGlvbih0LG4saSl7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksaSYmZSh0LGkpLHR9fSgpLHM9bigwKSxhPWkocyksdT1uKDEpLGY9aSh1KSxsPW5ldyBmLmRlZmF1bHQsYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7ZnVuY3Rpb24gbihlKXtpZihcInVwXCI9PWUpe3ZhciB0PWEuZWxlbWVudHMuaW5kZXhPZih0aGlzLmVsZW1lbnQpO3QhPT10aGlzLmluZGV4JiZhLmdvVG8odCwhMSxlKX19ZnVuY3Rpb24gaShlKXtpZihcImRvd25cIj09ZSl7dmFyIHQ9YS5lbGVtZW50cy5pbmRleE9mKHRoaXMuZWxlbWVudCk7dCE9PXRoaXMuaW5kZXgmJmEuZ29Ubyh0LCExLGUpfX1pZihvKHRoaXMsZSksMD09PXQuZWxlbWVudHMubGVuZ3RoKXRocm93XCJFbGVtZW50cyBhcnJheSBpcyBlbXB0eVwiO2lmKHQubmFycmF0aXZlKXtpZih0LmVsZW1lbnRzLmxlbmd0aCE9PXQubmFycmF0aXZlLmxlbmd0aCl0aHJvd1wiRWxlbWVudHMgYW5kIG5hcnJhdGl2ZSBhcmUgZGlmZmVyZW50IGxlbmd0aHNcIjtpZighdC5uYXJyYXRpdmUuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIiE9dHlwZW9mIGV9KS5sZW5ndGg9PT0hMSl0aHJvd1wiTmFycmF0aXZlIGNvbnRhaW5zIG5vbi1mdW5jdGlvbnNcIjt0aGlzLm5hcnJhdGl2ZT10Lm5hcnJhdGl2ZX10aGlzLm9uQ2hhbmdlPXQub25DaGFuZ2UsdGhpcy5lbGVtZW50cz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0LmVsZW1lbnRzKSx0aGlzLmVuYWJsZWQ9ITAsdGhpcy5vZmZzZXQ9dC5oYXNPd25Qcm9wZXJ0eShcIm9mZnNldFwiKT90Lm9mZnNldDp7ZG93bjpcIjUwJVwiLHVwOlwiMFwifTt2YXIgcj10aGlzLnNldFdheXBvaW50cyh0aGlzLmVsZW1lbnRzLGksdC5jb250aW51b3VzLHRoaXMub2Zmc2V0LmRvd24pLHM9dGhpcy5zZXRXYXlwb2ludHModGhpcy5lbGVtZW50cyxuLHQuY29udGludW91cyx0aGlzLm9mZnNldC51cCk7aWYodGhpcy53YXlwb2ludHM9W3Isc10sdC5zdGljayl7aWYodm9pZCAwPT09JCgpLmZpeFRvKXRocm93XCJmaXhUbyBpcyBub3QgcHJlc2VudCBvbiB0aGUgcGFnZSwgb3IgbWF5IGhhdmUgYmVlbiBsb2FkZWQgaW4gYmVmb3JlIGpRdWVyeS5cIjskKHQuc3RpY2spLndyYXBJbm5lcignPGRpdiBjbGFzcz1cInR3by1zdGVwLXN0aWNreS13cmFwcGVyXCI+PC9kaXY+JyksdGhpcy5zdGlja3k9JCh0LnN0aWNrKS5maW5kKFwiLnR3by1zdGVwLXN0aWNreS13cmFwcGVyXCIpLmZpeFRvKCQodC5zdGljaykpfXRoaXMuc2V0S2V5Ym9hcmQoKSx0aGlzLmluZGV4PS0xLGwucmVnaXN0ZXIodGhpcyksc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtXYXlwb2ludC5yZWZyZXNoQWxsKCl9LDFlMyk7dmFyIGE9dGhpc31yZXR1cm4gcihlLFt7a2V5OlwiZ29Ub1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzO2lmKHRoaXMuaXNWYWxpZEluZGV4KGUpPT09ITEpdGhyb3cgZStcIiBpcyBub3QgYSB2YWxpZCBpbmRleC4gTXVzdCBiZSBiZXR3ZWVuIDAgYW5kIFwiKyh0aGlzLmVsZW1lbnRzLmxlbmd0aC0xKStcIiAoaW5jbHVzaXZlKS5cIjt0aGlzLm5hcnJhdGl2ZSYmdGhpcy5uYXJyYXRpdmVbZV0oe2VsZW1lbnQ6dGhpcy5lbGVtZW50c1tlXSxpbmRleDplLGRpcmVjdGlvbjpufSksdGhpcy5vbkNoYW5nZSYmdGhpcy5vbkNoYW5nZSh7ZWxlbWVudDp0aGlzLmVsZW1lbnRzW2VdLGluZGV4OmUsZGlyZWN0aW9uOm59KSx0aGlzLmluZGV4PWU7dmFyIG89JCh0aGlzLmVsZW1lbnRzKS5lcShlKTtyZXR1cm4gJCh0aGlzLmVsZW1lbnRzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxvLmFkZENsYXNzKFwiYWN0aXZlXCIpLHQ9PT0hMD8odGhpcy5kaXNhYmxlV2F5cG9pbnRzKCksJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOm8ub2Zmc2V0KCkudG9wLTEwMH0sNTAwKS5wcm9taXNlKCkudGhlbihmdW5jdGlvbigpe2kuZW5hYmxlV2F5cG9pbnRzKCl9KSk6JC5EZWZlcnJlZCgpLnJlc29sdmUoKX19LHtrZXk6XCJzZXRXYXlwb2ludHNcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPSEoYXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0pfHxhcmd1bWVudHNbMl0saT1hcmd1bWVudHNbM107cmV0dXJuIGUubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBuZXcgV2F5cG9pbnQoe2VsZW1lbnQ6ZSxoYW5kbGVyOnQsY29udGludW91czpuLG9mZnNldDppfSl9KX19LHtrZXk6XCJzZXRLZXlib2FyZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczskKHdpbmRvdykua2V5ZG93bihmdW5jdGlvbih0KXtpZihlLmRpc2FibGVkKXJldHVybiEwO3ZhciBuPSgwLGEuZGVmYXVsdCkodC5rZXlDb2RlKSxpPWwuZ2V0QWN0aXZlSW5zdGFuY2VzKCk7aWYoMCE9PW4mJnQudGFyZ2V0PT09ZG9jdW1lbnQuYm9keSYmdC5tZXRhS2V5PT09ITEmJjE9PT1pLmxlbmd0aCl7dmFyIG89ZS5pbmRleCtuO3JldHVybiFlLmlzVmFsaWRJbmRleChvKXx8KGUuZ29UbyhvLCEwKSx0LnByZXZlbnREZWZhdWx0KCksITEpfX0pfX0se2tleTpcImlzVmFsaWRJbmRleFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlPHRoaXMuZWxlbWVudHMubGVuZ3RoJiZlPi0xfX0se2tleTpcImRpc2FibGVXYXlwb2ludHNcIix2YWx1ZTpmdW5jdGlvbigpe1tdLmNvbmNhdC5hcHBseShbXSx0aGlzLndheXBvaW50cykuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZS5kaXNhYmxlKCl9KX19LHtrZXk6XCJlbmFibGVXYXlwb2ludHNcIix2YWx1ZTpmdW5jdGlvbigpe1tdLmNvbmNhdC5hcHBseShbXSx0aGlzLndheXBvaW50cykuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZS5lbmFibGUoKX0pfX0se2tleTpcImRpc2FibGVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZGlzYWJsZWQ9ITAsdGhpcy5lbmFibGVkPSExLHRoaXMuZGlzYWJsZVdheXBvaW50cygpLHRoaXMuc3RpY2t5JiZ0aGlzLnN0aWNreS5maXhUbyhcInN0b3BcIil9fSx7a2V5OlwiZW5hYmxlXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmRpc2FibGVkPSExLHRoaXMuZW5hYmxlZD0hMCx0aGlzLmVuYWJsZVdheXBvaW50cygpLHRoaXMuc3RpY2t5JiZ0aGlzLnN0aWNreS5maXhUbyhcInN0YXJ0XCIpfX1dKSxlfSgpO3QuZGVmYXVsdD1jLGUuZXhwb3J0cz10LmRlZmF1bHR9XSl9KTtcblxudmFyIHRzID0gbmV3IFR3b1N0ZXAoe1xuICBlbGVtZW50czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcmVudCAubmFycmF0aXZlLWl0ZW0nKSxcbiAgb25DaGFuZ2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygnSXRlbSAnK2V2ZW50LmluZGV4KTtcbiAgfSxcbiAgc3RpY2s6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJlbnQgLnN0aWNreS1vdXRlcicpLFxuICBuYXJyYXRpdmU6IFtcbiAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICQoJy5jaGFydC10aXRsZScpLnRleHQoJ1BlcmNlbnQgb2YgcGVvcGxlIDI1LTU0IHdobyBhcmUgZW1wbG95ZWQnKTtcbiAgICAgICAgY2hhcnQucmVtb3ZlQW5ub3RhdGlvbihhbm5vdGF0aW9uMik7XG4gICAgICAgIGNoYXJ0LmFkZEFubm90YXRpb24oYW5ub3RhdGlvbjEpLFxuICAgICAgICBjaGFydC51cGRhdGUoe1xuICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgY3N2VVJMOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2tzY2htaWR0Mi9ncm93LXdvbWVucy1yZWNlc3Npb24taW50cm8vbWFzdGVyL2FwcC9kYXRhL2UtcC1yYXRlLmNzdidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgIG1pbjogNjAsXG4gICAgICAgICAgICAgICAgbWF4OiA4NVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBjaGFydC5yZW1vdmVBbm5vdGF0aW9uKCdlLXAtYW5ubycpO1xuICAgICAgICBjaGFydC5hZGRBbm5vdGF0aW9uKGFubm90YXRpb24yKTtcbiAgICAgICAgJCgnLmNoYXJ0LXRpdGxlJykudGV4dCgnUGVyY2VudCBvZiBtZW4gYW5kIHdvbWVuIGVtcGxveWVkJyk7XG4gICAgICAgIGNoYXJ0LnVwZGF0ZSh7XG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBjc3ZVUkw6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3NjaG1pZHQyL2dyb3ctd29tZW5zLXJlY2Vzc2lvbi1pbnRyby9tYXN0ZXIvYXBwL2RhdGEvZS1wLWdlbmRlci5jc3YnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICBtaW46IDQ1LFxuICAgICAgICAgICAgICAgIG1heDogNzBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNoYXJ0LnVwZGF0ZUZyb21EYXRhKCk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY2hhcnQucmVtb3ZlQW5ub3RhdGlvbignZS1wLWFubm8nKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBjaGFydC5yZW1vdmVBbm5vdGF0aW9uKCdlLXAtYW5ubycpO1xuICAgICAgICAkKCcuY2hhcnQtdGl0bGUnKS50ZXh0KCdQZXJjZW50IGNoYW5nZSBpbiBsYWJvciBmb3JjZSBwYXJ0aWNpcGF0aW9uIHNpbmNlIEZlYnJ1YXJ5Jyk7XG4gICAgICAgIGNoYXJ0LnVwZGF0ZSh7XG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBjc3ZVUkw6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3NjaG1pZHQyL2dyb3ctd29tZW5zLXJlY2Vzc2lvbi1pbnRyby9tYXN0ZXIvYXBwL2RhdGEvbGZsLWdlbmRlci5jc3YnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICBtaW46IC04LFxuICAgICAgICAgICAgICAgIG1heDogMlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgXSxcbiAgb2Zmc2V0OiB7XG4gICAgICB1cDogJy0xMCUnLFxuICAgICAgZG93bjogJzcwJSdcbiAgfVxufSk7XG5cblxuSGlnaGNoYXJ0cy5zZXRPcHRpb25zKHtcbiAgICBsYW5nOiB7XG4gICAgICB0aG91c2FuZHNTZXA6ICcsJ1xuICAgIH1cbn0pO1xuXG5cblxuZnVuY3Rpb24gZHJhd0hpZ2hjaGFydHMoKSB7XG4gICAgY2hhcnQgPSBIaWdoY2hhcnRzLmNoYXJ0KCdjaGFydC1jb250YWluZXItaW50cm8nLCB7XG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgICAgICBzdHlsZWRNb2RlOiB0cnVlLFxuICAgICAgICAgICAgc3BhY2luZ0JvdHRvbTogMjUsXG4gICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDI1LFxuICAgICAgICAgICAgc3BhY2luZ0xlZnQ6IDUsXG4gICAgICAgICAgICBzcGFjaW5nVG9wOiAyMCxcbiAgICAgICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjc3ZVUkw6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3NjaG1pZHQyL2dyb3ctd29tZW5zLXJlY2Vzc2lvbi1pbnRyby9tYXN0ZXIvYXBwL2RhdGEvZS1wLXJhdGUuY3N2JyxcbiAgICAgICAgfSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IFt7XG4gICAgICAgIH1dLFxuICAgICAgICAvLyBmb3IgYmFyIGNoYXJ0cyBvbmx5XG4gICAgICAgIC8vIHBsb3RPcHRpb25zOiB7XG4gICAgICAgIC8vICAgICBzZXJpZXM6IHtcbiAgICAgICAgLy8gICAgICAgICBncm91cFBhZGRpbmc6IDAuMVxuICAgICAgICAvLyAgICAgfSBcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gZm9yIGxpbmUgY2hhcnRzIG9ubHlcbiAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIGNsaXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIC8vIGFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgLy8gc3ltYm9sUmFkaXVzOiAwLFxuICAgICAgICAgICAgLy8gdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgICAgICAvLyB4OiAxMCxcbiAgICAgICAgICAgIC8vIGl0ZW1NYXJnaW5Ub3A6IC0xMFxuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpY2tMZW5ndGg6IDUsXG4gICAgICAgICAgICBwbG90QmFuZHM6IFt7IC8vIG1hcmsgdGhlIHdlZWtlbmRcbiAgICAgICAgICAgICAgICBmcm9tOiBEYXRlLlVUQygyMDIwLCAxLCAxKSxcbiAgICAgICAgICAgICAgICB0bzogRGF0ZS5VVEMoMjAyMCwgOSwgMzApLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQYW5kZW1pYycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIC8vIGVkaXRzIHhBeGlzIHRpY2tzXG4gICAgICAgICAgICAvLyBkYXRlVGltZUxhYmVsRm9ybWF0czoge1xuICAgICAgICAgICAgLy8gICAgIHdlZWs6ICclYi4gJWUnLFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vIHRpY2tJbnRlcnZhbDogMjQgKiAzNjAwICogMTAwMCAqIDdcbiAgICAgICAgfSxcbiAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWUsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhbGxvdydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtaW46IDYwLFxuICAgICAgICAgICAgbWF4OiA4NSxcbiAgICAgICAgICAgIHRpY2tBbW91bnQ6IDZcbiAgICAgICAgICAgIC8vIGFkZHMgY29tbWFzIHRvIHRob3VzYW5kc1xuICAgICAgICAgICAgLy8gZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIEhpZ2hjaGFydHMubnVtYmVyRm9ybWF0KHRoaXMudmFsdWUsMCwnLicsJywnKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGRlZnM6IHtcbiAgICAgICAgICAgIGdyYWRpZW50MDoge1xuICAgICAgICAgICAgICAgIHRhZ05hbWU6ICdsaW5lYXJHcmFkaWVudCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdncmFkaWVudC0wJyxcbiAgICAgICAgICAgICAgICB4MTogMCxcbiAgICAgICAgICAgICAgICB5MTogMCxcbiAgICAgICAgICAgICAgICB4MjogMCxcbiAgICAgICAgICAgICAgICB5MjogMSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ3N0b3AnLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDBcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6ICdzdG9wJyxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAxXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgcnVsZXM6IFt7XG4gICAgICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogNTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgIHNwYWNpbmdMZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICB4OiAtMThcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgIGRyYXdIaWdoY2hhcnRzKCk7XG59IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGRyYXdIaWdoY2hhcnRzKTtcbn0iXX0=
