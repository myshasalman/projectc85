var canvas=new fabric.Canvas("mycanvas")
playerx= 10;
playery= 10;
objh=30;
objw=30;
playerobject="";
Objectimage="";
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(160);
        playerobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobject);
    });

}
function object_update(get_image)
{
fabric.Image.fromURL(get_image,function(Img){
    Objectimage=Img;
    Objectimage.scaleToWidth(objw);
    Objectimage.scaleToHeight(objh);
    Objectimage.set({
        top:playery,
        left:playerx
    });
    canvas.add(Objectimage);
});
}
