//Here contain all admin and developer tools to debug the game
const isActive = true;

if(isActive)
{
    function mouseClicked(){
        console.log(Math.floor(mouseX),Math.floor(mouseY))
    }

    //Recive a fix value and return this value responsive with window height
    function getResponsive(v1,v2,v3,v4){
        v1r = (height / v1).toFixed(3);
        v2r = (height / v2).toFixed(3);
        v3r = (height / v3).toFixed(3);
        v4r = (height / v4).toFixed(3);
        return `((height / ${v1r}),(height / ${v2r}),(height / ${v3r}),(height / ${v4r}))`
    }
}
