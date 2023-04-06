# Browser Technologies - De eindopdracht - Enquete about the minor Web Development


## Case description ✍🏾
> Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Ik wil duidelijk zien waar ik ben en hoeveel ik nog te doen heb. Ik wil eerder ingevulde vragen kunnen herzien. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

### Vereisten voor de Enquete ✅
- Studentgegevens (naam + nummer) verplicht
- Per vak
	- naam
	- docent(en)
	- weken waarin je het vak deed
	- beoordeling op schaal 1-10 van
	- lesstof (hoe moeilijk is het)
	- uitleg (hoe duidelijk is het uitgelegd)
	- eigen inzicht (hoe goed snap je het)
	- Zorg ervoor dat de gebruiker niet teveel formuliervelden in 1 keer ziet.


### Core Functionalities ⚙️
- Validatie: Zorg ervoor dat het formulier compleet wordt ingevuld. Geef duidelijke foutmeldingen. Bedenk zelf wanneer en hoe de validatie zal plaatsvinden.
- Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.
- Duidelijke interface waarmee gebruiker terug kan naar vorige vragen. (En misschien ook om een vraag over te slaan?)
- Duidelijke interface die aangeeft waar je bent in het formulier
- Je mag geen zichtbare radio buttons gebruiken
- Het formulier moet een light mode en dark mode hebben.

## Demo link 🔗
[Link naar de demo](https://browser-technologies-2223-production-c836.up.railway.app/)

## Progressive Enhancement 🛴

### Wat is Progressive Enhancement?
Progressive enhancement is het idee dat je een website zo simpel mogelijk maakt, en vervolgens de functionaliteit toevoegt die de browser ondersteunt. Dit is een belangrijk principe in het ontwerpen van websites, omdat het ervoor zorgt dat je website op zoveel mogelijk apparaten werkt. Het is namelijk zo dat mensen niet altijd de nieuwste technologie hebben, en dus ook niet de nieuwste browsers. Het is daarom belangrijk dat je website ook werkt op oudere browsers.

### Hoe heb ik dit toegepast?
Ik heb dit toegpast door mijn enquete werkend te maken zonder javascript en css. Wanneer css ondersteund wordt is het formulier een stuk mooier en beter te navigeren. Wanneer javascript ondersteund wordt, is het formulier nog beter te navigeren en krijg je ook betere validatie messages.

### Screenshots
| Layer | Screenshot |
| --- | --- |
| HTML | ![HTML](./docs/enhancement/html-layer.jpeg) |
| CSS loaded| ![CSS](./docs/enhancement/css-layer.jpeg) |
| Javascript loaded| ![Javascript](./docs/enhancement/js-layer.jpeg) |

## feature detection 🧪

### Wat is feature detection?
Feature detection is het idee dat je eerst kijkt of de browser de functionaliteit ondersteunt die je wilt gebruiken. Als de browser de functionaliteit niet ondersteunt, dan gebruik je een andere manier om hetzelfde resultaat te bereiken.

### Hoe heb ik dit toegepast?
Voor mijn enquete heb ik voor feature detection een aantal dingen gedaan.

#### @supports
Ik bekijk voor mijn submit button of de background image ondersteund wordt. Als dit niet het geval is, dan is deze een simpelere kleur. Als deze wel ondersteund wordt, dan heeft de submit knop een gradient kleur. Dit doe ik met de @supports rule en dat ziet er zo uit:
```css
@supports (background-image: linear-gradient(var(--hva-white), var(--primary-color), var(--button-bg), rgba(0, 0, 0, .9))){
    form button {
        background-image: linear-gradient(var(--hva-white), var(--primary-color), var(--button-bg), rgba(0, 0, 0, .9));
    }
}
```

#### CSS loaded
In get geval dat mijn css niet mocht laden en mijn js wel, haal ik in mijn javascript de stylesheet uit de DOM. Dan bekijk of de stylesheet ervan geladen is. Pas wanneer deze geladen is voeg ik de checks toe van de validatie. Anders zijn deze zichtbaar, wanneer de css nog niet geladen is en dat kan onduidelijk zijn.

Dit heb ik gedaan met de volgende code:
```js

const styles = document.querySelector("link[href='/css/app.css']");
const cssLoaded = () => Boolean(styles.sheet);

export const addChecksToForm = () => {

    if (cssLoaded()){
        const spans = document.querySelectorAll('span');
        spans.forEach(span => {
            span.textContent = '✅';
        });
    }
}

window.addEventListener('load', addChecksToForm);
```


##### Screenshots
| Description | Screenshot |
| --- | --- |
| Zonder css check | ![HTML](./docs/enhancement/mark-without-csscheck.jpeg) |
| Met css check | ![CSS](./docs/enhancement/mark-with-csscheck.jpeg) |

