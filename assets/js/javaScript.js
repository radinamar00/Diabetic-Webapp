const mainScreen = document.getElementById('mainScreen');
const nutritionScreen = document.getElementById('nutritionScreen');
const vegAndFruitScreen = document.getElementById('vegAndFruitScreen');
const recipesScreen = document.getElementById('recipesScreen');
const recipeScreen = document.getElementById('recipeScreen');
const reminders = document.getElementById('reminders');
const scanScreen = document.getElementById('scanScreen');

function displayElements(elementsToShow, elementsToHide) {
    for (let i = 0; i <= elementsToShow.length - 1; i++) {
        elementsToShow[i].classList.remove('hidden');
    }

    for (let i = 0; i <= elementsToHide.length - 1; i++) {
        elementsToHide[i].classList.add('hidden');
    }
}

document.getElementById('mainScreen-nutri').addEventListener('click', function () {
    displayElements([nutritionScreen], [mainScreen, vegAndFruitScreen, recipesScreen, recipeScreen, reminders, scanScreen]);
});

document.getElementById('nutritionScreen-back-image').addEventListener('click', function () {
    displayElements([mainScreen], [nutritionScreen, vegAndFruitScreen, recipesScreen, recipeScreen, reminders, scanScreen]);
});

document.getElementById('nutritionVegAndFruit').addEventListener('click', function () {
    displayElements([vegAndFruitScreen], [mainScreen, nutritionScreen, recipesScreen, recipeScreen, reminders, scanScreen]);
});

document.getElementById('nutritionScreen-back-image2').addEventListener('click', function () {
    displayElements([nutritionScreen], [mainScreen, vegAndFruitScreen, recipesScreen, recipeScreen, reminders, scanScreen]);
});

document.getElementById('mainScreen-recipe').addEventListener('click', function () {
    displayElements([recipesScreen], [mainScreen, nutritionScreen, vegAndFruitScreen, recipeScreen, reminders, scanScreen]);
});

document.getElementById('recipesScreen-back-image3').addEventListener('click', function () {
    displayElements([mainScreen], [nutritionScreen, vegAndFruitScreen, recipesScreen, recipeScreen, reminders, scanScreen]);
});

document.getElementById('vegAndFruitScreen-item1').addEventListener('click', function () {
    displayElements([recipeScreen], [mainScreen, nutritionScreen, vegAndFruitScreen, recipesScreen, reminders, scanScreen]);
});

document.getElementById('recipeScreen-back-image').addEventListener('click', function () {
    displayElements([recipesScreen], [mainScreen, nutritionScreen, vegAndFruitScreen, recipeScreen, reminders, scanScreen]);
});

document.getElementById('mainScreen-reminder').addEventListener('click', function () {
    displayElements([reminders], [mainScreen, nutritionScreen, vegAndFruitScreen, recipesScreen, recipeScreen, scanScreen]);
});

document.getElementById('back-image-reminder').addEventListener('click', function () {
    displayElements([mainScreen], [nutritionScreen, vegAndFruitScreen, recipesScreen, recipeScreen, reminders, scanScreen]);
});

document.getElementById('mainScreen-scan').addEventListener('click', function () {
    displayElements([scanScreen], [mainScreen, nutritionScreen, vegAndFruitScreen, recipesScreen, recipeScreen, reminders]);
});

document.getElementById('scanScreen-back-image').addEventListener('click', function () {
    displayElements([mainScreen], [nutritionScreen, vegAndFruitScreen, recipesScreen, recipeScreen, reminders, scanScreen]);
});

document.getElementById('fancyButton').addEventListener('click', function (){
    let iconChange = document.getElementById('fancyButton');

    if (iconChange.classList.contains('extraImg1')) {
        iconChange.classList.remove('extraImg1');
        iconChange.classList.add('extraImg2');
    } else {
        iconChange.classList.remove('extraImg2');
        iconChange.classList.add('extraImg1');
    } 
});