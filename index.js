var _item=document.querySelectorAll(".items");
console.log(_item);
var _a=document.getElementById("a");
var _s=document.getElementById("s");
var _d=document.getElementById("d");
var _f=document.getElementById("f");
var _g=document.getElementById("g");
var _h=document.getElementById("h");
var _j=document.getElementById("j");
var _k=document.getElementById("k");
var _l=document.getElementById("l");

function play_a() {
    _a.play();
    _item[0].classList.add('highlight');
}

function pause_a() {
    _item[0].classList.remove("highlight");
}

document.body.addEventListener('keydown',function(e){
    var _key= e.keyCode;
    switch(_key){
        case 65:_a.play();
        _item[0].classList.add('highlight');
        break;
        case 83:_s.play();
        _item[1].classList.add('highlight');
        break;
        case 68: _d.play();
        _item[2].classList.add('highlight');
        break;
        case 70:_f.play();
        _item[3].classList.add('highlight');
        break;
        case 71:_g.play();
        _item[4].classList.add('highlight');
        break;
        case 72: _h.play();
        _item[5].classList.add('highlight');
        break;
        case 74:_j.play();
        _item[6].classList.add('highlight');
        break;
        case 75:_k.play();
        _item[7].classList.add('highlight');
        break;
        case 76: _l.play();
        _item[8].classList.add('highlight');
        break;
        default:alert("enter the correct key");
        break;
    }

})

// document.body.addEventListener("keydown",function(e){
//     var _key=e.keyCode;
//     console.log(_key);
// })

// document.body.addEventListener('keypress',function(e){
//      var _key= e.keyCode;
//      switch(_key){
//          case 97:_item[0].classList.add('highlight');
//          break;
//          case 115: _item[1].classList.add('highlight');
//          break;
//          case 100: _d.play();
//          break;
//          case 102:_f.play();
//          break;
//          case 103:_g.play();
//          break;
//          case 104: _h.play();
//          break;
//          case 106:_j.play();
//          break;
//          case 107:_k.play();
//          break;
//         case 108: _l.play();
//         break;
//          default:alert("enter the correct key");
//          break;
//      }
// })

document.body.addEventListener('keyup',function(e){
    var _key= e.keyCode;
    switch(_key){
        case 65:_item[0].classList.remove("highlight");
        break;
        case 83: _item[1].classList.remove('highlight');
        break;
        case 68:  _item[2].classList.remove('highlight');
        break;
        case 70: _item[3].classList.remove('highlight');
        break;
        case 71: _item[4].classList.remove('highlight');
        break;
        case 72:  _item[5].classList.remove('highlight');
        break;
        case 74: _item[6].classList.remove('highlight');
        break;
        case 75: _item[7].classList.remove('highlight');
        break;
        case 76:  _item[8].classList.remove('highlight');
        break;
        default:alert("enter the correct key");
        break;
    }
})