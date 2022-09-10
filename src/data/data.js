const data = [
	{
		id: 1,
		question: 'Najpopularniejsze imię nadawane chłopcom w 2020 r. to:',
		answers: [
			{
				text: 'Edward',
				correct: false,
			},
			{
				text: 'Antoni',
				correct: true,
			},
			{
				text: 'Jarosław',
				correct: false,
			},
			{
				text: 'Zdzisław',
				correct: false,
			},
		],
	},
	{
		id: 2,
		question: 'Opłata reprograficzna dotyczy:',
		answers: [
			{
				text: 'kopiowych ołówków',
				correct: false,
			},
			{
				text: 'kopiowanych uszu',
				correct: false,
			},
			{
				text: 'papieru A1',
				correct: false,
			},
			{
				text: 'papieru A4',
				correct: true,
			},
		],
	},
	{
		id: 3,
		question: 'Najwięcej glukozy zużywa',
		answers: [
			{
				text: 'trzustka',
				correct: false,
			},
			{
				text: 'wątroba',
				correct: false,
			},
			{
				text: 'serce',
				correct: false,
			},
			{
				text: 'mózg',
				correct: true,
			},
		],
	},
	{
		id: 4,
		question: 'Jak się okazuje, koty i kotwice mają sporo wspólnego. Jedne i drugie zazwyczaj mają:',
		answers: [
			{
				text: 'uszy, łapy i pazury',
				correct: true,
			},
			{
				text: 'oczy i ogony',
				correct: false,
			},
			{
				text: 'łaty i pręgi',
				correct: false,
			},
			{
				text: 'chód pełen gracji',
				correct: false,
			},
		],
	},
	{
		id: 5,
		question: 'Człowiek musi przyjmować niektóre aminokwasy z zewnątrz w przeciwieństwie do:',
		answers: [
			{
				text: 'kawii domowej',
				correct: false,
			},
			{
				text: 'kawki zwyczajnej',
				correct: false,
			},
			{
				text: 'barszczu zwyczajnego',
				correct: true,
			},
			{
				text: 'węża zbożowego',
				correct: false,
			},
		],
	},
	{
		id: 6,
		question: 'Jeśli kaganiec brachycefaliczny, to dla:',
		answers: [
			{
				text: 'boksera',
				correct: true,
			},
			{
				text: 'biegacza',
				correct: false,
			},
			{
				text: 'skoczka narciarskiego',
				correct: false,
			},
			{
				text: 'szermierza',
				correct: false,
			},
		],
	},
	{
		id: 7,
		question: 'Kabanos mieści słowo kaban, które oznacza:',
		answers: [
			{
				text: 'cielaka',
				correct: false,
			},
			{
				text: 'wieprzka',
				correct: true,
			},
			{
				text: 'barana',
				correct: false,
			},
			{
				text: 'osła',
				correct: false,
			},
		],
	},
	{
		id: 8,
		question: 'In silico to termin naukowy informujący, że badania zostały przeprowadzone:',
		answers: [
			{
				text: 'w naczyniach z tworzywa',
				correct: false,
			},
			{
				text: 'w miejscu',
				correct: false,
			},
			{
				text: 'za pomocą komputera',
				correct: true,
			},
			{
				text: 'na silikonowych modelach',
				correct: false,
			},
		],
	},
	{
		id: 9,
		question: 'Co rozciąga się na terytorium jedenastu państw?',
		answers: [
			{
				text: 'Kaukaz',
				correct: false,
			},
			{
				text: 'Jangcy',
				correct: false,
			},
			{
				text: 'Niasa',
				correct: false,
			},
			{
				text: 'Sahara',
				correct: true,
			},
		],
	},
	{
		id: 10,
		question: 'Z tego wszystkiego najrzadziej spotyka się dystopię:',
		answers: [
			{
				text: 'w filmach science fiction',
				correct: false,
			},
			{
				text: 'antyutopijnych powieściach',
				correct: false,
			},
			{
				text: 'tułowia',
				correct: true,
			},
			{
				text: 'nerki',
				correct: false,
			},
		],
	},
	{
		id: 11,
		question: 'Adenina, guanina, cytozyna, tymina i uracyl to:',
		answers: [
			{
				text: 'reguły potasowe',
				correct: false,
			},
			{
				text: 'pryncypia sodowe',
				correct: false,
			},
			{
				text: 'normy wapniowe',
				correct: false,
			},
			{
				text: 'zasady azotowe',
				correct: true,
			},
		],
	},
	{
		id: 12,
		question:
			'Trzydziestego pierwszego dnia którego miesiąca 1859 roku po raz pierwszy zabrzmiał dzwon na londyńskiej wieży Big Ben?',
		answers: [
			{
				text: 'kwietnia',
				correct: false,
			},
			{
				text: 'maja',
				correct: true,
			},
			{
				text: 'września',
				correct: false,
			},
			{
				text: 'listopada',
				correct: false,
			},
		],
	},
	{
		id: 13,
		question: 'Artykuł 182 Kodeksu cywilnego reguluje kwestię pościgu za:',
		answers: [
			{
				text: 'złodziejem drobiu',
				correct: false,
			},
			{
				text: 'stadem muflonów',
				correct: false,
			},
			{
				text: 'rojem pszczół',
				correct: true,
			},
			{
				text: 'niewiernym małżonkiem',
				correct: false,
			},
		],
	},
	{
		id: 14,
		question: 'Z tego zestawu formą najbardziej przypomina owoc morwy:',
		answers: [
			{
				text: 'płód',
				correct: false,
			},
			{
				text: 'gameta żeńska',
				correct: false,
			},
			{
				text: 'morula',
				correct: true,
			},
			{
				text: 'gameta męska',
				correct: false,
			},
		],
	},
	{
		id: 15,
		question: 'Łęczysko, które składa się z ramion i majdanu, to główny element:',
		answers: [
			{
				text: 'łuku',
				correct: true,
			},
			{
				text: 'żołnierskiego płaszcza',
				correct: false,
			},
			{
				text: 'cyrkla',
				correct: false,
			},
			{
				text: 'liturgicznego świecznika',
				correct: false,
			},
		],
	},
	{
		id: 16,
		question: 'W 1817 r. warszawskie Łazienki Królewskie zostały sprzedane carowi:',
		answers: [
			{
				text: 'Iwanowi IV Groźnemu',
				correct: false,
			},
			{
				text: 'Piotrowi I Wielkiemu',
				correct: false,
			},
			{
				text: 'Aleksandrowi I Romanowowi',
				correct: true,
			},
			{
				text: 'Mikołajowi II Romanowowi',
				correct: false,
			},
		],
	},
	{
		id: 17,
		question: '"Mona Lisa" z Luwru to obraz namalowany:',
		answers: [
			{
				text: 'na tkaninie',
				correct: false,
			},
			{
				text: 'na metalu',
				correct: false,
			},
			{
				text: 'na drewnie',
				correct: true,
			},
			{
				text: 'na murze',
				correct: false,
			},
		],
	},
	{
		id: 18,
		question: 'Piastuje stanowisko Chief Mousera u premiera Wielkiej Brytanii na Downing Street 10:',
		answers: [
			{
				text: 'koń',
				correct: false,
			},
			{
				text: 'szef ochrony',
				correct: false,
			},
			{
				text: 'ogrodnik',
				correct: false,
			},
			{
				text: 'kot',
				correct: true,
			},
		],
	},
	{
		id: 19,
		question: 'Pała z solfeżu to:',
		answers: [
			{
				text: 'jedynka z czytania nut',
				correct: true,
			},
			{
				text: 'drąg z twardego drewna',
				correct: false,
			},
			{
				text: 'inaczej osioł dardanelski',
				correct: false,
			},
			{
				text: 'w slangu ogolona głowa',
				correct: false,
			},
		],
	},
	{
		id: 20,
		question:
			'Chyba masz pluskwy w domu, jeśli budzisz się pogryziony, na pościeli są brunatne plamki, a wytężywszy węch, czujesz woń:',
		answers: [
			{
				text: 'morskiej bryzy',
				correct: false,
			},
			{
				text: 'świeżo skoszonej trawy',
				correct: false,
			},
			{
				text: 'świeżo zaparzonej kawy',
				correct: false,
			},
			{
				text: 'zgniłych malin',
				correct: true,
			},
		],
	},
	{
		id: 21,
		question: 'Psy saneczkują:',
		answers: [
			{
				text: 'tylko zimą',
				correct: false,
			},
			{
				text: 'tylko na saneczkach',
				correct: false,
			},
			{
				text: 'gdy chcą się popisać',
				correct: false,
			},
			{
				text: 'gdy im coś dolega',
				correct: true,
			},
		],
	},
	{
		id: 22,
		question: 'Co jako dodatek do jedzenia ma oznaczenie E175?',
		answers: [
			{
				text: 'złoto',
				correct: true,
			},
			{
				text: 'srebro',
				correct: false,
			},
			{
				text: 'platyna',
				correct: false,
			},
			{
				text: 'rtęć',
				correct: false,
			},
		],
	},

	{
		id: 23,
		question: 'Ćmielów i Chodzież słyną z produkcji:',
		answers: [
			{
				text: 'samolotów',
				correct: true,
			},
			{
				text: 'leczniczych wód',
				correct: false,
			},
			{
				text: 'wagonów kolejowych',
				correct: false,
			},
			{
				text: 'porcelany',
				correct: false,
			},
		],
	},
	{
		id: 24,
		question: 'Czego zakręcane wieczko ma taneczną nazwę?',
		answers: [
			{
				text: 'szkatułki',
				correct: false,
			},
			{
				text: 'puderniczki',
				correct: false,
			},
			{
				text: 'trumienki',
				correct: false,
			},
			{
				text: 'słoika',
				correct: true,
			},
		],
	},
	{
		id: 25,
		question: 'Do sejmowej zamrażarki trafiają:',
		answers: [
			{
				text: 'temperamentni posłowie',
				correct: false,
			},
			{
				text: 'skargi na marszałka sejmu',
				correct: false,
			},
			{
				text: 'projekty niektórych ustaw',
				correct: true,
			},
			{
				text: 'nachalni lobbyści',
				correct: false,
			},
		],
	},
	{
		id: 26,
		question: 'Szejk pije szejka, czyli co:',
		answers: [
			{
				text: 'potrójne espresso',
				correct: false,
			},
			{
				text: 'zieloną herbatę',
				correct: false,
			},
			{
				text: 'napój mleczno-owocowy',
				correct: true,
			},
			{
				text: 'wino gronowe',
				correct: false,
			},
		],
	},
	{
		id: 27,
		question: 'Komu w 1917 roku Matka Boska przekazała trzy tajemnice fatimskie?',
		answers: [
			{
				text: 'skazańcom',
				correct: false,
			},
			{
				text: 'pastuszkom',
				correct: true,
			},
			{
				text: 'żołnierzom',
				correct: false,
			},
			{
				text: 'biskupom',
				correct: false,
			},
		],
	},
	{
		id: 28,
		question: 'Czym była zielona książeczka, którą w 2001 roku zastąpiła szaro-różowa karta z poliwęglanu?',
		answers: [
			{
				text: 'książeczką oszczędnościową',
				correct: false,
			},
			{
				text: 'dowodem osobistym',
				correct: true,
			},
			{
				text: 'prawem jazdy',
				correct: false,
			},
			{
				text: 'książeczką zdrowia',
				correct: false,
			},
		],
	},
	{
		id: 29,
		question: 'Jaki ptak ma oczy osadzone frontalnie i otoczone promieniście ułożonymi piórami?',
		answers: [
			{
				text: 'brzegówka',
				correct: false,
			},
			{
				text: 'dymówka',
				correct: false,
			},
			{
				text: 'płomykówka',
				correct: false,
			},
			{
				text: 'bogatka',
				correct: true,
			},
		],
	},
	{
		id: 30,
		question: 'Gwiazdy, które tworzą dyszel Wielkiego Wozu, są jednocześnie:',
		answers: [
			{
				text: 'ogonem Wielkiej Niedźwiedzicy',
				correct: true,
			},
			{
				text: 'kolcem Skorpiona',
				correct: false,
			},
			{
				text: 'szyją Żyrafy',
				correct: false,
			},
			{
				text: 'łapą Lwa',
				correct: false,
			},
		],
	},
	{
		id: 31,
		question: 'Znajdź błąd.',
		answers: [
			{
				text: 'handlarz starzyzny',
				correct: true,
			},
			{
				text: 'handlarz narkotyków',
				correct: false,
			},
			{
				text: 'handlarz złotem',
				correct: false,
			},
			{
				text: 'handlarz żywym towarem',
				correct: false,
			},
		],
	},
	{
		id: 32,
		question:
			'Tempura to panierowane i smażone na głębokim oleju ryby, krewetki, kalmary, małże. Skąd w XVI wieku przywędrowała do Japonii?',
		answers: [
			{
				text: 'z Holandii',
				correct: false,
			},
			{
				text: 'z Portugalii',
				correct: true,
			},
			{
				text: 'z Rosji',
				correct: false,
			},
			{
				text: 'z Chin',
				correct: false,
			},
		],
	},
	{
		id: 33,
		question: 'Co takiego zrobił cesarz Henryk IV we włoskiej Canossie, że historia ta zakorzeniła się w języku?',
		answers: [
			{
				text: 'poślubił wieśniaczkę',
				correct: false,
			},
			{
				text: 'przekazał władzę synowi',
				correct: false,
			},
			{
				text: 'rozdał majątek ludowi',
				correct: false,
			},
			{
				text: 'ukorzył się przed papieżem',
				correct: true,
			},
		],
	},
	{
		id: 34,
		question: 'Obraz Rembrandta "Krajobraz z miłosiernym Samarytaninem" opowiada historię:',
		answers: [
			{
				text: 'ofiary zabójców i jego zbawcy',
				correct: true,
			},
			{
				text: 'nierządnicy i Chrystusa',
				correct: false,
			},
			{
				text: 'opatrywania trędowatych',
				correct: false,
			},
			{
				text: 'powrotu Samarytanina do Samary',
				correct: false,
			},
		],
	},
	{
		id: 35,
		question:
			' Incydent, który zapoczątkował pasmo zdarzeń prowadzących do katastrofy promu kosmicznego Columbia w 2003 r., wydarzył się:',
		answers: [
			{
				text: 'podczas startu',
				correct: true,
			},
			{
				text: 'w kosmosie',
				correct: false,
			},
			{
				text: 'w drodze na Ziemię',
				correct: false,
			},
			{
				text: 'podczas lądowania',
				correct: false,
			},
		],
	},
	{
		id: 36,
		question: 'Godłem ZSRR były skrzyżowane sierp i młot, a godłem NRD młot:',
		answers: [
			{
				text: 'skrzyżowany z kielnią',
				correct: false,
			},
			{
				text: 'wystający spod cyrkla',
				correct: true,
			},
			{
				text: 'spoczywający na księdze',
				correct: false,
			},
			{
				text: 'pneumatyczny',
				correct: false,
			},
		],
	},
	{
		id: 37,
		question: 'Co nie wchodzi w skład popłodu:',
		answers: [
			{
				text: 'płód',
				correct: false,
			},
			{
				text: 'łożysko',
				correct: false,
			},
			{
				text: 'pępowina',
				correct: false,
			},
			{
				text: 'błony płodowe',
				correct: false,
			},
		],
	},
	{
		id: 38,
		question: 'Miejsce esówki i karpiówki jest:',
		answers: [
			{
				text: 'na dachu',
				correct: true,
			},
			{
				text: 'w jeziorze',
				correct: false,
			},
			{
				text: 'w sklepie z rowerami',
				correct: false,
			},
			{
				text: 'na głowie',
				correct: false,
			},
		],
	},
	{
		id: 39,
		question: 'Który to nie przydomek klubu piłkarskiego Juventus?',
		answers: [
			{
				text: 'Zebry',
				correct: false,
			},
			{
				text: 'Szerszenie',
				correct: true,
			},
			{
				text: 'Stara Dama',
				correct: false,
			},
			{
				text: 'Biało-Czarni',
				correct: false,
			},
		],
	},
	{
		id: 40,
		question: 'Zebrać się szybko to nie:',
		answers: [
			{
				text: 'szast-prast',
				correct: false,
			},
			{
				text: 'w trymiga',
				correct: false,
			},
			{
				text: 'opieszale',
				correct: true,
			},
			{
				text: 'szparko',
				correct: false,
			},
		],
	},
	{
		id: 41,
		question:
			'Bawarski Neuschwanstein wygląda zupełnie jak zamek Śpiącej Królewny. To jedna z największych atrakcji turystycznych:',
		answers: [
			{
				text: 'Czech',
				correct: false,
			},
			{
				text: 'Niemiec',
				correct: true,
			},
			{
				text: 'Stanów Zjednoczonych',
				correct: false,
			},
			{
				text: 'Brazylii',
				correct: false,
			},
		],
	},
	{
		id: 42,
		question: 'Inaczej Ilion:',
		answers: [
			{
				text: 'Lenin',
				correct: false,
			},
			{
				text: 'Troja',
				correct: true,
			},
			{
				text: 'Trojan',
				correct: false,
			},
			{
				text: 'Stalin',
				correct: false,
			},
		],
	},
	{
		id: 43,
		question: 'Bliźniak to nie:',
		answers: [
			{
				text: 'jesienny znak zodiaku',
				correct: true,
			},
			{
				text: 'rodzaj zabudowy',
				correct: false,
			},
			{
				text: 'brat z tą samą datą urodzenia',
				correct: false,
			},
			{
				text: 'sweter i bluzka w komplecie',
				correct: false,
			},
		],
	},
	{
		id: 44,
		question: 'Zawiany, trafiony, narąbany albo:',
		answers: [
			{
				text: 'zarżnięty',
				correct: false,
			},
			{
				text: 'urżnięty',
				correct: true,
			},
			{
				text: 'porżnięty',
				correct: false,
			},
			{
				text: 'orżnięty',
				correct: false,
			},
		],
	},
	{
		id: 45,
		question:
			'Jaką bronią zawieszoną na końskim włosie posługiwał się Dionizjusz, by uświadomić niepewność losu władcy zawistnemu dworzaninowi?',
		answers: [
			{
				text: 'włócznią',
				correct: false,
			},
			{
				text: 'mieczem',
				correct: true,
			},
			{
				text: 'maczugą',
				correct: false,
			},
			{
				text: 'sztyletem',
				correct: false,
			},
		],
	},
	{
		id: 46,
		question: 'Dziób dziobaka australijskiego przypomina kształtem ten:',
		answers: [
			{
				text: 'orli',
				correct: false,
			},
			{
				text: 'indyczy',
				correct: false,
			},
			{
				text: 'kaczy',
				correct: true,
			},
			{
				text: 'perliczy',
				correct: false,
			},
		],
	},
	{
		id: 47,
		question: 'Nieryż wśród ryżu.',
		answers: [
			{
				text: 'basmanti',
				correct: false,
			},
			{
				text: 'carnaroli',
				correct: false,
			},
			{
				text: 'arborio',
				correct: false,
			},
			{
				text: 'rigatoni',
				correct: true,
			},
		],
	},
	{
		id: 48,
		question: ' W Wigierskim Parku Narodowym ponad 60 proc. terenów zajmują:',
		answers: [
			{
				text: 'wody',
				correct: false,
			},
			{
				text: 'lasy',
				correct: true,
			},
			{
				text: 'góry',
				correct: false,
			},
			{
				text: 'wydmy',
				correct: false,
			},
		],
	},
	{
		id: 49,
		question: 'Kropka, przecinek i średnik to przykłady znaków:',
		answers: [
			{
				text: 'postojowych',
				correct: false,
			},
			{
				text: 'przystankowych',
				correct: false,
			},
			{
				text: 'przerywnikowych',
				correct: false,
			},
			{
				text: 'przestankowych',
				correct: true,
			},
		],
	},
	{
		id: 50,
		question: 'Próbować zrozumieć to zachodzić:',
		answers: [
			{
				text: 'do głowy',
				correct: false,
			},
			{
				text: 'za głowę',
				correct: false,
			},
			{
				text: 'w głowę',
				correct: true,
			},
			{
				text: 'pod głowę',
				correct: false,
			},
		],
	},
	{
		id: 51,
		question: 'Temudżyn, który był twórcą imperium mongolskiego, od 1206 r. znany był światu jako:',
		answers: [
			{
				text: 'Juliusz Cezar',
				correct: false,
			},
			{
				text: 'Hannibal',
				correct: false,
			},
			{
				text: 'Czyngis-chan',
				correct: true,
			},
			{
				text: 'Sulejman Wielki',
				correct: false,
			},
		],
	},
	{
		id: 52,
		question: 'Czym według staropolskiego przysłowia ludzie ludzi niewolą?',
		answers: [
			{
				text: 'Czapką, papką i solą',
				correct: true,
			},
			{
				text: 'Skórą, furą i komórą',
				correct: false,
			},
			{
				text: 'Poglądów kontrolą',
				correct: false,
			},
			{
				text: 'Wszystkim, na co pozwolą',
				correct: false,
			},
		],
	},
	{
		id: 53,
		question: 'Co duje?',
		answers: [
			{
				text: 'mgła',
				correct: false,
			},
			{
				text: 'grad',
				correct: false,
			},
			{
				text: 'deszcz',
				correct: false,
			},
			{
				text: 'wiatr',
				correct: true,
			},
		],
	},
	{
		id: 54,
		question: 'Do Górnej Doliny Środkowego Renu turyści jeżdżą podziwiać liczne:',
		answers: [
			{
				text: 'wyładowania atmosferyczne',
				correct: false,
			},
			{
				text: 'gejzery i kaldery',
				correct: false,
			},
			{
				text: 'starożytne grobowce',
				correct: false,
			},
			{
				text: 'średniowieczne zamki',
				correct: true,
			},
		],
	},
	{
		id: 55,
		question: 'Kto walczył z Ivanem Drago, w którego wcielił się Dolph Lundgren?',
		answers: [
			{
				text: 'Luke Skywalker',
				correct: false,
			},
			{
				text: 'Indiana Jones',
				correct: false,
			},
			{
				text: 'Rocky Balboa',
				correct: false,
			},
			{
				text: 'John McClane',
				correct: false,
			},
		],
	},
	{
		id: 56,
		question: 'Co jest prawdą o szakalach złocistych?',
		answers: [
			{
				text: 'pojawiają się w polskich lasach',
				correct: true,
			},
			{
				text: 'nie dla nich monogamia',
				correct: false,
			},
			{
				text: 'nie mają ogonów',
				correct: false,
			},
			{
				text: 'jedzą tylko padlinę',
				correct: false,
			},
		],
	},
	{
		id: 57,
		question: 'Jak nazywasz małego wieloryba?',
		answers: [
			{
				text: 'Kid',
				correct: false,
			},
			{
				text: 'Calf',
				correct: true,
			},
			{
				text: 'Kociak',
				correct: false,
			},
			{
				text: 'Fishlet',
				correct: false,
			},
		],
	},
	{
		id: 58,
		question: 'Jak nazwiesz stan stały wody?',
		answers: [
			{
				text: 'Lód',
				correct: true,
			},
			{
				text: 'Blok',
				correct: false,
			},
			{
				text: 'Berg',
				correct: false,
			},
			{
				text: 'Śnieg',
				correct: false,
			},
		],
	},
	{
		id: 59,
		question: 'Kto śpiewał piosenkę “Fajerwerki”?',
		answers: [
			{
				text: 'Katy Perry',
				correct: true,
			},
			{
				text: 'Carly Rae Jaepsen',
				correct: false,
			},
			{
				text: 'Selena Gomez',
				correct: false,
			},
			{
				text: 'Pixie Lott',
				correct: false,
			},
		],
	},
	{
		id: 60,
		question: 'Jakie znaczenie ma skrót SMS-owy “LOL”?',
		answers: [
			{
				text: 'Miłość w miłości',
				correct: false,
			},
			{
				text: 'Śmiejąc się na głos',
				correct: true,
			},
			{
				text: 'Lizanie na szczęście',
				correct: false,
			},
			{
				text: 'Luck out love',
				correct: false,
			},
		],
	},
	{
		id: 61,
		question: 'Ile boków ma sześciokąt foremny?',
		answers: [
			{
				text: 'Pięć',
				correct: false,
			},
			{
				text: 'Six',
				correct: false,
			},
			{
				text: 'Siedem',
				correct: true,
			},
			{
				text: 'Osiem',
				correct: false,
			},
		],
	},
	{
		id: 62,
		question: 'Które z poniższych zwierząt przechodzą metamorfozę?',
		answers: [
			{
				text: 'Wąż',
				correct: false,
			},
			{
				text: 'Mrówka',
				correct: false,
			},
			{
				text: 'Motyl',
				correct: true,
			},
			{
				text: 'Świnia',
				correct: false,
			},
		],
	},
	{
		id: 63,
		question: 'Jaka jest nowa nazwa Facebooka?',
		answers: [
			{
				text: 'Beta',
				correct: false,
			},
			{
				text: 'Teta',
				correct: false,
			},
			{
				text: 'Meta',
				correct: true,
			},
			{
				text: 'Deta',
				correct: false,
			},
		],
	},
	{
		id: 64,
		question: 'Która księżniczka Disneya ma tygrysa?',
		answers: [
			{
				text: 'Aurora',
				correct: false,
			},
			{
				text: 'Jasmine',
				correct: true,
			},
			{
				text: 'Belle',
				correct: false,
			},
			{
				text: 'Ariel',
				correct: false,
			},
		],
	},
	{
		id: 65,
		question: 'Które z poniższych zwierząt jest mięsożercą?',
		answers: [
			{
				text: 'Penguin',
				correct: false,
			},
			{
				text: 'Świnia',
				correct: false,
			},
			{
				text: 'Wąż',
				correct: true,
			},
			{
				text: 'Szczur',
				correct: false,
			},
		],
	},
	{
		id: 66,
		question: 'Jak nazwiesz osobę, która je tylko mięso ryb?',
		answers: [
			{
				text: 'Wegetariańska',
				correct: false,
			},
			{
				text: 'Pesketariańska',
				correct: true,
			},
			{
				text: 'Fruitarian',
				correct: false,
			},
			{
				text: 'Fishtarian',
				correct: false,
			},
		],
	},
	{
		id: 67,
		question: 'Ile nóg ma motyl?',
		answers: [
			{
				text: 'Cztery',
				correct: false,
			},
			{
				text: 'Sześć',
				correct: true,
			},
			{
				text: 'Osiem',
				correct: false,
			},
			{
				text: 'Dziesięć',
				correct: false,
			},
		],
	},
	{
		id: 68,
		question: 'Jakim typem ryby jest Nemo?',
		answers: [
			{
				text: 'Angelfish',
				correct: false,
			},
			{
				text: 'Pirania',
				correct: false,
			},
			{
				text: 'Clownfish',
				correct: true,
			},
			{
				text: 'Pufferfish',
				correct: false,
			},
		],
	},
	{
		id: 69,
		question: 'Kto wynalazł pierwszy samolot?',
		answers: [
			{
				text: 'The Warner Brothers',
				correct: false,
			},
			{
				text: 'The Richardson Brothers',
				correct: false,
			},
			{
				text: 'Bracia Wright',
				correct: true,
			},
			{
				text: 'Bracia Ford',
				correct: false,
			},
		],
	},
	{
		id: 70,
		question: 'Który budynek znajduje się na banknocie 20$?',
		answers: [
			{
				text: 'Empire State Building',
				correct: false,
			},
			{
				text: 'Hotel Plaza',
				correct: false,
			},
			{
				text: 'World Trade Center',
				correct: false,
			},
			{
				text: 'Biały Dom',
				correct: true,
			},
		],
	},
	{
		id: 71,
		question: 'Ile kości mają rekiny?',
		answers: [
			{
				text: 'Cztery',
				correct: false,
			},
			{
				text: 'Pięć',
				correct: false,
			},
			{
				text: 'Zero',
				correct: true,
			},
			{
				text: 'Dziesięć',
				correct: false,
			},
		],
	},
	{
		id: 72,
		question: 'Jakie popularne stworzenie morskie ma zdolność klonowania się?',
		answers: [
			{
				text: 'Ośmiornica',
				correct: false,
			},
			{
				text: 'Meduza',
				correct: true,
			},
			{
				text: 'Konik morski',
				correct: false,
			},
			{
				text: 'Kałamarnica',
				correct: false,
			},
		],
	},
	{
		id: 73,
		question: 'Który ssak jest znany z najsilniejszego ugryzienia na świecie?',
		answers: [
			{
				text: 'Hipopotam',
				correct: true,
			},
			{
				text: 'Aligator',
				correct: false,
			},
			{
				text: 'Lew',
				correct: false,
			},
			{
				text: 'Krokodyl',
				correct: false,
			},
		],
	},
	{
		id: 74,
		question: 'W Rzymie, które zwierzę jest chronione prawem?',
		answers: [
			{
				text: 'Kurczak',
				correct: false,
			},
			{
				text: 'Psy',
				correct: false,
			},
			{
				text: 'Koty',
				correct: true,
			},
			{
				text: 'Lew',
				correct: false,
			},
		],
	},
	{
		id: 75,
		question: 'Który członek obsady The Big Bang Theory ma prawdziwy doktorat?',
		answers: [
			{
				text: 'Melissa Rauch',
				correct: false,
			},
			{
				text: 'Mayim Bialik',
				correct: true,
			},
			{
				text: 'Jim Parsons',
				correct: false,
			},
			{
				text: 'Kunal Nayyar',
				correct: false,
			},
		],
	},
	{
		id: 76,
		question: 'Który kraj ma skrót „CH”?',
		answers: [
			{
				text: 'Chiny',
				correct: false,
			},
			{
				text: 'Szwajcaria',
				correct: true,
			},
			{
				text: 'Kuba',
				correct: false,
			},
			{
				text: 'Chile',
				correct: false,
			},
		],
	},
	{
		id: 77,
		question: 'Ile krajów znajduje się w Wielkiej Brytanii?',
		answers: [
			{
				text: 'Trzy',
				correct: false,
			},
			{
				text: 'Cztery',
				correct: true,
			},
			{
				text: 'Pięć',
				correct: false,
			},
			{
				text: 'Sześć',
				correct: false,
			},
		],
	},
	{
		id: 78,
		question: 'Gdzie można znaleźć „Schody Hiszpańskie”?',
		answers: [
			{
				text: 'Włochy',
				correct: true,
			},
			{
				text: 'Hiszpania',
				correct: false,
			},
			{
				text: 'Brazylia',
				correct: false,
			},
			{
				text: 'Austria',
				correct: false,
			},
		],
	},
	{
		id: 79,
		question: 'Jaki kraj na świecie jest najbardziej podatny na trzęsienia ziemi?',
		answers: [
			{
				text: 'Malezja',
				correct: false,
			},
			{
				text: 'Japonia',
				correct: true,
			},
			{
				text: 'Korea',
				correct: false,
			},
			{
				text: 'Tajwan',
				correct: false,
			},
		],
	},
	{
		id: 80,
		question: 'Co Lady Gaga czule nazywa swoich fanów?',
		answers: [
			{
				text: 'Armia',
				correct: false,
			},
			{
				text: 'Małe potwory',
				correct: true,
			},
			{
				text: 'Wierzący',
				correct: false,
			},
			{
				text: 'KatyCats',
				correct: false,
			},
		],
	},
	{
		id: 81,
		question: 'Jaka jest stolica Australii?',
		answers: [
			{
				text: 'Canberra',
				correct: true,
			},
			{
				text: 'Adelaida',
				correct: false,
			},
			{
				text: 'Sydnej',
				correct: false,
			},
			{
				text: 'Melbourne',
				correct: false,
			},
		],
	},
	{
		id: 82,
		question: 'Jak długo trwała wojna stuletnia?',
		answers: [
			{
				text: '116 lat',
				correct: false,
			},
			{
				text: '100 lat',
				correct: false,
			},
			{
				text: '50 lat',
				correct: false,
			},
			{
				text: '101 lat',
				correct: true,
			},
		],
	},
	{
		id: 83,
		question: 'Jaka była oryginalna nazwa Nowego Jorku?',
		answers: [
			{
				text: 'Nowy Amsterdam',
				correct: true,
			},
			{
				text: 'Wielkie Jabłko',
				correct: false,
			},
			{
				text: 'Stan imperium',
				correct: false,
			},
			{
				text: 'Gotham',
				correct: false,
			},
		],
	},
	{
		id: 84,
		question: 'W którym roku podpisano Deklarację Niepodległości Stanów Zjednoczonych?',
		answers: [
			{
				text: '1676',
				correct: false,
			},
			{
				text: '1678',
				correct: false,
			},
			{
				text: '1775',
				correct: false,
			},
			{
				text: '1776',
				correct: true,
			},
		],
	},
	{
		id: 85,
		question: 'Igrzyska Olimpijskie odbywają się co ile lat?',
		answers: [
			{
				text: 'Sześć lat',
				correct: false,
			},
			{
				text: 'Cztery lata',
				correct: true,
			},
			{
				text: 'Pięć lat',
				correct: false,
			},
			{
				text: 'Siedem lat',
				correct: false,
			},
		],
	},
	{
		id: 86,
		question: 'W jakim kraju odbyły się pierwsze igrzyska olimpijskie?',
		answers: [
			{
				text: 'Włochy',
				correct: false,
			},
			{
				text: 'Japonia',
				correct: false,
			},
			{
				text: 'Grecja',
				correct: true,
			},
			{
				text: 'Francja',
				correct: false,
			},
		],
	},
	{
		id: 87,
		question: 'Za jaki film Tom Hanks zdobył swoją pierwszą nominację do Oscara?',
		answers: [
			{
				text: 'Duża',
				correct: true,
			},
			{
				text: 'Forrest Gump',
				correct: false,
			},
			{
				text: 'Apollo 13',
				correct: false,
			},
			{
				text: 'Masz maila',
				correct: false,
			},
		],
	},
	{
		id: 88,
		question: 'W Matrixie, jaki jest kolor pigułki, którą przyjmuje Neo?',
		answers: [
			{
				text: 'Czerwony',
				correct: true,
			},
			{
				text: 'Niebieski',
				correct: false,
			},
			{
				text: 'Zielony',
				correct: false,
			},
			{
				text: 'Żółty',
				correct: false,
			},
		],
	},
	{
		id: 89,
		question: 'Ile kubków smakowych ma przeciętny ludzki język?',
		answers: [
			{
				text: '100',
				correct: false,
			},
			{
				text: '1000',
				correct: false,
			},
			{
				text: '10 000',
				correct: true,
			},
			{
				text: '100 000',
				correct: false,
			},
		],
	},
	{
		id: 90,
		question: 'Jakie jest drugie imię Chandlera w sitcomie Przyjaciele?',
		answers: [
			{
				text: 'Artur',
				correct: false,
			},
			{
				text: 'Bing',
				correct: false,
			},
			{
				text: 'Muriel',
				correct: true,
			},
			{
				text: 'Jan',
				correct: false,
			},
		],
	},
	{
		id: 91,
		question: 'Jaka jest najmniejsza planeta w naszym Układzie Słonecznym?',
		answers: [
			{
				text: 'Ziemia',
				correct: false,
			},
			{
				text: 'Wenus',
				correct: false,
			},
			{
				text: 'Mars',
				correct: false,
			},
			{
				text: 'Rtęć',
				correct: true,
			},
		],
	},
	{
		id: 92,
		question: 'Jaka była pierwsza zabawka reklamowana w telewizji?',
		answers: [
			{
				text: 'lalka Barbie',
				correct: false,
			},
			{
				text: 'Pan Ziemniak Głowa',
				correct: true,
			},
			{
				text: 'Piekarnik do łatwego pieczenia',
				correct: false,
			},
			{
				text: 'Wyścigi rakietowe',
				correct: false,
			},
		],
	},
	{
		id: 93,
		question: 'Jak długo trwa chwila?',
		answers: [
			{
				text: '60 sekund',
				correct: false,
			},
			{
				text: '90 sekund',
				correct: false,
			},
			{
				text: '120 sekund',
				correct: false,
			},
			{
				text: '180 sekund',
				correct: false,
			},
		],
	},
	{
		id: 94,
		question: 'Jak nazywa się mały plastikowy kawałek na końcu sznurowadła?',
		answers: [
			{
				text: 'Strunowy',
				correct: false,
			},
			{
				text: 'Okładka',
				correct: false,
			},
			{
				text: 'Sznurówka',
				correct: false,
			},
			{
				text: 'Bazia',
				correct: true,
			},
		],
	},
	{
		id: 95,
		question: 'Co oznacza termin „fortepian”?',
		answers: [
			{
				text: 'W szybkim tempie',
				correct: false,
			},
			{
				text: 'Do grania cicho',
				correct: true,
			},
			{
				text: 'Umiarkowanie wolny',
				correct: false,
			},
			{
				text: 'Do grania głośno',
				correct: false,
			},
		],
	},
	{
		id: 96,
		question: 'Jaki był pierwszy napój bezalkoholowy zabrany w kosmos?',
		answers: [
			{
				text: 'Pepsi',
				correct: false,
			},
			{
				text: 'Fanta',
				correct: false,
			},
			{
				text: 'Coca cola',
				correct: true,
			},
			{
				text: 'Sprite',
				correct: false,
			},
		],
	},
	{
		id: 97,
		question: 'Który kraj produkuje najwięcej kawy na świecie?',
		answers: [
			{
				text: 'Kolumbia',
				correct: false,
			},
			{
				text: 'Indonezja',
				correct: false,
			},
			{
				text: 'Brazylia',
				correct: true,
			},
			{
				text: 'Wietnam',
				correct: false,
			},
		],
	},
	{
		id: 98,
		question: 'Jakie jest narodowe zwierzę Szkocji?',
		answers: [
			{
				text: 'Koń',
				correct: false,
			},
			{
				text: 'Jednorożec',
				correct: true,
			},
			{
				text: 'Wilk',
				correct: false,
			},
			{
				text: 'Krowa',
				correct: false,
			},
		],
	},
	{
		id: 99,
		question: 'Jaki jest jedyny kraj graniczący z Wielką Brytanią?',
		answers: [
			{
				text: 'Szwecja',
				correct: false,
			},
			{
				text: 'Niemcy',
				correct: false,
			},
			{
				text: 'Francja',
				correct: false,
			},
			{
				text: 'Irlandia',
				correct: true,
			},
		],
	},
	{
		id: 100,
		question: 'Ile rogów miał triceratops?',
		answers: [
			{
				text: 'Cztery',
				correct: false,
			},
			{
				text: 'Pięć',
				correct: false,
			},
			{
				text: 'Dwa',
				correct: false,
			},
			{
				text: 'Trzy',
				correct: true,
			},
		],
	},
]

export default data
