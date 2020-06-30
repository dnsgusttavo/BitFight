function loadPlatforms(){
    //Create platform group to verify collision
    platforms = new Group();
  
    //Platforms creation
    const platafomsList = [ 
        LeftIsland = createSprite((height / 2.649),(height / 1.112),(height / 1.327),(height / 2.143)),
        LeftFloatRock = createSprite((height / 1.726),(height / 2.008),(height / 13.155),(height / 19.075)),
        CenterFloatRock = createSprite((height / 1.158),(height / 2.957),(height / 5.262),(height / 15.260)),
        RightFloatRock = createSprite((height / 0.784),(height / 2.180),(height / 13.155),(height / 18.167)),
        RightIsland= createSprite((height / 0.720),(height / 1.112),(height / 1.272),(height / 2.143))
    ]
    
    //Add all platforms on platform group and hide them
    for(plataform of platafomsList){
        plataform.shapeColor = "red" //For future debug
        plataform.visible = false
        platforms.add(plataform)
    }
}