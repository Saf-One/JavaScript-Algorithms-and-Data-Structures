<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pokédex</title>
    <link rel="stylesheet" href="./styles.css" />
</head>
<body>
    <h1 class="title">Pokédex - Pokémon Database</h1>

    <div id="pokedex">
        <div id="left">
            <div id="logo"></div>
            <div id="bg_curve1_left"></div>
            <div id="bg_curve2_left"></div>
            <div id="curve1_left">
                <div id="buttonGlass">
                    <div id="reflect"></div>
                </div>
                <div id="miniButtonGlass1"></div>
                <div id="miniButtonGlass2"></div>
                <div id="miniButtonGlass3"></div>
            </div>
            <div id="curve2_left">
                <div id="junction">
                    <div id="junction1"></div>
                    <div id="junction2"></div>
                </div>
            </div>
            <div id="screen">
                <div id="topPicture">
                    <div id="buttontopPicture1"></div>
                    <div id="buttontopPicture2"></div>
                </div>
                <div id="picture">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="" height="170" id="sprite" />
                </div>
                <div id="buttonbottomPicture"></div>
                <div id="speakers">
                    <div class="sp"></div>
                    <div class="sp"></div>
                    <div class="sp"></div>
                    <div class="sp"></div>
                </div>
            </div>
            <div id="bigbluebutton"></div>
            <div id="barbutton1"></div>
            <div id="barbutton2"></div>
            <div id="cross">
                <div id="leftcross">
                    <div id="leftT"></div>
                </div>
                <div id="topcross">
                    <div id="upT"></div>
                </div>
                <div id="rightcross">
                    <div id="rightT"></div>
                </div>
                <div id="midcross">
                    <div id="midCircle"></div>
                </div>
                <div id="botcross">
                    <div id="downT"></div>
                </div>
            </div>
        </div>
        <div id="right">
            <div id="stats">
                <div id="stats1">
                    <p id="pokemon-name"></p>
                    <p id="pokemon-id"></p>
                </div><br>
                <p id="types"></p><br>
                <label class="stat-label">Weight:</label> <p id="weight" class="stat-value"></p><br>
                <label class="stat-label">Height:</label> <p id="height" class="stat-value"></p><br>
                <label class="stat-label">HP:</label> <p id="hp" class="stat-value"></p><br>
                <label class="stat-label">Attack:</label> <p id="attack" class="stat-value"></p><br>
                <label class="stat-label">Defense:</label> <p id="defense" class="stat-value"></p><br>
                <label class="stat-label">Speed:</label> <p id="speed" class="stat-value"></p><br>
                <label class="stat-label">Spc Atk:</label> <p id="special-attack" class="stat-value"></p><br>
                <label class="stat-label">Spc Dfs:</label> <p id="special-defense" class="stat-value"></p>
            </div>
            <div id="miniButtonGlass4"></div>
            <div id="miniButtonGlass5"></div>
            <div id="barbutton3"></div>
            <div id="barbutton4"></div>
            <div id="yellowBox1">
                <input type='text' id="search-input" placeholder='Enter Pokémon Name or ID' required/><br>
                <button id='search-button'>Search</button>
            </div>
            <div id="bg_curve1_right"></div>
            <div id="bg_curve2_right"></div>
            <div id="curve1_right"></div>
            <div id="curve2_right"></div>
        </div>
    </div>
    <div id="search"></div>

    <script src="./script.js"></script>
</body>
</html>
