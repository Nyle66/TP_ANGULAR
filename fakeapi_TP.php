<?php
header("Access-Control-Allow-Origin: *");
$array = [
    [
        "id" => 1,
        "name" => "Monster 1",
        "pv" => 40,
        "img" => "http://www.pokepedia.fr/images/0/00/Sprite_6_x_666banquise.png"
    ],
    [
        "id" => 2,
        "name" => "Monster 2",
        "pv" => 80,
        "img" => "http://www.pokepedia.fr/images/e/ee/Sprite_6_x_666blizzard.png"
    ],
    [
        "id" => 3,
        "name" => "Monster 3",
        "pv" => 100,
        "img" => "http://www.pokepedia.fr/images/b/ba/Sprite_6_x_666continent.png"
    ],
    [
        "id" => 4,
        "name" => "Monster 4",
        "pv" => 140,
        "img" => "http://www.pokepedia.fr/images/c/cd/Sprite_6_x_666cyclone.png"
    ],
    [
        "id" => 5,
        "name" => "Monster 5",
        "pv" => 220,
        "img" => "http://www.pokepedia.fr/images/6/6b/Sprite_6_x_666delta.png"
    ],
    [
        "id" => 6,
        "name" => "Monster 6",
        "pv" => 300,
        "img" => "http://www.pokepedia.fr/images/1/15/Sprite_6_x_666fantaisie.png"
    ],
    [
        "id" => 7,
        "name" => "Monster 7",
        "pv" => 400,
        "img" => "http://www.pokepedia.fr/images/7/7c/Sprite_6_x_666floraison.png"
    ],
    [
        "id" => 8,
        "name" => "Monster 8",
        "pv" => 600,
        "img" => "http://www.pokepedia.fr/images/8/8b/Sprite_6_x_666glace.png"
    ],
    [
        "id" => 9,
        "name" => "Monster 9",
        "pv" => 900,
        "img" => "http://www.pokepedia.fr/images/d/d5/Sprite_6_x_666jungle.png"
    ],
    [
        "id" => 10,
        "name" => "Monster 10",
        "pv" => 1000,
        "img" => "http://www.pokepedia.fr/images/e/e4/Sprite_6_x_666pok%C3%A9_ball.png"
    ],
    [
        "id" => 11,
        "name" => "Monster 11 - BOSS",
        "pv" => 2000,
        "img" => "http://epiklyfungames.weebly.com/uploads/2/6/6/1/26616853/446679_orig.gif"
    ]
];
echo json_encode($array);