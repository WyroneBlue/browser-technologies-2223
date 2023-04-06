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
Ik heb dit toegpast door mijn enquete werkend te maken zonder javascript en css. Wanneer css ondersteund wordt is het formulier een stuk mooier en beter te navigeren. Wanneer javascript ondersteund wordt, is het formulier nog beter te navigeren en krijg je ook betere validatie messages. Over het algemeen heb ik geprobeerd de javascript zo simpel mogelijk te houden, zodat wanneer iemand javascript ondersteund, alle functionaliteiten werken.

### Screenshots 🖼️
| Layer | Screenshot |
| --- | --- |
| HTML | ![HTML](./docs/enhancement/html-layer.jpeg) |
| CSS loaded| ![CSS](./docs/enhancement/css-layer.jpeg) |
| Javascript loaded| ![Javascript](./docs/enhancement/js-layer.jpeg) |

## feature detection 🧪

### Wat is feature detection?
Feature detection is het idee dat je eerst kijkt of de browser de functionaliteit ondersteunt die je wilt gebruiken. Als de browser de functionaliteit niet ondersteunt, dan gebruik je een andere manier om hetzelfde resultaat te bereiken.

### Hoe heb ik dit toegepast?
Voor mijn enquete heb ik voor feature detection een aantal dingen gedaan. Zoals [eerder benoemd](#hoe-heb-ik-dit-toegepast) heb ik geprobeerd de javascript zo simpel mogelijk te houden. Dit betekent dat ik de feature detection vooral voor de css heb moeten gebruiken.

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


##### Screenshots 🖼️
| Description | Screenshot |
| --- | --- |
| Zonder css check | ![HTML](./docs/enhancement/mark-without-csscheck.jpeg) |
| Met css check | ![CSS](./docs/enhancement/mark-with-csscheck.jpeg) |


## Darkmode 🌙

### Wat is darkmode?
Darkmode is een manier om je website te stylen met een donkere achtergrond. Dit is handig voor mensen die veel op hun scherm kijken, omdat het minder vermoeiend is voor de ogen. Daarnaast is het ook handig voor mensen die in een donkere ruimte zitten, omdat het scherm dan minder fel is.

### Mijn toepassing voor darkmode
Ik heb zoveel mogelijk geporbeerd dezelde colorscheme te gebruiken en te reversen en tegeljkertijd ook een goed contrast te behouden.

| Form | Darkmode | Lightmode |
| --- | --- | --- |
| Normaal | ![HTML](./docs/darkmode/form-normal-dark.jpeg) | ![CSS](./docs/darkmode/form-normal-light.jpeg) |
| Fout | ![HTML](./docs/darkmode/form-error-dark.jpeg) | ![CSS](./docs/darkmode/form-error-light.jpeg) |
| Succes | ![HTML](./docs/darkmode/form-success-dark.jpeg) | ![CSS](./docs/darkmode/form-success-light.jpeg) |


## Browser testing 🌐
De enquete heb ik getest op verschillende browsers om te kijken welke functionaliteiten wel en niet ondersteund worden.

Ik heb de browsers getest op de volgende punten:
- Werkt de enquete?
- Werkt de validatie?
- Is de enquete responsive?
- blijven de radio buttons ingevuld bij pagina verwisseling

De browsers die ik heb getest zijn:
- Desktop
  - Chromium Based: Edge
  - Niet Chromium Based: Firefox
- Mobile
  - Safari
  - samsung internet
- Obscure browser
  - PrinceXML

### Algemene bevindingen
Over het algemeen werkt de enquete op alle browsers die ik heb getest. Dit komt vooral omdat de pagina's gebruik maken van de basic formulier en wordt over genomen wanneer javascript wel werkt. De enquete werkt dus ook zonder javascript en css, maar is dan niet zo mooi en/of gebruiksvriendelijk.

Bij het uitzetten van de javascript springt de validatie mooi over op de html validatie. Dit is een mooie fallback en zorgt ervoor dat de enquete toch een werkende validatie heeft.

#### Desktop browsers

##### Edge
De enquete zelf heb ik gemaakt in Edge. Ik heb de enquete getest in Edge en deze werkt perfect. De enquete is mooi responsive en de validatie werkt ook goed. Er zal dus geen enkele functionaliteit ontbreken in Edge. En dit betekent dus ook dat er geen andere browser is waar de enquete beter op zal werken dan in Edge.

| Description |  Afbeelding |
| --- | --- |
| Zero state | ![HTML](./docs/edge/screen-1.jpeg) |
| Error state | ![HTML](./docs/edge/screen-2.jpeg) |
| Success state | ![HTML](./docs/edge/screen-3.jpeg) |
| Radio Error state | ![HTML](./docs/edge/screen-4.jpeg) |
| Radio die nog aangepast moet worden, maar wel active is | ![HTML](./docs/edge/indetermented-radio.jpeg) |

##### Firefox
Op firefox, net als op edge, werkt de enquete en de validatie perfect. Ook is de enquete mooi responsive. Het enige waar firefox een beetje raar bij doet, zijn de radio buttons. Deze werken wel, maar de state van de :has wordt alleen aangepast wanneer je over het element heen gaat of wanneer je de pagina breedte aanpast.

Dit komt omdat de has functionaliteit van firefox nog een beetje buggy is. Ik hoop en neem aan dat dit in de toekomst verholpen zal worden. Want op dit moment heb ik daar niet echt een oplossing voor.

Ok bij het verwisselen van pagina's zie je een split second de pagina zonder css en dan pas met css. Dit is een beetje jammer, maar ik heb geen oplossing voor dit probleem.

Dus qua functionaliteit werkt de enquete op firefox ook perfect. Het enige wat niet helemaal goed werkt, is de :has functionaliteit van firefox, waardoor de buttons niet altijd de juiste state hebben. Dit laat het dus lijken dat je 2 radios tegelijkertijd kan selecteren, maar dit is niet het geval.

| # | Afbeelding |
| --- | --- |
| 1 | ![HTML](./docs/firefox/radio-buttons.png) |


#### Mobile browsers

##### Samsung internet
Ik heb de enquete getest op Samsung internet. Dit is een browser die standaard op Samsung telefoons staat. Mijn enquete werkt hier perfect op en is ook mooi responsive, waar ik eerlijk gezegd verbaasd over was. Ik had verwacht dat er een aantal dingen niet zouden werken of dat het er niet mooi uit zou zien. Maar dit was niet het geval.

Wanneer je dus de samsung browser gebruikt, dan is de enquete perfect te gebruiken!

| # | Afbeelding |
| --- | --- |
| 1 | ![HTML](./docs/samsung/screen-1.jpg) |
| 2 | ![HTML](./docs/samsung/screen-2.jpg) |
| 3 | ![HTML](./docs/samsung/screen-3.jpg) |

##### Safari
Safari was eigenlijk een beetje een apart verhaal. De enquete werkt prima en is ook mooi responsive alleen soms gingen de radio buttons opeens stuk. ik weet niet helemaal hoe dat komt. oook was de positioning van de radio buttons niet helemaal goed. Maar dit is een kleinigheidje. Het is duidelijk te zien waar de check bij staat.
De input date heeft van zichzelf een color die heel licht is, dus hier zal ik rekening mee moeten houden.

| # | Afbeelding |
| --- | --- |
| 1 | ![HTML](./docs/safari/screen-1.jpg) |
| 2 | ![HTML](./docs/safari/screen-2.jpg) |
| 3 | ![HTML](./docs/safari/screen-3.jpg) |


#### Obscure browser
Bij het testen van de obscure browser PrinceXML, wist ik niet helemaal wat ik kon verwachten. Omdat de "browser" je website naar pdf converteerd.

Ik heb verder niet echt uit kunnen vogelen hoe ik de enquete kon testen. Dus ik heb de enquete getest door de pdf te openen in een browser.

Eigenlijk is het enige dat werkt de linkjes.

In PrinceXml krijg je wel gelijk een goed overzicht te zien van de properties en features die niet ondersteund worden. Dit is wel handig om te weten, want dan weet je eigenlijk gelijk waar je betere fallback voor kan schrijven.

| Description | Afbeelding |
| --- | --- |
| Converted pdf | ![HTML](./docs/prince/screen-1.png) |
| Feature messages | ![HTML](./docs/prince/screen-2.png) |

