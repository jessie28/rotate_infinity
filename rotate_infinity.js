/**
 * Created by cabbage on 2017/10/24.
 */
import $ from 'jquery';
(function () {
    "use strict";
    var Rotates = function (container,params) {
        var $self = this;
        var $container = $("."+container);
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
        this.time = 100;
        this.timer = null;
        this.animate_speed = 100;
        this.addNum = 0;
        this.totalAppend = 0;
        window.clearInterval(this.timer);
        if(this.imglistlen > 0){
            this.timer = window.setInterval(function () {
                //当总长大于现在个数-1的长度的时候，添加1个
                $self.left -= $self.speed;
                var len = $self.imglistlen + $self.addNum;
                if(($self.totalAppend < ($self.imglistlen) * 2 ) && ($self.config.totalWidth + Math.abs($self.left)) > $self.config.width * (len - 1)){
                    var targetNum = $self.addNum % $self.imglistlen;
                    $container.append($self.itemImglist.eq(targetNum).clone());
                    $self.addNum ++;
                    $self.totalAppend ++ ;
                }
                $self.animate_speed = 100;
                if(Math.abs($self.left)  > $self.totalLeft){
                    $self.left = 0;
                    $self.animate_speed = 0
                };
                $container.animate({
                    left : $self.left
                },$self.animate_speed);
            },$self.time)
        }

    }
    window.Rotates = Rotates
})();
module.exports = window.Rotates;
