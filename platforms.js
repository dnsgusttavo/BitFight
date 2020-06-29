function loadPlatforms(){
    //Create platform group to verify collision
    platforms = new Group();
  
    //Platforms creation
    const platafomsList = [
        LeftIsland= createSprite(1250,638,790,255),
        LeftFloatRock = createSprite(1105,350,70,50),
        CenterFloatRock = createSprite(744,282,150,100),
        RightFloatRock = createSprite(500,378,65,50),
        RightIsland = createSprite(330,638,640,255),
    ]
    
    //Add all platforms on platform group and hide them
    for(plataform of platafomsList){
        plataform.shapeColor = "red" //For future debug
        plataform.visible = false
        platforms.add(plataform)
    }
}