enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Defense = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    o,
    assets.animation`myAnim`,
    200,
    true
    )
})
controller.combos.attachCombo("lr", function () {
    if (o.scale == 5) {
        o.setScale(1, ScaleAnchor.Middle)
        d.setScale(1, ScaleAnchor.Middle)
    } else {
        o.setScale(5, ScaleAnchor.Middle)
        d.setScale(5, ScaleAnchor.Middle)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    currentTeam = currentTeam + 1
    opponentTeam = opponentTeam + 1
    o.setImage(assets.image`myImage`)
    d.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 9 9 . . . . . . 
        . . . . . . . 3 e . . . . . . . 
        . . . . . . . 9 b b . . . . . . 
        . . . . . . 7 9 9 9 7 . . . . . 
        . . . . . . e 9 9 9 e . . . . . 
        . . . . . . e 9 9 9 e . . . . . 
        . . . . . . . e 1 1 . e . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . . 7 c c 7 c . . . . . 
        . . . . . c 9 9 c 9 9 c . . . . 
        . . . . . . c c c c c . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 . 1 . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        `)
})
function set_defensive_colors () {
    for (let value of sprites.allOfKind(SpriteKind.Defense)) {
        let mainColor = Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.MainColor) as number
let secondaryColor = Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.SecondaryColor) as number
let sockColor = Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.SockColor) as number
if (typeof mainColor == "number") {
            if (Teams.containsColors(value.image)) {
                // Ensure it's a number
                // Pass directly as number
                value.image.replace(9, mainColor)
                // Ensure it's a number
                // Pass directly as number
                value.image.replace(3, secondaryColor)
                // Ensure it's a number
                // Pass directly as number
                value.image.replace(7, sockColor)
            }
        }
    }
}
function set_offensive_colors () {
    for (let value2 of sprites.allOfKind(SpriteKind.Player)) {
        let mainColor2 = Teams.getTeamProperty(currentTeam, Teams.TeamProperty.MainColor) as number
let secondaryColor2 = Teams.getTeamProperty(currentTeam, Teams.TeamProperty.SecondaryColor) as number
let sockColor2 = Teams.getTeamProperty(currentTeam, Teams.TeamProperty.SockColor) as number
if (typeof mainColor2 == "number") {
            if (Teams.containsColors(value2.image)) {
                // Ensure it's a number
                // Pass directly as number
                value2.image.replace(9, mainColor2)
                // Ensure it's a number
                // Pass directly as number
                value2.image.replace(3, secondaryColor2)
                // Ensure it's a number
                // Pass directly as number
                value2.image.replace(7, sockColor2)
            }
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, o)
    o.setImage(assets.image`myImage`)
})
let d: Sprite = null
let o: Sprite = null
let opponentTeam = 0
let currentTeam = 0
scene.setBackgroundColor(7)
let awayTeam = Teams.getTeamFromEnum(Teams.TeamEnum.ARI)
let homeTeam = awayTeam
currentTeam = homeTeam
opponentTeam = awayTeam
console.log(Teams.getTeamProperty(awayTeam, Teams.TeamProperty.TeamAbbreviation))
console.log(Teams.getTeamProperty(homeTeam, Teams.TeamProperty.TeamAbbreviation))
o = sprites.create(assets.image`myImage`, SpriteKind.Player)
d = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 9 9 . . . . . . 
    . . . . . . . 3 e . . . . . . . 
    . . . . . . . 9 b b . . . . . . 
    . . . . . . 7 9 9 9 7 . . . . . 
    . . . . . . e 9 9 9 e . . . . . 
    . . . . . . e 9 9 9 e . . . . . 
    . . . . . . . e 1 1 . e . . . . 
    . . . . . . 1 . . 1 . . . . . . 
    . . . . . . 7 c c 7 c . . . . . 
    . . . . . c 9 9 c 9 9 c . . . . 
    . . . . . . c c c c c . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 . 1 . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    `, SpriteKind.Defense)
o.setScale(5, ScaleAnchor.Middle)
d.setScale(5, ScaleAnchor.Middle)
o.x += -30
d.x += 30
let myTextSprite = fancyText.create("______")
myTextSprite.setPosition(80, 16)
game.onUpdate(function () {
    fancyText.setText(myTextSprite, "" + currentTeam + ", " + Teams.getTeamProperty(currentTeam, Teams.TeamProperty.TeamAbbreviation))
    set_offensive_colors()
    set_defensive_colors()
})
