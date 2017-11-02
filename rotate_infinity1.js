/**
 * Created by cabbage on 2017/10/24.
 */
import $ from 'jquery';
(function () {
    "use strict";
    var Rotates = function (container,params) {
        var $self = this;
        var $container = $("."+container);
        this.container = $container;
        this.itemImglist = $container.find("div.imgItem");
        this.imglistlen = this.itemImglist.length;
        this.left = 0;
        this.num = 0;
        this.config = {
            totalWidth : 1080,
            width : 345,
        };
        this.totalLeft = this.config.width * this.imglistlen;
        this.speed = 10;
        this.maxTime = 20000;
        this.time = this.maxTime;
        this.timer = null;
        this.animate_speed = this.maxTime;
        this.addNum = 0;
        this.totalAppend = 0;
        this.shouldAdd = true;
        if(this.imglistlen > 0){
            this.beginRotate()
        }
    };
    Rotates.prototype = {
        beginRotate : function () {
            var self = this;
            console.log(self.time);
            self.rotateImg();
            window.clearTimeout(self.timer);
            self.timer = window.setTimeout(
                function () {
                    self.beginRotate()
                },
                self.time
            )
        },
        setSpeed : function () {
            var self = this;

        },
        addChilds: function (num) {
            var self = this;
            if(num < self.imglistlen){
                self.container.append(self.itemImglist.eq(num).clone());
            }else{

            }

        },
        rotateImg : function () {
            var self = this;
            self.animate_speed = this.maxTime;
            self.speed = (self.imglistlen) * this.config.width;
            var left = 0 - self.speed;
            self.container.animate({
                left : 0
            },0,"linear");
            if(self.shouldAdd){
                self.shouldAdd = false;
                switch (self.imglistlen){
                    case 1 :
                        self.container.append(self.itemImglist.eq(0).clone());
                        self.container.append(self.itemImglist.eq(0).clone());
                        self.container.append(self.itemImglist.eq(0).clone());
                        self.container.append(self.itemImglist.eq(0).clone());
                        break;
                    case 2 :
                        self.container.append(self.itemImglist.eq(0).clone());
                        self.container.append(self.itemImglist.eq(1).clone());
                        self.container.append(self.itemImglist.eq(0).clone());
                        self.container.append(self.itemImglist.eq(1).clone());
                        break;
                    case 3 :
                        self.container.append(self.itemImglist.eq(0).clone());
                        self.container.append(self.itemImglist.eq(1).clone());
                        self.container.append(self.itemImglist.eq(2).clone());
                        self.container.append(self.itemImglist.eq(0).clone());
                        break;
                    default :
                        self.container.append(self.itemImglist.eq(0).clone());
                        self.container.append(self.itemImglist.eq(1).clone());
                        self.container.append(self.itemImglist.eq(2).clone());
                        self.container.append(self.itemImglist.eq(3).clone());
                }
            }
            self.container.animate({
                left : left
            },self.animate_speed,"linear");
        }
    }
    Rotates.prototype.init = function (container,params) {
        var _this_ = this;
        new _this_(container,params);
    };
    window.Rotates = Rotates
})();
module.exports = window.Rotates;
