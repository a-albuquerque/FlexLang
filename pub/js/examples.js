/* FlexLang Library usage example */

"use strict";
const log = console.log



// In this example, the developer will provide language learning or academic
// textual content as a string, with line breaks being reproduced on the page.

// First, the developer provides the DOM node for insertion 

const i = $$$(document.querySelector(".insertPoint"))

// After that, the content is added
i.addText("justify", "Toronto est la ville la plus peuplée du Canada et la capitale de la province de l'Ontario. Elle se situe dans le Sud-Est du Canada, sur la rive nord-ouest du lac Ontario. La ville de Toronto compte plus de 2,9 millions d'habitants, faisant d'elle la quatrième ville la plus peuplée en Amérique du Nord. Le grand Toronto (GTA) compte plus de 7 millions d'habitants en 2020. La mégalopole du Golden Horseshoe, est le cœur, plus de 9,2 millions d'habitants en 2016, soit le quart de la population canadienne. Ville mondiale, Toronto est le centre bancaire, financier, commercial et artistique du Canada anglophone, et l'une des villes les plus multiculturelles et cosmopolites au monde. Les habitants de Toronto sont appelés les Torontois, the Torontonians en anglais. \n La région de Toronto, située sur un vaste plateau en pente jalonné de rivières, de ravins et de forêts, est habitée depuis plus de 10 000 ans. Après la brève installation d'un fort par les Français puis l’achat contesté de la région au peuple Mississauga par la Couronne britannique, les colons anglais fondent en 1793 la ville d'York, qui devient la capitale du Haut-Canada. Pendant la guerre de 1812, la ville est le théâtre de la bataille d'York et subit de lourds dégâts par les troupes américaines. York est renommée Toronto en 1834. Elle est désignée capitale de la province de l'Ontario en 1867 par la Confédération canadienne. La ville s'est depuis étendue au-delà de ses frontières d'origine, à la suite de plusieurs fusions, jusqu'à atteindre la superficie actuelle de 630,2 km2. \n La population particulièrement cosmopolite de Toronto reflète son rôle historique de destination des immigrants au Canada. Plus de 50 % des résidents appartiennent à un groupe de minorités visibles et plus de 200 origines ethniques distinctes sont représentées parmi ses habitants. Bien que la majorité des Torontois parlent l'anglais principalement, plus de 160 langues sont parlées dans la ville.")



