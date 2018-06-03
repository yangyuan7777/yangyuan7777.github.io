<div class="heart"></div>

;
.heart{
width: 100px;
height: 100px;
margin: 100px;
position: relative;
background: #f00;
transform: rotate(45deg);
-webkit-transform: rotate(45deg);
-moz-transform: rotate(45deg);
-o-transform: rotate(45deg);
-ms-transform: rotate(45deg);
}
.heart:before,.heart:after{
content: '';
position: absolute;
width: inherit;
height: inherit;
background: #f00;
border-radius: 50%;
-webkit-border-radius: 50%;
-moz-border-radius: 50%;
-o-border-radius: 50%;
-ms-border-radius: 50%;
}
.heart:before{
left: -50px;
}
.heart:after{
top: -50px;
}