export const genres = [
	'Horror',
	'Drama',
	'Comedy',
	'Family',
	'Romance',
	'Supernatural',
	'Action',
	'Science Fiction',
	'Crime',
	'Mystery',
	'Thriller',
	'Adventure',
	'Fantasy',
	'War',
	'Superhero',
	'Teen',
	'Spy',
	'Historical',
	'Political',
	'Animated',
	'Sports',
	'Musical',
	'Biography',
	'Noir',
	'Dance',
	'Documentary',
	'Live Action',
	'Erotic',
	'Legal',
	'Short',
	'Satire',
	'Found Footage',
	'Western',
	'Slasher',
	'Martial Arts',
	'Performance',
	'Independent',
	'Disaster'
];

export const colors = [
	'#ff0000',
	'#ff00ff',
	'#00ff00',
	'#ffff00',
	'#ff0000',
	'#0000ff',
	'	#00ffff',
	'#ffa500',
	'#7fffd4',
	'#d2691e',
	'#8a2be2',
	'#5f9ea0',
	'#ee82ee',
	'#708090',
	'#1e90ff',
	'#ffb6c1',
	'#d3d3d3',
	'#20b2aa',
	'#6b8e23',
	'#00fa9a',
	'	#191970',
	'#00fa9a',
	'#48d1cc',
	'#eee8aa',
	'#98fb98',
	'#afeeee',
	'	#dda0dd',
	'#c71585',
	'#bc8f8f',
	'#fa8072',
	'#f4a460',
	'#2e8b57',
	'#6a5acd',
	'#a0522d',
	'#ff6347',
	'#d8bfd8',
	'#40e0d0',
	'#9acd32'
];

export const genreColorAssociations = genres.map((genre, index) => ({
	genre: genre,
	color: colors[index]
}));

export const directoresDeCine = [
	'Steven Spielberg',
	'Martin Scorsese',
	'Quentin Tarantino',
	'Christopher Nolan',
	'Alfred Hitchcock',
	'Stanley Kubrick',
	'Francis Ford Coppola',
	'Ridley Scott',
	'James Cameron',
	'Pedro Almodóvar',
	'Woody Allen',
	'Clint Eastwood',
	'Akira Kurosawa',
	'Hayao Miyazaki',
	'Ang Lee',
	'David Fincher',
	'Coen Brothers (Joel and Ethan Coen)',
	'Darren Aronofsky',
	'Paul Thomas Anderson',
	'Guillermo del Toro',
	'Tim Burton',
	'Quentin Tarantino',
	'Spike Lee',
	'David Lynch',
	'Wes Anderson',
	'Roman Polanski',
	'Terrence Malick',
	'George Lucas',
	'Richard Linklater',
	'David Cronenberg',
	'Michael Bay',
	'Peter Jackson',
	'Sam Raimi',
	'J.J. Abrams',
	'Christopher McQuarrie',
	'Denis Villeneuve',
	'Alejandro González Iñárritu',
	'Bong Joon-ho',
	'Guy Ritchie',
	'Robert Zemeckis',
	'Zhang Yimou',
	'Greta Gerwig',
	'Taika Waititi',
	'Ava DuVernay',
	'Patty Jenkins',
	'Christopher Nolan',
	'Martin Scorsese',
	'Francis Ford Coppola'
];

export const fotografosDeCine = [
	'Roger Deakins',
	'Emmanuel Lubezki',
	'Janusz Kamiński',
	'Robert Richardson',
	'Hoyte van Hoytema',
	'Seamus McGarvey',
	'Darius Khondji',
	'László Kovács',
	'Gordon Willis',
	'Haskell Wexler',
	'Rachel Morrison',
	'Vittorio Storaro',
	'John Toll',
	'Matthew Libatique',
	'Linus Sandgren',
	'Bruno Delbonnel',
	'Caleb Deschanel',
	'Wally Pfister',
	'Phedon Papamichael',
	'Rodrigo Prieto',
	'Anthony Dod Mantle',
	'Claro Velasquez',
	'Charlotte Bruus Christensen',
	'Greig Fraser',
	'Newton Thomas Sigel',
	'Benjamin Loeb',
	'Dan Laustsen',
	'Sayombhu Mukdeeprom',
	'Roberto Schaefer',
	'Ellen Kuras',
	'Michael Ballhaus',
	'Conrad L. Hall',
	'Dante Spinotti',
	'Christopher Doyle',
	'Eduardo Serra',
	'Edward Lachman',
	'Philippe Rousselot',
	'Guillermo Navarro',
	'Dick Pope',
	'John Alcott',
	'Adriano Goldman',
	'John Seale',
	'Greig Fraser',
	'Jan de Bont',
	'Donald McAlpine',
	'James Wong Howe',
	'Sven Nykvist',
	'Robert Elswit'
];

export const cast = {
	LeonardoDicaprio: {
		name: 'Leonardo Dicaprio',
		photo: 'src/data/actors/LeonardoDicaprio.jpeg'
	},
	JohnnyDeep: {
		name: 'Johnny Deep',
		photo: 'src/data/actors/JohnnyDepp.jpg'
	},
	BradPitt: {
		name: 'Brad Pitt',
		photo: 'src/data/actors/BradPitt.jpeg'
	},
	AngelinaJolie: {
		name: 'Angelina Jolie',
		photo: 'src/data/actors/AngelinaJolie.jpg'
	},
	SamRiley: {
		name: 'Same Riley',
		photo: 'src/data/actors/SamRiley.jpeg'
	},
	KateWinslet: {
		name: 'Kate Winslet',
		photo: '/src/data/actors/KateWinslet.jpg'
	},
	OrlandoBloom: {
		name: 'Orlando Bloom',
		photo: '/src/data/actors/OrlandoBloom.webp'
	},
	ZoeSaldana: {
		name: 'Zoe Saldaña',
		photo: 'src/data/actors/ZoeSaldana.webp'
	},
	ElleFanning: {
		name: 'Elle Fanning',
		photo: 'src/data/actors/ElleFanning.jpeg'
	},
	VivienneJoliePitt: {
		name: 'Vivienne Jolie-Pitt',
		photo: 'src/data/actors/Viviene.jpeg'
	},
	JusticeSmith: {
		name: 'Justice Smith',
		photo: 'src/data/movies/JusticeSmith.jpeg'
	},
	FreddieHighmore: {
		name: 'FreddieHighmore',
		photo: 'src/data/actors/FreddieHighmore.jpeg'
	},
	DeepRoy: {
		name: 'Deep Roy',
		photo: 'src/data/actors/DeepRoy.jpeg'
	},
	HelenaBonhamCarter: {
		name: 'Helena Bonham Carter',
		photo: 'src/data/actors/HelenaBonhamCarter.jpeg'
	},
	JordanFry: {
		name: 'Jordan Fry',
		photo: 'src/data/actors/JordanFry.jpeg'
	},
	AnnaSophiaRobb: {
		name: 'AnnaSophia Robb',
		photo: 'src/data/actors/AnnaSophiaRobb.jpeg'
	},
	JuliaWinter: {
		name: 'Julia Winter',
		photo: 'src/data/actors/JuliaWinter.jpeg'
	},
	PhilipWiegratz: {
		name: 'Philip Wiegratz',
		photo: 'src/data/actors/PhilipWiegratz.jpeg'
	},
	ChristopherLee: {
		name: 'Christopher Lee',
		photo: 'src/data/actors/ChristopherLee.jpeg'
	},
	BenChaplin: {
		name: 'Ben Chaplin',
		photo: '/src/data/actors/BenChaplin.webp'
	}
};

export const peliculas = [
	{
		title: 'The Grudge',
		year: 2020,
		cast: [
			'Andrea Riseborough',
			'Demián Bichir',
			'John Cho',
			'Betty Gilpin',
			'Lin Shaye',
			'Jacki Weaver'
		],
		genres: ['Horror', 'Supernatural'],
		href: 'The_Grudge_(2020_film)',
		extract:
			'The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Underwater',
		year: 2020,
		cast: [
			'Kristen Stewart',
			'Vincent Cassel',
			'Jessica Henwick',
			'John Gallagher Jr.',
			'Mamoudou Athie',
			'T.J. Miller'
		],
		genres: ['Action', 'Horror', 'Science Fiction'],
		href: 'Underwater_(film)',
		extract:
			'Underwater is a 2020 American science fiction action horror film directed by William Eubank. The film stars Kristen Stewart, Vincent Cassel, Jessica Henwick, John Gallagher Jr., Mamoudou Athie, and T.J. Miller.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Underwater_poster.jpeg',
		thumbnail_width: 250,
		thumbnail_height: 398
	},
	{
		title: 'Like a Boss',
		year: 2020,
		cast: ['Tiffany Haddish', 'Rose Byrne', 'Salma Hayek', 'Jennifer Coolidge', 'Billy Porter'],
		genres: ['Comedy'],
		href: 'Like_a_Boss_(film)',
		extract:
			'Like a Boss is a 2020 American comedy film directed by Miguel Arteta, written by Sam Pitman and Adam Cole-Kelly, and starring Tiffany Haddish, Rose Byrne, and Salma Hayek. The plot follows two friends who attempt to take back control of their cosmetics company from an industry titan.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9a/LikeaBossPoster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Three Christs',
		year: 2020,
		cast: ['Richard Gere', 'Peter Dinklage', 'Walton Goggins', 'Bradley Whitford'],
		genres: ['Drama'],
		href: 'Three_Christs',
		extract:
			"Three Christs, also known as State of Mind, is a 2017 American drama film directed, co-produced, and co-written by Jon Avnet and based on Milton Rokeach's nonfiction book The Three Christs of Ypsilanti. It screened in the Gala Presentations section at the 2017 Toronto International Film Festival. The film is also known as: Three Christs of Ypsilanti, The Three Christs of Ypsilanti, Three Christs of Santa Monica, and The Three Christs of Santa Monica.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Three_Christs_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Inherit the Viper',
		year: 2020,
		cast: ['Josh Hartnett', 'Margarita Levieva', 'Chandler Riggs', 'Bruce Dern', 'Owen Teague'],
		genres: ['Crime', 'Drama'],
		href: 'Inherit_the_Viper',
		extract:
			'Inherit the Viper is a 2019 American crime drama film directed by Anthony Jerjen, in his feature directorial debut, from a screenplay by Andrew Crabtree. It stars Josh Hartnett, Margarita Levieva, Chandler Riggs, Bruce Dern, Valorie Curry, Owen Teague, and Dash Mihok.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/1/1c/Inherit_the_Viper_%282019%29_Film_Poster.jpg',
		thumbnail_width: 236,
		thumbnail_height: 350
	},
	{
		title: 'The Sonata',
		year: 2020,
		cast: ['Freya Tingley', 'Simon Abkarian', 'Rutger Hauer', 'James Faulkner'],
		genres: ['Mystery', 'Thriller'],
		href: 'The_Sonata_(film)',
		extract:
			'The Sonata is a 2018 mystery thriller film, directed by Andrew Desmond, from a screenplay by Desmond and Arthur Morin. It stars Freya Tingley, Simon Abkarian, James Faulkner, Rutger Hauer, Matt Barber and James Kermack. It was released in the United States on January 10, 2020, by Screen Media Films. It grossed $146,595 at the box office and received mixed reviews from critics.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/1/13/The_Sonata_%282018%29_Film_Poster.jpg',
		thumbnail_width: 246,
		thumbnail_height: 350
	},
	{
		title: 'The Murder of Nicole Brown Simpson',
		year: 2020,
		cast: ['Mena Suvari', 'Nick Stahl', 'Taryn Manning'],
		genres: ['Crime', 'Horror'],
		href: 'The_Murder_of_Nicole_Brown_Simpson',
		extract:
			"The Murder of Nicole Brown Simpson is a 2019 American crime horror film directed by Daniel Farrands. The film is loosely based on the murder of Nicole Brown Simpson, presenting a version of events in which Brown Simpson is murdered by serial killer Glen Edward Rogers, and not by O. J. Simpson, her ex-husband and the primary suspect in the case. Though Mena Suvari's performance as Nicole Brown was praised, the film was panned by critics.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/e/ed/The_Murder_of_Nicole_Brown_Simpson_poster.jpg',
		thumbnail_width: 263,
		thumbnail_height: 380
	},
	{
		title: 'Bad Boys for Life',
		year: 2020,
		cast: [
			'Will Smith',
			'Martin Lawrence',
			'Vanessa Hudgens',
			'Alexander Ludwig',
			'Charles Melton',
			'Paola Núñez',
			'Kate del Castillo',
			'Nicky Jam',
			'Joe Pantoliano'
		],
		genres: ['Action', 'Comedy'],
		href: 'Bad_Boys_for_Life',
		extract:
			"Bad Boys for Life is a 2020 American buddy cop action comedy film directed by Adil & Bilall. It is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys franchise. Will Smith, Martin Lawrence, Joe Pantoliano and Theresa Randle reprise their roles in the film and are joined by Paola Núñez, Vanessa Hudgens, Jacob Scipio, Alexander Ludwig, Charles Melton, Kate del Castillo and Nicky Jam. The film was produced by Smith, Jerry Bruckheimer, and Doug Belgrad, with a screenplay written by Chris Bremner, Peter Craig and Joe Carnahan. In Bad Boys for Life, Miami detectives Mike Lowrey and Marcus Burnett investigate a string of murders tied to Lowrey's troubled past.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg',
		thumbnail_width: 219,
		thumbnail_height: 325
	},
	{
		title: 'Dolittle',
		year: 2020,
		cast: [
			'Robert Downey Jr.',
			'Antonio Banderas',
			'Michael Sheen',
			'Emma Thompson',
			'Rami Malek',
			'John Cena',
			'Kumail Nanjiani',
			'Octavia Spencer',
			'Tom Holland',
			'Craig Robinson',
			'Ralph Fiennes',
			'Selena Gomez',
			'Marion Cotillard'
		],
		genres: ['Adventure', 'Fantasy'],
		href: 'Dolittle_(film)',
		extract:
			"Dolittle is a 2020 American fantasy adventure film directed by Stephen Gaghan from a screenplay by Gaghan, Dan Gregor, and Doug Mand, based on a story by Thomas Shepherd. Dolittle is based on the title character created by Hugh Lofting and is primarily inspired by the author's second Doctor Dolittle book, The Voyages of Doctor Dolittle (1922). Robert Downey Jr. stars as the title character, alongside Antonio Banderas and Michael Sheen in live-action roles, with Emma Thompson, Rami Malek, John Cena, Kumail Nanjiani, Octavia Spencer, Tom Holland, Craig Robinson, Ralph Fiennes, Selena Gomez, and Marion Cotillard voicing an array of creatures.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'A Fall from Grace',
		year: 2020,
		cast: [
			'Crystal R. Fox',
			'Phylicia Rashad',
			'Bresha Webb',
			'Mehcad Brooks',
			'Cicely Tyson',
			'Tyler Perry'
		],
		genres: ['Thriller'],
		href: 'A_Fall_from_Grace',
		extract:
			'A Fall from Grace is a 2020 American thriller film produced, written, and directed by Tyler Perry and his first to be released by Netflix. The film follows a woman who finds a dangerous new love and the novice attorney who defends her in a sensational court case. This was the final film of actor Cicely Tyson before her death in January 2021.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4e/AFallFromGrace.png',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'The Gentlemen',
		year: 2020,
		cast: [
			'Matthew McConaughey',
			'Charlie Hunnam',
			'Henry Golding',
			'Michelle Dockery',
			'Jeremy Strong',
			'Eddie Marsan',
			'Colin Farrell',
			'Hugh Grant'
		],
		genres: ['Action', 'Comedy'],
		href: 'The_Gentlemen_(2019_film)',
		extract:
			'The Gentlemen is a 2019 action comedy film written, directed and produced by Guy Ritchie, who developed the story along with Ivan Atkinson and Marn Davies. The film stars Matthew McConaughey, Charlie Hunnam, Henry Golding, Michelle Dockery, Jeremy Strong, Eddie Marsan, Colin Farrell, and Hugh Grant. It follows an American cannabis wholesaler in England who is looking to sell his business, setting off a chain of blackmail and schemes to undermine him.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/06/The_Gentlemen_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'The Turning',
		year: 2020,
		cast: ['Mackenzie Davis', 'Finn Wolfhard', 'Brooklynn Prince', 'Joely Richardson'],
		genres: ['Horror', 'Supernatural'],
		href: 'The_Turning_(2020_film)',
		extract:
			'The Turning is a 2020 American gothic supernatural horror film directed by Floria Sigismondi and written by Carey W. Hayes and Chad Hayes. It is a modern adaptation of the 1898 ghost story The Turn of the Screw by Henry James. It stars Mackenzie Davis, Finn Wolfhard, Brooklynn Prince, and Joely Richardson, and follows a young governess in 1994 who is hired to watch over two children after their parents are killed.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a2/The_Turning_poster_2020.jpg',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: 'The Last Full Measure',
		year: 2020,
		cast: [
			'Sebastian Stan',
			'Christopher Plummer',
			'William Hurt',
			'Ed Harris',
			'Samuel L. Jackson',
			'Peter Fonda',
			'LisaGay Hamilton',
			'Jeremy Irvine',
			'Diane Ladd',
			'Amy Madigan',
			'John Savage',
			'Bradley Whitford'
		],
		genres: ['Drama', 'War'],
		href: 'The_Last_Full_Measure_(2019_film)',
		extract:
			"The Last Full Measure is a 2019 American war drama film written and directed by Todd Robinson. It follows the efforts of fictional Pentagon staffer Scott Huffman and many veterans to see the Medal of Honor awarded to William H. Pitsenbarger, a United States Air Force Pararescueman who flew in helicopter rescue missions during the Vietnam War to aid downed soldiers and pilots. Based on true events, the film stars Sebastian Stan, Christopher Plummer, William Hurt, Ed Harris, Samuel L. Jackson, Jeremy Irvine, and Peter Fonda. It was the final film appearance of Fonda, who died before the film’s release; and Plummer's final on screen appearance before his death in 2021, though it had filmed prior to Knives Out which was released before it.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/9/9d/The_Last_Full_Measure_2019_poster.jpg',
		thumbnail_width: 256,
		thumbnail_height: 378
	},
	{
		title: 'John Henry',
		year: 2020,
		cast: [
			'Terry Crews',
			'Ludacris',
			'Jamila Velazquez',
			'Ken Foree',
			'Tyler Alvarez',
			'Joseph Julian Soria'
		],
		genres: ['Drama', 'Thriller'],
		href: 'John_Henry_(2020_film)',
		extract:
			'John Henry is a 2020 American thriller drama film starring Terry Crews and Ludacris, and directed by Will Forbes. Inspired by the folk lore of John Henry, the plot follows an ex-gang member from Los Angeles who must help two immigrant children who are on the run from his former crime boss. The film had a limited release on January 24, 2020, and received negative reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b8/JohnHenryPoster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 316
	},
	{
		title: 'The Rhythm Section',
		year: 2020,
		cast: ['Blake Lively', 'Jude Law', 'Sterling K. Brown'],
		genres: ['Action', 'Thriller'],
		href: 'The_Rhythm_Section',
		extract:
			'The Rhythm Section is a 2020 action thriller film directed by Reed Morano and with a screenplay by Mark Burnell based on his novel of the same name. Starring Blake Lively, Jude Law and Sterling K. Brown, and follows a grieving woman who seeks revenge after discovering that the plane crash that killed her family was a terrorist attack.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/98/The_Rhythm_Section_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 382
	},
	{
		title: 'Gretel & Hansel',
		year: 2020,
		cast: ['Sophia Lillis', 'Sammy Leakey', 'Charles Babalola', 'Jessica De Gouw', 'Alice Krige'],
		genres: ['Fantasy', 'Horror'],
		href: 'Gretel_%26_Hansel',
		extract:
			'Gretel & Hansel is a 2020 dark fantasy horror film based on the German folklore tale "Hansel and Gretel" by the Brothers Grimm. The film is directed by Oz Perkins, and produced by Fred Berger, Brian Kavanaugh-Jones, and Dan Kagan, with a screenplay by Rob Hayes. Sophia Lillis and Sam Leakey portray the titular characters, alongside Alice Krige and Jessica De Gouw. The story follows Gretel and Hansel as they enter the dark woods in order to find work and food, and then stumble upon the home of a witch.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/d/de/Gretel_%26_Hansel_-_A_Grim_Fairy_Tale_theatrical_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Assistant',
		year: 2020,
		cast: ['Julia Garner', 'Matthew Macfadyen'],
		genres: ['Drama'],
		href: 'The_Assistant_(2019_film)',
		extract:
			'The Assistant is a 2019 American drama film written, directed, produced, and edited by Kitty Green. The film stars Julia Garner as a junior assistant at a film production company. Matthew Macfadyen, Makenzie Leigh, Kristine Froseth, Jon Orsini, and Noah Robbins also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9b/The_Assistant_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Birds of Prey',
		year: 2020,
		cast: [
			'Margot Robbie',
			'Mary Elizabeth Winstead',
			'Jurnee Smollett-Bell',
			'Rosie Perez',
			'Chris Messina',
			'Ella Jay Basco',
			'Ali Wong',
			'Ewan McGregor'
		],
		genres: ['Superhero'],
		href: 'Birds_of_Prey_(2020_film)',
		extract:
			'Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn), also known as Harley Quinn: Birds of Prey or simply Birds of Prey, is a 2020 American superhero film directed by Cathy Yan and written by Christina Hodson, based on the DC Comics team, the Birds of Prey. Produced by Warner Bros., DC Films, LuckyChap Entertainment, Clubhouse Pictures, and Kroll & Co. Entertainment, it is the eighth installment in the DC Extended Universe (DCEU), and serves as a spin-off and sequel to Suicide Squad (2016). It stars Margot Robbie as Harley Quinn alongside Mary Elizabeth Winstead, Jurnee Smollett-Bell, Rosie Perez, Chris Messina, Ella Jay Basco, Ali Wong, and Ewan McGregor. The film follows Harley Quinn, who, after breaking up with the Joker, is threatened by Gotham City crime lord Roman Sionis, and joins forces with Helena Bertinelli, Dinah Lance and Renee Montoya (who go on to form the Birds of Prey) to save Cassandra Cain.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/1/1c/Birds_of_Prey_%282020_film%29_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Lodge',
		year: 2020,
		cast: [
			'Riley Keough',
			'Jaeden Martell',
			'Lia McHugh',
			'Richard Armitage',
			'Alicia Silverstone'
		],
		genres: ['Horror'],
		href: 'The_Lodge_(film)',
		extract:
			"The Lodge is a 2019 psychological horror film directed by Veronika Franz and Severin Fiala, written by Franz, Fiala, and Sergio Casci, and starring Riley Keough, Jaeden Martell, Lia McHugh, Alicia Silverstone, and Richard Armitage. Its plot follows a soon-to-be stepmother who, alone with her fiancé's two children, becomes stranded at their rural lodge during Christmas. There, she and the children experience a number of unexplained events that seem to be connected to her past.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/cf/The_Lodge_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Timmy Failure: Mistakes Were Made',
		year: 2020,
		cast: ['Winslow Fegley', 'Ophelia Lovibond', 'Craig Robinson', 'Wallace Shawn'],
		genres: ['Adventure', 'Comedy', 'Drama', 'Family', 'Fantasy'],
		href: 'Timmy_Failure:_Mistakes_Were_Made',
		extract:
			'Timmy Failure: Mistakes Were Made is a 2020 American adventure fantasy comedy-drama family film based on the book series of the same name by Stephan Pastis that debuted on Disney+ on February 7, 2020. The film is directed by Tom McCarthy, produced by Alexander Dostal, McCarthy and Jim Whitaker from a screenplay written by McCarthy and Pastis and stars Winslow Fegley, Ophelia Lovibond, Craig Robinson and Wallace Shawn.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/c/c8/Timmy_Failure_Mistakes_Were_Made_Poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Horse Girl',
		year: 2020,
		cast: [
			'Alison Brie',
			'Debby Ryan',
			'John Paul Reynolds',
			'Molly Shannon',
			'John Ortiz',
			'Paul Reiser'
		],
		genres: ['Drama'],
		href: 'Horse_Girl',
		extract:
			'Horse Girl is a 2020 American psychological drama film directed and produced by Jeff Baena, from a screenplay written by Baena and Alison Brie. It stars Brie, Debby Ryan, John Reynolds, Molly Shannon, John Ortiz, and Paul Reiser.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/37/Horse_Girl_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'To All the Boys: P.S. I Still Love You',
		year: 2020,
		cast: ['Lana Condor', 'Noah Centineo', 'Jordan Fisher', 'Anna Cathcart', 'John Corbett'],
		genres: ['Comedy', 'Teen', 'Romance'],
		href: 'To_All_the_Boys:_P.S._I_Still_Love_You',
		extract:
			"To All the Boys: P.S. I Still Love You is a 2020 American teen romantic comedy film directed by Michael Fimognari and written by Sofia Alvarez and J. Mills Goodloe. The film stars Lana Condor, Noah Centineo, Janel Parrish, Anna Cathcart, Trezzo Mahoro, Madeleine Arthur, Emilija Baranac, Kelcey Mawema, Jordan Fisher, Ross Butler, Julie Tao, Sarayu Blue, John Corbett, and Holland Taylor. The film is based on Jenny Han's 2015 novel P.S. I Still Love You.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/b/bc/To_All_the_Boys_-_P.S._I_Still_Love_You_official_release_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Sonic the Hedgehog',
		year: 2020,
		cast: [
			'James Marsden',
			'Ben Schwartz',
			'Tika Sumpter',
			'Natasha Rothwell',
			'Adam Pally',
			'Neal McDonough',
			'Jim Carrey'
		],
		genres: ['Action', 'Adventure', 'Comedy'],
		href: 'Sonic_the_Hedgehog_(film)',
		extract:
			'Sonic the Hedgehog is a 2020 action-adventure comedy film based on the video game series published by Sega. Directed by Jeff Fowler and written by Pat Casey and Josh Miller, it stars Ben Schwartz as the voice of Sonic the Hedgehog, alongside Jim Carrey and James Marsden, with supporting roles by Tika Sumpter, Natasha Rothwell, Adam Pally, Lee Majdoub and Neal McDonough. The film follows Sonic, a blue anthropomorphic hedgehog who can run at supersonic speeds. He teams up with a town sheriff, Tom Wachowski (Marsden), to stop the mad scientist Dr. Robotnik (Carrey).',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/45/Sonic_the_Hedgehog_film_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Fantasy Island',
		year: 2020,
		cast: [
			'Michael Peña',
			'Maggie Q',
			'Lucy Hale',
			'Austin Stowell',
			'Portia Doubleday',
			'Jimmy O. Yang',
			'Ryan Hansen',
			'Michael Rooker'
		],
		genres: ['Horror', 'Supernatural'],
		href: 'Fantasy_Island_(film)',
		extract:
			"Fantasy Island, also known as Blumhouse's Fantasy Island, is a 2020 American supernatural horror film directed and co-written by Jeff Wadlow. Serving both as a horror reimagining and a prequel to ABC's 1977 television series of the same name, it stars Michael Peña, Maggie Q, Lucy Hale, Austin Stowell, Jimmy O. Yang, Ryan Hansen, Portia Doubleday, and Michael Rooker and follows a group of people who, while visiting the eponymous island, discover that their dream-like fantasies brought to life begin to turn into horrific living nightmares and they must try to survive.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Fantasy_Island_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Photograph',
		year: 2020,
		cast: [
			'Issa Rae',
			'Lakeith Stanfield',
			'Chelsea Peretti',
			'Lil Rel Howery',
			'Courtney B. Vance'
		],
		genres: ['Drama', 'Romance'],
		href: 'The_Photograph_(2020_film)',
		extract:
			"The Photograph is a 2020 American romantic drama film written and directed by Stella Meghie. It follows the estranged daughter of a famous photographer who falls in love with the journalist who is investigating her late mother's life. Chelsea Peretti, Lil Rel Howery and Courtney B. Vance also star.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c4/The_Photograph_poster.jpg',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: 'Downhill',
		year: 2020,
		cast: ['Julia Louis-Dreyfus', 'Will Ferrell', 'Miranda Otto', 'Zoë Chao', 'Zach Woods'],
		genres: ['Comedy', 'Drama'],
		href: 'Downhill_(2020_film)',
		extract:
			'Downhill is a 2020 American black comedy-drama film directed by Nat Faxon and Jim Rash, who also co-wrote the script with Jesse Armstrong. The film is a remake of Force Majeure (2014) by Swedish director Ruben Östlund. It stars Julia Louis-Dreyfus and Will Ferrell as a married couple going through a rough patch after a near-death encounter during a family ski outing.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Downhill_poster.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 386
	},
	{
		title: 'Spy Intervention',
		year: 2020,
		cast: [
			'Drew Van Acker',
			'Poppy Delevingne',
			'Natasha Bassett',
			'Max Silvestri',
			'Brittany Furlan',
			'Blake Anderson'
		],
		genres: ['Action', 'Comedy', 'Spy'],
		href: 'Spy_Intervention',
		extract:
			'Spy Intervention is a 2020 American action comedy spy film directed by Drew Mylrea and written by Mark Famiglietti and Lane Garrison. The film stars Drew Van Acker, Poppy Delevingne and Blake Anderson.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/c/cf/Spy_Intervention_%282020%29_Film_Poster.jpg',
		thumbnail_width: 236,
		thumbnail_height: 350
	},
	{
		title: 'The Kindness of Strangers',
		year: 2020,
		cast: [
			'Andrea Riseborough',
			'Tahar Rahim',
			'Zoe Kazan',
			'Bill Nighy',
			'Caleb Landry Jones',
			'Jay Baruchel'
		],
		genres: ['Drama'],
		href: 'The_Kindness_of_Strangers_(film)',
		extract:
			'The Kindness of Strangers is a 2019 internationally co-produced drama film, written and directed by Lone Scherfig. It stars Zoe Kazan, Tahar Rahim, Esben Smed, Andrea Riseborough, and Caleb Landry Jones.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/8/8d/The_Kindness_of_Strangers_poster.jpg',
		thumbnail_width: 263,
		thumbnail_height: 379
	},
	{
		title: 'The Call of the Wild',
		year: 2020,
		cast: [
			'Harrison Ford',
			'Omar Sy',
			'Cara Gee',
			'Dan Stevens',
			'Karen Gillan',
			'Bradley Whitford'
		],
		genres: ['Adventure'],
		href: 'The_Call_of_the_Wild_(2020_film)',
		extract:
			"The Call of the Wild is a 2020 American adventure film based on Jack London's 1903 novel of the same name. Directed by Chris Sanders, in his live-action directorial debut, and his first film without a co-director, the film was written by Michael Green, and stars Harrison Ford, Omar Sy, Cara Gee, Dan Stevens, Karen Gillan, and Bradley Whitford. Set during the 1890s Klondike Gold Rush, the film follows a dog named Buck as he is stolen from his home in California and sent to the Yukon, where he befriends an old outdoorsman and begins a life-altering adventure.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/43/The_Call_of_the_Wild_poster.jpg',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: 'Emma',
		year: 2020,
		cast: [
			'Anya Taylor-Joy',
			'Johnny Flynn',
			"Josh O'Connor",
			'Callum Turner',
			'Mia Goth',
			'Miranda Hart',
			'Bill Nighy'
		],
		genres: ['Comedy', 'Historical', 'Romance'],
		href: 'Emma_(2020_film)',
		extract:
			"Emma is a 2020 period romantic comedy film directed by Autumn de Wilde, from a screenplay by Eleanor Catton, based on Jane Austen's 1815 novel of the same name. It stars Anya Taylor-Joy as Miss Emma Woodhouse, a wealthy and elegant young woman living with her father in Regency-era England who amuses herself with matchmaking and meddles in the romantic lives of those closest to her. The film also stars Johnny Flynn, Josh O'Connor, Callum Turner, Mia Goth, Miranda Hart, and Bill Nighy.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/53/Emma_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Last Thing He Wanted',
		year: 2020,
		cast: [
			'Anne Hathaway',
			'Ben Affleck',
			'Rosie Perez',
			'Edi Gathegi',
			'Mel Rodriguez',
			'Toby Jones',
			'Willem Dafoe'
		],
		genres: ['Political', 'Thriller'],
		href: 'The_Last_Thing_He_Wanted_(film)',
		extract:
			'The Last Thing He Wanted is a 2020 political thriller film directed by Dee Rees, based on the 1996 novel of the same name by Joan Didion, from a screenplay by Rees and Marco Villalobos. The film stars Anne Hathaway, Ben Affleck, Rosie Perez, Edi Gathegi, Mel Rodriguez, Toby Jones, and Willem Dafoe.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4e/The_Last_Thing_He_Wanted.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Brahms: The Boy II',
		year: 2020,
		cast: ['Katie Holmes', 'Owain Yeoman', 'Christopher Convery', 'Ralph Ineson'],
		genres: ['Horror', 'Supernatural'],
		href: 'Brahms:_The_Boy_II',
		extract:
			'Brahms: The Boy II is a 2020 American supernatural horror film starring Katie Holmes, Ralph Ineson, Christopher Convery and Owain Yeoman. A sequel to the 2016 film The Boy, it is directed by William Brent Bell and written by Stacey Menear, the respective director and writer of the original film.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/51/Brahms_The_Boy_Poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'The Night Clerk',
		year: 2020,
		cast: ['Tye Sheridan', 'Ana de Armas', 'Helen Hunt', 'John Leguizamo'],
		genres: ['Crime', 'Drama'],
		href: 'The_Night_Clerk',
		extract:
			"The Night Clerk is a 2020 American crime drama film, written and directed by Michael Cristofer. It stars Tye Sheridan, Ana de Armas, John Leguizamo and Helen Hunt, and follows a hotel night clerk who becomes the center of a murder investigation. The film was released on February 21, 2020, by Saban Films. On June 6, 2020, Netflix released the film on its platform. The film has received negative reviews from critics who criticized it for its lackluster story, deriative, and undeveloped characters; however, Sheridan's performance did receive praise.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9f/The_Night_Clerk_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 330
	},
	{
		title: 'Impractical Jokers: The Movie',
		year: 2020,
		cast: ['Brian Quinn', 'Joe Gatto', 'Sal Vulcano', 'James Murray', 'Paula Abdul'],
		genres: ['Comedy'],
		href: 'Impractical_Jokers:_The_Movie',
		extract:
			'Impractical Jokers: The Movie is a 2020 American reality comedy film directed by Chris Henchy, based on the truTV television series Impractical Jokers. The film stars Brian Quinn, James Murray, Sal Vulcano, and Joe Gatto, also known as The Tenderloins. It was theatrically released on February 21, 2020. The film received generally mixed reviews and was a box office success, grossing $10 million against a budget of $3 million.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/6/6a/Impractical_Jokers_The_Movie_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 325
	},
	{
		title: 'The Invisible Man',
		year: 2020,
		cast: [
			'Elisabeth Moss',
			'Aldis Hodge',
			'Storm Reid',
			'Harriet Dyer',
			'Michael Dorman',
			'Oliver Jackson-Cohen'
		],
		genres: ['Horror', 'Science Fiction'],
		href: 'The_Invisible_Man_(2020_film)',
		extract:
			"The Invisible Man is a 2020 science fiction horror film written and directed by Leigh Whannell. Inspired by H. G. Wells' novel of the same name, it stars Elisabeth Moss as a woman who believes she is being stalked and gaslit by her seemingly deceased ex-boyfriend after he acquires the ability to become invisible. Aldis Hodge, Storm Reid, Harriet Dyer, and Michael Dorman appear in supporting roles.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/3a/The_Invisible_Man_%282020_film%29_-_release_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'All the Bright Places',
		year: 2020,
		cast: ['Elle Fanning', 'Justice Smith', 'Alexandra Shipp', 'Keegan-Michael Key', 'Luke Wilson'],
		genres: ['Drama', 'Teen', 'Romance'],
		href: 'All_the_Bright_Places_(film)',
		extract:
			"All the Bright Places is a 2020 American teen romantic drama film, directed by Brett Haley, from a screenplay by Jennifer Niven and Liz Hannah, adapted from the novel of the same name by Niven. It stars Elle Fanning, Justice Smith, Alexandra Shipp, Kelli O'Hara, Lamar Johnson, Virginia Gardner, Felix Mallard, Sofia Hasmik, Keegan-Michael Key, and Luke Wilson.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8c/All_the_Bright_Places.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Wendy',
		year: 2020,
		cast: ['Tommie Lynn Milazzo', 'Shay Walker'],
		genres: ['Drama', 'Fantasy'],
		href: 'Wendy_(film)',
		extract:
			"Wendy is a 2020 American fantasy drama film directed by Benh Zeitlin, from a screenplay by Zeitlin and Eliza Zeitlin. The film stars Devin France, Yashua Mack, Gage Naquin, Gavin Naquin, Ahmad Cage, Krzysztof Meyn, and Romyri Ross. It is intended to be a re-imagining of J. M. Barrie's Peter Pan.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/ac/Wendy_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Guns Akimbo',
		year: 2020,
		cast: ['Daniel Radcliffe', 'Samara Weaving', 'Natasha Liu Bordizzo'],
		genres: ['Action', 'Comedy'],
		href: 'Guns_Akimbo',
		extract:
			'Guns Akimbo is a 2019 action comedy film written and directed by Jason Lei Howden. It stars Daniel Radcliffe, Samara Weaving, Ned Dennehy, Natasha Liu Bordizzo, Grant Bowler, Edwin Wright, Rhys Darby, Milo Cawthorne, Richard Knowles, and Mark Rowley.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Guns_Akimbo_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Onward',
		year: 2020,
		cast: ['Tom Holland', 'Chris Pratt', 'Julia Louis-Dreyfus', 'Octavia Spencer'],
		genres: ['Adventure', 'Animated', 'Fantasy'],
		href: 'Onward_(film)',
		extract:
			'Onward is a 2020 American computer-animated urban fantasy adventure film produced by Pixar Animation Studios and distributed by Walt Disney Studios Motion Pictures. The film was directed by Dan Scanlon, produced by Kori Rae, and written by Scanlon, Jason Headley, and Keith Bunin. The film stars the voices of Tom Holland, Chris Pratt, Julia Louis-Dreyfus, and Octavia Spencer. Set in a suburban fantasy world for the modern day, the film follows two elf brothers named Ian and Barley Lightfoot who set out on a quest to find an artifact that will temporarily bring back their deceased father named Wilden (Bornheimer) for twenty-four hours before the time is up. Along the way, their journey is filled with cryptic maps, impossible obstacles and unimaginable discoveries.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/03/Onward_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Way Back',
		year: 2020,
		cast: ['Ben Affleck', 'Al Madrigal', 'Michaela Watkins', 'Janina Gavankar', 'Glynn Turman'],
		genres: ['Drama', 'Sports'],
		href: 'The_Way_Back_(2020_film)',
		extract:
			"The Way Back is a 2020 American sports drama film directed by Gavin O'Connor and written by Brad Ingelsby. It stars Ben Affleck, Al Madrigal, Michaela Watkins, and Janina Gavankar, and follows an alcoholic construction worker who is recruited to become head coach of the basketball team at the high school where he was a star.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c3/The_Way_Back_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Spenser Confidential',
		year: 2020,
		cast: [
			'Mark Wahlberg',
			'Winston Duke',
			'Alan Arkin',
			'Iliza Shlesinger',
			'Bokeem Woodbine',
			'Marc Maron',
			'Austin Post'
		],
		genres: ['Action', 'Comedy'],
		href: 'Spenser_Confidential',
		extract:
			"Spenser Confidential is a 2020 American action comedy film directed by Peter Berg and with a screenplay written by Sean O'Keefe and Brian Helgeland. The film stars Mark Wahlberg, Winston Duke, Alan Arkin, Iliza Shlesinger, Bokeem Woodbine, Donald Cerrone, Marc Maron, and Post Malone and marks the fifth collaboration between Wahlberg and Berg after Lone Survivor, Deepwater Horizon, Patriots Day, and Mile 22.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c6/Spenser_Confidential_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'The Banker',
		year: 2020,
		cast: ['Anthony Mackie', 'Nicholas Hoult', 'Nia Long', 'Samuel L. Jackson'],
		genres: ['Drama', 'Historical'],
		href: 'The_Banker_(2020_film)',
		extract:
			'The Banker is a 2020 American period drama film directed, co-written and produced by George Nolfi. The film stars Anthony Mackie, Nicholas Hoult, Nia Long, Jessie T. Usher and Samuel L. Jackson. The story follows Joe Morris (Jackson) and Bernard Garrett (Mackie), two of the first African-American bankers in the United States.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/72/The_Banker_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'The Burnt Orange Heresy',
		year: 2020,
		cast: ['Claes Bang', 'Elizabeth Debicki', 'Mick Jagger', 'Donald Sutherland'],
		genres: ['Crime', 'Thriller'],
		href: 'The_Burnt_Orange_Heresy',
		extract:
			'The Burnt Orange Heresy is a 2019 crime thriller film directed by Giuseppe Capotondi and with a screenplay by Scott Smith. The film is based on the book of the same name by Charles Willeford and stars Claes Bang, Elizabeth Debicki, Mick Jagger, and Donald Sutherland.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/26/The_Burnt_Orange_Heresey.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Swallow',
		year: 2020,
		cast: ['Haley Bennett', 'Austin Stowell', 'Elizabeth Marvel', 'David Rasche', "Denis O'Hare"],
		genres: ['Thriller'],
		href: 'Swallow_(2019_film)',
		extract:
			"Swallow is a 2019 psychological thriller film written and directed by Carlo Mirabella-Davis and starring Haley Bennett, Austin Stowell, Elizabeth Marvel, David Rasche, and Denis O'Hare. Its plot follows a young woman who, emotionally stifled in her marriage and domestic life, develops an impulse to consume inedible objects.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Swallow_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'First Cow',
		year: 2020,
		cast: ['John Magaro', 'Orion Hall', 'René Auberjonois'],
		genres: ['Drama'],
		href: 'First_Cow_(film)',
		extract:
			"First Cow is a 2019 American drama film directed by Kelly Reichardt, from a screenplay by Reichardt and Jonathan Raymond based on Raymond's 2004 novel The Half-Life. It stars John Magaro, Orion Lee, Toby Jones, Ewen Bremner, Scott Shepherd, Gary Farmer, Stephen Malkmus, Alia Shawkat, and Lily Gladstone. It also features René Auberjonois in one of his final film roles.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/43/First_Cow_poster.jpeg',
		thumbnail_width: 253,
		thumbnail_height: 394
	},
	{
		title: 'Bloodshot',
		year: 2020,
		cast: [
			'Vin Diesel',
			'Eiza González',
			'Sam Heughan',
			'Toby Kebbell',
			'Lamorne Morris',
			'Guy Pearce'
		],
		genres: ['Superhero'],
		href: 'Bloodshot_(film)',
		extract:
			'Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe. Directed by David S. F. Wilson from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow, the film stars Vin Diesel in the main role, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce. It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/4/45/Bloodshot_-_official_film_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 316
	},
	{
		title: 'The Hunt',
		year: 2020,
		cast: [
			'Betty Gilpin',
			'Ike Barinholtz',
			'Amy Madigan',
			'Emma Roberts',
			'Ethan Suplee',
			'Hilary Swank'
		],
		genres: ['Horror', 'Thriller'],
		href: 'The_Hunt_(2020_film)',
		extract:
			'The Hunt is a 2020 American horror thriller film directed by Craig Zobel and written by Nick Cuse and Damon Lindelof. The film stars Betty Gilpin, Hilary Swank, Ike Barinholtz, and Emma Roberts. Jason Blum was a producer under his Blumhouse Productions banner, along with Lindelof. Zobel and Lindelof have said that the film is intended as a satire on the profound political divide between the American left and right. It is about a group of elites who kidnap working class people to hunt them.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a9/The_Hunt_2020_poster.png',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: 'I Still Believe',
		year: 2020,
		cast: ['KJ Apa', 'Britt Robertson', 'Shania Twain', 'Gary Sinise'],
		genres: ['Drama', 'Romance'],
		href: 'I_Still_Believe_(film)',
		extract:
			'I Still Believe is a 2020 American Christian romantic drama film directed by the Erwin brothers and starring KJ Apa, Britt Robertson, Shania Twain, Melissa Roxburgh, and Gary Sinise. It is based on the life of American contemporary Christian music singer-songwriter Jeremy Camp and his first wife, Melissa Lynn Henning-Camp, who was diagnosed with ovarian cancer shortly before they married. Camp\'s song "I Still Believe" is the film\'s namesake.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/1/18/I_Still_Believe_promotional_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 316
	},
	{
		title: 'Lost Girls',
		year: 2020,
		cast: [
			'Amy Ryan',
			'Thomasin McKenzie',
			'Lola Kirke',
			'Oona Laurence',
			'Dean Winters',
			'Miriam Shor',
			'Reed Birney',
			'Kevin Corrigan',
			'Gabriel Byrne'
		],
		genres: ['Drama', 'Mystery'],
		href: 'Lost_Girls_(film)',
		extract:
			'Lost Girls is a 2020 American mystery drama film. Lost Girls was directed by Liz Garbus, from a screenplay by Michael Werwie, and based on the book Lost Girls: An Unsolved American Mystery by Robert Kolker. The film revolves around the murders of young female sex workers on the South Shore barrier islands of Long Island, committed by the Long Island serial killer, who remains unidentified.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/37/Lost_Girls_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Stargirl',
		year: 2020,
		cast: ['Grace VanderWaal', 'Graham Verchere', 'Giancarlo Esposito'],
		genres: ['Musical', 'Romance'],
		href: 'Stargirl_(film)',
		extract:
			'Stargirl is a 2020 American jukebox musical romance film based on the 2000 novel of the same name by Jerry Spinelli that debuted on Disney+. The film explores the tense emotions, non-conformity and self-expression of teenagers in high school, and the exuberance of first love.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Star_girl_Movie_Poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'The Roads Not Taken',
		year: 2020,
		cast: ['Javier Bardem', 'Elle Fanning', 'Laura Linney', 'Salma Hayek'],
		genres: ['Drama'],
		href: 'The_Roads_Not_Taken',
		extract:
			'The Roads Not Taken is a 2020 drama film written and directed by Sally Potter. The film stars Javier Bardem, Elle Fanning, Salma Hayek and Laura Linney.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/12/The_Roads_Not_Taken_poster.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Never Rarely Sometimes Always',
		year: 2020,
		cast: [
			'Sidney Flanigan',
			'Talia Ryder',
			'Theodore Pellerin',
			'Ryan Eggold',
			'Sharon Van Etten'
		],
		genres: ['Drama'],
		href: 'Never_Rarely_Sometimes_Always',
		extract:
			"Never Rarely Sometimes Always is a 2020 drama film written and directed by Eliza Hittman. It stars Sidney Flanigan, Talia Ryder, Théodore Pellerin, Ryan Eggold, and Sharon Van Etten. It had its world premiere at the Sundance Film Festival on January 24, 2020. It was also selected to compete for the Golden Bear in the main competition section at the 70th Berlin International Film Festival, where it won the Silver Bear Grand Jury Prize. The film was released in the United States on March 13, 2020, by Focus Features. It received widespread acclaim from critics, with praise for Flanigan's performance and Hittman's direction.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/44/Never_Rarely_Sometimes_Always.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Big Time Adolescence',
		year: 2020,
		cast: ['Pete Davidson', 'Griffin Gluck', 'Jon Cryer', 'Oona Laurence', 'Sydney Sweeney'],
		genres: ['Comedy'],
		href: 'Big_Time_Adolescence',
		extract:
			'Big Time Adolescence is a 2019 American coming-of-age comedy film written and directed by Jason Orley, in his directorial debut. It stars Pete Davidson, Griffin Gluck, Emily Arlook, Colson Baker, Sydney Sweeney and Jon Cryer.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Big_Time_Adolescences_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Lost Transmissions',
		year: 2020,
		cast: [
			'Simon Pegg',
			'Juno Temple',
			'Alexandra Daddario',
			'Tao Okamoto',
			'Rosanna Arquette',
			'Bria Vinaite'
		],
		genres: ['Drama'],
		href: 'Lost_Transmissions',
		extract:
			"Lost Transmissions is a 2019 drama film written and directed by Katharine O'Brien. It stars Simon Pegg, Juno Temple, and Alexandra Daddario. It premiered at the Tribeca Film Festival on April 28, 2019 ati was released on March 13, 2020 by Gravitas Ventures.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ee/LostTransmissionTribeca.png',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Resistance',
		year: 2020,
		cast: [
			'Jesse Eisenberg',
			'Ed Harris',
			'Clémence Poésy',
			'Matthias Schweighöfer',
			'Félix Moati',
			'Karl Markovics',
			'Vica Kerekes',
			'Bella Ramsey',
			'Édgar Ramírez'
		],
		genres: ['Drama', 'Biography'],
		href: 'Resistance_(2020_film)',
		extract:
			'Resistance is a 2020 biographical drama film written and directed by Jonathan Jakubowicz, inspired by the life of Marcel Marceau. It stars Jesse Eisenberg as Marceau, with Clémence Poésy, Matthias Schweighöfer, Alicia von Rittberg, Félix Moati, Géza Röhrig, Karl Markovics, Vica Kerekes, Bella Ramsey, Ed Harris and Édgar Ramírez.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Resistance_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Uncorked',
		year: 2020,
		cast: ['Mamoudou Athie', 'Courtney B. Vance', 'Niecy Nash', 'Matt McGorry'],
		genres: ['Drama'],
		href: 'Uncorked_(2020_film)',
		extract:
			'Uncorked is a 2020 American drama film, written and directed by Prentice Penny. It stars Mamoudou Athie, Courtney B. Vance, Niecy Nash, Matt McGorry, Sasha Compère, Gil Ozeri, Kelly Jenrette, Bernard David Jones, Melisia Lomax and Meera Rohit Kumbhani.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/92/Uncorked_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Vivarium',
		year: 2020,
		cast: ['Imogen Poots', 'Jesse Eisenberg'],
		genres: ['Science Fiction'],
		href: 'Vivarium_(film)',
		extract:
			'Vivarium is a 2019 science fiction film directed by Lorcan Finnegan, from a story by Finnegan and Garret Shanley. An international co-production between Ireland, Denmark and Belgium, it stars Imogen Poots and Jesse Eisenberg. It premiered at the Cannes Film Festival on 18 May 2019, and was released in Ireland on 27 March 2020 by Vertigo Releasing. The film follows a couple that is forced to care for a mysterious child while trapped in a seemingly perfect neighbourhood.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/11/Vivarium_film_theatrical_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Coffee & Kareem',
		year: 2020,
		cast: ['Ed Helms', 'Taraji P. Henson', 'Betty Gilpin', 'King Bach', 'David Alan Grier'],
		genres: ['Action', 'Comedy'],
		href: 'Coffee_%26_Kareem',
		extract:
			'Coffee & Kareem is a 2020 American action comedy film directed by Michael Dowse and written by Shane Mack. It stars Ed Helms, Terrence Little Gardenhigh, Betty Gilpin, RonReaco Lee, Andrew Bachelor, David Alan Grier and Taraji P. Henson, and follows a bumbling Detroit cop who must rescue his girlfriend and her 12-year-old son from gangsters after the boy witnesses a murder.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/03/Coffee_%26_Kareem_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Trolls World Tour',
		year: 2020,
		cast: [
			'Anna Kendrick',
			'Justin Timberlake',
			'Rachel Bloom',
			'James Corden',
			'Ron Funches',
			'Kelly Clarkson',
			'Anderson Paak',
			'Sam Rockwell',
			'George Clinton',
			'Mary J. Blige'
		],
		genres: ['Animated', 'Comedy', 'Musical'],
		href: 'Trolls_World_Tour',
		extract:
			'Trolls World Tour is a 2020 American computer-animated jukebox musical comedy film produced by DreamWorks Animation and distributed by Universal Pictures, based on the Good Luck Trolls dolls created by Thomas Dam. The sequel to Trolls (2016) and the second installment in the franchise, the film was directed by Walt Dohrn and co-directed by David P. Smith, from a screenplay by Maya Forbes, Wallace Wolodarsky, Elizabeth Tippet, and the writing team of Jonathan Aibel and Glenn Berger, and a story by Aibel and Berger. The film features an ensemble cast that includes the voices of Anna Kendrick, Justin Timberlake, Rachel Bloom, James Corden, Ron Funches, Kelly Clarkson, Anderson .Paak, Sam Rockwell, George Clinton, and Mary J. Blige. The film follows Poppy and Branch as they discover several more troll tribes that represent music genres other than their own. Troubles arise when the Queen of the Rock tribe plans to overthrow the foreign music genres to unite the trolls under rock music.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Trolls_World_Tour_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 386
	},
	{
		title: 'Love Wedding Repeat',
		year: 2020,
		cast: ['Olivia Munn', 'Sam Claflin', 'Freida Pinto', 'Eleanor Tomlinson', 'Jack Farthing'],
		genres: ['Comedy', 'Romance'],
		href: 'Love_Wedding_Repeat',
		extract:
			'Love Wedding Repeat is a 2020 romantic comedy film written and directed by Dean Craig, in his feature directorial debut. A remake of the 2012 French romantic comedy film Plan de Table, the film stars Sam Claflin, Olivia Munn and Eleanor Tomlinson. It was released on 10 April 2020 by Netflix.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/39/Love_Wedding_Repeat.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Main Event',
		year: 2020,
		cast: ['Seth Carr', 'Tichina Arnold', 'Ken Marino', 'Adam Pally'],
		genres: ['Comedy', 'Sports'],
		href: 'The_Main_Event_(2020_film)',
		extract:
			'The Main Event is a 2020 American sports comedy film directed by Jay Karas, from a screenplay by Larry Postel and starring Seth Carr, Tichina Arnold, Ken Marino and Adam Pally. It was released on April 10, 2020, by Netflix.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/77/The_Main_Event_%282020_film%29.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'We Summon the Darkness',
		year: 2020,
		cast: [
			'Alexandra Daddario',
			'Keean Johnson',
			'Logan Miller',
			'Maddie Hasson',
			'Amy Forsyth',
			'Austin Swift',
			'Johnny Knoxville'
		],
		genres: ['Horror', 'Thriller'],
		href: 'We_Summon_the_Darkness',
		extract:
			'We Summon the Darkness is a 2019 American horror thriller film directed by Marc Meyers and written by Alan Trezza. The film stars Alexandra Daddario, Keean Johnson, Maddie Hasson, Amy Forsyth, Logan Miller, Austin Swift, and Johnny Knoxville.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/5/5d/We_Summon_the_Darkness_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Lost Husband',
		year: 2020,
		cast: ['Leslie Bibb', 'Josh Duhamel', 'Nora Dunn'],
		genres: ['Romance'],
		href: 'The_Lost_Husband',
		extract:
			"The Lost Husband is a 2020 American romance film written and directed by Vicky Wight and starring Leslie Bibb and Josh Duhamel. It is based on Katherine Center's 2013 novel of the same name. The film was released to video on demand on April 10, 2020 by Quiver Distribution and Redbox Entertainment.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Lost_husband.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Corona Zombies',
		year: 2020,
		cast: ['Cody Renee Cameron', 'Russell Coker', 'Robin Sydney'],
		genres: ['Comedy', 'Horror'],
		href: 'Corona_Zombies',
		extract:
			'Corona Zombies is a 2020 American comedy horror film directed by Charles Band, and produced and distributed by Full Moon Features. Inspired by the COVID-19 pandemic, the film stars Cody Renee Cameron as Barbie, a woman who finds herself facing an outbreak of zombies infected by coronavirus disease 2019 (COVID-19). Alongside Cameron, the film stars Russell Coker and Robin Sydney.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/2/2c/Corona_Zombies_%282020%29_poster.jpg',
		thumbnail_width: 245,
		thumbnail_height: 367
	},
	{
		title: 'Sergio',
		year: 2020,
		cast: [
			'Wagner Moura',
			'Ana de Armas',
			'Garret Dillahunt',
			"Brían F. O'Byrne",
			'Clemens Schick',
			'Bradley Whitford'
		],
		genres: ['Drama', 'Biography'],
		href: 'Sergio_(2020_film)',
		extract:
			"Sergio is a 2020 American biographical drama film about the United Nations diplomat Sérgio Vieira de Mello. The film is directed by Greg Barker, from a screenplay written by Craig Borten. It stars Wagner Moura, Ana de Armas, Garret Dillahunt, Clemens Schick, Will Dalton, Bradley Whitford and Brían F. O'Byrne.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/da/Sergio_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'The Willoughbys',
		year: 2020,
		cast: [
			'Will Forte',
			'Maya Rudolph',
			'Alessia Cara',
			'Terry Crews',
			'Martin Short',
			'Jane Krakowski',
			'Ricky Gervais'
		],
		genres: ['Animated', 'Comedy'],
		href: 'The_Willoughbys',
		extract:
			"The Willoughbys is a 2020 computer-animated comedy film directed by Kris Pearn and co-directed by Rob Lodermeier. Based on the book of the same name by Lois Lowry, the film's screenplay was written by Pearn and Mark Stanleigh, and stars the voices of Will Forte, Maya Rudolph, Alessia Cara, Terry Crews, Martin Short, Jane Krakowski, Seán Cullen, and Ricky Gervais, who also narrates the film and follows four kids trying to find new parents to replace their self-centered and neglectful ones.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/a/a0/The_Willoughbys_Theatrical_release_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Extraction',
		year: 2020,
		cast: [
			'Chris Hemsworth',
			'Rudhraksh Jaiswal',
			'Randeep Hooda',
			'Golshifteh Farahani',
			'Pankaj Tripathi',
			'David Harbour'
		],
		genres: ['Action', 'Thriller'],
		href: 'Extraction_(2020_film)',
		extract:
			"Extraction is a 2020 American action thriller film directed by Sam Hargrave and written by Joe Russo, based on the graphic novel Ciudad by Ande Parks, Joe Russo, Anthony Russo, Fernando León González, and Eric Skillman. The film's cast features Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda, Golshifteh Farahani, Pankaj Tripathi and David Harbour. The film is about an Australian black ops mercenary whose mission to save an Indian crime lord's kidnapped son in Dhaka, Bangladesh goes awry when he is double-crossed.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/89/Extraction_%282020_film%29.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Braking for Whales',
		year: 2020,
		cast: ['Tom Felton', 'Tammin Sursok', 'Wendi McLendon-Covey', 'David Koechner'],
		genres: ['Comedy', 'Drama'],
		href: 'Braking_for_Whales',
		extract:
			'Braking for Whales is a 2019 American comedy-drama film directed by Sean McEwen and starring Tammin Sursok and Tom Felton. Sursok co-wrote the screenplay with McEwen.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/62/Braking_for_Whales.jpg',
		thumbnail_width: 220,
		thumbnail_height: 330
	},
	{
		title: 'Bad Education',
		year: 2020,
		cast: [
			'Hugh Jackman',
			'Allison Janney',
			'Geraldine Viswanathan',
			'Alex Wolff',
			'Rafael Casal',
			'Stephen Spinella',
			'Annaleigh Ashford',
			'Ray Romano'
		],
		genres: ['Crime', 'Drama'],
		href: 'Bad_Education_(2019_film)',
		extract:
			'Bad Education is a 2019 American crime drama film directed by Cory Finley and written by Mike Makowsky. It is based on the 2004 New York magazine article "The Bad Superintendent" by Robert Kolker, about the true story of the largest public school embezzlement in American history. It features an ensemble cast including Hugh Jackman, Allison Janney, Geraldine Viswanathan, Alex Wolff, Rafael Casal, Stephen Spinella, Annaleigh Ashford and Ray Romano.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Bad_Education_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Dangerous Lies',
		year: 2020,
		cast: [
			'Camila Mendes',
			'Jessie T. Usher',
			'Jamie Chung',
			'Cam Gigandet',
			'Sasha Alexander',
			'Elliott Gould'
		],
		genres: ['Thriller'],
		href: 'Dangerous_Lies_(2020_film)',
		extract:
			"Dangerous Lies is a 2020 American psychological thriller film, directed by Michael Scott from a screenplay by David Golden. It stars Camila Mendes, Jessie T. Usher, Jamie Chung, Cam Gigandet, Sasha Alexander and Elliott Gould. It was released on April 30, 2020, by Netflix. In October 2020, Dangerous Lies was nominated for People's Choice Awards in the drama movie category.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/03/Dangerous_Lies_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'All Day and a Night',
		year: 2020,
		cast: ['Ashton Sanders', 'Jeffrey Wright', 'Yahya Abdul-Mateen II'],
		genres: ['Drama'],
		href: 'All_Day_and_a_Night',
		extract:
			'All Day and a Night is a 2020 American drama film written and directed by Joe Robert Cole. It stars Jeffrey Wright, Ashton Sanders and Yahya Abdul-Mateen II.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/03/All_Day_and_a_Night_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Wretched',
		year: 2020,
		cast: ['John-Paul Howard', 'Piper Curda', 'Zarah Mahler', 'Kevin Bigley'],
		genres: ['Horror', 'Supernatural'],
		href: 'The_Wretched_(film)',
		extract:
			'The Wretched is a 2019 American supernatural horror film written and directed by the Pierce Brothers. It stars John-Paul Howard, Piper Curda, Zarah Mahler, Kevin Bigley, Gabriela Quezada Bloomgarden, Richard Ellis, Blane Crockarell, Jamison Jones, and Azie Tesfai. The film follows a defiant teenage boy who faces off with an evil witch posing as the neighbor next door.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/df/The_Wretched_%28film%29_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'The Half of It',
		year: 2020,
		cast: ['Leah Lewis', 'Daniel Diemer', 'Alexxis Lemire', 'Collin Chou'],
		genres: ['Comedy', 'Drama'],
		href: 'The_Half_of_It',
		extract:
			'The Half of It is a 2020 American coming-of-age comedy-drama film written and directed by Alice Wu. It stars Leah Lewis, Daniel Diemer, and Alexxis Lemire, with Enrique Murciano, Wolfgang Novogratz, Catherine Curtin, Becky Ann Baker, and Collin Chou in supporting roles. Teenager Ellie Chu agrees to write a love letter for a jock while falling for his crush. Netflix released the film on May 1, 2020, to positive reviews. The film received the Founders Award for Best Narrative Feature at the 2020 Tribeca Film Festival.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/71/The_Half_of_It_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Arkansas',
		year: 2020,
		cast: [
			'Liam Hemsworth',
			'Clark Duke',
			'Michael Kenneth Williams',
			'Vivica A. Fox',
			'Eden Brolin',
			'Chandler Duke',
			'John Malkovich',
			'Vince Vaughn'
		],
		genres: ['Crime', 'Noir', 'Thriller'],
		href: 'Arkansas_(film)',
		extract:
			'Arkansas is a 2020 American neo-noir crime thriller film directed by Clark Duke in his directorial debut, from a screenplay he wrote with Andrew Boonkrong. It stars Liam Hemsworth, Clark Duke, Michael Kenneth Williams, Vivica A. Fox, Eden Brolin, Chandler Duke, John Malkovich and Vince Vaughn. It is based on the novel Arkansas by John Brandon.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Arkansas_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Valley Girl',
		year: 2020,
		cast: ['Jessica Rothe', 'Josh Whitehouse', 'Mae Whitman', 'Judy Greer'],
		genres: ['Comedy', 'Musical', 'Teen', 'Romance'],
		href: 'Valley_Girl_(2020_film)',
		extract:
			'Valley Girl is a 2020 American jukebox musical romantic comedy teen film directed by Rachel Lee Goldenberg and written by Amy Talkington from a story by Wayne Crawford and Andrew Lane. It is a remake of the 1983 film of the same name and stars Jessica Rothe, Josh Whitehouse, Mae Whitman, and Judy Greer. The film follows Julie Richman, a Valley girl, who falls in love with Randy, a rebellious punk, during the early 1980s.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Valley_Girl_2020_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Capone',
		year: 2020,
		cast: [
			'Tom Hardy',
			'Linda Cardellini',
			'Jack Lowden',
			'Noel Fisher',
			'Kyle MacLachlan',
			'Matt Dillon'
		],
		genres: ['Drama', 'Biography'],
		href: 'Capone_(2020_film)',
		extract:
			'Capone is a 2020 American biographical drama film written, directed and edited by Josh Trank, with Tom Hardy starring as the eponymous gangster Al Capone. The film centers on Capone after his 11-year sentence at Atlanta Penitentiary, as he suffers from neurosyphilis and dementia while living in Florida. Linda Cardellini, Jack Lowden, Noel Fisher, Kyle MacLachlan, and Matt Dillon also star in supporting roles. First announced in October 2016 as Fonzo, production on the film did not begin until March 2018, lasting through May in Louisiana.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Capone_2020_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 316
	},
	{
		title: 'The Wrong Missy',
		year: 2020,
		cast: ['David Spade', 'Lauren Lapkus', 'Geoff Pierson', 'Sarah Chalke', 'Molly Sims'],
		genres: ['Comedy', 'Romance'],
		href: 'The_Wrong_Missy',
		extract:
			'The Wrong Missy is a 2020 American romantic comedy film directed by Tyler Spindel which was produced by Happy Madison Productions. With a screenplay by Chris Pappas and Kevin Barnett, the film stars David Spade as a recently single businessman who accidentally invites a woman with whom he had a horrible first date to a corporate retreat after a case of mistaken identity. It features lesser roles for Rob Schneider and Molly Sims, and a cameo for Vanilla Ice.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a0/The_Wrong_Missy_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Scoob!',
		year: 2020,
		cast: [
			'Will Forte',
			'Mark Wahlberg',
			'Jason Isaacs',
			'Gina Rodriguez',
			'Zac Efron',
			'Amanda Seyfried',
			'Kiersey Clemons',
			'Ken Jeong',
			'Tracy Morgan',
			'Frank Welker'
		],
		genres: ['Animated', 'Comedy', 'Mystery'],
		href: 'Scoob!',
		extract:
			"Scoob! is a 2020 American computer-animated mystery comedy film produced by the Warner Animation Group, and distributed by Warner Bros. Pictures. It is a reboot of the theatrical Scooby-Doo film series and the third theatrical film based on the characters, following Scooby-Doo (2002) and Scooby-Doo 2: Monsters Unleashed (2004). Set in a Hanna-Barbera animated multiverse, the film follows Mystery Incorporated working with the Blue Falcon to solve their most challenging mystery behind their mascot's secret legacy and purpose, which connects with Dick Dastardly's evil plan to unleash Cerberus.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Scoob_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Blood and Money',
		year: 2020,
		cast: ['Tom Berenger', 'Kristen Hager', 'Mark Sivertsen', 'Paul Ben-Victor'],
		genres: ['Thriller'],
		href: 'Blood_and_Money',
		extract:
			"Blood and Money is a 2020 American thriller film directed by John Barr and starring Tom Berenger. It is Barr's feature directorial debut.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/49/Blood_and_money.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Body Cam',
		year: 2020,
		cast: [
			'Mary J. Blige',
			'Nat Wolff',
			'David Zayas',
			'David Warshofsky',
			'Demetrius Grosse',
			'Anika Noni Rose'
		],
		genres: ['Horror'],
		href: 'Body_Cam_(film)',
		extract:
			'Body Cam is a 2020 American police procedural horror film directed by Malik Vitthal, from a screenplay by Nicholas McCarthy and Richmond Riedel and a story by Riedel. The film stars Mary J. Blige, Nat Wolff, David Zayas, David Warshofsky, Demetrius Grosse and Anika Noni Rose.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Body_Cam_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'The Lovebirds',
		year: 2020,
		cast: ['Issa Rae', 'Kumail Nanjiani', 'Paul Sparks', 'Anna Camp', 'Kyle Bornheimer'],
		genres: ['Comedy', 'Romance'],
		href: 'The_Lovebirds_(2020_film)',
		extract:
			'The Lovebirds is a 2020 American romantic comedy film directed by Michael Showalter from a screenplay by Aaron Abrams and Brendan Gall, and a story by Abrams, Gall, and Martin Gero. The film stars Issa Rae and Kumail Nanjiani, as well as Paul Sparks, Anna Camp, and Kyle Bornheimer, and follows a couple who goes on the run after witnessing a murder.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/62/The_Lovebirds_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 316
	},
	{
		title: 'Inheritance',
		year: 2020,
		cast: [
			'Lily Collins',
			'Simon Pegg',
			'Chace Crawford',
			'Connie Nielsen',
			'Patrick Warburton',
			'Adam Beach'
		],
		genres: ['Thriller'],
		href: 'Inheritance_(2020_film)',
		extract:
			'Inheritance is a 2020 American thriller film directed by Vaughn Stein from a screenplay by Matthew Kennedy. The film stars Lily Collins, Simon Pegg, Connie Nielsen, Chace Crawford and Patrick Warburton. Inheritance was released on May 22, 2020, by Vertical Entertainment. It received generally negative reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/14/Inheritance_%282020_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Survive the Night',
		year: 2020,
		cast: ['Bruce Willis', 'Chad Michael Murray'],
		genres: ['Action', 'Thriller'],
		href: 'Survive_the_Night',
		extract:
			'Survive the Night is a 2020 American action thriller film directed by Matt Eskandari and starring Bruce Willis, Chad Michael Murray, and Shea Buckner. The film was released in the United States on May 22, 2020.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Survive_the_Night_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'The Wanting Mare',
		year: 2020,
		cast: ['Josh Clark'],
		genres: ['Science Fiction'],
		href: 'The_Wanting_Mare',
		extract:
			'The Wanting Mare is a 2020 science fiction film written and directed by Nicholas Ashe Bateman.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/28/Wanting_mare.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The High Note',
		year: 2020,
		cast: [
			'Dakota Johnson',
			'Tracee Ellis Ross',
			'Kelvin Harrison Jr.',
			'Ice Cube',
			'Zoë Chao',
			'Bill Pullman',
			'Eddie Izzard'
		],
		genres: ['Comedy', 'Drama'],
		href: 'The_High_Note',
		extract:
			"The High Note is a 2020 American comedy-drama film directed by Nisha Ganatra and written by Flora Greeson. It stars Dakota Johnson, Tracee Ellis Ross, Kelvin Harrison Jr., Zoë Chao, Bill Pullman, Eddie Izzard, and Ice Cube, and follows a famous singer's personal assistant who wants to become a music producer.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6d/The_High_Note_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Shirley',
		year: 2020,
		cast: ['Elisabeth Moss', 'Michael Stuhlbarg', 'Odessa Young', 'Logan Lerman'],
		genres: ['Drama', 'Biography'],
		href: 'Shirley_(2020_film)',
		extract:
			'Shirley is a 2020 American biographical drama film, directed by Josephine Decker, from a screenplay by Sarah Gubbins, based upon the 2014 novel of the same name by Susan Scarf Merrell, which formed a "largely fictional story" around novelist Shirley Jackson\'s real life during the time period she was writing her 1951 novel Hangsaman. The film stars Elisabeth Moss as Jackson with Michael Stuhlbarg, Odessa Young and Logan Lerman. Martin Scorsese serves as an executive producer.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/30/Shirley_poster.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'The Last Days of American Crime',
		year: 2020,
		cast: ['Édgar Ramírez', 'Anna Brewster', 'Michael Pitt', 'Sharlto Copley'],
		genres: ['Action', 'Thriller'],
		href: 'The_Last_Days_of_American_Crime',
		extract:
			"The Last Days of American Crime is a 2020 American action thriller film directed by Olivier Megaton from a screenplay written by Karl Gajdusek, based on Rick Remender and Greg Tocchini's 2009 graphic novel of the same name. It stars Édgar Ramírez, Anna Brewster, Michael Pitt, Patrick Bergin, and Sharlto Copley. It was panned by critics, who noted the film's release as unfortunate for coinciding with the George Floyd protests, due to its violent content and depictions of police brutality, and as of October 2021 holds a 0% rating on Rotten Tomatoes.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/7/77/The_Last_Days_of_American_Crime_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Becky',
		year: 2020,
		cast: ['Lulu Wilson', 'Kevin James', 'Joel McHale'],
		genres: ['Action', 'Thriller'],
		href: 'Becky_(2020_film)',
		extract:
			'Becky is a 2020 American action thriller film directed by Jonathan Milott and Cary Murnion, from a screenplay by Nick Morris, Lane Skye, and Ruckus Skye. The film stars Lulu Wilson, Kevin James, and Joel McHale.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/53/Becky_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Think Like a Dog',
		year: 2020,
		cast: ['Josh Duhamel', 'Megan Fox'],
		genres: ['Comedy', 'Family', 'Science Fiction'],
		href: 'Think_Like_a_Dog',
		extract:
			'Think Like a Dog is a 2020 American family sci-fi comedy film written and directed by Gil Junger. It stars Josh Duhamel and Megan Fox. The film was released through Premium VOD on June 9, 2020.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/37/Think_Like_a_Dog_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Da 5 Bloods',
		year: 2020,
		cast: [
			'Delroy Lindo',
			'Jonathan Majors',
			'Clarke Peters',
			'Norm Lewis',
			'Isiah Whitlock Jr.',
			'Mélanie Thierry',
			'Paul Walter Hauser',
			'Jasper Pääkkönen',
			'Jean Reno',
			'Chadwick Boseman'
		],
		genres: ['Drama', 'War'],
		href: 'Da_5_Bloods',
		extract:
			"Da 5 Bloods is a 2020 American war drama film directed, produced, and co-written by Spike Lee. It stars Delroy Lindo, Jonathan Majors, Clarke Peters, Johnny Trí Nguyễn, Norm Lewis, Isiah Whitlock Jr., Mélanie Thierry, Paul Walter Hauser, Jasper Pääkkönen, Jean Reno, and Chadwick Boseman. The film's plot follows a group of four aging Vietnam War veterans who return to the country in search of the remains of their fallen squad leader, as well as the treasure they buried while serving there.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f0/Da_5_Bloods_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Artemis Fowl',
		year: 2020,
		cast: [
			'Ferdia Shaw',
			'Lara McDonnell',
			'Josh Gad',
			'Tamara Smart',
			'Nonso Anozie',
			'Colin Farrell',
			'Judi Dench'
		],
		genres: ['Action', 'Adventure', 'Fantasy'],
		href: 'Artemis_Fowl_(film)',
		extract:
			'Artemis Fowl is a 2020 American science fantasy action adventure film based on the 2001 novel of the same name by Irish author Eoin Colfer. Directed by Kenneth Branagh, from a screenplay co-written by Conor McPherson and Hamish McColl, the film stars Ferdia Shaw, Lara McDonnell, Josh Gad, Tamara Smart, Nonso Anozie, Colin Farrell, and Judi Dench. It details the adventures of Artemis Fowl II, a twelve-year-old Irish prodigy who teams up with his faithful servant, as well as a dwarf and a fairy, in order to rescue his father, Artemis Fowl I, who has been kidnapped by another fairy looking to reclaim an item the Fowl family has stolen.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Artemis_Fowl_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'The King of Staten Island',
		year: 2020,
		cast: [
			'Pete Davidson',
			'Marisa Tomei',
			'Bill Burr',
			'Bel Powley',
			'Maude Apatow',
			'Steve Buscemi'
		],
		genres: ['Comedy', 'Drama'],
		href: 'The_King_of_Staten_Island',
		extract:
			'The King of Staten Island is a 2020 American comedy-drama film directed by Judd Apatow, from a screenplay by Apatow, Pete Davidson, and Dave Sirus. It stars Davidson, Marisa Tomei, Bill Burr, Bel Powley, Maude Apatow, and Steve Buscemi, and follows a young man who must get his life together after his mother starts dating a new man who, like his deceased father, is a firefighter.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e4/The_King_of_Staten_Island.jpeg',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: "Sniper: Assassin's End",
		year: 2020,
		cast: [
			'Chad Michael Collins',
			'Tom Berenger',
			'Sayaka Akimoto',
			'Lochlyn Munro',
			'Ryan Robbins'
		],
		genres: ['Action'],
		href: 'Sniper:_Assassin%27s_End',
		extract:
			"Sniper: Assassin's End is a 2020 American action film directed by Kaare Andrews and starring Chad Michael Collins, Tom Berenger and Sayaka Akimoto. The film is the eighth installment of the Sniper film series and a sequel to Sniper: Ultimate Kill (2017).",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/51/Sniper-_Assassin%27s_End_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'You Should Have Left',
		year: 2020,
		cast: ['Kevin Bacon', 'Amanda Seyfried'],
		genres: ['Horror'],
		href: 'You_Should_Have_Left',
		extract:
			'You Should Have Left is a 2020 American psychological horror film written and directed by David Koepp, based on the 2017 book of the same name by Daniel Kehlmann. It stars Kevin Bacon, and Amanda Seyfried. Jason Blum served as a producer through his Blumhouse Productions banner.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/7/73/You_Should_Have_Left_Poster_2020.jpeg',
		thumbnail_width: 252,
		thumbnail_height: 396
	},
	{
		title: 'Wasp Network',
		year: 2020,
		cast: ['Penélope Cruz', 'Édgar Ramírez', 'Gael García Bernal', 'Ana de Armas', 'Wagner Moura'],
		genres: ['Spy', 'Thriller'],
		href: 'Wasp_Network_(film)',
		extract:
			'Wasp Network is a 2019 spy thriller film written and directed by Olivier Assayas, based on the book The Last Soldiers of the Cold War by Fernando Morais. It stars Penélope Cruz, Édgar Ramírez, Gael García Bernal, Ana de Armas and Wagner Moura. It tells the true story of Cuban spies in American territory during the 1990s.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Wasp_Network.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Feel the Beat',
		year: 2020,
		cast: ['Sofia Carson', 'Enrico Colantoni', 'Wolfgang Novogratz'],
		genres: ['Comedy', 'Dance', 'Drama', 'Family'],
		href: 'Feel_the_Beat_(film)',
		extract:
			'Feel the Beat is a 2020 American family dance comedy-drama film directed by Elissa Down, written by Michael Armbruster and Shawn Ku and starring Sofia Carson, Enrico Colantoni and Wolfgang Novogratz.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Feel_the_Beat_%28film%29_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: '7500',
		year: 2020,
		cast: ['Joseph Gordon-Levitt'],
		genres: ['Action', 'Thriller'],
		href: '7500_(film)',
		extract:
			'7500 is a 2019 action-thriller film written by Senad Halilbašić and Patrick Vollrath and directed by Patrick Vollrath in his directorial feature-length film debut. It stars Joseph Gordon-Levitt as Tobias Ellis, a pilot whose plane is hijacked by terrorists. An international co-production between Austria, Germany, and the United States, filming took place in November 2017 in Cologne and Vienna. The title is in reference to Emergency Transponder Code for "unlawful interference".',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/70/7500_poster.jpg',
		thumbnail_width: 265,
		thumbnail_height: 375
	},
	{
		title: 'Athlete A',
		year: 2020,
		cast: [],
		genres: ['Documentary'],
		href: 'Athlete_A',
		extract:
			'Athlete A is a 2020 American documentary film directed by Bonni Cohen and Jon Shenk. The documentary follows a team of investigative journalists from The Indianapolis Star as they broke the story of doctor Larry Nassar sexually assaulting young female gymnasts and the subsequent allegations that engulfed USA Gymnastics (USAG) and its then-CEO Steve Penny. It was released on June 24, 2020, by Netflix.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/44/Athlete_A_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Eurovision Song Contest: The Story of Fire Saga',
		year: 2020,
		cast: ['Will Ferrell', 'Rachel McAdams', 'Dan Stevens', 'Demi Lovato', 'Pierce Brosnan'],
		genres: ['Comedy', 'Musical'],
		href: 'Eurovision_Song_Contest:_The_Story_of_Fire_Saga',
		extract:
			'Eurovision Song Contest: The Story of Fire Saga is a 2020 American musical comedy film directed by David Dobkin, written by Will Ferrell and Andrew Steele, and starring Will Ferrell, Rachel McAdams, Dan Stevens, Melissanthi Mahut, Mikael Persbrandt, Ólafur Darri Ólafsson, Graham Norton, Demi Lovato, and Pierce Brosnan. The film follows the personally close Icelandic singers Lars Erickssong and Sigrit Ericksdóttir as they are given the chance to represent their country at the Eurovision Song Contest.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/d/da/Eurovision_Song_Contest-_The_Story_of_Fire_Saga_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Irresistible',
		year: 2020,
		cast: [
			'Steve Carell',
			'Chris Cooper',
			'Mackenzie Davis',
			'Topher Grace',
			'Natasha Lyonne',
			'Rose Byrne'
		],
		genres: ['Comedy', 'Political'],
		href: 'Irresistible_(2020_film)',
		extract:
			'Irresistible is a 2020 American political comedy film written and directed by Jon Stewart. It stars Steve Carell in the lead role, Chris Cooper, Mackenzie Davis, Topher Grace, Natasha Lyonne, and Rose Byrne. The film follows a Democratic strategist who tries to help a candidate win a local election in a small right-wing town. Originally set for a theatrical release in May 2020, the film was delayed due to the COVID-19 pandemic in the United States, and then released on Premium VOD and selected theaters on June 26, 2020, by Focus Features. It received mixed reviews from critics, who called it "a soft political satire".',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Irresistible_2020_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'My Spy',
		year: 2020,
		cast: ['Dave Bautista', 'Chloe Coleman', 'Kristen Schaal', 'Ken Jeong'],
		genres: ['Comedy', 'Spy'],
		href: 'My_Spy',
		extract:
			'My Spy is a 2020 American spy comedy film directed by Peter Segal, written by Jon and Erich Hoeber, and starring Dave Bautista, Chloe Coleman, Kristen Schaal, Parisa Fitz-Henley, and Ken Jeong. It follows a CIA agent who finds himself at the mercy of a precocious nine-year-old girl in a family that he and his tech support are surveilling while undercover.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/26/My_Spy_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'We Bare Bears: The Movie',
		year: 2020,
		cast: [
			'Eric Edelstein',
			'Bobby Moynihan',
			'Demetri Martin',
			'Marc Evan Jackson',
			'Keith Ferguson'
		],
		genres: ['Adventure', 'Animated'],
		href: 'We_Bare_Bears:_The_Movie',
		extract:
			'We Bare Bears: The Movie is a 2020 American animated adventure film based on the Cartoon Network television series of the same name. Produced by Cartoon Network Studios, it was released on North American digital theater platforms by Warner Bros. Television Distribution on June 30, 2020. Directed by series creator Daniel Chong from a story by Mikey Heller and Kris Mukai, We Bare Bears: The Movie stars the voices of series regulars Eric Edelstein, Bobby Moynihan and Demetri Martin as the three titular bears Grizz, Panda, and Ice Bear; joined by Marc Evan Jackson as Agent Trout and Keith Ferguson as Officer Murphy. This film serves as the series finale of We Bare Bears.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5b/We_Bare_Bears-_The_Movie_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Hamilton',
		year: 2020,
		cast: [
			'Lin-Manuel Miranda',
			'Phillipa Soo',
			'Leslie Odom Jr.',
			'Renée Elise Goldsberry',
			'Christopher Jackson',
			'Daveed Diggs',
			'Okieriete Onaodowan',
			'Anthony Ramos',
			'Jasmine Cephas Jones',
			'Jonathan Groff'
		],
		genres: ['Drama', 'Historical', 'Musical'],
		href: 'Hamilton_(2020_film)',
		extract:
			"Hamilton is a 2020 American historical fiction musical drama film consisting of a live stage recording of the 2015 Broadway musical of the same name, which was inspired by the 2004 biography Alexander Hamilton by Ron Chernow. Co-produced by Walt Disney Pictures, 5000 Broadway Productions, RadicalMedia, Nevis Productions, and Old 320 Sycamore Pictures, it was directed by Thomas Kail, who also produced the film with Jeffrey Seller and Lin-Manuel Miranda. Miranda, who wrote the music, lyrics, and book for the musical, also stars as Treasury Secretary and Founding Father Alexander Hamilton, along with the musical's original principal Broadway cast, including Leslie Odom Jr., Phillipa Soo, Christopher Jackson, Renée Elise Goldsberry, Daveed Diggs, Anthony Ramos, Jasmine Cephas Jones, Okieriete Onaodowan, and Jonathan Groff.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Hamilton_Disney%2B_poster_2020.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Relic',
		year: 2020,
		cast: ['Emily Mortimer', 'Robyn Nevin', 'Bella Heathcote'],
		genres: ['Horror'],
		href: 'Relic_(2020_film)',
		extract:
			'Relic is a 2020 Australian psychological horror film directed by Natalie Erika James from a screenplay by James and Christian White. The film stars Emily Mortimer, Robyn Nevin, and Bella Heathcote.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Relic_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Desperados',
		year: 2020,
		cast: [
			'Anna Camp',
			'Robbie Amell',
			'Nasim Pedrad',
			'Lamorne Morris',
			'Heather Graham',
			'Sarah Burns'
		],
		genres: ['Comedy'],
		href: 'Desperados_(film)',
		extract:
			'Desperados is a 2020 American comedy film directed by LP, from a screenplay by Ellen Rapoport. It stars Nasim Pedrad, Lamorne Morris, Robbie Amell, Anna Camp, Heather Graham and Sarah Burns, and follows a group of friends who travel to Mexico in an effort to delete an email one of them sent to the man she has been dating for only a month.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/30/Desperados_%28film%29_poster.jpg',
		thumbnail_width: 267,
		thumbnail_height: 373
	},
	{
		title: 'The Old Guard',
		year: 2020,
		cast: [
			'Charlize Theron',
			'KiKi Layne',
			'Marwan Kenzari',
			'Luca Marinelli',
			'Harry Melling',
			'Veronica Ngo',
			'Matthias Schoenaerts',
			'Chiwetel Ejiofor'
		],
		genres: ['Superhero'],
		href: 'The_Old_Guard_(2020_film)',
		extract:
			'The Old Guard is a 2020 American superhero film directed by Gina Prince-Bythewood and written by Greg Rucka, based on his comic book of the same name. The film stars Charlize Theron, KiKi Layne, Matthias Schoenaerts, Marwan Kenzari, Luca Marinelli, Harry Melling, Veronica Ngo, and Chiwetel Ejiofor, and follows a team of immortal mercenaries on a revenge mission.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/02/The_Old_Guard_2020_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Money Plane',
		year: 2020,
		cast: [
			'Adam Copeland',
			'Kelsey Grammer',
			'Thomas Jane',
			'Denise Richards',
			'Katrina Norman',
			'Patrick Lamont Jr.',
			'Andrew Lawrence',
			'Joey Lawrence',
			'Matthew Lawrence'
		],
		genres: ['Action'],
		href: 'Money_Plane',
		extract:
			'Money Plane is a 2020 American action film directed by Andrew Lawrence and starring Adam Copeland, Kelsey Grammer, Thomas Jane, and Denise Richards. It was released to video-on-demand services on July 10, 2020, by Quiver Distribution.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Money_Plane_theatrical_poster.jpg',
		thumbnail_width: 263,
		thumbnail_height: 380
	},
	{
		title: 'Greyhound',
		year: 2020,
		cast: ['Tom Hanks', 'Stephen Graham', 'Rob Morgan', 'Elisabeth Shue'],
		genres: ['War'],
		href: 'Greyhound_(film)',
		extract:
			'Greyhound is a 2020 American war film directed by Aaron Schneider and starring Tom Hanks, who also wrote the screenplay. The film is based on the 1955 novel The Good Shepherd by C. S. Forester, and also stars Stephen Graham, Rob Morgan, and Elisabeth Shue.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Greyhound_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Palm Springs',
		year: 2020,
		cast: ['Andy Samberg', 'Cristin Milioti', 'Peter Gallagher', 'J. K. Simmons'],
		genres: ['Comedy', 'Science Fiction', 'Romance'],
		href: 'Palm_Springs_(2020_film)',
		extract:
			'Palm Springs is a 2020 American science fiction romantic comedy film directed by Max Barbakow, from a screenplay by Andy Siara. It stars Andy Samberg, Cristin Milioti, and J. K. Simmons, and follows two strangers who meet at a wedding in Palm Springs only to get stuck in a time loop.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Palm_Springs_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 322
	},
	{
		title: 'Fatal Affair',
		year: 2020,
		cast: ['Nia Long', 'Omar Epps', 'Stephen Bishop', 'KJ Smith'],
		genres: ['Thriller'],
		href: 'Fatal_Affair',
		extract:
			'Fatal Affair is a 2020 American psychological thriller film directed by Peter Sullivan, who co-wrote the screenplay with Rasheeda Garner. It stars Nia Long, Omar Epps, Stephen Bishop, and KJ Smith.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/23/Poster_for_Fatal_Affair.png',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'The Silencing',
		year: 2020,
		cast: ['Annabelle Wallis', 'Hero Fiennes-Tiffin', 'Nikolaj Coster-Waldau'],
		genres: ['Action', 'Thriller'],
		href: 'The_Silencing',
		extract:
			"The Silencing is a 2020 American-Canadian action-thriller film directed by Robin Pront from a screenplay by Micah Ranum. It stars Nikolaj Coster-Waldau and Annabelle Wallis. The film is about a hunter and a sheriff who track down a murderer who may have kidnapped the hunter's daughter years before.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/57/The_Silencing_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'A Nice Girl Like You',
		year: 2020,
		cast: ['Lucy Hale', 'Leonidas Gulaptis', 'Jackie Cruz'],
		genres: ['Comedy', 'Romance'],
		href: 'A_Nice_Girl_Like_You',
		extract:
			'A Nice Girl Like You is a 2020 American romantic comedy film directed by the Brothers Riedell, from a screenplay by Andrea Marcellus, based on the 2007 memoir Pornology by Ayn Carrillo Gailey. The film stars Lucy Hale and Leonidas Gulaptis.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d7/A_Nice_Girl_Like_You_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Ghosts of War',
		year: 2020,
		cast: ['Brenton Thwaites', 'Theo Rossi', 'Skylar Astin', 'Kyle Gallner', 'Alan Ritchson'],
		genres: ['Horror', 'Supernatural'],
		href: 'Ghosts_of_War_(2020_film)',
		extract:
			'Ghosts of War is a 2020 British supernatural horror film written and directed by Eric Bress. The film stars Brenton Thwaites, Theo Rossi, Skylar Astin, Kyle Gallner, and Alan Ritchson. It was released on DirecTV on 18 June 2020.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/72/Ghosts-of-War-Poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Animal Crackers',
		year: 2020,
		cast: [
			'John Krasinski',
			'Emily Blunt',
			'Ian McKellen',
			'Danny DeVito',
			'Sylvester Stallone',
			'Raven-Symoné',
			'Patrick Warburton'
		],
		genres: ['Animated', 'Comedy', 'Fantasy'],
		href: 'Animal_Crackers_(2017_film)',
		extract:
			'Animal Crackers is a 2017 3D computer-animated comedy-fantasy film directed by Scott Christian Sava and Tony Bancroft, and written by Sava and Dean Lorey, based on the animal-shaped cookie and loosely based on the graphic novel by Sava. The film stars the voices of Emily Blunt, John Krasinski, Danny DeVito, Ian McKellen, Sylvester Stallone, Patrick Warburton, Raven-Symoné, Harvey Fierstein, Wallace Shawn, Gilbert Gottfried, Tara Strong, James Arnold Taylor, Kevin Grevioux, and introducing Lydia Rose Taylor in her film debut. It tells the story of a family who comes across a box of magical animal crackers that turns anyone that consumes a cracker into the animal that the cracker represents which comes in handy in saving the circus that the family was associated with.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/17/Animal_Crackers_poster.jpg',
		thumbnail_width: 256,
		thumbnail_height: 388
	},
	{
		title: 'The Kissing Booth 2',
		year: 2020,
		cast: [
			'Joey King',
			'Joel Courtney',
			'Jacob Elordi',
			'Maisie Richardson-Sellers',
			'Taylor Perez',
			'Molly Ringwald'
		],
		genres: ['Comedy', 'Teen', 'Romance'],
		href: 'The_Kissing_Booth_2',
		extract:
			'The Kissing Booth 2 is a 2020 American teen romantic comedy film directed by Vince Marcello and written by Marcello and Jay Arnold. As a direct sequel to the 2018 film The Kissing Booth and the second installment in the Kissing Booth trilogy, the film stars Joey King, Joel Courtney and Jacob Elordi.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c8/The_Kissing_Booth_2_poster.jpg',
		thumbnail_width: 262,
		thumbnail_height: 379
	},
	{
		title: 'The Rental',
		year: 2020,
		cast: ['Dan Stevens', 'Alison Brie', 'Sheila Vand', 'Jeremy Allen White', 'Toby Huss'],
		genres: ['Horror'],
		href: 'The_Rental',
		extract:
			'The Rental is a 2020 American horror film co-written, produced and directed by Dave Franco, in his feature directorial debut. Franco co-wrote the screenplay with Joe Swanberg from a story by Franco, Swanberg, and Mike Demski. It stars Dan Stevens, Alison Brie, Sheila Vand, Jeremy Allen White, and Toby Huss, and follows two couples who begin to suspect they are being watched in the house they rented.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7a/The_Rental_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Deep Blue Sea 3',
		year: 2020,
		cast: ['Tania Raymonde', 'Nathaniel Buzolic', 'Emerson Brooks', 'Bren Foster'],
		genres: ['Horror', 'Science Fiction'],
		href: 'Deep_Blue_Sea_3',
		extract:
			'Deep Blue Sea 3 is a 2020 American science fiction natural horror film, starring Tania Raymonde. Dr. Emma Collins and her team are on Little Happy Island studying the effect of climate change on great white sharks who come to the nearby nursery every year to give birth, their peaceful life is disrupted when a "scientific" team shows up looking for three bull sharks. It is the third and final installment of the Deep Blue Sea film series, and a direct sequel to Deep Blue Sea 2.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/98/Deep_Blue_Sea_3.jpg',
		thumbnail_width: 273,
		thumbnail_height: 365
	},
	{
		title: 'Black Is King',
		year: 2020,
		cast: ['Beyoncé'],
		genres: ['Musical'],
		href: 'Black_Is_King',
		extract:
			"Black Is King is a 2020 American musical film and visual album directed, written, and executive produced by American singer Beyoncé. It is a visual companion to the 2019 album The Lion King: The Gift, curated by Beyoncé for The Lion King (2019). It tells the story of a young African prince who is exiled from his kingdom after his father's death. As he grows into a man, he undergoes a journey of self-identity, using the guidance of his ancestor (Beyoncé), childhood love and his own subconscious to reclaim his throne. The prince's journey acts as an allegory for the African diaspora's journey of discovering, reclaiming and celebrating their culture and heritage, which is echoed by the inclusion of spoken-word poetry that focuses on the question of black identity.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3f/Black_Is_King_poster.png',
		thumbnail_width: 202,
		thumbnail_height: 300
	},
	{
		title: 'The Secret: Dare To Dream',
		year: 2020,
		cast: ['Katie Holmes', 'Josh Lucas', "Jerry O'Connell", 'Celia Weston'],
		genres: ['Drama'],
		href: 'The_Secret:_Dare_to_Dream',
		extract:
			"The Secret: Dare to Dream is a 2020 American drama film based on the 2006 self-help book The Secret by Rhonda Byrne. Directed by Andy Tennant, from a screenplay he wrote with Bekah Brunstetter and Rick Parks, it stars Katie Holmes, Josh Lucas, Jerry O'Connell, and Celia Weston.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6f/The_Secret_Dare_to_Dream_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Summerland',
		year: 2020,
		cast: ['Gemma Arterton', 'Gugu Mbatha-Raw', 'Penelope Wilton', 'Tom Courtenay'],
		genres: ['Drama'],
		href: 'Summerland_(2020_film)',
		extract:
			'Summerland is a 2020 British drama film written and directed by Jessica Swale, starring Gemma Arterton, Gugu Mbatha-Raw, Lucas Bond, Dixie Egerickx, Siân Phillips, Penelope Wilton and Tom Courtenay.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Summerland_2020_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 163
	},
	{
		title: 'She Dies Tomorrow',
		year: 2020,
		cast: ['Kate Lyn Sheil', 'Jane Adams', 'Kentucker Audley', 'Katie Aselton', 'Adam Wingard'],
		genres: ['Thriller'],
		href: 'She_Dies_Tomorrow',
		extract:
			'She Dies Tomorrow is a 2020 American psychological thriller film written, directed, and produced by Amy Seimetz. It stars Kate Lyn Sheil, Jane Adams, Kentucker Audley, Katie Aselton, Chris Messina, Tunde Adebimpe, Jennifer Kim, Olivia Taylor Dudley, Michelle Rodriguez, Josh Lucas and Adam Wingard.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5b/She_Dies_Tomorrow_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'An American Pickle',
		year: 2020,
		cast: ['Seth Rogen', 'Sarah Snook'],
		genres: ['Comedy', 'Drama'],
		href: 'An_American_Pickle',
		extract:
			'An American Pickle is a 2020 American comedy-drama film directed by Brandon Trost and written by Simon Rich, based on his 2013 short story "Sell Out". The film stars Seth Rogen as an Eastern European Jewish immigrant who gets preserved in a vat of pickles and wakes up a century later in modern-day New York City, attempting to fit in with the assistance of his last remaining descendant.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/54/An_American_Pickle_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Tax Collector',
		year: 2020,
		cast: ['Bobby Soto', 'Shia LaBeouf', 'Cinthya Carmona', 'George Lopez'],
		genres: ['Action', 'Thriller'],
		href: 'The_Tax_Collector',
		extract:
			'The Tax Collector is a 2020 American action thriller film written, directed, and produced by David Ayer. The film stars Bobby Soto, Cinthya Carmona, George Lopez, and Shia LaBeouf, and follows two enforcers working for a Los Angeles crime lord whose business becomes upended, resulting in one of them desperately protecting his family from an old rival.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/51/The_Tax_Collector.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Waiting for the Barbarians',
		year: 2020,
		cast: ['Mark Rylance', 'Johnny Depp', 'Robert Pattinson', 'Gana Bayarsaikhan', 'Greta Scacchi'],
		genres: ['Drama'],
		href: 'Waiting_for_the_Barbarians_(film)',
		extract:
			'Waiting for the Barbarians is a 2019 drama film directed by Ciro Guerra in his English-language directorial debut. The film is based on the 1980 novel of the same name by J. M. Coetzee. It stars Mark Rylance, Johnny Depp, Robert Pattinson, Gana Bayarsaikhan, and Greta Scacchi.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/a/ae/Waiting_for_the_Barbarians_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Project Power',
		year: 2020,
		cast: [
			'Jamie Foxx',
			'Joseph Gordon-Levitt',
			'Dominique Fishback',
			'Rodrigo Santoro',
			'Machine Gun Kelly',
			'Allen Maldonado',
			'Amy Landecker',
			'Courtney B. Vance',
			'C.J. LeBlanc'
		],
		genres: ['Action', 'Science Fiction'],
		href: 'Project_Power',
		extract:
			'Project Power is a 2020 American science fiction action film directed by Henry Joost and Ariel Schulman, produced by Eric Newman and Bryan Unkeless, and written by Mattson Tomlin. It stars Jamie Foxx, Joseph Gordon-Levitt, and Dominique Fishback, alongside Colson Baker, Rodrigo Santoro, Amy Landecker and Allen Maldonado, and follows a drug dealer, a police officer, and a former soldier who team up to stop the distribution of a pill that gives the user superpowers for five minutes.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Project_Power_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The SpongeBob Movie: Sponge on the Run (Canadian theatrical release)',
		year: 2020,
		cast: [
			'Tom Kenny',
			'Awkwafina',
			'Matt Berry',
			'Snoop Dogg',
			'Bill Fagerbakke',
			'Clancy Brown',
			'Tiffany Haddish',
			'Carolyn Lawrence',
			'Mr. Lawrence',
			'Keanu Reeves',
			'Danny Trejo',
			'Reggie Watts'
		],
		genres: ['Live Action', 'Adventure', 'Animated', 'Comedy'],
		href: 'The_SpongeBob_Movie:_Sponge_on_the_Run',
		extract:
			"The SpongeBob Movie: Sponge on the Run is a 2020 American live-action/computer-animated adventure comedy film based on the animated television series SpongeBob SquarePants. Written and directed by series co-developer and former writer Tim Hill, who co-wrote the story with Jonathan Aibel and Glenn Berger, it is the first film in the franchise to be fully animated in stylized computer-generated imagery rather than traditional 2D animation. The regular voice cast of the series reprise their respective roles from the series and the previous films and including new characters performed by Awkwafina, Snoop Dogg, Tiffany Haddish, Keanu Reeves, Danny Trejo, and Reggie Watts. The film follows the origin of how SpongeBob met Gary the Snail, and SpongeBob's quest to rescue his pet after he is kidnapped. It is the third theatrical film based on the series, following the first in 2004 and second in 2015. The film is dedicated to creator Stephen Hillenburg, who died in 2018, and also served as an executive producer on the project.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/34/The_SpongeBob_Movie_-_Sponge_on_the_Run.png',
		thumbnail_width: 250,
		thumbnail_height: 375
	},
	{
		title: 'Magic Camp',
		year: 2020,
		cast: ['Adam DeVine', 'Gillian Jacobs', 'Jeffrey Tambor'],
		genres: ['Comedy', 'Family', 'Fantasy'],
		href: 'Magic_Camp_(film)',
		extract:
			'Magic Camp is a 2020 American fantasy comedy family film directed by Mark Waters. Micah Fitzerman-Blue, Noah Harpster, Matt Spicer, Max Winkler, Dan Gregor and Doug Mand serve as co-screenwriters, with an original story written by Gabe Sachs, Jeff Judah, Spicer and Winkler. It stars Adam DeVine, Jeffrey Tambor and Gillian Jacobs. The film was released on Disney+ on August 14, 2020.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Magic_Camp_Poster.jpeg',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'Spree',
		year: 2020,
		cast: ['Joe Keery', 'Sasheer Zamata', 'Mischa Barton', 'John DeLuca'],
		genres: ['Horror', 'Thriller'],
		href: 'Spree_(2020_film)',
		extract:
			'Spree is a 2020 American satirical horror thriller film directed by Eugene Kotlyarenko. The gonzo-style satire follows a social media obsessed rideshare driver played by Joe Keery who, in an attempt to become viral, livestreams himself murdering passengers. The film also stars Sasheer Zamata, David Arquette, Kyle Mooney and Mischa Barton. It was executive-produced by Drake.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8c/SpreePoster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 316
	},
	{
		title: 'Boys State',
		year: 2020,
		cast: [],
		genres: ['Documentary'],
		href: 'Boys_State_(film)',
		extract:
			'Boys State is a 2020 American documentary film directed and produced by Jesse Moss and Amanda McBaine. It follows a thousand teenage boys attending Boys State in Texas, coming to build a representative government from the ground up.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/65/Boys-state-movie-poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'The One and Only Ivan',
		year: 2020,
		cast: [
			'Sam Rockwell',
			'Angelina Jolie',
			'Danny DeVito',
			'Helen Mirren',
			'Brooklynn Prince',
			'Ramón Rodríguez',
			'Ariana Greenblatt',
			'Chaka Khan',
			'Ron Funches',
			'Phillipa Soo',
			'Mike White',
			'Bryan Cranston'
		],
		genres: ['Drama', 'Fantasy', 'Family'],
		href: 'The_One_and_Only_Ivan_(film)',
		extract:
			"The One and Only Ivan is a 2020 American fantasy drama film directed by Thea Sharrock from a screenplay written by Mike White based on the 2012 children's novel of the same name by K. A. Applegate. Inspired by the true story of Ivan the gorilla, the film stars the voices of Sam Rockwell as Ivan alongside Angelina Jolie, Danny DeVito, Helen Mirren, Brooklynn Prince, Chaka Khan, Ron Funches, Phillipa Soo, and Mike White, with the human characters portrayed by Ramón Rodríguez, Ariana Greenblatt, and Bryan Cranston.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_One_and_Only_Ivan_Poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Unhinged',
		year: 2020,
		cast: [
			'Russell Crowe',
			'Caren Pistorius',
			'Gabriel Bateman',
			'Jimmi Simpson',
			'Austin P. McKenzie'
		],
		genres: ['Action', 'Thriller'],
		href: 'Unhinged_(2020_film)',
		extract:
			'Unhinged is a 2020 American action thriller film directed by Derrick Borte, from a screenplay by Carl Ellsworth. The film stars Russell Crowe, Caren Pistorius, Gabriel Bateman, Jimmi Simpson and Austin P. McKenzie. It tells the story of a young woman who is terrorized by a seemingly mentally ill stranger following a road rage incident.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6d/Unhinged2020Poster.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Tesla',
		year: 2020,
		cast: ['Ethan Hawke', 'Eve Hewson', 'Ebon Moss-Bachrach', 'Jim Gaffigan', 'Kyle MacLachlan'],
		genres: ['Drama', 'Biography'],
		href: 'Tesla_(2020_film)',
		extract:
			'Tesla is a 2020 American biographical drama film written and directed by Michael Almereyda. It stars Ethan Hawke as Nikola Tesla. Eve Hewson, Ebon Moss-Bachrach, Jim Gaffigan, and Kyle MacLachlan also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Tesla_2020_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Cut Throat City',
		year: 2020,
		cast: [
			'Shameik Moore',
			'T.I.',
			'Demetrius Shipp Jr.',
			'Kat Graham',
			'Wesley Snipes',
			'Terrence Howard',
			'Eiza González',
			'Ethan Hawke'
		],
		genres: ['Action'],
		href: 'Cut_Throat_City',
		extract:
			'Cut Throat City is a 2020 American heist film directed by RZA from a screenplay by Paul Cuschieri. The film stars Shameik Moore, T.I., Demetrius Shipp Jr., Kat Graham, Wesley Snipes, Terrence Howard, Eiza González and Ethan Hawke.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/97/Cut_Throat_City_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Words on Bathroom Walls',
		year: 2020,
		cast: [
			'Charlie Plummer',
			'Andy García',
			'Taylor Russell',
			'AnnaSophia Robb',
			'Beth Grant',
			'Molly Parker',
			'Walton Goggins'
		],
		genres: ['Drama', 'Romance'],
		href: 'Words_on_Bathroom_Walls',
		extract:
			'Words on Bathroom Walls is a 2020 American coming-of-age romantic drama film directed by Thor Freudenthal and written by Nick Naveda, based on the novel of the same name by Julia Walton. The film stars Charlie Plummer, Andy García, Taylor Russell, AnnaSophia Robb, Beth Grant, Molly Parker and Walton Goggins.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/77/Words_on_Bathroom_Walls.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Hard Kill',
		year: 2020,
		cast: ['Jesse Metcalfe', 'Bruce Willis'],
		genres: ['Action', 'Thriller'],
		href: 'Hard_Kill',
		extract:
			'Hard Kill is a 2020 American action thriller film directed by Matt Eskandari, starring Jesse Metcalfe, Bruce Willis, and Natalie Eva Marie. It was released on August 21, 2020, by Vertical Entertainment.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/56/Hard_kill_xlg.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Chemical Hearts',
		year: 2020,
		cast: ['Austin Abrams', 'Lili Reinhart'],
		genres: ['Drama', 'Romance'],
		href: 'Chemical_Hearts',
		extract:
			'Chemical Hearts is a 2020 American romantic drama film written, produced, and directed by Richard Tanne, based on the novel Our Chemical Hearts by Krystal Sutherland. It stars Austin Abrams and Lili Reinhart. It was released on August 21, 2020, by Amazon Studios.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ea/Chemical_Hearts.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Tenet',
		year: 2020,
		cast: [
			'John David Washington',
			'Robert Pattinson',
			'Elizabeth Debicki',
			'Dimple Kapadia',
			'Martin Donovan',
			'Fiona Dourif',
			'Yuri Kolokolnikov',
			'Himesh Patel',
			'Clémence Poésy',
			'Aaron Taylor-Johnson',
			'Michael Caine',
			'Kenneth Branagh'
		],
		genres: ['Action', 'Science Fiction', 'Thriller'],
		href: 'Tenet_(film)',
		extract:
			"Tenet is a 2020 science fiction action thriller film directed and written by Christopher Nolan, who also produced with his wife Emma Thomas. A co-production between the United Kingdom and the United States, it stars John David Washington, Robert Pattinson, Elizabeth Debicki, Dimple Kapadia, Michael Caine, and Kenneth Branagh. The film follows a former CIA agent who learns how to manipulate the flow of time to prevent an attack from the future that threatens to annihilate the present world. Nolan continued his relationship with Warner Bros. and his production company Syncopy for the film's production and distribution.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'Bill & Ted Face the Music',
		year: 2020,
		cast: [
			'Keanu Reeves',
			'Alex Winter',
			'Kristen Schaal',
			'Samara Weaving',
			'Brigette Lundy-Paine',
			'Anthony Carrigan',
			'Erinn Hayes',
			'Jayma Mays',
			'Holland Taylor',
			'Kid Cudi',
			'William Sadler',
			'Jillian Bell'
		],
		genres: ['Comedy', 'Science Fiction'],
		href: 'Bill_%26_Ted_Face_the_Music',
		extract:
			"Bill & Ted Face the Music is a 2020 American science fiction comedy film directed by Dean Parisot and written by Chris Matheson and Ed Solomon. It is the third film in the Bill & Ted film series, and the sequel to Bill & Ted's Bogus Journey (1991). Alex Winter, Keanu Reeves, and William Sadler reprise their roles as Bill, Ted, and the Grim Reaper, while Kristen Schaal, Samara Weaving, Brigette Lundy-Paine, Anthony Carrigan, Erinn Hayes, Jayma Mays, Holland Taylor, Kid Cudi, Jillian Bell and Beck Bennett join the cast. In the film, Bill and Ted must write a song to unite humanity before space-time is destroyed. The script was laid out as early as 2010, but a production deal was not confirmed until 2018. Filming commenced on July 1, 2019.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/b/b9/Bill_%26_Ted_Face_the_Music_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The New Mutants',
		year: 2020,
		cast: [
			'Maisie Williams',
			'Anya Taylor-Joy',
			'Charlie Heaton',
			'Alice Braga',
			'Blu Hunt',
			'Henry Zaga',
			'Adam Beach'
		],
		genres: ['Horror', 'Superhero'],
		href: 'The_New_Mutants_(film)',
		extract:
			'The New Mutants is a 2020 American superhero horror film based on the Marvel Comics team of the same name. It is a spin-off film in the X-Men film series and the thirteenth and final installment overall before the whole series was moved to Marvel. The film was directed by Josh Boone from a screenplay he wrote with Knate Lee, and it stars Blu Hunt, Maisie Williams, Anya Taylor-Joy, Charlie Heaton, and Alice Braga. In the film, a group of young mutants held in a secret facility fight to save themselves.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1a/TheNewMutantsPoster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'The Personal History of David Copperfield',
		year: 2020,
		cast: [
			'Dev Patel',
			'Aneurin Barnard',
			'Peter Capaldi',
			'Morfydd Clark',
			'Daisy May Cooper',
			'Rosalind Eleazar',
			'Hugh Laurie',
			'Tilda Swinton',
			'Ben Whishaw',
			'Paul Whitehouse'
		],
		genres: ['Comedy', 'Drama'],
		href: 'The_Personal_History_of_David_Copperfield',
		extract:
			'The Personal History of David Copperfield is a 2019 comedy-drama film written and directed by Armando Iannucci, based on the 1850 novel David Copperfield by Charles Dickens. It stars Dev Patel as the title character, along with Aneurin Barnard, Peter Capaldi, Morfydd Clark, Daisy May Cooper, Rosalind Eleazar, Hugh Laurie, Tilda Swinton, Ben Whishaw and Paul Whitehouse.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/The_Personal_History_of_David_Copperfield_poster.jpg/320px-The_Personal_History_of_David_Copperfield_poster.jpg',
		thumbnail_width: 320,
		thumbnail_height: 239
	},
	{
		title: "I'm Thinking of Ending Things",
		year: 2020,
		cast: ['Jesse Plemons', 'Jessie Buckley', 'Toni Collette', 'David Thewlis'],
		genres: ['Thriller'],
		href: 'I%27m_Thinking_of_Ending_Things',
		extract:
			"I'm Thinking of Ending Things is a 2020 American surrealist psychological thriller film written and directed by Charlie Kaufman. It is an adaptation of the 2016 novel of the same name by Iain Reid. The plot follows a young woman who goes on a trip with her boyfriend to meet his parents ; throughout the film, the main narrative is intercut with footage of a school janitor going to work, with both stories intersecting by the third act.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/2/2f/I%27m_Thinking_Of_Ending_Things_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Phineas and Ferb the Movie: Candace Against the Universe',
		year: 2020,
		cast: [
			'Vincent Martella',
			'Ashley Tisdale',
			'David Errigo Jr.',
			'Dee Bradley Baker',
			'Dan Povenmire',
			'Caroline Rhea',
			'Jeff "Swampy" Marsh',
			'Alyson Stoner'
		],
		genres: ['Animated'],
		href: 'Phineas_and_Ferb_the_Movie:_Candace_Against_the_Universe',
		extract:
			'Phineas and Ferb the Movie: Candace Against the Universe is a 2020 American animated film produced by Disney Television Animation. Co-written and directed by Bob Bowen, the film is based on the Disney Channel and Disney XD animated television series Phineas and Ferb created by Dan Povenmire and Jeff "Swampy" Marsh, the second feature-length film of the Phineas and Ferb series, and a standalone sequel to Phineas and Ferb the Movie: Across the 2nd Dimension (2011). Set at some point during the summer depicted in the series and before the series finale, the film focuses on Phineas Flynn and Ferb Fletcher as they rescue their sister Candace Flynn and Doofenshmirtz\'s daughter Vanessa Doofenshmirtz from the planet Feebla-Oot. However, Candace becomes tempted to stay on the planet when she is treated with respect by its people, not knowing that they harbor a dark secret which involves her presence.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/4/48/Poster_for_Phineas_and_Ferb_The_Movie_Candace_Against_The_Universe.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 293
	},
	{
		title: 'All Together Now',
		year: 2020,
		cast: [
			'Auliʻi Cravalho',
			'Rhenzy Feliz',
			'Judy Reyes',
			'Justina Machado',
			'Taylor Richardson',
			'C.S. Lee',
			'Fred Armisen',
			'Carol Burnett'
		],
		genres: ['Drama'],
		href: 'All_Together_Now_(2020_film)',
		extract:
			'All Together Now is a 2020 American drama film directed by Brett Haley, from a screenplay by Haley, Marc Basch, Matthew Quick and Ol Parker. It is based upon the novel Sorta Like a Rockstar by Quick. It stars Auliʻi Cravalho, Justina Machado, Fred Armisen, Carol Burnett, Judy Reyes, Taylor Richardson, Rhenzy Feliz, Gerald Isaac Waters and Anthony Jacques.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/0a/All_Together_Now_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Rogue',
		year: 2020,
		cast: ['Megan Fox', 'Philip Winchester'],
		genres: ['Action', 'Thriller'],
		href: 'Rogue_(2020_film)',
		extract:
			'Rogue is a 2020 American action thriller film directed by M. J. Bassett, who wrote the screenplay with her daughter Isabella, and starring Megan Fox and Philip Winchester. It tells the story of a mercenary whose team gets trapped in Africa and must fight to survive against both the local insurgents and a bloodthirsty lioness. The film was released on August 28, 2020.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/08/Rogue2020Poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Centigrade',
		year: 2020,
		cast: ['Genesis Rodriguez', 'Vincent Piazza', 'Louis Cancelmi'],
		genres: ['Thriller'],
		href: 'Centigrade_(2020_film)',
		extract:
			'Centigrade is a 2020 survival thriller film directed by Brendan Walsh, written by Walsh and Daley Nixon, produced by Amanda Bowers, Molly Conners, Vincent Morano, Keri Nakamoto, Jane Oster, Bradley J. Ross, and Brendan Walsh. It stars Genesis Rodriguez and Vincent Piazza.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Centigrade_%282020_film%29.jpg',
		thumbnail_width: 262,
		thumbnail_height: 381
	},
	{
		title: 'Fatima',
		year: 2020,
		cast: [
			'Joaquim de Almeida',
			'Goran Višnjić',
			'Stephanie Gil',
			'Alejandra Howard',
			'Jorge Lamelas',
			'Lúcia Moniz',
			"Marco d'Almeida",
			'Joana Ribeiro',
			'Harvey Keitel',
			'Sônia Braga'
		],
		genres: ['Drama'],
		href: 'Fatima_(2020_film)',
		extract:
			'Fátima is a 2020 faith-based drama film directed by Marco Pontecorvo. It stars Joaquim de Almeida, Goran Višnjić, Harvey Keitel, Sônia Braga, Stephanie Gil, Alejandra Howard, Jorge Lamelas and Lúcia Moniz.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Fatima_2020_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'All Together Now',
		year: 2020,
		cast: [
			'Auliʻi Cravalho',
			'Rhenzy Feliz',
			'Judy Reyes',
			'Justina Machado',
			'Taylor Richardson',
			'C.S. Lee',
			'Fred Armisen',
			'Carol Burnett'
		],
		genres: ['Drama'],
		href: 'All_Together_Now_(2020_film)',
		extract:
			'All Together Now is a 2020 American drama film directed by Brett Haley, from a screenplay by Haley, Marc Basch, Matthew Quick and Ol Parker. It is based upon the novel Sorta Like a Rockstar by Quick. It stars Auliʻi Cravalho, Justina Machado, Fred Armisen, Carol Burnett, Judy Reyes, Taylor Richardson, Rhenzy Feliz, Gerald Isaac Waters and Anthony Jacques.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/0a/All_Together_Now_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Love, Guaranteed',
		year: 2020,
		cast: ['Rachael Leigh Cook', 'Damon Wayans Jr.'],
		genres: ['Comedy', 'Romance'],
		href: 'Love,_Guaranteed',
		extract:
			'Love, Guaranteed is a 2020 American romantic comedy film directed by Mark Steven Johnson and written by Elizabeth Hackett and Hilary Galanoy, starring Rachael Leigh Cook and Damon Wayans Jr. It was released on Netflix on September 3, 2020.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/90/Love%2C_Guaranteed_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 308
	},
	{
		title: 'Mulan',
		year: 2020,
		cast: [
			'Liu Yifei',
			'Donnie Yen',
			'Tzi Ma',
			'Jason Scott Lee',
			'Yoson An',
			'Ron Yuan',
			'Gong Li',
			'Jet Li'
		],
		genres: ['Action', 'Drama', 'Fantasy'],
		href: 'Mulan_(2020_film)',
		extract:
			"Mulan is a 2020 American fantasy action drama film produced by Walt Disney Pictures. Directed by Niki Caro from a screenplay by Rick Jaffa, Amanda Silver, Lauren Hynek, and Elizabeth Martin, it is a live-action adaptation of Disney's 1998 animated film of the same name, itself based on the Chinese folklore story Ballad of Mulan. The film stars Yifei Liu in the title role, alongside Donnie Yen, Tzi Ma, Jason Scott Lee, Yoson An, Ron Yuan, Gong Li, and Jet Li in supporting roles. In the film, Hua Mulan, the eldest daughter of an honored warrior, masquerades as a man to take her ailing father's place during a general conscription to counter the Rouran army in Imperial China.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/17/Mulan_%282020_film%29_poster.jpg',
		thumbnail_width: 257,
		thumbnail_height: 381
	},
	{
		title: 'Critical Thinking',
		year: 2020,
		cast: [
			'John Leguizamo',
			'Jorge Lendeborg Jr.',
			'Angel Bismark Curiel',
			'Will Hochman',
			'Corwin Tuggles',
			'Jeffry Batista',
			'Ramses Jimenez',
			'Rachel Bay Jones',
			'Michael K. Williams'
		],
		genres: ['Drama', 'Biography'],
		href: 'Critical_Thinking_(film)',
		extract:
			'Critical Thinking is a 2020 American biographical drama film based on the true story of the 1998 Miami Jackson High School chess team, the first inner-city team to win the U.S. National Chess Championship.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/e/e3/Theatrical_release_poster_for_Critical_Thinking.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'The Owners',
		year: 2020,
		cast: [
			'Maisie Williams',
			'Sylvester McCoy',
			'Rita Tushingham',
			'Jake Curran',
			'Andrew Ellis',
			'Ian Kenny'
		],
		genres: ['Horror', 'Thriller'],
		href: 'The_Owners_(2020_film)',
		extract:
			'The Owners is a 2020 horror thriller film adapted from the graphic novel Une nuit de pleine lune by Hermann and Yves H. Directed and co-written by Julius Berg in his feature film directorial debut, the film stars Maisie Williams, Sylvester McCoy, Rita Tushingham, Jake Curran, Ian Kenny and Andrew Ellis.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/05/The_Owners_2020_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Guest House',
		year: 2020,
		cast: [
			'Pauly Shore',
			'Mike Castle',
			'Aimee Teegarden',
			'Billy Zane',
			'Steve-O',
			'Charlotte McKinney',
			'Mikaela Hoover'
		],
		genres: ['Comedy'],
		href: 'Guest_House_(2020_film)',
		extract:
			'Guest House is a 2020 American comedy film co-written and directed by Sam Macaroni. The film stars Pauly Shore, Mike Castle, Aimee Teegarden, Billy Zane, Steve-O, Charlotte McKinney and Mikaela Hoover. The film released on digital and on-demand platforms on September 4, 2020.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/82/Guest_House_%282020_film%29.png',
		thumbnail_width: 220,
		thumbnail_height: 323
	},
	{
		title: 'The Babysitter: Killer Queen',
		year: 2020,
		cast: [
			'Judah Lewis',
			'Emily Alyn Lind',
			'Jenna Ortega',
			'Robbie Amell',
			'Bella Thorne',
			'Samara Weaving'
		],
		genres: ['Comedy', 'Horror'],
		href: 'The_Babysitter:_Killer_Queen',
		extract:
			'The Babysitter: Killer Queen is a 2020 American black comedy horror film directed and produced by McG, from a screenplay he wrote with Dan Lagana, Brad Morris, and Jimmy Warden. It is a sequel to the 2017 film The Babysitter and stars Judah Lewis, Emily Alyn Lind, Jenna Ortega, Robbie Amell, Andrew Bachelor, Leslie Bibb, Hana Mae Lee, Bella Thorne, Samara Weaving, and Ken Marino. The film continues the story of Cole Johnson, two years after the events of the first film, who must again fight to ensure his survival after a secret is unburied, as he is hunted by demonic enemies, both old and new.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/d/db/The_Babysitter_Killer_Queen_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Unpregnant',
		year: 2020,
		cast: [
			'Haley Lu Richardson',
			'Barbie Ferreira',
			'Alex MacNicoll',
			'Breckin Meyer',
			'Giancarlo Esposito'
		],
		genres: ['Comedy', 'Drama'],
		href: 'Unpregnant',
		extract:
			'Unpregnant is a 2020 American female buddy road comedy-drama film co-written and directed by Rachel Lee Goldenberg. The film is based upon the novel of the same name by Ted Caplan and Jenni Hendriks. It stars Haley Lu Richardson and Barbie Ferreira, with Alex MacNicoll, Breckin Meyer, Giancarlo Esposito, Sugar Lyn Beard, and Betty Who.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/86/Unpregnant_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Devil All the Time',
		year: 2020,
		cast: [
			'Tom Holland',
			'Bill Skarsgård',
			'Riley Keough',
			'Jason Clarke',
			'Sebastian Stan',
			'Haley Bennett',
			'Eliza Scanlen',
			'Mia Wasikowska',
			'Robert Pattinson'
		],
		genres: ['Crime', 'Drama', 'Thriller'],
		href: 'The_Devil_All_the_Time_(film)',
		extract:
			'The Devil All the Time is a 2020 American psychological thriller crime drama film directed by Antonio Campos, from a screenplay co-written with his brother Paulo Campos, based on the novel of the same name by Donald Ray Pollock. The film follows several characters whose stories weave together in two Southern Ohio towns during the period from the end of World War II to the 1960s. It features an ensemble cast that includes Tom Holland, Bill Skarsgård, Riley Keough, Jason Clarke, Sebastian Stan, Haley Bennett, Eliza Scanlen, Mia Wasikowska, and Robert Pattinson.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6c/The_Devil_All_The_Time.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'The Broken Hearts Gallery',
		year: 2020,
		cast: [
			'Geraldine Viswanathan',
			'Dacre Montgomery',
			'Utkarsh Ambudkar',
			'Molly Gordon',
			'Phillipa Soo',
			'Bernadette Peters'
		],
		genres: ['Comedy', 'Romance'],
		href: 'The_Broken_Hearts_Gallery',
		extract:
			"The Broken Hearts Gallery is a 2020 romantic comedy film written and directed by Natalie Krinsky, in her directorial debut. Executive produced by Selena Gomez, the film stars Geraldine Viswanathan, Dacre Montgomery, Utkarsh Ambudkar, Molly Gordon, Phillipa Soo and Bernadette Peters. The plot follows a 20-something in New York City who gets dumped by her latest boyfriend and creates an art gallery to display items from people's previous relationships. The film was theatrically released in the United States on September 11, 2020, to generally positive reviews from critics.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/86/The_Broken_Hearts_Gallery.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'I Met a Girl',
		year: 2020,
		cast: ['Brenton Thwaites', 'Lily Sullivan', 'Joel Jackson'],
		genres: ['Drama', 'Romance'],
		href: 'I_Met_a_Girl_(film)',
		extract:
			'I Met a Girl is a 2020 Australian romantic drama film directed by Luke Eve and written by Glen Dolman. The film stars Brenton Thwaites, Lily Sullivan, Joel Jackson, Zahra Newman and Anita Hegh.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6d/I_Met_A_Girl_2020_Poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 362
	},
	{
		title: 'Rent-A-Pal',
		year: 2020,
		cast: ['Wil Wheaton', 'Brian Landis Folkins', 'Kathleen Brady', 'Amy Rutledge', 'Adrian Egolf'],
		genres: ['Thriller'],
		href: 'Rent-A-Pal',
		extract:
			'Rent-A-Pal is a 2020 American thriller film written and directed by Jon Stevenson, produced by J.D. Lifshitz, Brian Landis Folkins, Jon Stevenson, Annie Elizabeth Baker, Jimmy Weber, Robert B. Martin Jr., Brandon Fryman and Raphael Margules. It stars Wil Wheaton, Brian Landis Folkins, Kathleen Brady, Amy Rutledge, and Adrian Egolf.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/38/Rent_a_pal_xlg.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Cats & Dogs 3: Paws Unite!',
		year: 2020,
		cast: ['Melissa Rauch', 'Max Greenfield', 'George Lopez'],
		genres: ['Action', 'Comedy', 'Spy'],
		href: 'Cats_%26_Dogs_3:_Paws_Unite!',
		extract:
			"Cats & Dogs 3: Paws Unite! is a 2020 American spy action comedy film, starring the voices of Melissa Rauch, Max Greenfield, and George Lopez. It is a stand-alone sequel to 2010's Cats & Dogs: The Revenge of Kitty Galore and the third and final film of the Cats & Dogs film series. Unlike the first two installments, Paws Unite! was released straight to video in the United States on September 15, 2020. It is also the only film that does not feature any cast members from the previous installments.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/a/a6/Cats_%26_Dogs_3_Paws_Unite%21_poster.jpeg',
		thumbnail_width: 182,
		thumbnail_height: 268
	},
	{
		title: 'The Secrets We Keep',
		year: 2020,
		cast: ['Noomi Rapace', 'Joel Kinnaman', 'Chris Messina'],
		genres: ['Drama', 'Thriller'],
		href: 'The_Secrets_We_Keep',
		extract:
			'The Secrets We Keep is a 2020 American thriller drama film directed by Yuval Adler, from a screenplay by Adler and Ryan Covington. The film stars Noomi Rapace, Joel Kinnaman, and Chris Messina.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1e/The_Secrets_We_Keep.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Antebellum',
		year: 2020,
		cast: [
			'Janelle Monáe',
			'Eric Lange',
			'Jena Malone',
			'Jack Huston',
			'Kiersey Clemons',
			'Gabourey Sidibe'
		],
		genres: ['Thriller'],
		href: 'Antebellum_(film)',
		extract:
			'Antebellum is a 2020 American thriller film written and directed by Gerard Bush and Christopher Renz in their feature directorial debuts. The film stars Janelle Monáe, Eric Lange, Jena Malone, Jack Huston, Kiersey Clemons, and Gabourey Sidibe, and follows a 21st century African-American woman who wakes to find herself mysteriously in a Southern slave plantation from which she must escape.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Antebellum_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Nest',
		year: 2020,
		cast: ['Jude Law', 'Carrie Coon', 'Charlie Shotwell', 'Oona Roche', 'Adeel Akhtar'],
		genres: ['Drama', 'Romance'],
		href: 'The_Nest_(2020_film)',
		extract:
			'The Nest is a 2020 romantic drama film written, directed, and produced by Sean Durkin. The film stars stars Jude Law, Carrie Coon, Charlie Shotwell, Oona Roche, and Adeel Akhtar.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/cc/The_Nest_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Blackbird',
		year: 2020,
		cast: [
			'Susan Sarandon',
			'Kate Winslet',
			'Mia Wasikowska',
			'Lindsay Duncan',
			'Rainn Wilson',
			'Bex Taylor-Klaus',
			'Sam Neill'
		],
		genres: ['Drama'],
		href: 'Blackbird_(2019_film)',
		extract:
			'Blackbird is a 2019 American drama film directed by Roger Michell and written by Christian Torpe. It is a remake of the 2014 Danish film Silent Heart, also written by Torpe. It stars Susan Sarandon, Kate Winslet, Mia Wasikowska, Lindsay Duncan, Rainn Wilson, Bex Taylor-Klaus, and Sam Neill.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Blackbird_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Lost Girls & Love Hotels',
		year: 2020,
		cast: ['Alexandra Daddario', 'Takehiro Hira', 'Carice van Houten'],
		genres: ['Drama', 'Erotic', 'Thriller'],
		href: 'Lost_Girls_%26_Love_Hotels',
		extract:
			"Lost Girls & Love Hotels is a 2020 American erotic thriller drama film directed by William Olsson from a screenplay by Catherine Hanrahan, based on Hanrahan's 2006 novel Lost Girls and Love Hotels. The film stars Alexandra Daddario as an American English teacher in Tokyo, who loses herself to the city's nightlife and begins an affair with a member of the Yakuza gangs. It was released through video on demand on September 18, 2020, by Astrakan Film AB.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/4/44/Lost_Girls_%26_Love_Hotels_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 322
	},
	{
		title: 'Enola Holmes',
		year: 2020,
		cast: [
			'Millie Bobby Brown',
			'Henry Cavill',
			'Sam Claflin',
			'Adeel Akhtar',
			'Fiona Shaw',
			'Frances de la Tour',
			'Louis Partridge',
			'Susie Wokoma',
			'Helena Bonham Carter'
		],
		genres: ['Mystery'],
		href: 'Enola_Holmes_(film)',
		extract:
			'Enola Holmes is a 2020 mystery film starring Millie Bobby Brown as the title character, the teenage sister of the already famous Victorian-era detective Sherlock Holmes. The film is directed by Harry Bradbeer from a screenplay by Jack Thorne that adapts the first novel in The Enola Holmes Mysteries series by Nancy Springer. In the film, Enola travels to London to find her missing mother but ends up on a thrilling adventure, pairing up with a runaway lord as they attempt to solve a mystery that threatens the entire country. In addition to Brown, the film also stars Sam Claflin, Henry Cavill, and Helena Bonham Carter.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e6/Enola_Holmes_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Trial of the Chicago 7',
		year: 2020,
		cast: [
			'Yahya Abdul-Mateen II',
			'Sacha Baron Cohen',
			'Danny Flaherty',
			'Joseph Gordon-Levitt',
			'Michael Keaton',
			'Frank Langella',
			'John Carroll Lynch',
			'Eddie Redmayne',
			'Noah Robbins',
			'Mark Rylance',
			'Alex Sharp',
			'Jeremy Strong'
		],
		genres: ['Drama', 'Historical', 'Legal'],
		href: 'The_Trial_of_the_Chicago_7',
		extract:
			'The Trial of the Chicago 7 is a 2020 American historical legal drama film written and directed by Aaron Sorkin. The film follows the Chicago Seven, a group of anti–Vietnam War protesters charged with conspiracy and crossing state lines with the intention of inciting riots at the 1968 Democratic National Convention in Chicago. It features an ensemble cast including Yahya Abdul-Mateen II, Sacha Baron Cohen, Daniel Flaherty, Joseph Gordon-Levitt, Michael Keaton, Frank Langella, John Carroll Lynch, Eddie Redmayne, Noah Robbins, Mark Rylance, Alex Sharp, Ben Shenkman, and Jeremy Strong.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c2/TrialChicago7poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Ava',
		year: 2020,
		cast: [
			'Jessica Chastain',
			'John Malkovich',
			'Common',
			'Geena Davis',
			'Colin Farrell',
			'Ioan Gruffudd',
			'Joan Chen'
		],
		genres: ['Action', 'Thriller'],
		href: 'Ava_(2020_film)',
		extract:
			"Ava is a 2020 American action thriller film directed by Tate Taylor written by Matthew Newton and produced by Chastain's production company, Freckle Films. The film stars Jessica Chastain, John Malkovich, Common, Geena Davis, Colin Farrell, Ioan Gruffudd and Joan Chen.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/99/Ava_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Kajillionaire',
		year: 2020,
		cast: ['Evan Rachel Wood', 'Richard Jenkins', 'Debra Winger', 'Gina Rodriguez'],
		genres: ['Comedy', 'Crime', 'Drama'],
		href: 'Kajillionaire',
		extract:
			'Kajillionaire is a 2020 American crime comedy-drama film written and directed by Miranda July. The film stars Evan Rachel Wood, Debra Winger and Richard Jenkins as members of a petty criminal family whose relationship becomes frayed when a stranger played by Gina Rodriguez joins their schemes.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/22/Kajillionaire_poster.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'The Last Shift',
		year: 2020,
		cast: [
			'Richard Jenkins',
			'Shane Paul McGhie',
			"Da'Vine Joy Randolph",
			'Birgundi Baker',
			'Allison Tolman',
			"Ed O'Neill"
		],
		genres: ['Comedy', 'Drama'],
		href: 'The_Last_Shift',
		extract:
			"The Last Shift is a 2020 American comedy-drama film written and directed by Andrew Cohn in his narrative directorial debut. It stars Richard Jenkins, Shane Paul McGhie, Da'Vine Joy Randolph, Birgundi Baker, Allison Tolman and Ed O'Neill.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/36/The_Last_Shift_poster.jpg',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'Secret Society of Second-Born Royals',
		year: 2020,
		cast: ['Peyton Elizabeth Lee', 'Skylar Astin', 'Élodie Yung'],
		genres: ['Action', 'Fantasy', 'Superhero'],
		href: 'Secret_Society_of_Second-Born_Royals',
		extract:
			'Secret Society of Second-Born Royals is a 2020 American science fantasy superhero action film directed by Anna Mastro from a screenplay by Alex Litvak and Andrew Green, based on a story by Litvak, Green, and Austin Winsberg. Zanne Devine, Mike Karz and Winsberg serve as producers. The film stars Peyton Elizabeth Lee, Niles Fitch, Isabella Blake-Thomas, Olivia Deeble, Noah Lomax, Faly Rakotohavana, Ashley Liao, Sam Page, Greg Bryk, Élodie Yung, and Skylar Astin, and was produced in association with Disney Channel. The film generally received mixed reviews from critics, with some finding it to be a cliché Disney Channel original movie.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/7/70/Secret_Society_of_Second-Born_Royals_poster.jpeg',
		thumbnail_width: 282,
		thumbnail_height: 352
	},
	{
		title: "She's in Portland",
		year: 2020,
		cast: ['Tommy Dewey', 'François Arnaud', 'Minka Kelly'],
		genres: ['Comedy', 'Drama'],
		href: 'She%27s_in_Portland',
		extract:
			"She's in Portland is a 2020 American comedy drama film directed by Marc Carlini and written by Carlini and Patrick Alexander. It stars Tommy Dewey, François Arnaud and Minka Kelly.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/41/Shes_in_portland.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Sightless',
		year: 2020,
		cast: ['Madelaine Petsch', 'Alexander Koch'],
		genres: ['Short', 'Thriller'],
		href: 'Sightless',
		extract:
			'Sightless is a 2020 American psychological thriller film written and directed by Cooper Karl, based on his 2017 short film of the same name. The film stars Madelaine Petsch and Alexander Koch.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Sightless_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 316
	},
	{
		title: 'The Boys in the Band',
		year: 2020,
		cast: [
			'Jim Parsons',
			'Zachary Quinto',
			'Matt Bomer',
			'Andrew Rannells',
			'Charlie Carver',
			'Robin de Jesus',
			'Brian Hutchison',
			'Michael Benjamin Washington',
			'Tuc Watkins'
		],
		genres: ['Drama'],
		href: 'The_Boys_in_the_Band_(2020_film)',
		extract:
			"The Boys in the Band is a 2020 American drama film directed by Joe Mantello, based on the 1968 play of the same name by Mart Crowley, who also wrote the screenplay alongside Ned Martel. Crowley had previously adapted The Boys in the Band for a 1970 film version directed by William Friedkin and starring the original 1968 Off-Broadway cast. The film stars the full roster of players from the play's 2018 Broadway revival, comprising a cast of exclusively openly-gay actors, such as Jim Parsons, Zachary Quinto, Matt Bomer, Andrew Rannells, Charlie Carver, Robin de Jesús, Brian Hutchison, Michael Benjamin Washington, and Tuc Watkins.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6f/The_Boys_in_the_Band.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Glorias',
		year: 2020,
		cast: [
			'Julianne Moore',
			'Alicia Vikander',
			'Timothy Hutton',
			'Lorraine Toussaint',
			'Janelle Monáe',
			'Bette Midler'
		],
		genres: ['Drama', 'Biography'],
		href: 'The_Glorias',
		extract:
			'The Glorias is a 2020 American biographical drama film directed and produced by Julie Taymor, from a screenplay by Taymor and Sarah Ruhl. The film is based upon My Life on the Road by Gloria Steinem who is represented by four actresses in the movie who portray her life in different ages. It stars Julianne Moore as Steinem, with Alicia Vikander portraying a younger Steinem, from ages 20 to 40, Lulu Wilson portraying a teenage Steinem, and Ryan Kiera Armstrong as Steinem when she was a child. The cast also includes Lorraine Toussaint, Janelle Monáe, and Bette Midler.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9b/The_Glorias.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'On the Rocks',
		year: 2020,
		cast: ['Rashida Jones', 'Bill Murray', 'Marlon Wayans', 'Jessica Henwick', 'Jenny Slate'],
		genres: ['Comedy', 'Drama'],
		href: 'On_the_Rocks_(film)',
		extract:
			"On the Rocks is a 2020 American comedy-drama film written and directed by Sofia Coppola. It follows a father and daughter as they harbor suspicions about her husband's fidelity. It had its world premiere at the New York Film Festival on September 22, 2020. It received a limited theatrical release on October 2, 2020, by A24, followed by digital streaming on October 23, 2020, by Apple TV+. It received positive reviews from critics, who noted it as lighter than Coppola's previous films, and praised Murray’s performance. The film was released on Blu-ray and DVD on October 26, 2021, by Lionsgate Home Entertainment.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/44/On_the_Rocks_poster.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Spontaneous',
		year: 2020,
		cast: [
			'Katherine Langford',
			'Charlie Plummer',
			'Hayley Law',
			'Piper Perabo',
			'Rob Huebel',
			'Yvonne Orji'
		],
		genres: ['Comedy', 'Horror', 'Romance'],
		href: 'Spontaneous_(film)',
		extract:
			'Spontaneous is a 2020 American coming-of-age romantic black comedy horror film, written and directed by Brian Duffield, in his directorial debut. It stars Katherine Langford, Charlie Plummer, Hayley Law, Piper Perabo, Rob Huebel and Yvonne Orji and is based on the 2016 novel of the same name by Aaron Starmer.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Spontaneous_%28film%29.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Vampires vs. the Bronx',
		year: 2020,
		cast: [
			'Jaden Michael',
			'Gerald W. Jones III',
			'Gregory Diaz IV',
			'Sarah Gadon',
			'Coco Jones',
			'The Kid Mero',
			'Method Man',
			'Chris Redd',
			'Shea Whigham'
		],
		genres: ['Comedy', 'Horror'],
		href: 'Vampires_vs._the_Bronx',
		extract:
			'Vampires vs. the Bronx is a 2020 American comedy horror film directed by Oz Rodriguez and written by Oz Rodriguez and Blaise Hemingway. Vampires vs. the Bronx follows a group of teenagers who are forced to protect their neighborhood in the Bronx when a gathering of vampires invades. It stars Jaden Michael, Gerald W. Jones III, Gregory Diaz IV, Sarah Gadon, Method Man, Shea Whigham, and Coco Jones.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Vampires_vs._the_Bronx.png',
		thumbnail_width: 220,
		thumbnail_height: 308
	},
	{
		title: 'Possessor',
		year: 2020,
		cast: [
			'Andrea Riseborough',
			'Christopher Abbott',
			'Rossif Sutherland',
			'Tuppence Middleton',
			'Sean Bean',
			'Jennifer Jason Leigh'
		],
		genres: ['Horror', 'Science Fiction'],
		href: 'Possessor_(film)',
		extract:
			'Possessor is a 2020 science fiction psychological horror film written and directed by Brandon Cronenberg. It stars Andrea Riseborough and Christopher Abbott, with Rossif Sutherland, Tuppence Middleton, Sean Bean, and Jennifer Jason Leigh in supporting roles. Riseborough portrays an assassin who performs her assignments through possessing the bodies of other individuals, but finds herself fighting to control the body of her current host (Abbott).',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Possessor_%28film%29_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 362
	},
	{
		title: 'Death of Me',
		year: 2020,
		cast: ['Maggie Q', 'Alex Essoe', 'Luke Hemsworth'],
		genres: ['Horror'],
		href: 'Death_of_Me_(film)',
		extract:
			'Death of Me is a 2020 American horror film, directed by Darren Lynn Bousman, from a screenplay by Arli Margolis, James Morley III and David Tish. It stars Maggie Q, Alex Essoe, and Luke Hemsworth.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Death_of_Me_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Call',
		year: 2020,
		cast: ['Lin Shaye', 'Tobin Bell'],
		genres: ['Horror'],
		href: 'The_Call_(2020_American_film)',
		extract:
			'The Call is a 2020 American horror film directed by Timothy Woodward Jr. and starring Lin Shaye, Tobin Bell, Erin Sanders, and Chester Rushing. The film was written by Patrick Stibbs.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a5/The_Call_%282020_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: "American Pie Presents: Girls' Rules",
		year: 2020,
		cast: [
			'Madison Pettis',
			'Lizze Broadway',
			'Piper Curda',
			'Natasha Behnam',
			'Darren Barnet',
			'Zachary Gordon'
		],
		genres: ['Comedy', 'Erotic'],
		href: 'American_Pie_Presents:_Girls%27_Rules',
		extract:
			"American Pie Presents: Girls' Rules is a 2020 American straight-to-DVD sex comedy film directed by Mike Elliott. It is the fifth installment of the American Pie Presents film series, a spin-off of the American Pie franchise and the ninth overall installment. It is also the first film in the franchise to neither feature Eugene Levy nor contain any nudity. The film serves as a standalone sequel, revolving around Steve Stifler's cousin Stephanie and her friends.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/b/bd/American_Pie_Presents_Girls%27_Rules.png',
		thumbnail_width: 220,
		thumbnail_height: 323
	},
	{
		title: 'The Lie',
		year: 2020,
		cast: ['Mireille Enos', 'Peter Sarsgaard', 'Joey King'],
		genres: ['Horror'],
		href: 'The_Lie_(2018_film)',
		extract:
			'The Lie is a 2018 psychological horror film written and directed by Veena Sud. The film is a remake of the 2015 German film We Monsters, and stars Mireille Enos, Peter Sarsgaard and Joey King. Jason Blum serves as a producer under his Blumhouse Television banner.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/43/The_Lie_poster_2018.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Black Box',
		year: 2020,
		cast: ['Mamoudou Athie', 'Phylicia Rashad'],
		genres: ['Horror', 'Science Fiction'],
		href: 'Black_Box_(2020_film)',
		extract:
			'Black Box is a 2020 American science fiction horror film directed by Emmanuel Osei-Kuffour Jr. and written by him and Stephen Herman. The film stars Mamoudou Athie, Phylicia Rashad, Amanda Christine, Tosin Morohunfola and Charmaine Bingwa. Jason Blum executive produced under his Blumhouse Television banner.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/47/Black_Box_2020_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Hubie Halloween',
		year: 2020,
		cast: [
			'Adam Sandler',
			'Kevin James',
			'Julie Bowen',
			'Ray Liotta',
			'Rob Schneider',
			'June Squibb',
			'Kenan Thompson',
			"Shaquille O'Neal",
			'Steve Buscemi',
			'Maya Rudolph'
		],
		genres: ['Comedy', 'Horror', 'Mystery'],
		href: 'Hubie_Halloween',
		extract:
			"Hubie Halloween is a 2020 American mystery horror comedy film directed by Steve Brill, co-written by Tim Herlihy and Adam Sandler, who also stars in the title role, and co-starring an ensemble supporting cast consisting of Kevin James, Julie Bowen, Ray Liotta, Rob Schneider, June Squibb, Kenan Thompson, Shaquille O'Neal, Steve Buscemi, and Maya Rudolph. The film follows a Halloween-loving delicatessen worker who must save the town of Salem, Massachusetts, from a kidnapper.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Hubie_Halloween_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Books of Blood',
		year: 2020,
		cast: ['Britt Robertson', 'Anna Friel', 'Rafi Gavron', 'Yul Vazquez'],
		genres: ['Horror'],
		href: 'Books_of_Blood_(film)',
		extract:
			'Books of Blood is a 2020 American anthology horror film directed by Brannon Braga and co-written by Braga and Adam Simon. It is based on Books of Blood by Clive Barker and is the second film adaptation after Book of Blood (2009). The film premiered at the 2020 Screamfest Horror Film Festival on October 6, 2020, and was released on Hulu the following day. This was the final production by Touchstone Television before being folded into 20th Television.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/55/Books_of_blood_xlg.jpg',
		thumbnail_width: 254,
		thumbnail_height: 392
	},
	{
		title: 'Charm City Kings',
		year: 2020,
		cast: ["Jahi Di'Allo Winston", 'Meek Mill', 'Will Catlett', 'Teyonah Parris'],
		genres: ['Drama'],
		href: 'Charm_City_Kings',
		extract:
			"Charm City Kings is a 2020 American drama film directed by Angel Manuel Soto from a screenplay by Sherman Payne and a story by Chris Boyd, Kirk Sullivan, and Barry Jenkins. It is based on the 2013 documentary 12 O'Clock Boys by Lotfy Nathan. It stars Jahi Di'Allo Winston, Meek Mill, Will Catlett, and Teyonah Parris.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Charm_City_Kings_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The War with Grandpa',
		year: 2020,
		cast: [
			'Robert De Niro',
			'Uma Thurman',
			'Rob Riggle',
			'Oakes Fegley',
			'Cheech Marin',
			'Jane Seymour',
			'Christopher Walken'
		],
		genres: ['Comedy', 'Family'],
		href: 'The_War_with_Grandpa',
		extract:
			'The War with Grandpa is a 2020 American family comedy film directed by Tim Hill, from a screenplay by Tom J. Astle and Matt Ember, based upon the novel of the same name by Robert Kimmel Smith. The film is about a young boy named Peter who fights in a prank war with his grandfather to get his grandfather to move out of his room after he moves in with his family. Uma Thurman, Rob Riggle, Laura Marano, Cheech Marin, Jane Seymour, and Christopher Walken also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/75/The_War_with_Grandpa.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 316
	},
	{
		title: 'A Rainy Day in New York',
		year: 2020,
		cast: [
			'Timothée Chalamet',
			'Elle Fanning',
			'Selena Gomez',
			'Jude Law',
			'Diego Luna',
			'Liev Schreiber'
		],
		genres: ['Comedy', 'Romance'],
		href: 'A_Rainy_Day_in_New_York',
		extract:
			"A Rainy Day in New York is a 2019 American romantic comedy film written and directed by Woody Allen, and starring Timothée Chalamet, Elle Fanning, Selena Gomez, Jude Law, Diego Luna, and Liev Schreiber. The film follows the romantic exploits of two young college students, Gatsby and Ashleigh, while on a weekend visit to New York City, Gatsby's hometown. He hopes to deepen their relationship while she is in the city to interview a film director for their college newspaper.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f2/A_Rainy_Day_in_New_York_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Yellow Rose',
		year: 2020,
		cast: ['Eva Noblezada', 'Dale Watson', 'Princess Punzalan', 'Lea Salonga'],
		genres: ['Drama', 'Musical'],
		href: 'Yellow_Rose_(2019_film)',
		extract:
			'Yellow Rose is a 2019 American-Filipino musical drama film co-written and directed by Diane Paragas. It is produced by Cecilia R. Mejia, Diane Paragas, Rey Cuerdo, Orian Williams, and Jeremiah Abraham. The film stars Eva Noblezada, Dale Watson, Princess Punzalan, and Lea Salonga. The plot follows Rose, a Filipina undocumented immigrant, who dreams of leaving her small town in Texas to pursue her country music dreams. Her plan is put on hold when her mother is taken by Immigration and Customs Enforcement and Rose is forced to flee to Austin, Texas.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Yellow_Rose_Poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 362
	},
	{
		title: 'The 40-Year-Old Version',
		year: 2020,
		cast: ['Radha Blank', 'Peter Kim', 'Oswin Benjamin', 'Reed Birney'],
		genres: ['Comedy', 'Drama'],
		href: 'The_40-Year-Old_Version',
		extract:
			'The Forty-Year-Old Version is a 2020 American comedy-drama film written, directed, and produced by Radha Blank, in her feature directorial debut. It stars Blank, Peter Kim, Oswin Benjamin, and Reed Birney.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3e/The_40_Year_Old_Version.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Nocturne',
		year: 2020,
		cast: ['Sydney Sweeney', 'Madison Iseman', 'Jacques Colimon', 'Ivan Shaw'],
		genres: ['Horror', 'Supernatural'],
		href: 'Nocturne_(2020_film)',
		extract:
			'Nocturne is a 2020 American supernatural horror film written and directed by Zu Quirke. The film stars Sydney Sweeney, Madison Iseman, Jacques Colimon and Ivan Shaw. Jason Blum serves as a producer under his Blumhouse Television banner.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Nocturne_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Evil Eye',
		year: 2020,
		cast: ['Sarita Choudhury', 'Sunita Mani', 'Omar Maskati', 'Bernard White'],
		genres: ['Horror', 'Supernatural'],
		href: 'Evil_Eye_(2020_film)',
		extract:
			'Evil Eye is a 2020 American supernatural horror film directed by Elan and Rajeev Dassani and written by Madhuri Shekar, based on her Audible Original audio play of the same name. The film stars Sarita Choudhury, Sunita Mani and Omar Maskati. It was executive produced by Jason Blum of Blumhouse Television and Priyanka Chopra of Purple Pebble Pictures.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fa/Evil_Eye_2020_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: "A Babysitter's Guide to Monster Hunting",
		year: 2020,
		cast: ['Tamara Smart', 'Oona Laurence', 'Tom Felton', 'Indya Moore'],
		genres: ['Comedy', 'Fantasy'],
		href: 'A_Babysitter%27s_Guide_to_Monster_Hunting',
		extract:
			"A Babysitter's Guide to Monster Hunting is a 2020 American dark fantasy comedy film directed by Rachel Talalay and distributed by Netflix. The film was written by Joe Ballarini and is based on his book trilogy of the same name. It stars Tom Felton, Indya Moore, Tamara Smart and Oona Laurence.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/2/2c/A_Babysitter%27s_Guide_to_Monster_Hunting.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Love and Monsters',
		year: 2020,
		cast: ["Dylan O'Brien", 'Jessica Henwick', 'Dan Ewing', 'Ariana Greenblatt', 'Michael Rooker'],
		genres: ['Adventure'],
		href: 'Love_and_Monsters_(film)',
		extract:
			"Love and Monsters is a 2020 American post-apocalyptic monster adventure film directed by Michael Matthews, with Shawn Levy and Dan Cohen serving as producers. The film stars Dylan O'Brien, Jessica Henwick, Dan Ewing, Michael Rooker, and Ariana Greenblatt.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1a/LoveAndMonstersPoster.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Honest Thief',
		year: 2020,
		cast: [
			'Liam Neeson',
			'Kate Walsh',
			'Robert Patrick',
			'Anthony Ramos',
			'Jeffrey Donovan',
			'Jai Courtney'
		],
		genres: ['Action', 'Thriller'],
		href: 'Honest_Thief',
		extract:
			'Honest Thief is a 2020 American action thriller film directed by Mark Williams, from a screenplay by Williams and Steve Allrich. The film stars Liam Neeson, Kate Walsh, Jai Courtney, Jeffrey Donovan, Anthony Ramos and Robert Patrick, and follows a brooding former bank robber who decides to turn himself in to the FBI, only to be set up by corrupt agents.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Honest_Thief_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Clouds',
		year: 2020,
		cast: [
			'Fin Argus',
			'Sabrina Carpenter',
			'Madison Iseman',
			'Lil Rel Howery',
			'Neve Campbell',
			'Tom Everett Scott'
		],
		genres: ['Drama', 'Musical', 'Teen', 'Biography', 'Romance'],
		href: 'Clouds_(2020_film)',
		extract:
			"Clouds is a 2020 American biographical romantic musical drama teen film directed and produced by Justin Baldoni and written by Kara Holden from a story by Holden, Patrick Kopka, and Casey La Scala. It is based upon the memoir Fly a Little Higher: How God Answered a Mom's Small Prayer in a Big Way by Laura Sobiech. The film stars Fin Argus, Sabrina Carpenter, Madison Iseman, Neve Campbell, Tom Everett Scott, and Lil Rel Howery, and tells the story of Zach Sobiech, a teenager from Minnesota who has osteosarcoma, and decides to follow his dream of becoming a musician after finding out he is dying.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/60/Clouds_2020_film_poster.jpg',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'The Devil Has a Name',
		year: 2020,
		cast: [
			'David Strathairn',
			'Kate Bosworth',
			'Pablo Schreiber',
			'Edward James Olmos',
			'Katie Aselton',
			'Haley Joel Osment',
			'Alfred Molina',
			'Martin Sheen'
		],
		genres: ['Comedy'],
		href: 'The_Devil_Has_a_Name',
		extract:
			'The Devil Has a Name is a 2019 American dark comedy film starring and directed by Edward James Olmos. It also stars David Strathairn, Kate Bosworth, Pablo Schreiber, Katie Aselton, Haley Joel Osment, Alfred Molina, and Martin Sheen. The film premiered at the 2019 Los Angeles Latino International Film Festival. It was then released in the United States in selected theaters, through video on demand, and on digital platforms on October 16, 2020, by Momentum Pictures.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/85/The_Devil_Has_a_Name.png',
		thumbnail_width: 220,
		thumbnail_height: 323
	},
	{
		title: 'The Kid Detective',
		year: 2020,
		cast: ['Adam Brody', 'Sophie Nélisse', 'Tzi Ma', 'Wendy Crewson', 'Sarah Sutherland'],
		genres: ['Comedy', 'Drama', 'Mystery'],
		href: 'The_Kid_Detective',
		extract:
			'The Kid Detective is a 2020 Canadian mystery comedy-drama film written and directed by Evan Morgan and starring Adam Brody, Sophie Nélisse, Wendy Crewson, Sarah Sutherland, and Tzi Ma. It was inspired by the Encyclopedia Brown book series.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/d/d3/The_Kid_Detective%2C_USA_film_poster%2C_2020.jpg',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'Alone',
		year: 2020,
		cast: ['Tyler Posey', 'Summer Spiro', "Robert Ri'chard", 'Donald Sutherland'],
		genres: ['Horror'],
		href: 'Alone_(2020_horror_film)',
		extract:
			'Alone is a 2020 American horror film directed by Johnny Martin and starring Tyler Posey and Donald Sutherland. The film follows a young man who barricades himself inside his apartment during a zombie apocalypse. The film was released on October 16, 2020.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/06/Alone_ii_xlg.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: '2 Hearts',
		year: 2020,
		cast: ['Jacob Elordi', 'Adan Canto', 'Tiera Skovbye', 'Radha Mitchell'],
		genres: ['Drama', 'Romance'],
		href: '2_Hearts_(film)',
		extract:
			'2 Hearts is a 2020 American romantic drama film directed by Lance Hool and starring Jacob Elordi, Adan Canto, Tiera Skovbye and Radha Mitchell. It is based on the true story of Leslie and Jorge Bacardi and Christopher Gregory. The film was theatrically released in the United States on October 16, 2020, receiving generally negative reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/42/Two_hearts_xlg.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'The Opening Act',
		year: 2020,
		cast: ['Jimmy O. Yang', 'Alex Moffat', 'Cedric the Entertainer'],
		genres: ['Comedy'],
		href: 'The_Opening_Act',
		extract:
			'The Opening Act is a 2020 American comedy film written and directed by Steve Byrne, in his directorial debut. It stars Jimmy O. Yang, Alex Moffat, Cedric the Entertainer, Neal Brennan, Bill Burr, Whitney Cummings, Jermaine Fowler, Ken Jeong, Russell Peters, and Debby Ryan.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/85/The_Opening_Act_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Tremors: Shrieker Island',
		year: 2020,
		cast: ['Michael Gross', 'Jon Heder'],
		genres: ['Horror'],
		href: 'Tremors:_Shrieker_Island',
		extract:
			'Tremors: Shrieker Island is a 2020 American direct-to-video horror monster film directed by Don Michael Paul and co-written with Brian Brightly. It is the seventh film in the Tremors franchise. The film stars Michael Gross and Jon Heder.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Tremors_Shrieker_Island_Poster.png',
		thumbnail_width: 270,
		thumbnail_height: 369
	},
	{
		title: 'The Witches',
		year: 2020,
		cast: [
			'Anne Hathaway',
			'Octavia Spencer',
			'Stanley Tucci',
			'Jahzir Bruno',
			'Codie-Lei Eastick',
			'Kristin Chenoweth',
			'Chris Rock'
		],
		genres: ['Comedy', 'Supernatural'],
		href: 'The_Witches_(2020_film)',
		extract:
			"Roald Dahl's The Witches, or simply The Witches, is a 2020 supernatural comedy film directed by Robert Zemeckis and written by Zemeckis, Kenya Barris, and Guillermo del Toro. It is based on the 1983 novel of the same name by Roald Dahl and is the second feature-length adaptation of the novel, after the 1990 film of the same name directed by Nicolas Roeg. The film stars Anne Hathaway, Octavia Spencer, and Stanley Tucci, and is narrated by Chris Rock.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/a/a7/The_Witches_%28Official_2020_Film_Poster%29.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Over the Moon',
		year: 2020,
		cast: [
			'Cathy Ang',
			'Phillipa Soo',
			'Ken Jeong',
			'John Cho',
			'Ruthie Ann Miles',
			'Margaret Cho',
			'Sandra Oh'
		],
		genres: ['Animated', 'Fantasy', 'Musical'],
		href: 'Over_the_Moon_(2020_film)',
		extract:
			'Over the Moon is a 2020 computer-animated musical fantasy film directed by Glen Keane and co-directed by John Kahrs, from a screenplay by Audrey Wells with additional screenplay material by Alice Wu and Jennifer Yee McDevitt. The film was produced by Pearl Studio and Netflix Animation, and animated by Sony Pictures Imageworks. It stars the voices of Cathy Ang, Phillipa Soo, Ken Jeong, John Cho, Ruthie Ann Miles, Margaret Cho, and Sandra Oh. The plot follows an adventurous girl named Fei Fei, who builds a rocket ship to meet a mythical goddess on the moon.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Over_the_Moon_%282020%29.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Borat Subsequent Moviefilm',
		year: 2020,
		cast: ['Sacha Baron Cohen', 'Maria Bakalova'],
		genres: ['Comedy', 'Satire'],
		href: 'Borat_Subsequent_Moviefilm',
		extract:
			"Borat Subsequent Moviefilm: Delivery of Prodigious Bribe to American Regime for Make Benefit Once Glorious Nation of Kazakhstan is a 2020 mockumentary black comedy directed by Jason Woliner. The film stars Sacha Baron Cohen as the fictional Kazakh journalist and television personality Borat Sagdiyev, and Maria Bakalova as his daughter Tutar, who is to be offered as a bride to then-U.S. vice president Mike Pence during the COVID-19 pandemic and the 2020 presidential election. It is a sequel to 2006's Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/58/Borat_2_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'After We Collided',
		year: 2020,
		cast: [
			'Josephine Langford',
			'Hero Fiennes Tiffin',
			'Dylan Sprouse',
			'Shane Paul McGhie',
			'Candice King',
			'Khadijha Red Thunder',
			'Inanna Sarkis',
			'Samuel Larsen',
			'Selma Blair'
		],
		genres: ['Drama', 'Romance'],
		href: 'After_We_Collided',
		extract:
			'After We Collided is a 2020 American romantic drama film directed by Roger Kumble, and written by Anna Todd and Mario Celaya. Based on the 2014 novel of the same name by Todd, it is the sequel to After (2019) and the second overall installment in the After film series. The film stars Josephine Langford and Hero Fiennes Tiffin reprising their roles as Tessa Young and Hardin Scott, respectively, with Dylan Sprouse, Shane Paul McGhie, Candice King, Khadijha Red Thunder, Inanna Sarkis, Samuel Larsen, and Selma Blair in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/77/After_We_Collided_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Empty Man',
		year: 2020,
		cast: [
			'James Badge Dale',
			'Marin Ireland',
			'Stephen Root',
			'Ron Canada',
			'Robert Aramayo',
			'Joel Courtney',
			'Sasha Frolova'
		],
		genres: ['Horror', 'Supernatural'],
		href: 'The_Empty_Man_(film)',
		extract:
			"The Empty Man is a 2020 supernatural horror film written and directed by David Prior in his feature directorial debut, based on Cullen Bunn and Vanesa R. Del Rey's graphic novel of same name published by Boom! Studios. The film stars James Badge Dale, Marin Ireland, Stephen Root, Ron Canada, Robert Aramayo, Joel Courtney, and Sasha Frolova. It follows an ex-cop who, upon an investigation into a missing girl, discovers a secret cult.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/60/The_Empty_Man_Film_Poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Synchronic',
		year: 2020,
		cast: ['Anthony Mackie', 'Jamie Dornan'],
		genres: ['Horror', 'Science Fiction'],
		href: 'Synchronic_(film)',
		extract:
			'Synchronic is a 2019 American science fiction horror film written by Justin Benson, who also directed and produced with Aaron Moorhead. It shares continuity with other films by Benson and Moorhead, following Resolution and The Endless. Synchronic stars Anthony Mackie and Jamie Dornan as paramedics who investigate a series of inexplicable deaths and their connection to a new designer drug.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Synchronic_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Bad Hair',
		year: 2020,
		cast: [
			'Elle Lorraine',
			'Vanessa Williams',
			'Jay Pharoah',
			'Lena Waithe',
			'Blair Underwood',
			'Laverne Cox'
		],
		genres: ['Comedy', 'Horror'],
		href: 'Bad_Hair_(2020_film)',
		extract:
			'Bad Hair is a 2020 American satirical comedy horror film written, directed, and produced by Justin Simien. The film stars Elle Lorraine, Jay Pharoah, Lena Waithe, Kelly Rowland, Laverne Cox, Chanté Adams, James Van Der Beek, Usher Raymond IV, Blair Underwood, and Vanessa Williams.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/19/Bad_Hair_2020_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Friendsgiving',
		year: 2020,
		cast: ['Malin Åkerman', 'Kat Dennings', 'Aisha Tyler', 'Chelsea Peretti', 'Ryan Hansen'],
		genres: ['Comedy', 'Drama'],
		href: 'Friendsgiving_(film)',
		extract:
			'Friendsgiving is a 2020 American comedy-drama film, written, and directed by Nicol Paone in her directorial debut, premiering on October 23, 2020, produced by Saban Films. It stars Malin Åkerman, Kat Dennings, Aisha Tyler, Chelsea Peretti, Christine Taylor, Jane Seymour, Deon Cole, Wanda Sykes, Margaret Cho, Fortune Feimster, Jack Donnelly, and Ryan Hansen. The film received generally negative reviews.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/40/Friendsgiving_poster.jpg',
		thumbnail_width: 265,
		thumbnail_height: 376
	},
	{
		title: 'The Craft: Legacy',
		year: 2020,
		cast: [
			'Cailee Spaeny',
			'Gideon Adlon',
			'Lovie Simone',
			'Zoey Luna',
			'Michelle Monaghan',
			'David Duchovny'
		],
		genres: ['Horror', 'Supernatural'],
		href: 'The_Craft:_Legacy',
		extract:
			"The Craft: Legacy, also known as Blumhouse's The Craft: Legacy, is a 2020 American supernatural horror film written and directed by Zoe Lister-Jones. A stand-alone sequel to The Craft (1996), the film stars Cailee Spaeny, Gideon Adlon, Lovie Simone, and Zoey Luna as four teenage girls who practice witchcraft as a coven. Additional cast include Nicholas Galitzine, Michelle Monaghan, and David Duchovny, with Fairuza Balk making a cameo appearance.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/06/The_Craft_-_Legacy.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Holidate',
		year: 2020,
		cast: ['Emma Roberts', 'Luke Bracey', 'Kristin Chenoweth'],
		genres: ['Comedy', 'Romance'],
		href: 'Holidate',
		extract:
			'Holidate is a 2020 American romantic comedy film directed by John Whitesell, from a screenplay by Tiffany Paulsen. It stars Emma Roberts, Luke Bracey, Jake Manley, Jessica Capshaw, Andrew Bachelor, Frances Fisher, Manish Dayal and Kristin Chenoweth. The film was released on Netflix on October 28, 2020.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/01/Holidate_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Come Play',
		year: 2020,
		cast: ['Gillian Jacobs', 'John Gallagher Jr.', 'Azhy Robertson', 'Winslow Fegley'],
		genres: ['Horror', 'Short', 'Thriller'],
		href: 'Come_Play',
		extract:
			'Come Play is a 2020 American horror thriller film written and directed by Jacob Chase, based on his own short film titled Larry. The film stars Gillian Jacobs, John Gallagher Jr., Azhy Robertson, and Winslow Fegley.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Come_Play_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'His House',
		year: 2020,
		cast: ['Wunmi Mosaku', '.', 'Sope Dirisu', 'Matt Smith'],
		genres: ['Horror', 'Thriller'],
		href: 'His_House',
		extract:
			'His House is a 2020 horror thriller film written and directed by Remi Weekes from a story by Felicity Evans and Toby Venables. It stars Wunmi Mosaku, Sope Dirisu and Matt Smith. The film tells the story of a refugee couple from South Sudan, struggling to adjust to their new life in an English town that has an evil lurking beneath the surface.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/His_House_film_poster.png/320px-His_House_film_poster.png',
		thumbnail_width: 320,
		thumbnail_height: 237
	},
	{
		title: 'Spell',
		year: 2020,
		cast: ['Omari Hardwick', 'Loretta Devine'],
		genres: ['Horror', 'Supernatural', 'Thriller'],
		href: 'Spell_(film)',
		extract:
			'Spell is a 2020 American supernatural horror thriller film directed by Mark Tonderai and starring Omari Hardwick and Loretta Devine. It was released in the United States through digital on October 30, 2020 by Paramount Pictures via Paramount Players.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Spell.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Jungleland',
		year: 2020,
		cast: ['Charlie Hunnam', "Jack O'Connell", 'Jessica Barden', 'Jonathan Majors', 'John Cullum'],
		genres: ['Drama'],
		href: 'Jungleland_(film)',
		extract:
			"Jungleland is a 2019 American drama film directed by Max Winkler and written by Theodore B. Bressman, David Branson Smith, and Winkler. The film stars Charlie Hunnam, Jack O'Connell, Jessica Barden, Jonathan Majors, John Cullum, and Nick Mullen.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/67/Jungleland_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Let Him Go',
		year: 2020,
		cast: ['Diane Lane', 'Kevin Costner', 'Lesley Manville', 'Will Brittain', 'Jeffrey Donovan'],
		genres: ['Western'],
		href: 'Let_Him_Go',
		extract:
			'Let Him Go is a 2020 American neo-Western film starring Diane Lane and Kevin Costner, and directed, written, and co-produced by Thomas Bezucha, based on the 2013 novel of the same name by Larry Watson. The film follows a retired sheriff and his wife who try to rescue their grandson from a dangerous family living off-the-grid. It also stars Lesley Manville, Kayli Carter, Will Brittain, and Jeffrey Donovan.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Let_Him_Go_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'The Informer',
		year: 2020,
		cast: ['Joel Kinnaman', 'Rosamund Pike', 'Common', 'Ana de Armas', 'Clive Owen'],
		genres: ['Crime', 'Thriller'],
		href: 'The_Informer_(2019_film)',
		extract:
			'The Informer is a 2019 British crime thriller film directed by Andrea Di Stefano and written by Matt Cook, based on the novel Three Seconds by Roslund & Hellström. The film stars Joel Kinnaman, Rosamund Pike, Common, Ana de Armas, and Clive Owen.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4d/The_Informer_poster_2020.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'The Dark and the Wicked',
		year: 2020,
		cast: ['Marin Ireland', 'Michael Abbott Jr.', 'Xander Berkeley'],
		genres: ['Horror', 'Supernatural'],
		href: 'The_Dark_and_the_Wicked',
		extract:
			'The Dark and the Wicked is a 2020 American supernatural horror film written and directed by Bryan Bertino, starring Marin Ireland, Michael Abbott Jr., and Xander Berkeley. It follows two siblings who encounter a demonic entity at their familial farm after the suicide of their mother, who had long been caring for their infirm father.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e3/The_Dark_and_the_Wicked.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Hillbilly Elegy',
		year: 2020,
		cast: [
			'Amy Adams',
			'Glenn Close',
			'Gabriel Basso',
			'Haley Bennett',
			'Freida Pinto',
			'Bo Hopkins',
			'Owen Asztalos'
		],
		genres: ['Drama', 'War'],
		href: 'Hillbilly_Elegy_(film)',
		extract:
			'Hillbilly Elegy is a 2020 American drama film directed by Ron Howard from a screenplay by Vanessa Taylor, It is based on the 2016 memoir of the same name, by J. D. Vance. The film stars Amy Adams, Glenn Close, Gabriel Basso, Haley Bennett, Freida Pinto, Bo Hopkins, and Owen Asztalos.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/40/Hillbilly_Elegy_%28film%29.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Mank',
		year: 2020,
		cast: [
			'Gary Oldman',
			'Amanda Seyfried',
			'Lily Collins',
			'Arliss Howard',
			'Tom Pelphrey',
			'Sam Troughton',
			'Ferdinand Kingsley',
			'Tuppence Middleton',
			'Tom Burke',
			'Joseph Cross',
			'Jamie McShane',
			'Toby Leonard Moore',
			'Monika Gossmann',
			'Charles Dance'
		],
		genres: ['Drama', 'Biography'],
		href: 'Mank',
		extract:
			'Mank is a 2020 American black-and-white biographical drama film about screenwriter Herman J. Mankiewicz and his development of the screenplay for Citizen Kane (1941). It was directed by David Fincher based on a screenplay by his late father Jack Fincher and was produced by Ceán Chaffin, Douglas Urbanski, and Eric Roth. It stars Gary Oldman in the title role, alongside Amanda Seyfried, Lily Collins, Arliss Howard, Tom Pelphrey, Sam Troughton, Ferdinand Kingsley, Tuppence Middleton, Tom Burke, Joseph Cross, Jamie McShane, Toby Leonard Moore, Monika Gossman, and Charles Dance.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Mank.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Freaky',
		year: 2020,
		cast: [
			'Vince Vaughn',
			'Kathryn Newton',
			'Katie Finneran',
			"Celeste O'Connor",
			'Misha Osherovich',
			'Alan Ruck'
		],
		genres: ['Comedy', 'Slasher'],
		href: 'Freaky_(film)',
		extract:
			"Freaky is a 2020 American comedy slasher film directed by Christopher Landon, from a screenplay by Michael Kennedy and Landon, and starring Vince Vaughn, Kathryn Newton, Katie Finneran, Celeste O'Connor, and Alan Ruck. A twist on Freaky Friday, the film centers on a teenage girl who unintentionally switches bodies with a middle-aged male serial killer. Jason Blum serves as a producer under his Blumhouse Productions banner.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Freaky_%28film%29_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 348
	},
	{
		title: 'Jingle Jangle: A Christmas Journey',
		year: 2020,
		cast: [
			'Forest Whitaker',
			'Keegan-Michael Key',
			'Hugh Bonneville',
			'Anika Noni Rose',
			'Madalen Mills',
			'Phylicia Rashad',
			'Ricky Martin'
		],
		genres: ['Fantasy', 'Musical'],
		href: 'Jingle_Jangle:_A_Christmas_Journey',
		extract:
			'Jingle Jangle: A Christmas Journey is a 2020 American Christmas musical fantasy film written and directed by David E. Talbert. Choreographed by Ashley Wallen, it stars Forest Whitaker, Keegan-Michael Key, Hugh Bonneville, Anika Noni Rose, Phylicia Rashad, Lisa Davina Phillip, Ricky Martin, and Madalen Mills. The film, which was originally planned as a stage production, received ten nominations, the most at the 52nd NAACP Image Awards.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/0/02/Jingle_Jangle_A_Christmas_Journey_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Dreamland',
		year: 2020,
		cast: [
			'Finn Cole',
			'Margot Robbie',
			'Travis Fimmel',
			'Kerry Condon',
			'Darby Camp',
			'Garrett Hedlund',
			'Lola Kirke'
		],
		genres: ['Thriller', 'Historical'],
		href: 'Dreamland_(2019_American_film)',
		extract:
			'Dreamland is a 2019 American period thriller film directed by Miles Joris-Peyrafitte from a screenplay by Nicolaas Zwart. The film stars Finn Cole, Margot Robbie, Travis Fimmel, Garrett Hedlund, Kerry Condon, Darby Camp and Lola Kirke.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/80/Dreamland_poster_2019.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 344
	},
	{
		title: 'Fatman',
		year: 2020,
		cast: ['Mel Gibson', 'Walton Goggins', 'Marianne Jean-Baptiste'],
		genres: ['Action', 'Comedy'],
		href: 'Fatman_(2020_film)',
		extract:
			'Fatman is a 2020 American black comedy action film written and directed by Eshom Nelms and Ian Nelms and starring Mel Gibson, Walton Goggins and Marianne Jean-Baptiste. An unorthodox slant on holiday traditions that follows a jaded, gritty Santa Claus who struggles often with ennui, production issues, Government interference, and now an embittered assassin sent by a vengeful naughty kid.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Fatman_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'The Life Ahead',
		year: 2020,
		cast: ['Sophia Loren', 'Ibrahima Gueye', 'Abril Zamora', 'Renato Carpentieri', 'Babak Karimi'],
		genres: ['Drama'],
		href: 'The_Life_Ahead',
		extract:
			'The Life Ahead is a 2020 Italian drama film directed by Edoardo Ponti, from a screenplay by Ponti and Ugo Chiti. It is the third screen adaptation of the 1975 novel The Life Before Us by Romain Gary. It stars Sophia Loren, Ibrahima Gueye and Abril Zamora, and is set in Bari, Italy.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/The_Life_Ahead_poster.webp/259px-The_Life_Ahead_poster.webp.png',
		thumbnail_width: 320,
		thumbnail_height: 474
	},
	{
		title: 'The Climb',
		year: 2020,
		cast: [
			'Kyle Marvin',
			'Michael Angelo Covino',
			'Gayle Rankin',
			'Talia Balsam',
			'George Wendt',
			'Judith Godrèche'
		],
		genres: ['Comedy', 'Drama'],
		href: 'The_Climb_(2019_film)',
		extract:
			"The Climb is a 2019 American comedy-drama film written, produced by and starring Michael Angelo Covino and Kyle Marvin. Covino also directs, while Gayle Rankin, Talia Balsam, George Wendt, and Judith Godrèche also star. Based on Covino and Marvin's short film of the same name, the plot follows two friends and looks into their lives over several years.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1d/The_Climb_%282019_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Chick Fight',
		year: 2020,
		cast: ['Malin Åkerman', 'Bella Thorne', 'Fortune Feimster', 'Alec Baldwin'],
		genres: ['Action', 'Comedy'],
		href: 'Chick_Fight',
		extract:
			'Chick Fight is a 2020 American action comedy film directed by Paul Leyden from a screenplay by Joseph Downey. It stars Malin Åkerman, Bella Thorne, Dulcé Sloan, Kevin Connolly, Kevin Nash, Alec Mapa, Dominique Jackson, Fortune Feimster and Alec Baldwin.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Chick_Fight_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Princess Switch: Switched Again',
		year: 2020,
		cast: ['Vanessa Hudgens', 'Sam Palladio', 'Nick Sagar'],
		genres: ['Comedy', 'Romance'],
		href: 'The_Princess_Switch:_Switched_Again',
		extract:
			"The Princess Switch: Switched Again is a 2020 American Christmas romantic comedy film directed by Mike Rohl. As the second installment in The Princess Switch trilogy, it stars Vanessa Hudgens, Sam Palladio, Suanne Braun, and Nick Sagar. The story follows Margaret Delacourt, the Duchess of Montenaro, who suddenly inherits the throne to her home country of Montenaro. As her Christmas coronation approaches, she and Stacy switch places once again so Margaret can fix her relationship with Stacy's friend Kevin. Unbeknownst to both women, a third look-alike, Margaret's evil cousin Lady Fiona, disguises herself as Margaret in a scheme to steal the throne.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/b/b9/The_Princess_Switch_Switched_Again.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Run',
		year: 2020,
		cast: ['Sarah Paulson', 'Kiera Allen', 'Pat Healy', 'Sara Sohn'],
		genres: ['Horror', 'Thriller'],
		href: 'Run_(2020_American_film)',
		extract:
			'Run is a 2020 American psychological horror thriller film directed by Aneesh Chaganty and written by Chaganty and Sev Ohanian. The film stars Kiera Allen as Chloe Sherman, a disabled homeschooled teenager who begins to suspect that her mother Diane is keeping a dark secret about her upbringing.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/45/Run_poster.jpeg',
		thumbnail_width: 254,
		thumbnail_height: 392
	},
	{
		title: 'Sound of Metal',
		year: 2020,
		cast: ['Riz Ahmed', 'Olivia Cooke', 'Paul Raci', 'Lauren Ridloff', 'Mathieu Amalric'],
		genres: ['Drama'],
		href: 'Sound_of_Metal',
		extract:
			"Sound of Metal is a 2019 American drama film directed and co-written by Darius Marder. It stars Riz Ahmed as a metal drummer who loses his hearing, and also features Olivia Cooke, Paul Raci, Lauren Ridloff, and Mathieu Amalric. Sound of Metal had its world premiere in the Platform Prize program at the 2019 Toronto International Film Festival on September 6, 2019. Amazon Studios released the film in theaters on November 20, 2020, and on Amazon Prime Video on December 4. The film was critically acclaimed, with particular praise for the performances of Ahmed and Raci, the sound design, the editing and Marder's direction and screenplay. It was listed on 52 film critics' top-ten lists for 2020. At the 93rd Academy Awards, it was nominated for Best Picture, Best Original Screenplay, Best Actor (Ahmed) and Best Supporting Actor (Raci), and won for Best Sound and Best Film Editing.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/11/Sound_of_Metal_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Last Vermeer',
		year: 2020,
		cast: ['Guy Pearce', 'Claes Bang', 'Vicky Krieps'],
		genres: ['Drama'],
		href: 'The_Last_Vermeer',
		extract:
			'The Last Vermeer is a 2019 American drama film directed by Dan Friedkin from a screenplay by John Orloff, Mark Fergus, and Hawk Ostby. It is based on the 2008 book The Man Who Made Vermeers by Jonathan Lopez, and tells the story of Han van Meegeren, an art maker who swindles millions of dollars from the Nazis, alongside Dutch Resistance fighter Joseph Piller.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/80/The_Last_Vermeer.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Jiu Jitsu',
		year: 2020,
		cast: ['Alain Moussi', 'Frank Grillo', 'JuJu Chan', 'Tony Jaa', 'Nicolas Cage'],
		genres: ['Martial Arts', 'Science Fiction'],
		href: 'Jiu_Jitsu_(film)',
		extract:
			'Jiu Jitsu is a 2020 American science fiction martial arts film directed and co-written by Dimitri Logothetis and starring Alain Moussi, Frank Grillo, JuJu Chan, Tony Jaa and Nicolas Cage. The film is based on the 2017 comic book of the same name by Logothetis and Jim McGrath. The film was a box office bomb, grossing less than $100,000 against a budget of over $25 million, and was critically panned.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/36/Jiu_Jitsu_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Buddy Games',
		year: 2020,
		cast: ['Josh Duhamel', 'Dax Shepard', 'Olivia Munn'],
		genres: ['Comedy'],
		href: 'Buddy_Games',
		extract:
			'Buddy Games is a 2019 American comedy film directed by Josh Duhamel in his solo directorial debut and written by Duhamel, Bob Schwartz, and Jude Weng. Produced by Duhamel, Michael J. Luisi, and Weng, the film centers on a group of six friends that reunite after a five-year hiatus to engage in a challenging set of dares and games and help lift one of their own out of depression and also have a chance of winning $150,000 while doing so. The cast includes Duhamel, Dax Shepard, Olivia Munn, Kevin Dillon, and Neal McDonough.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/95/The_Buddy_Games_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Croods: A New Age',
		year: 2020,
		cast: [
			'Nicolas Cage',
			'Emma Stone',
			'Ryan Reynolds',
			'Peter Dinklage',
			'Leslie Mann',
			'Kelly Marie Tran',
			'Catherine Keener',
			'Clark Duke',
			'Cloris Leachman'
		],
		genres: ['Adventure', 'Animated', 'Comedy'],
		href: 'The_Croods:_A_New_Age',
		extract:
			'The Croods: A New Age is a 2020 American computer-animated adventure comedy film produced by DreamWorks Animation and distributed by Universal Pictures. The sequel to The Croods (2013) as well as the second film in The Croods franchise, it was directed by Joel Crawford from a screenplay by Paul Fisher, Bob Logan, and the writing team of Dan and Kevin Hageman, based on a story by Kirk DeMicco and Chris Sanders, the directors of the previous film. The film features the returning voices of Nicolas Cage, Emma Stone, Ryan Reynolds, Catherine Keener, Clark Duke, and Cloris Leachman alongside new additions to the cast including Peter Dinklage, Leslie Mann, and Kelly Marie Tran. The film follows The Croods, Guy and their pets Belt, Chunky and Douglas, as they discover an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans, a family with a couple of steps above the Croods on the evolutionary ladder.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/91/The_Croods_-_A_New_Age.png',
		thumbnail_width: 250,
		thumbnail_height: 396
	},
	{
		title: 'Happiest Season',
		year: 2020,
		cast: [
			'Kristen Stewart',
			'Mackenzie Davis',
			'Alison Brie',
			'Aubrey Plaza',
			'Dan Levy',
			'Mary Holland',
			'Victor Garber',
			'Mary Steenburgen'
		],
		genres: ['Comedy', 'Drama', 'Romance'],
		href: 'Happiest_Season',
		extract:
			'Happiest Season is a 2020 American holiday romantic comedy-drama film directed by Clea DuVall, who co-wrote the screenplay with Mary Holland. Starring an ensemble cast consisting of Kristen Stewart, Mackenzie Davis, Alison Brie, Aubrey Plaza, Dan Levy, Holland, Victor Garber, and Mary Steenburgen, the film follows a woman who struggles to admit to her conservative parents that she is a lesbian while she and her girlfriend visit them during Christmas. DuVall has said the film is a semi-autobiographical take on her own experiences with her family.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Happiest_Season_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "Ma Rainey's Black Bottom",
		year: 2020,
		cast: [
			'Viola Davis',
			'Chadwick Boseman',
			'Glynn Turman',
			'Colman Domingo',
			'Michael Potts',
			'Jeremy Shamos',
			'Taylour Paige',
			'Dusan Brown',
			'Jonny Coyne'
		],
		genres: ['Drama'],
		href: 'Ma_Rainey%27s_Black_Bottom_(film)',
		extract:
			"Ma Rainey's Black Bottom is a 2020 American drama film directed by George C. Wolfe and written by Ruben Santiago-Hudson, based on the 1982 play of the same name by August Wilson. The film stars Viola Davis, Chadwick Boseman, Glynn Turman, Colman Domingo, and Michael Potts. Inspired by the career of Ma Rainey, an influential blues singer and the title character, the film dramatizes a turbulent recording session in 1920s Chicago.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/2/2e/Ma_Rainey%27s_Black_Bottom_film_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Christmas Chronicles 2',
		year: 2020,
		cast: [
			'Kurt Russell',
			'Goldie Hawn',
			'Darby Camp',
			'Julian Dennison',
			'Jazhir Bruno',
			'Judah Lewis',
			'Kimberly Williams-Paisley',
			'Tyrese Gibson',
			'Andrew Morgado'
		],
		genres: ['Comedy'],
		href: 'The_Christmas_Chronicles_2',
		extract:
			'The Christmas Chronicles 2 is a 2020 American Christmas comedy film directed and produced by Chris Columbus, who wrote the screenplay with Matt Lieberman. A sequel to the 2018 film The Christmas Chronicles, it features Kurt Russell reprising his role as Santa Claus. Also reprising their roles are Goldie Hawn, Darby Camp, Judah Lewis, and Kimberly Williams-Paisley, with new cast members Julian Dennison, Jahzir Bruno, Tyrese Gibson, Sunny Suljic, Darlene Love, and Malcolm McDowell. The film had a limited theatrical release before moving to Netflix on November 25, 2020.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ef/The_Christmas_Chronicles_2.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Uncle Frank',
		year: 2020,
		cast: [
			'Paul Bettany',
			'Sophia Lillis',
			'Peter Macdissi',
			'Judy Greer',
			'Steve Zahn',
			'Lois Smith',
			'Margo Martindale',
			'Stephen Root'
		],
		genres: ['Comedy', 'Drama'],
		href: 'Uncle_Frank_(film)',
		extract:
			'Uncle Frank is a 2020 American comedy-drama film written, directed, and co-produced by Alan Ball. The film stars Paul Bettany and Sophia Lillis. Set in the 1970s, Uncle Frank is a road movie about a gay man who confronts his past.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Uncle_Frank_%28film%29.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Folklore: The Long Pond Studio Sessions',
		year: 2020,
		cast: ['Taylor Swift', 'Jack Antonoff', 'Aaron Dessner', 'Justin Vernon'],
		genres: ['Documentary', 'Performance'],
		href: 'Folklore:_The_Long_Pond_Studio_Sessions',
		extract:
			'Folklore: The Long Pond Studio Sessions is a 2020 American documentary concert film directed and produced by American singer-songwriter Taylor Swift, released on Disney+ on November 25, 2020. The documentary is set at Long Pond Studio, an isolated recording studio in a forested area in Hudson Valley, New York; Swift performs all of the 17 tracks of her eighth studio album, Folklore (2020), whilst discussing the creative process behind the songs with her collaborators Aaron Dessner and Jack Antonoff. Swift made her debut as a film director with the documentary, which is her fourth film to be released on a streaming service, following the releases of The 1989 World Tour Live (2015), Taylor Swift: Reputation Stadium Tour (2018), and Miss Americana (2020).',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/b/b5/Folklore_The_Long_Pond_Studio_Sessions_Poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 362
	},
	{
		title: 'Superintelligence',
		year: 2020,
		cast: [
			'Melissa McCarthy',
			'Bobby Cannavale',
			'Brian Tyree Henry',
			'Jean Smart',
			'James Corden'
		],
		genres: ['Action', 'Comedy', 'Romance'],
		href: 'Superintelligence_(film)',
		extract:
			'Superintelligence is a 2020 American romantic action comedy film directed by Ben Falcone and written by Steve Mallory. The film stars Melissa McCarthy in her fourth collaboration with her husband, Falcone.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Superintelligence_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Life in a Year',
		year: 2020,
		cast: ['Jaden Smith', 'Cara Delevingne', 'Cuba Gooding Jr.', 'Nia Long'],
		genres: ['Drama', 'Romance'],
		href: 'Life_in_a_Year',
		extract:
			'Life in a Year is a 2020 American romantic drama film directed by Mitja Okorn, from a screenplay by Jeffrey Addiss and Will Matthews. The film stars Jaden Smith, Cara Delevingne, Cuba Gooding Jr., and Nia Long. Will Smith and Jada Pinkett Smith serve as executive producers under their Overbrook Entertainment banner.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Life_in_a_Year_poster.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Black Beauty',
		year: 2020,
		cast: ['Mackenzie Foy', 'Kate Winslet', 'Claire Forlani', 'Fern Deacon', 'Iain Glen'],
		genres: ['Adventure', 'Drama', 'Family'],
		href: 'Black_Beauty_(2020_film)',
		extract:
			"Black Beauty is a 2020 adventure drama family film written, edited and directed by Ashley Avis and based on the 1877 novel of the same name by Anna Sewell. A co-production between the United States, the United Kingdom, South Africa, France and Germany, it stars Kate Winslet, Mackenzie Foy, Claire Forlani, Iain Glen and Fern Deacon and is the sixth cinematic adaptation. In the film, Black Beauty is portrayed as a mare instead of a stallion and is brought to Birtwick Park where she forges a bond with a spirited teenager that carries through different chapters, challenges and adventures. Originally scheduled for a theatrical release, it was unable to be released in cinemas due to the negative effects of the COVID-19 pandemic. The film's distribution rights were acquired by Walt Disney Studios and was released on the company's streaming service Disney+ on November 27, 2020. It received mixed reviews from critics.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Black_Beauty_Disney%2B_Poster.jpeg',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'The Prom',
		year: 2020,
		cast: [
			'Meryl Streep',
			'James Corden',
			'Jo Ellen Pellman',
			'Nicole Kidman',
			'Keegan-Michael Key',
			'Andrew Rannells',
			'Ariana DeBose',
			'Kerry Washington'
		],
		genres: ['Comedy', 'Musical'],
		href: 'The_Prom_(film)',
		extract:
			"The Prom is a 2020 American musical comedy film directed by Ryan Murphy and adapted to the screen by Chad Beguelin and Bob Martin, from their and Matthew Sklar's 2018 Broadway musical of the same name. The film stars Meryl Streep, James Corden, Nicole Kidman, Keegan-Michael Key, Andrew Rannells, Ariana DeBose, Tracy Ullman, Kevin Chamberlin, Mary Kay Place, Kerry Washington, and introducing Jo Ellen Pellman in her film debut as Emma Nolan.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/82/The_Prom_%28film%29.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'All My Life',
		year: 2020,
		cast: [
			'Jessica Rothe',
			'Harry Shum Jr.',
			'Kyle Allen',
			'Chrissie Fit',
			'Jay Pharoah',
			'Marielle Scott',
			'Keala Settle'
		],
		genres: ['Drama', 'Romance'],
		href: 'All_My_Life_(2020_film)',
		extract:
			'All My Life is a 2020 American romantic drama film directed by Marc Meyers, from a screenplay by Todd Rosenberg, based on the true story of Solomon Chau and Jennifer Carter, a young couple that rushes to put their wedding together after Solomon is diagnosed with liver cancer. The film stars Jessica Rothe, Harry Shum Jr., Kyle Allen, Chrissie Fit, Jay Pharoah, Marielle Scott, and Keala Settle.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/0/08/All_My_Life%2C_2020_film%2C_official_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 348
	},
	{
		title: 'Godmothered',
		year: 2020,
		cast: ['Isla Fisher', 'Jillian Bell', 'Santiago Cabrera'],
		genres: ['Comedy', 'Drama', 'Fantasy'],
		href: 'Godmothered',
		extract:
			'Godmothered is a 2020 American fantasy comedy-drama film directed by Sharon Maguire, written by Kari Granlund and Melissa Stack, and starring Jillian Bell and Isla Fisher. The Walt Disney Company first began developing the film in September 2019, with Maguire joining the production as director later that month. Principal photography began in January 2020 in Boston, Massachusetts. Produced by Walt Disney Pictures, The Montecito Picture Company and Secret Machine Entertainment, it was released on Disney+ on December 4, 2020. The film received mixed reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/24/Godmothered.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Half Brothers',
		year: 2020,
		cast: ['Luis Gerardo Méndez', 'Connor Del Rio'],
		genres: ['Comedy'],
		href: 'Half_Brothers',
		extract:
			'Half Brothers is a 2020 American comedy film directed by Luke Greenfield from a screenplay by Eduardo Cisneros and Jason Shuman. It stars Luis Gerardo Méndez, Connor Del Rio, José Zúñiga, Vincent Spano, Pia Watson and Juan Pablo Espinosa.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Half_Brothers_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Wander',
		year: 2020,
		cast: [
			'Aaron Eckhart',
			'Katheryn Winnick',
			'Heather Graham',
			'Roger Dorman',
			'Tommy Lee Jones'
		],
		genres: ['Thriller'],
		href: 'Wander_(film)',
		extract:
			'Wander is a 2020 American thriller film directed by April Mullen and written by Tim Doiron. It stars Tommy Lee Jones, Aaron Eckhart, Katheryn Winnick, Heather Graham, and Roger Dorman. The story focuses on two conspiracy theorists and their investigation of a murder. Wander was released in the United States on December 4, 2020.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a8/Wander_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Black Bear',
		year: 2020,
		cast: ['Aubrey Plaza', 'Christopher Abbott', 'Sarah Gadon'],
		genres: ['Comedy', 'Drama', 'Thriller'],
		href: 'Black_Bear_(film)',
		extract:
			'Black Bear is a 2020 American black comedy-drama thriller film written and directed by Lawrence Michael Levine. It stars Aubrey Plaza, Christopher Abbott, Sarah Gadon, Paola Lázaro and Grantham Coleman.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/65/Black_Bear_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 318
	},
	{
		title: 'Let Them All Talk',
		year: 2020,
		cast: ['Meryl Streep', 'Candice Bergen', 'Gemma Chan', 'Lucas Hedges', 'Dianne Wiest'],
		genres: ['Comedy', 'Drama'],
		href: 'Let_Them_All_Talk_(film)',
		extract:
			'Let Them All Talk is a 2020 American comedy-drama film directed by Steven Soderbergh from a screenplay by Deborah Eisenberg. The film stars Meryl Streep, Dianne Wiest, Candice Bergen, Lucas Hedges, and Gemma Chan. Much of the dialogue was improvised by the cast, and Soderbergh shot the film using natural light and little equipment aboard the Queen Mary 2.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/86/Let_Them_All_Talk_%28film%29.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Midnight Sky',
		year: 2020,
		cast: [
			'George Clooney',
			'Felicity Jones',
			'David Oyelowo',
			'Tiffany Boone',
			'Demián Bichir',
			'Kyle Chandler',
			'Caoilinn Springall'
		],
		genres: ['Science Fiction'],
		href: 'The_Midnight_Sky',
		extract:
			'The Midnight Sky is a 2020 American science fiction film directed by George Clooney based on the 2016 novel Good Morning, Midnight by Lily Brooks-Dalton. The script was written by Mark L. Smith. Clooney plays a leading role in his film, as an aging scientist who must venture across the frigid Arctic Circle to warn off a returning interplanetary spaceship following a global catastrophe on Earth. Felicity Jones, David Oyelowo, Tiffany Boone, Demián Bichir, Kyle Chandler, and Caoilinn Springall also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/35/The_Midnight_Sky_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Songbird',
		year: 2020,
		cast: [
			'KJ Apa',
			'Sofia Carson',
			'Craig Robinson',
			'Bradley Whitford',
			'Peter Stormare',
			'Alexandra Daddario',
			'Paul Walter Hauser',
			'Demi Moore'
		],
		genres: ['Science Fiction', 'Thriller'],
		href: 'Songbird_(2020_film)',
		extract:
			'Songbird is a 2020 American dystopian science fiction thriller film based on the COVID-19 pandemic. It was directed by Adam Mason, who wrote the screenplay with Simon Boyes. Produced by Michael Bay, Adam Goodman, Andrew Sugerman and Eben Davidson, the film stars KJ Apa, Sofia Carson, Craig Robinson, Bradley Whitford, Peter Stormare, Alexandra Daddario, Paul Walter Hauser and Demi Moore.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/90/Songbird_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Wild Mountain Thyme',
		year: 2020,
		cast: ['Emily Blunt', 'Jamie Dornan', 'Jon Hamm', 'Dearbhla Molloy', 'Christopher Walken'],
		genres: ['Comedy', 'Drama', 'Romance'],
		href: 'Wild_Mountain_Thyme_(film)',
		extract:
			'Wild Mountain Thyme is a 2020 romantic comedy-drama film written and directed by John Patrick Shanley, based on his play Outside Mullingar. The film stars Emily Blunt, Jamie Dornan, Jon Hamm, Dearbhla Molloy and Christopher Walken.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/cb/Wild_Mountain_Thyme_%28film%29.png',
		thumbnail_width: 220,
		thumbnail_height: 330
	},
	{
		title: 'Safety',
		year: 2020,
		cast: ['Jay Reeves', 'Thaddeus J. Mixson', 'Corinne Foxx', 'Matthew Glave', 'James Badge Dale'],
		genres: ['Drama', 'Family', 'Sports', 'Biography'],
		href: 'Safety_(2020_film)',
		extract:
			'Safety is a 2020 American biographical sports drama family film based on the story of Ray McElrathbey, a football player who battled family adversity to join the Clemson Tigers. Directed by Reginald Hudlin, produced by Mark Ciardi, and written by Nick Santora, the film features Jay Reeves in the lead role. The feature film, a Walt Disney Pictures production, was made available to stream on Disney+ from December 11, 2020. It received generally positive reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Disney_Safety_Poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Wander Darkly',
		year: 2020,
		cast: [
			'Sienna Miller',
			'Diego Luna',
			'Beth Grant',
			'Aimee Carrero',
			'Tory Kittles',
			'Vanessa Bayer'
		],
		genres: ['Drama'],
		href: 'Wander_Darkly',
		extract:
			'Wander Darkly is a 2020 American drama film written and directed by Tara Miele. The film stars Sienna Miller, Diego Luna, Beth Grant, Aimee Carrero, Tory Kittles, and Vanessa Bayer.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Wander_Darkly.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: "I'm Your Woman",
		year: 2020,
		cast: [
			'Rachel Brosnahan',
			'Arinzé Kene',
			'Marsha Stephanie Blake',
			'Bill Heck',
			'Frankie Faison'
		],
		genres: ['Crime', 'Noir'],
		href: 'I%27m_Your_Woman_(film)',
		extract:
			"I'm Your Woman is a 2020 American neo-noir crime film set in the 1970s and directed by Julia Hart from a screenplay by Hart and Jordan Horowitz. It stars Rachel Brosnahan, Arinzé Kene, Marsha Stephanie Blake, Bill Heck, Frankie Faison, Marceline Hugot and James McMenamin. Brosnahan plays Jean, a woman on the run after her husband, who is involved with organized crime, mysteriously goes missing.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f7/I%27m_Your_Woman_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Stand In',
		year: 2020,
		cast: ['Drew Barrymore', 'Michael Zegen', 'T.J. Miller', 'Holland Taylor'],
		genres: ['Comedy', 'Romance'],
		href: 'The_Stand_In_(2020_film)',
		extract:
			'The Stand In is a 2020 American romantic comedy film directed by Jamie Babbit, written by Sam Bain, and starring Drew Barrymore, Michael Zegen, T.J. Miller and Holland Taylor. It was released on December 11, 2020.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/82/The_Stand-In.jpg',
		thumbnail_width: 267,
		thumbnail_height: 373
	},
	{
		title: 'Archenemy',
		year: 2020,
		cast: [
			'Joe Manganiello',
			'Skylan Brooks',
			'Zolee Griggs',
			'Paul Scheer',
			'Amy Seimetz',
			'Glenn Howerton'
		],
		genres: ['Independent', 'Mystery', 'Superhero', 'Thriller'],
		href: 'Archenemy_(film)',
		extract:
			'Archenemy is a 2020 independent superhero mystery-thriller film written and directed by Adam Egypt Mortimer based on a story Mortimer created with Lucas Passmore. Joe Manganiello, who also produced the film, stars in the lead role alongside Skylan Brooks, Paul Scheer, Glenn Howerton, Zolee Griggs, and Amy Seimetz.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/78/Archenemy_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Farewell Amor',
		year: 2020,
		cast: ['Ntare Mwine', 'Zainab Jah', 'Jayme Lawson', 'Joie Lee'],
		genres: ['Drama'],
		href: 'Farewell_Amor',
		extract:
			'Farewell Amor is a 2020 American drama film written and directed by Ekwa Msangi. It premiered at the 2020 Sundance Film Festival. The film tells the story of a family of Angolan immigrants who reunite in the United States after a years-long separation, and is told from the perspective of the mother, father, and daughter.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/80/Farewell_amor.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Monster Hunter',
		year: 2020,
		cast: [
			'Milla Jovovich',
			'Tony Jaa',
			'Tip "T.I." Harris',
			'Meagan Good',
			'Diego Boneta',
			'Josh Helman',
			'Jin Au-Yeung',
			'Ron Perlman'
		],
		genres: [],
		href: 'Monster_Hunter_(film)',
		extract:
			'Monster Hunter is a 2020 monster film written, directed, and produced by Paul W. S. Anderson, based on the video game series of the same name by Capcom. The film stars Milla Jovovich in her fifth outing together with Anderson as director and herself as lead actor. The other cast members include Tony Jaa, Tip Harris, Meagan Good, Diego Boneta, Josh Helman, Jin Au-Yeung, and Ron Perlman. The film follows Artemis (Jovovich) and her loyal soldiers when they are transported to a new world, where they engage in a battle for survival against enormous monsters with incredible powers.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Monster_Hunter_Film_Poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Greenland',
		year: 2020,
		cast: [
			'Gerard Butler',
			'Morena Baccarin',
			'David Denman',
			'Hope Davis',
			'Roger Dale Floyd',
			'Andrew Bachelor',
			'Merrin Dungey',
			'Holt McCallany',
			'Scott Glenn'
		],
		genres: ['Disaster', 'Thriller'],
		href: 'Greenland_(film)',
		extract:
			'Greenland is a 2020 American disaster thriller film directed by Ric Roman Waugh and written by Chris Sparling. The film stars Gerard Butler, Morena Baccarin, Roger Dale Floyd, Scott Glenn, David Denman, and Hope Davis, and follows a family who must fight for survival as a planet-destroying comet races to Earth.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Greenland_%28film%29.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Fatale',
		year: 2020,
		cast: ['Hilary Swank', 'Michael Ealy', 'Mike Colter', 'Geoffrey Owens', 'Denise Dowse'],
		genres: ['Thriller'],
		href: 'Fatale_(film)',
		extract:
			'Fatale is a 2020 American psychological thriller film directed by Deon Taylor, from a screenplay by David Loughery. The film stars Hilary Swank, Michael Ealy, Mike Colter, and Danny Pino.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/ab/Fatale_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Skylines',
		year: 2020,
		cast: [
			'Lindsey Morgan',
			'Jonathan Howard',
			'Daniel Bernhardt',
			'Rhona Mitra',
			'James Cosmo',
			'Alexander Siddig'
		],
		genres: ['Action', 'Science Fiction'],
		href: 'Skylines_(film)',
		extract:
			"Skylines is a 2020 American science fiction action film co-produced and directed by Liam O'Donnell which he wrote from a story he co-developed with producer Matthew E. Chausse. It is a sequel to Beyond Skyline (2017), and the third overall in the Skyline film series.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Skylines_%28film%29.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Hunter Hunter',
		year: 2020,
		cast: ['Devon Sawa', 'Camille Sullivan', 'Nick Stahl', 'Summer H. Howell'],
		genres: ['Horror', 'Thriller'],
		href: 'Hunter_Hunter_(film)',
		extract:
			'Hunter Hunter is a 2020 horror thriller film written and directed by Shawn Linden and stars Devon Sawa, Camille Sullivan, Summer H. Howell and Nick Stahl.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/75/Hunter-hunter-movie-poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Breach',
		year: 2020,
		cast: ['Cody Kearsley', 'Bruce Willis', 'Thomas Jane'],
		genres: ['Action', 'Horror', 'Science Fiction'],
		href: 'Breach_(2020_film)',
		extract:
			"Breach, also titled Anti-Life, is a 2020 American science fiction action horror film directed by John Suits, starring Cody Kearsley, Bruce Willis, Rachel Nichols, Thomas Jane, Johnny Messner, Corey Large, Callan Mulvey, Alexander Kane, and Kassandra Clementi. The film was shot in Fitzgerald, Georgia at TMG Studio's soundstages. It was released on December 18, 2020.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e6/Breach_%282020_film%29.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Ariana Grande: Excuse Me, I Love You',
		year: 2020,
		cast: ['Ariana Grande'],
		genres: ['Performance'],
		href: 'Ariana_Grande:_Excuse_Me,_I_Love_You',
		extract:
			"Ariana Grande: Excuse Me, I Love You is a 2020 American concert film that follows Ariana Grande on-stage and behind the scenes of the Sweetener World Tour in 2019. The film was released on December 21, 2020 on Netflix, in commemoration of the first anniversary of the tour's conclusion. The release of the film was preceded by the live album K Bye for Now  (2019), which was released a year prior and features audio recordings from said tour.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/b/ba/Ariana_Grande_Excuse_Me%2C_I_Love_You.jpg',
		thumbnail_width: 283,
		thumbnail_height: 354
	},
	{
		title: "Sylvie's Love",
		year: 2020,
		cast: [
			'Tessa Thompson',
			'Nnamdi Asomugha',
			'Ryan Michelle Bathe',
			'Aja Naomi King',
			'Eva Longoria'
		],
		genres: ['Drama', 'Romance'],
		href: 'Sylvie%27s_Love',
		extract:
			"Sylvie's Love is a 2020 American romantic drama film, written, directed and produced by Eugene Ashe. The film stars Tessa Thompson, Nnamdi Asomugha, Ryan Michelle Bathe, Regé-Jean Page, Aja Naomi King, and Eva Longoria.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Sylvie%27s_Love.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Wonder Woman 1984',
		year: 2020,
		cast: [
			'Gal Gadot',
			'Chris Pine',
			'Kristen Wiig',
			'Pedro Pascal',
			'Robin Wright',
			'Connie Nielsen'
		],
		genres: ['Superhero'],
		href: 'Wonder_Woman_1984',
		extract:
			'Wonder Woman 1984 is a 2020 American superhero film based on the DC character Wonder Woman. Produced by Warner Bros. Pictures, DC Films, Atlas Entertainment, and The Stone Quarry, and distributed by Warner Bros. Pictures, it is a follow-up of the 2017 film Wonder Woman and the ninth film in the DC Extended Universe (DCEU). Directed by Patty Jenkins and written by Jenkins, Geoff Johns, and Dave Callaham from a story by Johns and Jenkins, it stars Gal Gadot as Diana Prince / Wonder Woman, alongside Chris Pine, Kristen Wiig, Pedro Pascal, Robin Wright, and Connie Nielsen. Set in 1984 during the Cold War, the film follows Diana and her past love Steve Trevor as they face off against Maxwell Lord and Cheetah.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Wonder_Woman_1984_poster.png',
		thumbnail_width: 256,
		thumbnail_height: 379
	},
	{
		title: 'Soul',
		year: 2020,
		cast: [
			'Jamie Foxx',
			'Tina Fey',
			'Graham Norton',
			'Rachel House',
			'Alice Braga',
			'Richard Ayoade',
			'Phylicia Rashad',
			'Donnell Rawlings',
			'Questlove',
			'Angela Bassett',
			'Daveed Diggs',
			'Wes Studi',
			'Fortune Feimster',
			'Zenobia Shroff'
		],
		genres: ['Animated', 'Comedy', 'Drama'],
		href: 'Soul_(2020_film)',
		extract:
			'Soul is a 2020 American computer-animated comedy-drama film produced by Pixar Animation Studios for Walt Disney Pictures. It was directed by Pete Docter, co-directed by Kemp Powers, and produced by Dana Murray, from a screenplay by Docter, Powers, and Mike Jones. The film stars the voices of Jamie Foxx, Tina Fey, Graham Norton, Rachel House, Alice Braga, Richard Ayoade, Phylicia Rashad, Donnell Rawlings, Questlove, and Angela Bassett. It follows a pianist, Joe Gardner (Foxx), who is killed in an accident before his big break as a jazz musician and seeks to reunite his separated soul and body.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'We Can Be Heroes',
		year: 2020,
		cast: [
			'Priyanka Chopra Jonas',
			'Pedro Pascal',
			'YaYa Gosselin',
			'Boyd Holbrook',
			'Adriana Barraza',
			'Haley Reinhart',
			'Sung Kang',
			'Taylor Dooley',
			'Christian Slater'
		],
		genres: ['Superhero'],
		href: 'We_Can_Be_Heroes_(film)',
		extract:
			'We Can Be Heroes is a 2020 American superhero film written and directed by Robert Rodriguez. It is both a standalone and legacy sequel to the 2005 film The Adventures of Sharkboy and Lavagirl in 3-D. Rodriguez was also the cinematographer and editor of the film, which stars YaYa Gosselin, Lyon Daniels, Andy Walken, Hala Finley, Lotus Blossom, Dylan Henry Lau, Andrew Diaz, Isaiah Russel-Bailey, Akira Akbar, Nathan Blair, and Vivien Lyra Blair. It was released on December 25, 2020, by Netflix and received mixed reviews from critics. A sequel is in development.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/8/8b/We_Can_Be_Heroes_2020_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'News of the World',
		year: 2020,
		cast: ['Tom Hanks', 'Helena Zengel'],
		genres: ['Western'],
		href: 'News_of_the_World_(film)',
		extract:
			'News of the World is a 2020 American Western film co-written and directed by Paul Greengrass, based on the 2016 novel of the same name by Paulette Jiles, and starring Tom Hanks and Helena Zengel. The film follows an aging Civil War veteran who must return a young girl who was taken in by the Kiowa, and raised as one of them, to her last remaining family. She has lost both her birth and Kiowa families.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/94/News_of_the_World_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'One Night in Miami...',
		year: 2020,
		cast: [
			'Kingsley Ben-Adir',
			'Eli Goree',
			'Aldis Hodge',
			'Leslie Odom Jr.',
			'Lance Reddick',
			'Joaquina Kalukango',
			'Nicolette Robinson',
			'Beau Bridges',
			'Lance Reddick'
		],
		genres: ['Drama', 'War'],
		href: 'One_Night_in_Miami...',
		extract:
			"One Night in Miami... is a 2020 American drama film directed by Regina King with a screenplay by Kemp Powers, based on his 2013 stage play of the same name. The film is a fictionalized account of a real February 1964 meeting of Malcolm X, Muhammad Ali, Jim Brown, and Sam Cooke in a room at the Hampton House, celebrating Ali's surprise title win over Sonny Liston. It stars Kingsley Ben-Adir, Eli Goree, Aldis Hodge, and Leslie Odom Jr. in the lead roles, with Lance Reddick, Joaquina Kalukango, Nicolette Robinson, and Beau Bridges in supporting roles.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/87/One_Night_in_Miami_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Promising Young Woman',
		year: 2020,
		cast: [
			'Carey Mulligan',
			'Bo Burnham',
			'Alison Brie',
			'Clancy Brown',
			'Jennifer Coolidge',
			'Laverne Cox',
			'Connie Britton'
		],
		genres: ['Thriller'],
		href: 'Promising_Young_Woman',
		extract:
			'Promising Young Woman is a 2020 thriller film written, co-produced, and directed by Emerald Fennell in her feature directorial debut. It stars Carey Mulligan as a troubled young woman haunted by a traumatic past as she navigates balancing forgiveness and vengeance, with Bo Burnham, Alison Brie, Clancy Brown, Chris Lowell, Jennifer Coolidge, Laverne Cox, and Connie Britton in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/06/Promising_Young_Woman_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Pieces of a Woman',
		year: 2020,
		cast: [
			'Vanessa Kirby',
			'Shia LaBeouf',
			'Molly Parker',
			'Sarah Snook',
			'Iliza Shlesinger',
			'Benny Safdie',
			'Jimmie Fails',
			'Ellen Burstyn'
		],
		genres: ['Drama'],
		href: 'Pieces_of_a_Woman',
		extract:
			"Pieces of a Woman is a 2020 drama film directed by Kornél Mundruczó, from a screenplay by Kata Wéber. The film stars Vanessa Kirby, Shia LaBeouf, Molly Parker, Sarah Snook, Iliza Shlesinger, Benny Safdie, Jimmie Fails, and Ellen Burstyn as the family and associates of Martha (Kirby) involved in her traumatic childbirth, baby loss, and a subsequent court case against the midwife, Eva (Parker), whom Martha's mother Elizabeth (Burstyn) blames for the baby's death. Martin Scorsese and Sam Levinson served as executive producers, and the film was scored by Howard Shore.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Pieces_of_a_Woman.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Shadow in the Cloud',
		year: 2021,
		cast: [
			'Chloë Grace Moretz',
			'Taylor John Smith',
			'Beulah Koale',
			'Callan Mulvey',
			'Nick Robinson'
		],
		genres: ['Action', 'Horror'],
		href: 'Shadow_in_the_Cloud',
		extract:
			'Shadow in the Cloud is a 2020 action horror film directed by Roseanne Liang, from a screenplay by Liang and Max Landis, starring Chloë Grace Moretz, Beulah Koale, Taylor John Smith, Callan Mulvey and Nick Robinson. It follows a female flight officer on a top-secret mission in the Pacific during the Second World War, who after boarding a Boeing B-17 Flying Fortress, encounters an evil gremlin during the flight.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/0e/Shadow_in_the_Cloud.png',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'The White Tiger',
		year: 2021,
		cast: ['Adarsh Gourav', 'Rajkummar Rao', 'Priyanka Chopra Jonas'],
		genres: ['Drama'],
		href: 'The_White_Tiger_(2021_film)',
		extract:
			"The White Tiger is a 2021 drama film written and directed by Ramin Bahrani. The film stars Adarsh Gourav, Priyanka Chopra Jonas, and Rajkummar Rao. The film was produced by Mukul Deora and Ramin Bahrani, and executive produced by Chopra Jonas, Prem Akkaraju, and Ava DuVernay. An adaptation of Aravind Adiga's 2008 novel of the same name, the story is about Balram, who comes from a poor Indian village and uses his wit and cunning to escape from poverty.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/24/The_White_Tiger_film_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'Locked Down',
		year: 2021,
		cast: [
			'Anne Hathaway',
			'Chiwetel Ejiofor',
			'Stephen Merchant',
			'Mindy Kaling',
			'Lucy Boynton',
			'Dulé Hill',
			'Jazmyn Simon',
			'Mark Gatiss',
			'Claes Bang',
			'Ben Stiller',
			'Ben Kingsley'
		],
		genres: ['Comedy', 'Action', 'Romance'],
		href: 'Locked_Down_(film)',
		extract:
			'Locked Down is a 2021 American romantic comedy heist film directed by Doug Liman and written by Steven Knight. The film stars Anne Hathaway and Chiwetel Ejiofor, with Stephen Merchant, Mindy Kaling, Lucy Boynton, Mark Gatiss, Claes Bang, Ben Stiller, and Ben Kingsley in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/df/Locked_Down_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 386
	},
	{
		title: 'The Dig',
		year: 2021,
		cast: [
			'Carey Mulligan',
			'Ralph Fiennes',
			'Lily James',
			'Johnny Flynn',
			'Ben Chaplin',
			'Ken Stott',
			'Archie Barnes',
			'Monica Dolan'
		],
		genres: ['Drama'],
		href: 'The_Dig_(2021_film)',
		extract:
			'The Dig is a 2021 British drama film directed by Simon Stone, based on the 2007 novel of the same name by John Preston, which reimagines the events of the 1939 excavation of Sutton Hoo in Suffolk, England. It stars Carey Mulligan, Ralph Fiennes, Lily James, Johnny Flynn, Ben Chaplin, Ken Stott, Archie Barnes, and Monica Dolan.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/97/The_Dig_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Outside the Wire',
		year: 2021,
		cast: ['Anthony Mackie', 'Damson Idris', 'Emily Beecham', 'Michael Kelly', 'Pilou Asbæk'],
		genres: ['Action', 'Science Fiction'],
		href: 'Outside_the_Wire',
		extract:
			'Outside the Wire is a 2021 American science fiction action film directed by Mikael Håfström. It stars Anthony Mackie as an android officer who works with a drone pilot to stop a global catastrophe. Emily Beecham, Michael Kelly, and Pilou Asbæk also star. The film was released by Netflix on January 15, 2021, and received mixed reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b8/OutsideTheWire.jpeg',
		thumbnail_width: 263,
		thumbnail_height: 378
	},
	{
		title: 'The Marksman',
		year: 2021,
		cast: ['Liam Neeson', 'Katheryn Winnick', 'Juan Pablo Raba', 'Teresa Ruiz'],
		genres: ['Action', 'Drama'],
		href: 'The_Marksman_(2021_film)',
		extract:
			'The Marksman is a 2021 American action drama film directed by Robert Lorenz. The plot follows a brooding rancher and former Marine, living in an Arizona border town, who must help a young boy escape a Mexican drug cartel. Katheryn Winnick, Juan Pablo Raba, and Teresa Ruiz also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/35/TheMarksmanPoster.jpeg',
		thumbnail_width: 263,
		thumbnail_height: 378
	},
	{
		title: 'The Ultimate Playlist of Noise',
		year: 2021,
		cast: ['Keean Johnson', 'Madeline Brewer', 'Rya Kihlstedt', 'Ian Gomez', 'Bonnie Hunt'],
		genres: ['Comedy', 'Drama', 'Romance'],
		href: 'The_Ultimate_Playlist_of_Noise',
		extract:
			'The Ultimate Playlist of Noise is a 2021 American romantic comedy-drama film directed by Bennett Lasseter and written by Mitchell Winkie. The film stars Keean Johnson and Madeline Brewer.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/b/b1/The_Ultimate_Playlist_of_Noise_poster.jpeg',
		thumbnail_width: 184,
		thumbnail_height: 273
	},
	{
		title: 'American Skin',
		year: 2021,
		cast: [
			'Nate Parker',
			'Omari Hardwick',
			'Theo Rossi',
			'Shane Paul McGhie',
			'Milauna Jackson',
			'Beau Knapp'
		],
		genres: ['Drama'],
		href: 'American_Skin_(film)',
		extract:
			'American Skin is a 2019 American drama film written and directed by Nate Parker. It stars Parker, Omari Hardwick, Theo Rossi, Shane Paul McGhie, Milauna Jackson and Beau Knapp, and follows a Marine veteran who works as a school janitor who takes matters into his own hands after his son is killed by a police officer.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a3/American_Skin.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "Don't Tell a Soul",
		year: 2021,
		cast: ['Jack Dylan Grazer', 'Fionn Whitehead', 'Rainn Wilson', 'Mena Suvari'],
		genres: ['Thriller'],
		href: 'Don%27t_Tell_a_Soul_(film)',
		extract:
			"Don't Tell a Soul is a 2020 American thriller film written and directed by Alex McAulay, in his directorial debut. It stars Rainn Wilson as a security guard who gets trapped in a hole chasing two teens who stole $12,000, and must barter for his life; Mena Suvari also stars.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/94/DontTellASoul.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Our Friend',
		year: 2021,
		cast: ['Jason Segel', 'Dakota Johnson', 'Casey Affleck', 'Gwendoline Christie', 'Cherry Jones'],
		genres: ['Drama', 'Biography'],
		href: 'Our_Friend',
		extract:
			'Our Friend is a 2019 American biographical drama film directed by Gabriela Cowperthwaite and written by Brad Ingelsby, based on Matthew Teague\'s 2015 Esquire article "The Friend: Love Is Not a Big Enough Word". It stars Jason Segel, Dakota Johnson, and Casey Affleck.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Our_Friend_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "No Man's Land",
		year: 2021,
		cast: ['Jake Allyn', 'Frank Grillo', 'Jorge A. Jiménez', 'Andie MacDowell', 'George Lopez'],
		genres: ['Western'],
		href: 'No_Man%27s_Land_(2021_film)',
		extract:
			"No Man's Land is a 2021 American Western film, directed by Conor Allyn from a screenplay by Jake Allyn and David Barraza. It stars Frank Grillo, Jake Allyn, George Lopez, Andie MacDowell, Alex MacNicoll, Jorge A. Jiménez, and Andres Delgado.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/93/No_mans_land.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Born a Champion',
		year: 2021,
		cast: ['Sean Patrick Flanery', 'Dennis Quaid', 'Katrina Bowden'],
		genres: ['Drama', 'Martial Arts'],
		href: 'Born_a_Champion',
		extract:
			'Born a Champion is a 2021 American martial arts drama directed by Alex Ranarivelo and written by Sean Patrick Flanery and Ranarivelo. It stars Flanery, Dennis Quaid and Katrina Bowden. The film also features mixed martial arts fighter Edson Barboza, with appearances by Renzo Gracie and Mickey Gall.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/64/Born_a_champion.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Wrong Turn',
		year: 2021,
		cast: [
			'Charlotte Vega',
			'Adain Bradley',
			'Bill Sage',
			'Emma Dumont',
			'Dylan McTee',
			'Daisy Head',
			'Matthew Modine'
		],
		genres: ['Horror'],
		href: 'Wrong_Turn_(2021_film)',
		extract:
			'Wrong Turn, originally known as Wrong Turn: The Foundation, is a 2021 horror film directed by Mike P. Nelson and written by franchise creator Alan McElroy. The film, being a reboot, is the seventh installment of the Wrong Turn film series, stars Charlotte Vega, Adain Bradley, Emma Dumont, Dylan McTee, Daisy Head, Bill Sage, and Matthew Modine. It is an international co-production between the United States, Germany, and Canada.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5d/WrongTurn2021poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Penguin Bloom',
		year: 2021,
		cast: ['Naomi Watts', 'Andrew Lincoln', 'Jacki Weaver', 'Rachel House'],
		genres: ['Drama'],
		href: 'Penguin_Bloom',
		extract:
			"Penguin Bloom is a 2020 Australian drama film directed by Glendyn Ivin, from a screenplay by Shaun Grant and Harry Cripps, and is based on the book of the same name by Cameron Bloom and Bradley Trevor Greive. It stars Naomi Watts, Andrew Lincoln and Jacki Weaver. The book and film are based on a true story of Sam and Cameron Bloom's family and their interactions with an Australian magpie named 'Penguin'.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Penguin_Bloom_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 314
	},
	{
		title: 'The Little Things',
		year: 2021,
		cast: [
			'Denzel Washington',
			'Rami Malek',
			'Jared Leto',
			'Chris Bauer',
			'Michael Hyatt',
			'Terry Kinney',
			'Natalie Morales'
		],
		genres: ['Crime', 'Noir', 'Thriller'],
		href: 'The_Little_Things_(2021_film)',
		extract:
			'The Little Things is a 2021 American neo-noir psychological crime thriller film directed, written, and co-produced by John Lee Hancock and co-produced by Mark Johnson. Set in early 1990s Los Angeles, the film follows two detectives who investigate a string of murders, which lead them to a strange loner who may be the culprit.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/47/The_Little_Things_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Finding ʻOhana',
		year: 2021,
		cast: [
			'Kea Peahu',
			'Alex Aiono',
			'Lindsay Watson',
			'Owen Vaccaro',
			'Kelly Hu',
			'Branscombe Richmond',
			'Chris Parnell',
			'Marc Evan Jackson'
		],
		genres: ['Adventure', 'Family'],
		href: 'Finding_%CA%BBOhana',
		extract:
			'Finding ʻOhana is a 2021 American family adventure film by Jude Weng in her directorial debut and written by Christina Strain, based on the 1985 feature film The Goonies by Richard Donner, Steven Spielberg, and Chris Columbus. The film stars Kea Peahu, Alex Aiono, Lindsay Watson, Owen Vaccaro and Kelly Hu. It premiered on Netflix on January 29, 2021.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/32/Finding_%27Ohana_%282021%29.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Nomadland',
		year: 2021,
		cast: ['Frances McDormand', 'David Strathairn', 'Linda May', 'Charlene Swankie', 'Bob Wells'],
		genres: ['Drama'],
		href: 'Nomadland_(film)',
		extract:
			'Nomadland is a 2020 American drama film written, produced, edited and directed by Chloé Zhao. Based on the 2017 nonfiction book Nomadland: Surviving America in the Twenty-First Century by Jessica Bruder, it stars Frances McDormand as a widow who leaves to travel around the United States in her van as a nomad. David Strathairn also stars in a supporting role. A number of real-life nomads appear as fictionalized versions of themselves, including Linda May, Swankie and Bob Wells.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Nomadland_poster.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Malcolm & Marie',
		year: 2021,
		cast: ['Zendaya', 'John David Washington'],
		genres: ['Drama', 'Romance'],
		href: 'Malcolm_%26_Marie',
		extract:
			"Malcolm & Marie is a 2021 American black-and-white romantic drama film written, co-produced and directed by Sam Levinson. The film stars Zendaya and John David Washington and follows a writer-director and his girlfriend whose relationship is tested on the night of his latest film's premiere when revelations about themselves surface. The project was the first Hollywood feature to be entirely written, financed, and produced during the COVID-19 pandemic, with filming taking place in secret in June and July 2020.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Malcolm_and_Marie_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Palmer',
		year: 2021,
		cast: ['Justin Timberlake', 'Juno Temple', 'Alisha Wainwright', 'June Squibb', 'Ryder Allen'],
		genres: ['Drama'],
		href: 'Palmer_(film)',
		extract:
			'Palmer is a 2021 American drama film directed by Fisher Stevens and written by Cheryl Guerriero. The film stars Justin Timberlake, Juno Temple, Alisha Wainwright, June Squibb, and Ryder Allen. Palmer was digitally released by Apple TV+ on January 29, 2021. The film received mixed reviews from critics, who praised the performances and themes though noted its familiarity.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/e/e8/Palmer_%28Official_Film_Poster%29.png',
		thumbnail_width: 220,
		thumbnail_height: 330
	},
	{
		title: 'Falling',
		year: 2021,
		cast: [
			'Viggo Mortensen',
			'Lance Henriksen',
			'Terry Chen',
			'Sverrir Gudnason',
			'Hannah Gross',
			'Laura Linney'
		],
		genres: ['Drama'],
		href: 'Falling_(2020_film)',
		extract:
			"Falling is a 2020 drama film written and directed by Viggo Mortensen in his feature directorial debut. The film stars Mortensen as John Peterson, a middle-aged gay man whose homophobic father Willis starts to exhibit symptoms of dementia, forcing him to sell the family farm and move to Los Angeles to live with John and his husband Eric. The film's cast also includes Sverrir Gudnason, Laura Linney, Hannah Gross and David Cronenberg.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Falling_%282020%29_film_poster.jpeg',
		thumbnail_width: 230,
		thumbnail_height: 341
	},
	{
		title: 'Bliss',
		year: 2021,
		cast: ['Owen Wilson', 'Salma Hayek'],
		genres: ['Drama'],
		href: 'Bliss_(2021_film)',
		extract:
			'Bliss is a 2021 American drama film written and directed by Mike Cahill. It stars Owen Wilson and Salma Hayek, and follows a middle-aged man (Wilson), recently divorced and estranged, who suffers a psychotic break when he is fired from an unhappy job. Befriended by a homeless woman (Hayek), he gradually falls deeper into what appears to be drug addiction. He struggles to discern reality from fantasy. The viewer is left to question whether he is actually caught up in a layer-upon-layer simulation or whether he is experiencing drug-induced psychosis.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/89/Bliss_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Little Fish',
		year: 2021,
		cast: ['Olivia Cooke', "Jack O'Connell", 'Raúl Castillo', 'Soko'],
		genres: ['Drama', 'Science Fiction', 'Romance'],
		href: 'Little_Fish_(2021_film)',
		extract:
			"Little Fish is a 2020 American science fiction romantic drama film directed by Chad Hartigan and written by Mattson Tomlin, based on the 2011 short story of the same name by Aja Gabel. It stars Olivia Cooke, Jack O'Connell, Raúl Castillo, and Soko.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Little_Fish_2021_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Son of the South',
		year: 2021,
		cast: ['Lucas Till', 'Lucy Hale', 'Cedric the Entertainer', 'Brian Dennehy'],
		genres: ['Drama', 'Historical', 'Biography'],
		href: 'Son_of_the_South_(film)',
		extract:
			"Son of the South is a 2020 American biographical historical drama film, written and directed by Barry Alexander Brown. Based on Bob Zellner's autobiography, The Wrong Side of Murder Creek: A White Southerner in the Freedom Movement, it stars Lucas Till, Lex Scott Davis, Lucy Hale, Jake Abel, Shamier Anderson, Julia Ormond, Cedric the Entertainer and Brian Dennehy in his final film role. Spike Lee serves as an executive producer.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/ce/SonoftheSouth2020.png',
		thumbnail_width: 254,
		thumbnail_height: 377
	},
	{
		title: 'PVT Chat',
		year: 2021,
		cast: ['Julia Fox', 'Nikki Belfiglio', 'Austin Brown', 'Peter Vack'],
		genres: ['Drama', 'Erotic'],
		href: 'PVT_Chat',
		extract:
			'PVT Chat is a 2020 erotic drama film, written and directed by Ben Hozie. It stars Peter Vack as an online gambler who becomes obsessed with a cam girl played by Julia Fox. PVT Chat premiered at the Fantasia International Film Festival on August 21, 2020.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a8/Pvt_chat.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Music',
		year: 2021,
		cast: ['Kate Hudson', 'Leslie Odom Jr.', 'Maddie Ziegler'],
		genres: ['Drama', 'Musical'],
		href: 'Music_(2021_film)',
		extract:
			"Music is a 2021 American musical drama film directed by singer-songwriter Sia. The film was co-written by Sia and Dallas Clayton, and stars Kate Hudson, Leslie Odom Jr. and Maddie Ziegler. It marks Sia's feature film directorial debut. The film follows Zu, a newly sober drug dealer who becomes the sole guardian of her half-sister Music, a teenage non-verbal autistic girl.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Music_%282021_film%29.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Judas and the Black Messiah',
		year: 2021,
		cast: [
			'Daniel Kaluuya',
			'Lakeith Stanfield',
			'Jesse Plemons',
			'Dominique Fishback',
			'Ashton Sanders',
			'Darrell Britt-Gibson',
			'Lil Rel Howery',
			'Algee Smith',
			'Dominique Thorne',
			'Martin Sheen'
		],
		genres: ['Crime', 'Drama', 'Biography'],
		href: 'Judas_and_the_Black_Messiah',
		extract:
			"Judas and the Black Messiah is a 2021 biographical crime drama film about the betrayal of Fred Hampton, chairman of the Illinois chapter of the Black Panther Party in late-1960s Chicago, by William O'Neal, an FBI informant. Jesse Plemons, Dominique Fishback, Ashton Sanders, Darrell Britt-Gibson, Lil Rel Howery, Algee Smith, Dominique Thorne, and Martin Sheen also star. The film is directed and produced by Shaka King, who wrote the screenplay with Will Berson, based on a story by the pair and Kenny and Keith Lucas.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/5/55/Judas_and_the_Black_Messiah_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Mauritanian',
		year: 2021,
		cast: [
			'Jodie Foster',
			'Tahar Rahim',
			'Shailene Woodley',
			'Zachary Levi',
			'Benedict Cumberbatch'
		],
		genres: ['Drama', 'Legal'],
		href: 'The_Mauritanian',
		extract:
			"The Mauritanian is a 2021 legal drama film based on the memoir of Mohamedou Ould Slahi, a Mauritanian man who was held for fourteen years without charge in the Guantanamo Bay detention camp, a United States military prison. The film was directed by Kevin Macdonald based on a screenplay written by M.B. Traven, Rory Haines, and Sohrab Noshirvani, adapted from Slahi's 2015 memoir Guantánamo Diary. It stars Tahar Rahim as Slahi, and also features Jodie Foster, Shailene Woodley, Benedict Cumberbatch, and Zachary Levi in supporting roles.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/53/The_Mauritanian_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Breaking News in Yuba County',
		year: 2021,
		cast: [
			'Allison Janney',
			'Mila Kunis',
			'Awkwafina',
			'Regina Hall',
			'Wanda Sykes',
			'Juliette Lewis',
			'Samira Wiley',
			'Matthew Modine',
			'Ellen Barkin'
		],
		genres: ['Comedy'],
		href: 'Breaking_News_in_Yuba_County',
		extract:
			'Breaking News in Yuba County is a 2021 American black comedy film directed and co-produced by Tate Taylor, from a screenplay written by Amanda Idoko. The film stars an ensemble cast that includes Allison Janney, Mila Kunis, Awkwafina, Regina Hall, Wanda Sykes, Juliette Lewis, Samira Wiley, Jimmi Simpson, Clifton Collins Jr., Bridget Everett, Dominic Burgess, Keong Sim, Chris Lowell, Matthew Modine and Ellen Barkin.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/62/Breaking_News_in_Yuba_County.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Barb and Star Go to Vista Del Mar',
		year: 2021,
		cast: ['Kristen Wiig', 'Annie Mumolo', 'Jamie Dornan', 'Damon Wayans Jr.'],
		genres: ['Comedy'],
		href: 'Barb_and_Star_Go_to_Vista_Del_Mar',
		extract:
			'Barb and Star Go to Vista Del Mar is a 2021 American comedy film directed by Josh Greenbaum, from a screenplay by Kristen Wiig and Annie Mumolo, who also star. Originally scheduled for a 2020 release, due to the COVID-19 pandemic, the film was pushed back and released in the United States by Lionsgate via VOD on February 12, 2021. The film received generally positive reviews from critics.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/0/05/Barb_and_Star_Go_to_Vista_Del_Mar.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Minari',
		year: 2021,
		cast: [
			'Steven Yeun',
			'Han Ye-ri',
			'Alan Kim',
			'Noel Kate Cho',
			'Scott Haze',
			'Youn Yuh-jung',
			'Will Patton'
		],
		genres: ['Drama'],
		href: 'Minari_(film)',
		extract:
			"Minari is a 2020 American drama film written and directed by Lee Isaac Chung. It stars Steven Yeun, Han Ye-ri, Alan Kim, Noel Kate Cho, Youn Yuh-jung, and Will Patton. A semi-autobiographical take on Chung's upbringing, the plot follows a family of South Korean immigrants who try to make it in the rural United States during the 1980s.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Minari_%28film%29.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'To All the Boys: Always and Forever',
		year: 2021,
		cast: [
			'Lana Condor',
			'Noah Centineo',
			'Jordan Fisher',
			'Holland Taylor',
			'Sarayu Blue',
			'John Corbett'
		],
		genres: ['Comedy', 'Teen', 'Romance'],
		href: 'To_All_the_Boys:_Always_and_Forever',
		extract:
			"To All the Boys: Always and Forever is a 2021 American teen romantic comedy film directed by Michael Fimognari and starring Lana Condor and Noah Centineo. The film is based on Jenny Han's 2017 novel Always and Forever, Lara Jean and is a sequel to To All the Boys: P.S. I Still Love You (2020), and the third and final installment in the To All the Boys film series. It was released on February 12, 2021, by Netflix.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/d/d0/To_all_the_boys_always_and_forever.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The World to Come',
		year: 2021,
		cast: ['Katherine Waterston', 'Vanessa Kirby', 'Christopher Abbott', 'Casey Affleck'],
		genres: ['Drama'],
		href: 'The_World_to_Come',
		extract:
			"The World to Come is a 2020 American drama film directed by Mona Fastvold, from a screenplay by Ron Hansen and Jim Shepard, based upon Shepard's story of the same name. It stars Katherine Waterston, Vanessa Kirby, Christopher Abbott and Casey Affleck, and follows two neighboring couples battling hardship and isolation in mid-19th century America.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8d/The_World_to_Come_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'French Exit',
		year: 2021,
		cast: [
			'Michelle Pfeiffer',
			'Lucas Hedges',
			'Tracy Letts',
			'Danielle Macdonald',
			'Imogen Poots'
		],
		genres: ['Comedy', 'Drama'],
		href: 'French_Exit_(2020_film)',
		extract:
			'French Exit is a 2020 black comedy-drama film directed by Azazel Jacobs, based on the novel of the same name by Patrick deWitt, who also wrote the screenplay. It tells the story of a Manhattan heiress who moves to Paris with her son with the little money they have left.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7c/French_Exit_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Land',
		year: 2021,
		cast: ['Robin Wright', 'Demián Bichir', 'Kim Dickens'],
		genres: ['Drama'],
		href: 'Land_(2021_film)',
		extract:
			'Land is a 2021 psychological drama film directed by Robin Wright in her feature directorial debut, from a screenplay by Jesse Chatham and Erin Dignam. It stars Wright, Demián Bichir and Kim Dickens. The film premiered at the 2021 Sundance Film Festival on January 31, and was released in the United States on February 12, 2021, by Focus Features. It received generally positive reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/43/LandFilmPoster.jpeg',
		thumbnail_width: 263,
		thumbnail_height: 378
	},
	{
		title: "Willy's Wonderland",
		year: 2021,
		cast: ['Nicolas Cage', 'Emily Tosta', 'Ric Reitz', 'Beth Grant'],
		genres: ['Action', 'Comedy', 'Horror'],
		href: 'Willy%27s_Wonderland',
		extract:
			"Willy's Wonderland is a 2021 American action comedy horror film directed by Kevin Lewis from a screenplay by G. O. Parsons. The film stars Nicolas Cage, who also served as producer, along with Emily Tosta, Ric Reitz, Chris Warner, Kai Kadlec, Christian Del Grosso, Caylee Cowan, Terayle Hill, Jonathan Mercedes, David Sheftell and Beth Grant. It follows a quiet drifter who is tricked into cleaning up an abandoned family entertainment center as he is stalked by eight murderous animatronic characters possessed by the souls of a cannibalistic killer and his seven psychotic acolytes.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Willys_wonderland.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Map of Tiny Perfect Things',
		year: 2021,
		cast: ['Kathryn Newton', 'Kyle Allen', 'Al Madrigal'],
		genres: ['Comedy', 'Science Fiction', 'Romance'],
		href: 'The_Map_of_Tiny_Perfect_Things',
		extract:
			'The Map of Tiny Perfect Things is a 2021 American science fiction romantic comedy film directed by Ian Samuels, from a screenplay by Lev Grossman, based on his 2016 short story of the same name. It stars Kathryn Newton and Kyle Allen as two teenagers stuck in a time loop.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/0/00/The_Map_of_Tiny_Perfect_Things_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Fear of Rain',
		year: 2021,
		cast: ['Katherine Heigl', 'Madison Iseman', 'Israel Broussard', 'Harry Connick Jr.'],
		genres: ['Thriller'],
		href: 'Fear_of_Rain',
		extract:
			'Fear of Rain is a 2021 American psychological thriller film written and directed by Castille Landon and starring Katherine Heigl, Madison Iseman, Israel Broussard, Eugenie Bondurant, and Harry Connick Jr.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/47/Fear_of_Rain_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'I Care a Lot',
		year: 2021,
		cast: [
			'Rosamund Pike',
			'Peter Dinklage',
			'Eiza González',
			'Chris Messina',
			'Dianne Wiest',
			'Isiah Whitlock Jr.'
		],
		genres: ['Comedy', 'Thriller'],
		href: 'I_Care_a_Lot',
		extract:
			'I Care a Lot is a 2020 American satirical black comedy thriller film written and directed by J Blakeson. The film stars Rosamund Pike, Peter Dinklage, Eiza González, Chris Messina, Macon Blair, Alicia Witt, and Damian Young, with Isiah Whitlock Jr. and Dianne Wiest. The film follows a con woman who makes a living as a court-appointed guardian, seizing the assets of vulnerable elderly people, including the mother of a dangerous gangster.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/86/I_Care_A_Lot_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Flora & Ulysses',
		year: 2021,
		cast: [
			'Matilda Lawler',
			'Alyson Hannigan',
			'Ben Schwartz',
			'Anna Deavere Smith',
			'Danny Pudi',
			'Benjamin Evan Ainsworth',
			'Janeane Garofalo',
			'Kate Micucci'
		],
		genres: ['Comedy', 'Drama', 'Superhero'],
		href: 'Flora_%26_Ulysses_(film)',
		extract:
			"Flora & Ulysses is a 2021 American superhero comedy-drama film directed by Lena Khan from a screenplay by Brad Copeland. It is based on the children's novel of the same name by Kate DiCamillo. The film stars Matilda Lawler, Alyson Hannigan, Ben Schwartz, Anna Deavere Smith, Danny Pudi, Benjamin Evan Ainsworth, Janeane Garofalo, and Kate Micucci while John Kassir provides the vocal effects of Ulysses.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Flora_and_Ulysses_Poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Silk Road',
		year: 2021,
		cast: [
			'Jason Clarke',
			'Nick Robinson',
			'Katie Aselton',
			'Jimmi Simpson',
			'Daniel David Stewart',
			'Darrell Britt-Gibson',
			'Lexi Rabe',
			'Will Ropp',
			'Paul Walter Hauser',
			'Alexandra Shipp'
		],
		genres: ['Crime', 'Thriller'],
		href: 'Silk_Road_(film)',
		extract:
			'Silk Road is a 2021 American crime thriller film, written for the screen and directed by Tiller Russell based on the Rolling Stone article "Dead End on Silk Road: Internet Crime Kingpin Ross Ulbricht\'s Big Fall" by David Kushner. The film stars Jason Clarke, Nick Robinson, Alexandra Shipp, Jimmi Simpson, Paul Walter Hauser, Darrell Britt-Gibson, and Will Ropp. It is based on the true story of Ross Ulbricht who develops a website on the Dark net, an act which attracts the attention of the FBI and DEA who send in federal agent Richard "Rick" Bowden, a fictional composite of real life DEA Agent Carl Force and US Secret Service Special Agent Shaun Bridges, both of whom were convicted of felonies related to theft of assets in the investigation of Ulbricht, to bring down Ross\' empire.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/81/Silk_Road_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Tom & Jerry',
		year: 2021,
		cast: [
			'Chloë Grace Moretz',
			'Michael Peña',
			'Colin Jost',
			'Rob Delaney',
			'Pallavi Sharda',
			'Jordan Bolger',
			'Patsy Ferran',
			'Nicky Jam',
			'Bobby Cannavale',
			'Lil Rel Howery',
			'Ken Jeong'
		],
		genres: ['Live Action', 'Animated', 'Comedy'],
		href: 'Tom_%26_Jerry_(2021_film)',
		extract:
			"Tom & Jerry is a 2021 American live-action/computer-animated slapstick comedy film based on the titular cartoon characters of the same name created by William Hanna and Joseph Barbera, produced by Warner Animation Group and distributed by Warner Bros. Pictures. It is the second theatrical film based on the characters, following Tom and Jerry: The Movie (1992), and the third to animate them in the contemporary real world with humans, following Anchors Aweigh (1945) and Dangerous When Wet (1953), like the original cartoons. The film's story follows Tom enlisted to catch Jerry, before his presence ruins New York City's fanciest hotel and its planned wedding.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/1/14/Tom_%26_Jerry_%28Official_2021_Film_Poster%29.png',
		thumbnail_width: 256,
		thumbnail_height: 384
	},
	{
		title: 'The United States vs. Billie Holiday',
		year: 2021,
		cast: [
			'Andra Day',
			'Trevante Rhodes',
			'Garrett Hedlund',
			'Leslie Jordan',
			'Miss Lawrence',
			'Adriane Lenox',
			'Natasha Lyonne',
			'Rob Morgan',
			"Da'Vine Joy Randolph",
			'Evan Ross',
			'Tyler James Williams'
		],
		genres: ['Drama', 'Biography'],
		href: 'The_United_States_vs._Billie_Holiday',
		extract:
			"The United States vs. Billie Holiday is a 2021 American biographical drama film about singer Billie Holiday, based on the book Chasing the Scream: The First and Last Days of the War on Drugs by Johann Hari. Directed by Lee Daniels, the film stars Andra Day in the titular role, along with Trevante Rhodes, Garrett Hedlund, Leslie Jordan, Miss Lawrence, Adriane Lenox, Natasha Lyonne, Rob Morgan, Da'Vine Joy Randolph, Evan Ross, and Tyler James Williams.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/9/98/The_United_States_vs_Billie_Holliday.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Cherry',
		year: 2021,
		cast: ['Tom Holland', 'Ciara Bravo', 'Jack Reynor', 'Michael Rispoli', 'Jeff Wahlberg'],
		genres: ['Crime', 'Drama'],
		href: 'Cherry_(2021_film)',
		extract:
			"Cherry is a 2021 American crime drama film directed by Anthony and Joe Russo from a screenplay by Angela Russo-Otstot and Jessica Goldberg, based on the 2018 novel of the same name by Nico Walker. It stars Tom Holland as the titular character, alongside Ciara Bravo, Jack Reynor, and Jeff Wahlberg. The film follows the life of Cherry, from a college student to a PTSD-afflicted veteran who robs banks to pay for his and his wife's drug addiction.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/86/Cherry_2021_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Crisis',
		year: 2021,
		cast: [
			'Gary Oldman',
			'Armie Hammer',
			'Evangeline Lilly',
			'Greg Kinnear',
			'Michelle Rodriguez',
			'Luke Evans',
			'Lily-Rose Depp',
			'Scott Mescudi',
			'Martin Donovan'
		],
		genres: ['Crime', 'Thriller'],
		href: 'Crisis_(2021_film)',
		extract:
			'Crisis is a 2021 crime thriller film written, produced and directed by Nicholas Jarecki. The film’s ensemble cast includes Gary Oldman, Armie Hammer, Evangeline Lilly, Greg Kinnear, Michelle Rodriguez, Luke Evans, Lily-Rose Depp, Kid Cudi, and Martin Donovan.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/30/Crisis_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "Billie Eilish: The World's a Little Blurry",
		year: 2021,
		cast: ['Billie Eilish', "Finneas O'Connell", 'Maggie Baird', "Patrick O'Connell"],
		genres: ['Documentary'],
		href: 'Billie_Eilish:_The_World%27s_a_Little_Blurry',
		extract:
			'Billie Eilish: The World\'s a Little Blurry is a 2021 American documentary film directed by R. J. Cutler and centered around singer-songwriter Billie Eilish. The film details Eilish\'s rise to fame since the release of her 2016 single "Ocean Eyes" and the creative process behind Eilish\'s debut studio album When We All Fall Asleep, Where Do We Go? (2019), with the title referencing a lyric from the album track "Ilomilo". The film was released in select theaters via Neon and on Apple TV+ on February 26, 2021.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/d/d9/Billie_Eilish_-_The_World%27s_a_Little_Blurry.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Vigil',
		year: 2021,
		cast: ['Dave Davis', 'Menashe Lustig', 'Malky Goldman', 'Fred Melamed', 'Lynn Cohen'],
		genres: ['Horror', 'Supernatural'],
		href: 'The_Vigil_(2019_film)',
		extract:
			'The Vigil is a 2019 American supernatural horror film written and directed by Keith Thomas in his feature directorial debut. It stars Dave Davis, Menashe Lustig, Malky Goldman, Fred Melamed and Lynn Cohen, and follows a young man who is tasked with keeping vigil over a deceased member of his former Orthodox Jewish community, only to be targeted by a malevolent spirit known as a Mazzik. Jason Blum serves as an executive producer through his Blumhouse Productions banner.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/2/2e/The_Vigil_%282019%29_international_release_poster.jpg',
		thumbnail_width: 245,
		thumbnail_height: 327
	},
	{
		title: 'Moxie',
		year: 2021,
		cast: [
			'Hadley Robinson',
			'Lauren Tsai',
			'Patrick Schwarzenegger',
			'Hico Hiraga',
			'Sydney Park',
			'Josephine Langford',
			'Clark Gregg',
			'Ike Barinholtz',
			'Amy Poehler',
			'Marcia Gay Harden'
		],
		genres: ['Comedy', 'Drama'],
		href: 'Moxie_(film)',
		extract:
			'Moxie, stylized as MOXiE! is a 2021 American comedy-drama film directed by Amy Poehler. Tamara Chestna and Dylan Meyer adapted the screenplay from the 2017 novel of the same name by Jennifer Mathieu. It stars Hadley Robinson, Alycia Pascual-Peña, Lauren Tsai, Patrick Schwarzenegger, Nico Hiraga, and Poehler. The film focuses on 16-year-old Vivian, who starts a feminist zine to empower the young women in her high school, as they contend with bullying, sexual harassment, and rape. The film was released on March 3, 2021 by Netflix and received mixed reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Moxie_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Coming 2 America',
		year: 2021,
		cast: [
			'Eddie Murphy',
			'Arsenio Hall',
			'Jermaine Fowler',
			'Leslie Jones',
			'Tracy Morgan',
			'KiKi Layne',
			'Shari Headley',
			'Teyana Taylor',
			'Wesley Snipes',
			'James Earl Jones'
		],
		genres: ['Comedy', 'Romance'],
		href: 'Coming_2_America',
		extract:
			'Coming 2 America is a 2021 American romantic comedy film that serves as a sequel to the 1988 film Coming to America starring Eddie Murphy and directed by Craig Brewer, from a screenplay by Kenya Barris, Barry W. Blaustein, and David Sheffield, and a story by Blaustein, Sheffield, and Justin Kanew, based on characters was created by Murphy. It co-stars Arsenio Hall, Jermaine Fowler, Leslie Jones, Tracy Morgan, KiKi Layne, Shari Headley, Teyana Taylor, Wesley Snipes, and James Earl Jones. Coming 2 America was the final film appearance of Louie Anderson before his death in 2022, who reprising his role as Maurice from the first film.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Coming_2_America_release_poster.jpg',
		thumbnail_width: 270,
		thumbnail_height: 338
	},
	{
		title: 'The SpongeBob Movie: Sponge on the Run',
		year: 2021,
		cast: [
			'Tom Kenny',
			'Awkwafina',
			'Matt Berry',
			'Snoop Dogg',
			'Bill Fagerbakke',
			'Clancy Brown',
			'Tiffany Haddish',
			'Carolyn Lawrence',
			'Mr. Lawrence',
			'Keanu Reeves',
			'Danny Trejo',
			'Reggie Watts'
		],
		genres: ['Live Action', 'Adventure', 'Animated', 'Comedy'],
		href: 'The_SpongeBob_Movie:_Sponge_on_the_Run',
		extract:
			"The SpongeBob Movie: Sponge on the Run is a 2020 American live-action/computer-animated adventure comedy film based on the animated television series SpongeBob SquarePants. Written and directed by series co-developer and former writer Tim Hill, who co-wrote the story with Jonathan Aibel and Glenn Berger, it is the first film in the franchise to be fully animated in stylized computer-generated imagery rather than traditional 2D animation. The regular voice cast of the series reprise their respective roles from the series and the previous films and including new characters performed by Awkwafina, Snoop Dogg, Tiffany Haddish, Keanu Reeves, Danny Trejo, and Reggie Watts. The film follows the origin of how SpongeBob met Gary the Snail, and SpongeBob's quest to rescue his pet after he is kidnapped. It is the third theatrical film based on the series, following the first in 2004 and second in 2015. The film is dedicated to creator Stephen Hillenburg, who died in 2018, and also served as an executive producer on the project.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/34/The_SpongeBob_Movie_-_Sponge_on_the_Run.png',
		thumbnail_width: 250,
		thumbnail_height: 375
	},
	{
		title: 'Raya and the Last Dragon',
		year: 2021,
		cast: [
			'Kelly Marie Tran',
			'Awkwafina',
			'Izaac Wang',
			'Gemma Chan',
			'Daniel Dae Kim',
			'Benedict Wong',
			'Sandra Oh',
			'Thalia Tran',
			'Lucille Soong',
			'Alan Tudyk'
		],
		genres: ['Action', 'Adventure', 'Animated', 'Fantasy'],
		href: 'Raya_and_the_Last_Dragon',
		extract:
			'Raya and the Last Dragon is a 2021 American computer-animated fantasy action-adventure film produced by Walt Disney Animation Studios and distributed by Walt Disney Studios Motion Pictures. The 59th film produced by the studio, it was directed by Don Hall and Carlos López Estrada, and produced by Osnat Shurer and Peter Del Vecho. The screenplay was written by Qui Nguyen and Adele Lim, both of whom also wrote the story with Hall, Estrada, Paul Briggs, John Ripa, Kiel Murray, and Dean Wellins, based on story ideas by Bradley Raymond and additional story contributions by Helen Kalafatic. Featuring the voices of Kelly Marie Tran, Awkwafina, Izaac Wang, Gemma Chan, Daniel Dae Kim, Benedict Wong, Sandra Oh, Thalia Tran, Lucille Soong, and Alan Tudyk, Raya and the Last Dragon is about the titular warrior princess, Raya (Tran). She seeks out the fabled last dragon (Awkwafina), hoping to restore the dragon gem that would bring back her father and banish the evil spirits known as the Druun from the land of Kumandra.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ea/Raya_and_the_Last_Dragon.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Chaos Walking',
		year: 2021,
		cast: [
			'Daisy Ridley',
			'Tom Holland',
			'Mads Mikkelsen',
			'Demián Bichir',
			'Cynthia Erivo',
			'Nick Jonas',
			'Ray McKinnon',
			'Kurt Sutter',
			'David Oyelowo'
		],
		genres: ['Action', 'Thriller', 'Science Fiction'],
		href: 'Chaos_Walking_(film)',
		extract:
			"Chaos Walking is a 2021 American dystopian science-fiction action-thriller film directed by Doug Liman and written by Patrick Ness and Christopher Ford. It is based on Ness's science fiction trilogy Chaos Walking, adapting its first book, 2008's The Knife of Never Letting Go. It stars Daisy Ridley, Tom Holland, Mads Mikkelsen, Demián Bichir, Cynthia Erivo, Nick Jonas and David Oyelowo. It follows a young man who lives in a dystopian world without women, where all living creatures can hear each other's thoughts in streams of images, words and sounds, called \"Noise\". When a woman crash-lands on the planet, he protects her from danger.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/63/Chaos_Walking_%28film%29.png',
		thumbnail_width: 220,
		thumbnail_height: 339
	},
	{
		title: 'Boss Level',
		year: 2021,
		cast: [
			'Frank Grillo',
			'Mel Gibson',
			'Naomi Watts',
			'Annabelle Wallis',
			'Ken Jeong',
			'Will Sasso',
			'Selina Lo',
			'Meadow Williams',
			'Michelle Yeoh'
		],
		genres: ['Action', 'Science Fiction'],
		href: 'Boss_Level',
		extract:
			'Boss Level is a 2020 American science fiction action film directed by Joe Carnahan and written by Carnahan and Chris and Eddie Borey, from a story by the Boreys. It stars Frank Grillo as a retired special forces soldier who tries to escape a never-ending time loop that results in his death. Mel Gibson, Naomi Watts and Michelle Yeoh co-star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/13/Boss_Level_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Boogie',
		year: 2021,
		cast: [
			'Taylor Takahashi',
			'Taylour Paige',
			'Jorge Lendeborg Jr.',
			'Bashar "Pop Smoke" Jackson'
		],
		genres: ['Drama', 'Sports'],
		href: 'Boogie_(2021_film)',
		extract:
			'Boogie is a 2021 American sports drama film written and directed by Eddie Huang in his directorial debut. It stars Taylor Takahashi, Taylour Paige, Pop Smoke, and Jorge Lendeborg Jr. The film marks the first and only acting film appearance by Pop Smoke before his death in February 2020. It was released on March 5, 2021, by Focus Features. The film received mixed reviews from critics and has grossed $4.3 million.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Boogie_poster.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Yes Day',
		year: 2021,
		cast: ['Jennifer Garner', 'Édgar Ramírez', 'Jenna Ortega'],
		genres: ['Comedy', 'Family'],
		href: 'Yes_Day',
		extract:
			"Yes Day is a 2021 American family comedy film directed by Miguel Arteta, from a screenplay and screen story by Justin Malen, based upon the children's book of the same name by Amy Krouse Rosenthal and Tom Lichtenheld. It stars Jennifer Garner, Édgar Ramírez, and Jenna Ortega.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/60/Yes_Day_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Long Weekend',
		year: 2021,
		cast: ['Finn Wittrock', 'Zoë Chao', 'Casey Wilson', 'Jim Rash', 'Damon Wayans Jr.'],
		genres: ['Comedy', 'Drama', 'Romance'],
		href: 'Long_Weekend_(2021_film)',
		extract:
			'Long Weekend is a 2021 American romantic comedy-drama film written and directed by Steve Basilone, starring Finn Wittrock, Zoë Chao, Damon Wayans Jr., Casey Wilson, Wendi McLendon-Covey, and Jim Rash. It tells the story of a struggling writer named Bart (Wittrock) who meets Vienna (Chao), an enigmatic woman who enters his life at the just the right time.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Long_Weekend_poster.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Cosmic Sin',
		year: 2021,
		cast: ['Bruce Willis', 'Frank Grillo', 'Brandon Thomas Lee', 'C.J. Perry'],
		genres: ['Action', 'Science Fiction'],
		href: 'Cosmic_Sin',
		extract:
			'Cosmic Sin is a 2021 American science fiction action film directed by Edward Drake. The film stars Bruce Willis, Frank Grillo, Brandon Thomas Lee, Corey Large, Perrey Reeves, C.J. Perry, Lochlyn Munro, and Costas Mandylor.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/04/Cosmic_sin.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Trust',
		year: 2021,
		cast: [
			'Victoria Justice',
			'Matthew Daddario',
			'Katherine McNamara',
			'Lucien Laviscount',
			'Ronny Chieng',
			'Lindsey Broad'
		],
		genres: ['Drama', 'Erotic', 'Romance'],
		href: 'Trust_(2021_film)',
		extract:
			"Trust is a 2021 American erotic romantic drama film directed by Brian DeCubellis, from a screenplay by Kristen Lazarian, K.S. Bruce, and DeCubellis, based on Lazarian's play Push. The film stars Victoria Justice, Matthew Daddario, Katherine McNamara, and Lucien Laviscount. The movie employs a non-linear narrative, with the story doubling back on itself as characters explain various ruses and deceptions.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/47/Trust_2021_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: "Zack Snyder's Justice League",
		year: 2021,
		cast: [
			'Ben Affleck',
			'Henry Cavill',
			'Amy Adams',
			'Gal Gadot',
			'Ray Fisher',
			'Jason Momoa',
			'Ezra Miller',
			'Willem Dafoe',
			'Jesse Eisenberg',
			'Jeremy Irons',
			'Diane Lane',
			'Connie Nielsen',
			'J. K. Simmons',
			'Ciarán Hinds'
		],
		genres: ['Superhero'],
		href: 'Zack_Snyder%27s_Justice_League',
		extract:
			"Zack Snyder's Justice League is the 2021 director's cut of the 2017 American superhero film Justice League, the fifth film set within the DC Extended Universe (DCEU) based on the team of the same name appearing in DC Comics publications. It is intended to match director Zack Snyder's original vision for the film, prior to his departure from the production and subsequent studio interference. The film follows Batman, Wonder Woman, Cyborg, Aquaman, The Flash, and a revived Superman as they form an alliance to stop the extradimensional New God Steppenwolf and his army of Parademons from conquering Earth for his overlord Darkseid.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/60/Zack_Snyder%27s_Justice_League.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Courier',
		year: 2021,
		cast: [
			'Benedict Cumberbatch',
			'Merab Ninidze',
			'Rachel Brosnahan',
			'Jessie Buckley',
			'Angus Wright'
		],
		genres: ['Historical', 'Spy'],
		href: 'The_Courier_(2020_film)',
		extract:
			"The Courier is a 2020 historical spy film directed by Dominic Cooke and written by Tom O'Connor. The film stars Benedict Cumberbatch as Greville Wynne, and is based on the true story of a British businessman who was recruited by the Secret Intelligence Service to be a message conduit with a Russian spy source Oleg Penkovsky in the 1960s. Rachel Brosnahan, Jessie Buckley, and Angus Wright also star.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/55/The_Courier_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'City of Lies',
		year: 2021,
		cast: ['Johnny Depp', 'Forest Whitaker'],
		genres: ['Crime', 'Thriller'],
		href: 'City_of_Lies',
		extract:
			'City of Lies is a 2018 crime thriller film about the investigations by the Los Angeles Police Department of the murders of rappers Tupac Shakur and the Notorious B.I.G. It is directed by Brad Furman, with a screenplay by Christian Contreras based on the non-fiction book LAbyrinth by Randall Sullivan. The film stars Johnny Depp as retired LAPD detective Russell Poole and Forest Whitaker as journalist Jack Jackson, with Rockmond Dunbar and Neil Brown Jr. also starring.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/42/City_of_Lies_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Happily',
		year: 2021,
		cast: ['Joel McHale', 'Kerry Bishé', 'Stephen Root'],
		genres: ['Comedy', 'Thriller'],
		href: 'Happily_(film)',
		extract:
			'Happily is a 2021 American comedy thriller film written and directed by BenDavid Grabinski, in his directorial debut. It stars Joel McHale, Kerry Bishé, Stephen Root, Natalie Morales, Paul Scheer and Natalie Zea.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Happily_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Nobody',
		year: 2021,
		cast: [
			'Bob Odenkirk',
			'Connie Nielsen',
			'Aleksei Serebryakov',
			'RZA',
			'Michael Ironside',
			'Colin Salmon',
			'Christopher Lloyd'
		],
		genres: ['Action', 'Thriller'],
		href: 'Nobody_(2021_film)',
		extract:
			"Nobody is a 2021 American action thriller film directed by Ilya Naishuller and written by Derek Kolstad. The film, which stars Bob Odenkirk, Connie Nielsen, Aleksey Serebryakov, RZA, and Christopher Lloyd, follows a mild-mannered family man who, after his house is robbed, returns to his dangerous former life, making him the target of a vengeful crime lord. Odenkirk and David Leitch are among the film's producers.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Nobody_2021_Film_Poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 348
	},
	{
		title: 'Bad Trip',
		year: 2021,
		cast: ['Eric André', 'Lil Rel Howery', 'Tiffany Haddish'],
		genres: ['Comedy'],
		href: 'Bad_Trip_(film)',
		extract:
			"Bad Trip is a 2021 American hidden camera comedy film directed by Kitao Sakurai. The film follows two best friends who take a road trip from Florida to New York City so one of them can declare his love for his high school crush, all the while being chased by the other's criminal sister, whose car they have stolen for the trip.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/68/Bad_Trip_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Seventh Day',
		year: 2021,
		cast: ['Guy Pearce', 'Vadhir Derbez', 'Stephen Lang', 'Keith David', 'Robin Bartlett'],
		genres: ['Horror'],
		href: 'The_Seventh_Day_(2021_film)',
		extract:
			'The Seventh Day is a 2021 American horror film written and directed by Justin P. Lange. It stars Guy Pearce, Vadhir Derbez, Stephen Lang and Keith David.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/00/The_Seventh_Day_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'Senior Moment',
		year: 2021,
		cast: ['William Shatner', 'Jean Smart', 'Christopher Lloyd'],
		genres: ['Comedy', 'Drama', 'Romance'],
		href: 'Senior_Moment',
		extract:
			'Senior Moment is a 2021 American romantic comedy-drama film directed by Giorgio Serafini and starring William Shatner, Jean Smart and Christopher Lloyd.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/55/Senior_Moment_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'Godzilla vs. Kong',
		year: 2021,
		cast: [
			'Alexander Skarsgård',
			'Millie Bobby Brown',
			'Rebecca Hall',
			'Brian Tyree Henry',
			'Shun Oguri',
			'Eiza González',
			'Julian Dennison',
			'Lance Reddick',
			'Kyle Chandler',
			'Demián Bichir'
		],
		genres: [],
		href: 'Godzilla_vs._Kong',
		extract:
			'Godzilla vs. Kong is a 2021 American monster film directed by Adam Wingard. A sequel to Kong: Skull Island (2017) and Godzilla: King of the Monsters (2019); it is the fourth film in Legendary Pictures\' MonsterVerse, the 36th film in the Godzilla franchise, the 12th film in the King Kong franchise, and the fourth Godzilla film to be completely produced by an American film studio. The film stars Alexander Skarsgård, Millie Bobby Brown, Rebecca Hall, Brian Tyree Henry, Shun Oguri, Eiza González, Julian Dennison, Lance Reddick, Kyle Chandler, and Demián Bichir. In the film, Kong clashes with Godzilla after humans move the ape from Skull Island to the Hollow Earth, homeworld of the monsters known as "Titans", to retrieve a power source for a secret weapon intended to stop Godzilla\'s mysterious rampages.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/63/Godzilla_vs._Kong.png',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'Concrete Cowboy',
		year: 2021,
		cast: [
			'Idris Elba',
			'Caleb McLaughlin',
			'Jharrel Jerome',
			'Byron Bowers',
			'Lorraine Toussaint',
			'Clifford "Method Man" Smith'
		],
		genres: ['Drama'],
		href: 'Concrete_Cowboy',
		extract:
			'Concrete Cowboy is a 2020 American drama film directed by Ricky Staub from a screenplay by Staub and Dan Walser. The movie is based on the novel Ghetto Cowboy by Greg Neri, which was inspired by the real urban African-American horseriding culture of Philadelphia, and in particular, the Fletcher Street Urban Riding Club. The film stars Idris Elba, Caleb McLaughlin, Jharrel Jerome, Byron Bowers, Lorraine Toussaint, Jamil Prattis and Clifford "Method Man" Smith. While the film is completely fictional, several real members of the Fletcher Street riding community play supporting characters who give voice to real issues that the community faces.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/69/Concrete_cowboy.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Unholy',
		year: 2021,
		cast: [
			'Jeffrey Dean Morgan',
			'Katie Aselton',
			'William Sadler',
			'Cricket Brown',
			'Diogo Morgado',
			'Cary Elwes'
		],
		genres: ['Horror', 'Supernatural'],
		href: 'The_Unholy_(2021_film)',
		extract:
			'The Unholy is a 2021 American supernatural horror film written, produced, and directed by Evan Spiliotopoulos, based on the 1983 novel Shrine by James Herbert. Produced by Sam Raimi through his Ghost House Pictures banner, it stars Jeffrey Dean Morgan, Katie Aselton, William Sadler, Diogo Morgado, Cricket Brown, and Cary Elwes. The film follows on a disgraced journalist (Morgan) who discovers a series of seemingly divine miracles in a small New England town and uses them to resurrect his career, though those ‘miracles’ may have a much darker source.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b2/The_Unholy_2021_Film_Poster.png',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'Every Breath You Take',
		year: 2021,
		cast: ['Casey Affleck', 'Sam Claflin', 'Veronica Ferres', 'India Eisley', 'Michelle Monaghan'],
		genres: ['Thriller'],
		href: 'Every_Breath_You_Take_(film)',
		extract:
			"Every Breath You Take, also known as You Belong to Me, is a 2021 psychological thriller film directed by Vaughn Stein and written by David Murray. It stars Casey Affleck, Michelle Monaghan, Sam Claflin, and Veronica Ferres. It follows a psychiatrist whose life is disrupted after a client's brother who, after the client's death, insinuates himself into the psychiatrist's family.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/ab/Every_Breath_You_Take.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Shiva Baby',
		year: 2021,
		cast: [
			'Rachel Sennott',
			'Molly Gordon',
			'Polly Draper',
			'Danny Deferrari',
			'Fred Melamed',
			'Dianna Agron'
		],
		genres: ['Comedy'],
		href: 'Shiva_Baby',
		extract:
			'Shiva Baby is a 2020 comedy film written and directed by Emma Seligman, in her feature directorial debut. The film stars Rachel Sennott as Danielle, a directionless young bisexual Jewish woman who attends a shiva with her parents, Joel and Debbie. Other attendees include her successful ex-girlfriend Maya, and her sugar daddy Max with his wife Kim and their screaming baby. It also features Jackie Hoffman, Deborah Offner, Rita Gardner and Sondra James in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/38/Shiva_Baby_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Girl Who Believes in Miracles',
		year: 2021,
		cast: ['Mira Sorvino', 'Austyn Johnson', 'Kevin Sorbo', 'Peter Coyote'],
		genres: ['Drama'],
		href: 'The_Girl_Who_Believes_in_Miracles',
		extract:
			'The Girl Who Believes in Miracles is a 2021 American Christian drama film directed and produced by Richard Correll. The film stars Mira Sorvino, Peter Coyote, Austyn Johnson, and Kevin Sorbo. The Girl Who Believes in Miracles was released on April 2, 2021, produced by 120 dB Films, Gerson Productions, The Mustard Seed Production, and Trailmaker Productions. It was distributed by Atlas Distribution Company.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Girl_who_believes_in_miracles.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Believer',
		year: 2021,
		cast: [
			'Aidan Bristow',
			'Sophie Kargman',
			'Susan Wilder',
			'Lindsay Ginter',
			'Robbie Goldstein',
			'Billy Zane'
		],
		genres: ['Horror'],
		href: 'The_Believer_(2021_film)',
		extract:
			"The Believer is a 2021 American horror film written and directed by Shan Serafin. It stars Aidan Bristow, Sophie Kargman, Susan Wilder, Lindsay Ginter, Robbie Goldstein and Billy Zane. It runs for 91 minutes. The film is about a woman driven murderously insane by a mad doctor's strange alternative therapy.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Believer.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Dawn of the Beast',
		year: 2021,
		cast: [
			'Francesca Anderson',
			'Adrián Burke',
			'Chris Cimperman',
			'Ariella Mastroianni',
			'Roger Mayer'
		],
		genres: ['Horror'],
		href: 'Dawn_of_the_Beast',
		extract:
			'Dawn of the Beast is a 2021 American horror film written by Anna Shields and directed by Bruce Wemple. It stars Francesca Anderson, Adrián Burke, Chris Cimperman, Ariella Mastroianni, Roger Mayer and Anna Shields. The film is about graduate students searching for a bigfoot.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/74/Dawn_of_the_Beast.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Voyagers',
		year: 2021,
		cast: [
			'Tye Sheridan',
			'Lily-Rose Depp',
			'Fionn Whitehead',
			'Colin Farrell',
			'Chanté Adams',
			'Isaac Hempstead Wright',
			'Viveik Kalra',
			'Archie Madekwe',
			'Quintessa Swindell'
		],
		genres: ['Science Fiction'],
		href: 'Voyagers_(film)',
		extract:
			'Voyagers is a 2021 science fiction film written, co-produced and directed by Neil Burger. It stars Tye Sheridan, Lily-Rose Depp, Fionn Whitehead, Colin Farrell, Chanté Adams, Isaac Hempstead Wright, Viveik Kalra, Archie Renaux, Archie Madekwe, and Quintessa Swindell, and follows a group of teenage astronauts sent on a multi-generational mission in the year 2063 to colonize a habitable exoplanet amidst runaway climate change and declining habitability on Earth, who descend into paranoia and social conflict after discovering that their personalities and emotions were being artificially suppressed. It has been described as "Lord of the Flies in space". The film was theatrically released on April 9, 2021, by Lionsgate and was a box office bomb, grossing US$4.2 million against a $29 million production budget.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/32/Voyagers.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Thunder Force',
		year: 2021,
		cast: [
			'Melissa McCarthy',
			'Octavia Spencer',
			'Bobby Cannavale',
			'Pom Klementieff',
			'Taylor Mosby',
			'Melissa Leo',
			'Jason Bateman'
		],
		genres: ['Comedy', 'Superhero'],
		href: 'Thunder_Force_(film)',
		extract:
			'Thunder Force is a 2021 American superhero comedy film written and directed by Ben Falcone, and starring Melissa McCarthy, Octavia Spencer, Bobby Cannavale, Pom Klementieff, Taylor Mosby, with Melissa Leo, and Jason Bateman. It is the fifth collaboration between McCarthy and her husband Falcone, and follows two childhood friends who invent a way to become superheroes in a world where criminals have developed superpowers.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Thunder_Force_2021_movie_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Arlo the Alligator Boy',
		year: 2021,
		cast: [
			'Michael J. Woodard',
			'Mary Lambert',
			'Haley Tju',
			'Jonathan Van Ness',
			'Brett Gelman',
			'Tony Hale',
			'Annie Potts',
			'Flea',
			'Jennifer Coolidge',
			'Vincent Rodriguez III'
		],
		genres: ['Adventure', 'Animated', 'Musical'],
		href: 'Arlo_the_Alligator_Boy',
		extract:
			'Arlo the Alligator Boy is a 2021 American 2D animated adventure musical film directed by Ryan Crego in his directorial debut. The film is led by Michael J. Woodard and Mary Lambert in their debut acting roles as Arlo and Bertie respectively.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/10/Arlo_the_Alligator_Boy_Poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 363
	},
	{
		title: 'Monday',
		year: 2021,
		cast: ['Sebastian Stan', 'Denise Gough', 'Yorgos Pirpassopoulos', 'Dominique Tipper'],
		genres: ['Drama'],
		href: 'Monday_(2020_film)',
		extract:
			'Monday is a 2020 drama film directed by Argyris Papadimitropoulos, from a screenplay he co-wrote with Rob Hayes. It stars Sebastian Stan and Denise Gough.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Monday_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'In the Earth',
		year: 2021,
		cast: [
			'Joel Fry',
			'Reece Shearsmith',
			'Hayley Squires',
			'Ellora Torchia',
			'John Hollingworth',
			'Mark Monero'
		],
		genres: ['Horror', 'Science Fiction'],
		href: 'In_the_Earth',
		extract:
			'In the Earth is a 2021 science fiction horror film written and directed by Ben Wheatley. The film stars Joel Fry, Reece Shearsmith, Hayley Squires, Ellora Torchia, John Hollingworth and Mark Monero.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/be/In_the_Earth_movie_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Stowaway',
		year: 2021,
		cast: ['Anna Kendrick', 'Daniel Dae Kim', 'Shamier Anderson', 'Toni Collette'],
		genres: ['Drama', 'Science Fiction', 'Thriller'],
		href: 'Stowaway_(2021_film)',
		extract:
			'Stowaway is a 2021 science fiction thriller drama film directed by Joe Penna, who co-wrote the screenplay with Ryan Morrison. The film stars Anna Kendrick, Daniel Dae Kim, Shamier Anderson, and Toni Collette. A co-production of the United States and Germany, it premiered on Netflix in select countries on April 22, 2021.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/75/Stowaway_2021_Film_poster.png',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Mortal Kombat',
		year: 2021,
		cast: [
			'Lewis Tan',
			'Jessica McNamee',
			'Josh Lawson',
			'Tadanobu Asano',
			'Mehcad Brooks',
			'Ludi Lin',
			'Chin Han',
			'Joe Taslim',
			'Hiroyuki Sanada'
		],
		genres: ['Fantasy', 'Martial Arts'],
		href: 'Mortal_Kombat_(2021_film)',
		extract:
			'Mortal Kombat is a 2021 American martial arts fantasy film directed by Simon McQuoid, from a screenplay by Greg Russo and Dave Callaham, and a story by Russo and Oren Uziel. The film is based on the video game franchise of the same name and a reboot of the Mortal Kombat film series. The film stars Lewis Tan, Jessica McNamee, Josh Lawson, Tadanobu Asano, Mehcad Brooks, Ludi Lin, Chin Han, Max Huang, Joe Taslim, and Hiroyuki Sanada. The film follows Cole Young, a washed-up mixed martial arts fighter who is unaware of his hidden lineage or why the assassin Sub-Zero is hunting him down. Concerned for the safety of his family, he seeks out a clique of fighters that were chosen to defend Earthrealm against Outworld.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/37/Mortal_Kombat_%282021_film%29.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'The Mitchells vs. the Machines',
		year: 2021,
		cast: [
			'Abbi Jacobson',
			'Danny McBride',
			'Maya Rudolph',
			'Mike Rianda',
			'Olivia Colman',
			'Eric Andre',
			'Fred Armisen',
			'Beck Bennett',
			'John Legend',
			'Chrissy Teigen',
			'Blake Griffin',
			"Conan O'Brien"
		],
		genres: ['Animated', 'Comedy', 'Science Fiction'],
		href: 'The_Mitchells_vs._the_Machines',
		extract:
			"The Mitchells vs. the Machines is a 2021 computer-animated science fiction comedy film produced by Sony Pictures Animation. The film was directed by Mike Rianda and co-directed by Jeff Rowe, from a screenplay written by both of them. Phil Lord, Christopher Miller, and Kurt Albrecht served as producers. The film follows the dysfunctional Mitchell family that winds up having to save Earth from a global uprising of robots while on a road trip. It stars an ensemble voice cast that includes Abbi Jacobson, Danny McBride, Maya Rudolph, Mike Rianda, Eric André, Olivia Colman, Fred Armisen, Beck Bennett, John Legend, Chrissy Teigen, Blake Griffin, Conan O'Brien, and Doug the Pug.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/41/MitchellsMachinesPoster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Vanquish',
		year: 2021,
		cast: ['Ruby Rose', 'Morgan Freeman'],
		genres: ['Action', 'Thriller'],
		href: 'Vanquish_(film)',
		extract:
			'Vanquish is a 2021 American action thriller film directed by George Gallo. The film stars Morgan Freeman and Ruby Rose.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f5/VanquishPoster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Together Together',
		year: 2021,
		cast: ['Ed Helms', 'Patti Harrison', 'Tig Notaro'],
		genres: ['Comedy'],
		href: 'Together_Together',
		extract:
			'Together Together is a 2021 American comedy film written and directed by Nikole Beckwith. The film stars Ed Helms and Patti Harrison. The film had its world premiere at the Sundance Film Festival on January 31, 2021, and was released on April 23, 2021, by Bleecker Street.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Together_Together_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 322
	},
	{
		title: 'We Broke Up',
		year: 2021,
		cast: ['William Jackson Harper', 'Aya Cash'],
		genres: ['Comedy'],
		href: 'We_Broke_Up_(film)',
		extract:
			'We Broke Up is a 2021 American comedy film directed by Jeff Rosenberg and starring Aya Cash and William Jackson Harper.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1b/We_broke_up.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'The Deep Ones',
		year: 2021,
		cast: [
			'Gina La Piana',
			'Robert Miano',
			'Johann Urb',
			'Silvia Spross',
			'Jackie Debatin',
			'Nicolas Coster'
		],
		genres: ['Horror', 'Science Fiction'],
		href: 'The_Deep_Ones',
		extract:
			"The Deep Ones is a 2020 American horror science fiction film written and directed by Chad Ferrin and based on H.P. Lovecraft's 1931 novel The Shadow over Innsmouth. The film stars Gina La Piana, Robert Miano, Johann Urb, Silvia Spross, Jackie Debatin, Nicolas Coster and was produced by Chad Ferrin, Gina La Piana, Robert Miano and Jeff Olan. It was premiered at Sitges Film Festival on October 10, 2020. The film is about a couple that is recovering from a recent miscarriage encounters overly friendly locals and strange goings-on at a coastal getaway.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b1/The_Deep_Ones.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Things Heard & Seen',
		year: 2021,
		cast: ['Amanda Seyfried', 'James Norton', 'Natalia Dyer', 'F. Murray Abraham'],
		genres: ['Horror'],
		href: 'Things_Heard_%26_Seen',
		extract:
			'Things Heard & Seen is a 2021 American horror film written and directed by Shari Springer Berman and Robert Pulcini, based on the novel All Things Cease to Appear by Elizabeth Brundage. It stars Amanda Seyfried and James Norton. It was released on April 29, 2021, by Netflix, and received mostly negative reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Things_Heard_and_Seen_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Without Remorse',
		year: 2021,
		cast: [
			'Michael B. Jordan',
			'Jamie Bell',
			'Jodie Turner-Smith',
			'Lauren London',
			'Brett Gelman',
			'Jacob Scipio',
			'Jack Kesy',
			'Colman Domingo',
			'Guy Pearce'
		],
		genres: ['Action', 'Thriller'],
		href: 'Without_Remorse_(film)',
		extract:
			'Without Remorse is a 2021 American action thriller film based on the 1993 novel of the same name by Tom Clancy. It is directed by Stefano Sollima and written by Taylor Sheridan and Will Staples, and stars Michael B. Jordan, Jamie Bell, Jodie Turner-Smith, Luke Mitchell, Jack Kesy, Brett Gelman, Lauren London, Colman Domingo and Guy Pearce. The plot follows John Kelly, a U.S. Navy SEAL who sets out on a path of revenge after his pregnant wife and unit members are killed by Russian hitmen.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Without_Remorse_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'The Virtuoso',
		year: 2021,
		cast: ['Anson Mount', 'Abbie Cornish', 'Eddie Marsan', 'David Morse', 'Anthony Hopkins'],
		genres: ['Crime', 'Noir', 'Thriller'],
		href: 'The_Virtuoso_(film)',
		extract:
			'The Virtuoso is a 2021 American neo-noir crime thriller film directed and produced by Nick Stagliano. The film stars Anson Mount, Abbie Cornish, Eddie Marsan, Richard Brake, David Morse, and Anthony Hopkins. It follows a professional assassin who must track down and kill his latest target to satisfy an outstanding debt to his mentor.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6f/The_Virtuoso_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'Four Good Days',
		year: 2021,
		cast: ['Glenn Close', 'Mila Kunis', 'Stephen Root'],
		genres: ['Drama'],
		href: 'Four_Good_Days',
		extract:
			'Four Good Days is a 2020 American drama film, directed and produced by Rodrigo García, from a screenplay by García and Eli Saslow, based upon Saslow\'s 2016 Washington Post article "How\'s Amanda? A Story of Truth, Lies and an American Addiction". It stars Glenn Close, Mila Kunis, and Stephen Root.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Four_Good_Days_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Separation',
		year: 2021,
		cast: ['Rupert Friend', 'Mamie Gummer', 'Violet McGraw', 'Brian Cox'],
		genres: ['Horror', 'Supernatural'],
		href: 'Separation_(2021_film)',
		extract:
			'Separation is a 2021 American supernatural horror film directed by William Brent Bell, from a screenplay by Nick Amadeus and Josh Braun. It stars Rupert Friend, Mamie Gummer, Madeline Brewer, Violet McGraw, Simon Quarterman, and Brian Cox. The film follows a father who must take care of his daughter, after his wife, who filed for divorce, suddenly dies in an accident, as the two become haunted by a mysterious entity.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Separation_2021_Film_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'The Resort',
		year: 2021,
		cast: ["Brock O'Hurn", 'Avery Pascual', 'Michael Vlamis', 'Michelle Randolph', 'Bianca Haase'],
		genres: ['Horror'],
		href: 'The_Resort_(film)',
		extract:
			"The Resort is a 2021 American horror film written and directed by Taylor Chien. It stars Bianca Haase, Brock O'Hurn, Michael Vlamis, and Michelle Randolph. The movie was shot in 2019, and hip-hop artist Quavo helped produce it after being encouraged by main producer Will Meldman.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Resort_2021.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Wrath of Man',
		year: 2021,
		cast: [
			'Jason Statham',
			'Holt McCallany',
			'Jeffrey Donovan',
			'Josh Hartnett',
			'Laz Alonso',
			'Raúl Castillo',
			'DeObia Oparei',
			'Eddie Marsan',
			'Scott Eastwood',
			'Andy García'
		],
		genres: ['Action', 'Thriller'],
		href: 'Wrath_of_Man',
		extract:
			"Wrath of Man is a 2021 heist action thriller film directed by Guy Ritchie, from a script he co-wrote with Ivan Atkinson and Marn Davies, and is loosely based on 2004 French film Cash Truck written by Nicolas Boukhrief and Éric Besnard, and directed by Boukhrief. It is Ritchie's fourth directorial collaboration with lead actor Jason Statham, and first since Revolver (2005). Statham stars as H, a new cash truck driver in Los Angeles whose thwarting of a robbery leads to his skillset with guns and mysterious past being questioned. Holt McCallany, Jeffrey Donovan, Chris Reilly, Josh Hartnett, Laz Alonso, Raúl Castillo, DeObia Oparei, Eddie Marsan and Scott Eastwood also star.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/af/Wrath-of-man.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Monster',
		year: 2021,
		cast: [
			'Kelvin Harrison Jr.',
			'Jennifer Ehle',
			'Tim Blake Nelson',
			'Nasir "Nas" Jones',
			'Rakim "A$AP Rocky" Mayers',
			'Paul Ben-Victor',
			'John David Washington',
			'Jennifer Hudson',
			'Jeffrey Wright'
		],
		genres: ['Drama', 'Legal'],
		href: 'Monster_(2018_film)',
		extract:
			'Monster is a 2018 American legal drama film directed by Anthony Mandler, from a screenplay by Radha Blank, Cole Wiley, and Janece Shaffer, based on the novel of the same name by Walter Dean Myers. It stars Kelvin Harrison Jr., Jennifer Ehle, Tim Blake Nelson, Nasir "Nas" Jones, Rakim "A$AP Rocky" Mayers, Paul Ben-Victor, John David Washington, Jennifer Hudson, and Jeffrey Wright. Wright, Jones, and John Legend also serve as executive producers on the film.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Monster_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Paper Tigers',
		year: 2021,
		cast: ['Alain Uy', 'Ron Yuan', 'Mykel Shannon Jenkins'],
		genres: ['Action', 'Comedy', 'Martial Arts'],
		href: 'The_Paper_Tigers',
		extract:
			'The Paper Tigers is a 2020 American martial arts action comedy film written and directed by Bao Tran in his feature film directorial debut. It stars Alain Uy, Ron Yuan and Mykel Shannon Jenkins as three middle-aged former kung fu prodigies who set out to avenge the murder of their master. Yuji Okumoto, an actor on the film The Karate Kid Part II and the series Cobra Kai, served as a producer for the film.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/32/The_Paper_Tigers_%28poster%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'Mainstream',
		year: 2021,
		cast: ['Andrew Garfield', 'Maya Hawke', 'Nat Wolff', 'Johnny Knoxville', 'Jason Schwartzman'],
		genres: ['Comedy', 'Drama'],
		href: 'Mainstream_(film)',
		extract:
			'Mainstream is a 2020 American comedy-drama film directed by Gia Coppola, who co-wrote the screenplay with Tom Stuart. It stars Andrew Garfield, Maya Hawke, Nat Wolff, Johnny Knoxville and Jason Schwartzman.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/06/Mainstream_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Water Man',
		year: 2021,
		cast: [
			'David Oyelowo',
			'Rosario Dawson',
			'Lonnie Chavis',
			'Amiah Miller',
			'Alfred Molina',
			'Maria Bello'
		],
		genres: ['Drama'],
		href: 'The_Water_Man_(film)',
		extract:
			'The Water Man is a 2020 American drama film directed by David Oyelowo, in his feature directorial debut, from a screenplay by Emma Needell. The film stars Oyelowo, Rosario Dawson, Lonnie Chavis, Amiah Miller, Alfred Molina and Maria Bello. Oprah Winfrey serves as an executive producer via her revived Harpo Films banner.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6d/The_Water_Man_film_poster.png',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Here Today',
		year: 2021,
		cast: ['Billy Crystal', 'Tiffany Haddish', 'Penn Badgley', 'Laura Benanti', 'Louisa Krause'],
		genres: ['Comedy', 'Drama'],
		href: 'Here_Today_(film)',
		extract:
			'Here Today is a 2021 American comedy-drama film directed and produced by Billy Crystal, from a screenplay that he wrote with Alan Zweibel. It stars Crystal, Tiffany Haddish, Penn Badgley, Laura Benanti, and Louisa Krause. The film was released on May 7, 2021, by Stage 6 Films.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/66/Here_Today_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Above Suspicion',
		year: 2021,
		cast: ['Jack Huston', 'Emilia Clarke', 'Thora Birch', 'Johnny Knoxville'],
		genres: ['Crime', 'Thriller'],
		href: 'Above_Suspicion_(2019_film)',
		extract:
			"Above Suspicion is a 2019 American crime thriller film directed by Phillip Noyce, from a screenplay by Chris Gerolmo, based upon Joe Sharkey's non-fiction book of the same name revolving around the murder of Susan Smith. It stars Emilia Clarke, Jack Huston, Sophie Lowe, Austin Hébert, Karl Glusman, Chris Mulkey, Omar Miller, Kevin Dunn, Thora Birch and Johnny Knoxville.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/51/Above_Suspicion_Poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Benny Loves You',
		year: 2021,
		cast: [
			'Karl Holt',
			'Claire Cartwright',
			'David Wayman',
			'George Collie',
			'James Parsons',
			'Lydia Hourihan'
		],
		genres: ['Comedy', 'Horror'],
		href: 'Benny_Loves_You',
		extract:
			'Benny Loves You is a 2019 horror comedy film directed, written, and produced by Karl Holt. It stars Claire Cartwright, George Collie, James Parsons, David Wayman, Lydia Hourihan and Holt himself. The film premiered at the Buenos Aires Rojo Sangre on November 21, 2019.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/67/Benny_Loves_You.jpeg',
		thumbnail_width: 264,
		thumbnail_height: 377
	},
	{
		title: 'Oxygen',
		year: 2021,
		cast: ['Mélanie Laurent', 'Mathieu Amalric', 'Malik Zidi'],
		genres: ['Science Fiction', 'Thriller'],
		href: 'Oxygen_(2021_film)',
		extract:
			'Oxygen is a 2021 French-language science fiction thriller film, directed and produced by Alexandre Aja, from a screenplay by Christie LeBlanc. As part of an American-French co-production, it stars Mélanie Laurent, Mathieu Amalric, and Malik Zidi. The film was released by Netflix on May 12, 2021.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/de/Oxygen_2021_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Army of the Dead',
		year: 2021,
		cast: [
			'Dave Bautista',
			'Ella Purnell',
			'Omari Hardwick',
			'Ana de la Reguera',
			'Theo Rossi',
			'Matthias Schweighöfer',
			'Nora Arnezeder',
			'Hiroyuki Sanada',
			'Tig Notaro',
			'Raúl Castillo',
			'Huma Qureshi',
			'Garret Dillahunt'
		],
		genres: ['Action', 'Horror'],
		href: 'Army_of_the_Dead',
		extract:
			'Army of the Dead is a 2021 American zombie heist film directed by Zack Snyder from a screenplay he co-wrote with Shay Hatten and Joby Harold, based on a story he also created. The film features an ensemble cast consisting of Dave Bautista, Ella Purnell, Omari Hardwick, Ana de la Reguera, Theo Rossi, Matthias Schweighöfer, Nora Arnezeder, Hiroyuki Sanada, Tig Notaro, Raúl Castillo, Huma Qureshi, and Garret Dillahunt. It follows a group of mercenaries who plan a Las Vegas casino heist amid a zombie apocalypse.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/82/Army_of_the_Dead_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Those Who Wish Me Dead',
		year: 2021,
		cast: [
			'Angelina Jolie',
			'Nicholas Hoult',
			'Finn Little',
			'Aidan Gillen',
			'Jake Weber',
			'Medina Senghore',
			'Jon Bernthal'
		],
		genres: ['Action', 'Thriller'],
		href: 'Those_Who_Wish_Me_Dead',
		extract:
			"Those Who Wish Me Dead is a 2021 American action thriller film directed by Taylor Sheridan with a screenplay by Michael Koryta, Charles Leavitt, and Sheridan, based on Koryta's novel of the same name. The film follows a boy who witnesses the murder of his father and goes on the run with a smokejumper in the Montana wilderness to escape a pair of assassins hired to kill him. Jon Bernthal, Medina Senghore, and Jake Weber also appear.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Those_Who_Wish_Me_Dead.png',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'The Woman in the Window',
		year: 2021,
		cast: [
			'Amy Adams',
			'Gary Oldman',
			'Anthony Mackie',
			'Fred Hechinger',
			'Wyatt Russell',
			'Brian Tyree Henry',
			'Jennifer Jason Leigh',
			'Julianne Moore'
		],
		genres: ['Thriller'],
		href: 'The_Woman_in_the_Window_(2021_film)',
		extract:
			'The Woman in the Window is a 2021 American psychological thriller film directed by Joe Wright from a screenplay by Tracy Letts, based on the 2018 novel of the same name by pseudonymous author A. J. Finn. The film follows an agoraphobic woman who begins to spy on her new neighbors and is witness to a crime in their apartment. Anthony Mackie, Wyatt Russell, Brian Tyree Henry, and Jennifer Jason Leigh also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/98/The_Woman_in_the_Window.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Spiral',
		year: 2021,
		cast: ['Chris Rock', 'Max Minghella', 'Marisol Nichols', 'Samuel L. Jackson'],
		genres: ['Horror'],
		href: 'Spiral_(2021_film)',
		extract:
			'Spiral is a 2021 American horror film directed by Darren Lynn Bousman and written by Josh Stolberg and Peter Goldfinger. It is the ninth installment and spinoff of the Saw film series. The film stars Chris Rock, Max Minghella, Marisol Nichols, and Samuel L. Jackson, and follows police efforts to stop a Jigsaw copycat killer. The original creators of the series, James Wan and Leigh Whannell, as well as Rock and series veteran Kevin Greutert, serve as executive producers.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Spiral_Official_Poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 348
	},
	{
		title: 'Georgetown',
		year: 2021,
		cast: ['Christoph Waltz', 'Vanessa Redgrave', 'Annette Bening', 'Corey Hawkins'],
		genres: ['Crime', 'Drama'],
		href: 'Georgetown_(film)',
		extract:
			'Georgetown is a 2019 American crime drama film directed by Christoph Waltz and written by David Auburn. It is based on Franklin Foer\'s 2012 New York Times Magazine article "The Worst Marriage in Georgetown", which details the 2011 murder of 91-year-old socialite Viola Herms Drath by her much-younger second husband in the Georgetown neighborhood of Washington, D.C. Waltz stars alongside Vanessa Redgrave, Annette Bening and Corey Hawkins.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/35/Georgetown_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Finding You',
		year: 2021,
		cast: [
			'Rose Reid',
			'Jedidiah Goodacre',
			'Katherine McNamara',
			'Patrick Bergin',
			'Saoirse-Monica Jackson',
			'Judith Hoag',
			'Tom Everett Scott',
			'Vanessa Redgrave'
		],
		genres: ['Comedy', 'Erotic', 'Romance'],
		href: 'Finding_You_(film)',
		extract:
			"Finding You is a 2021 American coming-of-age romantic comedy, Christian-based film written and directed by Brian Baugh, based on the 2011 young adult novel There You'll Find Me by Jenny B. Jones. It stars Rose Reid, Jedidiah Goodacre and Katherine McNamara. It was released theatrically in the United States by Roadside Attractions on May 14, 2021.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/84/Finding_you.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Killing of Two Lovers',
		year: 2021,
		cast: [
			'Clayne Crawford',
			'Sepideh Moafi',
			'Chris Coy',
			'Avery Pizzuto',
			'Arri Graham',
			'Ezra Graham'
		],
		genres: ['Drama'],
		href: 'The_Killing_of_Two_Lovers',
		extract:
			'The Killing of Two Lovers is an 2020 American drama film, written, directed, produced, and edited by Robert Machoian. It stars Clayne Crawford, Sepideh Moafi, Chris Coy, Avery Pizzuto, Arri Graham and Ezra Graham.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ec/The_Killing_of_Two_Lovers.jpg',
		thumbnail_width: 220,
		thumbnail_height: 325
	},
	{
		title: '616 Wilford Lane',
		year: 2021,
		cast: ['John Littlefield', 'Eric Roberts', 'Alyson Gorske', 'Stevonte Hart', 'Eliza Roberts'],
		genres: ['Horror'],
		href: '616_Wilford_Lane',
		extract:
			'616 Wilford Lane is a 2021 horror film written and directed by Mark S. Allen and Dante Yore. It stars John Littlefield, Eric Roberts, Alyson Gorske, and Jessica Chancellor. The film is about a widower who relocates his two teen daughters to a charming town, and into their dream home, which quickly becomes a nightmare.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6f/616_Wilford_Lane.jpeg',
		thumbnail_width: 267,
		thumbnail_height: 373
	},
	{
		title: 'Dream Horse',
		year: 2021,
		cast: [
			'Toni Collette',
			'Damian Lewis',
			'Owen Teale',
			'Joanna Page',
			'Karl Johnson',
			'Steffan Rhodri',
			"Anthony O'Donnell",
			'Nicholas Farrell',
			'Siân Phillips'
		],
		genres: ['Comedy', 'Drama', 'Sports'],
		href: 'Dream_Horse',
		extract:
			"Dream Horse is a 2020 sports comedy-drama film directed by Euros Lyn from a screenplay by Neil McKay. The film stars Toni Collette, Damian Lewis, Owen Teale, Joanna Page, Karl Johnson, Steffan Rhodri, Anthony O'Donnell, Nicholas Farrell, and Siân Phillips, and follows the true story of Dream Alliance, a horse that raced in the Welsh Grand National. It had previously been the subject of the documentary, Dark Horse: The Incredible True Story of Dream Alliance.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Dream_Horse_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Blast Beat',
		year: 2021,
		cast: [
			'Moisés Arias',
			'Mateo Arias',
			'Daniel Dae Kim',
			'Kali Uchis',
			'Ashley Jackson',
			'Diane Guerrero',
			'Wilmer Valderrama'
		],
		genres: ['Dance', 'Drama'],
		href: 'Blast_Beat_(film)',
		extract:
			'Blast Beat is a 2020 American coming-of-age drama film that premiered on January 26, 2020, at the 2020 Sundance Film Festival. It is about two Colombian brothers in the US in 2000, written by Erick Castrillon and Esteban Arango and directed by Arango. It runs for 105 minutes and was acquired by Sony Pictures for distribution. It is in English and Spanish with English subtitles. There is a lot of "metal culture" and dancing in the film. It competed in the Sundance Dramatic Competition. It was released on May 21, 2021, by Vertical Entertainment.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/15/Blast_beat.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'A Quiet Place Part II',
		year: 2021,
		cast: [
			'Emily Blunt',
			'Cillian Murphy',
			'Millicent Simmonds',
			'Noah Jupe',
			'Djimon Hounsou',
			'John Krasinski'
		],
		genres: ['Horror'],
		href: 'A_Quiet_Place_Part_II',
		extract:
			'A Quiet Place Part II is a 2020 American post-apocalyptic horror film written and directed by John Krasinski. It is the sequel to the 2018 film A Quiet Place, following the family from the first film as they continue to navigate and survive in a post-apocalyptic world inhabited by blind aliens with an acute sense of hearing. Emily Blunt, Millicent Simmonds, and Noah Jupe reprise their roles from the first film, while Cillian Murphy, Djimon Hounsou, and Okieriete Onaodowan join the cast, with Krasinski returning from the first film in a new flashback sequence.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/02/A_Quiet_Place_Part_II.jpg',
		thumbnail_width: 250,
		thumbnail_height: 376
	},
	{
		title: 'Cruella',
		year: 2021,
		cast: [
			'Emma Stone',
			'Emma Thompson',
			'Joel Fry',
			'Paul Walter Hauser',
			'Emily Beecham',
			'Kirby Howell-Baptiste',
			'Mark Strong'
		],
		genres: ['Comedy', 'Crime'],
		href: 'Cruella_(film)',
		extract:
			"Cruella is a 2021 American crime comedy film based on the character Cruella de Vil from Dodie Smith's 1956 novel The Hundred and One Dalmatians. The film was directed by Craig Gillespie with a screenplay by Dana Fox and Tony McNamara, from a story by Aline Brosh McKenna, Kelly Marcel, and Steve Zissis. It is the third live-action adaptation in the 101 Dalmatians franchise, and serves as a reboot and an alternate origin story for the title character. Emma Stone stars as the title character, with Emma Thompson, Joel Fry, Paul Walter Hauser, Emily Beecham, Kirby Howell-Baptiste, and Mark Strong in supporting roles. Set in London during the punk rock movement of the 1970s, the film revolves around Estella Miller, an aspiring fashion designer, as she explores the path that leads her to become a notorious up-and-coming fashion designer known as Cruella de Vil.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Cruella_2021_film_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Plan B',
		year: 2021,
		cast: ['Kuhoo Verma', 'Victoria Moroles'],
		genres: ['Comedy'],
		href: 'Plan_B_(2021_film)',
		extract:
			'Plan B is a 2021 American coming-of-age comedy film directed by Natalie Morales from a screenplay by Prathi Srinivasan and Joshua Levy. The film stars Victoria Moroles and Kuhoo Verma. It is titled after the eponymous brand of emergency contraceptive, which plays a significant role in the films plot.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/60/Plan_B_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Spirit Untamed',
		year: 2021,
		cast: [
			'Isabela Merced',
			'Marsai Martin',
			'Mckenna Grace',
			'Julianne Moore',
			'Jake Gyllenhaal',
			'Walton Goggins',
			'Eiza González'
		],
		genres: ['Adventure', 'Animated'],
		href: 'Spirit_Untamed',
		extract:
			'Spirit Untamed is a 2021 American computer-animated adventure film produced by DreamWorks Animation and distributed by Universal Pictures. The film was directed by Elaine Bogan and co-directed by Ennio Torresan Jr., from a screenplay written by Aury Wallington and Kristin Hahn, making this the second theatrical film release of the Spirit franchise and is both a spin-off and a stand-alone sequel of the traditionally animated Spirit: Stallion of the Cimarron (2002) and loosely based on the characters from its Netflix animated spin-off television series Spirit Riding Free, developed by Wallington.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Spirit_untamed_xxlg.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Conjuring: The Devil Made Me Do It',
		year: 2021,
		cast: [
			'Patrick Wilson',
			'Vera Farmiga',
			"Ruairi O'Connor",
			'Sarah Catherine Hook',
			'Julian Hilliard'
		],
		genres: ['Horror', 'Supernatural'],
		href: 'The_Conjuring:_The_Devil_Made_Me_Do_It',
		extract:
			"The Conjuring: The Devil Made Me Do It is a 2021 American supernatural horror film directed by Michael Chaves, with a screenplay by David Leslie Johnson-McGoldrick from a story by Johnson-McGoldrick and James Wan. The film serves as a sequel to The Conjuring (2013) and The Conjuring 2 (2016), and as the eighth installment in The Conjuring Universe. Patrick Wilson and Vera Farmiga reprise their roles as paranormal investigators and authors Ed and Lorraine Warren, with Ruairi O'Connor, Sarah Catherine Hook, and Julian Hilliard also starring. Wan and Peter Safran return to produce the film, which is based on the trial of Arne Cheyenne Johnson, a murder trial that took place in 1981 Connecticut, in addition to The Devil in Connecticut, a book about the trial written by Gerald Brittle.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/e/e8/The_Conjuring_-_The_Devil_Made_Me_Do_It.png',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'Gully',
		year: 2021,
		cast: [
			'Jacob Latimore',
			'Charlie Plummer',
			'Jonathan Majors',
			'Kelvin Harrison Jr.',
			'Amber Heard',
			'Terrence Howard'
		],
		genres: ['Drama'],
		href: 'Gully_(film)',
		extract:
			'Gully is an 2019 American coming-of-age drama film, directed by Nabil Elderkin, from a screenplay by Marcus J. Guillory. It stars Jacob Latimore, Charlie Plummer, Jonathan Majors, Kelvin Harrison Jr., Amber Heard, and Terrence Howard.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/01/Gully_Poster_resized.jpg',
		thumbnail_width: 228,
		thumbnail_height: 285
	},
	{
		title: 'Flashback',
		year: 2021,
		cast: ["Dylan O'Brien", 'Maika Monroe', 'Hannah Gross', 'Emory Cohen', 'Keir Gilchrist'],
		genres: ['Mystery', 'Thriller'],
		href: 'Flashback_(2020_film)',
		extract:
			"Flashback, alternatively titled The Education of Fredrick Fitzell, is a 2020 Canadian mystery thriller film written and directed by Christopher MacBride. The film stars Dylan O'Brien, Hannah Gross and Maika Monroe. The film premiered at the 2020 Sitges Film Festival.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/e/ef/The-education-of-fredrick-fitzell-canadian-movie-poster-md.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Awake',
		year: 2021,
		cast: ['Gina Rodriguez', 'Jennifer Jason Leigh', 'Barry Pepper', 'Finn Jones', 'Gil Bellows'],
		genres: ['Science Fiction', 'Thriller'],
		href: 'Awake_(2021_film)',
		extract:
			'Awake is a 2021 American science fiction thriller film, directed by Mark Raso, from a screenplay he wrote alongside Joseph Raso. It stars Gina Rodriguez, Jennifer Jason Leigh, Barry Pepper, Finn Jones, Shamier Anderson, Ariana Greenblatt, Frances Fisher, Elias Edraki, Lucius Hoyos and Gil Bellows.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/4/4e/Awake_%282021_film%29_Official_Poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Infinite',
		year: 2021,
		cast: [
			'Mark Wahlberg',
			'Chiwetel Ejiofor',
			'Sophie Cookson',
			'Jason Mantzoukas',
			'Rupert Friend',
			'Toby Jones',
			"Dylan O'Brien"
		],
		genres: ['Action', 'Science Fiction'],
		href: 'Infinite_(film)',
		extract:
			"Infinite is a 2021 American science fiction action film directed by Antoine Fuqua. The screenplay, which was written by Ian Shorr, is based on a story by Todd Stein, which is itself adapted from D. Eric Maikranz's 2009 novel The Reincarnationist Papers. The film stars Mark Wahlberg, Chiwetel Ejiofor, Sophie Cookson, Jason Mantzoukas, Rupert Friend, Toby Jones and Dylan O'Brien.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/0/07/Infinite_%282021_film%29_release_poster.jpeg',
		thumbnail_width: 257,
		thumbnail_height: 388
	},
	{
		title: 'Peter Rabbit 2: The Runaway',
		year: 2021,
		cast: [
			'James Corden',
			'Rose Byrne',
			'Domhnall Gleeson',
			'Margot Robbie',
			'Elizabeth Debicki',
			'Lennie James',
			'David Oyelowo'
		],
		genres: ['Adventure', 'Comedy'],
		href: 'Peter_Rabbit_2:_The_Runaway',
		extract:
			"Peter Rabbit 2: The Runaway is a 2021 3D adventure comedy film directed and produced by Will Gluck, who co-wrote the screenplay with Patrick Burleigh. The film is a sequel to 2018's Peter Rabbit produced by Sony Pictures Animation, and is based on the stories of Peter Rabbit created by Beatrix Potter. James Corden reprises his role as the title character, alongside Rose Byrne, Domhnall Gleeson, and David Oyelowo in live-action roles, and the voices of Elizabeth Debicki, Lennie James, and Margot Robbie.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Peter_Rabbit_2_-_RT_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'In the Heights',
		year: 2021,
		cast: [
			'Anthony Ramos',
			'Corey Hawkins',
			'Leslie Grace',
			'Melissa Barrera',
			'Olga Merediz',
			'Daphne Rubin-Vega',
			'Gregory Diaz IV',
			'Stephanie Beatriz',
			'Dascha Polanco',
			'Jimmy Smits',
			'Lin-Manuel Miranda'
		],
		genres: ['Drama', 'Musical'],
		href: 'In_the_Heights_(film)',
		extract:
			'In the Heights is a 2021 American musical drama film directed by Jon M. Chu from a screenplay by Quiara Alegría Hudes based on the stage musical of the same name by Hudes and Lin-Manuel Miranda. The film stars Anthony Ramos, Corey Hawkins, Leslie Grace in her film debut, Melissa Barrera, Olga Merediz, Daphne Rubin-Vega, Gregory Diaz IV, and Jimmy Smits. The film follows a similar plot to the musical, telling the story of a corner in the predominantly Dominican Washington Heights neighborhood of Upper Manhattan in New York City, where every member of the community pursues their sueñitos for a better life.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6a/In_The_Heights_teaser_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Wish Dragon',
		year: 2021,
		cast: [
			'Jimmy Wong',
			'John Cho',
			'Constance Wu',
			'Natasha Liu Bordizzo',
			'Jimmy O. Yang',
			'Aaron Yoo',
			'Will Yun Lee',
			'Bobby Lee',
			'Nico Santos',
			'Ronny Chieng'
		],
		genres: ['Animated', 'Comedy', 'Fantasy'],
		href: 'Wish_Dragon',
		extract:
			"Wish Dragon is a 2021 computer-animated fantasy comedy film written and directed by Chris Appelhans and produced by Sony Pictures Animation and Tencent Pictures. The film stars Jimmy Wong, John Cho, Constance Wu, Natasha Liu Bordizzo, Jimmy O. Yang, Aaron Yoo, Will Yun Lee, and Ronny Chieng. Jackie Chan produced the film and voiced Cho's role in the Chinese Mandarin version.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Wish_Dragon.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'The Misfits',
		year: 2021,
		cast: [
			'Pierce Brosnan',
			'Rami Jaber',
			'Hermione Corfield',
			'Jamie Chung',
			'Mike d Angelo',
			'Tim Roth',
			'Nick Cannon'
		],
		genres: ['Action'],
		href: 'The_Misfits_(2021_film)',
		extract:
			'The Misfits is a 2021 American heist action film directed by Renny Harlin and written by Robert Henny and Kurt Wimmer. The film stars Pierce Brosnan, Rami Jaber, Hermione Corfield, Jamie Chung, Mike d Angelo, Tim Roth, Nick Cannon, and Qais Qandil. It was released in South Korea on June 3, 2021, and was released in the United States on June 11, 2021, by The Avenue Entertainment. The film was a box office disaster and received negative reviews.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/11/MisfitsTeaserPoster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 362
	},
	{
		title: '12 Mighty Orphans',
		year: 2021,
		cast: [
			'Luke Wilson',
			'Vinessa Shaw',
			'Wayne Knight',
			'Jake Austin Walker',
			'Jacob Lofland',
			'Levi Dylan',
			'Robert Duvall',
			'Martin Sheen'
		],
		genres: ['Sports'],
		href: '12_Mighty_Orphans',
		extract:
			'12 Mighty Orphans is a 2021 American sports film which was directed by Ty Roberts from a screenplay by Roberts, Lane Garrison and Kevin Meyer. It is based upon the non fiction book Twelve Mighty Orphans: The Inspiring True Story of the Mighty Mites Who Ruled Texas Football by Jim Dent. The book is based on the Masonic School for Orphans in Fort Worth, Texas.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/75/12_Mighty_Orphans_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'The House Next Door: Meet the Blacks 2',
		year: 2021,
		cast: [
			'Mike Epps',
			'Katt Williams',
			'Bresha Webb',
			'Lil Duval',
			'Zulay Henao',
			'Tyrin Turner',
			'Michael Blackson',
			'Andrew Bachelor',
			'Gary Owen',
			'Danny Trejo'
		],
		genres: ['Comedy', 'Horror', 'Satire'],
		href: 'The_House_Next_Door:_Meet_the_Blacks_2',
		extract:
			'The House Next Door: Meet the Blacks 2 is a 2021 American parody black comedy horror film directed by Deon Taylor, and written by Taylor and Corey Harrell. A sequel to the 2016 film Meet the Blacks, it stars Mike Epps and Katt Williams, with Bresha Webb, Lil Duval, Zulay Henao, Tyrin Turner, Michael Blackson, Andrew Bachelor, Gary Owen and Danny Trejo in supporting roles. In the film, which primarily satirizes Fright Night, Carl Black (Epps) moves his family back to his childhood home, encountering a mysterious new neighbor (Williams), a pimp who may be a vampire.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Meet_the_Blacks_2_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Queen Bees',
		year: 2021,
		cast: [
			'Ellen Burstyn',
			'James Caan',
			'Ann-Margret',
			'Jane Curtin',
			'Christopher Lloyd',
			'Loretta Devine'
		],
		genres: ['Comedy', 'Romance'],
		href: 'Queen_Bees_(film)',
		extract:
			'Queen Bees is a 2021 American romantic comedy film directed by Michael Lembeck. It features an ensemble cast, including Ellen Burstyn, James Caan, Ann-Margret, Christopher Lloyd, Jane Curtin, Loretta Devine, and Elizabeth Mitchell. It was released on June 11, 2021, by Gravitas Ventures, and received mixed reviews from critics. Screenwriter Donald Martin was nominated for a 2022 Humanitas Award for his screenplay.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/29/Queen_Bees_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 378
	},
	{
		title: "Hitman's Wife's Bodyguard",
		year: 2021,
		cast: [
			'Ryan Reynolds',
			'Samuel L. Jackson',
			'Salma Hayek',
			'Frank Grillo',
			'Richard E. Grant',
			'Antonio Banderas',
			'Morgan Freeman'
		],
		genres: ['Action', 'Comedy'],
		href: 'Hitman%27s_Wife%27s_Bodyguard',
		extract:
			"Hitman's Wife's Bodyguard is a 2021 American action comedy film directed by Patrick Hughes and written by Tom O'Connor and Brandon and Phillip Murphy. The film is a sequel to the 2017 film The Hitman's Bodyguard and features Ryan Reynolds, Samuel L. Jackson, Salma Hayek, and Richard E. Grant reprising their roles, with Frank Grillo, Antonio Banderas, and Morgan Freeman joining the cast. In the film, suspended bodyguard Michael Bryce (Reynolds) must once again team up with hitman Darius Kincaid (Jackson) and his wife (Hayek) to stop a madman (Banderas) from launching a terror attack on Europe.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/a/ab/Hitman%27s_Wife%27s_Bodyguard_%282021_film%29_theatrical_release_poster.jpg',
		thumbnail_width: 254,
		thumbnail_height: 392
	},
	{
		title: 'Luca',
		year: 2021,
		cast: [
			'Jacob Tremblay',
			'Jack Dylan Grazer',
			'Emma Berman',
			'Saverio Raimondo',
			'Maya Rudolph',
			'Marco Baricelli',
			'Jim Gaffigan',
			'Peter Sohn',
			'Lorenzo Crisci',
			'Marina Massironi',
			'Sandy Martin'
		],
		genres: ['Animated', 'Fantasy'],
		href: 'Luca_(2021_film)',
		extract:
			'Luca is a 2021 American computer-animated coming-of-age fantasy film produced by Pixar Animation Studios for Walt Disney Pictures. The film was directed by Enrico Casarosa, produced by Andrea Warren and written by Jesse Andrews and Mike Jones from a story by Casarosa, Andrews, and Simon Stephenson. It stars the voices of Jacob Tremblay and Jack Dylan Grazer, with Emma Berman, Saverio Raimondo, Marco Barricelli, Maya Rudolph, Jim Gaffigan, Peter Sohn, Lorenzo Crisci, Marina Massironi, and Sandy Martin in supporting roles. Set on the Italian Riviera, the film centers on Luca Paguro (Tremblay), a young sea monster boy with the ability to assume human form while on land, who explores the town of Portorosso with his new best friends, Alberto Scorfano and Giulia Marcovaldo (Berman), experiencing a life-changing summer adventure.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Fatherhood',
		year: 2021,
		cast: [
			'Kevin Hart',
			'Alfre Woodard',
			'Lil Rel Howery',
			'DeWanda Wise',
			'Anthony Carrigan',
			'Melody Hurd',
			'Paul Reiser'
		],
		genres: ['Comedy', 'Drama'],
		href: 'Fatherhood_(film)',
		extract:
			'Fatherhood is a 2021 American comedy-drama film directed by Paul Weitz from a screenplay by Weitz and Dana Stevens based on the 2011 memoir Two Kisses for Maddy: A Memoir of Loss and Love by Matthew Logelin. The film stars Kevin Hart, Alfre Woodard, Frankie R. Faison, Lil Rel Howery, DeWanda Wise, Anthony Carrigan, Melody Hurd, and Paul Reiser, and follows a new father who struggles to raise his daughter after the sudden death of his wife.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Fatherhood_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Birthday Cake',
		year: 2021,
		cast: [
			'Shiloh Fernandez',
			'Val Kilmer',
			'Ewan McGregor',
			'Ashley Benson',
			'Lorraine Bracco',
			'David Mazouz'
		],
		genres: ['Crime', 'Thriller'],
		href: 'The_Birthday_Cake_(film)',
		extract:
			'The Birthday Cake is a 2021 American crime thriller film directed by Jimmy Giannopoulos, from a screenplay by Diomedes Raul Bermudez, Shiloh Fernandez and Giannopoulos. It is the feature directorial debut for Giannopoulos, who previously directed short films and worked with Miley Cyrus, A$AP Rocky, Kid Cudi, and others on music projects. This is the last movie Paul Sorvino starred in at the time of his death on July 25, 2022.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/28/Birthday_cake_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Rita Moreno: Just a Girl Who Decided to Go for It',
		year: 2021,
		cast: [
			'Rita Moreno',
			'Eva Longoria',
			'George Chakiris',
			'Gloria Estefan',
			'Héctor Elizondo',
			'Karen Olivo',
			'Justina Machado',
			'Lin-Manuel Miranda',
			'Mitzi Gaynor',
			'Morgan Freeman',
			'Norman Lear',
			'Terrence McNally',
			'Whoopi Goldberg'
		],
		genres: ['Documentary'],
		href: 'Rita_Moreno:_Just_a_Girl_Who_Decided_to_Go_for_It',
		extract:
			'Rita Moreno: Just a Girl Who Decided to Go for It is a 2021 American documentary film, directed, produced, and edited by Mariem Pérez Riera. The film follows Rita Moreno, focusing on her early life and career. Norman Lear, Lin-Manuel Miranda, and Michael Kantor serve as executive producers.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/7/7c/Rita_Moreno_Just_a_Girl_Who_Decided_to_Go_for_It.jpg',
		thumbnail_width: 258,
		thumbnail_height: 386
	},
	{
		title: 'The Sparks Brothers',
		year: 2021,
		cast: ['Ron Mael', 'Russell Mael'],
		genres: ['Documentary'],
		href: 'The_Sparks_Brothers',
		extract:
			'The Sparks Brothers is a 2021 British-American documentary film about Ron and Russell Mael, members of the pop and rock duo Sparks. The film, directed by Edgar Wright, and produced by Wright, Nira Park, George Hencken and Laura Richardson, premiered at the 2021 Sundance Film Festival and was theatrically released the following summer. It received critical acclaim.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/2/23/The_Sparks_Brothers_Sundance_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'A Crime on the Bayou',
		year: 2021,
		cast: ['Gary Duncan', 'Richard Sobol'],
		genres: ['Documentary'],
		href: 'A_Crime_on_the_Bayou',
		extract:
			'A Crime on the Bayou is a 2020 American documentary film, directed and produced by Nancy Buirski. It follows a young teenager challenging the most powerful white supremacist in 1960s Louisiana with the help of a young attorney. John Legend serves as an executive producer under his Get Lifted Film Company banner.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/96/A_Crime_on_the_Bayou_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Good on Paper',
		year: 2021,
		cast: ['Iliza Shlesinger', 'Ryan Hansen', 'Margaret Cho', 'Rebecca Rittenhouse'],
		genres: ['Comedy', 'Romance'],
		href: 'Good_on_Paper',
		extract:
			'Good on Paper is a 2021 American romantic comedy film, directed by Kimmy Gatewood in her directorial debut, from a screenplay by Iliza Shlesinger. It stars Shlesinger, Ryan Hansen, Margaret Cho, and Rebecca Rittenhouse. The film was released on June 23, 2021, by Netflix.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Good_on_Paper_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'F9',
		year: 2021,
		cast: [
			'Vin Diesel',
			'John Cena',
			'Michelle Rodriguez',
			'Tyrese Gibson',
			'Chris "Ludacris" Bridges',
			'Jordana Brewster',
			'Nathalie Emmanuel',
			'Sung Kang',
			'Michael Rooker',
			'Helen Mirren',
			'Kurt Russell',
			'Charlize Theron'
		],
		genres: ['Action'],
		href: 'F9_(film)',
		extract:
			'F9 is a 2021 American action film directed by Justin Lin from a screenplay he co-wrote with Daniel Casey, based on a story by Lin, Casey, and Alfredo Botello. It is the sequel to The Fate of the Furious (2017), serving as the ninth main installment and the tenth full-length film in the Fast & Furious franchise. It stars Vin Diesel as Dominic Toretto, alongside Michelle Rodriguez, Tyrese Gibson, Chris "Ludacris" Bridges, John Cena, Nathalie Emmanuel, Jordana Brewster, Sung Kang, Michael Rooker, Helen Mirren, Kurt Russell, Charlize Theron, Thue Ersted Rasmussen and Anna Sawai. In the film, Toretto and the team come together to stop rogue covert operative Otto (Rasmussen) and cyberterrorist Cipher (Theron) from using a new weapons program.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2b/F9_film_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 348
	},
	{
		title: 'The Ice Road',
		year: 2021,
		cast: [
			'Liam Neeson',
			'Benjamin Walker',
			'Amber Midthunder',
			'Marcus Thomas',
			'Holt McCallany',
			'Martin Sensmeier',
			'Matt McCoy',
			'Matt Salinger',
			'Laurence Fishburne'
		],
		genres: ['Action', 'Thriller'],
		href: 'The_Ice_Road',
		extract:
			"The Ice Road is a 2021 American action thriller film written and directed by Jonathan Hensleigh. The film stars Liam Neeson as Mike McCann, and Laurence Fishburne as Jim Goldenrod with Benjamin Walker, Amber Midthunder, Marcus Thomas, Holt McCallany, Martin Sensmeier, Matt McCoy, and Matt Salinger in supporting roles. It marks Hensleigh's first film since 2011's Kill the Irishman. It follows a team of truck drivers on a dangerous mission over frozen lakes and winter roads to deliver a crucial component to save workers trapped in a collapsed diamond mine. The film was digitally released by Netflix in the United States and Canada, and by Amazon Prime Video in the United Kingdom on June 25, 2021. The film received mixed reviews from critics.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8f/TheIceRoad.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Werewolves Within',
		year: 2021,
		cast: [
			'Sam Richardson',
			'Milana Vayntrub',
			'George Basil',
			'Sarah Burns',
			'Michael Chernus',
			'Catherine Curtin',
			'Harvey Guillén',
			'Cheyenne Jackson',
			'Michaela Watkins',
			'Glenn Fleshler'
		],
		genres: ['Comedy', 'Horror', 'Mystery'],
		href: 'Werewolves_Within_(film)',
		extract:
			'Werewolves Within is a 2021 American mystery comedy horror film directed by Josh Ruben from a screenplay by Mishna Wolff, based on the video game of the same name from Red Storm Entertainment. It stars Sam Richardson, Milana Vayntrub, George Basil, Sarah Burns, Michael Chernus, Catherine Curtin, Wayne Duvall, Harvey Guillén, Rebecca Henderson, Cheyenne Jackson, Michaela Watkins, and Glenn Fleshler, and follows a group of people in a small Vermont town who get trapped in a snowstorm only to suspect one of them is a werewolf.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/34/Werewolves_Within_film_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'False Positive',
		year: 2021,
		cast: ['Ilana Glazer', 'Justin Theroux', 'Sophia Bush', 'Josh Hamilton', 'Pierce Brosnan'],
		genres: ['Horror'],
		href: 'False_Positive_(film)',
		extract:
			'False Positive is a 2021 American horror film, directed by John Lee, from a screenplay by Lee and Ilana Glazer. It stars Glazer, Justin Theroux, Pierce Brosnan, and Sophia Bush.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/42/False_Positive_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Lansky',
		year: 2021,
		cast: [
			'Harvey Keitel',
			'Sam Worthington',
			'AnnaSophia Robb',
			'Minka Kelly',
			'David James Elliott',
			'John Magaro'
		],
		genres: ['Crime', 'Drama', 'Biography'],
		href: 'Lansky_(2021_film)',
		extract:
			'Lansky is a 2021 American biographical crime drama about the famous gangster Meyer Lansky, written and directed by Eytan Rockaway. It stars Harvey Keitel, Sam Worthington, AnnaSophia Robb, Minka Kelly, David James Elliott, John Magaro.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/99/Lansky_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'I Carry You with Me',
		year: 2021,
		cast: [
			'Armando Espitia',
			'Christian Vázquez',
			'Michelle Rodríguez',
			'Ángeles Cruz',
			'Arcelia Ramírez',
			'Michelle González'
		],
		genres: ['Drama'],
		href: 'I_Carry_You_with_Me',
		extract:
			'I Carry You with Me (Te Llevo Conmigo) is a 2020 Spanish-language drama film directed by Heidi Ewing, from a screenplay by Ewing and Alan Page Arriaga. It stars Armando Espitia, Christian Vázquez, Michelle Rodríguez, Ángeles Cruz, Arcelia Ramírez and Michelle González.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f3/I_Carry_You_With_Me_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "Mary J. Blige's My Life",
		year: 2021,
		cast: ['Mary J. Blige', 'Taraji P. Henson', 'Alicia Keys', 'Sean Combs'],
		genres: ['Documentary'],
		href: 'Mary_J._Blige%27s_My_Life',
		extract:
			"Mary J. Blige's My Life is a 2021 American documentary film about the musical career of American recording artist Mary J. Blige directed by Vanessa Roth. Commemorating the 25th anniversary of her 1994 studio album My Life, the film was released on June 25, 2021, on Amazon Prime Video.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e9/Mary_J_Blige_My_Life.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Fathom',
		year: 2021,
		cast: ['Michelle Fournet', 'Ellen Garland'],
		genres: ['Documentary'],
		href: 'Fathom_(2021_film)',
		extract:
			'Fathom is a 2021 American documentary film, directed by Drew Xanthopoulos. It follows two researchers of humpback whales who study their communication and how it evolves across oceans and continents.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Fathom_poster.png',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'America: The Motion Picture',
		year: 2021,
		cast: [
			'Channing Tatum',
			'Jason Mantzoukas',
			'Olivia Munn',
			'Bobby Moynihan',
			'Judy Greer',
			'Will Forte',
			'Raoul Trujillo',
			'Killer Mike',
			'Simon Pegg',
			'Andy Samberg'
		],
		genres: ['Comedy'],
		href: 'America:_The_Motion_Picture',
		extract:
			"America: The Motion Picture is a 2021 American comedy film directed by Matt Thompson and written by Dave Callaham. It stars Channing Tatum, Jason Mantzoukas, Olivia Munn, Bobby Moynihan, Judy Greer, Will Forte, Raoul Max Trujillo, Killer Mike, Simon Pegg and Andy Samberg. It is a R-rated, animated parody of George Washington and his fight against the British. The film uses anachronism, ahistoricism, and Americentrism to create a comic effect. Dates, the roles of various historical figures, battles, notable inventions and technologies are changed, reinvented or outright created. Prominent events and figures from the American Revolutionary War period and American history through to the 20th century are moved into the film's 1776 setting. Netflix released America: The Motion Picture on June 30, 2021. It received generally negative reviews from critics, who criticized it as being unfunny.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/45/America_the_motion_picture.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Zola',
		year: 2021,
		cast: ['Taylour Paige', 'Riley Keough', 'Nicholas Braun', "Ari'el Stachel", 'Colman Domingo'],
		genres: ['Comedy', 'Crime'],
		href: 'Zola_(film)',
		extract:
			'Zola is a 2020 American black comedy crime film directed by Janicza Bravo and written by Bravo and Jeremy O. Harris. It is based on a viral Twitter thread from 2015 by Aziah "Zola" King and the resulting Rolling Stone article "Zola Tells All: The Real Story Behind the Greatest Stripper Saga Ever Tweeted" by David Kushner. It stars Taylour Paige as Zola, a part-time stripper who is convinced by her new friend to travel to Tampa, Florida, in order to earn money, only to get in over her head; Colman Domingo, Nicholas Braun, and Ari\'el Stachel also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Zola_film_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'No Sudden Move',
		year: 2021,
		cast: [
			'Don Cheadle',
			'Benicio del Toro',
			'David Harbour',
			'Jon Hamm',
			'Amy Seimetz',
			'Brendan Fraser',
			'Kieran Culkin',
			'Noah Jupe',
			'Craig Grant',
			'Julia Fox',
			'Frankie Shaw',
			'Ray Liotta',
			'Bill Duke'
		],
		genres: ['Crime', 'Noir', 'Thriller', 'Historical'],
		href: 'No_Sudden_Move',
		extract:
			"No Sudden Move is a 2021 American neo-noir period crime thriller film directed, photographed and edited by Steven Soderbergh, produced by Casey Silver, and written by Ed Solomon. The film features an ensemble cast including Don Cheadle, Benicio del Toro, David Harbour, Jon Hamm, Amy Seimetz, Brendan Fraser, Kieran Culkin, Noah Jupe, Craig muMs Grant, Julia Fox, Frankie Shaw, Ray Liotta, and Bill Duke. No Sudden Move had its world premiere at the Tribeca Film Festival on June 18, 2021, and was released in the United States on July 1, 2021, by HBO Max. The film received positive reviews from critics with praise for Soderbergh's direction and the performances of the cast.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8f/No_Sudden_Move_poster.jpg',
		thumbnail_width: 249,
		thumbnail_height: 370
	},
	{
		title: 'The Tomorrow War',
		year: 2021,
		cast: [
			'Chris Pratt',
			'Yvonne Strahovski',
			'J. K. Simmons',
			'Betty Gilpin',
			'Sam Richardson',
			'Edwin Hodge',
			'Jasmine Mathews',
			'Ryan Kiera Armstrong',
			'Keith Powers'
		],
		genres: ['Action', 'Science Fiction', 'War'],
		href: 'The_Tomorrow_War',
		extract:
			'The Tomorrow War is a 2021 American military science fiction action film directed by Chris McKay, written by Zach Dean, and starring Chris Pratt. It was produced by David Ellison, Dana Goldberg, Don Granger, David S. Goyer, Jules Daly, and Adam Kolbrenner, with a supporting cast featuring Yvonne Strahovski, J. K. Simmons, Betty Gilpin, Sam Richardson, Edwin Hodge, Jasmine Mathews, Ryan Kiera Armstrong, and Keith Powers. It follows a mix of present-day soldiers and civilians sent into the future to fight an alien army.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/6/60/The_Tomorrow_War_%282021_film%29_official_theatrical_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Boss Baby: Family Business',
		year: 2021,
		cast: [
			'Alec Baldwin',
			'James Marsden',
			'Amy Sedaris',
			'Ariana Greenblatt',
			'Jeff Goldblum',
			'Eva Longoria',
			'Jimmy Kimmel',
			'Lisa Kudrow'
		],
		genres: ['Animated', 'Comedy'],
		href: 'The_Boss_Baby:_Family_Business',
		extract:
			'The Boss Baby: Family Business is a 2021 American computer-animated comedy film loosely based on the 2010 picture book The Boss Baby and its 2016 sequel The Bossier Baby by Marla Frazee. Produced by DreamWorks Animation and distributed by Universal Pictures, it is the second installment in The Boss Baby franchise and the sequel to the 2017 film. The film was directed by Tom McGrath from a screenplay by Michael McCullers and a story by McGrath and McCullers. The film stars the voices of Alec Baldwin, James Marsden, Amy Sedaris, Ariana Greenblatt, Jeff Goldblum, Eva Longoria, Jimmy Kimmel, and Lisa Kudrow.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/3b/The_poster_for_The_Boss_Baby%2C_Family_Business%2C_with_new_date.jpg',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: 'The Forever Purge',
		year: 2021,
		cast: [
			'Ana de la Reguera',
			'Tenoch Huerta',
			'Josh Lucas',
			'Cassidy Freeman',
			'Leven Rambin',
			'Alejandro Edda',
			'Will Patton'
		],
		genres: ['Action', 'Horror'],
		href: 'The_Forever_Purge',
		extract:
			"The Forever Purge is a 2021 American dystopian action horror film directed by Everardo Valerio Gout and written by series creator James DeMonaco, who also produced along with Jason Blum and Michael Bay. Originally intended as the final installment, it serves as the fifth film in the Purge franchise and a direct sequel to 2016's The Purge: Election Year. The film stars Ana de la Reguera, Tenoch Huerta, Josh Lucas, Cassidy Freeman, Leven Rambin, Alejandro Edda, and Will Patton, and follows a group of people who attempt to escape from the United States after an insurrectionist movement continues committing crimes and murders nationwide after the 2049 Purge's ending.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Forever_Purge_poster.jpg',
		thumbnail_width: 246,
		thumbnail_height: 370
	},
	{
		title: 'Fear Street Part One: 1994',
		year: 2021,
		cast: [
			'Kiana Madeira',
			'Olivia Scott Welch',
			'Benjamin Flores Jr.',
			'Julia Rehwald',
			'Fred Hechinger',
			'Ashley Zukerman',
			'Darrell Britt-Gibson',
			'Maya Hawke',
			'Jordana Spiro',
			'Jordyn DiNatale'
		],
		genres: ['Slasher', 'Supernatural'],
		href: 'Fear_Street_Part_One:_1994',
		extract:
			'Fear Street Part One: 1994 is a 2021 American supernatural slasher film directed by Leigh Janiak, with a script co-written by Phil Graziadei and Janiak, from an original story by Kyle Killen, Graziadei, and Janiak. Based on the book series of the same name by R. L. Stine, it is the first installment in the Fear Street trilogy and stars Kiana Madeira, Olivia Scott Welch, Benjamin Flores Jr., Julia Rehwald, Fred Hechinger, Ashley Zukerman, Darrell Britt-Gibson and Maya Hawke. The film follows a group of teenagers in Shadyside who are terrorized by an ancient evil responsible for a series of brutal murders that have plagued the town for centuries.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/5/5a/Fear_Street_Part_One_-_1994_%282021_film%29.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Summer of Soul',
		year: 2021,
		cast: [
			'Stevie Wonder',
			'Nina Simone',
			'Sly and the Family Stone',
			'Gladys Knight & the Pips',
			'Mahalia Jackson',
			'B.B. King',
			'The 5th Dimension'
		],
		genres: ['Documentary', 'Independent'],
		href: 'Summer_of_Soul',
		extract:
			'Summer of Soul  is a 2021 American independent documentary film about the 1969 Harlem Cultural Festival, directed by Ahmir "Questlove" Thompson in his directorial debut. It had its world premiere at the 2021 Sundance Film Festival on January 28, 2021, where it won the Grand Jury Prize and Audience Award in the documentary categories. It had a limited theatrical release in the U.S. by Searchlight Pictures on June 25, 2021, before expanding and being released for streaming on Hulu the next weekend.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Summer_of_Soul_2021.jpg',
		thumbnail_width: 258,
		thumbnail_height: 386
	},
	{
		title: 'Let Us In',
		year: 2021,
		cast: ['Mackenzie Moss', 'Sadie Stanley', 'Mackenzie Ziegler', 'Siena Agudong', 'Tobin Bell'],
		genres: ['Family', 'Horror', 'Science Fiction'],
		href: 'Let_Us_In',
		extract:
			"Let Us In is a 2021 family science fiction-horror film written and directed by Craig Moss. It stars Makenzie Moss, Sadie Stanley, Mackenzie Ziegler, O'Neill Monahan, Siena Agudong, and Tobin Bell. The film is about a twelve-year-old girl who is ostracized in her small town for something she never did. When there's a rash of missing teenagers, she, along with her nine-year-old best friend, step in to figure out what's going on.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Let_us_in.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Black Widow',
		year: 2021,
		cast: [
			'Scarlett Johansson',
			'Florence Pugh',
			'David Harbour',
			'O-T Fagbenle',
			'Olga Kurylenko',
			'William Hurt',
			'Ray Winstone',
			'Rachel Weisz'
		],
		genres: ['Superhero'],
		href: 'Black_Widow_(2021_film)',
		extract:
			'Black Widow is a 2021 American superhero film based on Marvel Comics featuring the character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 24th film in the Marvel Cinematic Universe (MCU). The film was directed by Cate Shortland from a screenplay by Eric Pearson, and stars Scarlett Johansson as Natasha Romanoff / Black Widow alongside Florence Pugh, David Harbour, O-T Fagbenle, Olga Kurylenko, William Hurt, Ray Winstone, and Rachel Weisz. Set after the events of Captain America: Civil War (2016), the film sees Romanoff on the run and forced to confront her past as a Russian spy before she became an Avenger.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/e/e9/Black_Widow_%282021_film%29_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Fear Street Part Two: 1978',
		year: 2021,
		cast: [
			'Sadie Sink',
			'Emily Rudd',
			'Ryan Simpkins',
			'McCabe Slye',
			'Ted Sutherland',
			'Jordana Spiro',
			'Gillian Jacobs',
			'Kiana Madeira',
			'Benjamin Flores Jr.',
			'Ashley Zukerman',
			'Olivia Scott Welch',
			'Jordyn DiNatale'
		],
		genres: ['Slasher', 'Supernatural', 'Teen'],
		href: 'Fear_Street_Part_Two:_1978',
		extract:
			"Fear Street Part Two: 1978 is a 2021 American teen supernatural slasher film directed by Leigh Janiak, with a script co-written by Janiak and Zak Olkewicz, from an original story by Janiak, Olkewicz and Phil Graziadei. Based on the book series of the same name by R. L. Stine, it is the second installment in the Fear Street trilogy after Part One: 1994 and stars Sadie Sink, Emily Rudd, Ryan Simpkins, McCabe Slye, Ted Sutherland, Gillian Jacobs, Kiana Madeira, Benjamin Flores Jr. and Olivia Scott Welch. The film centers on a group of teenagers in Camp Nightwing who must come together to survive a possessed counselor's murder spree.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/d/dc/Fear_Street%2C_Part_Two_-_1978_teaser_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Summertime',
		year: 2021,
		cast: ['Tyris Winter', 'Marquesha Babers', 'Maia Mayor', 'Austin Antoine', 'Bryce Banks'],
		genres: ['Comedy', 'Drama'],
		href: 'Summertime_(2020_film)',
		extract:
			'Summertime is a 2020 American comedy-drama film directed by Carlos López Estrada from a screenplay by Dave Harris, and executive produced by Kelly Marie Tran. It was inspired by a spoken-word showcase with 25 diverse high school performers.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Summertime_%282020_film%29.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Gunpowder Milkshake',
		year: 2021,
		cast: [
			'Karen Gillan',
			'Lena Headey',
			'Carla Gugino',
			'Chloe Coleman',
			'Michelle Yeoh',
			'Angela Bassett',
			'Paul Giamatti'
		],
		genres: ['Action', 'Thriller'],
		href: 'Gunpowder_Milkshake',
		extract:
			'Gunpowder Milkshake is a 2021 action thriller film directed by Navot Papushado, with a script co-written by Papushado and Ehud Lavski. The film stars Karen Gillan as a young hitwoman who must team up with her estranged mother and her former colleagues in order to save a young girl from rival assassins led by head of the HR department for The Firm, Nathan.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/1/11/Gunpowder_Milkshake_%28poster%29.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Space Jam: A New Legacy',
		year: 2021,
		cast: [
			'LeBron James',
			'Don Cheadle',
			'Khris Davis',
			'Sonequa Martin-Green',
			'Cedric Joe',
			'Jeff Bergman',
			'Eric Bauza',
			'Zendaya'
		],
		genres: ['Live Action', 'Animated', 'Comedy', 'Sports'],
		href: 'Space_Jam:_A_New_Legacy',
		extract:
			"Space Jam: A New Legacy is a 2021 American live-action/animated sports comedy film co-produced by Warner Animation Group, Proximity Media, and The SpringHill Company, and distributed by Warner Bros. Pictures. The film was directed by Malcolm D. Lee from a screenplay by Juel Taylor, Tony Rettenmaier, Keenan Coogler, Terence Nance, Jesse Gordon, and Celeste Ballard, and a story by Taylor, Rettenmaier, Coogler, and Nance. It serves as a standalone sequel to Space Jam (1996) and is the first theatrically released film to feature the Looney Tunes characters since Looney Tunes: Back in Action (2003). The film stars basketball player LeBron James as a fictional version of himself; Don Cheadle, Khris Davis, Sonequa Martin-Green and Cedric Joe star in live-action roles, while Jeff Bergman, Eric Bauza and Zendaya headline the Looney Tunes voice cast. The film follows James enlisting the Looney Tunes' aid to win a basketball game in a Warner Bros.-themed virtual multiverse against a rogue artificial intelligence's avatars after James's son is abducted by the AI.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/b/b7/SpaceJamANewLegacyOfficialPoster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Escape Room: Tournament of Champions',
		year: 2021,
		cast: [
			'Taylor Russell',
			'Logan Miller',
			'Indya Moore',
			'Holland Roden',
			'Thomas Cocquerel',
			'Carlito Olivero',
			'Isabelle Fuhrman'
		],
		genres: ['Horror'],
		href: 'Escape_Room:_Tournament_of_Champions',
		extract:
			"Escape Room: Tournament of Champions is a 2021 American survival horror film directed by Adam Robitel and written by Will Honley, Maria Melnik, Daniel Tuch, and Oren Uziel. A sequel to 2019's Escape Room, it stars Taylor Russell, Logan Miller, and Deborah Ann Woll reprising their roles from the first film, alongside new cast members Indya Moore, Holland Roden, Thomas Cocquerel, and Carlito Olivero, and follows a group of six people trying to survive a new series of more deadly escape rooms.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/36/Escape_Room_Tournament_of_Champions_Movie_Poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Fear Street Part Three: 1666',
		year: 2021,
		cast: [
			'Kiana Madeira',
			'Ashley Zukerman',
			'Gillian Jacobs',
			'Olivia Scott Welch',
			'Benjamin Flores Jr.',
			'Darrell Britt-Gibson',
			'Fred Hechinger',
			'Julia Rehwald',
			'Sadie Sink',
			'Emily Rudd',
			'McCabe Slye',
			'Jordana Spiro',
			'Jordyn DiNatale'
		],
		genres: ['Horror', 'Supernatural'],
		href: 'Fear_Street_Part_Three:_1666',
		extract:
			"Fear Street Part Three: 1666 is a 2021 American supernatural horror film directed by Leigh Janiak, who co-wrote the screenplay with Phil Graziadei and Kate Trefry. Based on the book series of the same name by R. L. Stine, it is the third and final installment of the Fear Street trilogy after Part One: 1994 and Part Two: 1978 and stars Kiana Madeira, Ashley Zukerman, Gillian Jacobs, Olivia Scott Welch, Benjamin Flores Jr., and Darrell Britt-Gibson. The film follows the origins of Shadyside's curse in the mid-17th century and the survivors in 1994 who try to put an end to it.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/2/29/Fear_Street%2C_Part_Three_-_1666_teaser_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Die in a Gunfight',
		year: 2021,
		cast: [
			'Alexandra Daddario',
			'Diego Boneta',
			'Justin Chatwin',
			'Wade Allain-Marcus',
			'Billy Crudup',
			'Emmanuelle Chriqui',
			'Travis Fimmel'
		],
		genres: ['Crime', 'Thriller', 'Romance'],
		href: 'Die_in_a_Gunfight',
		extract:
			"Die in a Gunfight is a 2021 American romantic crime thriller film directed by Collin Schiffli and written by Andrew Barrer and Gabriel Ferrari. It stars Alexandra Daddario and Diego Boneta. It is described as an updated version of William Shakespeare's Romeo and Juliet.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/02/Die_in_a_Gunfight_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 313
	},
	{
		title: 'Pig',
		year: 2021,
		cast: ['Nicolas Cage', 'Alex Wolff', 'Adam Arkin'],
		genres: ['Drama'],
		href: 'Pig_(2021_film)',
		extract:
			'Pig is a 2021 American drama film written and directed by Michael Sarnoski, from a story by Vanessa Block and Sarnoski. The film stars Nicolas Cage as a truffle-hunter who lives alone in the Oregon wilderness and must return to his past in Portland in search of his beloved foraging pig after she is kidnapped. It also stars Alex Wolff and Adam Arkin.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Pig_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Out of Death',
		year: 2021,
		cast: ['Bruce Willis', 'Jaime King', 'Lala Kent'],
		genres: ['Action', 'Thriller'],
		href: 'Out_of_Death',
		extract:
			'Out of Death is a 2021 American action thriller film directed by Mike Burns and starring Bruce Willis and Jaime King.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Out_of_Death_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Roadrunner: A Film About Anthony Bourdain',
		year: 2021,
		cast: ['Anthony Bourdain'],
		genres: ['Documentary'],
		href: 'Roadrunner:_A_Film_About_Anthony_Bourdain',
		extract:
			"Roadrunner: A Film About Anthony Bourdain is a 2021 American documentary film directed and produced by Morgan Neville. The film had its world premiere at the Tribeca Film Festival on June 11, 2021, and was released in the United States on July 16, 2021, by Focus Features. The film grossed $5.5 million at the box office and received critical acclaim, but also garnered controversy over its use of artificial intelligence technology to reproduce Bourdain's voice for some audio clips.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/40/Roadrunner_Anthony_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'How It Ends',
		year: 2021,
		cast: [
			'Zoe Lister-Jones',
			'Cailee Spaeny',
			'Olivia Wilde',
			'Fred Armisen',
			'Helen Hunt',
			'Lamorne Morris',
			'Nick Kroll'
		],
		genres: ['Comedy', 'Drama'],
		href: 'How_It_Ends_(2021_film)',
		extract:
			'How It Ends is a 2021 American comedy-drama film written, directed, and produced by Daryl Wein and Zoe Lister-Jones. It stars Lister-Jones and Cailee Spaeny, with cameo appearances by 23 others in a series of vignettes, facilitating the reality of 2020 COVID-19 protocols while serving the underlying plot device of walking through the deserted streets of Los Angeles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/78/How_it_Ends_poster.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Trollhunters: Rise of the Titans',
		year: 2021,
		cast: [
			'Emile Hirsch',
			'Lexi Medrano',
			'Charlie Saxton',
			'Kelsey Grammer',
			'Fred Tatasciore',
			"Colin O'Donoghue",
			'Diego Luna',
			'Tatiana Maslany',
			'Steven Yeun',
			'Cole Sand',
			'Alfred Molina',
			'Nick Frost',
			'Nick Offerman'
		],
		genres: ['Animated', 'Fantasy'],
		href: 'Trollhunters:_Rise_of_the_Titans',
		extract:
			'Trollhunters: Rise of the Titans is a 2021 American computer-animated science fantasy film directed by Johane Matte, Francisco Ruiz Velasco, and Andrew Schmidt, and written by Guillermo del Toro, Marc Guggenheim and Dan and Kevin Hageman. It is the finale of the Tales of Arcadia franchise by Guillermo del Toro, which features the television series Trollhunters, 3Below and Wizards. Following a year after the events of Wizards, the Guardians of Arcadia reunite for the final time as they battle the nefarious Arcane Order, who have reawakened the primordial Titans.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fe/Trollhunters_Movie.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Snake Eyes',
		year: 2021,
		cast: [
			'Henry Golding',
			'Andrew Koji',
			'Úrsula Corberó',
			'Samara Weaving',
			'Iko Uwais',
			'Haruka Abe',
			'Takehiro Hira',
			'Peter Mensah'
		],
		genres: ['Superhero'],
		href: 'Snake_Eyes_(2021_film)',
		extract:
			"Snake Eyes: G.I. Joe Origins is a 2021 American superhero film based on Hasbro's G.I. Joe toy line character Snake Eyes. It is the third installment in the G.I. Joe film series. The film is directed by Robert Schwentke from a screenplay by Evan Spiliotopoulos, Joe Shrapnel, and Anna Waterhouse. It serves as an origin story for the title character, while also being a reboot of the film series. The film stars Henry Golding as Snake Eyes, with Andrew Koji, Úrsula Corberó, Samara Weaving, and Iko Uwais in supporting roles.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/d/da/Snake_Eyes_G.I._Joe_Origins_Movie_Poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Old',
		year: 2021,
		cast: [
			'Gael García Bernal',
			'Vicky Krieps',
			'Rufus Sewell',
			'Alex Wolff',
			'Thomasin McKenzie',
			'Abbey Lee',
			'Nikki Amuka-Bird',
			'Ken Leung',
			'Eliza Scanlen',
			'Aaron Pierre',
			'Embeth Davidtz',
			'Emun Elliott'
		],
		genres: ['Horror', 'Thriller'],
		href: 'Old_(film)',
		extract:
			'Old is a 2021 American horror thriller film written, directed, and produced by M. Night Shyamalan. It is based on the French-language Swiss graphic novel Sandcastle by Pierre Oscar Levy and Frederik Peeters. The film features an ensemble cast consisting of Gael García Bernal, Vicky Krieps, Rufus Sewell, Alex Wolff, Thomasin McKenzie, Abbey Lee, Nikki Amuka-Bird, Ken Leung, Eliza Scanlen, Aaron Pierre, Embeth Davidtz, and Emun Elliott. The plot follows a group of people who find themselves aging rapidly on a secluded beach.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/99/Old_%28film%29_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 348
	},
	{
		title: 'Joe Bell',
		year: 2021,
		cast: ['Mark Wahlberg', 'Reid Miller', 'Connie Britton', 'Gary Sinise'],
		genres: ['Drama', 'Biography'],
		href: 'Joe_Bell_(film)',
		extract:
			'Joe Bell is a 2020 American biographical drama road film directed by Reinaldo Marcus Green, from a screenplay by Larry McMurtry and Diana Ossana. The film stars Mark Wahlberg, Reid Miller, and Connie Britton, and follows the true story of a man named Joe Bell, who sets out walking across America to speak out against bullying and honoring his teenage son, Jadin Bell, who died by suicide after he was bullied for being gay. The film was produced by Jake Gyllenhaal’s production company, Nine Stories Productions, with Gyllenhaal himself serving as executive producer.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Joe_Bell_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Jolt',
		year: 2021,
		cast: [
			'Scott Wascha (screenwriter)',
			'Kate Beckinsale',
			'Bobby Cannavale',
			'Laverne Cox',
			'Stanley Tucci',
			'Jai Courtney',
			'Susan Sarandon'
		],
		genres: ['Action', 'Comedy'],
		href: 'Jolt_(film)',
		extract:
			'Jolt is a 2021 American action comedy film directed by Tanya Wexler and written by Scott Wascha. The film stars Kate Beckinsale, Bobby Cannavale, Laverne Cox, Stanley Tucci, and Jai Courtney. It was released on July 23, 2021, by Amazon Studios.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Jolt_poster.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Midnight in the Switchgrass',
		year: 2021,
		cast: ['Megan Fox', 'Bruce Willis', 'Emile Hirsch', 'Machine Gun Kelly', 'Lukas Haas'],
		genres: ['Crime', 'Thriller'],
		href: 'Midnight_in_the_Switchgrass',
		extract:
			'Midnight in the Switchgrass is a 2021 American crime thriller film directed by Randall Emmett in his directorial debut, from a screenplay by Alan Horsnail. It stars Megan Fox, Bruce Willis, Emile Hirsch, Lukas Haas, Colson Baker and Lydia Hull.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Midnight_in_the_Switchgrass.png',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Broken Diamonds',
		year: 2021,
		cast: ['Ben Platt', 'Lola Kirke', 'Yvette Nicole Brown', 'Alphonso McAuley', 'Lynda Boyd'],
		genres: ['Drama'],
		href: 'Broken_Diamonds',
		extract:
			'Broken Diamonds is a 2021 American drama film directed by Peter Sattler from a screenplay by Steve Waverly. It stars Ben Platt, Lola Kirke, Yvette Nicole Brown, Alphonso McAuley, and Lynda Boyd.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/ff/Broken_Diamonds_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Val',
		year: 2021,
		cast: ['Val Kilmer'],
		genres: ['Documentary'],
		href: 'Val_(film)',
		extract:
			'Val is a 2021 American documentary film directed and produced by Leo Scott and Ting Poo. It follows the life and career of actor Val Kilmer. The film had its world premiere at the Cannes Film Festival on July 7, 2021, and was released in a limited release on July 23, 2021, prior to digital streaming on Prime Video on August 6, by Amazon Studios.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Val_poster.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Ailey',
		year: 2021,
		cast: [],
		genres: ['Documentary'],
		href: 'Ailey_(film)',
		extract:
			'Ailey is an 2021 American documentary film, directed by Jamila Wignot, which follows the life of dancer Alvin Ailey.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Ailey_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Jungle Cruise',
		year: 2021,
		cast: [
			'Dwayne Johnson',
			'Emily Blunt',
			'Édgar Ramírez',
			'Jack Whitehall',
			'Jesse Plemons',
			'Paul Giamatti'
		],
		genres: ['Adventure', 'Fantasy'],
		href: 'Jungle_Cruise_(film)',
		extract:
			"Jungle Cruise is a 2021 American fantasy adventure film directed by Jaume Collet-Serra from a screenplay written by Glenn Ficarra, John Requa, and Michael Green. It is based on Walt Disney's eponymous theme park attraction. Produced by Walt Disney Pictures, the film stars Dwayne Johnson, Emily Blunt, Édgar Ramírez, Jack Whitehall, Jesse Plemons, and Paul Giamatti. It tells the alternate history of the captain of a small riverboat who takes a scientist and her brother through a jungle in search of the Tree of Life while competing against a German expedition, and cursed conquistadors.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/c/c6/Jungle_Cruise_-_theatrical_poster.png',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Vivo',
		year: 2021,
		cast: [
			'Lin-Manuel Miranda',
			'Ynairaly Simo',
			'Zoe Saldana',
			'Juan de Marcos González',
			'Michael Rooker',
			'Brian Tyree Henry',
			'Nicole Byer',
			'Gloria Estefan'
		],
		genres: ['Animated', 'Comedy', 'Musical'],
		href: 'Vivo_(film)',
		extract:
			"Vivo is a 2021 American computer-animated musical comedy film produced by Columbia Pictures and Sony Pictures Animation. The film was directed by Kirk DeMicco and co-directed by Brandon Jeffords, from a screenplay written by DeMicco and Quiara Alegría Hudes, based on an original idea by Hudes and Peter Barsocchini; with songs written by Lin-Manuel Miranda, who also voices the title character and serves as one of the executive producers of the film. The film also features the voices of Zoe Saldana, Juan de Marcos, Brian Tyree Henry, Michael Rooker, Nicole Byer, Gloria Estefan, and introduces Ynairaly Simo in her film debut as Gabi. The film marks Sony Pictures Animation's first musical film. The story follows Vivo (Miranda), a music-loving kinkajou, who embarks on the journey of a lifetime to fulfill his destiny and must deliver a love song to Marta Sandoval (Estefan), a retiring singer.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/dd/Vivo_poster.jpg',
		thumbnail_width: 244,
		thumbnail_height: 409
	},
	{
		title: 'Stillwater',
		year: 2021,
		cast: ['Matt Damon', 'Camille Cottin', 'Abigail Breslin'],
		genres: ['Crime', 'Drama'],
		href: 'Stillwater_(film)',
		extract:
			"Stillwater is a 2021 American crime drama film directed by Tom McCarthy, based on a script he co-wrote with Marcus Hinchey, Thomas Bidegain and Noé Debré. It is the first DreamWorks Pictures film to be distributed by Focus Features. It stars Matt Damon as an unemployed oil-rig worker from Oklahoma who sets out with a French woman to prove his convicted daughter's innocence.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Stillwater_2021_film.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Green Knight',
		year: 2021,
		cast: [
			'Dev Patel',
			'Alicia Vikander',
			'Joel Edgerton',
			'Sarita Choudhury',
			'Sean Harris',
			'Ralph Ineson',
			'Barry Keoghan',
			'Erin Kellyman',
			'Kate Dickie'
		],
		genres: ['Fantasy'],
		href: 'The_Green_Knight_(film)',
		extract:
			'The Green Knight is a 2021 medieval fantasy film directed, written, edited, and produced by David Lowery, adapted from the 14th-century poem Sir Gawain and the Green Knight. The film stars Dev Patel as Gawain, who sets out on a journey to test his courage and face the Green Knight. It also stars Alicia Vikander, Joel Edgerton, Sarita Choudhury, Sean Harris, and Ralph Ineson.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/09/The_Green_Knight_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Nine Days',
		year: 2021,
		cast: ['Winston Duke', 'Zazie Beetz', 'Benedict Wong', 'Tony Hale', 'Bill Skarsgård'],
		genres: ['Drama', 'Fantasy'],
		href: 'Nine_Days_(film)',
		extract:
			'Nine Days is a 2020 American fantasy drama film written and directed by Edson Oda in his feature debut. It stars an ensemble cast consisting of Winston Duke, Zazie Beetz, Benedict Wong, Tony Hale, Bill Skarsgård, David Rysdahl, and Arianna Ortiz. In the film, Will (Duke) is a reclusive man residing in a house in the pre-existence with his assistant Kyo (Wong). His job is to interview souls hoping to be born and to observe how the souls he has selected are living on Earth. When one of his previous selections suddenly dies, Will becomes dispirited and confused with the true meaning of life as a new batch of souls arrives to be interviewed.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Nine_Days_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Ride the Eagle',
		year: 2021,
		cast: ['Jake Johnson', "D'Arcy Carden", 'J.K. Simmons', 'Susan Sarandon'],
		genres: ['Comedy'],
		href: 'Ride_the_Eagle',
		extract:
			"Ride the Eagle is a 2021 American comedy film directed by Trent O'Donnell, who co-wrote the screenplay with Jake Johnson. It stars Johnson, Susan Sarandon, J. K. Simmons, and D'Arcy Carden. Produced by The Walcott Company, it was released by Decal theatrically and through video on demand on July 30, 2021.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/75/Ride_the_Eagle.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Evening Hour',
		year: 2021,
		cast: [
			'Philip Ettinger',
			'Stacy Martin',
			'Cosmo Jarvis',
			'Michael Trotter',
			'Kerry Bishé',
			'Lili Taylor'
		],
		genres: ['Drama'],
		href: 'The_Evening_Hour_(film)',
		extract:
			'The Evening Hour is a 2020 American drama film, directed by Braden King from a screenplay by Elizabeth Palmore. It is based upon the 2012 novel of the same name by Carter Sickels. It stars Philip Ettinger, Stacy Martin, Cosmo Jarvis, Michael Trotter, Kerry Bishé and Lili Taylor.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Evening_Hour_poster.jpg',
		thumbnail_width: 263,
		thumbnail_height: 379
	},
	{
		title: 'Lorelei',
		year: 2021,
		cast: ['Pablo Schreiber', 'Jena Malone'],
		genres: ['Drama'],
		href: 'Lorelei_(film)',
		extract:
			'Lorelei is a 2020 American drama film written and directed by Sabrina Doyle in her feature debut. It stars Pablo Schreiber, Jena Malone, Amelia Borgerding, Parker Pascoe-Sheppard, Chancellor Perry and Martin Hernandez.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b8/Lorelei_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Enemies of the State',
		year: 2021,
		cast: [],
		genres: ['Documentary'],
		href: 'Enemies_of_the_State',
		extract:
			'Enemies of the State is a 2020 American documentary film directed and produced by Sonia Kennebeck. It follows Matt DeHart, a former intelligence analyst and convicted sex offender, who claims that the FBI invented child pornography allegations against him in retaliation for possessing confidential documents alleging misconduct by the CIA. Errol Morris serves as an executive producer.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/69/Enemies_of_the_State_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'The Suicide Squad',
		year: 2021,
		cast: [
			'Idris Elba',
			'Margot Robbie',
			'John Cena',
			'Joel Kinnaman',
			'Sylvester Stallone',
			'Viola Davis',
			'David Dastmalchian',
			'Daniela Melchior',
			'Michael Rooker',
			'Jai Courtney',
			'Peter Capaldi',
			'Alice Braga',
			'Pete Davidson',
			'Nathan Fillion',
			'Sean Gunn',
			'Flula Borg',
			'Mayling Ng'
		],
		genres: ['Superhero'],
		href: 'The_Suicide_Squad_(film)',
		extract:
			'The Suicide Squad is a 2021 American superhero film based on the DC Comics team Suicide Squad. Produced by Warner Bros. Pictures, DC Films, Atlas Entertainment, and The Safran Company, and distributed by Warner Bros. Pictures, it is a standalone sequel to Suicide Squad (2016) and the 10th film in the DC Extended Universe (DCEU). It was written and directed by James Gunn and stars an ensemble cast including Margot Robbie, Idris Elba, John Cena, Joel Kinnaman, Sylvester Stallone, Viola Davis, David Dastmalchian, Daniela Melchior, Michael Rooker, Jai Courtney, Peter Capaldi, Alice Braga, and Pete Davidson. In the film, several convicts join a task force known as the "Suicide Squad" in exchange for lighter sentences. They are sent to the South American island nation of Corto Maltese to destroy all traces of the giant alien starfish Starro the Conqueror before it falls into the local government\'s control.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/0/06/The_Suicide_Squad_%28film%29_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Naked Singularity',
		year: 2021,
		cast: [
			'John Boyega',
			'Olivia Cooke',
			'Bill Skarsgård',
			'Ed Skrein',
			'Linda Lavin',
			'Tim Blake Nelson'
		],
		genres: ['Comedy', 'Crime', 'Thriller'],
		href: 'Naked_Singularity_(film)',
		extract:
			'Naked Singularity is a 2021 American black comedy crime thriller film, directed by Chase Palmer in his directorial debut, from a screenplay by Palmer and David Matthews. It is based upon the 2008 novel of the same name by Sergio De La Pava. It stars John Boyega, Olivia Cooke, Bill Skarsgård, Ed Skrein, Linda Lavin, and Tim Blake Nelson.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/74/Naked_Singularity_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'John and the Hole',
		year: 2021,
		cast: ['Charlie Shotwell', 'Michael C. Hall', 'Jennifer Ehle', 'Taissa Farmiga'],
		genres: ['Thriller'],
		href: 'John_and_the_Hole',
		extract:
			"John and the Hole is a 2021 American coming-of-age psychological thriller film directed by Pascual Sisto and written by Nicolás Giacobone. A feature-length adaptation of Giacobone's short story, El Pozo, the film stars Charlie Shotwell, Michael C. Hall, Jennifer Ehle, and Taissa Farmiga. The film revolves around a boy who discovers an unfinished bunker in the neighboring woods of his home.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/02/John-and-the-hole.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Playing God',
		year: 2021,
		cast: [
			'Hannah Kasulka',
			'Luke Benward',
			'Jude Demorest',
			'Marc Menchaca',
			'Alan Tudyk',
			'Michael McKean'
		],
		genres: [],
		href: 'Playing_God_(2021_film)',
		extract:
			'Playing God is a 2021 American film written and directed by Scott Brignac and starring Luke Benward, Michael McKean, Alan Tudyk, and Hannah Kasulka. It was released in theaters and on-demand on August 6, 2021.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/de/Playing_God_%282021_film%29.jpg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Swan Song',
		year: 2021,
		cast: [
			'Udo Kier',
			'Jennifer Coolidge',
			'Linda Evans',
			'Michael Urie',
			'Ira Hawkins',
			'Stephanie McVay'
		],
		genres: ['Drama'],
		href: 'Swan_Song_(Todd_Stephens_film)',
		extract:
			'Swan Song is a 2021 American drama film, written, directed, and produced by Todd Stephens. It stars Udo Kier, Jennifer Coolidge, Linda Evans, Michael Urie, Ira Hawkins, and Stephanie McVay.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Swan_Song_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Kissing Booth 3',
		year: 2021,
		cast: [
			'Joey King',
			'Joel Courtney',
			'Jacob Elordi',
			'Taylor Zakhar Perez',
			'Maisie Richardson-Sellers',
			'Meganne Young',
			'Molly Ringwald'
		],
		genres: ['Comedy', 'Teen', 'Romance'],
		href: 'The_Kissing_Booth_3',
		extract:
			"The Kissing Booth 3 is a 2021 American teen romantic comedy film directed by Vince Marcello and written by Marcello and Jay Arnold. The third and final installment in The Kissing Booth trilogy based on Beth Reekles' novel of the same name, the film stars Joey King, Joel Courtney, Jacob Elordi, Taylor Zakhar Perez, Maisie Richardson-Sellers, Meganne Young and Molly Ringwald.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c3/The_Kissing_Booth_3.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Homeroom',
		year: 2021,
		cast: [],
		genres: ['Documentary'],
		href: 'Homeroom_(2021_film)',
		extract:
			'Homeroom is a 2021 American documentary film directed and produced by Peter Nicks. The film, which is the final chapter of Nicks\' Oakland trilogy, follows the lives of the Oakland High School class of 2020 as they try to make the most of their final year in high school amidst district budget cuts and ultimately the COVID-19 pandemic and the George Floyd protests. Ryan Coogler and Davis Guggenheim, the latter of whom made a similar film, Waiting for "Superman", were executive producers on this film.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/81/Homeroom_Sundance_poster_2021.png',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Free Guy',
		year: 2021,
		cast: [
			'Ryan Reynolds',
			'Jodie Comer',
			'Lil Rel Howery',
			'Utkarsh Ambudkar',
			'Joe Keery',
			'Taika Waititi'
		],
		genres: ['Action', 'Comedy'],
		href: 'Free_Guy',
		extract:
			"Free Guy is a 2021 American action comedy film directed and produced by Shawn Levy from a screenplay by Matt Lieberman and Zak Penn, and a story by Lieberman. The film stars Ryan Reynolds, Jodie Comer, Lil Rel Howery, Utkarsh Ambudkar, Joe Keery, and Taika Waititi. It tells the story of a bank teller who discovers that he is a non-player character in a massively multiplayer online game who then partners with a player to find evidence that a gaming company's CEO stole the player's game's source code.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Free_Guy_2021_Poster.jpg',
		thumbnail_width: 263,
		thumbnail_height: 379
	},
	{
		title: 'Respect',
		year: 2021,
		cast: [
			'Jennifer Hudson',
			'Forest Whitaker',
			'Marlon Wayans',
			'Audra McDonald',
			'Marc Maron',
			'Tituss Burgess',
			'Mary J. Blige'
		],
		genres: ['Drama', 'Musical', 'Biography'],
		href: 'Respect_(2021_American_film)',
		extract:
			"Respect is a 2021 American biographical musical drama film directed by Liesl Tommy, written by Tracey Scott Wilson and Callie Khouri, based on the life of American singer Aretha Franklin. The film stars Jennifer Hudson as Franklin, with Forest Whitaker, Marlon Wayans, Audra McDonald, Marc Maron, Tituss Burgess, and Mary J. Blige in supporting roles. The film follows the first three decades of Franklin's life, from being born as a musical prodigy in an affluent African-American family, the repercussions of losing her mother at age 10 to her arduous rise to international musical stardom, while enduring an abusive marriage, ultimately concluding with the recording of her influential live album Amazing Grace (1972).",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Respect_2020_film_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 386
	},
	{
		title: 'Beckett',
		year: 2021,
		cast: ['John David Washington', 'Boyd Holbrook', 'Vicky Krieps', 'Alicia Vikander'],
		genres: ['Action', 'Thriller'],
		href: 'Beckett_(film)',
		extract:
			'Beckett is a 2021 action thriller film directed by Ferdinando Cito Filomarino and produced by Luca Guadagnino. The film stars John David Washington as an American tourist vacationing in Greece who becomes the target of a manhunt after an accident, and must reach the embassy to clear his name; Boyd Holbrook, Vicky Krieps, and Alicia Vikander also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/71/Beckett_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "Don't Breathe 2",
		year: 2021,
		cast: ['Stephen Lang', 'Brendan Sexton III', 'Madelyn Grace'],
		genres: ['Horror', 'Thriller'],
		href: 'Don%27t_Breathe_2',
		extract:
			"Don't Breathe 2 is a 2021 American horror thriller film directed by Rodo Sayagues in his directorial debut, from a screenplay he co-wrote with Fede Álvarez. The sequel to 2016's Don't Breathe, it was produced by Álvarez, Sam Raimi and Robert Tapert. The film stars Stephen Lang, reprising his role as Norman Nordstrom / \"The Blind Man\", with Brendan Sexton III and Madelyn Grace in supporting roles.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d3/DontBreathe2OfficialPoster2021.png',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'CODA',
		year: 2021,
		cast: [
			'Emilia Jones',
			'Eugenio Derbez',
			'Troy Kotsur',
			'Ferdia Walsh-Peelo',
			'Daniel Durant',
			'Marlee Matlin'
		],
		genres: ['Comedy', 'Drama'],
		href: 'CODA_(2021_film)',
		extract:
			"CODA is a 2021 coming-of-age comedy-drama film written and directed by Sian Heder. An English-language remake of the 2014 French-Belgian film La Famille Bélier, it stars Emilia Jones as Ruby Rossi, the titular child of deaf adults (CODA) and only hearing member of her family, a teenager who attempts to help her family's struggling fishing business while pursuing her own aspirations of being a singer.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/89/Coda_poster.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Not Going Quietly',
		year: 2021,
		cast: [],
		genres: ['Documentary'],
		href: 'Not_Going_Quietly',
		extract:
			'Not Going Quietly is a 2021 American documentary film, directed by Nicholas Bruckman and produced by Amanda Roddy, following Ady Barkan, embarking on a national campaign for healthcare reform. Mark Duplass, Jay Duplass and Bradley Whitford serve as executive producers.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Not_Going_Quietly.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'PAW Patrol: The Movie',
		year: 2021,
		cast: [
			'Iain Armitage',
			'Marsai Martin',
			'Ron Pardo',
			'Yara Shahidi',
			'Kim Kardashian West',
			'Randall Park',
			'Dax Shepard',
			'Tyler Perry',
			'Jimmy Kimmel',
			'Will Brisbin'
		],
		genres: ['Action', 'Adventure', 'Animated', 'Comedy'],
		href: 'PAW_Patrol:_The_Movie',
		extract:
			'PAW Patrol: The Movie is a 2021 Canadian computer-animated action-adventure comedy film based on the television series PAW Patrol created by Keith Chapman. The film was produced by Spin Master Entertainment, the toy company behind the series, with animation provided by Mikros Image, and released by Paramount Pictures and Nickelodeon Movies. The events of the film take place during the eighth season of the series. It is directed by Cal Brunker, who co-wrote the screenplay with Billy Frolick and Bob Barlen from a story by Frolick. The film was the first of several planned films produced under the Spin Master Entertainment banner. Several cast members from the original series reprised their roles, including Kingsley Marshall, Keegan Hedley, Shayle Simons, Lilly Bartlam and Ron Pardo. They are joined by newcomers Iain Armitage, Marsai Martin, Yara Shahidi, Kim Kardashian, Randall Park, Dax Shepard, Tyler Perry, Jimmy Kimmel, and introducing Will Brisbin in his film debut as Ryder. In the film, Ryder and the PAW Patrol pups are called to Adventure City to stop the recently-elected Mayor Humdinger from turning the bustling metropolis into a state of chaos to face the challenge in order to save its citizens.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/83/PAW_Patrol_The_Movie_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Reminiscence',
		year: 2021,
		cast: [
			'Hugh Jackman',
			'Rebecca Ferguson',
			'Thandiwe Newton',
			'Cliff Curtis',
			'Marina de Tavira',
			'Daniel Wu'
		],
		genres: ['Noir', 'Science Fiction', 'Thriller'],
		href: 'Reminiscence_(2021_film)',
		extract:
			"Reminiscence is a 2021 American neo-noir science fiction thriller film written, directed and produced by Lisa Joy in her feature directorial debut. Starring Hugh Jackman, Rebecca Ferguson, Thandiwe Newton, Cliff Curtis, Marina de Tavira and Daniel Wu, it follows a man who uses a machine that can see people's memories to try to find his missing love. Joy co-produced with her husband and creative partner Jonathan Nolan.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/73/ReminiscencePoster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Protégé',
		year: 2021,
		cast: ['Michael Keaton', 'Maggie Q', 'Samuel L. Jackson', 'Robert Patrick'],
		genres: ['Action', 'Thriller'],
		href: 'The_Prot%C3%A9g%C3%A9',
		extract:
			"The Protégé is a 2021 American action thriller film directed by Martin Campbell, written by Richard Wenk, and starring Maggie Q, Michael Keaton, Samuel L. Jackson, Patrick Malahide, David Rintoul, Ori Pfeffer, Ray Fearon, Caroline Loncq, and Robert Patrick. The film is about Anna, who was rescued as a child by the legendary assassin Moody, and is now the world's most skilled contract killer. However, when Moody is brutally killed, she vows revenge for the man who taught her everything she knows. The film was released on August 20, 2021 by Lionsgate. It received mixed reviews from critics and grossed $8 million at the box office.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/04/The_Prot%C3%A9g%C3%A9.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Sweet Girl',
		year: 2021,
		cast: [
			'Jason Momoa',
			'Isabela Merced',
			'Manuel Garcia-Rulfo',
			'Raza Jaffrey',
			'Justin Bartha',
			'Lex Scott Davis',
			'Michael Raymond-James',
			'Adria Arjona',
			'Amy Brenneman'
		],
		genres: ['Action', 'Thriller'],
		href: 'Sweet_Girl_(film)',
		extract:
			'Sweet Girl is a 2021 American action thriller film directed by Brian Andrew Mendoza in his feature directorial debut and written by Philip Eisner and Gregg Hurwitz. The film stars Jason Momoa, Isabela Merced, Manuel Garcia-Rulfo, Adria Arjona, Raza Jaffrey, Justin Bartha, Lex Scott Davis, Michael Raymond-James and Amy Brenneman.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Sweet_Girl_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Loud House Movie',
		year: 2021,
		cast: [
			'Asher Bishop',
			'David Tennant',
			'Michelle Gomez',
			'Jill Talley',
			'Brian Stepanek',
			'Catherine Taber',
			'Liliana Mumy',
			'Nika Futterman',
			'Cristina Pucelli',
			'Jessica DiCicco',
			'Grey Griffin',
			'Lara Jill Miller',
			'Katy Townsend',
			'Andre Robinson'
		],
		genres: ['Animated', 'Comedy', 'Musical'],
		href: 'The_Loud_House_Movie',
		extract:
			'The Loud House Movie is a 2021 American animated musical comedy film based on and featuring characters from the Nickelodeon series The Loud House. Produced by Nickelodeon Movies, it was directed by Dave Needham in his directorial debut, from a screenplay by Kevin Sullivan and Chris Viscardi, and starring the voices of David Tennant, Michelle Gomez, Katy Townsend, and the regular voice cast of the series; consisting of Asher Bishop, Jill Talley, Brian Stepanek, Catherine Taber, Liliana Mumy, Nika Futterman, Cristina Pucelli, Jessica DiCicco, Grey Griffin, Lara Jill Miller, and Andre Robinson, who reprise their respective roles. The first film in the franchise, set between the fourth and fifth seasons of The Loud House, it tells the story of the Louds going to Scotland, where they learn that they are descended from royalty and own a castle, while contending with an evil plot.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d6/LoudHouseMoviePoster.jpg',
		thumbnail_width: 251,
		thumbnail_height: 372
	},
	{
		title: 'The Night House',
		year: 2021,
		cast: [
			'Rebecca Hall',
			'Sarah Goldberg',
			'Evan Jonigkeit',
			'Stacy Martin',
			'Vondie Curtis-Hall'
		],
		genres: ['Horror', 'Supernatural'],
		href: 'The_Night_House',
		extract:
			'The Night House is a 2020 supernatural psychological horror film directed by David Bruckner and written by Ben Collins and Luke Piotrowski. It stars Rebecca Hall as a widow who discovers a dark secret about the house her recently deceased architect husband built. Other cast members are Sarah Goldberg, Evan Jonigkeit, Stacy Martin, and Vondie Curtis-Hall.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/53/The_Night_House.png',
		thumbnail_width: 250,
		thumbnail_height: 375
	},
	{
		title: 'Flag Day',
		year: 2021,
		cast: [
			'Dylan Penn',
			'Sean Penn',
			'Katheryn Winnick',
			'Eddie Marsan',
			'Josh Brolin',
			'Regina King'
		],
		genres: ['Drama'],
		href: 'Flag_Day_(film)',
		extract:
			'Flag Day is a 2021 American drama film directed by and starring Sean Penn. His daughter Dylan Penn co-stars. It premiered in competition at the 2021 Cannes Film Festival. It was released on August 20, 2021, by United Artists Releasing. The film has received mixed reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/82/Flag_Day_poster.jpeg',
		thumbnail_width: 273,
		thumbnail_height: 364
	},
	{
		title: 'Cryptozoo',
		year: 2021,
		cast: [
			'Lake Bell',
			'Michael Cera',
			'Angeliki Papoulia',
			'Zoe Kazan',
			'Peter Stormare',
			'Grace Zabriskie',
			'Louisa Krause',
			'Thomas Jay Ryan',
			'Alex Karpovsky'
		],
		genres: ['Animated', 'Drama', 'Erotic'],
		href: 'Cryptozoo',
		extract:
			'Cryptozoo is a 2021 American adult animated drama film written and directed by Dash Shaw. It features an ensemble cast as Lake Bell, Michael Cera, Angeliki Papoulia, Zoe Kazan, Peter Stormare, Grace Zabriskie, Louisa Krause and Thomas Jay Ryan. The film had its world premiere at the Sundance Film Festival on January 29, 2021 and was released by Magnolia Pictures in the United States on August 20, 2021.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Cryptozoo_poster.jpg',
		thumbnail_width: 265,
		thumbnail_height: 376
	},
	{
		title: 'Habit',
		year: 2021,
		cast: ['Josie Ho', 'Bella Thorne', 'Gavin Rossdale', 'Hana Mae Lee', 'Paris Jackson'],
		genres: ['Comedy', 'Thriller'],
		href: 'Habit_(2021_film)',
		extract:
			'Habit is a 2021 American comedy thriller film directed by Janell Shirtcliff in her feature directorial debut, from a screenplay by Shirtcliff and Libby Mintz. It stars Bella Thorne, Gavin Rossdale, Libby Mintz, Andreja Pejić, Ione Skye, Jamie Hince, Alison Mosshart, Paris Jackson and Josie Ho.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/0e/Habit_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Demonic',
		year: 2021,
		cast: ['Carly Pope', 'Chris William Martin', 'Michael Rogers', 'Nathalie Boltt', 'Terry Chen'],
		genres: ['Horror', 'Science Fiction'],
		href: 'Demonic_(2021_film)',
		extract:
			'Demonic is a 2021 science fiction horror film written, co-produced and directed by Neill Blomkamp. The film stars Carly Pope, Chris William Martin, Michael J. Rogers, Nathalie Boltt, Terry Chen and Kandyse McClure. Filmed amid the COVID-19 pandemic, it was released on August 20, 2021, receiving generally negative reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/25/Demonic_%282021_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Witcher: Nightmare of the Wolf',
		year: 2021,
		cast: ['Theo James', 'Lara Pulver', 'Graham McTavish', 'Mary McDonnell'],
		genres: ['Animated', 'Fantasy', 'Erotic'],
		href: 'The_Witcher:_Nightmare_of_the_Wolf',
		extract:
			"The Witcher: Nightmare of the Wolf is an adult animated dark fantasy film for Netflix, produced by Lauren Schmidt Hissrich, and starring Theo James, Lara Pulver, Graham McTavish, and Mary McDonnell. The film serves as a spin-off of the Netflix series The Witcher. It focuses on the origin story of Geralt's mentor and fellow witcher Vesemir. The film premiered on August 23, 2021.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/4/4d/The_Witcher_Nightmare_of_the_Wolf.jpg',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'Really Love',
		year: 2021,
		cast: ['Kofi Siriboe', 'Yootha Wong-Loi-Sing', 'Blair Underwood', 'Uzo Aduba', 'Tristan Wilds'],
		genres: ['Drama', 'Romance'],
		href: 'Really_Love_(film)',
		extract:
			'Really Love is a 2020 American romantic drama film directed by Angel Kristi Williams and co-written with Felicia Pride. The film is set in Washington, D.C. and centers the romance between a struggling artist and an ambitious law student. Really Love debuted in October 2020 at AFI Film Festival. It received mainly positive critical reception and holds an 86% rating on Rotten Tomatoes.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Really_Love_2020.png',
		thumbnail_width: 266,
		thumbnail_height: 374
	},
	{
		title: 'Candyman',
		year: 2021,
		cast: [
			'Yahya Abdul-Mateen II',
			'Teyonah Parris',
			'Nathan Stewart-Jarrett',
			'Colman Domingo',
			'Kyle Kaminsky',
			'Vanessa Estelle Williams'
		],
		genres: ['Slasher', 'Supernatural'],
		href: 'Candyman_(2021_film)',
		extract:
			'Candyman is a 2021 American supernatural slasher film directed by Nia DaCosta and written by Jordan Peele, Win Rosenfeld, and DaCosta. The film is a direct sequel to the 1992 film of the same name and the fourth film in the Candyman film series, based on the short story "The Forbidden" by Clive Barker. The film stars Yahya Abdul-Mateen II, Teyonah Parris, Nathan Stewart-Jarrett, and Colman Domingo with Vanessa Williams, Virginia Madsen, and Tony Todd reprising their roles from the original film.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/14/Candyman_%282021_film%29.png',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: 'Vacation Friends',
		year: 2021,
		cast: [
			'John Cena',
			'Lil Rel Howery',
			'Yvonne Orji',
			'Meredith Hagner',
			'Lynn Whitfield',
			'Andrew Bachelor'
		],
		genres: ['Comedy'],
		href: 'Vacation_Friends',
		extract:
			'Vacation Friends is a 2021 American buddy comedy film directed by Clay Tarver, and co-written by Tom Mullen, Tim Mullen, Jonathan Goldstein and John Francis Daley.The film stars Lil Rel Howery, John Cena, Yvonne Orji, Meredith Hagner, Robert Wisdom, Lynn Whitfield, and Andrew Bachelor.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/31/Vacation_Friends.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "He's All That",
		year: 2021,
		cast: [
			'Addison Rae',
			'Tanner Buchanan',
			'Madison Pettis',
			'Rachael Leigh Cook',
			'Peyton Meyer',
			'Matthew Lillard'
		],
		genres: ['Comedy', 'Teen', 'Romance'],
		href: 'He%27s_All_That',
		extract:
			"He's All That is a 2021 American teen romantic comedy film directed by Mark Waters, from a screenplay by R. Lee Fleming Jr. The film is a gender-swapped remake of the 1999 film She's All That, which was a modern adaptation of George Bernard Shaw's 1913 play Pygmalion and George Cukor's 1964 film My Fair Lady. It stars Addison Rae, Tanner Buchanan, Madison Pettis, and Peyton Meyer, as well as Rachael Leigh Cook and Matthew Lillard, who starred in She's All That, appearing in different roles.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1c/He%27s_All_That.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'No Man of God',
		year: 2021,
		cast: ['Elijah Wood', 'Luke Kirby', 'Aleksa Palladino', 'Robert Patrick'],
		genres: ['Crime', 'Mystery'],
		href: 'No_Man_of_God',
		extract:
			"No Man of God is a 2021 American crime mystery film directed by Amber Sealey and written by C. Robert Cargill, under the pseudonym of Kit Lesser. The film stars Elijah Wood, Luke Kirby, Aleksa Palladino and Robert Patrick. It is based on real life transcripts selected from conversations between serial killer Ted Bundy and FBI Special Agent Bill Hagmaier that happened between 1984 and 1989, and the complicated relationship that formed between them during Bundy's final years on death row.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d7/No_Man_of_God_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'Rushed',
		year: 2021,
		cast: ['Siobhan Fallon Hogan', 'Robert Patrick', 'Jake Weary', 'Peri Gilpin'],
		genres: ['Drama', 'Mystery', 'Thriller'],
		href: 'Rushed',
		extract:
			'Rushed is a 2021 American mystery thriller drama film directed by Vibeke Muasya and starring Siobhan Fallon Hogan and Robert Patrick.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/21/Rushed.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Afterlife of the Party',
		year: 2021,
		cast: [
			'Victoria Justice',
			'Midori Francis',
			'Timothy Renouf',
			'Adam Garcia',
			'Gloria Garcia',
			'Spencer Sutherland'
		],
		genres: ['Comedy', 'Supernatural'],
		href: 'Afterlife_of_the_Party',
		extract:
			'Afterlife of the Party is a 2021 American supernatural comedy film directed by Stephen Herek and written by Carrie Freedle. The film stars Victoria Justice as Cassie and Midori Francis as Lisa, two friends who experience challenges in their relationship upon reaching adulthood. The film also stars Timothy Renouf, Adam Garcia, Gloria Garcia and Spencer Sutherland.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3f/Afterlife_of_the_Party.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Shang-Chi and the Legend of the Ten Rings',
		year: 2021,
		cast: [
			'Simu Liu',
			'Awkwafina',
			"Meng'er Zhang",
			'Fala Chen',
			'Florian Munteanu',
			'Benedict Wong',
			'Michelle Yeoh',
			'Ben Kingsley',
			'Tony Leung'
		],
		genres: ['Superhero'],
		href: 'Shang-Chi_and_the_Legend_of_the_Ten_Rings',
		extract:
			"Shang-Chi and the Legend of the Ten Rings is a 2021 American superhero film based on Marvel Comics featuring the character Shang-Chi. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 25th film in the Marvel Cinematic Universe (MCU). The film was directed by Destin Daniel Cretton, from a screenplay he wrote with Dave Callaham and Andrew Lanham, and stars Simu Liu as Shang-Chi alongside Awkwafina, Meng'er Zhang, Fala Chen, Florian Munteanu, Benedict Wong, Yuen Wah, Michelle Yeoh, Ben Kingsley, and Tony Leung. In the film, Shang-Chi is forced to confront his past when his father Wenwu (Leung), the leader of the Ten Rings organization, draws Shang-Chi and his sister Xialing (Zhang) into a search for a mythical village.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Cinderella',
		year: 2021,
		cast: [
			'screenwriter)',
			'Camila Cabello',
			'Idina Menzel',
			'Nicholas Galitzine',
			'Minnie Driver',
			'Pierce Brosnan',
			'Billy Porter'
		],
		genres: ['Musical', 'Romance'],
		href: 'Cinderella_(2021_American_film)',
		extract:
			'Cinderella is a 2021 romantic musical film based on the fairy tale of the same name by Charles Perrault. Written and directed by Kay Cannon, it stars singer Camila Cabello as the title character in her acting debut, alongside Idina Menzel, Minnie Driver, Nicholas Galitzine, Billy Porter, and Pierce Brosnan. It is a jukebox musical, featuring pop and rock hits, in addition to several original songs.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Cinderella_%282021_film%29.jpg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'Worth',
		year: 2021,
		cast: [
			'Michael Keaton',
			'Stanley Tucci',
			'Amy Ryan',
			'Tate Donovan',
			'Shunori Ramanathan',
			'Laura Benanti',
			'Marc Maron'
		],
		genres: ['Biography'],
		href: 'Worth_(film)',
		extract:
			"Worth is a 2020 biographical film directed by Sara Colangelo from a screenplay by Max Borenstein and starring Michael Keaton, Amy Ryan, Stanley Tucci, Tate Donovan, Shunori Ramanathan, and Laura Benanti. The film depicts Kenneth Feinberg's handling of the September 11th Victim Compensation Fund. The picture had its world premiere at the Sundance Film Festival on January 24, 2020 and was exhibited in a limited theatrical release and on Netflix beginning September 3, 2021.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/92/Worth_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Gateway',
		year: 2021,
		cast: ['Shea Whigham', 'Olivia Munn', 'Frank Grillo', 'Bruce Dern', 'Keith David'],
		genres: ['Crime', 'Thriller'],
		href: 'The_Gateway_(2021_film)',
		extract:
			'The Gateway is an American crime thriller film directed by Michele Civetta and starring Shea Whigham, Olivia Munn and Frank Grillo. The screenplay, written by Alexander Felix and originally titled Where Angels Die, was included in the 2013 Black List. The film was released in theaters and on VOD on September 3, 2021.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f3/The_Gateway_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Wild Indian',
		year: 2021,
		cast: ['Michael Greyeyes', 'Chaske Spencer', 'Jesse Eisenberg', 'Kate Bosworth'],
		genres: ['Thriller'],
		href: 'Wild_Indian',
		extract:
			'Wild Indian is a 2021 American thriller film written and directed by Lyle Mitchell Corbine Jr. The film stars Michael Greyeyes and Chaske Spencer with Jesse Eisenberg and Kate Bosworth. The film was supported by the Sundance Institute through the Writers and Directors Labs.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/df/Wild_Indian_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'We Need to Do Something',
		year: 2021,
		cast: [
			'Max Booth III (screenwriter)',
			'Sierra McCormick',
			'Vinessa Shaw',
			'Pat Healy',
			'Ozzy Osbourne'
		],
		genres: ['Horror'],
		href: 'We_Need_to_Do_Something',
		extract:
			"We Need to Do Something is a 2021 American psychological horror film directed by Sean King O'Grady and starring Sierra McCormick, Vinessa Shaw, Lisette Alexis, Pat Healy, and Ozzy Osbourne. Based on the novella of the same name, the film centers on a family trapped in their bathroom during a tornado. The film was shot during the COVID-19 pandemic and is the first film production from Spin a Black Yarn Productions, with its co-founders Josh Malerman and Ryan Lewis serving as producers.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e2/We_Need_to_Do_Something.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Kate',
		year: 2021,
		cast: [
			'Mary Elizabeth Winstead',
			'Miku Martineau',
			'Woody Harrelson',
			'Tadanobu Asano',
			'Michiel Huisman',
			'Miyavi',
			'Jun Kunimura'
		],
		genres: ['Action', 'Thriller'],
		href: 'Kate_(film)',
		extract:
			"Kate is a 2021 American action thriller film directed by Cedric Nicolas-Troyan and written by Umair Aleem. The film stars Mary Elizabeth Winstead, Miku Martineau, Woody Harrelson, Tadanobu Asano, Michiel Huisman, Miyavi, and Jun Kunimura. The film follows Kate (Winstead), an assassin, whose mentor and handler (Harrelson) assigns her to kill a high-ranking yakuza boss. During Kate's final mission, she finds out that she has been poisoned and has at most a day to live, so she uses her last hours to get revenge and find out who set her up.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Kate_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "Everybody's Talking About Jamie",
		year: 2021,
		cast: [
			'Max Harwood',
			'Sarah Lancashire',
			'Lauren Patel',
			'Shobna Gulati',
			'Ralph Ineson',
			'Adeel Akhtar',
			'Samuel Bottomley',
			'Sharon Horgan',
			'Richard E. Grant'
		],
		genres: ['Comedy', 'Drama', 'Musical', 'Biography'],
		href: 'Everybody%27s_Talking_About_Jamie_(film)',
		extract:
			"Everybody's Talking About Jamie is a 2021 biographical coming-of-age musical comedy-drama film directed by Jonathan Butterell from a screenplay by Tom MacRae based on the stage musical of the same name, which in turn was adapted from the BBC Three documentary Jamie: Drag Queen at 16 by Jenny Popplewell. The film stars newcomer Max Harwood with Sarah Lancashire, Lauren Patel, Shobna Gulati, Ralph Ineson, Adeel Akhtar, Samuel Bottomley, Sharon Horgan, and Richard E. Grant. The story follows and is based upon the true-life story of 16-year-old British schoolboy Jamie Campbell, as he overcomes prejudice and bullying, to step out of the darkness and become a drag queen.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/c/c6/Everybody%27s_Talking_About_Jamie_%28film%29.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Malignant',
		year: 2021,
		cast: [
			'Annabelle Wallis',
			'Maddie Hasson',
			'George Young',
			'Michole Briana White',
			'Jacqueline McKenzie'
		],
		genres: ['Horror'],
		href: 'Malignant_(2021_film)',
		extract:
			'Malignant is a 2021 American horror film directed by James Wan from a screenplay by Akela Cooper, based on a story by Wan, Ingrid Bisu, and Cooper. The film stars Annabelle Wallis as a woman who begins to have visions of people being murdered, only to realize the events are happening in real life. Maddie Hasson, George Young, Michole Briana White, and Jacqueline McKenzie also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Malignant2021poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Queenpins',
		year: 2021,
		cast: [
			'Kristen Bell',
			'Kirby Howell-Baptiste',
			'Paul Walter Hauser',
			'Bebe Rexha',
			'Vince Vaughn'
		],
		genres: ['Comedy'],
		href: 'Queenpins',
		extract:
			'Queenpins is a 2021 American comedy film written and directed by Aron Gaudet and Gita Pullapilly. It stars Kristen Bell, Kirby Howell-Baptiste, Paul Walter Hauser, Bebe Rexha, and Vince Vaughn. Ben Stiller serves as an executive producer under his Red Hour Productions banner.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/75/Queenpins_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'The Card Counter',
		year: 2021,
		cast: ['Oscar Isaac', 'Tiffany Haddish', 'Tye Sheridan', 'Willem Dafoe'],
		genres: ['Crime', 'Drama'],
		href: 'The_Card_Counter',
		extract:
			'The Card Counter is a 2021 American crime drama film written and directed by Paul Schrader. It stars Oscar Isaac, Tiffany Haddish, Tye Sheridan, and Willem Dafoe. Martin Scorsese is an executive producer.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/2/21/The_Card_Counter_%282021%29_film_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Come from Away',
		year: 2021,
		cast: [
			'Petrina Bromley',
			'Jenn Colella',
			"De'Lon Grant",
			'Joel Hatch',
			'Tony LePage',
			'Caesar Samayoa',
			'Q. Smith',
			'Astrid Van Wieren',
			'Emily Walton',
			'Jim Walton',
			'Sharon Wheatley',
			'Paul Whitty'
		],
		genres: ['Musical'],
		href: 'Come_from_Away_(film)',
		extract:
			"Come from Away is a 2021 American-Canadian musical film comprising a live stage recording of Irene Sankoff and David Hein's 2017 musical of the same name, which tells the true story of 7,000 airline passengers who were stranded in a small town in Newfoundland, where they were housed and welcomed, after the September 11, 2001 terrorist attacks. The film, produced in response to the shutdown of Broadway caused by the COVID-19 pandemic in the spring of 2020, was directed by Christopher Ashley and filmed in front of an audience of frontline workers and 9/11 survivors on May 2021 at the Gerald Schoenfeld Theater in New York City, featuring members of the Broadway cast.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Come_from_Away.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'The Voyeurs',
		year: 2021,
		cast: ['Sydney Sweeney', 'Justice Smith', 'Ben Hardy', 'Natasha Liu Bordizzo'],
		genres: ['Erotic', 'Thriller'],
		href: 'The_Voyeurs',
		extract:
			'The Voyeurs is a 2021 American erotic thriller film written and directed by Michael Mohan. Shot and set in Montreal, Quebec, Canada, it stars Sydney Sweeney and Justice Smith as a young couple who spy on and become obsessed by the lives of their neighbors across the street. Greg Gilreath and Adam Hendricks serve as producers under their Divide/Conquer banner.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/23/The_Voyeurs_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Small Engine Repair',
		year: 2021,
		cast: [
			'Jon Bernthal',
			'Shea Whigham',
			'Jordana Spiro',
			'John Pollono',
			'Ciara Bravo',
			'Spencer House'
		],
		genres: ['Comedy', 'Drama'],
		href: 'Small_Engine_Repair_(film)',
		extract:
			"Small Engine Repair is a 2021 American black comedy drama film written and directed by John Pollono based on Pollono's play of the same name.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/22/Small_Engine_Repair.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Language Lessons',
		year: 2021,
		cast: ['Natalie Morales', 'Mark Duplass', 'Desean Terry'],
		genres: ['Drama'],
		href: 'Language_Lessons',
		extract:
			'Language Lessons is a 2021 American drama film directed by Natalie Morales and written by Morales and Mark Duplass. The film stars Morales, Duplass and Desean Terry.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/46/Language_Lessons_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Show Me the Father',
		year: 2021,
		cast: [
			'Sherman Smith',
			'Tony Evans',
			'Steven Kendrick',
			'Alex Kendrick',
			'Deland McCullough',
			'Jim Daly',
			'Eddie George'
		],
		genres: ['Documentary'],
		href: 'Show_Me_the_Father',
		extract:
			"Show Me the Father is a 2021 American Christian documentary film by director Rick Altizer, presenting five fatherhood-related stories connected with commentary by Tony Evans, produced by Mark Miller and executive produced by the Kendrick brothers. It is the Kendrick brothers' seventh film and their third through their subsidiary, Kendrick Brothers Productions. It was theatrically released on September 10, 2021.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/8/87/Show_Me_the_Father_Promotional_Poster.jpg',
		thumbnail_width: 261,
		thumbnail_height: 381
	},
	{
		title: 'Dating and New York',
		year: 2021,
		cast: [
			'Francesca Reale',
			'Jaboukie Young-White',
			'Catherine Cohen',
			'Brian Muller',
			'Jerry Ferrara'
		],
		genres: ['Comedy'],
		href: 'Dating_and_New_York',
		extract:
			'Dating and New York is a 2021 American comedy film written and directed by Jonah Feingold in his directorial debut. It stars Jaboukie Young-White, Francesca Reale, Catherine Cohen, Brian Muller, Jerry Ferrara, Arturo Castro, Taylor Hill, Alex Moffat, Eva Victor and Yedoye Travis.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Dating_and_New_York.jpg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Bad Candy',
		year: 2021,
		cast: ['Zach Galligan', 'Derek Russo', 'Corey Taylor'],
		genres: ['Horror'],
		href: 'Bad_Candy',
		extract:
			'Bad Candy is a 2021 American anthology horror film directed by Scott B. Hansen and Desiree Connell. It stars Zach Galligan, Derek Russo, and Corey Taylor.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Bad_candy.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'My Son',
		year: 2021,
		cast: ['James McAvoy', 'Claire Foy', 'Gary Lewis', 'Tom Cullen'],
		genres: ['Mystery', 'Thriller'],
		href: 'My_Son_(2021_film)',
		extract:
			"My Son is a 2021 mystery thriller film written and directed by Christian Carion. It is an English-language remake of Carion's 2017 French film Mon garçon, and stars James McAvoy and Claire Foy. McAvoy was not supplied with a script or dialogue, and improvises his way through the film.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8b/My_Son_%282021_film%29.png',
		thumbnail_width: 250,
		thumbnail_height: 333
	},
	{
		title: 'Nightbooks',
		year: 2021,
		cast: ['Winslow Fegley', 'Lidya Jewett', 'Krysten Ritter'],
		genres: ['Fantasy'],
		href: 'Nightbooks',
		extract:
			"Nightbooks is a 2021 American dark fantasy film directed by David Yarovesky and written by Mikki Daughtry and Tobias Iaconis. It is based on the 2018 horror-fantasy children's book of the same name by J. A. White. The film stars Winslow Fegley, Lidya Jewett, and Krysten Ritter.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Nightbooks_film_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Starling',
		year: 2021,
		cast: [
			'Matt Harris (screenpaly)',
			'Melissa McCarthy',
			"Chris O'Dowd",
			'Timothy Olyphant',
			'Daveed Diggs',
			'Skyler Gisondo',
			'Laura Harrier',
			'Rosalind Chao',
			'Loretta Devine',
			'Kevin Kline'
		],
		genres: ['Comedy', 'Drama', 'Fantasy'],
		href: 'The_Starling',
		extract:
			"The Starling is a 2021 American fantasy comedy-drama film directed by Theodore Melfi and written by Matt Harris. The film stars Melissa McCarthy, Chris O'Dowd, Timothy Olyphant, Kim Quinn, Skyler Gisondo, Loretta Devine, Ravi Kapoor, Daveed Diggs, Rosalind Chao, Laura Harrier, and Kevin Kline.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/58/The_Starling.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Eyes of Tammy Faye',
		year: 2021,
		cast: ['Jessica Chastain', 'Andrew Garfield', 'Cherry Jones', "Vincent D'Onofrio"],
		genres: ['Drama', 'Biography'],
		href: 'The_Eyes_of_Tammy_Faye_(2021_film)',
		extract:
			"The Eyes of Tammy Faye is a 2021 American biographical drama film directed by Michael Showalter from a screenplay by Abe Sylvia, based on the 2000 documentary of the same name by Fenton Bailey and Randy Barbato of World of Wonder. The film tells the story of Tammy Faye Bakker, from her humble beginnings growing up in International Falls, Minnesota, through the rise and fall of her televangelism career and marriage to Jim Bakker. Cherry Jones and Vincent D'Onofrio also star. The film is produced by Chastain's production company, Freckle Films.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/2/2f/The_Eyes_of_Tammy_Faye_%282021_film%29.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Cry Macho',
		year: 2021,
		cast: ['Clint Eastwood', 'Dwight Yoakam', 'Eduardo Minett'],
		genres: ['Drama', 'Western'],
		href: 'Cry_Macho_(film)',
		extract:
			"Cry Macho is a 2021 American neo-Western drama film directed and produced by Clint Eastwood and written by Nick Schenk and the late N. Richard Nash, based on Nash's 1975 novel. It stars Eastwood as a former rodeo star hired to reunite a young boy in Mexico with his father in the United States. There were many attempts to adapt Nash's novel into a film over the years. Most notably, Arnold Schwarzenegger came on board to star in 2011 but canceled after a scandal. In 2020, Eastwood's adaptation was announced; he produced the film with Albert S. Ruddy, Tim Moore, and Jessica Meier.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b5/Cry_Macho_film_poster.png',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'Copshop',
		year: 2021,
		cast: ['Gerard Butler', 'Frank Grillo', 'Alexis Louder', 'Toby Huss'],
		genres: ['Action', 'Thriller'],
		href: 'Copshop',
		extract:
			'Copshop is a 2021 American action thriller film directed by Joe Carnahan and written by Kurt McLeod and Carnahan, based on a story by McLeod and Mark Williams. The film stars Gerard Butler, Frank Grillo, and Alexis Louder, and is set in a small-town police station that becomes the battleground between a hitman, a novice police officer, and a con artist.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Copshop.jpg',
		thumbnail_width: 264,
		thumbnail_height: 378
	},
	{
		title: 'Blue Bayou',
		year: 2021,
		cast: [
			'Justin Chon',
			'Alicia Vikander',
			"Mark O'Brien",
			'Linh Dan Pham',
			'Sydney Kowalske',
			'Vondie Curtis-Hall',
			'Emory Cohen'
		],
		genres: ['Drama'],
		href: 'Blue_Bayou_(film)',
		extract:
			"Blue Bayou is a 2021 American drama film written and directed by Justin Chon. The film stars Chon, Alicia Vikander, Mark O'Brien, Linh Dan Pham, Sydney Kowalske, Vondie Curtis-Hall and Emory Cohen.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6d/Blue_Bayou_%28film%29.jpg',
		thumbnail_width: 264,
		thumbnail_height: 378
	},
	{
		title: 'Prisoners of the Ghostland',
		year: 2021,
		cast: [
			'Nicolas Cage',
			'Sofia Boutella',
			'Bill Moseley',
			'Nick Cassavetes',
			'Tak Sakaguchi',
			'Ed Skrein'
		],
		genres: ['Horror', 'Western'],
		href: 'Prisoners_of_the_Ghostland',
		extract:
			"Prisoners of the Ghostland is a 2021 American horror Western film directed by Sion Sono, from a script by Aaron Hendry and Reza Sixo Safai. It stars Nicolas Cage, Sofia Boutella, and Bill Moseley. Its plot revolves around a notorious criminal, Hero, who is sent to rescue the governor's adopted granddaughter, who has disappeared into a dark region called Ghostland.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e9/Prisoners_of_the_Ghostland.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Best Sellers',
		year: 2021,
		cast: [
			'Michael Caine',
			'Aubrey Plaza',
			'Scott Speedman',
			'Ellen Wong',
			'Veronica Ferres',
			'Cary Elwes'
		],
		genres: ['Comedy', 'Drama'],
		href: 'Best_Sellers_(film)',
		extract:
			'Best Sellers is a 2021 comedy-drama film directed by Lina Roessler and written by Anthony Grieco. It stars Michael Caine, Aubrey Plaza, Scott Speedman, Ellen Wong, Veronica Ferres, and Cary Elwes.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Best_Sellers_%28film%29.png',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'Lady of the Manor',
		year: 2021,
		cast: ['Melanie Lynskey', 'Judy Greer', 'Justin Long', 'Ryan Phillippe', 'Luis Guzmán'],
		genres: ['Comedy'],
		href: 'Lady_of_the_Manor_(film)',
		extract:
			'Lady of the Manor is a 2021 American buddy comedy film written and directed by brothers Justin Long and Christian Long in their directorial debuts. It stars Melanie Lynskey, Judy Greer, Justin Long, Ryan Phillippe, Luis Guzmán, and Patrick Duffy. The film premiered at the Gasparilla International Film Festival, and was released by Lionsgate on September 17, 2021.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/be/Lady_of_the_Manor_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 375
	},
	{
		title: 'The Nowhere Inn',
		year: 2021,
		cast: ['Annie Clark', 'Carrie Brownstein', 'Dakota Johnson'],
		genres: ['Comedy', 'Thriller', 'Satire'],
		href: 'The_Nowhere_Inn',
		extract:
			'The Nowhere Inn is a 2020 American mockumentary psychological thriller-comedy film, directed by Bill Benz, from a screenplay by Annie Clark and Carrie Brownstein. It stars Clark, Brownstein, and Dakota Johnson.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Nowhere_inn_xlg.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'My Name is Pauli Murray',
		year: 2021,
		cast: [],
		genres: ['Documentary'],
		href: 'My_Name_is_Pauli_Murray',
		extract:
			'My Name Is Pauli Murray is an 2021 American documentary film, directed by Betsy West and Julie Cohen, written by West, Cohen, Talleah Bridges McMahon and Cinque Northern. It follows the life of lawyer and activist Pauli Murray.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/11/My_Name_is_Pauli_Murray.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'The Killing of Kenneth Chamberlain',
		year: 2021,
		cast: [
			'Frankie Faison',
			"Steve O'Connell",
			'Enrico Natale',
			'Ben Marten',
			'LaRoyce Hawkins',
			'Anika Noni Rose'
		],
		genres: ['Drama', 'Thriller'],
		href: 'The_Killing_of_Kenneth_Chamberlain',
		extract:
			'The Killing of Kenneth Chamberlain is a 2019 American thriller drama film written, produced and directed by David Midell and starring Frankie Faison as the real life titular character. It is based on the police shooting of Chamberlain that occurred on November 29, 2011, in White Plains, New York. Morgan Freeman and Lori McCreary serve as executive producers of the film.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/7/7e/The_Killing_of_Kenneth_Chamberlain.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Intrusion',
		year: 2021,
		cast: ['Freida Pinto', 'Logan Marshall-Green', 'Robert John Burke'],
		genres: ['Thriller'],
		href: 'Intrusion_(film)',
		extract:
			'Intrusion is a 2021 American psychological thriller film directed by Adam Salky and written by Christopher Sparling, starring Freida Pinto and Logan Marshall-Green. It was released on September 22, 2021, by Netflix. It is about a couple who move from Boston to a small town in New Mexico to live a quieter life, only to find themselves the victims of a burglary and a deadly home invasion.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Intrusion_2021_film_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'My Little Pony: A New Generation',
		year: 2021,
		cast: [
			'Vanessa Hudgens',
			'Kimiko Glenn',
			'James Marsden',
			'Sofia Carson',
			'Liza Koshy',
			'Ken Jeong',
			'Elizabeth Perkins',
			'Jane Krakowski',
			'Michael McKean',
			'Phil LaMarr'
		],
		genres: ['Animated', 'Comedy', 'Fantasy'],
		href: 'My_Little_Pony:_A_New_Generation',
		extract:
			"My Little Pony: A New Generation is a 2021 computer-animated fantasy comedy film directed by Robert Cullen and José L. Ucha, co-directed by Mark Fattibene with Cecil Kramer and Peter Lewis as producers, and written by Gillian Berrow and Tim Sullivan from a story by Cullen, Ucha and Sullivan. Based on Hasbro's My Little Pony franchise, the film marks the start of the fifth incarnation of the franchise, which is set to serve as the official sequel to the previous generation, a first for the franchise.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/a/aa/My_Little_Pony_A_New_Generation_film_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Dear Evan Hansen',
		year: 2021,
		cast: [
			'Ben Platt',
			'Kaitlyn Dever',
			'Amandla Stenberg',
			'Nik Dodani',
			'Colton Ryan',
			'Danny Pino',
			'Julianne Moore',
			'Amy Adams'
		],
		genres: ['Musical'],
		href: 'Dear_Evan_Hansen_(film)',
		extract:
			'Dear Evan Hansen is a 2021 American coming-of-age musical film directed by Stephen Chbosky from a screenplay by Steven Levenson, based on the stage musical of the same name by Levenson, Benj Pasek, and Justin Paul. Ben Platt plays the title role, reprising the performance that he originated on stage six years earlier. The ensemble cast also includes Kaitlyn Dever, Amandla Stenberg, Nik Dodani, Colton Ryan, Danny Pino, Julianne Moore, and Amy Adams.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/59/Dear_Evan_poster.jpg',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: 'The Guilty',
		year: 2021,
		cast: [
			'Jake Gyllenhaal',
			'Ethan Hawke',
			'Riley Keough',
			'Christina Vidal',
			'Eli Goree',
			"Da'Vine Joy Randolph",
			'Paul Dano',
			'Peter Sarsgaard'
		],
		genres: ['Crime', 'Thriller'],
		href: 'The_Guilty_(2021_film)',
		extract:
			"The Guilty is a 2021 American crime thriller film directed and produced by Antoine Fuqua, from a screenplay by Nic Pizzolatto. A remake of the 2018 Danish film of the same name, the film stars Jake Gyllenhaal and Christina Vidal, with the voices of Ethan Hawke, Riley Keough, Eli Goree, Da'Vine Joy Randolph, Paul Dano, and Peter Sarsgaard.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/59/The_Guilty_%282021_film%29.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Birds of Paradise',
		year: 2021,
		cast: ['Kristine Froseth', 'Diana Silvers', 'Jacqueline Bisset', 'Stav Strashko'],
		genres: ['Dance', 'Drama'],
		href: 'Birds_of_Paradise_(2021_film)',
		extract:
			'Birds of Paradise is a 2021 American dance drama film written and directed by Sarah Adina Smith, based upon the 2019 novel Bright Burning Stars by A.K. Small. It stars Kristine Frøseth, Diana Silvers, Caroline Goodall, Eva Lomby, and Jacqueline Bisset. It was released on September 24, 2021, by Amazon Studios.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/a/a8/Birds_of_Paradise_%282021_film%29.jpg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'After We Fell',
		year: 2021,
		cast: [
			'Josephine Langford',
			'Hero Fiennes Tiffin',
			'Louise Lombard',
			'Rob Estes',
			'Arielle Kebbel',
			'Chance Perdomo',
			'Frances Turner',
			'Kiana Madeira',
			'Carter Jenkins',
			'Stephen Moyer',
			'Mira Sorvino'
		],
		genres: ['Drama', 'Romance'],
		href: 'After_We_Fell',
		extract:
			"After We Fell is a 2021 American romantic drama film directed by Castille Landon, from a screenplay by Sharon Soboil. Based on the 2014 novel of the same name by Anna Todd, it serves as a sequel to After We Collided, and is the third installment overall in the After film series. Starring Josephine Langford and Hero Fiennes-Tiffin, reprising their roles as Tessa Young and Hardin Scott, respectively; the plot includes Tessa's preparations for a job in Seattle, the arrival of Tessa's father and revelations about Hardin's family, all of which threaten the couple's relationship. Louise Lombard, Rob Estes, Arielle Kebbel, Chance Perdomo, Frances Turner, Kiana Madeira, Carter Jenkins and Mira Sorvino appear in supporting roles.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/47/After_We_Fell_film_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Venom: Let There Be Carnage',
		year: 2021,
		cast: [
			'Tom Hardy',
			'Michelle Williams',
			'Naomie Harris',
			'Reid Scott',
			'Stephen Graham',
			'Woody Harrelson'
		],
		genres: ['Superhero'],
		href: 'Venom:_Let_There_Be_Carnage',
		extract:
			"Venom: Let There Be Carnage is a 2021 American superhero film featuring the Marvel Comics character Venom, produced by Columbia Pictures in association with Marvel. Distributed by Sony Pictures Releasing, it is the second film in Sony's Spider-Man Universe and the sequel to Venom (2018). The film was directed by Andy Serkis from a screenplay by Kelly Marcel, based on a story she wrote with Tom Hardy, who stars as Eddie Brock and Venom alongside Michelle Williams, Naomie Harris, Reid Scott, Stephen Graham, and Woody Harrelson. In the film, Brock and the alien symbiote Venom must face serial killer Cletus Kasady (Harrelson) after he becomes the host of an offshoot of Venom named Carnage.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/a/a7/Venom_Let_There_Be_Carnage_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Many Saints of Newark',
		year: 2021,
		cast: [
			'Alessandro Nivola',
			'Michael Gandolfini',
			'Leslie Odom Jr.',
			'Jon Bernthal',
			'Corey Stoll',
			'Billy Magnussen',
			'Michela De Rossi',
			'John Magaro',
			'Ray Liotta',
			'Vera Farmiga'
		],
		genres: ['Crime', 'Drama'],
		href: 'The_Many_Saints_of_Newark',
		extract:
			"The Many Saints of Newark is a 2021 American crime drama film directed by Alan Taylor and written by David Chase and Lawrence Konner. A prequel to Chase's HBO crime drama series The Sopranos, it takes place during the 1960s and 1970s in Newark, New Jersey. The film follows a violent gang war from the perspectives of mobster Dickie Moltisanti and his teenage nephew, Tony Soprano, in the midst of the city's 1967 riots. It stars Alessandro Nivola as Dickie and Michael Gandolfini as Tony, the character originated by his father in the series, with Leslie Odom Jr., Jon Bernthal, Corey Stoll, Billy Magnussen, Michela De Rossi, John Magaro, Ray Liotta, and Vera Farmiga in supporting roles.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/32/TheManySaintsOfNewarkPoster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'The Addams Family 2',
		year: 2021,
		cast: [
			'Oscar Isaac',
			'Charlize Theron',
			'Chloë Grace Moretz',
			'Nick Kroll',
			'Javon Walton',
			'Wallace Shawn',
			'Snoop Dogg',
			'Bette Midler',
			'Bill Hader'
		],
		genres: ['Animated', 'Comedy', 'Supernatural'],
		href: 'The_Addams_Family_2',
		extract:
			'The Addams Family 2 is a 2021 computer-animated supernatural black comedy road film directed by Greg Tiernan and Conrad Vernon, co-directed by Laura Brousseau and Kevin Pavlovic, written by Dan Hernandez, Benji Samit, Ben Queen, and Susanna Fogel with a story by Hernandez and Samit, and based on the characters created by Charles Addams. It is the sequel to the 2019 film The Addams Family and stars the voices of Oscar Isaac, Charlize Theron, Chloë Grace Moretz, Nick Kroll, Javon Walton, Wallace Shawn, Snoop Dogg, Bette Midler, and Bill Hader. It tells the story of the Addams family as they go on a road trip.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/86/The_Addams_Family_2_poster.png',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Bingo Hell',
		year: 2021,
		cast: ['L. Scott Caldwell', 'Adriana Barraza', 'Joshua Caleb Johnson'],
		genres: ['Comedy', 'Horror'],
		href: 'Bingo_Hell',
		extract:
			'Bingo Hell is a 2021 American comedy horror film directed by Gigi Saul Guerrero from a screenplay that she co-wrote with Shane McKenzie and Perry Blackshear. The film is the fifth installment in the anthological Welcome to the Blumhouse film series. The film stars Adriana Barraza, L. Scott Caldwell, and Joshua Caleb Johnson.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Bingo_Hell.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Black as Night',
		year: 2021,
		cast: ['Ashja Cooper', 'Theodus Crane', 'Kenneisha Thompson', 'Al Mitchell'],
		genres: ['Horror'],
		href: 'Black_as_Night',
		extract:
			'Black as Night is a 2021 American horror film written by Sherman Payne and directed by Maritte Lee Go. It stars Asjha Cooper, Frabizio Guido, Mason Beauchamp, Abbie Gayle, Craig Tate and Keith David. The film is the sixth installment in the anthological Welcome to the Blumhouse film series.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Black_as_night.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Old Henry',
		year: 2021,
		cast: ['Tim Blake Nelson', 'Scott Haze', 'Gavin Lewis', 'Trace Adkins', 'Stephen Dorff'],
		genres: ['Action', 'Drama', 'Western'],
		href: 'Old_Henry_(film)',
		extract:
			"Old Henry is a 2021 American western action drama film written and directed by Potsy Ponciroli. It stars Tim Blake Nelson as the titular character, a farmer who must protect his son from outlaws, with Scott Haze, Gavin Lewis, Trace Adkins, and Stephen Dorff in supporting roles. The film had its world premiere at the Venice Film Festival on September 7, 2021, and was theatrically released in the United States by Shout! Studios on October 1. It was critically acclaimed, with praise to the story, Ponciroli's direction, and Nelson's performance. The National Board of Review selected the film in its annual list of the Top Ten Independent Films of the year.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Old_Henry_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Jesus Music',
		year: 2021,
		cast: ['Amy Grant', 'Michael W. Smith', 'TobyMac', 'Kirk Franklin', 'Lauren Daigle'],
		genres: ['Documentary'],
		href: 'The_Jesus_Music',
		extract:
			'The Jesus Music is a 2021 American documentary film distributed by Lionsgate and directed by the Erwin brothers, detailing the history of contemporary Christian music as a musical and cultural phenomenon.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Jesus_music.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Mayday',
		year: 2021,
		cast: ['Grace Van Patten', 'Mia Goth', 'Havana Rose Liu', 'Soko', 'Juliette Lewis'],
		genres: ['Action', 'Drama'],
		href: 'Mayday_(2021_film)',
		extract:
			'Mayday is a 2021 American action drama film, written and directed by Karen Cinorre, in her directorial debut. It stars Grace Van Patten, Mia Goth, Juliette Lewis, Soko and Havana Rose Liu. It had its world premiere at the 2021 Sundance Film Festival on January 31, 2021.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/22/Mayday_%282021_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "God's Not Dead: We the People",
		year: 2021,
		cast: [
			'David A. R. White',
			'Antonio Sabàto Jr.',
			'Francesca Battistelli',
			'William Forsythe',
			'Isaiah Washington',
			'Jeanine Pirro'
		],
		genres: ['Drama'],
		href: 'God%27s_Not_Dead:_We_the_People',
		extract:
			"God's Not Dead: We the People is a 2021 American Christian drama film directed by Vance Null, with a script written by Tommy Blaze, from an original story co-authored by Cary Solomon and Chuck Konzelman. The sequel to God's Not Dead: A Light in Darkness and the fourth installment in the God's Not Dead series, the plot centers around Rev. David \"Dave\" Hill's role in presenting a case for God before Congress. The film was released on October 4, 2021, in a three-night theatrical engagement, and grossed over $1.1 million in the domestic box office.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d8/God%27s_Not_Dead_4_poster.png',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: "There's Someone Inside Your House",
		year: 2021,
		cast: ['Sydney Park', 'Theodore Pellerin', 'Asjha Cooper', 'Jesse LaTourette', 'Diego Josef'],
		genres: ['Slasher'],
		href: 'There%27s_Someone_Inside_Your_House_(film)',
		extract:
			"There's Someone Inside Your House is a 2021 American slasher film directed by Patrick Brice and written by Henry Gayden. It is an adaptation of the 2017 novel of the same name by Stephanie Perkins and stars Sydney Park, Théodore Pellerin, Asjha Cooper, Jesse LaTourette, and Diego Josef. The plot follows Makani Young (Park), a senior transfer student from Hawaii who finds herself in the center of gruesome murder cases in her newly acquainted town of Osborne, Nebraska.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/b/ba/There%27s_Someone_Inside_Your_House_%28film_poster%29.png',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'No Time to Die',
		year: 2021,
		cast: [
			'Daniel Craig',
			'Rami Malek',
			'Léa Seydoux',
			'Lashana Lynch',
			'Ben Whishaw',
			'Naomie Harris',
			'Billy Magnussen',
			'Ana de Armas',
			'David Dencik',
			'Jeffrey Wright',
			'Christoph Waltz',
			'Ralph Fiennes'
		],
		genres: ['Spy'],
		href: 'No_Time_to_Die',
		extract:
			'No Time to Die is a 2021 spy film and the twenty-fifth in the James Bond series produced by Eon Productions, starring Daniel Craig in his fifth and final portrayal of fictional British MI6 agent James Bond. It was directed by Cary Joji Fukunaga from a screenplay by Neal Purvis, Robert Wade, Fukunaga and Phoebe Waller-Bridge. Léa Seydoux, Ben Whishaw, Naomie Harris, Jeffrey Wright, Christoph Waltz, Rory Kinnear and Ralph Fiennes reprise their roles from previous films, with Rami Malek, Lashana Lynch, Billy Magnussen, Ana de Armas, David Dencik and Dali Benssalah also starring. In No Time to Die, Bond has left active service with MI6 and is recruited by the CIA to find a kidnapped scientist, which leads to a showdown with a powerful adversary.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/No_Time_to_Die_poster.jpg/320px-No_Time_to_Die_poster.jpg',
		thumbnail_width: 320,
		thumbnail_height: 236
	},
	{
		title: 'Mass',
		year: 2021,
		cast: ['Reed Birney', 'Ann Dowd', 'Jason Isaacs', 'Martha Plimpton'],
		genres: ['Drama'],
		href: 'Mass_(2021_film)',
		extract:
			'Mass is a 2021 American drama film written and directed by Fran Kranz in his directorial debut. It stars Reed Birney, Ann Dowd, Jason Isaacs, and Martha Plimpton as grieving parents who meet to discuss a tragedy involving their sons. The film had its world premiere at the 2021 Sundance Film Festival on January 30, 2021, and was released on October 8, 2021, by Bleecker Street. At the BAFTA Awards, Dowd received a nomination for Best Actress in a Supporting Role.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Mass_2021_film.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'South of Heaven',
		year: 2021,
		cast: ['Jason Sudeikis', 'Evangeline Lilly', 'Shea Whigham', 'Mike Colter'],
		genres: ['Crime'],
		href: 'South_of_Heaven_(film)',
		extract:
			'South of Heaven is a 2021 American crime film directed by Aharon Keshales and starring Jason Sudeikis and Evangeline Lilly.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/19/South_of_Heaven_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'The Manor',
		year: 2021,
		cast: [
			'screenwriter)',
			'Barbara Hershey',
			'Bruce Davison',
			'Stacey Travis',
			'Ciera Payton',
			'Jill Larson',
			'Mark Steger'
		],
		genres: ['Horror', 'Supernatural'],
		href: 'The_Manor_(film)',
		extract:
			'The Manor is a 2021 American gothic supernatural horror film written and directed by Axelle Carolyn. The film stars Barbara Hershey, Bruce Davison, Stacey Travis, Ciera Payton, Jill Larson and Mark Steger.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8c/The_Manor_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Madres',
		year: 2021,
		cast: ['Elpidia Carrillo', 'Tenoch Huerta'],
		genres: ['Horror'],
		href: 'Madres',
		extract:
			'Madres is a 2021 American horror film written by Mario Miscione and Marcella Ochoa directed by Ryan Zaragoza. It stars Ariana Guerra, Tenoch Huerta, Elpidia Carrillo, Kerry Cahill, Jennifer Patino, Britton Webb, and Evelyn Gonzalez. The film is the seventh installment in the anthological Welcome to the Blumhouse film series.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Madres.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Justin Bieber: Our World',
		year: 2021,
		cast: ['Justin Bieber', 'Hailey Bieber'],
		genres: ['Documentary', 'Performance'],
		href: 'Justin_Bieber:_Our_World',
		extract:
			'Justin Bieber: Our World is a 2021 American documentary film centering on Canadian singer Justin Bieber as he prepares for his first full concert in three years, directed by Michael D. Ratner. It was released on Amazon Prime Video on October 8, 2021. At the 65th Annual Grammy Awards "Justin Bieber: Our world" received a nomination for Best Music Film',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/9/9c/Justin_Bieber_Our_World_film_poster.jpg',
		thumbnail_width: 284,
		thumbnail_height: 352
	},
	{
		title: 'Survive the Game',
		year: 2021,
		cast: ['Chad Michael Murray', 'Bruce Willis'],
		genres: ['Action', 'Thriller'],
		href: 'Survive_the_Game',
		extract:
			'Survive the Game is a 2021 American action thriller film directed by James Cullen Bressack, and starring Bruce Willis and Chad Michael Murray.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Survive_the_game.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Halloween Kills',
		year: 2021,
		cast: [
			'Jamie Lee Curtis',
			'Judy Greer',
			'Andi Matichak',
			'Will Patton',
			'Thomas Mann',
			'Anthony Michael Hall'
		],
		genres: ['Slasher'],
		href: 'Halloween_Kills',
		extract:
			"Halloween Kills is a 2021 American slasher film directed by David Gordon Green and co-written by Green, Danny McBride and Scott Teems. It is the sequel to 2018's Halloween and the twelfth installment in the Halloween franchise. The film stars Jamie Lee Curtis and James Jude Courtney, who reprise their roles as Laurie Strode and Michael Myers respectively. Judy Greer, Andi Matichak, and Will Patton also reprise their roles from the previous film, with Anthony Michael Hall and Thomas Mann joining the cast. The film, which begins where the previous film ended, sees Strode and her family continuing to fend off Myers, this time with the help of the Haddonfield community.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/61/Halloween_Kills_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 386
	},
	{
		title: 'The Last Duel',
		year: 2021,
		cast: ['Matt Damon', 'Adam Driver', 'Jodie Comer', 'Ben Affleck'],
		genres: ['Action', 'Drama', 'Historical'],
		href: 'The_Last_Duel_(2021_film)',
		extract:
			"The Last Duel is a 2021 historical action drama film directed by Ridley Scott from a screenplay by Nicole Holofcener, Ben Affleck, and Matt Damon, based on the 2004 book The Last Duel: A True Story of Crime, Scandal, and Trial by Combat in Medieval France by Eric Jager. Set in medieval France, the film stars Damon as Jean de Carrouges, a knight who challenges his former friend, squire Jacques Le Gris to a judicial duel after Jean's wife, Marguerite, accuses Jacques of raping her. The events leading up to the duel are divided into three distinct chapters, reflecting the contradictory perspectives of the three main characters. Affleck also stars in a supporting role as Count Pierre d'Alençon.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e8/The_Last_Duel_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Needle in a Timestack',
		year: 2021,
		cast: ['Leslie Odom Jr.', 'Freida Pinto', 'Cynthia Erivo', 'Orlando Bloom'],
		genres: ['Science Fiction', 'Romance'],
		href: 'Needle_in_a_Timestack',
		extract:
			'Needle in a Timestack is a 2021 American romantic science fiction film written and directed by John Ridley, based on the short story of the same name by Robert Silverberg. The film stars Leslie Odom Jr., Freida Pinto, Cynthia Erivo, Orlando Bloom, and Jadyn Wong.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Needle_in_a_Timestack.jpg',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'Hard Luck Love Song',
		year: 2021,
		cast: [
			'Michael Dorman',
			'Sophia Bush',
			'Dermot Mulroney',
			'Eric Roberts',
			'Brian Sacca',
			'Melora Walters',
			'RZA'
		],
		genres: ['Drama', 'Romance'],
		href: 'Hard_Luck_Love_Song',
		extract:
			'Hard Luck Love Song is a 2020 American romantic drama film directed by Justin Corsbie in his feature directorial debut and starring Michael Dorman, Sophia Bush, Dermot Mulroney, Eric Roberts, Brian Sacca, Melora Walters and RZA. It is based on the song "Just Like Old Times" by Todd Snider.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f0/Hard_Luck_Love_Song.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Introducing, Selma Blair',
		year: 2021,
		cast: ['Selma Blair'],
		genres: ['Documentary'],
		href: 'Introducing,_Selma_Blair',
		extract:
			'Introducing, Selma Blair is a 2021 American documentary film, directed by Rachel Fleit. It follows Selma Blair, adapting to new ways of living after revealing her multiple sclerosis diagnosis.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Introducing_Selma_Blair.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'The Velvet Underground',
		year: 2021,
		cast: ['The Velvet Underground'],
		genres: ['Documentary'],
		href: 'The_Velvet_Underground_(film)',
		extract:
			'The Velvet Underground is a 2021 American documentary film directed and produced by Todd Haynes that chronicles the life and times of the rock band the Velvet Underground.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/8/81/The_Velvet_Underground_%28Todd_Haynes%29.png',
		thumbnail_width: 250,
		thumbnail_height: 375
	},
	{
		title: 'Night Teeth',
		year: 2021,
		cast: [
			'Jorge Lendeborg Jr.',
			'Debby Ryan',
			'Lucy Fry',
			'Alfie Allen',
			'Raúl Castillo',
			'Alexander Ludwig'
		],
		genres: ['Thriller'],
		href: 'Night_Teeth',
		extract:
			'Night Teeth is a 2021 American vampire thriller film directed by Adam Randall from a screenplay by Brent Dillon. The film stars Jorge Lendeborg Jr., Debby Ryan, Lucy Fry, Raul Castillo, Sydney Sweeney, Megan Fox, and Alfie Allen.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Night_Teeth.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Dune',
		year: 2021,
		cast: [
			'Timothee Chalamet',
			'Rebecca Ferguson',
			'Oscar Isaac',
			'Josh Brolin',
			'Stellan Skarsgård',
			'Dave Bautista',
			'Stephen McKinley Henderson',
			'Zendaya',
			'Chang Chen',
			'Sharon Duncan-Brewster',
			'Charlotte Rampling',
			'Jason Momoa',
			'Javier Bardem'
		],
		genres: ['Science Fiction'],
		href: 'Dune_(2021_film)',
		extract:
			'Dune is a 2021 American epic science fiction film directed by Denis Villeneuve from a screenplay by Villeneuve, Jon Spaihts, and Eric Roth. It is the first part of a two-part adaptation of the 1965 novel by Frank Herbert. Set in the distant future, the film follows Paul Atreides as his family, the noble House Atreides, is thrust into a war for the deadly and inhospitable desert planet Arrakis. The ensemble cast includes Timothée Chalamet, Rebecca Ferguson, Oscar Isaac, Josh Brolin, Stellan Skarsgård, Dave Bautista, Stephen McKinley Henderson, Zendaya, David Dastmalchian, Chang Chen, Sharon Duncan-Brewster, Charlotte Rampling, Jason Momoa, and Javier Bardem.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "Ron's Gone Wrong",
		year: 2021,
		cast: [
			'Zach Galifianakis',
			'Jack Dylan Grazer',
			'Ed Helms',
			'Justice Smith',
			'Rob Delaney',
			'Kylie Cantrall',
			'Ricardo Hurtado',
			'Olivia Colman'
		],
		genres: ['Animated', 'Comedy', 'Science Fiction'],
		href: 'Ron%27s_Gone_Wrong',
		extract:
			"Ron's Gone Wrong is a 2021 British-American computer-animated science fiction comedy film directed by Sarah Smith and Jean-Philippe Vine, co-directed by Octavio E. Rodriguez and written by Peter Baynham and Smith. The film features the voice of Jack Dylan Grazer as Barney, a socially awkward middle-schooler who befriends a defective robot he names Ron, voiced by Zach Galifianakis. Barney must find a way to protect Ron, who comes under danger from corporate employees. Additional voices include Ed Helms, Justice Smith, Rob Delaney, Kylie Cantrall, Ricardo Hurtado, and Olivia Colman.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/a/a5/Ron%27s_Gone_Wrong_%282021%29_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The French Dispatch',
		year: 2021,
		cast: [
			'Benicio del Toro',
			'Adrien Brody',
			'Tilda Swinton',
			'Léa Seydoux',
			'Frances McDormand',
			'Timothée Chalamet',
			'Lyna Khoudri',
			'Jeffrey Wright',
			'Mathieu Amalric',
			'Stephen Park',
			'Bill Murray',
			'Owen Wilson'
		],
		genres: ['Comedy', 'Drama'],
		href: 'The_French_Dispatch',
		extract:
			'The French Dispatch of the Liberty, Kansas Evening Sun, or simply The French Dispatch, is a 2021 American anthology comedy drama film written, directed, and produced by Wes Anderson from a story he conceived with Roman Coppola, Hugo Guinness, and Jason Schwartzman. It features an expansive ensemble cast and follows three different storylines as the French foreign bureau of the fictional Liberty, Kansas Evening Sun newspaper publishes its final issue.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/78/The_French_Dispatch.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Harder They Fall',
		year: 2021,
		cast: [
			'Jonathan Majors',
			'Idris Elba',
			'Zazie Beetz',
			'Regina King',
			'Delroy Lindo',
			'Lakeith Stanfield',
			'RJ Cyler',
			'Danielle Deadwyler',
			'Edi Gathegi',
			'Deon Cole'
		],
		genres: ['Western'],
		href: 'The_Harder_They_Fall_(2021_film)',
		extract:
			'The Harder They Fall is a 2021 American Western film directed by Jeymes Samuel, who co-wrote the screenplay with Boaz Yakin. The film stars Jonathan Majors, Idris Elba, Zazie Beetz, Regina King, Delroy Lindo, Lakeith Stanfield, RJ Cyler, Danielle Deadwyler, Edi Gathegi, and Deon Cole. It is one of few Westerns whose principal cast members are all black. Its characters are loosely based on real cowboys, lawmen, and outlaws of the nineteenth-century American West.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/d/d1/The_Harder_They_Fall_%282021_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Electrical Life of Louis Wain',
		year: 2021,
		cast: [
			'Benedict Cumberbatch',
			'Claire Foy',
			'Andrea Riseborough',
			'Toby Jones',
			'Olivia Colman'
		],
		genres: ['Comedy', 'Drama', 'Biography'],
		href: 'The_Electrical_Life_of_Louis_Wain',
		extract:
			'The Electrical Life of Louis Wain is a 2021 biographical comedy-drama film directed by Will Sharpe, from a story by Simon Stephenson, and screenplay by Stephenson and Sharpe. The film stars Benedict Cumberbatch, Claire Foy, Andrea Riseborough and Toby Jones.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/4/43/The_Electrical_Life_of_Louis_Wain.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Warning',
		year: 2021,
		cast: [
			'Alex Pettyfer',
			'Alice Eve',
			'Annabelle Wallis',
			'Benedict Samuel',
			'Charlotte Le Bon',
			'Thomas Jane'
		],
		genres: ['Science Fiction', 'Thriller'],
		href: 'Warning_(2021_film)',
		extract:
			'Warning is a 2021 science fiction thriller film directed by Agata Alexander in her directorial debut, from a screenplay by Alexander, Jason Kaye and Rob Michaelson. It stars Alex Pettyfer, Alice Eve, Annabelle Wallis, Benedict Samuel, Charlotte Le Bon, Thomas Jane, Patrick Schwarzenegger, Rupert Everett, Tomasz Kot, Kylie Bunbury and Garance Marillier. The film premiered at the 2021 Sitges Film Festival.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/31/Warning_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Passing',
		year: 2021,
		cast: [
			'Tessa Thompson',
			'Ruth Negga',
			'André Holland',
			'Bill Camp',
			'Gbenga Akinnagbe',
			'Antoinette Crowe-Legacy',
			'Alexander Skarsgård'
		],
		genres: ['Drama', 'Historical'],
		href: 'Passing_(film)',
		extract:
			'Passing is a 2021 black-and-white period drama film written and directed by Rebecca Hall in her feature directorial debut. It is adapted from the 1929 novel of the same name by Nella Larsen. Set in 1920s New York City, the film follows the intertwined life of a black woman and her white-passing childhood friend. Appearing in supporting roles are André Holland, Bill Camp, Gbenga Akinnagbe, Antoinette Crowe-Legacy, and Alexander Skarsgård.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Passing_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Hypnotic',
		year: 2021,
		cast: ['Kate Siegel', "Jason O'Mara", 'Dulé Hill'],
		genres: ['Thriller'],
		href: 'Hypnotic_(2021_film)',
		extract:
			"Hypnotic is a 2021 American thriller film directed by Matt Angel and Suzanne Coote, written by Richard D'Ovidio and starring Kate Siegel, Jason O'Mara, and Dulé Hill. It was released on October 27, 2021, by Netflix.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Hypnotic_%282021_film%29.jpeg',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'Antlers',
		year: 2021,
		cast: [
			'Keri Russell',
			'Jesse Plemons',
			'Jeremy T. Thomas',
			'Graham Greene',
			'Scott Haze',
			'Rory Cochrane',
			'Amy Madigan'
		],
		genres: ['Horror', 'Supernatural'],
		href: 'Antlers_(2021_film)',
		extract:
			'Antlers is a 2021 supernatural horror film directed by Scott Cooper, and starring Keri Russell, Jesse Plemons, Jeremy T. Thomas, Graham Greene, Scott Haze, Rory Cochrane, and Amy Madigan. The screenplay was adapted from Nick Antosca\'s short story "The Quiet Boy". The film follows a school teacher who suspects one of her students is suffering from personal problems in his home life, not knowing that he is harboring an evil demon in his house.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/0d/AntlersOctober2021poster.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Army of Thieves',
		year: 2021,
		cast: [
			'Matthias Schweighöfer',
			'Nathalie Emmanuel',
			'Ruby O. Fee',
			'Stuart Martin',
			'Guz Khan',
			'Jonathan Cohen'
		],
		genres: ['Comedy', 'Action'],
		href: 'Army_of_Thieves',
		extract:
			'Army of Thieves is a 2021 heist comedy film directed by Matthias Schweighöfer from a screenplay by Shay Hatten, based on a story he wrote with Zack Snyder. A prequel to Army of the Dead (2021), it is the second installment in the Army of the Dead franchise; the film stars Schweighöfer, who reprises his role as Ludwig Dieter, alongside a supporting cast that includes Nathalie Emmanuel, Ruby O. Fee, Stuart Martin, Guz Khan, and Jonathan Cohen. Filming began in Germany and the Czech Republic in October 2020, and concluded by December 2020.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/43/ArmyOfThievesTeaserPoster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'A Mouthful of Air',
		year: 2021,
		cast: [
			'Amanda Seyfried',
			'Finn Wittrock',
			'Jennifer Carpenter',
			'Michael Gaston',
			'Amy Irving',
			'Paul Giamatti'
		],
		genres: ['Drama'],
		href: 'A_Mouthful_of_Air_(film)',
		extract:
			'A Mouthful of Air is a 2021 American psychological drama film written, directed and produced by Amy Koppelman, based on her 2003 novel of the same name. It stars Amanda Seyfried, Finn Wittrock, Jennifer Carpenter, Michael Gaston, Amy Irving, and Paul Giamatti.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/dc/A_Mouthful_of_Air.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'The Souvenir Part II',
		year: 2021,
		cast: [
			'Honor Swinton Byrne',
			'Jaygann Ayeh',
			'Richard Ayoade',
			'Ariane Labed',
			'James Spencer Ashworth',
			'Harris Dickinson',
			'Charlie Heaton',
			'Joe Alwyn',
			'Tilda Swinton'
		],
		genres: ['Drama'],
		href: 'The_Souvenir_Part_II',
		extract:
			'The Souvenir Part II is a 2021 drama film, written and directed by Joanna Hogg. It is a sequel to The Souvenir (2019). It stars Honor Swinton Byrne, Jaygann Ayeh, Richard Ayoade, James Spencer Ashworth, Harris Dickinson, Charlie Heaton, Joe Alwyn, and Tilda Swinton.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Souvenir_Part_2.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Paranormal Activity: Next of Kin',
		year: 2021,
		cast: ['Emily Bader', 'Roland Buck III', 'Dan Lippert', 'Henry Ayres-Brown'],
		genres: ['Found Footage', 'Horror', 'Supernatural'],
		href: 'Paranormal_Activity:_Next_of_Kin',
		extract:
			'Paranormal Activity: Next of Kin is a 2021 American found footage supernatural horror film directed by William Eubank, written by Christopher Landon, and produced by Jason Blum and Oren Peli. Serving as the seventh installment of the Paranormal Activity series, the film stars Emily Bader, Roland Buck III, Dan Lippert, Henry Ayres-Brown, and Tom Nowicki, and follows a group who attempt to make a documentary on an Amish community, only for them to discover the horrific secrets the town holds.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Paranormal_Activity_Next_of_Kin.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Spine of Night',
		year: 2021,
		cast: ['Richard E. Grant', 'Lucy Lawless', 'Patton Oswalt', 'Betty Gabriel', 'Joe Manganiello'],
		genres: ['Animated', 'Fantasy', 'Horror', 'Erotic'],
		href: 'The_Spine_of_Night',
		extract:
			'The Spine of Night is a 2021 American adult animated dark fantasy horror film written and directed by Philip Gelatt and Morgan Galen King. It stars Richard E. Grant, Lucy Lawless, Patton Oswalt, Betty Gabriel, and Joe Manganiello.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Spine_of_night.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Violet',
		year: 2021,
		cast: ['Olivia Munn', 'Luke Bracey', 'Justin Theroux'],
		genres: ['Drama'],
		href: 'Violet_(2021_film)',
		extract:
			'Violet is a 2021 American drama film written, directed, and co-produced by Justine Bateman in her feature film directorial debut. It stars Olivia Munn, Luke Bracey and Justin Theroux.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/56/VIOLET_poster_sm3.jpg',
		thumbnail_width: 216,
		thumbnail_height: 317
	},
	{
		title: 'Heart of Champions',
		year: 2021,
		cast: ['Michael Shannon', 'Alexander Ludwig', 'Charles Melton'],
		genres: ['Drama'],
		href: 'Heart_of_Champions',
		extract:
			'Heart of Champions is a 2021 American drama film directed by Michael Mailer, from a screenplay by Vojin Gjaja. It stars Michael Shannon, Alexander Ludwig, Charles Melton, David James Elliott and Ash Santos.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Heart_of_Champions.jpg',
		thumbnail_width: 259,
		thumbnail_height: 389
	},
	{
		title: 'Eternals',
		year: 2021,
		cast: [
			'Gemma Chan',
			'Richard Madden',
			'Kumail Nanjiani',
			'Lia McHugh',
			'Brian Tyree Henry',
			'Lauren Ridloff',
			'Barry Keoghan',
			'Don Lee',
			'Harish Patel',
			'Bill Skarsgård',
			'Kit Harington',
			'Salma Hayek',
			'Angelina Jolie'
		],
		genres: ['Superhero'],
		href: 'Eternals_(film)',
		extract:
			'Eternals is a 2021 American superhero film based on the Marvel Comics race of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 26th film in the Marvel Cinematic Universe (MCU). The film is directed by Chloé Zhao, who wrote the screenplay with Patrick Burleigh, Ryan Firpo, and Kaz Firpo. It stars an ensemble cast including Gemma Chan, Richard Madden, Kumail Nanjiani, Lia McHugh, Brian Tyree Henry, Lauren Ridloff, Barry Keoghan, Don Lee, Kit Harington, Salma Hayek, and Angelina Jolie. In the film, the Eternals, immortal alien beings, emerge from hiding after thousands of years to protect Earth from their ancient counterparts, the Deviants.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Eternals_%28film%29_poster.jpeg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Red Notice',
		year: 2021,
		cast: ['Dwayne Johnson', 'Ryan Reynolds', 'Gal Gadot', 'Chris Diamantopoulos', 'Ritu Arya'],
		genres: ['Action', 'Comedy'],
		href: 'Red_Notice_(film)',
		extract:
			'Red Notice is a 2021 American action comedy film written and directed by Rawson Marshall Thurber starring Dwayne Johnson alongside Ryan Reynolds and Gal Gadot and Ritu Arya. It marks the third collaboration between Thurber and Johnson, following Central Intelligence (2016) and Skyscraper (2018). In the film, an FBI agent reluctantly teams up with a renowned art robber in order to catch an even more notorious robber.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/0/0c/Red_Notice_-_film_promotional_image.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Finch',
		year: 2021,
		cast: ['Tom Hanks', 'Caleb Landry Jones'],
		genres: [],
		href: 'Finch_(film)',
		extract:
			'Finch is a 2021 American post-apocalyptic survival film directed by Miguel Sapochnik and written by Craig Luck and Ivor Powell. The film stars Tom Hanks and Caleb Landry Jones. The story follows an aging man named Finch, a survivor in a now nearly uninhabitable Earth, who builds and teaches a robot to take care of his dog when he dies.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Finch_%28film%29.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Spencer',
		year: 2021,
		cast: ['Kristen Stewart', 'Timothy Spall', 'Jack Farthing', 'Sean Harris', 'Sally Hawkins'],
		genres: ['Drama', 'Historical'],
		href: 'Spencer_(film)',
		extract:
			"Spencer is a 2021 historical psychological drama film directed by Pablo Larraín from a screenplay by Steven Knight. The film is about Princess Diana's existential crisis during the Christmas of 1991, as she considers divorcing Prince Charles and leaving the British royal family. Kristen Stewart and Jack Farthing star as Diana and Charles respectively, joined by Timothy Spall, Sean Harris, and Sally Hawkins.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ea/Spencer_%28film%29.png',
		thumbnail_width: 250,
		thumbnail_height: 367
	},
	{
		title: 'Dangerous',
		year: 2021,
		cast: ['Mel Gibson', 'Scott Eastwood', 'Tyrese Gibson', 'Famke Janssen', 'Kevin Durand'],
		genres: ['Action', 'Thriller'],
		href: 'Dangerous_(2021_film)',
		extract:
			"Dangerous is a 2021 action thriller film directed by David Hackl and starring Scott Eastwood, Tyrese Gibson, Famke Janssen, Kevin Durand, and Mel Gibson. The film was released on November 5, 2021. It was David Hackl's fifth film as director. Dangerous was produced by Kevin DeWalt, Ben DeWalt and Doug Falconer under the banners of Mind's Eye Entertainment and Falconer Pictures; and marks the last film of Falconer as a producer - he suddenly died in July 2021 before the release of the film. The film was distributed in the United States and the United Kingdom by Lionsgate. It received negative reviews from critics for its plot and action.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/45/Dangerous_%28film%29.jpg',
		thumbnail_width: 257,
		thumbnail_height: 388
	},
	{
		title: 'Love Hard',
		year: 2021,
		cast: ['Nina Dobrev', 'Jimmy O. Yang', 'Darren Barnet'],
		genres: ['Comedy', 'Romance'],
		href: 'Love_Hard',
		extract:
			"Love Hard is a 2021 American romantic comedy film directed by Hernán Jiménez and written by Danny Mackey and Rebecca Ewing. Starring Nina Dobrev, Jimmy O. Yang and Darren Barnet, it is about a young woman who travels to her online crush's hometown for Christmas but discovers she's been catfished. It was produced by Wonderland Sound and Vision and filmed in Vancouver from October to November 2020. It released by Netflix on November 5, 2021.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Love_Hard_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'The Beta Test',
		year: 2021,
		cast: ['Jim Cummings', 'Virginia Newcomb', 'PJ McCabe', 'Jessie Barr'],
		genres: ['Comedy', 'Thriller'],
		href: 'The_Beta_Test',
		extract:
			'The Beta Test is a 2021 dark comedy thriller film written and directed by Jim Cummings and PJ McCabe. It follows a talent agent whose life is turned upside-down after taking part in a secret sex pact; Cummings and McCabe star alongside Virginia Newcomb and Jessie Barr.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/95/The_Beta_Test_teaser_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Clifford the Big Red Dog',
		year: 2021,
		cast: [
			'Jack Whitehall',
			'Darby Camp',
			'Tony Hale',
			'Sienna Guillory',
			'David Alan Grier',
			'Russell Wong',
			'Kenan Thompson',
			'John Cleese'
		],
		genres: ['Action', 'Animated', 'Comedy', 'Fantasy', 'Family'],
		href: 'Clifford_the_Big_Red_Dog_(film)',
		extract:
			"Clifford the Big Red Dog is a 2021 live-action animated fantasy comedy film directed by Walt Becker from a screenplay by Blaise Hemingway and the writing team of Jay Scherick and David Ronn, and a story by Justin Malen and Ellen Rapoport, based on the children's book series of the same name by Norman Bridwell. The film stars Jack Whitehall, Darby Camp, Tony Hale, Sienna Guillory, David Alan Grier, Russell Wong, Izaac Wang, Kenan Thompson and John Cleese.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Clifford2021Poster.jpg',
		thumbnail_width: 262,
		thumbnail_height: 380
	},
	{
		title: 'Tick, Tick... Boom!',
		year: 2021,
		cast: [
			'Andrew Garfield',
			'Alexandra Shipp',
			'Robin de Jesús',
			'Joshua Henry',
			'Judith Light',
			'Vanessa Hudgens',
			'Bradley Whitford'
		],
		genres: ['Musical', 'Biography'],
		href: 'Tick,_Tick..._Boom!_(film)',
		extract:
			'Tick, Tick... Boom! is a 2021 American biographical musical film directed by Lin-Manuel Miranda in his feature directorial debut. Written by Steven Levenson, who also serves as an executive producer, it is based on the stage musical of the same name by Jonathan Larson, a semi-autobiographical story about Larson writing a musical to enter into the theater industry. The film stars Andrew Garfield as Larson, alongside Robin de Jesús, Alexandra Shipp, Joshua Henry, Judith Light, and Vanessa Hudgens.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/91/Tick_Tick_Boom_Movie_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Home Sweet Home Alone',
		year: 2021,
		cast: [
			'Ellie Kemper',
			'Rob Delaney',
			'Archie Yates',
			'Aisling Bea',
			'Pete Holmes',
			'Kenan Thompson',
			'Ally Maki',
			'Chris Parnell'
		],
		genres: ['Comedy'],
		href: 'Home_Sweet_Home_Alone',
		extract:
			'Home Sweet Home Alone is a 2021 American Christmas comedy film directed by Dan Mazer, written by Mikey Day and Streeter Seidell, and starring Ellie Kemper, Rob Delaney, Archie Yates, Aisling Bea, Kenan Thompson, Pete Holmes, Ally Maki, and Chris Parnell. The sixth film in the Home Alone franchise, Home Sweet Home Alone was produced by 20th Century Studios as an original title for Disney+, the first 20th Century Studios film to be produced for the streaming service. The film was announced after The Walt Disney Company acquired 21st Century Fox and inherited the rights to the Home Alone franchise.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Home_Sweet_Home_Alone_Poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Apex',
		year: 2021,
		cast: ['Neal McDonough', 'Bruce Willis'],
		genres: ['Action', 'Science Fiction', 'War'],
		href: 'Apex_(film)',
		extract:
			'Apex, titled Apex Predator in the UK, is a 2021 American science fiction action film directed by Edward John Drake and written by John Drake and Corey William Large. It stars Neal McDonough and Bruce Willis and was released on November 12, 2021.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/27/Apex_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Power of the Dog',
		year: 2021,
		cast: [
			'Benedict Cumberbatch',
			'Kirsten Dunst',
			'Jesse Plemons',
			'Kodi Smit-McPhee',
			'Thomasin McKenzie',
			'Genevieve Lemon',
			'Keith Carradine',
			'Frances Conroy'
		],
		genres: ['Drama', 'Western'],
		href: 'The_Power_of_the_Dog_(film)',
		extract:
			"The Power of the Dog is a 2021 revisionist Western psychological drama film written and directed by Jane Campion. It is based on Thomas Savage's 1967 novel of the same title. The film stars Benedict Cumberbatch, Kirsten Dunst, Jesse Plemons, and Kodi Smit-McPhee. Set in Montana and shot mostly within rural Otago, the film is an international co-production among New Zealand, the United Kingdom, Canada, and Australia.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6d/The_Power_of_the_Dog_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Bruised',
		year: 2021,
		cast: [
			'Halle Berry',
			'Shamier Anderson',
			'Adan Canto',
			'Sheila Atim',
			'Valentina Shevchenko',
			'Stephen McKinley Henderson'
		],
		genres: ['Drama', 'Sports'],
		href: 'Bruised_(film)',
		extract:
			'Bruised is a 2020 sports drama film starring and directed by Halle Berry in her directorial debut, who also served as the producer. It co-stars Shamier Anderson, Adan Canto, Sheila Atim, Stephen McKinley Henderson and Adriane Lenox. The screenplay was written by Michelle Rosenfarb.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/91/Bruised_film.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'The Princess Switch 3: Romancing the Star',
		year: 2021,
		cast: ['Vanessa Hudgens', 'Sam Palladio', 'Nick Sagar'],
		genres: ['Comedy', 'Romance'],
		href: 'The_Princess_Switch_3:_Romancing_the_Star',
		extract:
			'The Princess Switch 3: Romancing the Star is a 2021 American Christmas romantic comedy film directed by Mike Rohl and written by Robin Bernheim Burger, based on the characters created by Burger and Megan Metzger. The third film in The Princess Switch franchise, stars Vanessa Hudgens, Sam Palladio, Suanne Braun, Nick Sagar and Hazel Beattie. The story follows Margaret Delacourt, Queen of Montenaro, Stacy Juliette DeNovo Wyndham, Princess of Belgravia and Lady Fiona Pembroke, Margaret’s cousin. When a priceless Christmas relic is stolen, the trio come together and track down a mysterious jewel thief.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/97/The_Princess_Switch_3.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Ghostbusters: Afterlife',
		year: 2021,
		cast: [
			'Carrie Coon',
			'Finn Wolfhard',
			'Mckenna Grace',
			'Paul Rudd',
			'Logan Kim',
			"Celeste O'Connor",
			'Bill Murray',
			'Dan Aykroyd',
			'Ernie Hudson',
			'Sigourney Weaver',
			'Annie Potts'
		],
		genres: ['Comedy', 'Supernatural'],
		href: 'Ghostbusters:_Afterlife',
		extract:
			'Ghostbusters: Afterlife is a 2021 American supernatural comedy film directed by Jason Reitman from a screenplay he co-wrote with Gil Kenan. It is the sequel to Ghostbusters (1984) and Ghostbusters II (1989), and the fourth film in the Ghostbusters franchise. The film stars Carrie Coon, Finn Wolfhard, Mckenna Grace, and Paul Rudd, alongside Bill Murray, Dan Aykroyd, Ernie Hudson, Annie Potts, and Sigourney Weaver reprising their characters from the earlier films. Set 32 years after the events of Ghostbusters II, it follows a single mother and her children who move to an Oklahoma farm they inherited from her estranged father Egon Spengler, a member of the original Ghostbusters.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/d/d1/Ghostbusters_-_Afterlife_official_theatrical_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 397
	},
	{
		title: 'King Richard',
		year: 2021,
		cast: [
			'Will Smith',
			'Aunjanue Ellis',
			'Saniyya Sidney',
			'Demi Singleton',
			'Tony Goldwyn',
			'Jon Bernthal',
			'Dylan McDermott'
		],
		genres: ['Drama', 'Sports', 'Biography'],
		href: 'King_Richard_(film)',
		extract:
			'King Richard is a 2021 American biographical sports drama film directed by Reinaldo Marcus Green and written by Zach Baylin. The film stars Will Smith as Richard Williams, the father and coach of famed tennis players Venus and Serena Williams, with Aunjanue Ellis, Saniyya Sidney, Demi Singleton, Tony Goldwyn, and Jon Bernthal in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/86/King_Richard_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Extinct',
		year: 2021,
		cast: [
			'Adam DeVine',
			'Rachel Bloom',
			'Zazie Beetz',
			'Ken Jeong',
			'Jim Jefferies',
			"Catherine O'Hara",
			'Tom Hollander',
			'Reggie Watts',
			'Henry Winkler',
			'Benedict Wong',
			'Nick Frost',
			'Alex Borstein'
		],
		genres: ['Animated', 'Comedy', 'Science Fiction'],
		href: 'Extinct_(film)',
		extract:
			"Extinct is a 2021 computer-animated science fiction comedy film directed by David Silverman, and co-directed by Raymond S. Persi, from a screenplay by Joel Cohen, John Frink, and Rob LaZebnik. It features the voices of Rachel Bloom, Adam Devine, Zazie Beetz, Ken Jeong, Catherine O'Hara, Benedict Wong, Reggie Watts, and Jim Jefferies in a story following two flummels, an extinct bunny-like species with giant holes in the center, that find themselves transported from their island home in the year 1835 to modern day Shanghai.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/de/Extinct%28film%29poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: "C'mon C'mon",
		year: 2021,
		cast: [
			'Joaquin Phoenix',
			'Gaby Hoffmann',
			'Woody Norman',
			'Scoot McNairy',
			'Molly Webster',
			'Jaboukie Young-White'
		],
		genres: ['Drama'],
		href: 'C%27mon_C%27mon_(film)',
		extract:
			"C'mon C'mon is a 2021 American black-and-white drama film written and directed by Mike Mills, and starring Joaquin Phoenix, Gaby Hoffmann, Scoot McNairy, Molly Webster, Jaboukie Young-White, and Woody Norman. It had its world premiere at the 48th Telluride Film Festival on September 2, 2021, and was given a limited theatrical release by A24 starting on November 19, 2021. The film received critical acclaim, with praise for its performances, direction, and cinematography.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/56/C%27mon_C%27mon.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Black Friday',
		year: 2021,
		cast: ['Devon Sawa', 'Ivana Baquero', 'Ryan Lee', 'Michael Jai White', 'Bruce Campbell'],
		genres: ['Comedy', 'Horror'],
		href: 'Black_Friday_(2021_film)',
		extract:
			'Black Friday is a 2021 American horror comedy film written by Andy Greskoviak and directed by Casey Tebo. It stars Devon Sawa, Ivana Baquero, Ryan Lee, Stephen Peck, Michael Jai White, and Bruce Campbell.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Black_Friday%21_film_poster.jpg',
		thumbnail_width: 265,
		thumbnail_height: 377
	},
	{
		title: 'Zeros and Ones',
		year: 2021,
		cast: ['Ethan Hawke', 'Valerio Mastandrea'],
		genres: ['Thriller'],
		href: 'Zeros_and_Ones',
		extract:
			'Zeros and Ones is a 2021 American-Italian thriller film written and directed by Abel Ferrara and starring Ethan Hawke.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/08/Zeros_and_Ones.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Friend of the World',
		year: 2021,
		cast: [
			'Nick Young',
			'Alexandra Slade',
			'Michael C. Burgess',
			'Kathryn Schott',
			'Kevin Smith',
			'Luke Pensabene'
		],
		genres: ['Independent'],
		href: 'Friend_of_the_World',
		extract:
			'Friend of the World is a 2020 American independent black-and-white film written and directed by Brian Patrick Butler in his feature film debut, starring Nick Young and Alexandra Slade. The surreal experimental film takes place post-apocalypse and tells the story of a young filmmaker and a military general trapped in a bunker with a mysterious threat. The film has been categorized as a psychedelic film, a surrealist film, and an end of the world film.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/be/Friend_of_the_World.jpg',
		thumbnail_width: 220,
		thumbnail_height: 330
	},
	{
		title: 'Encanto',
		year: 2021,
		cast: [
			'Stephanie Beatriz',
			'María Cecilia Botero',
			'John Leguizamo',
			'Mauro Castillo',
			'Jessica Darrow',
			'Angie Cepeda',
			'Carolina Gaitán',
			'Diane Guerrero',
			'Wilmer Valderrama'
		],
		genres: ['Animated', 'Comedy', 'Fantasy', 'Musical'],
		href: 'Encanto_(film)',
		extract:
			"Encanto is a 2021 American computer-animated musical fantasy comedy film produced by Walt Disney Animation Studios and distributed by Walt Disney Studios Motion Pictures. The 60th film produced by the studio, it was directed by Jared Bush and Byron Howard, co-directed by Charise Castro Smith, and produced by Yvett Merino and Clark Spencer, with original songs by Lin-Manuel Miranda. The screenplay was written by Castro Smith and Bush, both of whom also conceived the film's story with Howard, Miranda, Jason Hand, and Nancy Kruse. The film stars the voices of Stephanie Beatriz, María Cecilia Botero, John Leguizamo, Mauro Castillo, Jessica Darrow, Angie Cepeda, Carolina Gaitán, Diane Guerrero, and Wilmer Valderrama. Encanto follows a multigenerational Colombian family, the Madrigals, led by a matriarch (Botero) whose children and grandchildren—except for Mirabel Madrigal (Beatriz)—receive magical gifts from a miracle that helps them serve the people in their rural community called the Encanto. When Mirabel learns that the family is losing their magic, she sets out to find out what is happening, and save her family and their magical house.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/83/Encanto_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'House of Gucci',
		year: 2021,
		cast: [
			'Lady Gaga',
			'Adam Driver',
			'Jared Leto',
			'Jeremy Irons',
			'Jack Huston',
			'Salma Hayek',
			'Al Pacino'
		],
		genres: ['Crime', 'Drama', 'Biography'],
		href: 'House_of_Gucci',
		extract:
			'House of Gucci is a 2021 American biographical crime drama film directed by Ridley Scott, based on the 2001 book The House of Gucci: A Sensational Story of Murder, Madness, Glamour, and Greed by Sara Gay Forden. The film follows Patrizia Reggiani and Maurizio Gucci, as their romance transforms into a fight for control of the Italian fashion brand Gucci. Jared Leto, Jeremy Irons, Jack Huston, Salma Hayek, and Al Pacino also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fe/House.of.Gucci.film.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Unforgivable',
		year: 2021,
		cast: [
			'Sandra Bullock',
			"Vincent D'Onofrio",
			'Jon Bernthal',
			'Richard Thomas',
			'Linda Emond',
			'Aisling Franciosi',
			'Rob Morgan',
			'Viola Davis'
		],
		genres: ['Drama'],
		href: 'The_Unforgivable',
		extract:
			"The Unforgivable is a 2021 drama film directed by Nora Fingscheidt and written by Peter Craig, Hillary Seitz, and Courtenay Miles, based on the 2009 British miniseries Unforgiven written by Sally Wainwright. The film stars Sandra Bullock as a woman who, following her release from prison after serving twenty years for committing murder, is determined to reunite with her estranged younger sister. Vincent D'Onofrio, Jon Bernthal, Richard Thomas, Linda Emond, Aisling Franciosi, Rob Morgan, and Viola Davis also star.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/02/The_Unforgiveable.jpeg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Resident Evil: Welcome to Raccoon City',
		year: 2021,
		cast: [
			'Kaya Scodelario',
			'Hannah John-Kamen',
			'Robbie Amell',
			'Tom Hopper',
			'Avan Jogia',
			'Donal Logue',
			'Neal McDonough'
		],
		genres: ['Action', 'Horror'],
		href: 'Resident_Evil:_Welcome_to_Raccoon_City',
		extract:
			'Resident Evil: Welcome to Raccoon City is a 2021 action horror film written and directed by Johannes Roberts. Adapted from the stories of the first and second games by Capcom, it serves as a reboot of the Resident Evil film series and is the seventh live-action film based on the video game series. The film stars Kaya Scodelario, Hannah John-Kamen, Robbie Amell, Tom Hopper, Avan Jogia, Donal Logue, and Neal McDonough. Set in 1998, it follows a group of survivors trying to survive during a zombie outbreak in the small town of Raccoon City.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/01/Welcome_to_Raccoon_City.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: '8-Bit Christmas',
		year: 2021,
		cast: [
			'Neil Patrick Harris',
			'Winslow Fegley',
			'June Diane Raphael',
			'David Cross',
			'Steve Zahn'
		],
		genres: ['Comedy'],
		href: '8-Bit_Christmas',
		extract:
			'8-Bit Christmas is a 2021 American Christmas comedy film directed by Michael Dowse, from a screenplay by Kevin Jakubowski based upon his novel of the same name. It stars Neil Patrick Harris, Winslow Fegley, June Diane Raphael, David Cross, and Steve Zahn. The film was released on November 24, 2021, on HBO Max, receiving generally favorable reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f0/8_Bit_Christmas.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Humans',
		year: 2021,
		cast: [
			'Richard Jenkins',
			'Jayne Houdyshell',
			'Amy Schumer',
			'Beanie Feldstein',
			'Steven Yeun',
			'June Squibb'
		],
		genres: ['Drama'],
		href: 'The_Humans_(film)',
		extract:
			'The Humans is a 2021 American psychological drama film written and directed by Stephen Karam in his feature directorial debut, and based on his one-act play of the same name. It stars Richard Jenkins, Jayne Houdyshell, Amy Schumer, Beanie Feldstein, Steven Yeun, and June Squibb. It had its world premiere at the 2021 Toronto International Film Festival on September 12, 2021. The film was released by A24 on November 24, 2021, both in theaters and on Showtime.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c0/The_Humans_poster.jpeg',
		thumbnail_width: 252,
		thumbnail_height: 396
	},
	{
		title: 'South Park: Post Covid',
		year: 2021,
		cast: [
			'Matt Stone',
			'Mona Marshall',
			'Kimberly Brooks',
			'Adrien Beard',
			'Delilah Kujala',
			'Betty Boogie'
		],
		genres: ['Animated', 'Comedy', 'Erotic'],
		href: 'South_Park:_Post_Covid',
		extract:
			'"South Park: Post Covid" is a 2021 American adult animated comedy television special episode written and directed by Trey Parker. It is the first in a series of South Park television specials for the streaming service Paramount+ and premiered on November 25, 2021. It is also considered to be the 310th episode overall of the television series.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3d/SouthParkPostCovid.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Licorice Pizza',
		year: 2021,
		cast: [
			'Alana Haim',
			'Cooper Hoffman',
			'Sean Penn',
			'Tom Waits',
			'Bradley Cooper',
			'Benny Safdie'
		],
		genres: ['Comedy', 'Drama'],
		href: 'Licorice_Pizza',
		extract:
			"Licorice Pizza is a 2021 American comedy-drama film written and directed by Paul Thomas Anderson. It stars Alana Haim and Cooper Hoffman in their film debuts, alongside an ensemble supporting cast including Sean Penn, Tom Waits, Bradley Cooper, and Benny Safdie. Set in 1973, the film follows the development of a young couple's relationship.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3c/LicoricePizzaPoster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 275
	},
	{
		title: 'Single All the Way',
		year: 2021,
		cast: [
			'Michael Urie',
			'Philemon Chambers',
			'Luke Macfarlane',
			'Barry Bostwick',
			'Kathy Najimy',
			'Jennifer Coolidge'
		],
		genres: ['Comedy', 'Romance'],
		href: 'Single_All_the_Way',
		extract:
			'Single All the Way is a 2021 Canadian Christmas romantic comedy film directed by Michael Mayer and written by Chad Hodge. The plot follows a man who convinces his best friend to pretend to be his boyfriend when he goes home for Christmas, only to be set up on a blind date by his mother. Luke Macfarlane, Barry Bostwick, Jennifer Robertson, and Jennifer Coolidge also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/38/Single_All_the_Way_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Back to the Outback',
		year: 2021,
		cast: [
			'Isla Fisher',
			'Tim Minchin',
			'Eric Bana',
			'Guy Pearce',
			'Miranda Tapsell',
			'Angus Imrie',
			'Keith Urban',
			'Jacki Weaver'
		],
		genres: ['Adventure', 'Animated', 'Comedy'],
		href: 'Back_to_the_Outback',
		extract:
			'Back to the Outback is a 2021 computer-animated adventure comedy film directed by Clare Knight and Harry Cripps, in both their directorial debuts, from a screenplay written by Cripps, and a story by Gregory Lessans and Cripps. The voice cast includes Isla Fisher, Tim Minchin, Eric Bana, Guy Pearce, Miranda Tapsell, Angus Imrie, Keith Urban, and Jacki Weaver. Produced by Weed Road Pictures, Reel FX Creative Studios, Netflix Animation, and distributed by Netflix.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/66/BacktoTheOutback.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Diary of a Wimpy Kid',
		year: 2021,
		cast: [
			'Brady Noon',
			'Ethan William Childress',
			'Chris Diamantopoulos',
			'Erica Cerra',
			'Hunter Dillon'
		],
		genres: ['Animated', 'Comedy'],
		href: 'Diary_of_a_Wimpy_Kid_(2021_film)',
		extract:
			'Diary of a Wimpy Kid is a 2021 computer-animated comedy film directed by Swinton Scott from a screenplay by Jeff Kinney, based on his 2007 book of the same name. It is the second film adaptation of the book, following the 2010 live-action film, while serving as the first fully-animated reboot in the Diary of a Wimpy Kid film series, and the fifth installment overall. The film stars the voices of Brady Noon, Ethan William Childress, Chris Diamantopoulos, Erica Cerra, and Hunter Dillon.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/c/cd/Diary_of_a_Wimpy_Kid_%282021%29_Official_Poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Encounter',
		year: 2021,
		cast: [
			'Riz Ahmed',
			'Octavia Spencer',
			'Janina Gavankar',
			'Rory Cochrane',
			'Misha Collins',
			'Lucian-River Chauhan',
			'Aditya Geddada'
		],
		genres: ['Crime', 'Drama', 'Thriller'],
		href: 'Encounter_(2021_film)',
		extract:
			'Encounter is a 2021 crime drama thriller film, directed by Michael Pearce from a screenplay by Pearce and Joe Barton. The film stars Riz Ahmed, Octavia Spencer, Janina Gavankar, Rory Cochrane, Lucian-River Chauhan, and Aditya Geddada.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/92/Encounter_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Mixtape',
		year: 2021,
		cast: ['Gemma Brooke Allen', 'Jackson Rathbone', 'Nick Thune', 'Julie Bowen'],
		genres: ['Comedy'],
		href: 'Mixtape_(film)',
		extract:
			'Mixtape is a 2021 American comedy film directed by Valerie Weiss from a screenplay by Stacey Menear. It stars Gemma Brooke Allen, Nick Thune, and Julie Bowen.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Mixtape_xlg.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Deadlock',
		year: 2021,
		cast: ['Patrick Muldoon', 'Bruce Willis', 'Matthew Marsden'],
		genres: ['Action', 'Thriller'],
		href: 'Deadlock_(2021_film)',
		extract:
			'Deadlock is a 2021 American action thriller film directed by Jared Cohn, starring Patrick Muldoon and Bruce Willis. It was released in the United States on December 3, 2021, by Saban Films.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Deadlock_2021_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'West Side Story',
		year: 2021,
		cast: [
			'Ansel Elgort',
			'Rachel Zegler',
			'Ariana DeBose',
			'David Alvarez',
			'Mike Faist',
			'Rita Moreno',
			"Brian d'Arcy James",
			'Corey Stoll'
		],
		genres: ['Drama', 'Musical', 'Romance'],
		href: 'West_Side_Story_(2021_film)',
		extract:
			'West Side Story is a 2021 American musical romantic drama film directed and co-produced by Steven Spielberg from a screenplay by Tony Kushner. It is the second feature-length adaptation of the 1957 stage musical of the same name. It stars Ansel Elgort and Rachel Zegler in her film debut with Ariana DeBose, David Alvarez, Mike Faist, and Rita Moreno in supporting roles. Moreno, who starred in the 1961 film adaptation, also served as an executive producer alongside Kushner. The film features music composed by Leonard Bernstein with lyrics by Stephen Sondheim.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/2/2e/West_Side_Story_2021_Official_Poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "Don't Look Up",
		year: 2021,
		cast: [
			'Leonardo DiCaprio',
			'Jennifer Lawrence',
			'Rob Morgan',
			'Jonah Hill',
			'Mark Rylance',
			'Tyler Perry',
			'Ron Perlman',
			'Timothée Chalamet',
			'Ariana Grande',
			'Scott Mescudi',
			'Himesh Patel',
			'Melanie Lynskey',
			'Cate Blanchett',
			'Meryl Streep'
		],
		genres: ['Comedy', 'Political', 'Satire'],
		href: 'Don%27t_Look_Up',
		extract:
			"Don't Look Up is a 2021 American apocalyptic political satire black comedy film written, co-produced, and directed by Adam McKay from a story he co-wrote with David Sirota. It stars an ensemble cast featuring Leonardo DiCaprio, Jennifer Lawrence, Rob Morgan, Jonah Hill, Mark Rylance, Tyler Perry, Timothée Chalamet, Ron Perlman, Ariana Grande, Kid Cudi, Cate Blanchett, and Meryl Streep. The film tells the story of two astronomers attempting to warn humanity about an approaching comet that will destroy human civilization. The impact event is an allegory for climate change, and the film is a satire of government, political, celebrity, and media indifference to the climate crisis.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Don%27t_Look_Up_2021_film.jpg',
		thumbnail_width: 250,
		thumbnail_height: 313
	},
	{
		title: 'National Champions',
		year: 2021,
		cast: [
			'Stephan James',
			'J. K. Simmons',
			'Alexander Ludwig',
			'Lil Rel Howery',
			'Tim Blake Nelson',
			'Andrew Bachelor',
			'Jeffrey Donovan',
			'David Koechner',
			'Kristin Chenoweth',
			'Timothy Olyphant',
			'Uzo Aduba'
		],
		genres: ['Drama', 'Sports'],
		href: 'National_Champions_(film)',
		extract:
			'National Champions is a 2021 American sports drama film directed by Ric Roman Waugh, based on the play of the same name by Adam Mervis. The film stars Stephan James, J. K. Simmons, Alexander Ludwig, Lil Rel Howery, Tim Blake Nelson, Andrew Bachelor, Jeffrey Donovan, David Koechner, Kristin Chenoweth, Timothy Olyphant, and Uzo Aduba.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/83/National_Champions_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Being the Ricardos',
		year: 2021,
		cast: [
			'Nicole Kidman',
			'Javier Bardem',
			'J. K. Simmons',
			'Nina Arianda',
			'Tony Hale',
			'Alia Shawkat',
			'Jake Lacy',
			'Clark Gregg'
		],
		genres: ['Drama', 'Biography'],
		href: 'Being_the_Ricardos',
		extract:
			'Being the Ricardos is a 2021 American biographical drama film written and directed by Aaron Sorkin, about the relationship between I Love Lucy stars Lucille Ball and Desi Arnaz. Nicole Kidman and Javier Bardem star as Ball and Arnaz, while J. K. Simmons, Nina Arianda, Tony Hale, Alia Shawkat, Jake Lacy, and Clark Gregg are featured in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/62/Being_the_Ricardos.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Red Rocket',
		year: 2021,
		cast: ['Simon Rex', 'Bree Elrod', 'Suzanna Son'],
		genres: ['Comedy', 'Drama'],
		href: 'Red_Rocket_(film)',
		extract:
			'Red Rocket is a 2021 American black comedy drama film directed by Sean Baker from a screenplay co-written with Chris Bergoch. It stars Simon Rex, Bree Elrod, and Suzanna Son. The plot follows a porn star (Rex) who returns to his hometown and begins a relationship with an adolescent girl (Son).',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e7/Red_Rocket_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Hating Game',
		year: 2021,
		cast: ['Lucy Hale', 'Austin Stowell', 'Damon Daunno', 'Sakina Jaffrey', 'Corbin Bernsen'],
		genres: ['Comedy', 'Romance'],
		href: 'The_Hating_Game',
		extract:
			'The Hating Game is a 2021 American romantic comedy film directed by Peter Hutchings. It is based on the novel of the same name by Sally Thorne, and stars Lucy Hale and Austin Stowell in the lead roles. It was released in theaters and video on demand on December 10, 2021, by Vertical Entertainment. The film received generally positive reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d9/The_Hating_Game_film_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Rumble',
		year: 2021,
		cast: [
			'Will Arnett',
			'Terry Crews',
			'Geraldine Viswanathan',
			'Fred Melamed',
			'Becky Lynch',
			'Roman Reigns',
			'Ben Schwartz',
			'Jimmy Tatro',
			'Tony Danza'
		],
		genres: ['Animated', 'Comedy', 'Sports'],
		href: 'Rumble_(2021_film)',
		extract:
			'Rumble is a 2021 American computer-animated sports comedy film directed by Hamish Grieve with a screenplay by Grieve and Matt Lieberman. Loosely based on Monster on the Hill, a graphic novel by Rob Harrell, the film stars the voices of Will Arnett, Geraldine Viswanathan, Terry Crews, Stephen A. Smith, Jimmy Tatro, Tony Danza, Susan Kelechi Watson, Tony Shalhoub, Bridget Everett, Greta Lee, Ben Schwartz, Roman Reigns and Becky Lynch.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Rumble_2021_film_poster.png',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'South Park: Post Covid: The Return of Covid',
		year: 2021,
		cast: [
			'Matt Stone',
			'Mona Marshall',
			'Kimberly Brooks',
			'Adrien Beard',
			'Delilah Kujala',
			'Betty Boogie'
		],
		genres: ['Animated', 'Comedy', 'Erotic'],
		href: 'South_Park:_Post_Covid:_The_Return_of_Covid',
		extract:
			'"South Park: Post Covid: The Return of Covid" is a 2021 American adult animated comedy television special episode written and directed by Trey Parker. It is the second in a series of South Park television specials for the streaming service Paramount+ and premiered on December 16, 2021. It is a direct sequel to and continues the storyline of the previous special, "South Park: Post Covid". It is also the 311th episode of the series.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/45/SouthParkPostCovidTheReturn.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Spider-Man: No Way Home',
		year: 2021,
		cast: [
			'Tom Holland',
			'Benedict Cumberbatch',
			'Zendaya',
			'Jacob Batalon',
			'Jon Favreau',
			'Jamie Foxx',
			'Willem Dafoe',
			'Alfred Molina',
			'Benedict Wong',
			'Tony Revolori',
			'Marisa Tomei',
			'Andrew Garfield',
			'Tobey Maguire'
		],
		genres: ['Superhero'],
		href: 'Spider-Man:_No_Way_Home',
		extract:
			"Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts and written by Chris McKenna and Erik Sommers. It stars Tom Holland as Peter Parker / Spider-Man alongside Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, and Tobey Maguire. In the film, Parker asks Dr. Stephen Strange (Cumberbatch) to use magic to make his identity as Spider-Man a secret again following its public revelation at the end of Far From Home. When the spell goes wrong because of Parker's actions, the multiverse is broken open, which allows visitors from alternate realities to enter Parker's universe.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 330
	},
	{
		title: 'Nightmare Alley',
		year: 2021,
		cast: [
			'Bradley Cooper',
			'Cate Blanchett',
			'Toni Collette',
			'Willem Dafoe',
			'Richard Jenkins',
			'Rooney Mara',
			'Ron Perlman',
			'Mary Steenburgen',
			'David Strathairn'
		],
		genres: ['Noir', 'Thriller'],
		href: 'Nightmare_Alley_(2021_film)',
		extract:
			"Nightmare Alley is a 2021 neo-noir psychological thriller film co-written and directed by Guillermo del Toro, and based on the 1946 novel of the same name by William Lindsay Gresham. It is the second feature film adaptation of Gresham's novel, following the 1947 version. A co-production between Searchlight Pictures, TSG Entertainment, and Double Dare You Productions, the film stars Bradley Cooper as a charming and ambitious carnival worker with a mysterious past who takes big risks to boost his career. Cate Blanchett, Toni Collette, Willem Dafoe, Richard Jenkins, Rooney Mara, Ron Perlman, Mary Steenburgen, and David Strathairn also star.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/52/Nightmare_Alley_%282021_film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'The Lost Daughter',
		year: 2021,
		cast: [
			'Olivia Colman',
			'Dakota Johnson',
			'Jessie Buckley',
			'Paul Mescal',
			'Dagmara Domińczyk',
			'Jack Farthing',
			'Oliver Jackson-Cohen',
			'Peter Sarsgaard',
			'Ed Harris'
		],
		genres: ['Drama'],
		href: 'The_Lost_Daughter_(film)',
		extract:
			'The Lost Daughter is a 2021 psychological drama film adapted for the screen and directed by Maggie Gyllenhaal based on the 2006 novel of the same name by Elena Ferrante. The film stars Olivia Colman, Dakota Johnson, Jessie Buckley, Paul Mescal, Dagmara Domińczyk, Jack Farthing, Oliver Jackson-Cohen, Peter Sarsgaard, and Ed Harris. Colman also serves as an executive producer.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/0b/The_Lost_Daughter_%28film%29.jpg',
		thumbnail_width: 264,
		thumbnail_height: 377
	},
	{
		title: 'Swan Song',
		year: 2021,
		cast: ['Mahershala Ali', 'Naomie Harris', 'Glenn Close', 'Awkwafina', 'Adam Beach'],
		genres: ['Drama', 'Science Fiction', 'Romance'],
		href: 'Swan_Song_(2021_Benjamin_Cleary_film)',
		extract:
			'Swan Song is a 2021 American science fiction romantic drama film written and directed by Benjamin Cleary. The film stars Mahershala Ali, Naomie Harris, Awkwafina, Glenn Close, and Adam Beach.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/1/1d/Swan_Song_%282021_Benjamin_Cleary_film%29.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'The Tender Bar',
		year: 2021,
		cast: ['Ben Affleck', 'Tye Sheridan', 'Lily Rabe', 'Christopher Lloyd', 'Daniel Ranieri'],
		genres: [],
		href: 'The_Tender_Bar_(film)',
		extract:
			"The Tender Bar is a 2021 American coming-of-age film directed by George Clooney from a screenplay by William Monahan. Adapted from the 2005 memoir of the same name by J. R. Moehringer, it recounts Moehringer's life growing up on Long Island. It stars Ben Affleck, Tye Sheridan, Daniel Ranieri, Lily Rabe, and Christopher Lloyd. It was the final film appearance of Sondra James before her death in September 2021.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b0/The_Tender_Bar_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 390
	},
	{
		title: 'Mother/Android',
		year: 2021,
		cast: ['Chloë Grace Moretz', 'Algee Smith', 'Raúl Castillo'],
		genres: ['Science Fiction', 'Thriller'],
		href: 'Mother/Android',
		extract:
			'Mother/Android is a 2021 American post-apocalyptic science fiction thriller film, written and directed by Mattson Tomlin for his feature directorial debut, and starring Chloë Grace Moretz, Algee Smith, and Raúl Castillo. The film tells the story of a pregnant woman and her boyfriend who try to reach a fortified Boston amidst an AI takeover. It was released on December 17, 2021, on Hulu.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/02/Mother_Android.jpg',
		thumbnail_width: 262,
		thumbnail_height: 380
	},
	{
		title: 'Fortress',
		year: 2021,
		cast: ['Jesse Metcalfe', 'Bruce Willis', 'Chad Michael Murray'],
		genres: ['Action'],
		href: 'Fortress_(2021_film)',
		extract:
			"Fortress is a 2021 American action film directed by James Cullen Bressack and written by Alan Horsnail, based on a story by Emile Hirsch and Randall Emmett. It stars Jesse Metcalfe, Bruce Willis, Chad Michael Murray, Kelly Greyson, Ser'Darius Blain, and Shannen Doherty. The film was released in select theaters and on video on demand by Lionsgate Films on December 17, 2021.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/04/Fortress_2021_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'Sing 2',
		year: 2021,
		cast: [
			'Matthew McConaughey',
			'Reese Witherspoon',
			'Scarlett Johansson',
			'Taron Egerton',
			'Tori Kelly',
			'Bobby Cannavale',
			'Nick Kroll',
			'Halsey',
			'Pharrell Williams',
			'Nick Offerman',
			'Letitia Wright',
			'Eric Andre',
			'Chelsea Peretti',
			'Bono'
		],
		genres: ['Animated', 'Comedy', 'Musical'],
		href: 'Sing_2',
		extract:
			'Sing 2 is a 2021 American computer-animated jukebox musical comedy film produced by Illumination and distributed by Universal Pictures. The sequel to Sing (2016) and the second film in the franchise, it was again written and directed by Garth Jennings, co-directed by Christophe Lourdelet, and produced by Chris Meledandri and Janet Healy.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/87/Sing_2_poster.jpg',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: 'The Matrix Resurrections',
		year: 2021,
		cast: [
			'Keanu Reeves',
			'Carrie-Anne Moss',
			'Yahya Abdul-Mateen II',
			'Jessica Henwick',
			'Jonathan Groff',
			'Neil Patrick Harris',
			'Priyanka Chopra Jonas',
			'Jada Pinkett-Smith'
		],
		genres: ['Action', 'Science Fiction'],
		href: 'The_Matrix_Resurrections',
		extract:
			'The Matrix Resurrections is a 2021 American science fiction action film produced, co-written, and directed by Lana Wachowski, and being the first in Matrix franchise to be directed solely by Lana, without her sister, Lilly. It is the sequel to The Matrix Revolutions (2003) and the fourth installment in The Matrix film franchise. The film stars Keanu Reeves, Carrie-Anne Moss, Yahya Abdul-Mateen II, Jessica Henwick, Jonathan Groff, Neil Patrick Harris, Priyanka Chopra Jonas, Christina Ricci, and Jada Pinkett Smith. The film is set sixty years after Revolutions and follows Neo, who lives a seemingly ordinary life as a video game developer having trouble with distinguishing fantasy from reality. A group of rebels, with the help of a programmed version of Morpheus, free Neo from a new version of the Matrix and fight a new enemy that holds Trinity captive.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/50/The_Matrix_Resurrections.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "The King's Man",
		year: 2021,
		cast: [
			'Ralph Fiennes',
			'Gemma Arterton',
			'Rhys Ifans',
			'Matthew Goode',
			'Tom Hollander',
			'Harris Dickinson',
			'Daniel Brühl',
			'Djimon Hounsou',
			'Charles Dance'
		],
		genres: ['Action', 'Spy'],
		href: 'The_King%27s_Man',
		extract:
			"The King's Man is a 2021 spy action film directed by Matthew Vaughn from a screenplay by Vaughn and Karl Gajdusek and a story by Vaughn. The third installment in the British Kingsman film series, which is based on the comic book The Secret Service by Mark Millar and Dave Gibbons, it is a prequel to Kingsman: The Secret Service (2014) and Kingsman: The Golden Circle (2017). Its ensemble cast includes Ralph Fiennes, Gemma Arterton, Rhys Ifans, Matthew Goode, Tom Hollander, Harris Dickinson, Daniel Brühl, Djimon Hounsou, and Charles Dance. It focuses on several events during World War I and the birth of the Kingsman organisation.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/67/The_King%27s_Man.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Tragedy of Macbeth',
		year: 2021,
		cast: [
			'Denzel Washington',
			'Frances McDormand',
			'Bertie Carvel',
			'Alex Hassell',
			'Corey Hawkins',
			'Harry Melling',
			'Kathryn Hunter',
			'Brendan Gleeson'
		],
		genres: ['Historical', 'Thriller'],
		href: 'The_Tragedy_of_Macbeth_(2021_film)',
		extract:
			"The Tragedy of Macbeth is a 2021 American historical thriller film written, directed and produced by Joel Coen, based on the play Macbeth by William Shakespeare. It is the first film directed by one of the Coen brothers without the other's involvement. The film stars Denzel Washington, Frances McDormand, Bertie Carvel, Alex Hassell, Corey Hawkins, Harry Melling, Kathryn Hunter, and Brendan Gleeson.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/6/69/The_Tragedy_of_Macbeth_2021_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'A Journal for Jordan',
		year: 2021,
		cast: ['Michael B. Jordan', 'Chanté Adams', 'Jalon Christian', 'Robert Wisdom', 'Tamara Tunie'],
		genres: ['Drama', 'Romance'],
		href: 'A_Journal_for_Jordan',
		extract:
			'A Journal for Jordan is a 2021 American romantic drama film directed and co-produced by Denzel Washington from a screenplay written by Virgil Williams, based on the memoir A Journal for Jordan: A Story of Love and Honor by Dana Canedy. The film stars Michael B. Jordan and Chanté Adams in the lead roles, along with Jalon Christian, Robert Wisdom, and Tamara Tunie in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fc/A_Journal_for_Jordan.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'American Underdog',
		year: 2021,
		cast: ['Zachary Levi', 'Anna Paquin', 'Dennis Quaid'],
		genres: ['Sports', 'Biography'],
		href: 'American_Underdog_(film)',
		extract:
			"American Underdog is a 2021 American biographical sports film about National Football League (NFL) quarterback Kurt Warner. Directed by Andrew and Jon Erwin, the film follows Warner's journey as an undrafted player who ascended to winning Super Bowl XXXIV. It stars Zachary Levi as Warner, alongside Anna Paquin as his wife Brenda and Dennis Quaid as his head coach Dick Vermeil.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4c/American_Underdog.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Memoria',
		year: 2021,
		cast: [
			'acreenplay)',
			'Tilda Swinton',
			'Elkin Díaz',
			'Jeanne Balibar',
			'Juan Pablo Urrego',
			'Daniel Giménez Cacho'
		],
		genres: ['Drama', 'Fantasy', 'Mystery'],
		href: 'Memoria_(2021_film)',
		extract:
			'Memoria is a 2021 fantasy drama mystery film written, directed and co-produced by Apichatpong Weerasethakul, starring Tilda Swinton, Elkin Díaz, Jeanne Balibar, Juan Pablo Urrego and Daniel Giménez Cacho.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/89/Memoria_poster.jpg',
		thumbnail_width: 264,
		thumbnail_height: 377
	},
	{
		title: 'The 355',
		year: 2022,
		cast: [
			'Jessica Chastain',
			"Lupita Nyong'o",
			'Penélope Cruz',
			'Diane Kruger',
			'Fan Bingbing',
			'Sebastian Stan',
			'Édgar Ramírez'
		],
		genres: ['Action', 'Spy', 'Thriller'],
		href: 'The_355',
		extract:
			"The 355 is a 2022 American action spy thriller film directed by Simon Kinberg from a screenplay by Theresa Rebeck and Kinberg, and a story by Rebeck. The film features an ensemble cast, starring Jessica Chastain, Penélope Cruz, Fan Bingbing, Diane Kruger, and Lupita Nyong'o as a group of international spies who must work together to stop a terrorist organization from starting World War III. Édgar Ramírez and Sebastian Stan also star. The title is derived from Agent 355, the codename of a female spy for the Patriots during the American Revolution.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/52/The_355_poster.jpeg',
		thumbnail_width: 250,
		thumbnail_height: 376
	},
	{
		title: 'The Legend of La Llorona',
		year: 2022,
		cast: ['Autumn Reeser', 'Antonio Cupo', 'Danny Trejo'],
		genres: ['Horror'],
		href: 'The_Legend_of_La_Llorona',
		extract:
			'The Legend of La Llorona is a 2022 American Horror film directed by Patricia Harris Seeley and written by José Prendes, Cameron Larson and Patricia Harris Seeley. The film stars Autumn Reeser, Danny Trejo, Antonio Cupo and Zamia Fardiño. The film was released on January 7, 2022.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Legend_of_la_llorona.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Commando',
		year: 2022,
		cast: ['Mickey Rourke', 'Michael Jai White'],
		genres: ['Action', 'Crime', 'Thriller'],
		href: 'The_Commando',
		extract:
			'The Commando is a 2022 American action crime thriller film directed by Asif Akbar and starring Mickey Rourke and Michael Jai White.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a8/The_Commando.jpeg',
		thumbnail_width: 263,
		thumbnail_height: 379
	},
	{
		title: 'American Siege',
		year: 2022,
		cast: ['Timothy V. Murphy', 'Bruce Willis'],
		genres: ['Action'],
		href: 'American_Siege',
		extract:
			'American Siege is a 2022 American action film written and directed by Edward Drake. It stars Timothy V. Murphy, Bruce Willis, Rob Gough, Johann Urb, Anna Hindman, Johnny Messner, Cullen G. Chambers, and Janet Jones. The film was released by Shout! Studios on January 7, 2022. American Siege was panned by critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/16/American_Siege.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Scream',
		year: 2022,
		cast: [
			'Melissa Barrera',
			'Mason Gooding',
			'Jenna Ortega',
			'Jack Quaid',
			'Marley Shelton',
			'Courteney Cox',
			'David Arquette',
			'Neve Campbell'
		],
		genres: ['Slasher'],
		href: 'Scream_(2022_film)',
		extract:
			'Scream is a 2022 American slasher film directed by Matt Bettinelli-Olpin and Tyler Gillett, and written by James Vanderbilt and Guy Busick. It is the fifth installment in the Scream film series; though billed as a relaunch of the film series, the film is a direct sequel to Scream 4 (2011). The first film in the series to not be directed by Wes Craven, following his death in 2015, the film is dedicated to Craven at the beginning of the closing credits. The film stars Melissa Barrera, Kyle Gallner, Mason Gooding, Mikey Madison, Dylan Minnette, Jenna Ortega, Jack Quaid, Jasmin Savoy Brown, and Sonia Ammar, with Marley Shelton, Skeet Ulrich, Roger L. Jackson, Heather Matarazzo, Courteney Cox, David Arquette, and Neve Campbell reprising their roles from previous installments. The plot takes place twenty-five years after the original Woodsboro murders from Scream (1996), when yet another Ghostface appears and begins targeting a group of teenagers who are each somehow linked to the original killings. Similar to previous entries, Scream combines the violence of the slasher genre with elements of black comedy and "whodunit" mystery to satirize the trend of reboots and legacy sequels ("requels"). The film also provides commentary on the horror fandom culture, particularly the divide between "elevated horror" and classic slasher films.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/24/Scream2022film.jpeg',
		thumbnail_width: 250,
		thumbnail_height: 391
	},
	{
		title: 'Hotel Transylvania: Transformania',
		year: 2022,
		cast: [
			'Andy Samberg',
			'Selena Gomez',
			'Kathryn Hahn',
			'Jim Gaffigan',
			'Steve Buscemi',
			'Molly Shannon',
			'David Spade',
			'Keegan-Michael Key',
			'Brian Hull',
			'Fran Drescher',
			'Brad Abrell',
			'Asher Blinkoff',
			'Tyler "Ninja" Blevins',
			'Zoe Berri'
		],
		genres: ['Adventure', 'Animated', 'Comedy'],
		href: 'Hotel_Transylvania:_Transformania',
		extract:
			'Hotel Transylvania: Transformania is a 2022 American computer-animated adventure comedy film produced by Columbia Pictures and Sony Pictures Animation and released by Amazon Studios. The fourth and final installment in the Hotel Transylvania franchise and the sequel to Hotel Transylvania 3: Summer Vacation (2018), the film is directed by Derek Drymon and Jennifer Kluska from a screenplay by Amos Vernon, Nunzio Randazzo and Genndy Tartakovsky. It stars the voices of Andy Samberg, Selena Gomez, Kathryn Hahn, Jim Gaffigan, Steve Buscemi, Molly Shannon, David Spade, Keegan-Michael Key, Brian Hull, Fran Drescher, Brad Abrell, Asher Blinkoff, Tyler "Ninja" Blevins and Zoe Berri. In the film, Dracula and Johnny, who transformed into a human and monster, must find the way to South America to revert, before their transformations become permanent.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/8/8b/Hotel_Transylvania_Transformania.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Shattered',
		year: 2022,
		cast: ['Cameron Monaghan', 'Frank Grillo', 'Lilly Krug', 'John Malkovich'],
		genres: ['Thriller'],
		href: 'Shattered_(2022_film)',
		extract:
			'Shattered is a 2022 American thriller film directed by Luis Prieto, written by David Loughery, and starring Cameron Monaghan, Frank Grillo, Lilly Krug, and John Malkovich.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/86/Shattered_film.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'The Royal Treatment',
		year: 2022,
		cast: ['Laura Marano', 'Mena Massoud'],
		genres: ['Romance'],
		href: 'The_Royal_Treatment_(film)',
		extract:
			'The Royal Treatment is a 2022 American romance film directed by Rick Jacobson and written by Holly Hester. It stars Laura Marano as Manhattan hairdresser Izzy, who is given an opportunity to work at the wedding of Prince Thomas, played by Mena Massoud.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/42/The_Royal_Treatment.jpg',
		thumbnail_width: 282,
		thumbnail_height: 352
	},
	{
		title: 'Redeeming Love',
		year: 2022,
		cast: [
			'Abigail Cowen',
			'Tom Lewis',
			'Logan Marshall-Green',
			'Ke-Xi Wu',
			'Famke Janssen',
			'Nina Dobrev',
			'Eric Dane'
		],
		genres: ['Romance', 'Western'],
		href: 'Redeeming_Love_(2022_film)',
		extract:
			"Redeeming Love is a 2022 American Christian Western romance film directed by D.J. Caruso, who co-wrote the screenplay with Francine Rivers. The film is based on Rivers' 1991 novel of the same name, which was based on the Biblical story of Hosea, and is set in the American Old West during the California Gold Rush. It stars Abigail Cowen, Tom Lewis and Logan Marshall-Green.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/64/Redeeming_Love_%282022_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: "The King's Daughter",
		year: 2022,
		cast: [
			'Pierce Brosnan',
			'Kaya Scodelario',
			'Benjamin Walker',
			'Rachel Griffiths',
			'Julie Andrews',
			'Fan Bingbing',
			'William Hurt'
		],
		genres: ['Action', 'Adventure', 'Fantasy'],
		href: 'The_King%27s_Daughter_(2022_film)',
		extract:
			"The King's Daughter is a 2022 action-adventure fantasy film directed by Sean McNamara from a screenplay by Barry Berman and James Schamus. It is based on the 1997 novel The Moon and the Sun by Vonda N. McIntyre. The film stars Pierce Brosnan as King Louis XIV, Kaya Scodelario as Marie-Josèphe, and Benjamin Walker as Yves De La Croix. It was William Hurt's final screen performance to be released before his death in March 2022, though not his final film work, as it had been filmed eight years earlier.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/c/ca/The_King%27s_Daughter_%282022_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Tiger Rising',
		year: 2022,
		cast: [
			'Christian Convery',
			'Dennis Quaid',
			'Queen Latifah',
			'Madalen Mills',
			'Katharine McPhee',
			'Sam Trammell'
		],
		genres: ['Drama'],
		href: 'The_Tiger_Rising_(film)',
		extract:
			'The Tiger Rising is a 2022 American drama film written and directed by Ray Giarratana and starring Christian Convery, Madalen Mills, Katharine McPhee, Sam Trammell, Dennis Quaid and Queen Latifah. It is based on the 2001 book of the same name by Kate DiCamillo.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f5/The_Tiger_Rising_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Hellblazers',
		year: 2022,
		cast: ['Bruce Dern', 'Billy Zane', 'Tony Todd', 'Adrienne Barbeau'],
		genres: ['Action', 'Horror'],
		href: 'Hellblazers',
		extract:
			'Hellblazers is a 2022 American action horror film directed by Justin Lee and starring Bruce Dern, Billy Zane, Tony Todd and Adrienne Barbeau.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/44/Hellblazers.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'The Fallout',
		year: 2022,
		cast: [
			'Jenna Ortega',
			'Maddie Ziegler',
			'Niles Fitch',
			'Will Ropp',
			'John Ortiz',
			'Julie Bowen',
			'Shailene Woodley'
		],
		genres: ['Drama'],
		href: 'The_Fallout_(film)',
		extract:
			"The Fallout is a 2021 American drama film written and directed by Megan Park in her feature film directorial debut. The film stars Jenna Ortega as Vada Cavell, a high school student who navigates significant emotional trauma following a school shooting. The film also stars Maddie Ziegler, Julie Bowen, John Ortiz, Niles Fitch, Will Ropp, and Shailene Woodley in supporting roles. The score is composed by American musician and actor Finneas O'Connell.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a4/The_Fallout_2021.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Home Team',
		year: 2022,
		cast: ['Kevin James', 'Taylor Lautner', 'Rob Schneider', 'Jackie Sandler', 'Tait Blum'],
		genres: ['Comedy', 'Sports', 'Biography'],
		href: 'Home_Team_(2022_film)',
		extract:
			"Home Team is a 2022 American biographical sports comedy film directed by Charles and Daniel Kinnane, written by Chris Titone and Keith Blum, and starring Kevin James in the lead role, Taylor Lautner, Rob Schneider, Jackie Sandler, and Tait Blum. Inspired by actual events, the film tells the story of New Orleans Saints head coach Sean Payton who coached his 12-year-old son's football team during his one-year suspension from the NFL.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Home_Team_%282022_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Ice Age Adventures of Buck Wild',
		year: 2022,
		cast: ['Simon Pegg', 'Utkarsh Ambudkar', 'Justina Machado', 'Vincent Tong'],
		genres: ['Adventure', 'Animated', 'Comedy'],
		href: 'The_Ice_Age_Adventures_of_Buck_Wild',
		extract:
			'The Ice Age Adventures of Buck Wild is a 2022 computer-animated adventure comedy film directed by John C. Donkin, in his feature directorial debut, with a screenplay by Jim Hecht, Ray DeLaurentis, and William Schifrin. It serves as a spin-off of the Ice Age franchise and is set after the events of Ice Age: Collision Course. The film stars the voices of Simon Pegg, Vincent Tong, Aaron Harris, Utkarsh Ambudkar, and Justina Machado also starring in the film.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/0/0f/The_Ice_Age_Adventures_of_Buck_Wild.jpg',
		thumbnail_width: 250,
		thumbnail_height: 372
	},
	{
		title: 'Clean',
		year: 2022,
		cast: ['Adrien Brody', 'Glenn Fleshler', 'Mykelti Williamson', 'RZA'],
		genres: ['Action', 'Thriller'],
		href: 'Clean_(2021_film)',
		extract:
			'Clean is a 2021 American action thriller film directed by Paul Solet and starring Adrien Brody, who also produced and wrote the film.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Clean_%282021_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Sundown',
		year: 2022,
		cast: ['Tim Roth', 'Charlotte Gainsbourg'],
		genres: ['Drama'],
		href: 'Sundown_(2021_film)',
		extract:
			'Sundown is a 2021 drama film written and directed by Michel Franco. It stars Tim Roth, Charlotte Gainsbourg and Iazua Larios. The plot follows a wealthy man (Roth) who attempts to abandon his family on vacation after the death of his mother. The film had its world premiere at the Venice Film Festival on 5 September 2021, and was released in the United States by Bleecker Street on 28 January 2022. The film was met with generally positive reviews.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Sundown_%282021_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Jackass Forever',
		year: 2022,
		cast: [
			'Johnny Knoxville',
			'Steve-O',
			'Chris Pontius',
			'Dave England',
			'Wee Man',
			'Danger Ehren',
			'Preston Lacy'
		],
		genres: ['Comedy'],
		href: 'Jackass_Forever',
		extract:
			'Jackass Forever is a 2022 American stunt comedy film directed and produced by Jeff Tremaine, along with producers Spike Jonze and Johnny Knoxville, and was released by Paramount Pictures. It is the fourth main installment in the Jackass film series, following Jackass 3D (2010). The film stars original Jackass members Knoxville, Steve-O, Dave England, Wee Man, Danger Ehren, Chris Pontius, Preston Lacy, newcomers to the Jackass crew, and celebrity guests. This is the first Jackass film not to feature Ryan Dunn since his death in 2011 and the first without Bam Margera being a primary cast member as he was fired during production, appearing briefly in one skit.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Jackass_Forever_film_poster.png',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Moonfall',
		year: 2022,
		cast: [
			'Halle Berry',
			'Patrick Wilson',
			'John Bradley',
			'Michael Peña',
			'Charlie Plummer',
			'Kelly Yu',
			'Donald Sutherland'
		],
		genres: ['Disaster', 'Science Fiction'],
		href: 'Moonfall_(film)',
		extract:
			"Moonfall is a 2022 science fiction disaster film co-written, directed, and produced by Roland Emmerich. It stars Halle Berry, Patrick Wilson, John Bradley, Michael Peña, Charlie Plummer, Kelly Yu, Carolina Bartczak and Donald Sutherland. It follows two former astronauts alongside a conspiracy theorist who discover the hidden truth about Earth's moon when it suddenly leaves its orbit. Shot in Montreal on a $138–146 million budget, it is one of the most expensive independently produced films ever made.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Moonfall_film_poster.jpg',
		thumbnail_width: 265,
		thumbnail_height: 376
	},
	{
		title: 'Last Looks',
		year: 2022,
		cast: [
			'Charlie Hunnam',
			'Mel Gibson',
			'Morena Baccarin',
			'Rupert Friend',
			'Dominic Monaghan',
			'Jacob Scipio',
			'Clancy Brown'
		],
		genres: ['Mystery', 'War'],
		href: 'Last_Looks',
		extract:
			'Last Looks is a 2022 American-British mystery film, directed by Tim Kirkby, from a screenplay by Howard Michael Gould based on his novel of the same name. It stars Charlie Hunnam, Mel Gibson, Morena Baccarin, Lucy Fry, Rupert Friend, Dominic Monaghan, Jacob Scipio and Clancy Brown.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/22/Last_Looks.jpg',
		thumbnail_width: 256,
		thumbnail_height: 389
	},
	{
		title: 'The Long Night',
		year: 2022,
		cast: ['Scout Taylor-Compton', 'Nolan Gerard Funk', 'Jeff Fahey', 'Deborah Kara Unger'],
		genres: ['Horror'],
		href: 'The_Long_Night_(2022_film)',
		extract:
			'The Long Night is a 2022 American horror film written by Robert Sheppe and Mark Young and directed Rich Ragsdale. It stars Scout Taylor-Compton, Nolan Gerard Funk, Jeff Fahey, Deborah Kara Unger. The film is about a couple whose quiet weekend takes a bizarre turn when a nightmarish cult and their maniacal leader come to fulfill an apocalyptic prophesy.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1d/The_Long_Night_%282022_film%29.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Kimi',
		year: 2022,
		cast: ['Zoë Kravitz', 'Rita Wilson', 'Byron Bowers'],
		genres: ['Thriller'],
		href: 'Kimi_(film)',
		extract:
			'Kimi is a 2022 American thriller film directed by Steven Soderbergh and written and produced by David Koepp. The film stars Zoë Kravitz. It was released on HBO Max on February 10, 2022, to generally positive reviews.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Kimi_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Shut In',
		year: 2022,
		cast: ['Rainey Qualley', 'Jake Horowitz', 'Luciana VanDette', 'Vincent Gallo'],
		genres: ['Thriller'],
		href: 'Shut_In_(2022_film)',
		extract:
			"Shut In is a 2022 American thriller film directed by D.J. Caruso, written by Melanie Toast, and starring Rainey Qualley, Jake Horowitz, Luciana VanDette and Vincent Gallo. Shut In is The Daily Wire's first original film and their third to be released on their streaming platform.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Shut_In_%282022_film%29.jpg',
		thumbnail_width: 264,
		thumbnail_height: 378
	},
	{
		title: 'Death on the Nile',
		year: 2022,
		cast: [
			'Tom Bateman',
			'Annette Bening',
			'Kenneth Branagh',
			'Russell Brand',
			'Ali Fazal',
			'Dawn French',
			'Gal Gadot',
			'Armie Hammer',
			'Rose Leslie',
			'Emma Mackey',
			'Sophie Okonedo',
			'Jennifer Saunders',
			'Letitia Wright'
		],
		genres: ['Mystery'],
		href: 'Death_on_the_Nile_(2022_film)',
		extract:
			"Death on the Nile is a 2022 mystery film directed by Kenneth Branagh from a screenplay by Michael Green, based on the 1937 novel of the same name by Agatha Christie, and the second big screen adaptation of Christie's novel, following the 1978 film. It was produced by Branagh, Ridley Scott, Judy Hofflund and Kevin J. Walsh, as a sequel to 2017’s Murder on the Orient Express. It stars an ensemble cast with Branagh and Tom Bateman reprising their roles as Hercule Poirot and Bouc, respectively, alongside Annette Bening, Russell Brand, Ali Fazal, Dawn French, Gal Gadot, Armie Hammer, Rose Leslie, Emma Mackey, Sophie Okonedo, Jennifer Saunders and Letitia Wright.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/e/e9/Death_on_the_Nile_%282020_film%29_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Marry Me',
		year: 2022,
		cast: [
			'Jennifer Lopez',
			'Owen Wilson',
			'Maluma',
			'John Bradley',
			'Chloe Coleman',
			'Sarah Silverman'
		],
		genres: ['Comedy', 'Drama', 'Romance'],
		href: 'Marry_Me_(2022_film)',
		extract:
			'Marry Me is a 2022 American romantic comedy-drama film directed by Kat Coiro, with a screenplay by John Rogers, Tami Sagher, and Harper Dill. Based on the 2012 graphic novel of the same title by Bobby Crosby, it stars Jennifer Lopez as Kat Valdez, a pop star, who decides to marry Charlie Gilbert, a math teacher holding a "Marry Me" sign, after learning that her on-stage bridegroom Bastian (Maluma) has been having an affair. John Bradley, Sarah Silverman, Ricky Guillart, and Chloe Coleman also star in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Marry_Me_%282022_film%29.jpg',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: 'Blacklight',
		year: 2022,
		cast: ['Liam Neeson', 'Emmy Raver-Lampman', 'Taylor John Smith', 'Aidan Quinn'],
		genres: ['Action', 'Thriller'],
		href: 'Blacklight_(film)',
		extract:
			'Blacklight is a 2022 action thriller film directed and co-written by Mark Williams. The film stars Liam Neeson as a brooding FBI fixer who gets involved in a government conspiracy; Emmy Raver-Lampman, Taylor John Smith, and Aidan Quinn also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/ad/Blacklight_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'I Want You Back',
		year: 2022,
		cast: ['Charlie Day', 'Jenny Slate', 'Scott Eastwood', 'Manny Jacinto', 'Gina Rodriguez'],
		genres: ['Comedy', 'Romance'],
		href: 'I_Want_You_Back_(film)',
		extract:
			'I Want You Back is a 2022 American romantic comedy film directed by Jason Orley from a screenplay by Isaac Aptaker and Elizabeth Berger. It stars Charlie Day and Jenny Slate as two recently dumped strangers who team up to sabotage the new relationships of their exes. Manny Jacinto, Clark Backo, and Mason Gooding also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ef/I_Want_You_Back_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Tall Girl 2',
		year: 2022,
		cast: [
			'Ava Michelle',
			'Griffin Gluck',
			'Sabrina Carpenter',
			'Anjelika Washington',
			'Angela Kinsey',
			'Steve Zahn'
		],
		genres: ['Comedy', 'Teen', 'Romance'],
		href: 'Tall_Girl_2',
		extract:
			'Tall Girl 2 is a 2022 American teen romantic comedy film directed by Emily Ting from a screenplay by Sam Wolfson. The film stars Ava Michelle, Sabrina Carpenter, Griffin Gluck, and Steve Zahn. It is the sequel to the 2019 film Tall Girl. The film was released on February 11, 2022 and received mixed reviews.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Tall_Girl_2.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Sky Is Everywhere',
		year: 2022,
		cast: ['Grace Kaufman', 'Pico Alexander', 'Jacques Colimon', 'Cherry Jones', 'Jason Segel'],
		genres: ['Drama', 'Romance'],
		href: 'The_Sky_Is_Everywhere_(film)',
		extract:
			'The Sky Is Everywhere is a 2022 American coming-of-age romantic drama film directed by Josephine Decker and written by Jandy Nelson, based on the 2010 novel of the same name. The film stars Grace Kaufman, Pico Alexander, Jacques Colimon, Cherry Jones, and Jason Segel.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/87/The_Sky_Is_Everywhere.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'The In Between',
		year: 2022,
		cast: ['Joey King', 'Kyle Allen', 'Kim Dickens', 'John Ortiz'],
		genres: ['Romance', 'Science Fiction'],
		href: 'The_In_Between',
		extract:
			'The In Between is a 2022 American science fiction romance film directed by Arie Posin, written by Marc Klein, and starring Joey King and Kyle Allen. The film was released on February 11, 2022 on Paramount+ and on April 8, 2022 on Netflix.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/31/The_In_Between_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Fistful of Vengeance',
		year: 2022,
		cast: ['Iko Uwais', 'Lewis Tan', 'Lawrence Kao', 'JuJu Chan', 'Pearl Thusi', 'Jason Tobin'],
		genres: ['Action', 'Supernatural', 'Thriller'],
		href: 'Fistful_of_Vengeance',
		extract:
			'Fistful of Vengeance is a 2022 American supernatural action thriller film directed by Roel Reiné, and written by Cameron Litvack, Jessica Chou and Yalun Tu. The film serves as a follow-up to the first season of the television series Wu Assassins, and stars Iko Uwais, Lewis Tan, Lawrence Kao, JuJu Chan, Pearl Thusi, Francesca Corney, Jason Tobin, Rhatha Phongam and Simon Kuke. The film was released worldwide on February 17, 2022, on Netflix.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Poster_for_Fistful_of_Vengeance.png',
		thumbnail_width: 200,
		thumbnail_height: 297
	},
	{
		title: 'Uncharted',
		year: 2022,
		cast: ['Tom Holland', 'Mark Wahlberg', 'Sophia Ali', 'Tati Gabrielle', 'Antonio Banderas'],
		genres: ['Action', 'Adventure'],
		href: 'Uncharted_(film)',
		extract:
			'Uncharted is a 2022 American action-adventure film directed by Ruben Fleischer from a screenplay by Rafe Lee Judkins, Art Marcum, and Matt Holloway, based on the video game franchise of the same name developed by Naughty Dog and published by Sony Interactive Entertainment. It stars Tom Holland as Nathan Drake and Mark Wahlberg as Victor Sullivan, with Sophia Ali, Tati Gabrielle, and Antonio Banderas in supporting roles. In the film, Drake is recruited by Sullivan in a race against corrupt billionaire Santiago Moncada (Banderas) and mercenary leader Jo Braddock (Gabrielle) to locate the fabled treasure of the Magellan expedition.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Uncharted_Official_Poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Dog',
		year: 2022,
		cast: [
			'Channing Tatum',
			'Jane Adams',
			'Kevin Nash',
			"Q'orianka Kilcher",
			'Ethan Suplee',
			'Emmy Raver-Lampman',
			'Nicole LaLiberte'
		],
		genres: ['Comedy', 'Drama'],
		href: 'Dog_(2022_film)',
		extract:
			"Dog is a 2022 American comedy drama road film directed by Channing Tatum and Reid Carolin, both making their respective film directorial debuts, based on a story by Carolin and Brett Rodriguez. The film stars Tatum as an Army Ranger who is tasked with escorting the military dog of his fallen friend to his funeral. The film also stars Jane Adams, Kevin Nash, Q'orianka Kilcher, Ethan Suplee, Emmy Raver-Lampman, and Nicole LaLiberte in supporting roles. The film was produced by Free Association on a budget of $15 million.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/12/Dog_%282022_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Texas Chainsaw Massacre',
		year: 2022,
		cast: [
			'Sarah Yarkin',
			'Elsie Fisher',
			'Mark Burham',
			'Moe Dunford',
			'Nell Hudson',
			'Jessica Allian',
			'Olwen Fouéré',
			'Jacob Latimore',
			'Alice Krige'
		],
		genres: ['Slasher'],
		href: 'Texas_Chainsaw_Massacre_(2022_film)',
		extract:
			'Texas Chainsaw Massacre is a 2022 American slasher film directed by David Blue Garcia, with a screenplay by Chris Thomas Devlin, from a story by Fede Álvarez and Rodo Sayagues. It is the ninth installment of the Texas Chainsaw Massacre franchise. Set several decades after the original film, the story focuses on the serial killer Leatherface targeting a group of young adults and coming into conflict with a vengeful survivor of his previous murders. The project is a joint-venture production between Legendary Pictures, Exurbia Films, and Bad Hombre. The film stars Sarah Yarkin, Elsie Fisher, Mark Burnham, Moe Dunford, Nell Hudson, Jessica Allain, Olwen Fouéré, Jacob Latimore, and Alice Krige.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/dd/NetflixTCMPoster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Cursed',
		year: 2022,
		cast: ['Boyd Holbrook', 'Kelly Reilly', 'Alistair Petrie'],
		genres: ['Horror'],
		href: 'The_Cursed_(2021_film)',
		extract:
			'The Cursed is a 2021 gothic horror film directed and written by Sean Ellis. The film stars Boyd Holbrook, Kelly Reilly, Alistair Petrie, and Roxane Duran. The film premiered at the 2021 Sundance Film Festival under the title Eight for Silver. The film was released in the United States on February 18, 2022, by LD Entertainment. It received generally positive reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5b/The_Cursed_%282021_film%29.jpeg',
		thumbnail_width: 263,
		thumbnail_height: 378
	},
	{
		title: 'A Fairy Tale After All',
		year: 2022,
		cast: [
			'Emily Shenaut',
			'Brian Hull',
			'Gabriel Burrafato',
			'Bridget Winder',
			'Timothy N. Kopacz',
			'Anna Brisbin'
		],
		genres: ['Fantasy', 'Musical'],
		href: 'A_Fairy_Tale_After_All',
		extract:
			'A Fairy Tale After All is a 2022 American musical fantasy film produced, written and directed by Erik Peter Carlson. The film stars Emily Shenaut, Brian Hull, Gabriel Burrafato, Bridget Winder, Timothy N. Kopacz, and Anna Brisbin. The film was released theatrical and VOD by Vertical Entertainment on February 18, 2022.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a3/A_Fairy_Tale_After_All_poster.png',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Cyrano',
		year: 2022,
		cast: ['Peter Dinklage', 'Haley Bennett', 'Kelvin Harrison Jr.', 'Ben Mendelsohn'],
		genres: ['Drama', 'Musical', 'Romance'],
		href: 'Cyrano_(film)',
		extract:
			"Cyrano is a 2021 musical romantic drama film directed by Joe Wright and with a screenplay by Erica Schmidt, based on Schmidt's 2018 stage musical of the same name, itself based on the 1897 Edmond Rostand play Cyrano de Bergerac. The film stars Peter Dinklage, Haley Bennett, Kelvin Harrison Jr., and Ben Mendelsohn.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Cyrano_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Studio 666',
		year: 2022,
		cast: [
			'Dave Grohl',
			'Taylor Hawkins',
			'Nate Mendel',
			'Pat Smear',
			'Chris Shiflett',
			'Rami Jaffe',
			'Whitney Cummings',
			'Leslie Grossman',
			'Will Forte',
			'Jenna Ortega',
			'Jeff Garlin'
		],
		genres: ['Comedy', 'Horror'],
		href: 'Studio_666',
		extract:
			'Studio 666 is a 2022 American horror comedy film directed by BJ McDonnell from a screenplay by Jeff Buhler and Rebecca Hughes, based on a story by Dave Grohl. Grohl stars, alongside his Foo Fighters bandmates Nate Mendel, Pat Smear, Taylor Hawkins, Chris Shiflett, and Rami Jaffee. Whitney Cummings, Leslie Grossman, Will Forte, Jenna Ortega, and Jeff Garlin co-star in the ensemble cast. In the film, the Foo Fighters move into a cursed mansion to record a new album.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Studio_666.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'A Madea Homecoming',
		year: 2022,
		cast: [
			'Tyler Perry',
			'Cassi Davis',
			'David Mann',
			'Tamela Mann',
			'Gabrielle Dennis',
			"Brendan O'Carroll"
		],
		genres: ['Comedy'],
		href: 'A_Madea_Homecoming',
		extract:
			"A Madea Homecoming is a 2022 American comedy film produced, written, and directed by Tyler Perry and his second film to be released by Netflix. Besides Perry, the film stars Cassi Davis-Patton, David Mann, Tamela Mann, Gabrielle Dennis, and Brendan O'Carroll. It is the twelfth film in the Madea cinematic universe which tells the story of Madea partaking in her great-grandson's college graduation party as hidden secrets emerge and surprise visitors show up. It was released on February 25, 2022. It is adapted from Perry's stage play Madea's Farewell Play, the first Madea film to be adapted from a stage play since A Madea Christmas. The film is also a crossover between the Madea franchise and the Irish sitcom Mrs. Brown's Boys.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1c/A_madea_homecoming.jpeg',
		thumbnail_width: 263,
		thumbnail_height: 379
	},
	{
		title: 'No Exit',
		year: 2022,
		cast: ['Havana Rose Liu', 'Danny Ramirez', 'Dennis Haysbert'],
		genres: ['Thriller', 'War'],
		href: 'No_Exit_(2022_film)',
		extract:
			'No Exit is a 2022 American thriller film directed by Damien Power from a screenplay by Andrew Barrer and Gabriel Ferrari, based on the 2017 novel of the same name by Taylor Adams. It stars Havana Rose Liu as a recovering drug addict who discovers a kidnapping in progress while stranded at a rest stop during a blizzard. Danny Ramirez, David Rysdahl, Dale Dickey, and Dennis Haysbert co-star as the four suspects while Mila Harris plays the victim. No Exit was released on February 25, 2022, on Hulu by 20th Century Studios. It received mixed reviews from critics, who categorized it as a "reasonably diverting" popcorn movie.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1d/No_Exit_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Gasoline Alley',
		year: 2022,
		cast: ['Bruce Willis', 'Luke Wilson', 'Devon Sawa'],
		genres: ['Action', 'Thriller', 'War'],
		href: 'Gasoline_Alley_(2022_film)',
		extract:
			'Gasoline Alley is a 2022 American action thriller film directed by Edward John Drake, starring Devon Sawa, Bruce Willis and Luke Wilson. It was released in the United States on February 25, 2022 by Saban Films.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Gasoline_Alley_%282022_film%29.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'The Batman',
		year: 2022,
		cast: [
			'Robert Pattinson',
			'Zoë Kravitz',
			'Paul Dano',
			'Jeffrey Wright',
			'John Turturro',
			'Peter Sarsgaard',
			'Barry Keoghan',
			'Andy Serkis',
			'Colin Farrell'
		],
		genres: ['Superhero'],
		href: 'The_Batman_(film)',
		extract:
			"The Batman is a 2022 American superhero film based on the DC Comics character Batman. Produced by Warner Bros. Pictures, DC Films, 6th & Idaho, and Dylan Clark Productions, and distributed by Warner Bros. Pictures, it is a reboot of the Batman film franchise. The film was directed by Matt Reeves, who wrote the screenplay with Peter Craig. It stars Robert Pattinson as Bruce Wayne / Batman alongside Zoë Kravitz, Paul Dano, Jeffrey Wright, John Turturro, Peter Sarsgaard, Andy Serkis, and Colin Farrell. The film sees Batman, who has been fighting crime in Gotham City for two years, uncover corruption while pursuing the Riddler (Dano), a serial killer who targets Gotham's corrupt elite.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg',
		thumbnail_width: 236,
		thumbnail_height: 350
	},
	{
		title: 'After Yang',
		year: 2022,
		cast: [
			'Colin Farrell',
			'Jodie Turner-Smith',
			'Justin H. Min',
			'Malea Emma Tjandrawidjaja',
			'Haley Lu Richardson',
			'Ritchie Coster',
			'Sarita Choudhury',
			'Clifton Collins Jr.'
		],
		genres: ['Drama', 'Science Fiction'],
		href: 'After_Yang',
		extract:
			"After Yang is a 2021 American science fiction drama film adaptation written, directed, and edited by Kogonada. It stars Colin Farrell, Jodie Turner-Smith, Justin H. Min, Malea Emma Tjandrawidjaja, and Haley Lu Richardson. The plot follows a family's attempts to repair their unresponsive robotic child. The film had its world premiere at the Cannes Film Festival on July 8, 2021, and was released on March 4, 2022, by A24 and Showtime. It received generally positive reviews from critics.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/84/After_Yang.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Fresh',
		year: 2022,
		cast: [
			'Daisy Edgar-Jones',
			'Sebastian Stan',
			'Jonica T. Gibbs',
			'Charlotte Le Bon',
			'Andrea Bang',
			'Dayo Okeniyi'
		],
		genres: ['Horror', 'Thriller'],
		href: 'Fresh_(2022_film)',
		extract:
			'Fresh is a 2022 American horror thriller film directed by Mimi Cave, in her directorial debut, from a screenplay by Lauryn Kahn. The film stars Daisy Edgar-Jones and Sebastian Stan. It is a co-production between Legendary Pictures and Hyperobject Industries; Adam McKay produced the film alongside Kevin J. Messick.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Fresh_%282022%29_Poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 330
	},
	{
		title: 'A Day to Die',
		year: 2022,
		cast: ['Kevin Dillon', 'Bruce Willis', 'Frank Grillo'],
		genres: ['Action'],
		href: 'A_Day_to_Die',
		extract:
			'A Day to Die is an 2022 American heist action film written, directed, and produced by Wes Miller. It stars Kevin Dillon, Bruce Willis, Gianni Capaldi, Brooke Butler, Leon, and Frank Grillo. The film was released on March 4, 2022, by Vertical Entertainment.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f9/A_Day_to_Die_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 372
	},
	{
		title: 'The Adam Project',
		year: 2022,
		cast: [
			'Ryan Reynolds',
			'Mark Ruffalo',
			'Jennifer Garner',
			'Walker Scobell',
			'Catherine Keener',
			'Zoe Saldana'
		],
		genres: ['Action', 'Comedy', 'Science Fiction'],
		href: 'The_Adam_Project',
		extract:
			'The Adam Project is a 2022 American science fiction action comedy film co-produced by Skydance Media, Maximum Effort, and 21 Laps Entertainment. It was directed by Shawn Levy from a screenplay written by Jonathan Tropper, T.S. Nowlin, Jennifer Flackett and Mark Levin. The movie stars Ryan Reynolds, Walker Scobell, Mark Ruffalo, Jennifer Garner, Catherine Keener and Zoe Saldaña. The plot follows a fighter pilot (Reynolds) from the future, who goes back in time and encounters his younger self (Scobell).',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d7/The_Adam_Project_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Turning Red',
		year: 2022,
		cast: [
			'Rosalie Chiang',
			'Sandra Oh',
			'Ava Morse',
			'Hyein Park',
			'Maitreyi Ramakrishnan',
			'Orion Lee',
			'Wai Ching Ho',
			'Tristan Allerick Chen',
			'James Hong'
		],
		genres: ['Animated', 'Comedy', 'Fantasy'],
		href: 'Turning_Red',
		extract:
			'Turning Red is a 2022 American computer-animated fantasy comedy film produced by Pixar Animation Studios and distributed by Walt Disney Studios Motion Pictures. It was directed by Domee Shi and produced by Lindsey Collins, from a screenplay written by Shi and Julia Cho, and a story by Shi, Cho, and Sarah Streicher. The film marks the first Pixar feature film solely directed by a woman. It stars the voices of Rosalie Chiang, Sandra Oh, Ava Morse, Hyein Park, Maitreyi Ramakrishnan, Orion Lee, Wai Ching Ho, Tristan Allerick Chen, and James Hong. Set in Toronto, Ontario, in 2002, the film follows Meilin "Mei" Lee (Chiang), a 13-year-old Chinese-Canadian student who transforms into a giant red panda when she experiences any strong emotion, due to a hereditary curse.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Turning_Red_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: "Tyson's Run",
		year: 2022,
		cast: ['Rory Cochrane', 'Amy Smart', 'Major Dodson', 'Barkhad Abdi'],
		genres: ['Drama'],
		href: 'Tyson%27s_Run',
		extract:
			"Tyson's Run is a 2022 American drama film written and directed by Kim Bass and starring Rory Cochrane, Amy Smart, Major Dodson and Barkhad Abdi.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Tyson%27s_Run_New_Poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Rescued by Ruby',
		year: 2022,
		cast: ['Grant Gustin', 'Scott Wolf', 'Kaylah Zander'],
		genres: ['Drama', 'Biography'],
		href: 'Rescued_by_Ruby',
		extract:
			'Rescued by Ruby is a 2022 American biographical drama film directed by Katt Shea. Its story follows a state trooper named Dan, who dreams of joining the K-9 search and rescue team of the state police, however has been unsuccessful in doing so until he befriends a shelter dog named Ruby. The film is based on a true story. The film was released on March 17, 2022, by Netflix.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c6/Rescued_by_Ruby.jpeg',
		thumbnail_width: 284,
		thumbnail_height: 351
	},
	{
		title: 'The Outfit',
		year: 2022,
		cast: [
			'Mark Rylance',
			'Zoey Deutch',
			'Johnny Flynn',
			"Dylan O'Brien",
			'Nikki Amuka-Bird',
			'Simon Russell Beale'
		],
		genres: ['Crime', 'Drama', 'Thriller'],
		href: 'The_Outfit_(2022_film)',
		extract:
			"The Outfit is a 2022 American psychological crime drama thriller film directed by Graham Moore in his directorial debut from a screenplay by Moore and Johnathan McClain. The film stars Mark Rylance who leads an ensemble cast including Zoey Deutch, Johnny Flynn, Dylan O'Brien, Nikki Amuka-Bird, and Simon Russell Beale. Rylance plays an English cutter who works at a tailor shop in Chicago, whose primary customers are a family of vicious gangsters. The film premiered at the 72nd Berlin International Film Festival on February 14, 2022, and released in the United States on March 18, 2022, by Focus Features, to positive reviews.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/cc/The_Outfit_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Deep Water',
		year: 2022,
		cast: [
			'Ben Affleck',
			'Ana de Armas',
			'Tracy Letts',
			'Lil Rel Howery',
			'Dash Mihok',
			'Finn Wittrock',
			'Kristen Connolly',
			'Jacob Elordi'
		],
		genres: ['Erotic', 'Thriller'],
		href: 'Deep_Water_(2022_film)',
		extract:
			"Deep Water is a 2022 erotic psychological thriller film directed by Adrian Lyne, from a screenplay by Zach Helm and Sam Levinson, based on the 1957 novel of the same name by Patricia Highsmith. The film stars Ben Affleck and Ana de Armas, with Tracy Letts, Lil Rel Howery, Dash Mihok, Finn Wittrock, Kristen Connolly, and Jacob Elordi appearing in supporting roles. It marks Lyne's return to filmmaking after a 20-year absence since his last film, Unfaithful (2002).",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/37/Deep_Water_%282022_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Cheaper by the Dozen',
		year: 2022,
		cast: ['Gabrielle Union', 'Zach Braff', 'Erika Christensen'],
		genres: ['Comedy', 'Family'],
		href: 'Cheaper_by_the_Dozen_(2022_film)',
		extract:
			"Cheaper by the Dozen is a 2022 American family-comedy film directed by Gail Lerner from a screenplay written by Kenya Barris and Jenifer Rice-Genzuk Henry, with Shawn Levy serving as an executive producer. It is the third film adaptation of the 1948 semi-autobiographical novel of the same name by Frank Bunker Gilbreth Jr. and his sister Ernestine Gilbreth Carey following the 1950 and 2003 films. The film stars Gabrielle Union, Zach Braff, Erika Christensen, and Timon Kyle Durratt with supporting roles by Christian Cote, Sebastian Cote, Christina Anthony, Caylee Blosenski, Journey Brown, Brittany Daniel, Mykal-Michelle Harris, Cynthia Daniel Hauser, Abby Elliott, Ron Funches, Leo Abelo Perry, Luke Prael, June Diane Raphael, Andre Robinson, Kylie Rogers, and Aryan Simhadri. It tells the story of a restaurant proprietor and his second wife as they raise the kids from the restaurateur's previous marriage, the second wife's family, and the children they later conceived as their respective exes are still involved in their children's life.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/b/bf/Cheaper_by_the_Dozen_2022_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Windfall',
		year: 2022,
		cast: ['Lily Collins', 'Jesse Plemons', 'Jason Segel'],
		genres: ['Crime', 'Thriller'],
		href: 'Windfall_(2022_film)',
		extract:
			'Windfall is a 2022 American crime thriller film directed by Charlie McDowell from a screenplay by Andrew Kevin Walker and Justin Lader. The film stars Jason Segel, Lily Collins, and Jesse Plemons.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Windfall_%282022_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'X',
		year: 2022,
		cast: [
			'Mia Goth',
			'Jenna Ortega',
			'Martin Henderson',
			'Brittany Snow',
			'Owen Campbell',
			'Stephen Ure',
			'Scott Mescudi'
		],
		genres: ['Slasher'],
		href: 'X_(2022_film)',
		extract:
			"X is a 2022 American slasher film written, directed, produced and edited by Ti West. It stars Mia Goth in dual roles: a young woman named Maxine and Pearl, an elderly woman. The film also stars Jenna Ortega, Martin Henderson, Brittany Snow, Owen Campbell, Stephen Ure, and Scott Mescudi appearing in supporting roles. The film follows a cast and crew who gather to make a pornographic film on an elderly couple's rural Texas property, but find themselves threatened by the killer couple.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/34/X_%282022_film%29.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Umma',
		year: 2022,
		cast: [
			'Sandra Oh',
			'Fivel Stewart',
			'MeeWha Alana Lee',
			'Tom Yi',
			'Odeya Rush',
			'Dermot Mulroney'
		],
		genres: ['Horror', 'Supernatural'],
		href: 'Umma_(2022_film)',
		extract:
			"Umma (Korean: 엄마) is a 2022 American supernatural horror film, written and directed by Iris K. Shim. The film stars Sandra Oh, Fivel Stewart, MeeWha Alana Lee, Tom Yi, Odeya Rush, and Dermot Mulroney. Sam Raimi serves as a producer on the film. The film follows Amanda (Oh), a single mother who lives with her daughter in an isolated farm being haunted by her mother's ghost.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/43/Umma_%282022_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Alice',
		year: 2022,
		cast: ['Keke Palmer', 'Common', 'Gaius Charles', 'Jonny Lee Miller'],
		genres: ['Crime', 'Thriller'],
		href: 'Alice_(2022_film)',
		extract:
			'Alice is a 2022 American crime thriller film set in the 1970s, written and directed by Krystin Ver Linden, in her directorial debut. The film stars Keke Palmer, Jonny Lee Miller, Common, Gaius Charles, and Alicia Witt.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/00/Alice_%282022_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Master',
		year: 2022,
		cast: ['Regina Hall', 'Zoe Renee', 'Amber Gray'],
		genres: ['Horror', 'Thriller'],
		href: 'Master_(2022_film)',
		extract:
			'Master is a 2022 American psychological horror thriller film written and directed by Mariama Diallo in her directorial debut. The film stars Regina Hall, Zoe Renee, and Amber Gray.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Master_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Measure of Revenge',
		year: 2022,
		cast: ['Bella Thorne', 'Melissa Leo', 'Roma Maffia', 'Jake Weary', 'Adrian Martinez'],
		genres: ['Thriller'],
		href: 'Measure_of_Revenge',
		extract:
			'Measure of Revenge is a 2022 American thriller film directed by Peyfa. It stars Bella Thorne, Melissa Leo, Roma Maffia, Jake Weary and Adrian Martinez. Timur Bekbosunov, Jordan Galland wrote the screenplay.\nJen Gatien and Peter Wong produced the film.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/03/Measure_of_Revenge.jpeg',
		thumbnail_width: 274,
		thumbnail_height: 364
	},
	{
		title: 'The Lost City',
		year: 2022,
		cast: [
			'Sandra Bullock',
			'Channing Tatum',
			'Daniel Radcliffe',
			"Da'Vine Joy Randolph",
			'Brad Pitt'
		],
		genres: ['Action', 'Adventure', 'Comedy'],
		href: 'The_Lost_City_(2022_film)',
		extract:
			"The Lost City is a 2022 American action-adventure comedy film directed by the Nee brothers, who co-wrote the screenplay with Oren Uziel and Dana Fox, from a story conceived by Seth Gordon. It stars Sandra Bullock and Channing Tatum as a romance novelist and her cover model respectively who must escape a billionaire who wants her to find a lost ancient burial chamber described in one of her books. The film co-stars Da'Vine Joy Randolph and Brad Pitt.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ee/TheLostCityPoster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Everything Everywhere All at Once',
		year: 2022,
		cast: [
			'Michelle Yeoh',
			'Stephanie Hsu',
			'Ke Huy Quan',
			'Jenny Slate',
			'Harry Shum Jr.',
			'James Hong',
			'Jamie Lee Curtis'
		],
		genres: ['Comedy', 'Drama', 'Science Fiction'],
		href: 'Everything_Everywhere_All_at_Once',
		extract:
			'Everything Everywhere All at Once is a 2022 American absurdist science fiction comedy-drama film written and directed by Daniel Kwan and Daniel Scheinert, who produced it with Anthony and Joe Russo and Jonathan Wang. Michelle Yeoh stars as Evelyn Quan Wang, a Chinese-American immigrant who, while being audited by the IRS, discovers that she must connect with parallel universe versions of herself to prevent a powerful being from destroying the multiverse. The film also stars Stephanie Hsu, Ke Huy Quan, Jamie Lee Curtis, Jenny Slate, Harry Shum Jr., and James Hong in supporting roles. And it was fun. They had a lot of fun when they made this movie. It was fun to watch too',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Infinite Storm',
		year: 2022,
		cast: ['Naomi Watts', 'Billy Howle', 'Sophie Okonedo', "Denis O'Hare", 'Parker Sawyers'],
		genres: ['Adventure', 'Drama'],
		href: 'Infinite_Storm',
		extract:
			"Infinite Storm is a 2022 American drama adventure film directed by Małgorzata Szumowska, co-directed by Michał Englert, and with a screenplay by Josh Rollins, based on the article High Places: Footprints in the Snow Lead to an Emotional Rescue by Ty Gagne. The film stars Naomi Watts, Billy Howle, Denis O'Hare, Parker Sawyers and Eliot Sumner.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Infinite_Storm.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: '7 Days',
		year: 2022,
		cast: ['Karan Soni', 'Geraldine Viswanathan', 'Mark Duplass'],
		genres: ['Comedy', 'Romance'],
		href: '7_Days_(2021_film)',
		extract:
			'7 Days is an 2021 American romantic comedy film directed by Roshan Sethi, in his directorial debut, from a screenplay by Sethi and Karan Soni. It stars Soni, Geraldine Viswanathan, Mark Duplass, Zenobia Shroff, Aparna Nancherla, Gita Reddy and Jeffrey Self.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a9/7DaysFilmPoster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Moonshot',
		year: 2022,
		cast: ['Cole Sprouse', 'Lana Condor', 'Mason Gooding', 'Emily Rudd', 'Zach Braff'],
		genres: ['Comedy', 'Romance', 'Science Fiction'],
		href: 'Moonshot_(2022_film)',
		extract:
			'Moonshot is a 2022 American science-fiction romantic comedy film directed by Chris Winterbauer and written by Max Taxe. It stars Cole Sprouse, Lana Condor, Mason Gooding, Emily Rudd, and Zach Braff. The plot follows a college student (Condor) who helps a barista (Sprouse) sneak on board a space shuttle to Mars. The film was released on HBO Max on March 31, 2022, and was removed from the service in August.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/19/Moonshot_%282022_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Morbius',
		year: 2022,
		cast: [
			'Jared Leto',
			'Matt Smith',
			'Adria Arjona',
			'Jared Harris',
			'Al Madrigal',
			'Tyrese Gibson'
		],
		genres: ['Superhero'],
		href: 'Morbius_(film)',
		extract:
			"Morbius is a 2022 American superhero film based on the Marvel Comics character of the same name, produced by Columbia Pictures in association with Marvel. Distributed by Sony Pictures Releasing, it is the third film in Sony's Spider-Man Universe (SSU). Directed by Daniel Espinosa and written by Matt Sazama and Burk Sharpless, it stars Jared Leto as Dr. Michael Morbius, alongside Matt Smith, Adria Arjona, Jared Harris, Al Madrigal, and Tyrese Gibson. In the film, Morbius and his surrogate brother Milo (Smith) become living vampires after curing themselves of a rare blood disease.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Morbius_%28film%29_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'The Bubble',
		year: 2022,
		cast: [
			'Karen Gillan',
			'Iris Apatow',
			'Fred Armisen',
			'Maria Bakalova',
			'David Duchovny',
			'Keegan-Michael Key',
			'Leslie Mann',
			'Kate McKinnon',
			'Pedro Pascal',
			'Peter Serafinowicz'
		],
		genres: ['Comedy'],
		href: 'The_Bubble_(2022_film)',
		extract:
			'The Bubble is a 2022 American comedy film directed by Judd Apatow from a screenplay co-written with Pam Brady. The film features an ensemble cast that includes Karen Gillan, Vir Das, Pedro Pascal, Iris Apatow, Fred Armisen, Maria Bakalova, David Duchovny, Keegan-Michael Key, Leslie Mann, Kate McKinnon, Guz Khan, Peter Serafinowicz and Harry Trevaldwyn. It follows the cast and crew of a blockbuster action franchise who attempt to shoot a sequel while quarantining at a posh hotel during the COVID-19 pandemic.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/82/The_Bubble_%282022_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Contractor',
		year: 2022,
		cast: [
			'Chris Pine',
			'Ben Foster',
			'Gillian Jacobs',
			'Eddie Marsan',
			'J. D. Pardo',
			'Florian Munteanu',
			'Kiefer Sutherland'
		],
		genres: ['Action', 'Thriller'],
		href: 'The_Contractor_(2022_film)',
		extract:
			'The Contractor is a 2022 American action thriller film directed by Tarik Saleh in his English-language film debut. The film stars Chris Pine, Ben Foster, Gillian Jacobs, Eddie Marsan, J. D. Pardo, Florian Munteanu, and Kiefer Sutherland. Filming began in Europe including Fort Bragg in October 2019 and wrapped in the filming at the end of 2019.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/cb/The_Contractor_%282022_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Better Nate Than Ever',
		year: 2022,
		cast: ['Rueby Wood', 'Joshua Bassett', 'Aria Brooks', 'Lisa Kudrow', 'Norbert Leo Butz'],
		genres: ['Comedy', 'Musical'],
		href: 'Better_Nate_Than_Ever_(film)',
		extract:
			'Better Nate Than Ever is a 2022 American musical comedy film written and directed by Tim Federle, based on his 2013 novel of the same name. Described as a coming-of-age story involving musical theater and Broadway, the story centers on the titular Nate Foster, played by Rueby Wood in his first film role. Lisa Kudrow, Aria Brooks and Joshua Bassett serve in supporting cast roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Better_Nate_Than_Ever_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Apollo 10 1⁄2: A Space Age Childhood',
		year: 2022,
		cast: ['Glen Powell', 'Zachary Levi', 'Milo Coy', 'Jack Black'],
		genres: ['Animated', 'Drama', 'Teen'],
		href: 'Apollo_10_1%E2%81%842:_A_Space_Age_Childhood',
		extract:
			'Apollo 10+1⁄2: A Space Age Childhood is a 2022 American animated coming of age drama film set during the events preceding the Apollo 11 Moon landing, loosely based on the childhood of writer, director, and producer Richard Linklater. It presents a fictional tale of a fourth-grader who becomes the first person to land on the Moon and stars Glen Powell, Jack Black, Zachary Levi and Josh Wiggins.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/c/cd/Apollo_10%C2%BD_A_Space_Age_Childhood_Poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Sonic the Hedgehog 2',
		year: 2022,
		cast: [
			'James Marsden',
			'Ben Schwartz',
			'Tika Sumpter',
			'Natasha Rothwell',
			'Adam Pally',
			'Shemar Moore',
			"Colleen O'Shaughnessey",
			'Lee Majdoub',
			'Idris Elba',
			'Jim Carrey'
		],
		genres: ['Action', 'Adventure', 'Comedy'],
		href: 'Sonic_the_Hedgehog_2_(film)',
		extract:
			"Sonic the Hedgehog 2 is a 2022 action-adventure comedy film based on the video game series published by Sega, and the sequel to Sonic the Hedgehog (2020). Directed by Jeff Fowler and written by Pat Casey, Josh Miller, and John Whittington, the film stars Ben Schwartz, Jim Carrey, James Marsden, Tika Sumpter, Natasha Rothwell, Adam Pally, Lee Majdoub, and Colleen O'Shaughnessey reprising their roles, with Idris Elba and Shemar Moore joining the cast. In the film, after settling in Green Hills, Sonic tries to prove himself as a hero, but his big test comes when the evil Doctor Robotnik returns, alongside his new rival, Knuckles the Echidna, in search of the Master Emerald.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/3e/Sonic_the_Hedgehog_2_film_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 325
	},
	{
		title: 'Ambulance',
		year: 2022,
		cast: ['Jake Gyllenhaal', 'Yahya Abdul-Mateen II', 'Eiza González'],
		genres: ['Action', 'Thriller'],
		href: 'Ambulance_(2022_film)',
		extract:
			'Ambulance is a 2022 American action thriller film directed and co-produced by Michael Bay and written by Chris Fedak. A co-production between New Republic Pictures, Project X Entertainment and Bay Films, it is based on the 2005 Danish film of the same name by Laurits Munch-Petersen and Lars Andreas Pedersen. It stars Jake Gyllenhaal, Yahya Abdul-Mateen II, and Eiza González and follows two adoptive siblings turned bank robbers who hijack an ambulance and take two first responders hostage.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Ambulance_film_poster.jpg',
		thumbnail_width: 251,
		thumbnail_height: 398
	},
	{
		title: 'All the Old Knives',
		year: 2022,
		cast: ['Chris Pine', 'Thandiwe Newton', 'Laurence Fishburne', 'Jonathan Pryce'],
		genres: ['Spy', 'Thriller'],
		href: 'All_the_Old_Knives',
		extract:
			"All the Old Knives is a 2022 American spy thriller film directed by Janus Metz Pedersen and written by Olen Steinhauer. It is based on Steinhauer's 2015 novel of the same name. The film stars Chris Pine, Thandiwe Newton, Laurence Fishburne, Jonathan Pryce and David Dawson.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f0/All_the_Old_Knives.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Metal Lords',
		year: 2022,
		cast: [
			'Jaeden Martell',
			'Isis Hainsworth',
			'Adrian Greensmith',
			'Brett Gelman',
			'Joe Manganiello'
		],
		genres: ['Comedy', 'Drama', 'Teen'],
		href: 'Metal_Lords',
		extract:
			'Metal Lords is a 2022 American teen comedy-drama film written by D. B. Weiss and directed by Peter Sollett. Its story follows two high school best friends and metal music lovers, Hunter and Kevin, who set out to start a metal band, against societal norms. The film was released on Netflix on April 8, 2022.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Metal_Lords_Poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Father Stu',
		year: 2022,
		cast: ['Mark Wahlberg', 'Mel Gibson', 'Jacki Weaver', 'Teresa Ruiz'],
		genres: ['Drama', 'Biography'],
		href: 'Father_Stu',
		extract:
			'Father Stu is a 2022 biographical drama film starring Mark Wahlberg as Stuart Long, a boxer-turned-Catholic priest who lives with a progressive muscle disorder. The film is written and directed by Rosalind Ross in her directorial debut. The film was produced on a budget of $4 million.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/db/Father_Stu.jpg',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'Fantastic Beasts: The Secrets of Dumbledore',
		year: 2022,
		cast: [
			'Eddie Redmayne',
			'Jude Law',
			'Ezra Miller',
			'Dan Fogler',
			'Alison Sudol',
			'Callum Turner',
			'Jessica Williams',
			'Katherine Waterston',
			'Mads Mikkelsen'
		],
		genres: ['Fantasy'],
		href: 'Fantastic_Beasts:_The_Secrets_of_Dumbledore',
		extract:
			"Fantastic Beasts: The Secrets of Dumbledore is a 2022 fantasy film directed by David Yates from a screenplay by J. K. Rowling and Steve Kloves, based on a screenplay by Rowling. The sequel to Fantastic Beasts: The Crimes of Grindelwald (2018), it is the third instalment in the  Fantastic Beasts film series and the eleventh overall in the Wizarding World franchise. The film features an ensemble cast that includes Eddie Redmayne, Jude Law, Ezra Miller, Dan Fogler, Alison Sudol, Callum Turner, Jessica Williams, Katherine Waterston, and Mads Mikkelsen. Set several years after the events of its predecessor, the film sees Albus Dumbledore tasking Newt Scamander and his allies with a mission that takes them into the heart of dark wizard Gellert Grindelwald's army.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/34/Fantastic_Beasts-_The_Secrets_of_Dumbledore.png',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'Dual',
		year: 2022,
		cast: ['Karen Gillan', 'Beulah Koale', 'Theo James', 'Aaron Paul'],
		genres: ['Science Fiction', 'Thriller'],
		href: 'Dual_(2022_film)',
		extract:
			'Dual is a 2022 American satirical science fiction thriller film written, directed, and produced by Riley Stearns. It stars Karen Gillan, Beulah Koale, Theo James, and Aaron Paul. The plot follows a woman who has to fight a clone of herself to the death after she unexpectedly recovers from a terminal illness. The film premiered at the 2022 Sundance Film Festival on January 22, 2022. It was released in the United States on April 15, 2022, by RLJE Films.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Dual_%282022_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Choose or Die',
		year: 2022,
		cast: ['Asa Butterfield', 'Iola Evans', 'Eddie Marsan', 'Robert Englund'],
		genres: ['Horror', 'Thriller'],
		href: 'Choose_or_Die',
		extract:
			'Choose or Die is a 2022 British horror thriller film directed by Toby Meakins in his feature directorial debut. The film stars Iola Evans, Asa Butterfield, Robert Englund and Eddie Marsan.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Choose_or_Die_film_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 313
	},
	{
		title: 'Titanic 666',
		year: 2022,
		cast: ['Keesha Sharp', 'Jamie Bamber', 'Lydia Hearst', 'AnnaLynne McCord', 'Joseph Gatt'],
		genres: ['Horror', 'Supernatural'],
		href: 'Titanic_666',
		extract:
			"Titanic 666 is a 2022 American supernatural horror film directed by Nick Lyon and produced by The Asylum. It is a sequel to Titanic II (2010) and stars Jamie Bamber and Keesha Sharp. It was released on Tubi on the United States on April 15, 2022, on the 110th anniversary of the sinking of the Titanic. The film received generally unfavorable reviews, and users on social media noted the film's similarity to Titanic (1997) and Studio 666 (2022).",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e7/Titanic_666.jpeg',
		thumbnail_width: 263,
		thumbnail_height: 378
	},
	{
		title: 'The Bad Guys',
		year: 2022,
		cast: [
			'Sam Rockwell',
			'Marc Maron',
			'Craig Robinson',
			'Anthony Ramos',
			'Awkwafina',
			'Richard Ayoade',
			'Zazie Beetz',
			'Lilly Singh',
			'Alex Borstein'
		],
		genres: ['Animated', 'Comedy', 'Family', 'Action'],
		href: 'The_Bad_Guys_(film)',
		extract:
			"The Bad Guys is a 2022 American computer-animated heist comedy film loosely based on the children's book series of the same name by Aaron Blabey, produced by DreamWorks Animation Studios and distributed by Universal Pictures. The film was directed by Pierre Perifel from a screenplay by Etan Cohen, and stars the voices of Sam Rockwell, Marc Maron, Awkwafina, Craig Robinson, Anthony Ramos, Richard Ayoade, Zazie Beetz, Alex Borstein, and Lilly Singh. It tells the story of a criminal group of anthropomorphic animals who, upon being caught, pretend to attempt to reform themselves as model citizens, only for their leader to find himself genuinely drawn to changing his ways for good as a new villain has his own plans.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/00/The_Bad_Guys_poster.jpeg',
		thumbnail_width: 256,
		thumbnail_height: 389
	},
	{
		title: 'The Northman',
		year: 2022,
		cast: [
			'Alexander Skarsgård',
			'Nicole Kidman',
			'Claes Bang',
			'Anya Taylor-Joy',
			'Ethan Hawke',
			'Björk',
			'Willem Dafoe'
		],
		genres: ['Action', 'Historical', 'Thriller'],
		href: 'The_Northman',
		extract:
			'The Northman is a 2022 American epic historical action thriller film directed by Robert Eggers, who co-wrote the screenplay with Sjón. Based on the legend of Amleth, the film stars Alexander Skarsgård, Nicole Kidman, Claes Bang, Anya Taylor-Joy, Ethan Hawke, Björk and Willem Dafoe. The plot centers on Amleth, a Viking prince who sets out on a quest to avenge the murder of his father. The film is heavily influenced by Norse mythology.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8c/The_Northman.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'The Unbearable Weight of Massive Talent',
		year: 2022,
		cast: [
			'Nicolas Cage',
			'Pedro Pascal',
			'Sharon Horgan',
			'Ike Barinholtz',
			'Alessandra Mastronardi',
			'Jacob Scipio',
			'Neil Patrick Harris',
			'Tiffany Haddish'
		],
		genres: ['Action', 'Comedy'],
		href: 'The_Unbearable_Weight_of_Massive_Talent',
		extract:
			'The Unbearable Weight of Massive Talent is a 2022 American action comedy film directed by Tom Gormican, who co-wrote the screenplay with Kevin Etten. It stars Nicolas Cage as a fictionalized version of himself, along with a supporting cast including Pedro Pascal, Sharon Horgan, Ike Barinholtz, Alessandra Mastronardi, Jacob Scipio, Neil Patrick Harris and Tiffany Haddish. Filming began in Croatia on October 5, 2020.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/8/87/The_Unbearable_Weight_of_Massive_Talent.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Polar Bear',
		year: 2022,
		cast: ['Catherine Keener'],
		genres: ['Documentary'],
		href: 'Polar_Bear_(film)',
		extract:
			'Polar Bear is a 2022 American nature documentary film about polar bears directed by Alastair Fothergill and Jeff Wilson. Narrated by Catherine Keener, it is the sixteenth nature documentary to be released under the Disneynature label. The film was released as a Disney+ exclusive on Earth Day April 22, 2022.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/62/Polar_Bear_film_poster.png',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'The Survivor',
		year: 2022,
		cast: [
			'Ben Foster',
			'Vicky Krieps',
			'Billy Magnussen',
			'Peter Sarsgaard',
			'John Leguizamo',
			'Danny DeVito'
		],
		genres: ['Drama', 'Biography'],
		href: 'The_Survivor_(2021_film)',
		extract:
			'The Survivor is a 2021 biographical drama film, directed by Barry Levinson, from a screenplay by Justine Juel Gillmer. Ben Foster stars as Harry Haft, a real-life survivor of the Auschwitz concentration camp, where he boxed fellow inmates to survive. Vicky Krieps, Billy Magnussen, Peter Sarsgaard, John Leguizamo, and Danny DeVito co-star. The film had its world premiere at the Toronto International Film Festival in September 2021, and was released on HBO on April 27, 2022.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/73/The_Survivor_%282021_film%29.jpg',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'Memory',
		year: 2022,
		cast: [
			'Liam Neeson',
			'Guy Pearce',
			'Monica Bellucci',
			'Harold Torres',
			'Taj Atwal',
			'Ray Fearon'
		],
		genres: ['Action', 'Thriller'],
		href: 'Memory_(2022_film)',
		extract:
			"Memory is a 2022 American action thriller film directed by Martin Campbell from a screenplay by Dario Scardapane. It is based on the novel De Zaak Alzheimer by Jef Geeraerts and is a remake of the novel's previous adaptation, the Belgian film The Alzheimer Case. The film stars Liam Neeson as a brooding hitman with early dementia who must go on the run after declining a contract on a young girl; Guy Pearce, Monica Bellucci, Harold Torres, Taj Atwal and Ray Fearon also star.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/77/Memory_official_logo.png',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Crush',
		year: 2022,
		cast: [
			'Rowan Blanchard',
			'Auliʻi Cravalho',
			'Isabella Ferreira',
			'Tyler Alvarez',
			'Teala Dunn'
		],
		genres: ['Comedy', 'Romance'],
		href: 'Crush_(2022_film)',
		extract:
			'Crush is a 2022 American coming-of-age romantic comedy film directed by Sammi Cohen and written by Kirsten King and Casey Rackham. The film stars Rowan Blanchard and Auliʻi Cravalho in a story about a teenage girl joining her high-school track team to get closer to her crush, only to discover she is getting closer to another teammate. Crush was released digitally on April 29, 2022, on Hulu.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Crush_%282022_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "Fortress: Sniper's Eye",
		year: 2022,
		cast: ['Jesse Metcalfe', 'Bruce Willis', 'Chad Michael Murray'],
		genres: ['Action'],
		href: 'Fortress:_Sniper%27s_Eye',
		extract:
			"Fortress: Sniper's Eye is a 2022 American action film directed by Josh Sternfeld as a sequel to Fortress (2021). It stars Jesse Metcalfe, Bruce Willis, and Chad Michael Murray. The film was released on April 29, 2022, by Lionsgate Films.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/68/Fortress_Sniper%27s_Eye.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Corrective Measures',
		year: 2022,
		cast: ['Bruce Willis', 'Michael Rooker'],
		genres: ['Superhero'],
		href: 'Corrective_Measures',
		extract:
			"Corrective Measures is a 2022 American superhero film written, produced and directed by Sean O'Reilly and starring Bruce Willis and Michael Rooker. It is based on the graphic novel of the same name by Grant Chastain. It is also O'Reilly's debut in a live-action feature film.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/97/Corrective_Measures_poster.png',
		thumbnail_width: 267,
		thumbnail_height: 373
	},
	{
		title: 'Doctor Strange in the Multiverse of Madness',
		year: 2022,
		cast: [
			'Benedict Cumberbatch',
			'Elizabeth Olsen',
			'Chiwetel Ejiofor',
			'Benedict Wong',
			'Xochitl Gomez',
			'Michael Stuhlbarg',
			'Rachel McAdams'
		],
		genres: ['Superhero'],
		href: 'Doctor_Strange_in_the_Multiverse_of_Madness',
		extract:
			'Doctor Strange in the Multiverse of Madness is a 2022 American superhero film based on Marvel Comics featuring the character Doctor Strange. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Doctor Strange (2016) and the 28th film in the Marvel Cinematic Universe (MCU). The film was directed by Sam Raimi, written by Michael Waldron, and stars Benedict Cumberbatch as Stephen Strange, alongside Elizabeth Olsen, Chiwetel Ejiofor, Benedict Wong, Xochitl Gomez, Michael Stuhlbarg, and Rachel McAdams. In the film, Strange protects America Chavez (Gomez), a teenager capable of traveling the multiverse, from Wanda Maximoff (Olsen).',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Along for the Ride',
		year: 2022,
		cast: ['Emma Pasarow', 'Belmont Cameli', 'Kate Bosworth', 'Andie MacDowell', 'Dermot Mulroney'],
		genres: ['Drama', 'Romance'],
		href: 'Along_for_the_Ride_(film)',
		extract:
			'Along for the Ride is a 2022 American romantic drama film written and directed by Sofia Alvarez, based on the novel of the same name by Sarah Dessen. The film stars Emma Pasarow, Belmont Cameli, Kate Bosworth, Laura Kariuki, Andie MacDowell and Dermot Mulroney. The film was released on May 6, 2022 by Netflix.\nThe film\'s official logline reads: "The summer before college Auden meets the mysterious Eli, a fellow insomniac. While the seaside town of Colby sleeps, the two embark on a nightly quest to help Auden experience the fun, carefree teen life she never knew she wanted."',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Along_for_the_Ride_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Marmaduke',
		year: 2022,
		cast: ['Pete Davidson', 'J. K. Simmons', 'David Koechner', 'Brian Hull'],
		genres: ['Animated', 'Comedy'],
		href: 'Marmaduke_(2022_film)',
		extract:
			'Marmaduke is a 2022 computer-animated comedy film directed by Mark Dippé, and co-directed by Phil Nibbelink, Youngki Lee, and Matt Whelan, based on the comic strip of the same name by Paul and Brad Anderson. It is the second feature-length film based on the strip following the 2010 live-action film. The film stars Pete Davidson as the voice of Marmaduke, along with J. K. Simmons and David Koechner. It was released by SC Films in international countries and on Netflix in the United States on May 6, 2022. Marmaduke was universally panned by critics and audiences, with criticisms going towards its animation, screenplay, story, characters, and humor.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/14/Marmaduke_2022_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Escape the Field',
		year: 2022,
		cast: ['Jordan Claire Robbins', 'Theo Rossi', 'Tahirah Sharif', 'Shane West'],
		genres: ['Thriller'],
		href: 'Escape_the_Field',
		extract:
			'Escape the Field is a 2022 American thriller film directed by Emerson Moore and starring Jordan Claire Robbins, Theo Rossi, and Shane West.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/24/Escape_the_Field.jpg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'Operation Mincemeat',
		year: 2022,
		cast: [
			'Colin Firth',
			'Matthew Macfadyen',
			'Kelly Macdonald',
			'Penelope Wilton',
			'Johnny Flynn',
			'Jason Isaacs'
		],
		genres: ['Drama', 'War'],
		href: 'Operation_Mincemeat_(film)',
		extract:
			"Operation Mincemeat is a 2021 British war drama film directed by John Madden. It is based upon Ben Macintyre's book on the British Operation Mincemeat during the Second World War. The film stars Colin Firth, Kelly Macdonald, Matthew Macfadyen, Penelope Wilton, Johnny Flynn and Jason Isaacs. This was Paul Ritter's final film appearance, and was dedicated to his memory.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Operation_Mincemeat.jpg/320px-Operation_Mincemeat.jpg',
		thumbnail_width: 320,
		thumbnail_height: 241
	},
	{
		title: 'Senior Year',
		year: 2022,
		cast: [
			'Rebel Wilson',
			'Sam Richardson',
			'Zoë Chao',
			'Mary Holland',
			'Justin Hartley',
			'Chris Parnell',
			'Angourie Rice',
			'Michael Cimino',
			'Jeremy Ray Taylor',
			'Brandon Scott Jones',
			'Alicia Silverstone'
		],
		genres: ['Comedy'],
		href: 'Senior_Year_(2022_film)',
		extract:
			'Senior Year is a 2022 American comedy film directed by Alex Hardcastle from a screenplay by Andrew Knauer, Arthur Pielli, and Brandon Scott Jones. The film stars Rebel Wilson as a 37-year-old woman who awakens from a 20-year coma and decides to go back to high school to earn her diploma. Sam Richardson, Zoë Chao, Mary Holland, Justin Hartley, Chris Parnell, Angourie Rice, Michael Cimino, Jeremy Ray Taylor, Jones, and Alicia Silverstone also star. The film was released on May 13, 2022, by Netflix, and received mixed reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2f/SeniorYearNetflixTeaser.jpg',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'Firestarter',
		year: 2022,
		cast: [
			'Zac Efron',
			'Ryan Kiera Armstrong',
			'Sydney Lemmon',
			'Kurtwood Smith',
			'John Beasley',
			'Michael Greyeyes',
			'Gloria Reuben'
		],
		genres: ['Horror', 'Science Fiction'],
		href: 'Firestarter_(2022_film)',
		extract:
			"Firestarter is a 2022 American science fiction horror film directed by Keith Thomas, from a screenplay by Scott Teems, based on Stephen King's novel of the same name, and a remake of the 1984 film of the same name. The film stars Zac Efron, Ryan Kiera Armstrong, Sydney Lemmon, Kurtwood Smith, John Beasley, Michael Greyeyes, and Gloria Reuben. It is produced by Jason Blum and Akiva Goldsman under their Blumhouse Productions and Weed Road Pictures banners, respectively, alongside BoulderLight Pictures and Night Platform.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/04/Firestarter_%282022%29_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Sneakerella',
		year: 2022,
		cast: ['Chosen Jacobs', 'Lexi Underwood', 'John Salley'],
		genres: ['Comedy', 'Musical'],
		href: 'Sneakerella',
		extract:
			'Sneakerella is a 2022 American musical comedy film directed by Elizabeth Allen Rosenbaum and written by David Light & Joseph Raso, Tamara Chestna, Mindy Stern, and George Gore II. A re-imagining of the classic fairy tale Cinderella, the film stars Chosen Jacobs, Lexi Underwood, Devyn Nekoda, Bryan Terrell Clark, Kolton Stewart, Hayward Leach, Robyn Alomar, Yvonne Senat Jones, Juan Chioran, and John Salley.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/21/Sneakerella.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'On the Count of Three',
		year: 2022,
		cast: [
			'Jerrod Carmichael',
			'Christopher Abbott',
			'Tiffany Haddish',
			'J. B. Smoove',
			'Henry Winkler'
		],
		genres: ['Comedy', 'Drama'],
		href: 'On_the_Count_of_Three',
		extract:
			'On the Count of Three is an 2021 American black comedy-drama film directed by Jerrod Carmichael and written by Ari Katcher and Ryan Welch. It stars Carmichael and Christopher Abbott as two best friends who make a suicide pact and have one final day to take care of unfinished business. Tiffany Haddish, J. B. Smoove, Lavell Crawford, and Henry Winkler also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/08/On_the_Count_of_Three.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Private Property',
		year: 2022,
		cast: ['Ashley Benson', 'Shiloh Fernandez', 'Logan Miller', 'Frank Whaley', 'Jay Pharoah'],
		genres: ['Thriller'],
		href: 'Private_Property_(2022_film)',
		extract:
			'Private Property is a 2022 American thriller film directed by Chadd Harbold and starring Ashley Benson and Shiloh Fernandez. It is a remake of the 1960 film of the same title.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/99/Private_property_film.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Family Camp',
		year: 2022,
		cast: ['Tommy Woodward', 'Eddie James', 'Leigh-Allyn Baker', 'Mark Christopher Lawrence'],
		genres: ['Comedy'],
		href: 'Family_Camp',
		extract:
			"Family Camp is a 2022 American religious comedy film directed by Brian Cates and written by Cates and Rene Gutteridge. The film stars Tommy Woodard, Eddie James, Leigh-Allyn Baker, and Gigi Orsillo, and follows two polar-opposite families who are forced to camp together, the fathers' struggles to hold onto their families and marriages as they compete for the coveted camp trophy. The film was released on May 13, 2022 in the United States, by Roadside Attractions. The film received mixed reviews and grossed $4 million at the box office.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/40/Family_camp.jpg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Montana Story',
		year: 2022,
		cast: ['Haley Lu Richardson', 'Owen Teague'],
		genres: ['Drama'],
		href: 'Montana_Story',
		extract:
			"Montana Story is a 2021 American drama film written and directed by Scott McGehee and David Siegel. The film stars Haley Lu Richardson and Owen Teague. Two siblings return to their family's ranch in Montana after their father falls into a coma.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Montana_Story.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Vendetta',
		year: 2022,
		cast: ['Clive Standen', 'Theo Rossi', 'Mike Tyson', 'Thomas Jane', 'Bruce Willis'],
		genres: ['Action', 'Thriller'],
		href: 'Vendetta_(2022_film)',
		extract:
			'Vendetta is a 2022 American action-thriller revenge film written and directed by Jared Cohn and starring Clive Standen, Theo Rossi, Mike Tyson, Thomas Jane, and Bruce Willis.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Vendetta_film_poster.png',
		thumbnail_width: 274,
		thumbnail_height: 364
	},
	{
		title: 'Downton Abbey: A New Era',
		year: 2022,
		cast: [
			'Hugh Bonneville',
			'Elizabeth McGovern',
			'Maggie Smith',
			'Michelle Dockery',
			'Laura Carmichael',
			'Jim Carter',
			'Phyllis Logan'
		],
		genres: ['Drama', 'Historical'],
		href: 'Downton_Abbey:_A_New_Era',
		extract:
			'Downton Abbey: A New Era is a 2022 historical drama film and the sequel to the 2019 film Downton Abbey. The film was written by Julian Fellowes, the creator and writer of the television series of the same name and was directed by Simon Curtis.\nDownton Abbey: A New Era was released in the United Kingdom on 29 April 2022 by Universal Pictures and was released in the United States on 20 May by Focus Features. Like the first film, it received generally positive reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Downton_Abbey_A_New_Era.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: "Chip 'n Dale: Rescue Rangers",
		year: 2022,
		cast: [
			'John Mulaney',
			'Andy Samberg',
			'Will Arnett',
			'Eric Bana',
			'Keegan-Michael Key',
			'Seth Rogen',
			'J. K. Simmons',
			'KiKi Layne'
		],
		genres: ['Live Action', 'Adventure', 'Animated', 'Comedy'],
		href: 'Chip_%27n_Dale:_Rescue_Rangers_(film)',
		extract:
			"Chip 'n Dale: Rescue Rangers is a 2022 American live-action/animated adventure comedy film based on the characters Chip and Dale and continuation of the animated TV series of the same name, excluding the duo's previous filmography. Directed by Akiva Schaffer and written by Dan Gregor and Doug Mand, the film stars John Mulaney and Andy Samberg as the voices of the titular pair, respectively, with KiKi Layne, Will Arnett, Eric Bana, Flula Borg, Dennis Haysbert, Keegan-Michael Key, Tress MacNeille, Tim Robinson, Seth Rogen and J.K. Simmons. Walt Disney Pictures co-produced the film in association with The Lonely Island and alongside producers David Hoberman and Todd Lieberman's Mandeville Films.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/4/46/Chip_n_Dale_Rescue_Rangers_Teaser_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Good Mourning',
		year: 2022,
		cast: [
			'Colson Baker',
			'Mod Sun',
			'Becky G',
			'Dove Cameron',
			'Pete Davidson',
			'Whitney Cummings',
			'Megan Fox'
		],
		genres: ['Comedy'],
		href: 'Good_Mourning_(film)',
		extract:
			'Good Mourning is a 2022 American stoner comedy film written, produced and directed by and starring Machine Gun Kelly and Mod Sun, in their directorial debuts. It also stars Zach Villa, GaTa, Becky G, Dove Cameron and Megan Fox.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/a/a2/The_film_poster_to_represent_the_2022_film_%22Good_Mourning%22.png',
		thumbnail_width: 261,
		thumbnail_height: 382
	},
	{
		title: 'The Valet',
		year: 2022,
		cast: ['Eugenio Derbez', 'Samara Weaving'],
		genres: ['Comedy', 'Romance'],
		href: 'The_Valet_(2022_film)',
		extract:
			'The Valet is a 2022 American romantic comedy film directed by Richard Wong and written by Bob Fisher and Rob Greenberg. It is a remake of the French film The Valet (2006) by Francis Veber. It stars Eugenio Derbez and Samara Weaving, with Max Greenfield, Betsy Brandt, Marisol Nichols, Amaury Nolasco, Carmen Salinas, Noemi Gonzalez, Armando Hernández, Carlos Santos, Ravi Patel, and John Pirruccello in supporting roles. The film is dedicated to Salinas, who died in 2021. The plot follows a parking valet (Derbez) who is hired to date an actress (Weaving) trying to cover up an affair. It was released on Hulu on May 20, 2022. It received generally positive reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f4/The_Valet_%282022_film%29.jpg',
		thumbnail_width: 260,
		thumbnail_height: 390
	},
	{
		title: 'Emergency',
		year: 2022,
		cast: ['RJ Cyler', 'Sabrina Carpenter'],
		genres: ['Comedy', 'Drama', 'Thriller'],
		href: 'Emergency_(2022_film)',
		extract:
			'Emergency is a 2022 American thriller comedy-drama film directed by Carey Williams and written by K.D. Dávila, based on their 2018 short film of the same name. It stars RJ Cyler, Donald Elise Watkins, and Sebastian Chacon as three college students who must weigh the pros and cons of calling the police when faced with an unexpected situation.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Emergency_%282022_film%29.jpg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'Top Gun: Maverick',
		year: 2022,
		cast: [
			'Tom Cruise',
			'Miles Teller',
			'Jennifer Connelly',
			'Jon Hamm',
			'Glen Powell',
			'Lewis Pullman',
			'Ed Harris',
			'Val Kilmer'
		],
		genres: ['Action', 'Drama'],
		href: 'Top_Gun:_Maverick',
		extract:
			'Top Gun: Maverick is a 2022 American action drama film directed by Joseph Kosinski and written by Ehren Kruger, Eric Warren Singer and Christopher McQuarrie from stories by Peter Craig and Justin Marks. The film is a sequel to the 1986 film Top Gun. Tom Cruise reprises his starring role as the naval aviator Maverick. It was based on the characters of the original film created by Jim Cash and Jack Epps Jr. The film also stars Miles Teller, Jennifer Connelly, Jon Hamm, Glen Powell, Lewis Pullman, Ed Harris and Val Kilmer, who reprises his role as Iceman. In the film, Maverick confronts his past while training a group of younger Top Gun graduates, including the son of his deceased best friend, for a dangerous mission.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg',
		thumbnail_width: 261,
		thumbnail_height: 381
	},
	{
		title: "The Bob's Burgers Movie",
		year: 2022,
		cast: [
			'H. Jon Benjamin',
			'Dan Mintz',
			'Eugene Mirman',
			'Larry Murphy',
			'John Roberts',
			'Kristen Schaal',
			'Zach Galifianakis',
			'Kevin Kline'
		],
		genres: ['Animated', 'Comedy', 'Musical'],
		href: 'The_Bob%27s_Burgers_Movie',
		extract:
			"The Bob's Burgers Movie is a 2022 American animated musical comedy film based on the Fox animated television series Bob's Burgers. It is directed by the series creator Loren Bouchard and series director Bernard Derriman, written by Bouchard and Nora Smith, and produced by Janelle Momary-Neely, Bouchard, and Smith. The original voice cast from the series reprises their roles including H. Jon Benjamin, Dan Mintz, Eugene Mirman, Larry Murphy, John Roberts, Kristen Schaal, David Wain, Zach Galifianakis, and Kevin Kline. As the events of the film take place between the 12th and 13th seasons of Bob's Burgers, the plot follows Bob and his family as they struggle to pay their loan after a sinkhole opens in front of their restaurant and affects business, while the kids try to solve the murder of a carnie.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/04/Bob%27s_Burgers_Movie_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Zero Contact',
		year: 2022,
		cast: ['Anthony Hopkins', 'Chris Brochu', 'Aleks Paunovic'],
		genres: ['Thriller'],
		href: 'Zero_Contact',
		extract:
			'Zero Contact is a 2021 American thriller film directed by Rick Dugdale and starring Anthony Hopkins. It was the first feature film to be released via Vuele, a non-fungible token platform.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Zero_Contact.jpg',
		thumbnail_width: 265,
		thumbnail_height: 376
	},
	{
		title: 'A Chiara',
		year: 2022,
		cast: ['Swamy Rotolo', 'Claudio Rotolo', 'Carmela Fumo'],
		genres: ['Drama'],
		href: 'A_Chiara',
		extract:
			"A Chiara is a 2021 Italian-language drama film directed and written by Jonas Carpignano, the third film in his film trilogy set in a Calabrian town, following Mediterranea (2015) and A Ciambra (2017). The film stars Swamy Rotolo, Claudio Rotolo, Grecia Rotolo, and Carmela Fumo and had its world premiere at the Cannes Film Festival on July 9, 2021, in the Directors' Fortnight section, to very positive reviews. Following its festival screening, the film was distributed by MK2 Films and Lucky Red in Italy and Neon in the United States.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/bd/A_Chiara_poster.jpeg',
		thumbnail_width: 265,
		thumbnail_height: 376
	},
	{
		title: 'South Park The Streaming Wars',
		year: 2022,
		cast: [
			'Trey Parker',
			'Matt Stone',
			'April Stewart',
			'Kimberly Brooks',
			'Adrien Beard',
			'Vernon Chatman'
		],
		genres: ['Animated', 'Comedy', 'Erotic'],
		href: 'South_Park_The_Streaming_Wars',
		extract:
			'"South Park The Streaming Wars" is a 2022 American adult animated comedy television special episode written and directed by Trey Parker. It is the third South Park television special produced for Paramount+ and was released on June 1, 2022. It also serves as the 318th overall episode of the television series.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/ad/South_Park_The_Streaming_Wars.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Hollywood Stargirl',
		year: 2022,
		cast: [
			'Elijah Richardson',
			'Grace VanderWaal',
			'Tyrel Jackson Williams',
			'Judy Greer',
			'Judd Hirsch',
			'Uma Thurman'
		],
		genres: ['Drama', 'Teen', 'Romance'],
		href: 'Hollywood_Stargirl',
		extract:
			"Hollywood Stargirl is a 2022 American teen romantic drama film directed by Julia Hart from a screenplay that she co-wrote with Jordan Horowitz. The film is a sequel to the 2020 film Stargirl, which was in turn based on Jerry Spinelli's 2000 novel of the same name; it is not an adaptation of the novel's sequel Love, Stargirl.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/be/Hollywood_Stargirl.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Crimes of the Future',
		year: 2022,
		cast: ['Viggo Mortensen', 'Léa Seydoux', 'Kristen Stewart', 'Scott Speedman'],
		genres: ['Drama', 'Horror', 'Science Fiction'],
		href: 'Crimes_of_the_Future_(2022_film)',
		extract:
			"Crimes of the Future is a 2022 science fiction body horror drama film written and directed by David Cronenberg. The film stars Viggo Mortensen, Léa Seydoux and Kristen Stewart. It follows a performance artist duo who perform surgery for audiences in a future where human evolution has accelerated for much of the population. Although the film shares its title with Cronenberg's 1970 film of the same name, it is not a remake as the story and concept are unrelated, and there is no connection between the two films whatsoever. The film marked Cronenberg's return to the science fiction and horror genres for the first time since Existenz (1999).",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/d/d4/Crimes_of_the_Future_%282022_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Benediction',
		year: 2022,
		cast: [
			'Jack Lowden',
			'Peter Capaldi',
			'Simon Russell Beale',
			'Jeremy Irvine',
			'Kate Phillips',
			'Gemma Jones',
			'Ben Daniels'
		],
		genres: ['Drama', 'Biography', 'Romance'],
		href: 'Benediction_(film)',
		extract:
			'Benediction is a 2021 biographical romantic drama film written and directed by Terence Davies. It stars Jack Lowden and Peter Capaldi as the war poet Siegfried Sassoon, along with Simon Russell Beale, Jeremy Irvine, Calam Lynch, Kate Phillips, Gemma Jones, and Ben Daniels. It was released in United Kingdom on 20 May 2022 by Vertigo Releasing and United States on 3 June 2022 by Roadside Attractions.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Benediction_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Interceptor',
		year: 2022,
		cast: ['Elsa Pataky', 'Luke Bracey'],
		genres: ['Action', 'Drama'],
		href: 'Interceptor_(film)',
		extract:
			'Interceptor is a 2022 action drama film directed by Matthew Reilly from a screenplay that he co-wrote with Stuart Beattie. The film stars Elsa Pataky and Luke Bracey. It is about terrorists who want to launch a nuclear attack on the United States with stolen missiles. When the terrorists attack a remote offshore missile interceptor platform that could stop their missiles, \nan officer (Pataky) defends the facility with courage and resourcefulness.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/31/Interceptor_%28film%29.jpg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'Fire Island',
		year: 2022,
		cast: ['Joel Kim Booster', 'Bowen Yang', 'Conrad Ricamora', 'James Scully', 'Margaret Cho'],
		genres: ['Comedy', 'Romance'],
		href: 'Fire_Island_(film)',
		extract:
			"Fire Island is a 2022 American romantic comedy film directed by Andrew Ahn, and written by and starring Joel Kim Booster. The film co-stars Bowen Yang, Conrad Ricamora, James Scully, and Margaret Cho. Inspired by Jane Austen's Pride and Prejudice, the story follows a group of gay friends who go on vacation to Fire Island, only for things to become complicated by classism and romance.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/05/Fire_Island_Movie_Poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Watcher',
		year: 2022,
		cast: ['Maika Monroe', 'Karl Glusman', 'Burn Gorman'],
		genres: ['Thriller'],
		href: 'Watcher_(film)',
		extract:
			'Watcher is a 2022 psychological thriller film written and directed by Chloe Okuno in her feature film directorial and screenwriting debut, based on an original screenplay by Zack Ford. The film stars Maika Monroe, Karl Glusman, and Burn Gorman.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/52/Watcher_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Dashcam',
		year: 2022,
		cast: ['Annie Hardy'],
		genres: ['Horror'],
		href: 'Dashcam_(horror_film)',
		extract:
			"Dashcam is a 2021 computer screen horror film directed by Rob Savage and written by Gemma Hurley, Savage, and Jed Shepherd. The film stars Annie Hardy, Amer Chadha-Patel, and Angela Enahoro. The entire film is shot from the perspective of either Hardy's hand-held iPhone or the dashcam in her car, as she livestreams her actions for viewers whose comments on the events are also displayed. The film follows Hardy, playing a semi-fictionalized version of herself, as she visits a friend in London amidst the COVID-19 pandemic, and finds herself in a series of nightmarish events after giving a strange woman a ride in her car. The film is produced by Jason Blum through his Blumhouse Productions banner, alongside Douglas Cox, and Savage.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Dashcamrobsavage.jpg',
		thumbnail_width: 200,
		thumbnail_height: 288
	},
	{
		title: 'White Elephant',
		year: 2022,
		cast: ['Michael Rooker', 'Bruce Willis', 'Olga Kurylenko', 'John Malkovich'],
		genres: ['Action'],
		href: 'White_Elephant_(2022_film)',
		extract:
			'White Elephant is an American action film directed by Jesse V. Johnson and written by Johnson and Erik Martinez, based on a story by Johnson. It stars Michael Rooker, Bruce Willis, Olga Kurylenko, and John Malkovich.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/64/White_Elephant_%282022_film%29.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'Hustle',
		year: 2022,
		cast: [
			'Adam Sandler',
			'Queen Latifah',
			'Ben Foster',
			'Juancho Hernangómez',
			'Robert Duvall',
			'Anthony Edwards'
		],
		genres: ['Comedy', 'Drama', 'Sports'],
		href: 'Hustle_(2022_film)',
		extract:
			'Hustle is a 2022 American sports comedy-drama film directed by Jeremiah Zagar from a screenplay by Taylor Materne and Will Fetters and co-produced by and starring Adam Sandler as a down-on-his-luck NBA scout who discovers a raw but talented basketball player in Spain and tries to prepare him for the NBA draft. The film also stars Queen Latifah, Ben Foster, Robert Duvall, Heidi Gardner, and current National Basketball Association player Anthony Edwards. LeBron James produced through his SpringHill Company banner.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/50/Hustle_%282022_film%29.jpg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'Jurassic World Dominion',
		year: 2022,
		cast: [
			'Chris Pratt',
			'Bryce Dallas Howard',
			'Laura Dern',
			'Jeff Goldblum',
			'Sam Neill',
			'DeWanda Wise',
			'Mamoudou Athie',
			'Isabella Sermon',
			'Campbell Scott',
			'BD Wong',
			'Omar Sy'
		],
		genres: ['Action', 'Science Fiction'],
		href: 'Jurassic_World_Dominion',
		extract:
			'Jurassic World Dominion is a 2022 American science fiction action film directed by Colin Trevorrow, who co-wrote the screenplay with Emily Carmichael from a story by Derek Connolly and Trevorrow. The sequel to Jurassic World: Fallen Kingdom (2018), it is the third and final installment in the Jurassic World trilogy and the sixth installment overall in the Jurassic Park film series, concluding the storyline that started with Jurassic Park (1993). The film has an ensemble cast including Chris Pratt, Bryce Dallas Howard, Laura Dern, Jeff Goldblum, Sam Neill, DeWanda Wise, Mamoudou Athie, BD Wong, and Omar Sy. Dern, Goldblum, and Neill reprise their roles from the Jurassic Park trilogy, appearing together for the first time since the original film.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/ce/JurassicWorldDominion_Poster.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 398
	},
	{
		title: 'Jennifer Lopez: Halftime',
		year: 2022,
		cast: ['Jennifer Lopez'],
		genres: ['Documentary'],
		href: 'Jennifer_Lopez:_Halftime',
		extract:
			'Jennifer Lopez: Halftime is a 2022 American Netflix original documentary film directed by Amanda Micheli. Its story follows the career of Jennifer Lopez, with a heavy focus on her performance at the Super Bowl LIV halftime show and her film Hustlers (2019). The film premiered at the opening night of the 2022 Tribeca Film Festival, and was released on Netflix on June 14, 2022.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Halftime_Poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Father of the Bride',
		year: 2022,
		cast: [
			'Andy García',
			'Gloria Estefan',
			'Adria Arjona',
			'Isabela Merced',
			'Diego Boneta',
			'Chloe Fineman'
		],
		genres: ['Comedy', 'Romance'],
		href: 'Father_of_the_Bride_(2022_film)',
		extract:
			'Father of the Bride is a 2022 American romantic comedy film directed by Gaz Alazraki and written by Matt Lopez, based on the 1949 novel of the same name by Edward Streeter. The film stars Andy García, Gloria Estefan, Adria Arjona, Isabela Merced, Diego Boneta, and Chloe Fineman. It is the third filmed version of the story, after the original 1950 film and the 1991 remake. Produced by Plan B Entertainment, it was released on June 16, 2022, by Warner Bros. Pictures and HBO Max.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/5/58/The_Father_of_the_Bride_%282022_film%29_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'Lightyear',
		year: 2022,
		cast: [
			'Chris Evans',
			'Keke Palmer',
			'Peter Sohn',
			'Taika Waititi',
			'Dale Soules',
			'James Brolin',
			'Uzo Aduba',
			'Mary McDonald-Lewis',
			'Isiah Whitlock Jr.'
		],
		genres: ['Action', 'Adventure', 'Animated', 'Science Fiction'],
		href: 'Lightyear_(film)',
		extract:
			"Lightyear is a 2022 American computer-animated science-fiction action-adventure film produced by Walt Disney Pictures and Pixar Animation Studios, and distributed by Walt Disney Studios Motion Pictures. The film is a spin-off of the Toy Story film series, but does not take place in the same fictional universe as them; rather, it is presented as a film that some of the characters in the main Toy Story films have seen. Lightyear centers on the character Buzz Lightyear, who in this film is human and not a toy. The film was directed by Angus MacLane and produced by Galyn Susman, from a screenplay and story written by MacLane and Jason Headley, both of whom co-wrote the latter with Matthew Aldrich. It stars Chris Evans as the voice of the titular character, with Keke Palmer, Peter Sohn, Taika Waititi, Dale Soules, James Brolin, and Uzo Aduba in supporting roles. The film follows Buzz Lightyear (Evans) operating as a space ranger who, after being marooned on a hostile planet with his commander and crew, tries to find a way back home while encountering a threat to the universe's safety.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Lightyear_%28film%29_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'Spiderhead',
		year: 2022,
		cast: ['Chris Hemsworth', 'Miles Teller', 'Jurnee Smollett'],
		genres: ['Science Fiction', 'Thriller'],
		href: 'Spiderhead',
		extract:
			'Spiderhead is a 2022 American science fiction psychological thriller film directed by Joseph Kosinski, with a screenplay by Rhett Reese and Paul Wernick, based on the dystopian short story "Escape from Spiderhead" by George Saunders and first published in The New Yorker. The film stars Chris Hemsworth, Miles Teller, and Jurnee Smollett. The story follows inmates in a luxurious prison who participate in experiments involving mind-altering drugs. Principal photography took place in Australia in 2020.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/58/Spiderhead.jpg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'Jerry & Marge Go Large',
		year: 2022,
		cast: [
			'Bryan Cranston',
			'Annette Bening',
			'Rainn Wilson',
			'Larry Wilmore',
			'Michael McKean',
			'Anna Camp'
		],
		genres: ['Comedy', 'Drama'],
		href: 'Jerry_%26_Marge_Go_Large',
		extract:
			"Jerry & Marge Go Large is a 2022 American comedy-drama film directed by David Frankel and written by Brad Copeland. Based on Jason Fagone's 2018 HuffPost article of the same name, the film stars Bryan Cranston and Annette Bening.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/59/Jerry_%26_Marge_Go_Large.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Cha Cha Real Smooth',
		year: 2022,
		cast: [
			'Cooper Raiff',
			'Dakota Johnson',
			'Raúl Castillo',
			'Odeya Rush',
			'Evan Assante',
			'Vanessa Burghardt',
			'Brad Garrett',
			'Leslie Mann'
		],
		genres: ['Comedy', 'Drama'],
		href: 'Cha_Cha_Real_Smooth',
		extract:
			'Cha Cha Real Smooth is a 2022 American comedy-drama film written, produced, and directed by Cooper Raiff. The plot centers on a 22-year-old college graduate (Raiff) who starts making money as a party starter while he also strikes up a relationship with a 32-year-old mother. The cast also includes Raúl Castillo, Odeya Rush, Evan Assante, Vanessa Burghardt, Brad Garrett, and Leslie Mann.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/6/66/Cha_Cha_Real_Smooth_%28poster%29.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Mid-Century',
		year: 2022,
		cast: ['Shane West', 'Sarah Hay', 'Bruce Dern', 'Stephen Lang'],
		genres: ['Horror', 'Thriller'],
		href: 'Mid-Century',
		extract:
			"Mid-Century is a 2022 American horror thriller film directed by Sonja O'Hara and written and produced by Mike Stern. The film stars Bruce Dern, Stephen Lang and Shane West, with the latter two also serving as executive producers.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/90/Mid-Century_2022.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Abandoned',
		year: 2022,
		cast: ['Emma Roberts', 'John Gallagher Jr.', 'Michael Shannon'],
		genres: ['Horror'],
		href: 'Abandoned_(2022_film)',
		extract:
			"Abandoned is a 2022 horror film directed by Spencer Squire and written by Erik Patterson and Jessica Scott. The film stars Emma Roberts, John Gallagher Jr. and Michael Shannon. The film was Squire's feature film directorial debut, with Roberts serving as one of the producers.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/0e/Abandoned_%282022%29.jpeg',
		thumbnail_width: 257,
		thumbnail_height: 387
	},
	{
		title: 'Beavis and Butt-Head Do the Universe',
		year: 2022,
		cast: [
			'Mike Judge',
			'Gary Cole',
			'Chris Diamantopoulos',
			'Nat Faxon',
			'David Herman',
			'Brian Huskey',
			'Chi McBride',
			'Tig Notaro',
			'Stephen Root',
			'Andrea Savage',
			'Martin Starr',
			'Jimmy O. Yang'
		],
		genres: ['Animated', 'Comedy', 'Science Fiction', 'Erotic'],
		href: 'Beavis_and_Butt-Head_Do_the_Universe',
		extract:
			'Beavis and Butt-Head Do the Universe is a 2022 American adult animated science fiction comedy film directed by John Rice and Albert Calleros and written by Mike Judge, Lew Morton, Guy Maxtone-Graham and Ian Maxtone-Graham. It is the second film based on the animated television series Beavis and Butt-Head after Beavis and Butt-Head Do America (1996). The film follows teenage delinquents Beavis and Butt-Head, who are transported 24 years from 1998 to 2022, encounter parallel-universe versions of themselves and are hunted by the US government.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/6/66/Beavis_and_Butt-head_2022_film_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Elvis',
		year: 2022,
		cast: [
			'Austin Butler',
			'Tom Hanks',
			'Olivia DeJonge',
			'Helen Thomson',
			'Richard Roxburgh',
			'Kelvin Harrison Jr.',
			'David Wenham',
			'Kodi Smit-McPhee',
			'Luke Bracey'
		],
		genres: ['Drama', 'Biography'],
		href: 'Elvis_(2022_film)',
		extract:
			'Elvis is a 2022 biographical drama film directed by Baz Luhrmann from a screenplay he co-wrote with Sam Bromell, Craig Pearce, and Jeremy Doner. It chronicles the life of the American rock and roll singer and actor Elvis Presley under the management of Colonel Tom Parker. The film stars Austin Butler and Tom Hanks as Presley and Parker, respectively, with Olivia DeJonge, Helen Thomson, Richard Roxburgh, David Wenham, Kodi Smit-McPhee, and Luke Bracey in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/79/Elvis_2022_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Black Phone',
		year: 2022,
		cast: ['Ethan Hawke', 'Mason Thames', 'Madeleine McGraw', 'Jeremy Davies', 'James Ransone'],
		genres: ['Horror', 'Supernatural'],
		href: 'The_Black_Phone',
		extract:
			'The Black Phone is a 2021 American supernatural horror film directed by Scott Derrickson and written by Derrickson and C. Robert Cargill, who both produced with Jason Blum. It is an adaptation of the 2004 short story of the same name by Joe Hill. The film stars Mason Thames, Madeleine McGraw, Jeremy Davies, James Ransone, and Ethan Hawke. In the film, an abducted teenager (Thames) uses a mysterious telephone to communicate with the previous victims of his deranged captor (Hawke).',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7f/The_Black_Phone.jpg',
		thumbnail_width: 251,
		thumbnail_height: 398
	},
	{
		title: 'The Man from Toronto',
		year: 2022,
		cast: [
			'Kevin Hart',
			'Woody Harrelson',
			'Kaley Cuoco',
			'Jasmine Mathews',
			'Lela Loren',
			'Pierson Fodé',
			'Jencarlos Canela',
			'Ellen Barkin'
		],
		genres: ['Action', 'Comedy'],
		href: 'The_Man_from_Toronto_(2022_film)',
		extract:
			'The Man from Toronto is a 2022 American action comedy film directed by Patrick Hughes. The film stars Kevin Hart and Woody Harrelson, Kaley Cuoco, Jasmine Mathews, Lela Loren, Pierson Fodé, Jencarlos Canela, and Ellen Barkin.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/7/75/The_Man_from_Toronto_%282022_film%29.jpg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'The Sea Beast',
		year: 2022,
		cast: [
			'Karl Urban',
			'Zaris-Angel Hator',
			'Jared Harris',
			'Marianne Jean-Baptiste',
			'Jim Carter',
			'Doon Mackichan',
			'Dan Stevens',
			'Kathy Burke'
		],
		genres: ['Adventure', 'Animated'],
		href: 'The_Sea_Beast_(2022_film)',
		extract:
			'The Sea Beast is a 2022 computer-animated adventure film directed by Chris Williams, who co-wrote the screenplay with Nell Benjamin and produced with Jed Schlanger. The film stars the voices of Karl Urban, Zaris-Angel Hator, Jared Harris, and Marianne Jean-Baptiste. It tells the story of a sea monster hunter and a young orphan girl who joins his group of sea monster hunters on their search for the elusive Red Bluster in the 17th century.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/09/The_Sea_Beast_film_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Marcel the Shell with Shoes On',
		year: 2022,
		cast: [
			'Jenny Slate',
			'Rosa Salazar',
			'Thomas Mann',
			'Dean Fleischer-Camp',
			'Lesley Stahl',
			'Isabella Rossellini'
		],
		genres: ['Action', 'Independent', 'Animated', 'Comedy', 'Drama', 'Satire'],
		href: 'Marcel_the_Shell_with_Shoes_On_(2021_film)',
		extract:
			'Marcel the Shell with Shoes On is a 2021 American independent live-action/stop-motion animated mockumentary comedy-drama film directed by Dean Fleischer Camp, with a screenplay by Fleischer Camp, Jenny Slate and Nick Paley from a story by Fleischer Camp, Slate, Paley and Elisabeth Holm. It is based on and serves both as a direct stand-alone sequel and prequel to the series of shorts of the same name written by Slate and Fleischer Camp. Slate reprises her voice role as Marcel, an anthropomorphic shell living with his grandmother Connie. Fleischer Camp, Rosa Salazar, Thomas Mann, Lesley Stahl, and Isabella Rossellini also star. The film follows Marcel, a shell who lives with his grandmother, Connie, after posting a short film online bringing Marcel millions of passionate fans and a new hope of reuniting with his long-lost family.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/d/d4/Marcel_the_Shell_with_Shoes_On_%282021_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Rise',
		year: 2022,
		cast: [
			'Uche Agada',
			'Ral Agada',
			'Jaden Osimuwa',
			'Elijah Shomanke',
			'Yetide Badaki',
			'Dayo Okeniyi'
		],
		genres: ['Drama', 'Sports', 'Biography'],
		href: 'Rise_(2022_film)',
		extract:
			'Rise is a 2022 biographical sports drama film directed by Akin Omotoso, from a script written by Arash Amel. Based on the true story of three young Nigerian-Greek brothers, Giannis, Thanasis and Kostas Antetokounmpo, who emigrate to the United States and rise to fame and success within the National Basketball Association. The film stars newcomers Uche Agada, Ral Agada, and Jaden Osimuwa in the three primary roles; with Elijah Shomanke, Yetide Badaki, and Dayo Okeniyi in supporting family roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Rise_%282022_film%29.jpg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'Press Play',
		year: 2022,
		cast: [
			'Clara Rugaard',
			'Lewis Pullman',
			'Lyrica Okano',
			'Christina Chang',
			'Matt Walsh',
			'Danny Glover'
		],
		genres: ['Drama', 'Science Fiction', 'Romance'],
		href: 'Press_Play_(film)',
		extract:
			'Press Play is a 2022 science fiction romantic drama film written and directed by Greg Björkman in his directorial debut, from a story by Josh Boone. It stars Clara Rugaard, Lewis Pullman, Lyrica Okano, Christina Chang, Matt Walsh, and Danny Glover. It was shot on Oahu. The film was released in the United States on June 24, 2022, by The Avenue. It received mixed reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/af/PressPlay-Poster.jpeg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Beauty',
		year: 2022,
		cast: [
			'Gracie Marie Bradley',
			'Niecy Nash',
			'Aleyse Shannon',
			'Giancarlo Esposito',
			'Micheal Ward',
			'Sharon Stone'
		],
		genres: ['Drama'],
		href: 'Beauty_(2022_film)',
		extract:
			'Beauty is a 2022 American drama film directed by Andrew Dosunmu from a screenplay by Lena Waithe. It premiered at the 2022 Tribeca Film Festival and was released on Netflix on June 29, 2022. It stars Gracie Marie Bradley, Niecy Nash, Giancarlo Esposito, Sharon Stone, Andre Ozim, Michael Ward, and Kyle Bary.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Beauty_%282022_film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Minions: The Rise of Gru',
		year: 2022,
		cast: [
			'Steve Carell',
			'Taraji P. Henson',
			'Michelle Yeoh',
			'RZA',
			'Jean-Claude Van Damme',
			'Lucy Lawless',
			'Dolph Lundgren',
			'Danny Trejo',
			'Russell Brand',
			'Julie Andrews',
			'Alan Arkin'
		],
		genres: ['Animated', 'Comedy'],
		href: 'Minions:_The_Rise_of_Gru',
		extract:
			'Minions: The Rise of Gru is a 2022 American computer-animated comedy film produced by Illumination and distributed by Universal Pictures. It is the sequel to the spin-off prequel Minions (2015) and the fifth entry overall in the Despicable Me franchise. The film was directed by Kyle Balda, co-directed by Brad Ableson and Jonathan del Val, and produced by Chris Meledandri, Janet Healy and Chris Renaud, from a screenplay written by Matthew Fogel, and a story by Fogel and Brian Lynch. The film features Steve Carell reprising his role as Gru and Pierre Coffin as the Minions, with Taraji P. Henson, Michelle Yeoh, Russell Brand, Julie Andrews, and Alan Arkin in supporting roles. In the film, an eleven-year-old Gru plans to become a supervillain with the help of his Minions, which leads to a showdown with a malevolent team, the Vicious 6.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/45/Minions_The_Rise_of_Gru_poster.jpg',
		thumbnail_width: 251,
		thumbnail_height: 398
	},
	{
		title: 'The Forgiven',
		year: 2022,
		cast: [
			'Ralph Fiennes',
			'Jessica Chastain',
			'Matt Smith',
			'Ismael Kanater',
			'Caleb Landry Jones',
			'Abbey Lee',
			'Mourad Zaoui',
			'Marie-Josée Croze',
			'Alex Jennings',
			'Saïd Taghmaoui',
			'Christopher Abbott'
		],
		genres: ['Drama'],
		href: 'The_Forgiven_(2021_film)',
		extract:
			'The Forgiven is a 2021 drama film written and directed by John Michael McDonagh and based on the 2012 novel of the same name by Lawrence Osborne. The film stars Ralph Fiennes, Jessica Chastain, Matt Smith, Ismael Kanater, Caleb Landry Jones, Abbey Lee, Mourad Zaoui, Marie-Josée Croze, Alex Jennings, Saïd Taghmaoui, and Christopher Abbott. Elizabeth Eves and McDonagh produced the film under their House of Un-American Activities label.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7b/The_Forgiven_%282021%29.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "Mr. Malcolm's List",
		year: 2022,
		cast: [
			'Freida Pinto',
			'Sope Dirisu',
			'Oliver Jackson-Cohen',
			'Ashley Park',
			'Zawe Ashton',
			'Theo James'
		],
		genres: ['Drama', 'Historical'],
		href: 'Mr._Malcolm%27s_List',
		extract:
			"Mr. Malcolm's List is a 2022 period drama directed by Emma Holly Jones and written by Suzanne Allain, based on her novel of the same name. It stars Freida Pinto, Sope Dirisu, Oliver Jackson-Cohen, Ashley Park, Zawe Ashton, and Theo James.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3f/Mr._Malcolm%27s_List.jpg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'The Princess',
		year: 2022,
		cast: ['Joey King', 'Dominic Cooper', 'Olga Kurylenko', 'Veronica Ngo'],
		genres: ['Action', 'Comedy', 'Thriller', 'Historical'],
		href: 'The_Princess_(2022_action_film)',
		extract:
			'The Princess is a 2022 American period action comedy thriller film directed by Le-Van Kiet and starring Joey King in the title role with Dominic Cooper, Olga Kurylenko, and Veronica Ngo. The film focuses on a strong-willed princess who fights to protect her family and save the kingdom when her suitor, a cruel sociopath she refuses to marry, intends on taking over the kingdom.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f4/The_Princess_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Hot Seat',
		year: 2022,
		cast: ['Kevin Dillon', 'Mel Gibson', 'Shannen Doherty'],
		genres: ['Action', 'Thriller'],
		href: 'Hot_Seat_(film)',
		extract:
			'Hot Seat is a 2022 American action-thriller film directed and produced by James Cullen Bressack. It stars Kevin Dillon and Mel Gibson.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/43/Hot_Seat_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Hello, Goodbye, and Everything in Between',
		year: 2022,
		cast: [
			'Talia Ryder',
			'Jordan Fisher',
			'Ayo Edebiri',
			'Nico Hiraga',
			'Jennifer Robertson',
			'Patrick Sabongui'
		],
		genres: ['Drama', 'Romance'],
		href: 'Hello,_Goodbye,_and_Everything_in_Between',
		extract:
			'Hello, Goodbye, and Everything in Between is a 2022 American romantic drama film directed by Michael Lewen, in his directorial debut, from a screenplay by Amy Reed and Ben York Jones, based on the novel of the same name by Jennifer E. Smith. It stars Jordan Fisher, Talia Ryder, Ayo Edebiri, and Nico Hiraga. The film was released on July 6, 2022, by Netflix.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/2/2e/Hello%2C_Goodbye%2C_and_Everything_in_Between_film_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'Thor: Love and Thunder',
		year: 2022,
		cast: [
			'Chris Hemsworth',
			'Christian Bale',
			'Tessa Thompson',
			'Jaimie Alexander',
			'Taika Waititi',
			'Russell Crowe',
			'Natalie Portman'
		],
		genres: ['Superhero'],
		href: 'Thor:_Love_and_Thunder',
		extract:
			'Thor: Love and Thunder is a 2022 American superhero film based on Marvel Comics featuring the character Thor. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Thor: Ragnarok (2017) and the 29th film in the Marvel Cinematic Universe (MCU). The film was directed by Taika Waititi, who co-wrote the screenplay with Jennifer Kaytin Robinson, and stars Chris Hemsworth as Thor alongside Christian Bale, Tessa Thompson, Jaimie Alexander, Waititi, Russell Crowe, and Natalie Portman. In the film, Thor attempts to find inner peace, but must return to action and recruit Valkyrie (Thompson), Korg (Waititi), and Jane Foster (Portman)—who is now the Mighty Thor—to stop Gorr the God Butcher (Bale) from eliminating all gods.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/88/Thor_Love_and_Thunder_poster.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'South Park The Streaming Wars Part 2',
		year: 2022,
		cast: [
			'Trey Parker',
			'Matt Stone',
			'April Stewart',
			'Kimberly Brooks',
			'Adrien Beard',
			'Neyla Cantu',
			'Betty Boogie'
		],
		genres: ['Animated', 'Comedy', 'Erotic'],
		href: 'South_Park_The_Streaming_Wars_Part_2',
		extract:
			'"South Park The Streaming Wars Part 2" is a 2022 American adult animated comedy television special episode written and directed by Trey Parker. It is the fourth South Park television special and 319th overall episode of the television series, and was released on Paramount+ on July 13, 2022. It concludes the storyline that began in its predecessor, "South Park The Streaming Wars".',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/2/25/South_Park_The_Streaming_Wars_Part_2_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Gray Man',
		year: 2022,
		cast: [
			'Ryan Gosling',
			'Chris Evans',
			'Ana de Armas',
			'Jessica Henwick',
			'Regé-Jean Page',
			'Wagner Moura',
			'Julia Butters',
			'Dhanush',
			'Alfre Woodard',
			'Billy Bob Thornton'
		],
		genres: ['Action', 'Thriller'],
		href: 'The_Gray_Man_(2022_film)',
		extract:
			'The Gray Man is a 2022 American action thriller film directed by Anthony and Joe Russo, from a screenplay the latter co-wrote with Christopher Markus and Stephen McFeely, based on the 2009 novel of the same name by Mark Greaney. The film stars Ryan Gosling, Chris Evans, Ana de Armas, Jessica Henwick, Regé-Jean Page, Wagner Moura, Julia Butters, Dhanush, Alfre Woodard, and Billy Bob Thornton. Produced by the Russo brothers\' company, AGBO, it is the first film in a franchise based upon Greaney\'s Gray Man novels. The plot centers on CIA agent "Sierra Six", who is on the run from sociopathic ex-CIA agent and mercenary Lloyd Hansen upon discovering corrupt secrets about his superior.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/59/The_Gray_Man_poster.png',
		thumbnail_width: 240,
		thumbnail_height: 356
	},
	{
		title: 'Where the Crawdads Sing',
		year: 2022,
		cast: [
			'Daisy Edgar-Jones',
			'Taylor John Smith',
			'Harris Dickinson',
			'Michael Hyatt',
			'Sterling Macer Jr.',
			'Jojo Regina',
			'Garret Dillahunt',
			"Ahna O'Reilly",
			'David Strathairn'
		],
		genres: ['Drama', 'Mystery'],
		href: 'Where_the_Crawdads_Sing_(film)',
		extract:
			"Where the Crawdads Sing is a 2022 American mystery drama film based on the 2018 novel of the same name by Delia Owens. It was directed by Olivia Newman from a screenplay by Lucy Alibar, and was produced by Reese Witherspoon and Lauren Neustadter. Daisy Edgar-Jones leads the cast featuring Taylor John Smith, Harris Dickinson, Michael Hyatt, Sterling Macer Jr., Jojo Regina, Garret Dillahunt, Ahna O'Reilly, and David Strathairn. The story follows an abandoned yet defiant girl, Kya, who raises herself to adulthood in a North Carolina marshland, becoming a naturalist in the process. When the town's hotshot is found dead, she is the prime suspect and is tried for murder.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/2/23/Where_the_Crawdads_Sing_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Paws of Fury: The Legend of Hank',
		year: 2022,
		cast: [
			'Michael Cera',
			'Ricky Gervais',
			'Mel Brooks',
			'George Takei',
			'Aasif Mandvi',
			'Gabriel Iglesias',
			'Djimon Hounsou',
			'Michelle Yeoh',
			'Samuel L. Jackson'
		],
		genres: ['Animated', 'Comedy', 'Martial Arts'],
		href: 'Paws_of_Fury:_The_Legend_of_Hank',
		extract:
			'Paws of Fury: The Legend of Hank is a 2022 computer-animated martial arts comedy film directed by Rob Minkoff, Mark Koetsier and Chris Bailey. A loose remake of the 1974 live-action film Blazing Saddles, it features the voices of Michael Cera, Ricky Gervais, Mel Brooks, George Takei, Aasif Mandvi, Gabriel Iglesias, Djimon Hounsou, Michelle Yeoh and Samuel L. Jackson. The film takes place in a world of anthropomorphic animals, in which a dog named Hank learns to become a samurai to save a cat village from a conniving landlord.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/51/Paws_of_Fury_poster.jpg',
		thumbnail_width: 261,
		thumbnail_height: 381
	},
	{
		title: 'Persuasion',
		year: 2022,
		cast: [
			'Dakota Johnson',
			'Cosmo Jarvis',
			'Nikki Amuka-Bird',
			'Mia McKenna-Bruce',
			'Richard E. Grant',
			'Henry Golding'
		],
		genres: ['Drama', 'Romance'],
		href: 'Persuasion_(2022_film)',
		extract:
			'Persuasion is a 2022 American romantic drama film directed by Carrie Cracknell from a screenplay by Ron Bass and Alice Victoria Winslow, based on the novel of the same name by Jane Austen. The film stars Dakota Johnson, Cosmo Jarvis, Nikki Amuka-Bird, Mia McKenna-Bruce, Richard E. Grant, and Henry Golding.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Persuasion_%282022_film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Gone in the Night',
		year: 2022,
		cast: ['Winona Ryder', 'Dermot Mulroney', 'John Gallagher Jr.', 'Owen Teague', 'Brianne Tju'],
		genres: ['Thriller'],
		href: 'Gone_in_the_Night_(2022_film)',
		extract:
			'Gone in the Night is an 2022 American thriller film, directed by Eli Horowitz, in his directorial debut from a screenplay by Horowitz and Matthew Derby. It stars Winona Ryder, Dermot Mulroney, John Gallagher Jr., Owen Teague and Brianne Tju.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/8/8d/Gone_in_the_Night_%282022_film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: '1Up',
		year: 2022,
		cast: ['Paris Berelc', 'Taylor Zakhar Perez', 'Hari Nef', 'Kevin Farley', 'Ruby Rose'],
		genres: ['Comedy'],
		href: '1Up_(film)',
		extract:
			'1Up is a 2022 American comedy film directed by Kyle Newman and written by Julia Yorks. It stars Paris Berelc, Taylor Zakhar Perez, Hari Nef, and Ruby Rose. It was released on July 15, 2022, by Amazon Studios.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/13/1Up_%28film%29.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Wrong Place',
		year: 2022,
		cast: ['Ashley Greene', 'Bruce Willis'],
		genres: ['Action'],
		href: 'Wrong_Place',
		extract:
			'Wrong Place is a 2022 American action film directed by Mike Burns, from a script from Bill Lawrence, and produced by Randall Emmett and George Furla. It stars Ashley Greene and Bruce Willis.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/25/Wrong_Place.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: "Don't Make Me Go",
		year: 2022,
		cast: ['John Cho', 'Mia Isaac'],
		genres: [],
		href: 'Don%27t_Make_Me_Go_(film)',
		extract:
			"Don't Make Me Go is a 2022 American road trip film directed by Hannah Marks, written by Vera Herbert, and starring John Cho and Mia Isaac. It premiered at the Tribeca Film Festival on June 13, 2022, and was released on Amazon Prime Video on July 15, 2022.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Don%27t_Make_Me_Go.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: "He's Watching",
		year: 2022,
		cast: ['Iris Serena Estes', 'Lucas Steel Estes'],
		genres: ['Found Footage', 'Horror'],
		href: 'He%27s_Watching',
		extract:
			"He's Watching, is a 2022 American found footage horror film written and directed by Jacob Aaron Estes, starring Iris Serena Estes and Lucas Steel Estes.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5f/He%27s_Watching.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Nope',
		year: 2022,
		cast: [
			'Daniel Kaluuya',
			'Keke Palmer',
			'Steven Yeun',
			'Michael Wincott',
			'Brandon Perea',
			'Keith David'
		],
		genres: ['Horror', 'Science Fiction', 'Western'],
		href: 'Nope_(film)',
		extract:
			"Nope is a 2022 American neo-Western science fiction horror film written, directed, and produced by Jordan Peele, under his and Ian Cooper's Monkeypaw Productions banner. It stars Daniel Kaluuya and Keke Palmer as horse-wrangling siblings attempting to capture evidence of an unidentified flying object. Appearing in supporting roles are Steven Yeun, Michael Wincott, Brandon Perea, and Keith David.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e6/Nope_%28film%29_poster.jpg',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: "Anything's Possible",
		year: 2022,
		cast: ['Eva Reign', 'Abubakr Ali', 'Renée Elise Goldsberry'],
		genres: ['Comedy', 'Romance'],
		href: 'Anything%27s_Possible_(film)',
		extract:
			"Anything's Possible is a 2022 American coming-of-age romantic comedy film directed by Billy Porter and written by Ximena García Lecuona.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/5/58/Anything%27s_Possible_%28film%29.jpg',
		thumbnail_width: 240,
		thumbnail_height: 356
	},
	{
		title: 'Alone Together',
		year: 2022,
		cast: [
			'Katie Holmes',
			'Jim Sturgess',
			'Derek Luke',
			'Becky Ann Baker',
			'Zosia Mamet',
			'Melissa Leo'
		],
		genres: ['Drama', 'Romance'],
		href: 'Alone_Together_(2022_film)',
		extract:
			'Alone Together is a 2022 American romantic drama film written and directed by Katie Holmes. The film stars Holmes, Jim Sturgess, Derek Luke, Melissa Leo, Zosia Mamet, and Becky Ann Baker. It premiered at the Tribeca Film Festival on July 14, 2022 and was released in the United States on July 22, 2022, by Vertical Entertainment.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Alone_Together_2022_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'DC League of Super-Pets',
		year: 2022,
		cast: [
			'Dwayne Johnson',
			'Kevin Hart',
			'Kate McKinnon',
			'John Krasinski',
			'Vanessa Bayer',
			'Natasha Lyonne',
			'Diego Luna',
			'Marc Maron',
			'Keanu Reeves'
		],
		genres: ['Animated', 'Comedy', 'Superhero'],
		href: 'DC_League_of_Super-Pets',
		extract:
			"DC League of Super-Pets is a 2022 American 3D computer-animated superhero comedy film based on the DC Comics superhero team Legion of Super-Pets. Produced by Warner Animation Group, DC Entertainment, and Seven Bucks Productions and distributed by Warner Bros. Pictures, it was directed by Jared Stern and co-directed by Sam J. Levine from a screenplay by Stern and John Whittington. The film stars Dwayne Johnson as the voice of Krypto, alongside a supporting ensemble voice cast that includes Kevin Hart, Kate McKinnon, John Krasinski, Vanessa Bayer, Natasha Lyonne, Diego Luna, Marc Maron, Thomas Middleditch, Ben Schwartz, and Keanu Reeves. The film tells the story of Superman's pet dog Krypto and shelter dog Ace who work with other animals to save the captured superheroes from Lex Luthor and Lulu.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/09/DC_League_of_Super-Pets.jpg',
		thumbnail_width: 256,
		thumbnail_height: 384
	},
	{
		title: 'Thirteen Lives',
		year: 2022,
		cast: ['Viggo Mortensen', 'Colin Farrell', 'Joel Edgerton', 'Tom Bateman'],
		genres: ['War', 'Biography'],
		href: 'Thirteen_Lives',
		extract:
			'Thirteen Lives is a 2022 biographical survival film based on the Tham Luang cave rescue directed and produced by Ron Howard, from a screenplay written by William Nicholson. The film stars Viggo Mortensen, Colin Farrell, Joel Edgerton, and Tom Bateman.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Thirteen_Lives.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Vengeance',
		year: 2022,
		cast: ['B. J. Novak', 'Boyd Holbrook', 'Dove Cameron', 'Issa Rae', 'Ashton Kutcher'],
		genres: ['Comedy', 'Mystery'],
		href: 'Vengeance_(2022_film)',
		extract:
			'Vengeance is a 2022 American black comedy mystery film written and directed by B. J. Novak, in his directorial debut. The film stars Novak, Boyd Holbrook, Dove Cameron, Issa Rae, and Ashton Kutcher. Jason Blum is a producer under his Blumhouse Productions banner, and Greg Gilreath and Adam Hendricks are producers under their Divide/Conquer banner.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/02/Vengeance_%282022_film%29.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'Sharp Stick',
		year: 2022,
		cast: [
			'Kristine Froseth',
			'Jon Bernthal',
			'Luka Sabbat',
			'Scott Speedman',
			'Lena Dunham',
			'Ebon Moss-Bachrach',
			'Taylour Paige',
			'Jennifer Jason Leigh'
		],
		genres: ['Comedy'],
		href: 'Sharp_Stick',
		extract:
			'Sharp Stick is a 2022 American comedy film written, directed, and produced by Lena Dunham. It stars Kristine Froseth, Jon Bernthal, Luka Sabbat, Scott Speedman, Dunham, Ebon Moss-Bachrach, Taylour Paige, and Jennifer Jason Leigh. The film premiered at the Sundance Film Festival on January 22, 2022, and was released theatrically in the United States on July 29, 2022, by Utopia. It received mixed reviews from critics. It was released on VOD on August 16, 2022.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Sharp_Stick.jpg',
		thumbnail_width: 240,
		thumbnail_height: 364
	},
	{
		title: 'Not Okay',
		year: 2022,
		cast: [
			'Zoey Deutch',
			'Mia Isaac',
			'Nadia Alexander',
			'Embeth Davidtz',
			'Karan Soni',
			"Dylan O'Brien"
		],
		genres: ['Comedy', 'Drama'],
		href: 'Not_Okay',
		extract:
			"Not Okay is a 2022 American satirical black comedy-drama film written and directed by Quinn Shephard. It stars Zoey Deutch as a young woman who desperately wants to be famous and beloved on the Internet, succeeding when she pretends to be a survivor of a bombing. It also stars Mia Isaac, Nadia Alexander, Embeth Davidtz, Karan Soni, and Dylan O'Brien.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/24/Not_Okay_Poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Paradise Highway',
		year: 2022,
		cast: ['Juliette Binoche', 'Frank Grillo', 'Hala Finley', 'Cameron Monaghan', 'Morgan Freeman'],
		genres: ['Thriller'],
		href: 'Paradise_Highway',
		extract:
			'Paradise Highway is a 2022 thriller film written and directed by Anna Gutto and starring Juliette Binoche, Frank Grillo, and Morgan Freeman. An international co-production between the United States, Germany, and Switzerland, the film was released in the United States on July 29, 2022, by Lionsgate.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Paradise_Highway_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Resurrection',
		year: 2022,
		cast: ['Rebecca Hall', 'Grace Kaufman', 'Michael Esper', 'Tim Roth'],
		genres: ['Thriller'],
		href: 'Resurrection_(2022_film)',
		extract:
			'Resurrection is a 2022 American psychological thriller film written and directed by Andrew Semans. It stars Rebecca Hall, Grace Kaufman, Michael Esper, and Tim Roth. The plot follows Margaret (Hall) as she tries to maintain control of her life when an abusive ex-boyfriend (Roth) re-appears in her vicinity. The film was shot in Albany, NY and Williamsburg, Brooklyn.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/80/Resurrection_%282022_film%29.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'A Love Song',
		year: 2022,
		cast: ['Dale Dickey', 'Wes Studi'],
		genres: ['Drama'],
		href: 'A_Love_Song_(film)',
		extract:
			'A Love Song is a 2022 American drama film written, directed, produced, and co-edited by Max Walker-Silverman in his feature directorial debut. It stars Dale Dickey and Wes Studi as two childhood friends who spend a night together by a lake in the mountains. The film premiered at the Sundance Film Festival on January 20, 2022, and was released in the United States on July 29, 2022, by Bleecker Street and Stage 6 Films. It received generally positive reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c4/A_Love_Song_%28film%29.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Honor Society',
		year: 2022,
		cast: ['Angourie Rice', 'Gaten Matarazzo', 'Christopher Mintz-Plasse'],
		genres: ['Comedy'],
		href: 'Honor_Society_(film)',
		extract:
			'Honor Society is a 2022 American coming-of-age comedy film starring Angourie Rice and Gaten Matarazzo. It is directed by Oran Zegman based on a screenplay written by David A. Goodman.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Honor_Society_2022_film_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Allegoria',
		year: 2022,
		cast: ['John Ennis', 'Bryce Johnson', 'Edward Hong', 'Adam Busch', 'Adam Marcinowski'],
		genres: ['Horror'],
		href: 'Allegoria',
		extract:
			'Allegoria is a 2022 American horror anthology film directed by Spider One, starring John Ennis, Bryce Johnson, Edward Hong, Adam Busch and Adam Marcinowski. It is the directorial debut of Spider One.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Allegoria.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Bullet Train',
		year: 2022,
		cast: [
			'Brad Pitt',
			'Joey King',
			'Aaron Taylor-Johnson',
			'Brian Tyree Henry',
			'Andrew Koji',
			'Hiroyuki Sanada',
			'Michael Shannon',
			'Benito A Martínez Ocasio',
			'Sandra Bullock'
		],
		genres: ['Action', 'Comedy'],
		href: 'Bullet_Train_(film)',
		extract:
			"Bullet Train is a 2022 American action comedy film starring Brad Pitt as an assassin who must battle fellow killers while riding a bullet train. The film was directed by David Leitch from a screenplay by Zak Olkewicz, and produced by Antoine Fuqua, who initially conceived the film. It is based on the 2010 novel Maria Beetle, written by Kōtarō Isaka and translated by Sam Malissa, the second novel in Isaka's Hitman trilogy, of which the first novel was previously adapted as the 2015 Japanese film Grasshopper. The film also features an ensemble supporting cast including Joey King, Aaron Taylor-Johnson, Brian Tyree Henry, Andrew Koji, Hiroyuki Sanada, Michael Shannon, Benito A. Martínez Ocasio, and Sandra Bullock.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/13/Bullet_Train_%28poster%29.jpeg',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'Luck',
		year: 2022,
		cast: [
			'Eva Noblezada',
			'Simon Pegg',
			'Jane Fonda',
			'Whoopi Goldberg',
			'Flula Borg',
			'Lil Rel Howery',
			"Colin O'Donoghue",
			'John Ratzenberger'
		],
		genres: ['Animated', 'Comedy', 'Fantasy'],
		href: 'Luck_(2022_film)',
		extract:
			"Luck is a 2022 computer-animated fantasy comedy film directed by Peggy Holmes and co-directed by Javier Abad, from a screenplay written by Kiel Murray, and a story by Murray and the writing team of Jonathan Aibel and Glenn Berger, based on an original concept created by Rebeca Carrasco, Juan De Dios, and Julián Romero. Produced by Skydance Animation, the film features the voices of Eva Noblezada, Simon Pegg, Jane Fonda, Whoopi Goldberg, Flula Borg, Lil Rel Howery, Colin O'Donoghue, and John Ratzenberger. Set in the Land of Luck, the story follows the unluckiest person, Sam Greenfield (Noblezada), as she must unite with an anthropomorphic cat named Bob (Pegg) to turn her luck around.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Luck_%282022%29_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Prey',
		year: 2022,
		cast: [
			'Amber Midthunder',
			'Dakota Beavers',
			'Michelle Thrush',
			'Stormee Kipp',
			'Julian Black Antelope',
			'Dane DiLiegro'
		],
		genres: ['Action', 'Science Fiction'],
		href: 'Prey_(2022_film)',
		extract:
			'Prey is a 2022 American science fiction action film in the Predator franchise. It is the fifth installment and is a prequel to the first four films, being set in the Northern Great Plains in 1719. The film is directed by Dan Trachtenberg and written by Patrick Aison. It stars Amber Midthunder, Dakota Beavers, Dane DiLiegro, Michelle Thrush, Stormee Kipp, Julian Black Antelope, and Bennett Taylor. The story revolves around a young Comanche woman, Naru, who is striving to prove herself as a hunter. She finds herself having to protect her people from a vicious, humanoid alien that hunts humans for sport, as well as from French fur traders who are destroying the buffalo they rely on for survival.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Prey_2022_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Easter Sunday',
		year: 2022,
		cast: [
			'Jo Koy',
			'Jimmy O. Yang',
			'Tia Carrere',
			'Brandon Wardell',
			'Eva Noblezada',
			'Tiffany Haddish',
			'Lou Diamond Phillips'
		],
		genres: ['Comedy'],
		href: 'Easter_Sunday_(film)',
		extract:
			'Easter Sunday is a 2022 American comedy film starring Jo Koy as a struggling actor, comedian, and single father who attends a gathering of his loud and dysfunctional Filipino American family on Easter Sunday. The film is directed by Jay Chandrasekhar and written by Ken Cheng and Kate Angelo, from a story by Cheng. In addition to Koy, the film stars Eugene Cordero, Tia Carrere, Asif Ali, Lydia Gaston, Jimmy O. Yang, and Lou Diamond Phillips. Universal Pictures theatrically released the film on August 5, 2022. It received mixed reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Easter_Sunday_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 396
	},
	{
		title: 'Rise of the Teenage Mutant Ninja Turtles: The Movie',
		year: 2022,
		cast: [
			'Ben Schwartz',
			'Omar Benson Miller',
			'Brandon Mychal Smith',
			'Josh Brener',
			'Kat Graham',
			'Eric Bauza',
			'Haley Joel Osment'
		],
		genres: ['Animated', 'Superhero', 'War'],
		href: 'Rise_of_the_Teenage_Mutant_Ninja_Turtles:_The_Movie',
		extract:
			'Rise of the Teenage Mutant Ninja Turtles: The Movie is a 2022 American animated superhero film directed by Andy Suriano and Ant Ward, from a screenplay written by Tony Gama-Lobo and Rebecca May, and a story by Suriano and Ward. Produced by Nickelodeon, it serves as a continuation of the animated television series Rise of the Teenage Mutant Ninja Turtles (2018–20). Ben Schwartz, Omar Miller, Brandon Mychal Smith, Josh Brener, Kat Graham, and Eric Bauza reprise their voice roles from the series and are joined by newcomer Haley Joel Osment. In the film, the Turtles are put to the test when a mysterious stranger named Casey Jones arrives from the future to warn them of an impending invasion by the most dangerous alien force in the galaxy, the Krang.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/b/b4/Rise_of_the_Teenage_Mutant_Ninja_Turtles-_The_Movie.jpeg',
		thumbnail_width: 316,
		thumbnail_height: 316
	},
	{
		title: 'Bodies Bodies Bodies',
		year: 2022,
		cast: [
			'Amandla Stenberg',
			'Maria Bakalova',
			"Myha'la Herrold",
			'Chase Sui Wonders',
			'Rachel Sennott',
			'Lee Pace',
			'Pete Davidson'
		],
		genres: ['Comedy', 'Horror'],
		href: 'Bodies_Bodies_Bodies',
		extract:
			"Bodies Bodies Bodies is a 2022 American black comedy horror film directed by Halina Reijn, in her English-language debut, with a screenplay by Sarah DeLappe from a story by Kristen Roupenian. It stars Amandla Stenberg, Maria Bakalova, Myha'la Herrold, Chase Sui Wonders, Rachel Sennott, Lee Pace, and Pete Davidson.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/7/7f/Bodies_Bodies_Bodies_%28poster%29.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'Secret Headquarters',
		year: 2022,
		cast: [
			'Owen Wilson',
			'Walker Scobell',
			'Jesse Williams',
			'Keith L. Williams',
			'Momona Tamada',
			'Charles Melton',
			'Michael Peña'
		],
		genres: ['Comedy', 'Superhero'],
		href: 'Secret_Headquarters',
		extract:
			'Secret Headquarters is a 2022 American superhero comedy film directed by Henry Joost and Ariel Schulman, who co-wrote the movie with Christopher L. Yost and Josh Koenigsberg, based on a story by Yost. Starring Owen Wilson, Walker Scobell, Jesse Williams, Keith L. Williams, Momona Tamada, Charles Melton, and Michael Peña, the plot follows a child (Scobell) and his friends who begins to suspect his father (Wilson) might be a superhero after discovering a secret headquarters in his basement.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f0/Secret_Headquarters_poster.jpg',
		thumbnail_width: 240,
		thumbnail_height: 355
	},
	{
		title: 'Day Shift',
		year: 2022,
		cast: [
			'Jamie Foxx',
			'Dave Franco',
			'Natasha Liu Bordizzo',
			'Meagan Good',
			'Karla Souza',
			'Steve Howey',
			'Scott Adkins',
			'Snoop Dogg'
		],
		genres: ['Action', 'Comedy', 'Horror'],
		href: 'Day_Shift_(film)',
		extract:
			'Day Shift is a 2022 American action horror comedy film directed by J. J. Perry in his directorial debut, written by Tyler Tice and Shay Hatten from a story by Tice, and starring Jamie Foxx as a blue-collar father whose pool-cleaning job is a front for his work as a vampire hunter. The film also stars Dave Franco, Snoop Dogg, Natasha Liu Bordizzo, Meagan Good, Karla Souza, Steve Howey, and Scott Adkins.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/58/Day_Shift_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Mack & Rita',
		year: 2022,
		cast: [
			'Diane Keaton',
			'Taylour Paige',
			'Elizabeth Lail',
			'Loretta Devine',
			'Amy Hill',
			'Lois Smith',
			'Wendie Malick',
			'Simon Rex',
			'Martin Short',
			'Dustin Milligan'
		],
		genres: ['Comedy'],
		href: 'Mack_%26_Rita',
		extract:
			'Mack & Rita is a 2022 American comedy film directed by Katie Aselton, from a screenplay by Madeline Walter and Paul Welsh. The plot follows a 30-year-old woman who wakes up as her 70-year-old self after a bachelorette party. Taylour Paige, Loretta Devine, Amy Hill, Lois Smith, Wendie Malick, Simon Rex, Martin Short, and Dustin Milligan also star. The film was released on August 12, 2022, by Gravitas Premiere, to negative reviews from critics, including a worst actress nomination for Keaton, but the performances of Paige and Milligan were praised.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Mack_%26_Rita.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Fall',
		year: 2022,
		cast: ['Grace Caroline Currey', 'Virginia Gardner', 'Mason Gooding', 'Jeffrey Dean Morgan'],
		genres: ['Thriller'],
		href: 'Fall_(2022_film)',
		extract:
			'Fall is a 2022 survival thriller film directed and co-written by Scott Mann and Jonathan Frank. Starring Grace Caroline Currey, Virginia Gardner, Mason Gooding and Jeffrey Dean Morgan, it is about two women who climb a 2,000 foot (610 m) tall television broadcasting tower and become stranded at the top.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Fall_%282022_film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 375
	},
	{
		title: 'Emily the Criminal',
		year: 2022,
		cast: ['Aubrey Plaza', 'Theo Rossi', 'Megalyn Echikunwoke', 'Gina Gershon'],
		genres: ['Crime', 'Thriller'],
		href: 'Emily_the_Criminal',
		extract:
			'Emily the Criminal is a 2022 American crime thriller film written and directed by John Patton Ford in his feature directorial debut. It stars Aubrey Plaza as the title character, with Theo Rossi, Megalyn Echikunwoke, and Gina Gershon in supporting roles. The film follows Emily Benetto, a young woman saddled with student debt and locked out of the job market due to a minor criminal record, who gets involved in a credit card scam that pulls her into the criminal underworld of Los Angeles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/58/Emily_the_Criminal.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Summering',
		year: 2022,
		cast: [
			'Lia Barnett',
			'Lake Bell',
			'Sarah Cooper',
			'Ashley Madekwe',
			'Madalen Mills',
			'Megan Mullaly'
		],
		genres: ['Drama'],
		href: 'Summering',
		extract:
			'Summering is a 2022 American coming-of-age drama film co-written, directed, and produced by James Ponsoldt. It stars Lia Barnett, Lake Bell, Sarah Cooper, Ashley Madekwe, Madalen Mills, Megan Mullally, Eden Grace Redfield, and Sanai Victoria. It was released on August 12, 2022, by Bleecker Street.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Summering.jpg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Beast',
		year: 2022,
		cast: ['Idris Elba', 'Iyana Halley', 'Leah Sava Jeffries', 'Sharlto Copley'],
		genres: ['Action', 'Horror'],
		href: 'Beast_(2022_American_film)',
		extract:
			'Beast is a 2022 survival action horror film directed by Baltasar Kormákur from a screenplay by Ryan Engle, based on a story by Jaime Primak Sullivan. The film stars Idris Elba, Iyana Halley, Leah Sava Jeffries, and Sharlto Copley. It follows a widowed father and his two teenage daughters who visit a South African game reserve but must fight to survive when they are stalked and attacked by a ferocious, rogue, man-killing lion.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/81/Beast_2022_American_poster.jpg',
		thumbnail_width: 240,
		thumbnail_height: 300
	},
	{
		title: 'Orphan: First Kill',
		year: 2022,
		cast: [
			'Isabelle Fuhrman',
			'Rossif Sutherland',
			'Hiro Kanagawa',
			'Matthew Finlan',
			'Julia Stiles'
		],
		genres: ['Horror'],
		href: 'Orphan:_First_Kill',
		extract:
			'Orphan: First Kill is a 2022 psychological horror film directed by William Brent Bell, written by David Coggeshall, based on a story by David Leslie Johnson-McGoldrick and Alex Mace. It is a prequel to the 2009 film Orphan. It stars Isabelle Fuhrman, Julia Stiles, Rossif Sutherland, Hiro Kanagawa, and Matthew Finlan.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b4/OrphanFirstKillPoster.jpg',
		thumbnail_width: 316,
		thumbnail_height: 316
	},
	{
		title: 'Spin Me Round',
		year: 2022,
		cast: [
			'Alison Brie',
			'Alessandro Nivola',
			'Molly Shannon',
			'Tim Heidecker',
			'Zach Woods',
			'Fred Armisen',
			'Debby Ryan',
			'Lil Rel Howery',
			'Aubrey Plaza'
		],
		genres: ['Comedy'],
		href: 'Spin_Me_Round_(film)',
		extract:
			'Spin Me Round is a 2022 American dark comedy film co-written by Jeff Baena and Alison Brie and directed by Baena. It premiered at the 2022 South by Southwest festival on March 12, 2022. It was released on August 19, 2022, by IFC Films in theaters and by AMC+ on video on demand.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a8/Spin_Me_Round_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: "Delia's Gone",
		year: 2022,
		cast: ['Stephan James', 'Marisa Tomei', 'Paul Walter Hauser', 'Travis Fimmel'],
		genres: ['Drama'],
		href: 'Delia%27s_Gone_(film)',
		extract:
			"Delia's Gone is a 2022 drama film, written, directed, and produced by Robert Budreau, based upon a short story Caged Bird Sing by Michael Hamblin. It stars Stephan James, Marisa Tomei, Paul Walter Hauser, and Travis Fimmel.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/de/Delias_gone.jpg',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Three Thousand Years of Longing',
		year: 2022,
		cast: ['Idris Elba', 'Tilda Swinton'],
		genres: ['Drama', 'Fantasy', 'Romance'],
		href: 'Three_Thousand_Years_of_Longing',
		extract:
			'Three Thousand Years of Longing is a 2022 fantasy romantic drama film directed and produced by George Miller. Written by Miller and Augusta Gore, it is based on the short story "The Djinn in the Nightingale\'s Eye" by A. S. Byatt and stars Idris Elba as a djinn who is unleashed from a bottle by a professor and tells her stories from his thousands of years of existence. The film is dedicated to Miller\'s mother Angela, as well as Rena Mitchell, relative of producer Doug Mitchell.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/2/27/Three_Thousand_Years_of_Longing.jpeg',
		thumbnail_width: 250,
		thumbnail_height: 363
	},
	{
		title: 'Samaritan',
		year: 2022,
		cast: ['Sylvester Stallone', 'Javon Walton', 'Pilou Asbæk', 'Dascha Polanco', 'Moises Arias'],
		genres: ['Superhero'],
		href: 'Samaritan_(film)',
		extract:
			'Samaritan is a 2022 American superhero film directed by Julius Avery and written by Bragi F. Schut. Described as a dark, new take on superhero movies, the story was previously adapted into the Mythos Comics graphic novels by Schut, Marc Olivent, and Renzo Podesta. It is a co-production of Metro-Goldwyn-Mayer and Balboa Productions. The film stars Sylvester Stallone in the main role, Javon "Wanna" Walton, Pilou Asbæk, Dascha Polanco, and Moisés Arias. The story follows a kid who suspects that his neighbor is secretly a superhero who was believed to have died many years prior.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/de/Samaritan2022Poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Me Time',
		year: 2022,
		cast: ['Kevin Hart', 'Mark Wahlberg', 'Regina Hall', 'Luis Gerardo Méndez', 'Jimmy O. Yang'],
		genres: ['Comedy'],
		href: 'Me_Time_(film)',
		extract:
			'Me Time is a 2022 American buddy comedy film written and directed by John Hamburg. The film stars Kevin Hart, Mark Wahlberg, Regina Hall, Luis Gerardo Méndez, and Jimmy O. Yang. It is about a stay-at-home dad as he finds himself with some "me time" for the first time in years while his wife and kids are away. He reconnects with his former best friend Huck for a wild weekend that nearly upends his life.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fa/Me_Time_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'The Invitation',
		year: 2022,
		cast: [
			'Nathalie Emmanuel',
			'Thomas Doherty',
			'Stephanie Corneliussen',
			'Alana Boden',
			'Hugh Skinner',
			'Sean Pertwee'
		],
		genres: ['Horror', 'Thriller'],
		href: 'The_Invitation_(2022_film)',
		extract:
			"The Invitation is a 2022 American horror thriller film directed by Jessica M. Thompson and written by Blair Butler. The film stars Nathalie Emmanuel and Thomas Doherty. Inspired by the novel Dracula by Bram Stoker, the film follows a young woman who, following her mother's death, meets long-lost family members for the first time, only to discover the dark secrets they carry with them.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Invitation_%282022_film%29_poster.jpg',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'Breaking',
		year: 2022,
		cast: [
			'John Boyega',
			'Nicole Beharie',
			'Selenis Leyva',
			'Connie Britton',
			'Jeffrey Donovan',
			'Michael K. Williams'
		],
		genres: ['Drama', 'Thriller'],
		href: 'Breaking_(film)',
		extract:
			'Breaking is a 2022 American thriller drama film starring John Boyega as a Marine Corps veteran, Brian Brown-Easley, who is in financial trouble and robs a bank. It is written and directed by Abi Damaris Corbin and co-written by Kwame Kwei-Armah, based on the true story of Brown-Easley, detailed in the 2018 Task & Purpose article "They Didn\'t Have to Kill Him" by Aaron Gell. The film also stars Nicole Beharie, Selenis Leyva, Connie Britton, Jeffrey Donovan, and Michael Kenneth Williams.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/da/Breaking_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Funny Pages',
		year: 2022,
		cast: ['Daniel Zolghadri', 'Matthew Maher', 'Miles Emanuel', 'Maria Dizzia', 'Josh Pais'],
		genres: ['Comedy'],
		href: 'Funny_Pages_(film)',
		extract:
			'Funny Pages is a 2022 American coming-of-age black comedy film written, directed, and edited by Owen Kline and produced by the Safdie brothers. It premiered at the 2022 Cannes Film Festival and was released in the United States on August 26, 2022, where it received positive reviews from critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/70/Funny_Pages.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Honk for Jesus. Save Your Soul.',
		year: 2022,
		cast: ['Regina Hall', 'Sterling K. Brown', 'Austin Crute', 'Conphidance', 'Nicole Beharie'],
		genres: ['Comedy', 'Short', 'Satire'],
		href: 'Honk_for_Jesus._Save_Your_Soul.',
		extract:
			"Honk for Jesus. Save Your Soul. is a 2022 American mockumentary comedy film written, directed, and produced by Adamma Ebo, in her feature directorial debut, and is a feature-length adaptation of Ebo's 2018 short film of the same name. It stars Regina Hall and Sterling K. Brown as the first lady and the pastor of a megachurch, who attempt to reopen and rebuild their congregation, following a major scandal. Austin Crute, Nicole Beharie, and Conphidance also feature in supporting roles. Hall and Brown are also producers on the film alongside Daniel Kaluuya, who produced under his 59% Productions banner, with Jordan Peele serving as executive producer under his Monkeypaw Productions banner.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/e/ee/Honk_for_Jesus._Save_Your_Soul_film_poster.png',
		thumbnail_width: 266,
		thumbnail_height: 394
	},
	{
		title: 'Gigi & Nate',
		year: 2022,
		cast: [
			'Marcia Gay Harden',
			'Charlie Rowe',
			'Josephine Langford',
			'Zoe Colletti',
			'Hannah Alligood',
			'Jim Belushi',
			'Diane Ladd'
		],
		genres: ['Drama'],
		href: 'Gigi_%26_Nate',
		extract:
			'Gigi & Nate is a 2022 American coming-of-age drama film directed by Nick Hamm from a screenplay by David Hudgins. The film is based on a true story of a quadriplegic and a capuchin monkey. The film was released in the United States on September 2, 2022, by Roadside Attractions.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Gigi-Nate-poster.jpeg',
		thumbnail_width: 263,
		thumbnail_height: 380
	},
	{
		title: 'Wire Room',
		year: 2022,
		cast: ['Kevin Dillon', 'Bruce Willis'],
		genres: ['Action'],
		href: 'Wire_Room',
		extract:
			'Wire Room is a 2022 American action film directed by Matt Eskandari, from a screenplay by Brandon Stiefer, and produced by Randall Emmett, George Furla, Oliver Trevena, Norton Herrick, Ceasar Richbow, Mark Stewart, and Noel Ashman. It stars Kevin Dillon and Bruce Willis.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Wire_Room_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'One Way',
		year: 2022,
		cast: ['Colson Baker', 'Kevin Bacon', 'Travis Fimmel', 'Drea de Matteo', 'Storm Reid'],
		genres: ['Action', 'Crime', 'Thriller'],
		href: 'One_Way_(2022_film)',
		extract:
			'One Way is an American action crime thriller film written by Ben Conway and directed by Andrew Baird. Principal photography began in 2021. The film stars Colson Baker, Kevin Bacon and Travis Fimmel.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e7/One_Way_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 376
	},
	{
		title: 'Pinocchio',
		year: 2022,
		cast: [
			'Tom Hanks',
			'Benjamin Evan Ainsworth',
			'Joseph Gordon-Levitt',
			'Keegan-Michael Key',
			'Cynthia Erivo',
			'Luke Evans'
		],
		genres: ['Live Action', 'Animated', 'Fantasy', 'Musical'],
		href: 'Pinocchio_(2022_live-action_film)',
		extract:
			"Pinocchio is a 2022 American live action/computer animated musical fantasy film directed by Robert Zemeckis from a screenplay by Zemeckis and Chris Weitz. Produced by Walt Disney Pictures, Depth of Field and ImageMovers, the film is a live-action remake of Walt Disney's 1940 animated film of the same name, which is itself based on the 1883 Italian book The Adventures of Pinocchio by Carlo Collodi. It stars Tom Hanks, Cynthia Erivo, Giuseppe Battiston and Luke Evans with Benjamin Evan Ainsworth, Joseph Gordon-Levitt, Keegan-Michael Key, and Lorraine Bracco in voice roles. The story follows a wooden puppet named Pinocchio, who is brought to life by a blue fairy (Erivo) after being crafted by an old Italian woodcarver named Geppetto (Hanks). While the role of Pinocchio's conscience Jiminy Cricket (Gordon-Levitt) attempts to guide Pinocchio in matters of right and wrong, Pinocchio encounters a host of unsavory characters in his efforts to become a real boy.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Pinocchio_2022_film_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Barbarian',
		year: 2022,
		cast: ['Georgina Campbell', 'Bill Skarsgård', 'Justin Long'],
		genres: ['Horror', 'Thriller'],
		href: 'Barbarian_(2022_film)',
		extract:
			'Barbarian is a 2022 American horror thriller film written and directed by Zach Cregger in his solo screen writing and directorial debut. It is produced by Arnon Milchan, Roy Lee, Raphael Margules, and J.D. Lifshitz. The film stars Georgina Campbell, Bill Skarsgård, and Justin Long. The plot sees a woman find out that the rental home she reserved has been accidentally double-booked by a man, not knowing of a dark secret within the dwelling.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Barbarian_2022_film_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'End of the Road',
		year: 2022,
		cast: ['Queen Latifah', 'Ludacris', 'Beau Bridges'],
		genres: ['Crime', 'Thriller'],
		href: 'End_of_the_Road_(2022_film)',
		extract:
			'End of the Road is an 2022 American crime thriller film directed by Millicent Shelton, written by Christopher J. Moore and David Loughery, and produced by Tracey Edmonds, Mark Burg, and Brad Kaplan. The film stars Queen Latifah, Ludacris, Mychala Lee, Shaun Dixon, and Beau Bridges.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/3c/Film_poster_for_the_2022_film_End_of_the_Road.png',
		thumbnail_width: 263,
		thumbnail_height: 385
	},
	{
		title: 'Lifemark',
		year: 2022,
		cast: ['Kirk Cameron', 'Alex Kendrick', 'Raphael Ruggero'],
		genres: ['Documentary', 'Drama', 'Short'],
		href: 'Lifemark',
		extract:
			"Lifemark is a 2022 American Christian drama film by director Kevin Peeples, adapting the true story of the adoption of David Scotton, previously depicted in the 2018 short documentary film I Lived on Parker Avenue. It tells the story of how a young man's mother considered aborting him, but instead made an adoption plan for him, and later reconnected with him as a young adult. Kirk Cameron, Alex Kendrick, and Raphael Ruggero star, while the Kendrick Brothers co-wrote the script with Peeples and act as executive producers. The film was released on September 9, 2022, via Fathom Events after traditional distributors declined to release it. It received generally positive reviews, and its initial one-week theatrical run was extended an extra week due to its box-office success.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/0a/LifemarkPoster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Clerks III',
		year: 2022,
		cast: [
			"Brian O'Halloran",
			'Jeff Anderson',
			'Trevor Fehrman',
			'Austin Zajur',
			'Jason Mewes',
			'Marilyn Ghigliotti',
			'Rosario Dawson',
			'Kevin Smith'
		],
		genres: ['Comedy', 'Drama'],
		href: 'Clerks_III',
		extract:
			"Clerks III is a 2022 American dark comedy-drama film written, produced, directed, and edited by Kevin Smith and stars Brian O'Halloran, Jeff Anderson, Trevor Fehrman, Austin Zajur, Jason Mewes, Rosario Dawson and Smith. It serves as a standalone sequel to the 1994 and 2006 Clerks films, and is the ninth overall feature film set in the View Askewniverse. In the film, Randal Graves, after surviving a massive heart attack, enlists his friends and fellow clerks Dante Hicks, Elias Grover, and Jay and Silent Bob to make a movie about their lives at the Quick Stop Convenience store that started it all.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/80/Clerks_III.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'The Woman King',
		year: 2022,
		cast: [
			'Viola Davis',
			'Thuso Mbedu',
			'Lashana Lynch',
			'Sheila Atim',
			'Hero Fiennes Tiffin',
			'John Boyega'
		],
		genres: ['Action', 'Drama', 'Historical', 'War'],
		href: 'The_Woman_King',
		extract:
			'The Woman King is a 2022 American historical action drama film about the Agojie, the all-female warrior unit that protected the West African kingdom of Dahomey during the 17th to 19th centuries. Set in the 1820s, the film stars Viola Davis as a general who trains the next generation of warriors to fight their enemies. It is directed by Gina Prince-Bythewood and written by Dana Stevens, based on a story she wrote with Maria Bello. The film also stars Thuso Mbedu, Lashana Lynch, Sheila Atim, Hero Fiennes Tiffin, and John Boyega.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/34/The_Woman_King_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 312
	},
	{
		title: 'See How They Run',
		year: 2022,
		cast: [
			'Saoirse Ronan',
			'Sam Rockwell',
			'Adrien Brody',
			'Ruth Wilson',
			'Reece Shearsmith',
			'Harris Dickinson',
			'David Oyelowo'
		],
		genres: ['Comedy', 'Mystery'],
		href: 'See_How_They_Run_(2022_film)',
		extract:
			'See How They Run is a 2022 comedy mystery film directed by Tom George, written by Mark Chappell and produced by Damian Jones and Gina Carter. The film stars Sam Rockwell, Saoirse Ronan, Adrien Brody, Ruth Wilson, Reece Shearsmith, Harris Dickinson and David Oyelowo.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/7/72/See_How_They_Run_%282022_film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 375
	},
	{
		title: 'Blonde',
		year: 2022,
		cast: [
			'Ana de Armas',
			'Adrien Brody',
			'Bobby Cannavale',
			'Xavier Samuel',
			'Julianne Nicholson'
		],
		genres: ['Drama', 'Biography'],
		href: 'Blonde_(2022_film)',
		extract:
			'Blonde is a 2022 American biographical psychological drama film written and directed by Andrew Dominik, and the second adaptation, with the same name, based on the 2000 novel of the same name by Joyce Carol Oates. The film is a fictionalized take on the life and career of American actress Marilyn Monroe, played by Ana de Armas. The cast also includes Adrien Brody, Bobby Cannavale, Xavier Samuel, and Julianne Nicholson.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6d/Blonde_2022_film_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 320
	},
	{
		title: 'Pearl',
		year: 2022,
		cast: [
			'Mia Goth',
			'David Corenswet',
			'Tandi Wright',
			'Matthew Sutherland',
			'Emma Jenkins-Purro'
		],
		genres: ['Slasher'],
		href: 'Pearl_(2022_film)',
		extract:
			"Pearl is a 2022 American slasher film directed by Ti West, co-written by West and Mia Goth, who reprises her role as the title character, and featuring David Corenswet, Tandi Wright, Matthew Sunderland, and Emma Jenkins-Purro in supporting roles. A prequel to X (2022) and the second installment in the X film series, it serves as an origin story for the title villain, whose fervent aspiration to become a movie star led her to committing violent acts on her family's Texas homestead in 1918.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Pearl_theatricalposter.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Do Revenge',
		year: 2022,
		cast: [
			'Camila Mendes',
			'Maya Hawke',
			'Austin Abrams',
			'Sophie Turner',
			'Sarah Michelle Gellar'
		],
		genres: ['Comedy', 'Teen'],
		href: 'Do_Revenge',
		extract:
			"Do Revenge is a 2022 American teen black comedy film directed by Jennifer Kaytin Robinson, who co-wrote the screenplay alongside Celeste Ballard. It stars Camila Mendes, Maya Hawke, Austin Abrams, Rish Shah, and Sarah Michelle Gellar, and is loosely inspired by Alfred Hitchcock's Strangers on a Train (1951). It was released on Netflix on September 16, 2022, and received generally positive reviews from critics.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/98/Do_Revenge.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'The Silent Twins',
		year: 2022,
		cast: ['Letitia Wright', 'Tamara Lawrance', 'Nadine Marshall'],
		genres: ['Drama', 'Biography'],
		href: 'The_Silent_Twins_(2022_film)',
		extract:
			'The Silent Twins is a 2022 internationally co-produced biographical drama film about the twin sisters, June and Jennifer Gibbons, who were institutionalized at Broadmoor Hospital following years of silence and teenage rebellion. It was directed by Agnieszka Smoczyńska from a screenplay by Andrea Seigel, who adapted the book of the same name by Marjorie Wallace. The film stars Letitia Wright, Tamara Lawrance, Nadine Marshall, Treva Etienne, Michael Smiley, and Jodhi May.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/3b/The_Silent_Twins_%282022_film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Confess, Fletch',
		year: 2022,
		cast: ['Jon Hamm', 'Marcia Gay Harden', 'Kyle MacLachlan', 'Roy Wood Jr.', 'John Slattery'],
		genres: ['Comedy', 'Crime'],
		href: 'Confess,_Fletch',
		extract:
			"Confess, Fletch is a 2022 American crime comedy film directed by Greg Mottola, who also co-wrote the screenplay with Zev Borow. Based on Gregory Mcdonald's 1976 novel of the same name, the film stars Jon Hamm, Lorenza Izzo, Marcia Gay Harden, Kyle MacLachlan, Roy Wood Jr., and John Slattery. It is the third installment in the Fletch series, following Fletch (1985) and Fletch Lives (1989), and the first not to star Chevy Chase.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/61/Confess%2C_Fletch.jpg',
		thumbnail_width: 250,
		thumbnail_height: 375
	},
	{
		title: 'Moonage Daydream',
		year: 2022,
		cast: ['David Bowie'],
		genres: ['Documentary'],
		href: 'Moonage_Daydream_(film)',
		extract:
			"Moonage Daydream is a 2022 documentary film about English singer-songwriter David Bowie. Written, directed, produced and edited by Brett Morgen, the film uses previously unreleased footage from Bowie's personal archives, including live concert footage. It is the first film to be officially authorized by Bowie's estate, and takes its title from the 1972 Bowie song of the same name.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Moonage_Daydream_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 367
	},
	{
		title: "God's Country",
		year: 2022,
		cast: [
			'Thandiwe Newton',
			'Jeremy Bobb',
			'Joris Jarsky',
			'Kai Lennox',
			'Jefferson White',
			'Tanaya Beatty'
		],
		genres: ['Thriller'],
		href: 'God%27s_Country_(2022_film)',
		extract:
			"God's Country is a 2022 thriller film starring Thandiwe Newton. The film was directed by Julian Higgins.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Godscountryposter.jpg',
		thumbnail_width: 254,
		thumbnail_height: 377
	},
	{
		title: 'Goodnight Mommy',
		year: 2022,
		cast: ['Naomi Watts', 'Cameron Crovetti', 'Nicholas Crovetti', 'Peter Hermann'],
		genres: ['Horror', 'War'],
		href: 'Goodnight_Mommy_(2022_film)',
		extract:
			'Goodnight Mommy is a 2022 American psychological horror film directed by Matt Sobel and written by Kyle Warren, serving as a remake of the 2014 Austrian film of the same name. The film stars Naomi Watts, Cameron and Nicholas Crovetti, Crystal Lucas-Perry, Jeremy Bobb, and Peter Hermann. The film follows twin brothers who suspect their mother was switched with an impostor, following her recent surgery leaving her with bandages over her face.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/55/GoodnightMommy2022poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Running the Bases',
		year: 2022,
		cast: ['Brett Varvel', 'Gigi Orsillo', 'Todd Terry', 'Cameron Arnett'],
		genres: ['Sports'],
		href: 'Running_the_Bases',
		extract:
			'Running the Bases is a 2022 American Christian sports film written and directed by Marty Roberts and Jimmy Womble. It stars Brett Varvel, Gigi Orsillo, Todd Terry, and Cameron Arnett, and follows a small-town baseball coach who becomes the head coach of a large high school program, but soon faces opposition to his coaching methods. It was released on September 16, 2022.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/92/RunningTheBases.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'Jeepers Creepers: Reborn',
		year: 2022,
		cast: ['Sydney Craven', 'Imran Adams', 'Jarreau Benjamin', 'Dee Wallace', 'Gary Graham'],
		genres: ['Horror', 'Supernatural'],
		href: 'Jeepers_Creepers:_Reborn',
		extract:
			'Jeepers Creepers: Reborn is a 2022 supernatural horror film directed by Timo Vuorensola and written by Jake Seal and Sean-Michael Argo. The film is a reboot of Victor Salva\'s Jeepers Creepers trilogy intended to set up a new trilogy. Starring Sydney Craven and Imran Adams, with "special appearances" from Dee Wallace and Gary Graham, it was released worldwide by Screen Media Films on September 19, 2022.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/78/Jeepers_Creepers_Reborn.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: "Don't Worry Darling",
		year: 2022,
		cast: [
			'Florence Pugh',
			'Harry Styles',
			'Olivia Wilde',
			'Gemma Chan',
			'KiKi Layne',
			'Nick Kroll',
			'Chris Pine'
		],
		genres: ['Thriller'],
		href: 'Don%27t_Worry_Darling',
		extract:
			"Don't Worry Darling is a 2022 American psychological thriller film directed by Olivia Wilde from a screenplay by Katie Silberman, based on a spec script by Carey Van Dyke, Shane Van Dyke, and Silberman. The film stars Florence Pugh, Harry Styles, Wilde, Gemma Chan, KiKi Layne, Nick Kroll, and Chris Pine. The film follows a housewife living in an idyllic company town who begins to suspect a sinister secret being kept from its residents by the man who runs it.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Don%27t_Worry_Darling_Poster_2.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Catherine Called Birdy',
		year: 2022,
		cast: [
			'Bella Ramsey',
			'Billie Piper',
			'Andrew Scott',
			'Lesley Sharp',
			'Joe Alwyn',
			'Sophie Okonedo'
		],
		genres: ['Comedy'],
		href: 'Catherine_Called_Birdy_(film)',
		extract:
			'Catherine Called Birdy is a 2022 medieval comedy film written and directed by Lena Dunham, based on the 1994 novel of the same name by Karen Cushman. It stars Bella Ramsey as the title character, alongside Billie Piper, Andrew Scott, Lesley Sharp, Joe Alwyn, and Sophie Okonedo.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/6/68/Catherine_Called_Birdy_%28film%29.png',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'On the Come Up',
		year: 2022,
		cast: [
			'Jamila C. Gray',
			"Da'Vine Joy Randolph",
			'Lil Yachty',
			'Mike Epps',
			'Sanaa Lathan',
			'Method Man'
		],
		genres: ['Drama', 'Musical'],
		href: 'On_the_Come_Up_(film)',
		extract:
			"On the Come Up is a 2022 American musical drama film directed by Sanaa Lathan in her feature directorial debut. Based on the 2019 novel of the same name by Angie Thomas, it stars Jamila C. Gray, Da'Vine Joy Randolph, Mike Epps, Lil Yachty, Lathan, and Method Man.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/92/On_the_Come_Up_movie_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "A Jazzman's Blues",
		year: 2022,
		cast: ['Joshua Boone', 'Amirah Vann', 'Solea Pfeiffer', 'Austin Scott', 'Ryan Eggold'],
		genres: ['Drama'],
		href: 'A_Jazzman%27s_Blues',
		extract:
			"A Jazzman's Blues is a 2022 American drama film written, produced and directed by Tyler Perry. The film stars Joshua Boone, Amirah Vann, Solea Pfeiffer, Austin Scott, Brent Antonello, and Ryan Eggold.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/86/A_Jazzman%27s_Blues.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'The Munsters',
		year: 2022,
		cast: [
			'Jeff Daniel Phillips',
			'Sheri Moon Zombie',
			'Daniel Roebuck',
			'Richard Brake',
			'Sylvester McCoy'
		],
		genres: ['Comedy', 'Horror'],
		href: 'The_Munsters_(2022_film)',
		extract:
			'The Munsters is a 2022 American horror comedy film produced, written, and directed by Rob Zombie and starring Sheri Moon Zombie, Jeff Daniel Phillips, Daniel Roebuck, Richard Brake, Jorge Garcia, Sylvester McCoy, Catherine Schell, and Cassandra Peterson. Based on the 1960s family sitcom of the same title, the story takes place prior to the events of the series, serving as an origin story for the characters.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e2/The_Munsters_%282022%29_Movie.png',
		thumbnail_width: 266,
		thumbnail_height: 375
	},
	{
		title: 'Smile',
		year: 2022,
		cast: [
			'Sosie Bacon',
			'Jessie T. Usher',
			'Kyle Gallner',
			'Robin Weigert',
			'Caitlin Stasey',
			'Kal Penn',
			'Rob Morgan'
		],
		genres: ['Horror', 'Short', 'Supernatural'],
		href: 'Smile_(2022_film)',
		extract:
			"Smile is a 2022 American psychological supernatural horror film written and directed by Parker Finn, based on his 2020 short film Laura Hasn't Slept. The film stars Sosie Bacon as a therapist named Rose Cotter, who, after witnessing the bizarre suicide of a patient, goes through increasingly disturbing and daunting experiences, leading her to believe what she is experiencing is supernatural. It also stars Jessie T. Usher, Kyle Gallner, Kal Penn, and Rob Morgan, as well as Caitlin Stasey playing the same character she played in the short film.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Smile_%282022_film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Bros',
		year: 2022,
		cast: [
			'Billy Eichner',
			'Luke Macfarlane',
			'Ts Madison',
			'Monica Raymund',
			'Guillermo Díaz',
			'Guy Branum',
			'Amanda Bearse'
		],
		genres: ['Comedy', 'Romance'],
		href: 'Bros_(film)',
		extract:
			'Bros is a 2022 American romantic comedy film starring Billy Eichner and Luke Macfarlane as two gay men in Manhattan who avoid commitment but are drawn to each other. The film is directed by Nicholas Stoller based on a screenplay he co-wrote with Eichner and is produced by Stoller, Judd Apatow, and Josh Church. Produced under Universal Pictures on a budget of $22 million, it is one of the first gay romantic comedies by a major studio and has an openly LGBT principal cast.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fa/Bros_%28film%29.jpg',
		thumbnail_width: 251,
		thumbnail_height: 398
	},
	{
		title: 'Hocus Pocus 2',
		year: 2022,
		cast: [
			'Bette Midler',
			'Sarah Jessica Parker',
			'Kathy Najimy',
			'Sam Richardson',
			'Doug Jones',
			'Whitney Peak',
			'Belissa Escobedo',
			'Tony Hale',
			'Hannah Waddingham'
		],
		genres: ['Comedy', 'Fantasy'],
		href: 'Hocus_Pocus_2',
		extract:
			"Hocus Pocus 2 is a 2022 American fantasy comedy film directed by Anne Fletcher, written by Jen D'Angelo and produced by Walt Disney Pictures. A sequel to the 1993 film Hocus Pocus, it stars Bette Midler, Sarah Jessica Parker, Kathy Najimy, and Doug Jones reprising their roles, with Sam Richardson, Whitney Peak, Belissa Escobedo, Tony Hale, and Hannah Waddingham joining the cast in new roles.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Hocus_Pocus_2_Logo.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'The Greatest Beer Run Ever',
		year: 2022,
		cast: ['Zac Efron', 'Russell Crowe', 'Bill Murray'],
		genres: ['Comedy', 'Drama', 'War', 'Biography'],
		href: 'The_Greatest_Beer_Run_Ever',
		extract:
			'The Greatest Beer Run Ever is a 2022 American biographical war comedy-drama film directed and co-written by Peter Farrelly, based on the book of the same name by John "Chickie" Donohue and Joanna Molloy. The film stars Zac Efron and Russell Crowe, and follows the true story of Donohue, who as a young veteran sneaks into the Vietnam War to deliver some beer to his friends, who are serving their duty.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Greatest_Beer_Run_Ever.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'The Good House',
		year: 2022,
		cast: ['Sigourney Weaver', 'Kevin Kline', 'Morena Baccarin', 'Rob Delaney', "Beverly D'Angelo"],
		genres: ['Comedy', 'Drama'],
		href: 'The_Good_House_(film)',
		extract:
			'The Good House is a 2022 American comedy-drama film directed by Maya Forbes and Wally Wolodarsky, who wrote the screenplay with Thomas Bezucha. It is based on the novel of the same name by Ann Leary.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1e/The_Good_House_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Luckiest Girl Alive',
		year: 2022,
		cast: [
			'Mila Kunis',
			'Finn Wittrock',
			'Scoot McNairy',
			'Chiara Aurelia',
			'Justine Lupe',
			'Thomas Barbusca',
			'Jennifer Beals',
			'Connie Britton'
		],
		genres: ['Mystery', 'Thriller'],
		href: 'Luckiest_Girl_Alive_(film)',
		extract:
			'Luckiest Girl Alive is a 2022 mystery thriller film directed by Mike Barker from a screenplay by Jessica Knoll, based on her 2015 novel of the same name. The film stars Mila Kunis, Finn Wittrock, Scoot McNairy, Chiara Aurelia, Justine Lupe, Thomas Barbusca, Jennifer Beals, and Connie Britton.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/91/Luckiest_Girl_Alive_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: "God's Creatures",
		year: 2022,
		cast: ['Emily Watson', 'Paul Mescal', 'Aisling Franciosi'],
		genres: ['Drama'],
		href: 'God%27s_Creatures_(film)',
		extract:
			"God's Creatures is a 2022 psychological drama film directed by Saela Davis and Anna Rose Holmer with the screenplay written by Shane Crowley, based on a story he wrote with producer Fodhla Cronin O'Reilly. It stars Emily Watson, Paul Mescal, Aisling Franciosi, Declan Conlon, Toni O'Rourke, Marion O'Dwyer, Brendan McCormack, and Lalor Roddy. The film premiered at Directors' Fortnight of the Cannes Film Festival on 19 May 2022.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2b/God%27s_Creatures.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Dead for a Dollar',
		year: 2022,
		cast: ['Christoph Waltz', 'Willem Dafoe', 'Rachel Brosnahan', 'Warren Burke', 'Benjamin Bratt'],
		genres: ['Western'],
		href: 'Dead_for_a_Dollar',
		extract:
			'Dead for a Dollar is a 2022 American Western film written and directed by Walter Hill. It stars Christoph Waltz, Willem Dafoe, and Rachel Brosnahan. The plot follows a bounty hunter (Waltz) on a search to find the missing wife (Brosnahan) of a businessman. Brandon Scott, Warren Burke, Benjamin Bratt, and Hamish Linklater also star. The film premiered at the 79th Venice International Film Festival on September 6, 2022. It was released in the United States on September 30, 2022, by Quiver Distribution.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/44/Dead_for_a_Dollar.jpg',
		thumbnail_width: 250,
		thumbnail_height: 361
	},
	{
		title: "My Best Friend's Exorcism",
		year: 2022,
		cast: ['Elsie Fisher', 'Amiah Miller', 'Cathy Ang', 'Rachel Ogechi Kanu'],
		genres: ['Comedy', 'Horror', 'Supernatural'],
		href: 'My_Best_Friend%27s_Exorcism_(film)',
		extract:
			"My Best Friend's Exorcism is a 2022 American supernatural comedy horror film directed by Damon Thomas from a screenplay by Jenna Lamia, based on the 2016 novel of the same name by Grady Hendrix. The film stars Elsie Fisher, Amiah Miller, Rachel Ogechi Kanu, and Cathy Ang. The film was released on Prime Video on September 30, 2022.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/0/08/My_Best_Friend%27s_Exorcism_film_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 368
	},
	{
		title: "Mr. Harrigan's Phone",
		year: 2022,
		cast: ['Jaeden Martell', 'Donald Sutherland', 'Joe Tippett', 'Kirby Howell-Baptiste'],
		genres: ['Drama', 'Horror', 'Teen'],
		href: 'Mr._Harrigan%27s_Phone',
		extract:
			"Mr. Harrigan's Phone is a 2022 American teen horror drama film written and directed by John Lee Hancock. It is based on the novella of the same name by Stephen King from the collection If It Bleeds. The film stars Donald Sutherland, Jaeden Martell, Joe Tippett, and Kirby Howell-Baptiste.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Mr_harrigans_phone_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Terrifier 2',
		year: 2022,
		cast: [
			'Lauren LaVera',
			'Elliot Fullam',
			'Sarah Voigt',
			'Kailey Hyman',
			'Casey Harnett',
			'David Howard Thornton',
			'Samantha Scaffidi'
		],
		genres: ['Slasher'],
		href: 'Terrifier_2',
		extract:
			"Terrifier 2 is a 2022 American slasher film written, directed, edited, and produced by Damien Leone. It is a sequel to Terrifier (2016), and is the third feature-length film to feature Art the Clown. It features the return of David Howard Thornton and Samantha Scaffidi, who respectively portrayed Art the Clown and Victoria Heyes in the first film, and stars Lauren LaVera, Elliott Fullam, Sarah Voigt, Kailey Hyman, and Casey Hartnett. The story follows Art's resurrection and pursuit of Sienna Shaw (LaVera) and her younger brother Jonathan (Fullam) on Halloween night — a year after the events of the first film.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Terrifier_2_Poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 368
	},
	{
		title: 'Lyle, Lyle, Crocodile',
		year: 2022,
		cast: [
			'Javier Bardem',
			'Constance Wu',
			'Winslow Fegley',
			'Scoot McNairy',
			'Brett Gelman',
			'Shawn Mendes'
		],
		genres: ['Comedy', 'Musical'],
		href: 'Lyle,_Lyle,_Crocodile_(film)',
		extract:
			"Lyle, Lyle, Crocodile is a 2022 American musical comedy film directed by Will Speck and Josh Gordon from a screenplay by William Davies. Produced by Columbia Pictures in association with Eagle Pictures and TSG Entertainment II, and distributed by Sony Pictures Releasing, it is an adaptation of the children's story of the same name and its predecessor The House on East 88th Street by Bernard Waber. The plot focuses on a family who moves to New York City, where their struggling son befriends a singing crocodile and tries to protect him from the rest of the world. The film stars Shawn Mendes as the voice of the titular character, alongside Javier Bardem, Constance Wu, Winslow Fegley, Scoot McNairy, Brett Gelman, and Ego Nwodim.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/39/Lyle%2C_Lyle%2C_Crocodile_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'Amsterdam',
		year: 2022,
		cast: [
			'Christian Bale',
			'Margot Robbie',
			'John David Washington',
			'Chris Rock',
			'Anya Taylor-Joy',
			'Zoe Saldaña',
			'Mike Myers',
			'Michael Shannon',
			'Timothy Olyphant',
			'Andrea Riseborough',
			'Taylor Swift',
			'Matthias Schoenaerts',
			'Alessandro Nivola',
			'Rami Malek',
			'Robert De Niro'
		],
		genres: ['Comedy', 'Mystery', 'Thriller', 'Historical'],
		href: 'Amsterdam_(2022_film)',
		extract:
			'Amsterdam is a 2022 period mystery comedy thriller film directed, written, and co-produced by David O. Russell and starring Christian Bale, Margot Robbie, and John David Washington alongside an ensemble supporting cast including Chris Rock, Anya Taylor-Joy, Zoe Saldaña, Mike Myers, Michael Shannon, Timothy Olyphant, Andrea Riseborough, Taylor Swift, Matthias Schoenaerts, Alessandro Nivola, Rami Malek, and Robert De Niro. The story is based on the Business Plot, a 1933 political conspiracy in the United States, and follows three friends—a doctor, a nurse, and a lawyer—who reunite and seek to uncover the act following the mysterious murder of a retired U.S. general.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Amsterdam_%282022_film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Tár',
		year: 2022,
		cast: [
			'Cate Blanchett',
			'Noémie Merlant',
			'Nina Hoss',
			'Sophie Kauer',
			'Julian Glover',
			'Allan Corduner',
			'Mark Strong'
		],
		genres: ['Drama'],
		href: 'T%C3%A1r',
		extract:
			'Tár is a 2022 psychological drama film written and directed by Todd Field. It stars Cate Blanchett as Lydia Tár, a renowned conductor who is accused of sexual misconduct. The supporting cast includes Nina Hoss, Noémie Merlant, Sophie Kauer, Julian Glover, Allan Corduner, and Mark Strong. Tár premiered at the 79th Venice International Film Festival in September 2022, where Blanchett won the Volpi Cup for Best Actress. The film had a limited theatrical release in the United States on October 7, 2022, before a wide release on October 28, by Focus Features.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/19/T%C3%A1r_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'Hellraiser',
		year: 2022,
		cast: ["Odessa A'zion", 'Jamie Clayton', 'Brandon Flynn', 'Goran Višnjić', 'Hiam Abbass'],
		genres: ['Horror', 'Supernatural'],
		href: 'Hellraiser_(2022_film)',
		extract:
			"Hellraiser is a 2022 supernatural horror film directed by David Bruckner, with a screenplay by Ben Collins and Luke Piotrowski, from a screen story they co-wrote with David S. Goyer. It is a reboot of the Hellraiser franchise, the eleventh installment overall, and a second adaptation of the 1986 novella The Hellbound Heart by Clive Barker, which was adapted into the 1987 film Hellraiser. The film stars Odessa A'zion, Jamie Clayton, Adam Faison, Drew Starkey, Brandon Flynn, Aoife Hinds, Jason Liles, Yinka Olorunnife, Selina Lo, Zachary Hing, Kit Clarke, Goran Višnjić, and Hiam Abbass. It follows a young woman recovering from addiction who ends up with a mechanical puzzle box that can summon the Cenobites, humanoid beings who thrive on pain and pleasure.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/61/Hellraiser_2022_poster.png',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Significant Other',
		year: 2022,
		cast: ['Maika Monroe', 'Jake Lacy'],
		genres: ['Horror', 'Science Fiction'],
		href: 'Significant_Other_(film)',
		extract:
			'Significant Other is a 2022 American sci-fi horror film written and directed by Dan Berk and Robert Olsen. The film stars Maika Monroe and Jake Lacy as a couple dealing with relationship issues while backpacking in the woods in the Pacific Northwest, whose activities are interrupted by a meteor strike bringing an alien lifeform into the picture.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Significant_Other_2022_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Halloween Ends',
		year: 2022,
		cast: [
			'Jamie Lee Curtis',
			'Andi Matichak',
			'James Jude Courtney',
			'Will Patton',
			'Rohan Campbell',
			'Kyle Richards'
		],
		genres: ['Slasher'],
		href: 'Halloween_Ends',
		extract:
			"Halloween Ends is a 2022 American slasher film directed by David Gordon Green and co-written by Green, Danny McBride, Paul Brad Logan and Chris Bernier. It is the sequel to Halloween Kills (2021), the thirteenth installment in the Halloween franchise, and the final film in the trilogy of sequels that started with the 2018 film, which directly follows the 1978 film. The film stars Jamie Lee Curtis, Andi Matichak, Rohan Campbell, Will Patton, Kyle Richards, and James Jude Courtney. The plot follows Corey Cunningham, a young man who falls in love with Laurie Strode's granddaughter while a series of events, including crossing paths with Michael Myers, render him a murderous outcast.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Halloween_ends_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 386
	},
	{
		title: 'Till',
		year: 2022,
		cast: [
			'Danielle Deadwyler',
			'Jalyn Hall',
			'Kevin Carroll',
			'Frankie Faison',
			'Haley Bennett',
			'Jayme Lawson',
			'Tosin Cole',
			'Sean Patrick Thomas',
			'John Douglas Thompson',
			'Roger Guenveur Smith',
			'Whoopi Goldberg'
		],
		genres: ['Drama', 'Biography'],
		href: 'Till_(film)',
		extract:
			'Till is a 2022 biographical drama film directed by Chinonye Chukwu and written by Michael Reilly, Keith Beauchamp, and Chukwu, and produced by Beauchamp, Reilly, and Whoopi Goldberg. It is based on the true story of Mamie Till-Bradley, an educator and activist who pursued justice after the murder of her 14-year-old son Emmett in August 1955. The film stars Danielle Deadwyler as Mamie and Jalyn Hall as Emmett. Kevin Carroll, Frankie Faison, Haley Bennett, Jayme Lawson, Tosin Cole, Sean Patrick Thomas, John Douglas Thompson, Roger Guenveur Smith, and Goldberg also appear in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Till_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'Rosaline',
		year: 2022,
		cast: ['Kaitlyn Dever', 'Isabela Merced', 'Kyle Allen', 'Bradley Whitford', 'Minnie Driver'],
		genres: ['Comedy', 'Romance'],
		href: 'Rosaline_(film)',
		extract:
			"Rosaline is a 2022 American romantic comedy film directed by Karen Maine, written by Scott Neustadter and Michael H. Weber, and starring Kaitlyn Dever, Isabela Merced, Kyle Allen, Sean Teale, Christopher McDonald, Minnie Driver, and Bradley Whitford. It is based on the 2012 young adult novel When You Were Mine by Rebecca Serle, which in turn was inspired by William Shakespeare's Romeo and Juliet.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/ab/Rosaline_film_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 374
	},
	{
		title: 'All Quiet on the Western Front',
		year: 2022,
		cast: [
			'Daniel Brühl',
			'Felix Kammerer',
			'Albrecht Schuch',
			'Sebastian Hülk',
			'Aaron Hilmer',
			'Edin Hasanovic',
			'Devid Striesow'
		],
		genres: ['War'],
		href: 'All_Quiet_on_the_Western_Front_(2022_film)',
		extract:
			'All Quiet on the Western Front is a 2022 German epic anti-war film based on the 1929 novel of the same name by Erich Maria Remarque. It is the third film adaptation of the book, after the 1930 and 1979 versions. Directed by Edward Berger, it stars Felix Kammerer, Albrecht Schuch, Daniel Brühl, Sebastian Hülk, Aaron Hilmer, Edin Hasanovic, and Devid Striesow.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/c/c3/All_quiet_on_the_western_front_%282022_film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 312
	},
	{
		title: 'Raymond & Ray',
		year: 2022,
		cast: ['Ewan McGregor', 'Ethan Hawke', 'Maribel Verdú', 'Sophie Okonedo'],
		genres: ['Comedy', 'Drama'],
		href: 'Raymond_%26_Ray',
		extract:
			'Raymond & Ray is a 2022 comedy-drama film written and directed by Rodrigo García. The film stars Ewan McGregor, Ethan Hawke, Maribel Verdú, and Sophie Okonedo.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/90/Raymond_and_Ray_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Stars at Noon',
		year: 2022,
		cast: ['Margaret Qualley', 'Joe Alwyn', 'Benny Safdie', 'Danny Ramirez', 'John C. Reilly'],
		genres: ['Thriller', 'Romance'],
		href: 'Stars_at_Noon_(2022_film)',
		extract:
			"Stars at Noon is a 2022 English-language French romantic thriller film directed by Claire Denis, based on the 1986 novel The Stars at Noon by Denis Johnson, starring Margaret Qualley, Joe Alwyn, Benny Safdie, Danny Ramirez, and John C. Reilly. The film was selected to compete for the Palme d'Or at the 2022 Cannes Film Festival, where it won the Grand Prix.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Stars_at_Noon.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Curse of Bridge Hollow',
		year: 2022,
		cast: [
			'Marlon Wayans',
			'Priah Ferguson',
			'Kelly Rowland',
			'Lauren Lapkus',
			'Rob Riggle',
			'Dave Sheridan',
			'Nia Vardalos'
		],
		genres: ['Comedy', 'Horror'],
		href: 'The_Curse_of_Bridge_Hollow',
		extract:
			'The Curse of Bridge Hollow is a 2022 American comedy horror film directed by Jeff Wadlow from a screenplay by Todd Berger and Robert Rugan. Starring Marlon Wayans, Priah Ferguson, Kelly Rowland, John Michael Higgins, Lauren Lapkus, Rob Riggle, and Nia Vardalos, the film was released by Netflix on October 14, 2022.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/77/The_Curse_of_Bridge_Hollow.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Bitch Ass',
		year: 2022,
		cast: ['Tony Todd'],
		genres: ['Crime', 'Horror'],
		href: 'Bitch_Ass',
		extract:
			'Bitch Ass is a 2022 American crime horror film directed by Bill Posley and starring Tony Todd. It is Posley’s feature directorial debut.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Bitch_ass.jpeg',
		thumbnail_width: 268,
		thumbnail_height: 372
	},
	{
		title: 'The School for Good and Evil',
		year: 2022,
		cast: [
			'Sophia Anne Caruso',
			'Sofia Wylie',
			'Laurence Fishburne',
			'Michelle Yeoh',
			'Jamie Flatters',
			'Kit Young',
			'Peter Serafinowicz',
			'Kerry Washington',
			'Charlize Theron'
		],
		genres: ['Fantasy'],
		href: 'The_School_for_Good_and_Evil_(film)',
		extract:
			'The School for Good and Evil is a 2022 American fantasy film directed by Paul Feig, who co-wrote the screenplay with David Magee, based on the 2013 novel of the same name by Soman Chainani. The film stars an ensemble cast led by Sophia Anne Caruso as Sophie and Sofia Wylie as Agatha, two best friends who are sent to the Schools for Good and Evil. After their fortunes are seemingly reversed, their friendship is put to the test.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/c/c5/The_School_for_Good_and_Evil_movie_poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Good Nurse',
		year: 2022,
		cast: ['Jessica Chastain', 'Eddie Redmayne', 'Nnamdi Asomugha', 'Kim Dickens', 'Noah Emmerich'],
		genres: ['Crime', 'Drama', 'Biography'],
		href: 'The_Good_Nurse',
		extract:
			'The Good Nurse is a 2022 American biographical crime drama film, starring Jessica Chastain and Eddie Redmayne, about Amy Loughren, a night nurse, who suspects that her co-worker Charles Cullen is a serial killer. The film is based on the 2013 true-crime book of the same name by Charles Graeber. It is directed by Tobias Lindholm and written by Krysty Wilson-Cairns. The film also stars Nnamdi Asomugha, Kim Dickens, and Noah Emmerich.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/03/Good_nurse.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'V/H/S/99',
		year: 2022,
		cast: [
			'Luke Mullen',
			'Tyler Lofton',
			'Isabelle Hahn',
			'Verona Blue',
			'Dashiell Derrickson',
			'Tybee Diskin',
			'Steven Ogg',
			'Joseph Winter',
			'Melanie Stone'
		],
		genres: ['Found Footage', 'Horror'],
		href: 'V/H/S/99',
		extract:
			"V/H/S/99 is a 2022 American found footage horror anthology film, and the fifth installment in the V/H/S franchise. The film features segments from Johannes Roberts, Vanessa & Joseph Winter, Maggie Levin, Tyler MacIntyre and Flying Lotus. It premiered September 16, 2022 in the Midnight Madness category of the 2022 Toronto International Film Festival. It was released as a Shudder Original Film on October 20, 2022. Upon its release, the film broke streaming records on Shudder and became the platform's most-viewed premiere, a title which was held by the earlier entry, V/H/S/94.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f4/VHS99-movieposter.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Black Adam',
		year: 2022,
		cast: [
			'Dwayne Johnson',
			'Aldis Hodge',
			'Noah Centineo',
			'Sarah Shahi',
			'Marwan Kenzari',
			'Quintessa Swindell',
			'Mohammed Amer',
			'Bodhi Sabongui',
			'Pierce Brosnan'
		],
		genres: ['Superhero'],
		href: 'Black_Adam_(film)',
		extract:
			'Black Adam is a 2022 American superhero film based on the DC character of the same name. Produced by New Line Cinema, DC Films, Seven Bucks Productions, and FlynnPictureCo. and distributed by Warner Bros. Pictures, it is a spin-off to Shazam! (2019) and the 11th film in the DC Extended Universe (DCEU). The film was directed by Jaume Collet-Serra from a screenplay by Adam Sztykiel, Rory Haines, and Sohrab Noshirvani. It stars Dwayne Johnson as Teth-Adam / Black Adam, an ancient superhuman who is released from his magic imprisonment by a group of archeologists to free the nation of Kahndaq from the crime syndicate Intergang, whose local leader plans to obtain an ancient relic called the Crown of Sabbac to take control of the nation. Aldis Hodge, Noah Centineo, Sarah Shahi, Marwan Kenzari, Quintessa Swindell, and Pierce Brosnan appear in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'Ticket to Paradise',
		year: 2022,
		cast: [
			'George Clooney',
			'Julia Roberts',
			'Kaitlyn Dever',
			'Billie Lourd',
			'Maxime Bouttier',
			'Lucas Bravo'
		],
		genres: ['Comedy', 'Romance'],
		href: 'Ticket_to_Paradise_(2022_film)',
		extract:
			'Ticket to Paradise is a 2022 romantic comedy film starring George Clooney and Julia Roberts as a divorced couple who team up to sabotage the impending wedding of their daughter in Bali. The film is directed by Ol Parker and written by Parker and Daniel Pipski, while Kaitlyn Dever, Billie Lourd, Maxime Bouttier, and Lucas Bravo also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Ticket_to_Paradise_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 396
	},
	{
		title: 'Wendell & Wild',
		year: 2022,
		cast: [
			'Keegan-Michael Key',
			'Jordan Peele',
			'Lyric Ross',
			'Angela Bassett',
			'James Hong',
			'Ving Rhames'
		],
		genres: ['Animated', 'Comedy', 'Horror', 'Erotic'],
		href: 'Wendell_%26_Wild',
		extract:
			"Wendell & Wild is a 2022 American stop motion adult animated horror comedy film directed by Henry Selick from a screenplay written by Selick and Jordan Peele, based on Selick's and Clay McLeod Chapman's unpublished book of the same name. It stars Keegan-Michael Key and Jordan Peele as the titular characters with Angela Bassett, Lyric Ross, James Hong, and Ving Rhames in supporting roles. This was Selick's first feature film since Coraline (2009).",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/24/Wendell_%26_Wild_poster.jpg',
		thumbnail_width: 251,
		thumbnail_height: 372
	},
	{
		title: 'The Banshees of Inisherin',
		year: 2022,
		cast: ['Colin Farrell', 'Brendan Gleeson', 'Kerry Condon', 'Barry Keoghan'],
		genres: ['Comedy'],
		href: 'The_Banshees_of_Inisherin',
		extract:
			"The Banshees of Inisherin is a 2022 black tragicomedy film directed, written, and produced by Martin McDonagh. Set on a remote, fictional island off the west coast of Ireland, the film stars Colin Farrell and Brendan Gleeson as two lifelong friends who find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them. Kerry Condon and Barry Keoghan also star. It reunites Farrell and Gleeson, who previously worked together on McDonagh's directorial debut, In Bruges (2008).",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6e/The_Banshees_of_Inisherin.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'My Policeman',
		year: 2022,
		cast: [
			'Harry Styles',
			'Emma Corrin',
			'David Dawson',
			'Linus Roache',
			'Gina McKee',
			'Rupert Everett'
		],
		genres: ['Drama', 'Romance'],
		href: 'My_Policeman_(film)',
		extract:
			'My Policeman is a 2022 American romantic drama film based on the 2012 novel of the same name by Bethan Roberts and directed by Michael Grandage. The film stars Harry Styles, Emma Corrin, Gina McKee, Linus Roache, David Dawson, and Rupert Everett.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/34/My_Policeman_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Aftersun',
		year: 2022,
		cast: ['Paul Mescal', 'Francesca Corio', 'Celia Rowlson-Hall'],
		genres: ['Drama'],
		href: 'Aftersun',
		extract:
			'Aftersun is a 2022 coming-of-age drama film written and directed by Charlotte Wells, starring Paul Mescal, Frankie Corio and Celia Rowlson-Hall. Set in the late 1990s, the film follows Sophie, an 11-year-old girl, on holiday with her father at a Turkish resort on the eve of his 31st birthday.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/11/Aftersun.jpg',
		thumbnail_width: 253,
		thumbnail_height: 375
	},
	{
		title: 'Detective Knight: Rogue',
		year: 2022,
		cast: ['Bruce Willis', 'Lochlyn Munro', 'Jimmy Jean-Louis'],
		genres: ['Action', 'War'],
		href: 'Detective_Knight:_Rogue',
		extract:
			'Detective Knight: Rogue is a 2022 American action film directed by Edward John Drake, from a screenplay by Drake and Corey Large, and produced by Large, Randall Emmett, and George Furla. Serving as the first installment of the Detective Knight trilogy, it stars Bruce Willis, Lochlyn Munro, and Jimmy Jean-Louis.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/75/Detective_Knight_Rogue_poster.png',
		thumbnail_width: 258,
		thumbnail_height: 386
	},
	{
		title: 'The Return of Tanya Tucker: Featuring Brandi Carlile',
		year: 2022,
		cast: ['Tanya Tucker', 'Brandi Carlile'],
		genres: ['Documentary'],
		href: 'The_Return_of_Tanya_Tucker:_Featuring_Brandi_Carlile',
		extract:
			"The Return of Tanya Tucker: Featuring Brandi Carlile is an 2022 American documentary film, directed and produced by Kathlyn Horan. It follows Tanya Tucker returning to the studio to record her first album in 10 years, While I'm Livin', collaborating with Brandi Carlile.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/1/1a/Return_of_tanya_tucker_featuring_brandi_carlile.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Armageddon Time',
		year: 2022,
		cast: ['Anne Hathaway', 'Jeremy Strong', 'Banks Repeta', 'Jaylin Webb', 'Anthony Hopkins'],
		genres: ['Drama'],
		href: 'Armageddon_Time',
		extract:
			"Armageddon Time is a 2022 American coming-of-age drama film written, directed, and produced by James Gray. The film stars Anne Hathaway, Jeremy Strong, Banks Repeta, Jaylin Webb, and Anthony Hopkins. Inspired by Gray's childhood experiences, the story follows a young Jewish-American boy who befriends an African-American classmate and begins to struggle with expectations from his family and growing up in a world of privilege, inequality and prejudice. It was shot in New Jersey and in Fresh Meadows, Queens, New York where the director James Gray grew up with cinematographer Darius Khondji.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Armageddon_Time_Poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Call Jane',
		year: 2022,
		cast: [
			'Elizabeth Banks',
			'Sigourney Weaver',
			'Chris Messina',
			'Kate Mara',
			'Wunmi Mosaku',
			'Cory Michael Smith',
			'Grace Edwards',
			'John Magaro'
		],
		genres: ['Drama'],
		href: 'Call_Jane',
		extract:
			'Call Jane is a 2022 American drama film starring Elizabeth Banks as a suburban housewife in the 1960s who deals with a life-threatening pregnancy. The film also stars Sigourney Weaver, Chris Messina, Kate Mara, Wunmi Mosaku, Cory Michael Smith, Grace Edwards, and John Magaro. It is directed by Phyllis Nagy. The screenplay was written by Hayley Schore and Roshan Sethi.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/df/Call_Jane_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'Causeway',
		year: 2022,
		cast: [
			'Jennifer Lawrence',
			'Brian Tyree Henry',
			'Linda Emond',
			'Jayne Houdyshell',
			'Stephen McKinley Henderson',
			'Russell Harvard'
		],
		genres: ['Drama'],
		href: 'Causeway_(film)',
		extract:
			'Causeway is a 2022 American drama film directed by Lila Neugebauer in her feature directorial debut and written by Ottessa Moshfegh, Luke Goebel, and Elizabeth Sanders. The film stars Jennifer Lawrence, Brian Tyree Henry, Linda Emond, Jayne Houdyshell, Stephen McKinley Henderson, and Russell Harvard. It follows a soldier struggling to adjust to her life after returning home to New Orleans.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Causeway_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 375
	},
	{
		title: 'Prey for the Devil',
		year: 2022,
		cast: [
			'Jacqueline Byers',
			'Colin Salmon',
			'Christian Navarro',
			'Lisa Palfrey',
			'Nicholas Ralph',
			'Ben Cross',
			'Virginia Madsen'
		],
		genres: ['Horror', 'Supernatural'],
		href: 'Prey_for_the_Devil',
		extract:
			'Prey for the Devil is a 2022 American supernatural horror film directed by Daniel Stamm and stars Jacqueline Byers, Colin Salmon, Christian Navarro, Lisa Palfrey, Nicholas Ralph, Virginia Madsen, and Ben Cross.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/68/The_Devil%27s_Light_Poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Run Sweetheart Run',
		year: 2022,
		cast: [
			'Ella Balinska',
			'Pilou Asbæk',
			'Clark Gregg',
			'Aml Ameen',
			'Dayo Okeniyi',
			'Betsy Brandt',
			'Shohreh Aghdashloo'
		],
		genres: ['Horror', 'Supernatural'],
		href: 'Run_Sweetheart_Run',
		extract:
			'Run Sweetheart Run is a 2020 American supernatural horror film directed by Shana Feste from a screenplay by Feste, Keith Josef Adkins and Kellee Terrell. The film stars Ella Balinska, Pilou Asbæk, Dayo Okeniyi, Betsy Brandt, Ava Grey, Lamar Johnson, Jess Gabor, Clark Gregg, and Shohreh Aghdashloo.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Run_Sweetheart_Run.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Wonder',
		year: 2022,
		cast: [
			'Florence Pugh',
			'Tom Burke',
			'Niamh Algar',
			'Elaine Cassidy',
			'Dermot Crowley',
			"Brían F. O'Byrne",
			'David Wilmot',
			'Ruth Bradley',
			'Caolán Byrne',
			'Josie Walker',
			'Ciarán Hinds',
			'Toby Jones',
			'Kíla Lord Cassidy'
		],
		genres: ['Drama', 'Historical'],
		href: 'The_Wonder_(film)',
		extract:
			"The Wonder is a 2022 period psychological drama film directed by Sebastián Lelio. Emma Donoghue, Lelio, and Alice Birch wrote the screenplay based on the 2016 novel of the same name by Donoghue. Set shortly after the Great Famine, it follows an English nurse sent to a rural Irish village to observe a young 'fasting girl', who is seemingly able to miraculously survive without eating. Florence Pugh leads an ensemble cast that includes Tom Burke, Niamh Algar, Elaine Cassidy, Dermot Crowley, Brían F. O'Byrne, David Wilmot, Ruth Bradley, Caolán Byrne, Josie Walker, Ciarán Hinds, Toby Jones, and Kíla Lord Cassidy.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/21/The_Wonder_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'The Independent',
		year: 2022,
		cast: [
			'Brian Cox',
			'Jodie Turner-Smith',
			'Luke Kirby',
			'Ann Dowd',
			'John Cena',
			'Stephen Lang'
		],
		genres: ['Political'],
		href: 'The_Independent_(2022_film)',
		extract:
			'The Independent is a 2022 American political film directed by Amy Rice and written by Evan Parter. It stars Jodie Turner-Smith, Brian Cox, Luke Kirby, Stephen Lang, Ann Dowd, and John Cena. The plot centers around a reporter who uncovers a conspiracy that could impact the results of an upcoming presidential election. The film was released on streaming by Peacock on November 2, 2022.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/a/a2/The_Independent_%282022_film%29_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Enola Holmes 2',
		year: 2022,
		cast: [
			'Millie Bobby Brown',
			'Henry Cavill',
			'David Thewlis',
			'Louis Partridge',
			'Susie Wokoma',
			'Adeel Akhtar',
			'Sharon Duncan-Brewster',
			'Helena Bonham Carter'
		],
		genres: ['Mystery'],
		href: 'Enola_Holmes_2',
		extract:
			"Enola Holmes 2 is a 2022 mystery film and the sequel to the 2020 film Enola Holmes, both of which star Millie Bobby Brown as the title character, the teenage sister of the already-famous Victorian-era detective Sherlock Holmes. The film is directed by Harry Bradbeer from a screenplay by Jack Thorne that adapts the book series The Enola Holmes Mysteries by Nancy Springer. Unlike its predecessor, the film does not adapt one of Springer's novels and instead takes real-life inspiration from the 1888 matchgirls' strike. In addition to Brown, Henry Cavill, Louis Partridge, Susie Wokoma, Adeel Akhtar, and Helena Bonham Carter reprise their supporting roles, while David Thewlis and Sharon Duncan-Brewster join the cast.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Enola_Holmes_2_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: "My Father's Dragon",
		year: 2022,
		cast: [
			'Jacob Tremblay',
			'Gaten Matarazzo',
			'Golshifteh Farahani',
			'Dianne Wiest',
			'Rita Moreno',
			"Chris O'Dowd",
			'Judy Greer',
			'Alan Cumming',
			'Yara Shahidi',
			'Jackie Earle Haley',
			'Whoopi Goldberg',
			'Ian McShane'
		],
		genres: ['Adventure', 'Animated', 'Comedy', 'Fantasy'],
		href: 'My_Father%27s_Dragon_(2022_film)',
		extract:
			"My Father's Dragon is a 2022 2D-animated fantasy adventure comedy film directed by Nora Twomey with a screenplay by Meg LeFauve who co-wrote the story with John Morgan. It is based on the 1948 children's novel of the same name by Ruth Stiles Gannett. The film is also dedicated to Morgan who had since died. It stars the voices of Jacob Tremblay, Gaten Matarazzo, Golshifteh Farahani, Dianne Wiest, Rita Moreno, Chris O'Dowd, Judy Greer, Alan Cumming, Yara Shahidi, Jackie Earle Haley, Whoopi Goldberg, and Ian McShane.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/77/My_Father%27s_Dragon_poster.jpg',
		thumbnail_width: 251,
		thumbnail_height: 372
	},
	{
		title: 'Weird: The Al Yankovic Story',
		year: 2022,
		cast: ['Daniel Radcliffe', 'Evan Rachel Wood', 'Rainn Wilson'],
		genres: ['Biography', 'Satire'],
		href: 'Weird:_The_Al_Yankovic_Story',
		extract:
			"Weird: The Al Yankovic Story is a 2022 American biographical parody film directed by Eric Appel, who co-wrote the screenplay with Al Yankovic. The film is a satire of biopics and is loosely based on Yankovic's life and career as an accordionist and parody songwriter. It stars Daniel Radcliffe as Yankovic, along with Evan Rachel Wood, Rainn Wilson, Toby Huss, Arturo Castro, and Julianne Nicholson in supporting roles.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Weird_The_Al_Yankovic_Story.jpg',
		thumbnail_width: 240,
		thumbnail_height: 350
	},
	{
		title: 'The Estate',
		year: 2022,
		cast: [
			'Toni Collette',
			'Anna Faris',
			'David Duchovny',
			'Rosemarie DeWitt',
			'Ron Livingston',
			'Keyla Monterroso Mejia',
			'Kathleen Turner'
		],
		genres: ['Comedy'],
		href: 'The_Estate_(2022_film)',
		extract:
			'The Estate is a 2022 black comedy written and directed by Dean Craig. It stars Toni Collette and Anna Faris as sisters who try to get back in the good graces of their estranged aunt before she passes to inherit some of her fortune. The film was released on November 4, 2022, by Signature Entertainment.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/99/The_Estate_2022_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'On the Line',
		year: 2022,
		cast: ['Mel Gibson', 'Kevin Dillon'],
		genres: ['Thriller'],
		href: 'On_the_Line_(2022_film)',
		extract:
			'On the Line is a 2022 thriller film written, produced, and directed by Romuald Boulanger and starring Mel Gibson.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/af/On_the_Line_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 344
	},
	{
		title: 'Dear Zoe',
		year: 2022,
		cast: [
			'Sadie Sink',
			'Theo Rossi',
			'Kweku Collins',
			'Jessica Capshaw',
			'Justin Bartha',
			'Vivien Lyra Blair'
		],
		genres: ['Drama'],
		href: 'Dear_Zoe_(film)',
		extract:
			'Dear Zoe is a 2022 American drama film directed by Gren Wells from a screenplay by Marc Lhormer and Melissa Martin. It is an adaptation of the 2005 novel of the same name by Philip Beard. The film stars Sadie Sink, Theo Rossi, Kweku Collins, Jessica Capshaw, Justin Bartha, and Vivien Lyra Blair.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/db/Dear_Zoe_2022_film_poster.png',
		thumbnail_width: 260,
		thumbnail_height: 383
	},
	{
		title: 'Something in the Dirt',
		year: 2022,
		cast: ['Justin Benson', 'Aaron Moorhead'],
		genres: ['Comedy', 'Horror', 'Science Fiction'],
		href: 'Something_in_the_Dirt',
		extract:
			'Something in the Dirt is a 2022 American science fiction comedy horror film written by Justin Benson and directed by and starring Benson and Aaron Moorhead. It is the fifth feature film by the directing duo.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/23/Something_in_the_Dirt.jpg',
		thumbnail_width: 253,
		thumbnail_height: 374
	},
	{
		title: 'Good Night Oppy',
		year: 2022,
		cast: [],
		genres: ['Documentary'],
		href: 'Good_Night_Oppy',
		extract:
			'Good Night Oppy is a 2022 American documentary film directed by Ryan White and narrated by Angela Bassett. It had its world premiere at the 2022 Telluride Film Festival on September 3, 2022. It was released in a limited release on November 4, 2022, by Amazon Studios, prior to streaming on Prime Video on November 23, 2022.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/df/Good_Night_Oppy.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: "Guillermo del Toro's Pinocchio",
		year: 2022,
		cast: [
			'Ewan McGregor',
			'David Bradley',
			'Gregory Mann',
			'Burn Gorman',
			'Ron Perlman',
			'John Turturro',
			'Finn Wolfhard',
			'Cate Blanchett',
			'Tim Blake Nelson',
			'Christoph Waltz',
			'Tilda Swinton'
		],
		genres: ['Fantasy', 'Musical', 'Animated'],
		href: 'Guillermo_del_Toro%27s_Pinocchio',
		extract:
			"Guillermo del Toro's Pinocchio is a 2022 musical dark fantasy film made through stop-motion animation directed by Guillermo del Toro and Mark Gustafson, with a screenplay by del Toro and Patrick McHale. Matthew Robbins and del Toro's modified Pinocchio story, drawing from the 1883 Italian novel The Adventures of Pinocchio by Carlo Collodi, was strongly influenced by Gris Grimly's illustrations for a 2002 edition of the book. The film reimagines the adventures of Pinocchio, a wooden puppet who comes to life as the son of his carver Geppetto. It is \"a story of love and disobedience as Pinocchio struggles to live up to his father's expectations, learning the true meaning of life\". Set in Fascist Italy during the interwar period and World War II, the film stars the voice of Gregory Mann as Pinocchio and David Bradley as Geppetto, alongside Ewan McGregor, Burn Gorman, Ron Perlman, John Turturro, Finn Wolfhard, Cate Blanchett, Tim Blake Nelson, Christoph Waltz, and Tilda Swinton.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/4/4a/Pinocchio_%282022_animated_film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Falling for Christmas',
		year: 2022,
		cast: ['Lindsay Lohan', 'Chord Overstreet', 'George Young', 'Jack Wagner', 'Aliana Lohan'],
		genres: ['Comedy', 'Romance'],
		href: 'Falling_for_Christmas',
		extract:
			'Falling for Christmas is a 2022 American Christmas romantic comedy film starring Lindsay Lohan as a spoiled heiress who loses her memory in a skiing accident and lands in the care of a lodge owner widower at Christmastime. The film is directed by Janeen Damian, in her directorial debut, from a screenplay by Jeff Bonnett and Ron Oliver. Chord Overstreet, George Young, Jack Wagner and Olivia Perez also appear in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/35/Falling_for_Christmas_poster.png',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'Black Panther: Wakanda Forever',
		year: 2022,
		cast: [
			'Letitia Wright',
			"Lupita Nyong'o",
			'Danai Gurira',
			'Winston Duke',
			'Florence Kasumba',
			'Dominique Thorne',
			'Michaela Coel',
			'Tenoch Huerta Mejía',
			'Martin Freeman',
			'Julia Louis-Dreyfus',
			'Angela Bassett'
		],
		genres: ['Superhero'],
		href: 'Black_Panther:_Wakanda_Forever',
		extract:
			"Black Panther: Wakanda Forever is a 2022 American superhero film based on Marvel Comics featuring the character Shuri / Black Panther. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Black Panther (2018) and the 30th film in the Marvel Cinematic Universe (MCU). Directed by Ryan Coogler, who co-wrote the screenplay with Joe Robert Cole, the film stars Letitia Wright as Shuri / Black Panther, alongside Lupita Nyong'o, Danai Gurira, Winston Duke, Florence Kasumba, Dominique Thorne, Michaela Coel, Mabel Cadena, Tenoch Huerta Mejía, Martin Freeman, Julia Louis-Dreyfus, and Angela Bassett. In the film, the leaders of Wakanda fight to protect their nation in the wake of King T'Challa's death.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/3b/Black_Panther_Wakanda_Forever_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'The Fabelmans',
		year: 2022,
		cast: ['Michelle Williams', 'Paul Dano', 'Seth Rogen', 'Gabriel LaBelle', 'Judd Hirsch'],
		genres: ['Drama'],
		href: 'The_Fabelmans',
		extract:
			"The Fabelmans is a 2022 American coming-of-age drama film directed by Steven Spielberg, who co-wrote and produced it with Tony Kushner. The film is a semi-autobiographical story loosely based on Spielberg's adolescence and first years as a filmmaker. It's told through an original story of the fictional Sammy Fabelman, a young aspiring filmmaker who explores how the power of films can help him see the truth about his dysfunctional family and those around him. It stars Gabriel LaBelle as Sammy, alongside Michelle Williams, Paul Dano, Seth Rogen, and Judd Hirsch in supporting roles. The film is dedicated to the memories of Spielberg's real-life parents, Leah Adler and Arnold Spielberg, who died in 2017 and 2020, respectively.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Fabelmansposter.jpeg',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: 'Spirited',
		year: 2022,
		cast: ['Will Ferrell', 'Ryan Reynolds', 'Octavia Spencer'],
		genres: ['Comedy', 'Musical'],
		href: 'Spirited_(film)',
		extract:
			'Spirited is a 2022 American Christmas musical comedy film directed by Sean Anders, and written and produced by Anders and John Morris. It is a modern retelling of Charles Dickens\'s 1843 novella A Christmas Carol and a satire of the various adaptations since. The film stars Will Ferrell, Ryan Reynolds, Octavia Spencer, Sunita Mani, Patrick Page, Marlow Barkley, and Tracy Morgan. In the film, The Ghost of Christmas Present is nearing retirement, which would mean a return to Earth. He sets his sights on an "unredeemable" man named Clint Briggs, who ends up helping the Ghost come to terms with his own past.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Spirited_poster.png',
		thumbnail_width: 240,
		thumbnail_height: 360
	},
	{
		title: 'Paradise City',
		year: 2022,
		cast: ['John Travolta', 'Bruce Willis'],
		genres: ['Action'],
		href: 'Paradise_City_(film)',
		extract:
			'Paradise City is a 2022 American action film directed by Chuck Russell and written by Russell, Corey Large, and Edward John Drake. It stars Bruce Willis and John Travolta.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/64/Paradise_City_poster.png',
		thumbnail_width: 261,
		thumbnail_height: 382
	},
	{
		title: 'Poker Face',
		year: 2022,
		cast: ['Russell Crowe', 'Liam Hemsworth', 'Elsa Pataky', 'RZA'],
		genres: ['Thriller'],
		href: 'Poker_Face_(film)',
		extract:
			'Poker Face is a 2022 Australian-American thriller film written by, directed by and starring Russell Crowe. It co-stars Liam Hemsworth and RZA. The film had a limited theatrical release on November 16, 2022 and was released on demand on November 22, 2022.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Poker_Face_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'A Christmas Story Christmas',
		year: 2022,
		cast: [
			'Peter Billingsley',
			'Erinn Hayes',
			'Ian Petrella',
			'R. D. Robb',
			'Scott Schwartz',
			'Zack Ward',
			'Julie Hagerty'
		],
		genres: ['Comedy'],
		href: 'A_Christmas_Story_Christmas',
		extract:
			"A Christmas Story Christmas is a 2022 American Christmas comedy film directed by Clay Kaytis with a script he co-wrote with Nick Schenk, from an original story co-written by Schenk and Peter Billingsley. It is a legacy sequel to A Christmas Story (1983) and is the eighth installment in the Parker Family Saga franchise, while ignoring the events of My Summer Story (1994) and A Christmas Story 2 (2012). The film was produced by Billingsley and Vince Vaughn along with Cale Boyter, Jay Ashenfelter, Marc Toberoff and Irwin Zwilling. Billingsley reprises his role as Ralphie Parker alongside Ian Petrella, Scott Schwartz, R. D. Robb, Zack Ward, and Yano Anaya returning as Randy Parker, Flick, Schwartz, Scut Farkus, and Grover Dill, respectively. Erinn Hayes, River Drosche, and Julianna Layne play Ralphie's wife and kids, with Julie Hagerty as Mrs. Parker. In the film, after the Old Man dies, Ralphie takes his family to his childhood home, reuniting with his mom and old friends, while being tasked to deliver a memorable Christmas.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/a/a7/A_Christmas_Story_Christmas_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'She Said',
		year: 2022,
		cast: [
			'Carey Mulligan',
			'Zoe Kazan',
			'Patricia Clarkson',
			'Andre Braugher',
			'Jennifer Ehle',
			'Samantha Morton',
			'Ashley Judd'
		],
		genres: ['Drama', 'Biography'],
		href: 'She_Said_(film)',
		extract:
			"She Said is a 2022 American biographical drama film directed by Maria Schrader and written by Rebecca Lenkiewicz, based on the 2019 book of the same title by reporters Jodi Kantor and Megan Twohey. The film stars Carey Mulligan and Zoe Kazan as Twohey and Kantor, respectively, and follows their New York Times investigation that exposed Harvey Weinstein's history of abuse and sexual misconduct against women. Patricia Clarkson, Andre Braugher, Jennifer Ehle, and Samantha Morton co-star, with Ashley Judd appearing as herself.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/50/She_said_film_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Menu',
		year: 2022,
		cast: [
			'Ralph Fiennes',
			'Anya Taylor-Joy',
			'Nicholas Hoult',
			'Hong Chau',
			'Janet McTeer',
			'Reed Birney',
			'Judith Light',
			'John Leguizamo'
		],
		genres: ['Comedy', 'Horror'],
		href: 'The_Menu_(2022_film)',
		extract:
			'The Menu is a 2022 American comedy horror film directed by Mark Mylod, written by Seth Reiss and Will Tracy, based on an original story created by Tracy, produced by Adam McKay, Betsy Koch and Will Ferrell, and starring Ralph Fiennes as a celebrity chef with Hong Chau playing his assistant and Anya Taylor-Joy, Nicholas Hoult, Janet McTeer, Reed Birney, Judith Light, and John Leguizamo playing diners who attend his exclusive restaurant.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/db/The_Menu_%282022_film%29.jpg',
		thumbnail_width: 220,
		thumbnail_height: 330
	},
	{
		title: 'Disenchanted',
		year: 2022,
		cast: ['Amy Adams', 'Patrick Dempsey', 'Maya Rudolph', 'Idina Menzel', 'James Marsden'],
		genres: ['Live Action', 'Animated', 'Comedy', 'Fantasy', 'Musical'],
		href: 'Disenchanted_(film)',
		extract:
			'Disenchanted is a 2022 American live-action/animated musical fantasy comedy film directed by Adam Shankman and written by Brigitte Hales, based on a story by Richard LaGravenese and the writing team of J. David Stem and David N. Weiss. Co-produced by Walt Disney Pictures, Josephson Entertainment, and Right Coast Productions, it is the sequel to the 2007 film Enchanted.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/93/Disenchanted.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Slumberland',
		year: 2022,
		cast: ['Jason Momoa', 'Marlow Barkley', "Chris O'Dowd", 'Kyle Chandler', 'Weruche Opia'],
		genres: ['Adventure', 'Fantasy'],
		href: 'Slumberland_(film)',
		extract:
			"Slumberland is a 2022 American fantasy adventure film directed by Francis Lawrence and written by David Guion and Michael Handelman. Based on the comic strip Little Nemo in Slumberland by Winsor McCay, the film stars Jason Momoa, Marlow Barkley, Chris O'Dowd, Kyle Chandler, and Weruche Opia. It tells the story of a young girl who goes to live with her uncle after her father is lost at sea and enters Slumberland where she befriends a renegade character who is involved in a plot to get to the Sea of Nightmares and obtain a special pearl that may have the power to reunite her with her father.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/77/Slumberland_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Bones and All',
		year: 2022,
		cast: [
			'Taylor Russell',
			'Timothée Chalamet',
			'Michael Stuhlbarg',
			'André Holland',
			'Chloë Sevigny',
			'David Gordon Green',
			'Jessica Harper',
			'Jake Horowitz',
			'Mark Rylance'
		],
		genres: ['Horror', 'Romance'],
		href: 'Bones_and_All',
		extract:
			'Bones and All is a 2022 romantic horror film directed by Luca Guadagnino from a screenplay by David Kajganich, based on the 2015 novel Bones & All by Camille DeAngelis. The film stars Taylor Russell and Timothée Chalamet as a pair of young cannibals who flee together on a road trip across the country and develop feelings for each other. Michael Stuhlbarg, André Holland, Chloë Sevigny, David Gordon Green, Jessica Harper, Jake Horowitz, and Mark Rylance appear in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Bones_and_All.jpg',
		thumbnail_width: 264,
		thumbnail_height: 377
	},
	{
		title: 'The Inspection',
		year: 2022,
		cast: [
			'Jeremy Pope',
			'Raúl Castillo',
			'McCaul Lombardi',
			'Aaron Dominguez',
			'Nicholas Logan',
			'Eman Esfandi',
			'Andrew Kai',
			'Aubrey Joseph',
			'Bokeem Woodbine',
			'Gabrielle Union'
		],
		genres: ['Drama'],
		href: 'The_Inspection',
		extract:
			"The Inspection is a 2022 American drama film written and directed by Elegance Bratton. Inspired by Bratton's real-life experiences, the film follows a young gay black man who defiantly endures brutal training at a Marine Corps boot camp, seeking approval from his homophobic mother. It stars Jeremy Pope, Raúl Castillo, McCaul Lombardi, Aaron Dominguez, Nicholas Logan, Eman Esfandi, Andrew Kai, Aubrey Joseph, Bokeem Woodbine, and Gabrielle Union.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3a/The_Inspection_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Scrooge: A Christmas Carol',
		year: 2022,
		cast: [
			'Luke Evans',
			'Olivia Colman',
			'Jessie Buckley',
			'Jonathan Pryce',
			'Johnny Flynn',
			'James Cosmo'
		],
		genres: ['Animated', 'Comedy', 'Drama', 'Fantasy', 'Musical'],
		href: 'Scrooge:_A_Christmas_Carol',
		extract:
			"Scrooge: A Christmas Carol is a 2022 computer-animated musical fantasy comedy drama film directed by Stephen Donnelly from a screenplay by both Donnelly and the late Leslie Bricusse, adapted from the 1970 film Scrooge, in turn based on the novel A Christmas Carol by Charles Dickens. Produced by Timeless Films, the film features the voices of Luke Evans, Olivia Colman, Jessie Buckley, Jonathan Pryce, Johnny Flynn, James Cosmo and Trevor Dion Nicholas. It was released in select theaters on November 18, 2022, and made its streaming release in Netflix on December 2 of the same year. The film is dedicated to Leslie Bricusse, who died a year before the film's release. The film received mixed reviews from critics.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/3e/Scrooge_A_Christmas_Carol_poster.png',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'Lamborghini: The Man Behind the Legend',
		year: 2022,
		cast: ['Frank Grillo', 'Mira Sorvino', 'Gabriel Byrne'],
		genres: ['Drama', 'Biography'],
		href: 'Lamborghini:_The_Man_Behind_the_Legend',
		extract:
			'Lamborghini: The Man Behind the Legend is a 2022 American biographical drama film written and directed by Robert Moresco and starring Frank Grillo as Italian entrepreneur Ferruccio Lamborghini. It was released in select theaters in the United States on November 18, 2022, by Lionsgate.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/2/29/Lamborghini_-_The_Man_Behind_the_Legend_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The People We Hate at the Wedding',
		year: 2022,
		cast: ['Allison Janney', 'Kristen Bell', 'Ben Platt'],
		genres: ['Comedy'],
		href: 'The_People_We_Hate_at_the_Wedding',
		extract:
			'The People We Hate at the Wedding is a 2022 American comedy film directed by Claire Scanlon from a screenplay by the Molyneux sisters, based on the 2016 novel of the same name by Grant Ginder. It stars Allison Janney, Ben Platt, Cynthia Addai-Robinson, and Kristen Bell.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/f/fe/The_People_We_Hate_at_the_Wedding_film_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Strange World',
		year: 2022,
		cast: [
			'Jake Gyllenhaal',
			'Dennis Quaid',
			'Jaboukie Young-White',
			'Gabrielle Union',
			'Lucy Liu'
		],
		genres: ['Adventure', 'Animated', 'Science Fiction'],
		href: 'Strange_World_(film)',
		extract:
			"Strange World is a 2022 American computer-animated science-fiction adventure film produced by Walt Disney Animation Studios and distributed by Walt Disney Studios Motion Pictures. The 61st film produced by the studio, it was directed by Don Hall, co-directed by Qui Nguyen, and produced by Roy Conli, from a screenplay written by Nguyen, who also conceived the story with Hall. The film stars the voices of Jake Gyllenhaal, Dennis Quaid, Jaboukie Young-White, Gabrielle Union, and Lucy Liu. It is Disney's seventh animated film to tackle the sci-fi genre, after Big Hero 6 (2014). The film follows a legendary family of explorers, the Clades, who must set aside their differences as they embark on a journey to a mysterious subterranean land inhabited by surreal lifeforms, in order to save a miracle plant Pando that is their society's source of energy.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fe/Strange_World_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 331
	},
	{
		title: 'Glass Onion: A Knives Out Mystery',
		year: 2022,
		cast: [
			'Daniel Craig',
			'Edward Norton',
			'Janelle Monáe',
			'Kathryn Hahn',
			'Leslie Odom Jr.',
			'Jessica Henwick',
			'Madelyn Cline',
			'Kate Hudson',
			'Dave Bautista'
		],
		genres: ['Mystery'],
		href: 'Glass_Onion:_A_Knives_Out_Mystery',
		extract:
			'Glass Onion: A Knives Out Mystery is a 2022 American mystery film written and directed by Rian Johnson and produced by Johnson and Ram Bergman. It is a standalone sequel to the 2019 film Knives Out, with Daniel Craig reprising his role as master detective Benoit Blanc as he takes on a new case revolving around tech billionaire Miles Bron and his closest friends. The ensemble cast also includes Janelle Monáe, Kathryn Hahn, Leslie Odom Jr., Jessica Henwick, Madelyn Cline, Kate Hudson, and Dave Bautista.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/62/Glass_Onion_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Devotion',
		year: 2022,
		cast: ['Jonathan Majors', 'Glen Powell', 'Christina Jackson', 'Joe Jonas', 'Thomas Sadoski'],
		genres: ['War', 'Biography'],
		href: 'Devotion_(2022_film)',
		extract:
			'Devotion is a 2022 American biographical war film based on the 2015 book Devotion: An Epic Story of Heroism, Friendship, and Sacrifice by Adam Makos, which retells the comradeship between naval officers Jesse Brown and Tom Hudner during the Korean War. It is directed by J. D. Dillard and written by Jake Crane and Jonathan Stewart. The film stars Jonathan Majors as Brown and Glen Powell as Hudner, along with Christina Jackson, Daren Kagasoff, Joe Jonas, Nick Hargrove, Spencer Neville, and Thomas Sadoski in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Devotion_%282022_film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'Nanny',
		year: 2022,
		cast: [
			'Anna Diop',
			'Michelle Monaghan',
			'Sinqua Walls',
			'Morgan Spector',
			'Rose Spector',
			'Leslie Uggams'
		],
		genres: ['Horror'],
		href: 'Nanny_(film)',
		extract:
			'Nanny is a 2022 American psychological horror film written and directed by Nikyatu Jusu, in her feature directorial debut. The film stars Anna Diop, Michelle Monaghan, Sinqua Walls, Morgan Spector, Rose Decker, and Leslie Uggams. Jason Blum serves as an executive producer through his Blumhouse Television banner.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/84/Nanny_2022_film_poster.jpg',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'The Noel Diary',
		year: 2022,
		cast: ['Justin Hartley', 'Barrett Doss'],
		genres: ['Comedy', 'Drama', 'Romance'],
		href: 'The_Noel_Diary',
		extract:
			'The Noel Diary is a 2022 American Christmas romantic comedy-drama film directed by Charles Shyer and written by Rebecca Connor, David Golden, Charles Shyer, and Richard Paul Evans. The film stars Justin Hartley, Barrett Doss, Bonnie Bedelia, Essence Atkins, and James Remar.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a8/The_Noel_Diary_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 323
	},
	{
		title: 'White Noise',
		year: 2022,
		cast: [
			'Adam Driver',
			'Greta Gerwig',
			'Don Cheadle',
			'Raffey Cassidy',
			'Sam Nivola',
			'May Nivola',
			'Jodie Turner-Smith',
			'André Benjamin',
			'Bill Camp'
		],
		genres: ['Comedy', 'Drama'],
		href: 'White_Noise_(2022_film)',
		extract:
			"White Noise is a 2022 absurdist comedy-drama film, written and directed by Noah Baumbach, adapted from the 1985 novel with the same title by Don DeLillo. It is Baumbach's first directed feature not to be based on an original story of his own. The film stars Adam Driver, Greta Gerwig, Don Cheadle, Raffey Cassidy, Sam Nivola, and May Nivola. Set in the 1980s, the story follows the life of an academic and his family whose lives change after an air contamination accident near their home.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/54/White_Noise_%282022_film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Violent Night',
		year: 2022,
		cast: [
			'David Harbour',
			'John Leguizamo',
			'Alex Hassell',
			'Alexis Louder',
			'Edi Patterson',
			'Cam Gigandet',
			'Leah Brady',
			"Beverly D'Angelo"
		],
		genres: ['Action', 'Comedy'],
		href: 'Violent_Night',
		extract:
			"Violent Night is a 2022 American Christmas action comedy film directed by Tommy Wirkola and written by Pat Casey and Josh Miller. It follows Santa Claus as he fights mercenaries who have taken a wealthy family hostage in their home. The film also stars John Leguizamo, Alex Hassell, Alexis Louder, Edi Patterson, Cam Gigandet, Leah Brady, and Beverly D'Angelo.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Violent_Night_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 327
	},
	{
		title: 'Emancipation',
		year: 2022,
		cast: [
			'Will Smith',
			'Ben Foster',
			'Charmaine Bingwa',
			'Steven Ogg',
			'Mustafa Shakir',
			'Timothy Hutton'
		],
		genres: ['Action', 'Historical', 'Thriller'],
		href: 'Emancipation_(2022_film)',
		extract:
			'Emancipation is a 2022 American historical action thriller film set in Louisiana in the 1860s after President Abraham Lincoln issued the Emancipation Proclamation to end most slavery in the US. The film was directed by Antoine Fuqua and co-produced by Will Smith, who stars as a runaway slave headed for Baton Rouge. He must survive the swamps while being chased by slave catchers and their dogs. Written by William N. Collage, the biographical film is loosely based on a possibly conglomerated story of the lives of either or both of two formerly enslaved Black men named Gordon and "Whipped Peter". That story was made famous by the photograph of a man\'s bare back heavily scourged from an overseer\'s whippings, published worldwide as magazine illustrations in 1863, and gave the abolitionist movement proof of the cruelty of slavery. Ben Foster stars as a ruthless slave hunter and Charmaine Bingwa as an enslaved wife and mother. The film employs an artistic desaturated color palette reminiscent of black-and-white film.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Emancipation_Release_Poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 375
	},
	{
		title: 'Spoiler Alert',
		year: 2022,
		cast: ['Jim Parsons', 'Ben Aldridge', 'Sally Field'],
		genres: ['Drama', 'Biography', 'Romance'],
		href: 'Spoiler_Alert_(film)',
		extract:
			"Spoiler Alert is a 2022 American biographical romantic drama film starring Jim Parsons and Ben Aldridge as two lovers, one who watches the other's final months before his death from terminal cancer. The film, based on the 2017 memoir Spoiler Alert: The Hero Dies by Michael Ausiello, is directed by Michael Showalter and written by David Marshall Grant and Dan Savage. Parsons plays Ausiello, and Aldridge plays his lover Kit Cowan who dies of cancer.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Spoiler_Alert_film_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Diary of a Wimpy Kid: Rodrick Rules',
		year: 2022,
		cast: [
			'Brady Noon',
			'Ethan William Childress',
			'Hunter Dillon',
			'Chris Diamantopoulos',
			'Erica Cerra',
			'Ed Asner'
		],
		genres: ['Animated', 'Comedy'],
		href: 'Diary_of_a_Wimpy_Kid:_Rodrick_Rules_(2022_film)',
		extract:
			"Diary of a Wimpy Kid: Rodrick Rules is a 2022 computer-animated comedy film directed by Luke Cormican from a screenplay by Jeff Kinney, based on his 2008 book of the same name. It is a sequel to Diary of a Wimpy Kid (2021) and is the second adaptation of Rodrick Rules following the 2011 live-action film, while also being the second fully-animated film in the Diary of a Wimpy Kid film series and the sixth installment overall. Brady Noon, Ethan William Childress, Chris Diamantopoulos, Erica Cerra, and Hunter Dillon reprise their roles as characters from the first film, while Ed Asner posthumously portrays Grandpa Heffley. The film is one of Asner's final voice roles recorded before his death on August 29, 2021 and is dedicated to his memory.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/7/72/Diary_of_a_Wimpy_Kid_Rodrick_Rules_2022_poster.jpeg',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'Darby and the Dead',
		year: 2022,
		cast: [
			'Riele Downs',
			'Auliʻi Cravalho',
			'Chosen Jacobs',
			'Asher Angel',
			'Wayne Knight',
			'Derek Luke',
			'Tony Danza'
		],
		genres: ['Comedy', 'Supernatural', 'Teen', 'War'],
		href: 'Darby_and_the_Dead',
		extract:
			'Darby and the Dead is a 2022 American supernatural teen comedy film directed by Silas Howard, written by Wenonah Wilms and Becca Greene, and starring Riele Downs as Darby Harper, along with Auliʻi Cravalho, Chosen Jacobs, Asher Angel, Wayne Knight, Derek Luke, and Tony Danza.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/86/Darby_and_the_Dead_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: "Lady Chatterley's Lover",
		year: 2022,
		cast: ['Emma Corrin', "Jack O'Connell", 'Joely Richardson'],
		genres: ['Drama', 'Romance'],
		href: 'Lady_Chatterley%27s_Lover_(2022_film)',
		extract:
			"Lady Chatterley's Lover is a 2022 romantic drama film directed by Laure de Clermont-Tonnerre from a screenplay by David Magee based on the novel of the same name by D. H. Lawrence. The film stars Emma Corrin and Jack O'Connell.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/1/1c/Lady_Chatterley%27s_Lover_%282022_film%29.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'The Eternal Daughter',
		year: 2022,
		cast: ['Tilda Swinton', 'Joseph Mydell', 'Carly-Sophia Davies'],
		genres: ['Drama', 'Mystery'],
		href: 'The_Eternal_Daughter',
		extract:
			'The Eternal Daughter is a 2022 Gothic mystery drama film produced, written and directed by Joanna Hogg. It stars Tilda Swinton in a double role, playing both a middle-aged filmmaker and her elderly mother who are guests at a mysterious hotel. Joseph Mydell and Carly-Sophia Davies feature in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8d/The_Eternal_Daughter.jpeg',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'Matilda the Musical',
		year: 2022,
		cast: ['Alisha Weir', 'Lashana Lynch', 'Stephen Graham', 'Andrea Riseborough', 'Emma Thompson'],
		genres: ['Comedy', 'Drama', 'Fantasy', 'Musical', 'War'],
		href: 'Matilda_the_Musical_(film)',
		extract:
			"Roald Dahl's Matilda the Musical, or simply Matilda the Musical, is a 2022 musical fantasy comedy drama film directed by Matthew Warchus from a screenplay by Dennis Kelly, based on the stage musical of the same name by Kelly and Tim Minchin, which in turn is based on the 1988 novel Matilda by Roald Dahl. The film, co-produced by TriStar Pictures, Working Title Films, and The Roald Dahl Story Company, is the second film adaptation of the novel, following the 1996 film. The film stars Alisha Weir as the title character, alongside Lashana Lynch, Stephen Graham, Andrea Riseborough, Sindhu Vee, and Emma Thompson. In the film, Matilda Wormwood (Weir), who is neglected and mistreated by her parents, develops psychokinetic abilities to deal with Miss Trunchbull (Thompson), the ruthless and cruel headmistress of Crunchem Hall School.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/32/Matilda_the_Musical_UK_Film_Poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Empire of Light',
		year: 2022,
		cast: [
			'Olivia Colman',
			'Micheal Ward',
			'Tom Brooke',
			'Tanya Moodie',
			'Hannah Onslow',
			'Crystal Clarke',
			'Toby Jones',
			'Colin Firth'
		],
		genres: ['Drama', 'Romance'],
		href: 'Empire_of_Light',
		extract:
			'Empire of Light is a 2022 British romantic drama film directed, written, and co-produced by Sam Mendes. Set in an English coastal town in the early 1980s, the film is about the power of human connection during turbulent times. It stars Olivia Colman, Micheal Ward, Monica Dolan, Tom Brooke, Tanya Moodie, Hannah Onslow, Crystal Clarke, Toby Jones, and Colin Firth.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/14/Empire_of_Light_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Night at the Museum: Kahmunrah Rises Again',
		year: 2022,
		cast: [
			'Joshua Bassett',
			'Jamie Demetriou',
			'Alice Isaaz',
			'Gillian Jacobs',
			'Joseph Kamal',
			'Thomas Lennon',
			'Zachary Levi',
			'Jack Whitehall',
			'Bowen Yang',
			'Steve Zahn'
		],
		genres: ['Animated'],
		href: 'Night_at_the_Museum:_Kahmunrah_Rises_Again',
		extract:
			'Night at the Museum: Kahmunrah Rises Again is a 2022 animated film directed by Matt Danner and written by Ray DeLaurentis and William Schifrin. The sequel to Secret of the Tomb (2014), it is the first animated film in the Night at the Museum film series and the fourth installment overall, as well as the first animated feature film produced by Atomic Cartoons. The film follows Nick Daley, the son of Larry Daley, as he becomes night guard at the Museum of Natural History. In addition to Nick Daley, it also features Kahmunrah, the antagonist of the second film (2009).',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/1/17/Night_at_the_Museum_Kahmunrah_Rises_Again.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Whale',
		year: 2022,
		cast: ['Brendan Fraser', 'Sadie Sink', 'Hong Chau', 'Ty Simpkins', 'Samantha Morton'],
		genres: ['Drama'],
		href: 'The_Whale_(2022_film)',
		extract:
			'The Whale is a 2022 American psychological drama film directed by Darren Aronofsky and written by Samuel D. Hunter, based on his 2012 play of the same name. The film stars Brendan Fraser, Sadie Sink, Hong Chau, Ty Simpkins, and Samantha Morton. The plot follows a reclusive, morbidly obese English teacher who tries to restore his relationship with his teenage daughter.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f3/TheWhalePoster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 313
	},
	{
		title: "Something from Tiffany's",
		year: 2022,
		cast: ['Zoey Deutch', 'Kendrick Sampson', 'Ray Nicholson', 'Shay Mitchell'],
		genres: ['Comedy', 'Romance'],
		href: 'Something_from_Tiffany%27s',
		extract:
			"Something from Tiffany's is a 2022 American Christmas romantic comedy film directed by Daryl Wein, from a screenplay by Tamara Chestna. It is based on the novel of the same name by Melissa Hill. The film stars Zoey Deutch, Kendrick Sampson, Ray Nicholson, and Shay Mitchell.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/e/e8/Something_from_Tiffany%27s_film_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Detective Knight: Redemption',
		year: 2022,
		cast: ['Paul Johansson', 'Bruce Willis'],
		genres: ['Action', 'War'],
		href: 'Detective_Knight:_Redemption',
		extract:
			'Detective Knight: Redemption is a 2022 American Christmas action film directed by Edward John Drake, from a screenplay by Drake and Corey Large, and produced by Large, Randall Emmett, and George Furla. Serving as the second installment of the Detective Knight trilogy, and as a sequel to Detective Knight: Rogue (2022), it stars Paul Johansson and Bruce Willis.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/37/Detective_Knight_Redemption_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'The Mean One',
		year: 2022,
		cast: [
			'David Howard Thornton',
			'Krystle Martin',
			'Chase Mullins',
			'John Bigham',
			'Erik Baker',
			'Flip Kobler',
			'Amy Schumacher'
		],
		genres: ['Comedy', 'Slasher'],
		href: 'The_Mean_One',
		extract:
			"The Mean One is a 2022 American Christmas black comedy slasher film directed by Steven LaMorte and written by Flip and Finn Kobler. The film serves as an unauthorized horror retelling of Dr. Seuss' 1957 children's book How the Grinch Stole Christmas! and stars David Howard Thornton as the eponymous character, with Krystle Martin, Chase Mullins, John Bigham, Erik Baker, Flip Kobler, and Amy Schumacher in supporting roles. It follows a young woman as she attempts to defend her childhood town from a green-skinned creature who goes on a murderous rampage during the holiday season.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/57/The_Mean_One_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Avatar: The Way of Water',
		year: 2022,
		cast: ['Sam Worthington', 'Zoe Saldaña', 'Sigourney Weaver', 'Stephen Lang', 'Kate Winslet'],
		genres: ['Science Fiction'],
		href: 'Avatar:_The_Way_of_Water',
		extract:
			"Avatar: The Way of Water is a 2022 American epic science fiction film directed and produced by James Cameron. He co-wrote the screenplay with Rick Jaffa and Amanda Silver from a story the trio wrote with Josh Friedman and Shane Salerno. Distributed by 20th Century Studios, it is the sequel to Avatar (2009) and the second installment in the Avatar film series. Cast members Sam Worthington, Zoe Saldaña, Stephen Lang, Joel David Moore, CCH Pounder, Giovanni Ribisi, Dileep Rao, and Matt Gerald reprise their roles from the original film, with Sigourney Weaver returning in an additional role while Kate Winslet joined the cast. It follows a blue-skinned humanoid Na'vi named Jake Sully (Worthington) as he and his family, under renewed human threat, seek refuge with the aquatic Metkayina clan of Pandora, a habitable exomoon on which they live.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 390
	},
	{
		title: 'Puss in Boots: The Last Wish',
		year: 2022,
		cast: [
			'Antonio Banderas',
			'Salma Hayek',
			'Harvey Guillén',
			'Florence Pugh',
			'Olivia Colman',
			'Ray Winstone',
			'Samson Kayo',
			'John Mulaney',
			'Wagner Moura',
			"Da'Vine Joy Randolph"
		],
		genres: ['Adventure', 'Animated'],
		href: 'Puss_in_Boots:_The_Last_Wish',
		extract:
			'Puss in Boots: The Last Wish is a 2022 American computer-animated adventure film produced by DreamWorks Animation and distributed by Universal Pictures. The sequel to the spin-off film Puss in Boots (2011) and the sixth installment in the Shrek franchise, the film was directed by Joel Crawford and co-directed by Januel Mercado. Based on the character from Shrek 2 (2004) and inspired by the eponymous fairy tale, the film\'s screenplay was written by Paul Fisher and Tommy Swerdlow, with a story by Swerdlow and Tom Wheeler. The voice cast of Puss in Boots: The Last Wish includes Antonio Banderas and Salma Hayek Pinault reprising their respective roles as the titular character and Kitty Softpaws, and are joined by Harvey Guillén, Florence Pugh, Olivia Colman, Ray Winstone, Samson Kayo, John Mulaney, Wagner Moura, Da\'Vine Joy Randolph, and Anthony Mendez, who voice new characters introduced in the film. Set after Shrek Forever After (2010), the film follows Puss in Boots as he journeys to find the mystical Last Wish for the Wishing Star by teaming up with Kitty and Perrito (Guillén) to restore the first eight of his nine lives, by wishing on the mystical Last Wishing Star. They must race against Goldilocks and her Three Bears Crime Family, and "Big" Jack Horner (Mulaney), who all desire the star; Puss must also avoid a mysterious hooded wolf (Moura), who plots to kill him.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 396
	},
	{
		title: 'Babylon',
		year: 2022,
		cast: ['Brad Pitt', 'Margot Robbie', 'Diego Calva', 'Jean Smart', 'Jovan Adepo', 'Li Jun Li'],
		genres: ['Comedy', 'Drama', 'Historical'],
		href: 'Babylon_(2022_film)',
		extract:
			"Babylon is a 2022 American epic period black comedy-drama film written and directed by Damien Chazelle. It features an ensemble cast including Brad Pitt, Margot Robbie, Diego Calva, Jean Smart, Jovan Adepo, and Li Jun Li. It chronicles the rise and fall of multiple characters during Hollywood's transition from silent to sound films in the late 1920s.",
		thumbnail: 'src/data/movies/babylon.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Whitney Houston: I Wanna Dance with Somebody',
		year: 2022,
		cast: [
			'Naomi Ackie',
			'Stanley Tucci',
			'Ashton Sanders',
			'Tamara Tunie',
			'Nafessa Williams',
			'Clarke Peters'
		],
		genres: ['Drama', 'Musical', 'Biography'],
		href: 'Whitney_Houston:_I_Wanna_Dance_with_Somebody',
		extract:
			'Whitney Houston: I Wanna Dance with Somebody is a 2022 American biographical musical drama film directed by Kasi Lemmons, from a screenplay by Anthony McCarten, based on the life and career of American singer and actress Whitney Houston. The film stars Naomi Ackie as Houston with Stanley Tucci, Ashton Sanders, Tamara Tunie, Nafessa Williams, and Clarke Peters in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/61/IWDWS.jpeg',
		thumbnail_width: 260,
		thumbnail_height: 384
	},
	{
		title: 'The Pale Blue Eye',
		year: 2022,
		cast: [
			'Christian Bale',
			'Harry Melling',
			'Gillian Anderson',
			'Lucy Boynton',
			'Charlotte Gainsbourg',
			'Toby Jones',
			'Harry Lawtey',
			'Simon McBurney',
			'Timothy Spall',
			'Robert Duvall'
		],
		genres: ['Mystery', 'Thriller'],
		href: 'The_Pale_Blue_Eye',
		extract:
			'The Pale Blue Eye is a 2022 American mystery thriller film written and directed by Scott Cooper, adapted from the 2003 novel of the same name by Louis Bayard. The film features an ensemble cast that includes Christian Bale, Harry Melling, Gillian Anderson, Lucy Boynton, Charlotte Gainsbourg, Toby Jones, Harry Lawtey, Simon McBurney, Timothy Spall, and Robert Duvall. Its plot follows veteran detective Augustus Landor in 1830 West Point, New York, as he investigates a series of murders at the United States Military Academy with the aid of Edgar Allan Poe, a young military cadet.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/07/The_Pale_Blue_Eye_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Women Talking',
		year: 2022,
		cast: [
			'Rooney Mara',
			'Claire Foy',
			'Jessie Buckley',
			'Judith Ivey',
			'Ben Whishaw',
			'Frances McDormand'
		],
		genres: ['Drama'],
		href: 'Women_Talking_(film)',
		extract:
			'Women Talking is a 2022 drama film written and directed by Sarah Polley. It is based on the Canadian 2018 novel of the same name by Miriam Toews, and inspired by the gas-facilitated rapes that occurred at the Manitoba Colony, a remote and isolated Mennonite community in Bolivia. It features an ensemble cast that includes Rooney Mara, Claire Foy, Jessie Buckley, Judith Ivey, Ben Whishaw, and Frances McDormand, who also served as a producer on the film.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Women_Talking_poster.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'A Man Called Otto',
		year: 2022,
		cast: ['Tom Hanks', 'Mariana Treviño', 'Rachel Keller', 'Manuel Garcia-Rulfo'],
		genres: ['Comedy', 'Drama'],
		href: 'A_Man_Called_Otto',
		extract:
			'A Man Called Otto is a 2022 American comedy-drama film directed by Marc Forster from a screenplay by David Magee. It is the second film adaptation of the 2012 novel A Man Called Ove by Fredrik Backman after the 2015 Swedish film of the same name. The film stars Tom Hanks in the title role, with Mariana Treviño, Rachel Keller, and Manuel Garcia-Rulfo.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/80/A_Man_Called_Otto_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 385
	},
	{
		title: 'Alice, Darling',
		year: 2022,
		cast: ['Anna Kendrick', 'Kaniehtiio Horn', 'Charlie Carrick', 'Wunmi Mosaku'],
		genres: ['Thriller'],
		href: 'Alice,_Darling',
		extract:
			'Alice, Darling is a 2022 psychological thriller film directed by Mary Nighy, in her directorial debut, from a screenplay by Alanna Francis. The film stars Anna Kendrick, Kaniehtiio Horn, Charlie Carrick, and Wunmi Mosaku.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/ab/Alice_darling.jpg',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'M3GAN',
		year: 2023,
		cast: [
			'Allison Williams',
			'Violet McGraw',
			'Amie Donald',
			'Jenna Davis',
			'Ronny Chieng',
			'Brian Jordan Alvarez'
		],
		genres: ['Horror', 'Science Fiction'],
		href: 'M3GAN',
		extract:
			'M3GAN is a 2022 American science fiction horror film directed by Gerard Johnstone, written by Akela Cooper from a story by Cooper and James Wan, and starring Allison Williams and Violet McGraw, with Amie Donald physically portraying M3GAN and Jenna Davis voicing the character. Its plot follows the eponymous artificially intelligent doll who develops self-awareness and becomes hostile toward anyone who comes between her and her human companion.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/03/M3GAN_Poster.jpeg',
		thumbnail_width: 220,
		thumbnail_height: 321
	},
	{
		title: 'The Old Way',
		year: 2023,
		cast: ['Nicolas Cage', 'Ryan Kiera Armstrong'],
		genres: ['Western'],
		href: 'The_Old_Way',
		extract:
			'The Old Way is a 2023 American Western film directed by Brett Donowho, from a screenplay by Carl W. Lucas, and starring Nicolas Cage as a retired gunman on a mission to find the outlaws who killed his wife.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/bd/The_Old_Way_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'The Devil Conspiracy',
		year: 2023,
		cast: [
			'Alice Orr-Ewing',
			'Joe Doyle',
			'Eveline Hall',
			'Peter Mensah',
			'Joe Anderson',
			'Spencer Wilding',
			'Brian Caspe',
			'James Faulkner'
		],
		genres: ['Horror', 'Science Fiction'],
		href: 'The_Devil_Conspiracy',
		extract:
			'The Devil Conspiracy is a 2022 science fiction horror film written and produced by Ed Alan and directed by Nathan Frankowski. It stars Alice Orr-Ewing, Joe Doyle, Eveline Hall, Peter Mensah, Joe Anderson, Spencer Wilding, Brian Caspe and James Faulkner.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ef/DevilConspiracy.png',
		thumbnail_width: 250,
		thumbnail_height: 369
	},
	{
		title: 'Plane',
		year: 2023,
		cast: ['Gerard Butler', 'Mike Colter', 'Yoson An', 'Tony Goldwyn'],
		genres: ['Action', 'Thriller'],
		href: 'Plane_(film)',
		extract:
			'Plane is a 2023 American action thriller film directed by Jean-François Richet from a screenplay by Charles Cumming and J. P. Davis. The film stars Gerard Butler, Mike Colter, Yoson An, and Tony Goldwyn. The plot centers on a pilot (Butler) allying with a prisoner (Colter) to save his passengers from a hostile territory they landed in for an emergency landing.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Plane_%282023_film%29_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'House Party',
		year: 2023,
		cast: ['Tosin Cole', 'Jacob Latimore', 'Karen Obilom', 'D.C. Young Fly', 'Scott Mescudi'],
		genres: ['Comedy'],
		href: 'House_Party_(2023_film)',
		extract:
			"House Party is a 2023 American comedy film directed by Calmatic from a screenplay by Jamal Olori and Stephen Glover, serving as a reboot and remake of the 1990 film of the same name. The film stars Tosin Cole, Jacob Latimore, Karen Obilom, D.C. Young Fly, and Kid Cudi, and follows two young aspiring club promoters working as house cleaners who throw a party at their latest job site: LeBron James' mansion. It is produced by New Line Cinema and James and Maverick Carter's SpringHill Company.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4d/House_Party_%282023_film%29.png',
		thumbnail_width: 250,
		thumbnail_height: 371
	},
	{
		title: 'Sick',
		year: 2023,
		cast: ['Gideon Adlon', 'Bethlehem Million', 'Marc Menchaca', 'Jane Adams'],
		genres: ['Slasher'],
		href: 'Sick_(2022_film)',
		extract:
			'Sick is a 2022 American slasher film directed by John Hyams and written by Kevin Williamson and Katelyn Crabb. The film stars Gideon Adlon, Beth Million, and Dylan Sprayberry.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/73/SickFilmPoster.jpg',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'The Drop',
		year: 2023,
		cast: ['Anna Konkle', 'Jermaine Fowler', 'Jillian Bell', 'Utkarsh Ambudkar'],
		genres: ['Comedy'],
		href: 'The_Drop_(2022_film)',
		extract:
			'The Drop is a 2022 American black comedy film directed by Sarah Adina Smith, written by Smith and Joshua Leonard, and starring Anna Konkle and Jermaine Fowler. It premiered at the 2022 Tribeca Film Festival and was released on Hulu on January 13, 2023.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e8/The_Drop_%282022_film%29.png',
		thumbnail_width: 250,
		thumbnail_height: 313
	},
	{
		title: 'Dog Gone',
		year: 2023,
		cast: ['Rob Lowe', 'Johnny Berchtold', 'Kimberly Williams-Paisley'],
		genres: ['Drama', 'Biography'],
		href: 'Dog_Gone_(2023_film)',
		extract:
			'Dog Gone is a 2023 American biographical drama film directed by Stephen Herek. It was released by Netflix on January 13, 2023.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/00/DogGonePoster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: "There's Something Wrong with the Children",
		year: 2023,
		cast: ['Alisha Wainwright', 'Zach Gilford', 'Amanda Crew', 'Carlos Santos'],
		genres: ['Horror'],
		href: 'There%27s_Something_Wrong_with_the_Children',
		extract:
			"There's Something Wrong with the Children is a 2023 American horror film directed by Roxanne Benjamin and written by T. J. Cimfel and David White. The film stars Alisha Wainwright, Zach Gilford, Amanda Crew, and Carlos Santos. Jason Blum serves as an executive producer through his Blumhouse Television banner.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/5/5f/There%27s_Something_Wrong_with_the_Children_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Missing',
		year: 2023,
		cast: [
			'Storm Reid',
			'Joaquim de Almeida',
			'Ken Leung',
			'Amy Landecker',
			'Daniel Henney',
			'Nia Long'
		],
		genres: ['Thriller'],
		href: 'Missing_(2023_film)',
		extract:
			'Missing is a 2023 American screenlife thriller film written and directed by Will Merrick and Nick Johnson from a story by Sev Ohanian and Aneesh Chaganty, who also produced the film with Natalie Qasabian. The film is a standalone sequel to Searching (2018). It stars Storm Reid, Joaquim de Almeida, Ken Leung, Amy Landecker, Daniel Henney, and Nia Long. Its plot follows June Allen, a teenager who tries to find her missing mother after she disappears on vacation in Colombia with her new boyfriend.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Missing_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 390
	},
	{
		title: 'The Son',
		year: 2023,
		cast: [
			'Hugh Jackman',
			'Laura Dern',
			'Vanessa Kirby',
			'Zen McGrath',
			'Hugh Quarshie',
			'Anthony Hopkins'
		],
		genres: ['Drama'],
		href: 'The_Son_(2022_film)',
		extract:
			"The Son is a 2022 drama film directed by Florian Zeller from a screenplay written by himself and Christopher Hampton. It is based on Zeller's 2018 stage play of the same name. Anthony Hopkins has a minor appearance in this film playing the main character's father. The film stars Hugh Jackman, Laura Dern, Vanessa Kirby, Zen McGrath, Hugh Quarshie, and Anthony Hopkins.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d6/The_Son_%282022_film%29.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'When You Finish Saving the World',
		year: 2023,
		cast: [
			'Julianne Moore',
			'Finn Wolfhard',
			'Alisha Boe',
			'Jay O. Sanders',
			'Billy Bryk',
			'Eleonore Hendricks'
		],
		genres: ['Comedy', 'Drama'],
		href: 'When_You_Finish_Saving_the_World_(film)',
		extract:
			"When You Finish Saving the World is a 2022 American coming-of-age comedy-drama film written and directed by Jesse Eisenberg in his feature directorial debut. The film is based on Eisenberg's 2020 audio drama of the same name. Julianne Moore and Finn Wolfhard star as a mother and son who navigate their contentious relationship.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f6/WhenYouFinishSavingTheWorldFilm.jpg',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Detective Knight: Independence',
		year: 2023,
		cast: ['Bruce Willis'],
		genres: ['Action'],
		href: 'Detective_Knight:_Independence',
		extract:
			'Detective Knight: Independence is a 2023 American action film directed by Edward Drake, who wrote the screenplay and co-wrote the story with Corey Large. Serving as the third and final installment of the Detective Knight trilogy, and as a sequel to Detective Knight: Redemption (2022), it stars Bruce Willis, Jack Kilmer, Lochlyn Munro, Jimmy Jean-Louis, Willow Shields, Dina Meyer, and Timothy V. Murphy.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/9/9c/Detective_Knight_Independence_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 375
	},
	{
		title: 'Kids vs. Aliens',
		year: 2023,
		cast: ['Dominic Mariche', 'Phoebe Rex', 'Calem MacDonald', 'Asher Grayson'],
		genres: ['Horror', 'Science Fiction'],
		href: 'Kids_vs._Aliens',
		extract:
			'Kids vs. Aliens is a 2022 American science fiction horror film directed by Jason Eisener and written by John Davies and Eisener. It is the second spin-off film in the V/H/S franchise and a feature-length adaptation of "Slumber Party Alien Abduction", Eisener\'s segment from the 2013 anthology horror film V/H/S/2. It stars Dominic Mariche, Phoebe Rex, Calem MacDonald and Asher Grayson.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/89/Kids_vs_Aliens_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Teen Wolf: The Movie',
		year: 2023,
		cast: [
			'Tyler Posey',
			'Crystal Reed',
			'Tyler Hoechlin',
			'Holland Roden',
			'Colton Haynes',
			'Shelley Hennig',
			'Dylan Sprayberry',
			'Linden Ashby',
			'Melissa Ponzio',
			'JR Bourne'
		],
		genres: ['Drama', 'Supernatural', 'Teen', 'Thriller'],
		href: 'Teen_Wolf:_The_Movie',
		extract:
			'Teen Wolf: The Movie is a 2023 American supernatural thriller teen drama film directed by Russell Mulcahy and written by Jeff Davis. The film is a continuation of the MTV series Teen Wolf and features most of the cast reprising their roles, including Tyler Posey, Crystal Reed, Tyler Hoechlin, Holland Roden, Colton Haynes, Shelley Hennig, Dylan Sprayberry, Linden Ashby, Melissa Ponzio, and JR Bourne. It follows werewolf Scott McCall (Posey) as he protects his California town from a new threat.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/23/Teen_Wolf-_The_Movie_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'You People',
		year: 2023,
		cast: [
			'Jonah Hill',
			'Lauren London',
			'David Duchovny',
			'Nia Long',
			'Julia Louis-Dreyfus',
			'Eddie Murphy'
		],
		genres: ['Comedy', 'Romance'],
		href: 'You_People',
		extract:
			'You People is a 2023 American romantic comedy film directed by Kenya Barris, which he co-wrote with Jonah Hill. The film features an ensemble cast that includes Hill, Lauren London, David Duchovny, Nia Long, Julia Louis-Dreyfus, and Eddie Murphy. Its plot focuses on an interracial and interreligious couple, namely a white Jewish man and a Black NOI woman, and how their families reckon with modern love amid culture clashes, societal expectations and generational differences. Set in the Los Angeles area, two Millennials meet by chance and go into uncharted waters in their dating lives.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/75/You_People_Film_Poster.jpg',
		thumbnail_width: 261,
		thumbnail_height: 327
	},
	{
		title: 'Shotgun Wedding',
		year: 2023,
		cast: [
			'Jennifer Lopez',
			'Josh Duhamel',
			'Sônia Braga',
			'Jennifer Coolidge',
			'Lenny Kravitz',
			'Cheech Marin'
		],
		genres: ['Action', 'Comedy', 'Romance'],
		href: 'Shotgun_Wedding_(2022_film)',
		extract:
			'Shotgun Wedding is a 2022 American romantic action comedy film directed by Jason Moore and written by Mark Hammer. It stars Jennifer Lopez, Josh Duhamel, Sônia Braga, Jennifer Coolidge, Lenny Kravitz, and Cheech Marin. After being filmed from February to April of 2021 in Boston and the Dominican Republic, Shotgun Wedding was released in Singapore on December 28, 2022, and was released on January 27, 2023, by Amazon Studios via Prime Video.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/82/Shotgun_Wedding_2022_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Maybe I Do',
		year: 2023,
		cast: [
			'Diane Keaton',
			'Richard Gere',
			'Susan Sarandon',
			'Emma Roberts',
			'Luke Bracey',
			'William H. Macy'
		],
		genres: ['Comedy', 'Romance'],
		href: 'Maybe_I_Do',
		extract:
			"Maybe I Do is a 2023 American romantic comedy film written and directed by Michael Jacobs, based on his own play Cheaters, and starring Diane Keaton, Richard Gere, Susan Sarandon, Emma Roberts, Luke Bracey, and William H. Macy. It is Jacobs' feature directorial debut.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/99/Maybe_I_Do.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Life Upside Down',
		year: 2023,
		cast: ['Danny Huston', 'Radha Mitchell', 'Bob Odenkirk'],
		genres: ['Comedy', 'Romance'],
		href: 'Life_Upside_Down',
		extract:
			'Life Upside Down is a 2022 American romantic comedy film directed and written by Cecilia Miniucchi. It stars Bob Odenkirk, Danny Huston, Radha Mitchell and Rosie Fellner.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/74/LifeUpsideDownPoster.png',
		thumbnail_width: 254,
		thumbnail_height: 377
	},
	{
		title: 'Fear',
		year: 2023,
		cast: ['Joseph Sikora', 'King Bach', 'Annie Ilonzeh', 'Iddo Goldberg', 'Ruby Modine'],
		genres: ['Horror'],
		href: 'Fear_(2023_film)',
		extract:
			'Fear is a 2023 American horror film directed by Deon Taylor and starring Joseph Sikora, Andrew Bachelor, Annie Ilonzeh, Ruby Modine, Iddo Goldberg, Terrence Jenkins, Jessica Allain, and Tip "T.I." Harris.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Fear_%282023_film%29_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Knock at the Cabin',
		year: 2023,
		cast: [
			'Dave Bautista',
			'Jonathan Groff',
			'Ben Aldridge',
			'Nikki Amuka-Bird',
			'Kristen Cui',
			'Abby Quinn',
			'Rupert Grint'
		],
		genres: ['Horror'],
		href: 'Knock_at_the_Cabin',
		extract:
			'Knock at the Cabin is a 2023 American apocalyptic psychological horror film written and directed by M. Night Shyamalan, who wrote the screenplay from an initial draft by Steve Desmond and Michael Sherman. It is based on the 2018 novel The Cabin at the End of the World by Paul G. Tremblay, the first adaptation of one of his works. The film stars Dave Bautista, Jonathan Groff, Ben Aldridge, Nikki Amuka-Bird, Kristen Cui, Abby Quinn, and Rupert Grint. In the film, a family vacationing at a remote cabin are suddenly held hostage by four strangers, who ask something unimaginable.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Knock_at_the_cabin.jpg',
		thumbnail_width: 220,
		thumbnail_height: 348
	},
	{
		title: '80 for Brady',
		year: 2023,
		cast: ['Lily Tomlin', 'Jane Fonda', 'Rita Moreno', 'Sally Field', 'Tom Brady'],
		genres: ['Comedy', 'Sports'],
		href: '80_for_Brady',
		extract:
			'80 for Brady is a 2023 American sports comedy film directed by Kyle Marvin, written by Sarah Haskins and Emily Halpern, and produced by former NFL quarterback Tom Brady. The film follows four lifelong friends who travel to watch Brady and his New England Patriots play in Super Bowl LI in 2017. Billy Porter, Rob Corddry, Alex Moffat, and Guy Fieri also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1d/80_for_Brady.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'The Locksmith',
		year: 2023,
		cast: ['Ryan Phillippe', 'Kate Bosworth', 'Ving Rhames'],
		genres: ['Thriller'],
		href: 'The_Locksmith_(film)',
		extract:
			'The Locksmith is a 2023 American thriller film directed by Nicolas Harvard in his feature directorial debut. John Glosser, Joe Russo, Chris LaMont, and Ben Kabialis wrote the screenplay based on an original story by Blair Kroeber.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3f/LocksmithFilmPoster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Baby Ruby',
		year: 2023,
		cast: ['Noémie Merlant', 'Kit Harington', 'Meredith Hagner'],
		genres: ['Horror', 'Thriller'],
		href: 'Baby_Ruby',
		extract:
			'Baby Ruby is a 2022 American psychological horror-thriller film written and directed by Bess Wohl, in her directorial debut. It stars Noémie Merlant, Kit Harington, and Meredith Hagner.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/83/Baby_Ruby_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: "Freedom's Path",
		year: 2023,
		cast: ['Gerran Howell', 'RJ Cyler', 'Ewen Bremner', 'Harrison Gilbertson'],
		genres: ['Drama', 'Historical', 'War'],
		href: 'Freedom%27s_Path',
		extract:
			"Freedom's Path is a 2022 historical war drama film written, directed and produced by Brett Smith in his feature length debut. It stars Gerran Howell, RJ Cyler, and Ewen Bremner. Based on the American Civil War, it won multiple film festival awards in 2022 and had a limited theatrical run from February 3, 2023.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8b/FreedomsPathPoster.png',
		thumbnail_width: 250,
		thumbnail_height: 369
	},
	{
		title: "Magic Mike's Last Dance",
		year: 2023,
		cast: ['Channing Tatum', 'Salma Hayek Pinault'],
		genres: ['Comedy', 'Drama'],
		href: 'Magic_Mike%27s_Last_Dance',
		extract:
			"Magic Mike's Last Dance is a 2023 American comedy-drama film directed by Steven Soderbergh, written by Reid Carolin, and produced by Channing Tatum. It is the third installment in the Magic Mike trilogy, following Magic Mike (2012) and Magic Mike XXL (2015). The film stars Channing Tatum as the titular retired male stripper, who leaves Florida for London to help a socialite produce a stage play.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Magic_Mike_Last_Dance_Poster.png',
		thumbnail_width: 258,
		thumbnail_height: 386
	},
	{
		title: 'Sharper',
		year: 2023,
		cast: ['Julianne Moore', 'Sebastian Stan', 'Justice Smith', 'Briana Middleton', 'John Lithgow'],
		genres: ['Crime', 'Thriller'],
		href: 'Sharper_(film)',
		extract:
			'Sharper is a 2023 American crime thriller film directed by Benjamin Caron and written by Brian Gatewood and Alessandro Tanaka. The film stars Julianne Moore, Sebastian Stan, Justice Smith, Briana Middleton, and John Lithgow.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/87/SharperFilmPoster.jpg',
		thumbnail_width: 255,
		thumbnail_height: 383
	},
	{
		title: 'Your Place or Mine',
		year: 2023,
		cast: [
			'Reese Witherspoon',
			'Ashton Kutcher',
			'Jesse Williams',
			'Tig Notaro',
			'Zoë Chao',
			'Steve Zahn'
		],
		genres: ['Comedy', 'Romance'],
		href: 'Your_Place_or_Mine_(film)',
		extract:
			'Your Place or Mine is a 2023 American romantic comedy film written and directed by Aline Brosh McKenna in her directorial debut. The film stars Reese Witherspoon and Ashton Kutcher as best friends who decide to swap houses for a week. Jesse Williams, Zoë Chao, Wesley Kimmel, Tig Notaro, and Steve Zahn also star. The film was released on Netflix on February 10, 2023. It received mixed to negative reviews from critics, who criticised the lack of chemistry between Witherspoon and Kutcher.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/58/YourPlaceOrMinePoster.jpg',
		thumbnail_width: 245,
		thumbnail_height: 363
	},
	{
		title: 'Somebody I Used to Know',
		year: 2023,
		cast: [
			'Alison Brie',
			'Jay Ellis',
			'Kiersey Clemons',
			'Julie Hagerty',
			'Haley Joel Osment',
			'Amy Sedaris'
		],
		genres: ['Comedy', 'Romance'],
		href: 'Somebody_I_Used_to_Know',
		extract:
			'Somebody I Used to Know is a 2023 American romantic comedy film directed by Dave Franco and co-written with his wife Alison Brie. The film stars Brie, Jay Ellis and Kiersey Clemons. It was released on Amazon Prime Video on February 10, 2023.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/94/SomebodyIUsedToKnowFilm.jpg',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Consecration',
		year: 2023,
		cast: ['Jena Malone', 'Danny Huston', 'Janet Suzman'],
		genres: ['Horror', 'Supernatural', 'Thriller'],
		href: 'Consecration_(film)',
		extract:
			'Consecration is a 2023 supernatural horror-thriller film directed by Cristopher Smith from a script he co-wrote with Laurie Cook, and starring Jena Malone, Danny Huston and Janet Suzman. Shot in Scotland on the Isle of Skye, the film was released in the United Kingdom and United States on February 10, 2023.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/49/ConsecrationPoster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'The Outwaters',
		year: 2023,
		cast: ['Robbie Banfitch', 'Angela Basolis', 'Scott Schamell', 'Michelle May'],
		genres: ['Horror'],
		href: 'The_Outwaters',
		extract:
			'The Outwaters is a 2022 American horror film written, directed by, and starring Robbie Banfitch. It is presented as found footage from memory cards belonging to a group of friends who venture into the Mojave Desert to shoot a music video, where they encounter mysterious and threatening phenomena.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a1/The_Outwaters_%282022%29_poster.jpg',
		thumbnail_width: 245,
		thumbnail_height: 363
	},
	{
		title: 'Ant-Man and the Wasp: Quantumania',
		year: 2023,
		cast: [
			'Paul Rudd',
			'Evangeline Lilly',
			'Jonathan Majors',
			'Kathryn Newton',
			'David Dastmalchian',
			"Katy O'Brian",
			'William Jackson Harper',
			'Bill Murray',
			'Michelle Pfeiffer',
			'Corey Stoll',
			'Michael Douglas'
		],
		genres: ['Superhero'],
		href: 'Ant-Man_and_the_Wasp:_Quantumania',
		extract:
			"Ant-Man and the Wasp: Quantumania is a 2023 American superhero film based on Marvel Comics featuring the characters Scott Lang / Ant-Man and Hope Pym / Wasp. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Ant-Man (2015) and Ant-Man and the Wasp (2018) and the 31st film in the Marvel Cinematic Universe (MCU). The film was directed by Peyton Reed, written by Jeff Loveness, and stars Paul Rudd as Scott Lang and Evangeline Lilly as Hope van Dyne, alongside Jonathan Majors, Kathryn Newton, David Dastmalchian, Katy O'Brian, William Jackson Harper, Bill Murray, Michelle Pfeiffer, Corey Stoll, and Michael Douglas. In the film, Lang and Van Dyne are transported to the Quantum Realm along with their family and face Kang the Conqueror (Majors).",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/30/Ant-Man_and_the_Wasp_Quantumania_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 387
	},
	{
		title: 'Cocaine Bear',
		year: 2023,
		cast: [
			'Keri Russell',
			"O'Shea Jackson Jr.",
			'Christian Convery',
			'Alden Ehrenreich',
			'Brooklynn Prince',
			'Isiah Whitlock Jr.',
			'Margo Martindale',
			'Ray Liotta'
		],
		genres: ['Comedy', 'Horror', 'Thriller'],
		href: 'Cocaine_Bear',
		extract:
			'Cocaine Bear is a 2023 American comedy horror thriller film directed by Elizabeth Banks and written by Jimmy Warden. It is loosely inspired by the true story of the "Cocaine Bear", an American black bear that ingested nearly 75 lb (34 kg) of lost cocaine. It stars Keri Russell, O\'Shea Jackson Jr., Christian Convery, Alden Ehrenreich, Brooklynn Prince, Isiah Whitlock Jr., Margo Martindale, and Ray Liotta. The film is dedicated to Liotta, who died in May 2022.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/ab/Cocaine_Bear_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 395
	},
	{
		title: 'We Have a Ghost',
		year: 2023,
		cast: [
			'David Harbour',
			'Anthony Mackie',
			"Jahi Di'Allo Winston",
			'Tig Notaro',
			'Erica Ash',
			'Jennifer Coolidge'
		],
		genres: ['Comedy', 'Horror', 'Supernatural'],
		href: 'We_Have_a_Ghost',
		extract:
			'We Have a Ghost is 2023 American supernatural horror comedy film written and directed by Christopher Landon, based on the 2017 short story "Ernest" by Geoff Manaugh. It stars David Harbour, Jahi Winston, Tig Notaro, Jennifer Coolidge, and Anthony Mackie. It was released on February 24, 2023, by Netflix and received mixed reviews from film critics.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a3/We_have_a_ghost_poster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Luther: The Fallen Sun',
		year: 2023,
		cast: ['Idris Elba', 'Cynthia Erivo', 'Andy Serkis', 'Dermot Crowley'],
		genres: ['Crime', 'Thriller'],
		href: 'Luther:_The_Fallen_Sun',
		extract:
			'Luther: The Fallen Sun is a 2023 crime thriller film directed by Jamie Payne and written by Neil Cross. It serves as a film continuation of Luther. The film stars Idris Elba, reprising his role as John Luther, with Cynthia Erivo and Andy Serkis.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/b/b5/Luther_-_The_Fallen_Sun_%282023%29_Poster.jpg',
		thumbnail_width: 282,
		thumbnail_height: 353
	},
	{
		title: 'Jesus Revolution',
		year: 2023,
		cast: [
			'Joel Courtney',
			'Anna Grace Barlow',
			'Jonathan Roumie',
			'Kimberly Williams-Paisley',
			'Kelsey Grammer'
		],
		genres: ['Drama'],
		href: 'Jesus_Revolution',
		extract:
			'Jesus Revolution is a 2023 American Christian drama film directed by Jon Erwin and Brent McCorkle. Based on the book of the same name, the film follows youth minister Greg Laurie, Christian hippie Lonnie Frisbee, and pastor Chuck Smith as they take part in the Jesus movement in California during the late 1960s. Anna Grace Barlow and Kimberly Williams-Paisley also star. The film was theatrically released in the United States on February 24, 2023, by Lionsgate. The film received mixed reviews from critics but was well-received by audiences, and has grossed $51.7 million.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e3/JesusRevolutionPoster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Bruiser',
		year: 2023,
		cast: ['Trevante Rhodes', 'Jalyn Hall', 'Shinelle Azoroh', 'Shamier Anderson'],
		genres: ['Drama', 'War'],
		href: 'Bruiser_(2022_film)',
		extract:
			'Bruiser is a 2022 American drama film written by Ben Medina and Miles Warren, directed by Warren and starring Trevante Rhodes, Shamier Anderson, Jalyn Hall and Shinelle Azoroh.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2b/BruiserPoster.png',
		thumbnail_width: 255,
		thumbnail_height: 379
	},
	{
		title: 'Linoleum',
		year: 2023,
		cast: [
			'Jim Gaffigan',
			'Rhea Seehorn',
			'Katelyn Nacon',
			'Gabriel Rush',
			'Michael Ian Black',
			'Tony Shalhoub'
		],
		genres: ['Comedy', 'Drama', 'Science Fiction'],
		href: 'Linoleum_(film)',
		extract:
			'Linoleum is a 2022 American science fiction comedy-drama film written and directed by Colin West and starring Jim Gaffigan. It premiered at the 2022 South by Southwest festival on March 12, 2022. It was released in select theaters in the United States on February 24, 2023, by Shout! Studios.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e7/Linoleum_%28film%29.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Creed III',
		year: 2023,
		cast: [
			'Michael B. Jordan',
			'Tessa Thompson',
			'Jonathan Majors',
			'Wood Harris',
			'Mila Davis-Kent',
			'Florian Munteanu',
			'Phylicia Rashad'
		],
		genres: ['Drama', 'Sports'],
		href: 'Creed_III',
		extract:
			'Creed III is a 2023 American sports drama film directed, produced by and starring Michael B. Jordan from a screenplay by Keenan Coogler and Zach Baylin. It is the sequel to Creed II (2018), the third in the Creed film series, and the ninth overall in the Rocky film series. It also stars Tessa Thompson, Jonathan Majors, Wood Harris, Mila Davis-Kent, Florian Munteanu and Phylicia Rashad. In the film, the accomplished and recently retired boxer Adonis Creed (Jordan) comes face-to-face with his childhood friend and former boxing prodigy Damian Anderson (Majors).',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Creed_III_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Operation Fortune: Ruse de Guerre',
		year: 2023,
		cast: [
			'Jason Statham',
			'Aubrey Plaza',
			'Josh Hartnett',
			'Cary Elwes',
			'Bugzy Malone',
			'Hugh Grant'
		],
		genres: ['Action', 'Comedy', 'Spy'],
		href: 'Operation_Fortune:_Ruse_de_Guerre',
		extract:
			'Operation Fortune: Ruse de Guerre is a 2023 spy action comedy film directed by Guy Ritchie, and written by Ritchie, Ivan Atkinson, and Marn Davies. The film stars Jason Statham, Aubrey Plaza, Josh Hartnett, Cary Elwes, Bugzy Malone and Hugh Grant. The film is about a spy, Orson Fortune (Statham), who must retrieve a stolen high-tech device before an arms dealer (Grant) can sell it to the highest bidder.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/21/Operation_Fortune.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'A Little White Lie',
		year: 2023,
		cast: ['Michael Shannon', 'Kate Hudson', 'Don Johnson', 'Zach Braff'],
		genres: ['Comedy', 'Independent'],
		href: 'A_Little_White_Lie',
		extract:
			'A Little White Lie is a 2022 American independent comedy film written and directed by Michael Maren and based on the 2013 novel Shriver by Chris Belden. It stars Michael Shannon, Kate Hudson, Don Johnson, and Zach Braff. The film is about a handyman with the same name as a famous writer who is mistakenly invited to a literary festival and is welcomed by fans and writers, but is exposed as an imposter when the real Shriver arrives.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6c/A_Little_White_Lie_Poster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Children of the Corn',
		year: 2023,
		cast: ['Elena Kampouris', 'Kate Moyer', 'Callan Mulvey', 'Bruce Spence'],
		genres: ['Slasher', 'Supernatural'],
		href: 'Children_of_the_Corn_(2020_film)',
		extract:
			'Children of the Corn is a 2020 American supernatural slasher film written and directed by Kurt Wimmer. It stars Elena Kampouris, Kate Moyer, Callan Mulvey and Bruce Spence. The film is the third adaptation of Stephen King\'s short story "Children of the Corn" (1977).',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/8/87/Children_of_the_Corn_%282020_film%29.jpg',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Palm Trees and Power Lines',
		year: 2023,
		cast: ['Lily McInerny', 'Jonathan Tucker', 'Gretchen Mol'],
		genres: ['Drama', 'Short'],
		href: 'Palm_Trees_and_Power_Lines_(film)',
		extract:
			'Palm Trees and Power Lines is a 2022 American coming-of-age drama film directed by Jamie Dack in her feature directorial debut, based on her 2018 short film of the same name. The screenplay by Dack and Audrey Findlay is from a story by Dack. The film stars Lily McInerny as a disconnected teenage girl falling into a relationship with a man twice her age. It also stars Jonathan Tucker and Gretchen Mol.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/03/Palm_Trees_and_Power_Lines.jpg',
		thumbnail_width: 220,
		thumbnail_height: 318
	},
	{
		title: 'Unseen',
		year: 2023,
		cast: ['Midori Francis', 'Jolene Purdy', 'Missi Pyle'],
		genres: ['Horror', 'Thriller'],
		href: 'Unseen_(film)',
		extract:
			'Unseen is a 2023 American horror thriller film directed by Yoko Okumura in her directorial debut and written by Salvatore Cardoni and Brian Rawlins. The film stars Midori Francis, Jolene Purdy and Missi Pyle. Jason Blum serves as an executive producer through his Blumhouse Television banner.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/60/UnseenPoster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Scream VI',
		year: 2023,
		cast: [
			'Melissa Barrera',
			'Jasmin Savoy Brown',
			'Jack Champion',
			'Henry Czerny',
			'Mason Gooding',
			'Dermot Mulroney',
			'Jenna Ortega',
			'Tony Revolori',
			'Josh Segarra',
			'Samara Weaving',
			'Hayden Panettiere',
			'Courteney Cox'
		],
		genres: ['Slasher'],
		href: 'Scream_VI',
		extract:
			'Scream VI is a 2023 American slasher film directed by Matt Bettinelli-Olpin and Tyler Gillett, and written by James Vanderbilt and Guy Busick. It is the sequel to Scream (2022) and the sixth installment in the Scream film series. The film stars Melissa Barrera, Jenna Ortega, Jasmin Savoy Brown, Mason Gooding, Hayden Panettiere, and Courteney Cox, all reprising their roles from previous installments, alongside Josh Segarra, Jack Champion, Devyn Nekoda, Liana Liberato, Tony Revolori, Samara Weaving, Henry Czerny, and Dermot Mulroney joining the ensemble cast. Scream VI follows a new Ghostface killer who targets the survivors of the "Woodsboro legacy attacks" in New York City. Like its predecessors, the film combines the violence of the slasher genre with elements of black comedy and a "whodunit" mystery, and satirizes the trends of film franchises and subversion of audience expectations.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Scream_VI_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: '65',
		year: 2023,
		cast: ['Adam Driver', 'Ariana Greenblatt', 'Chloe Coleman', 'Nika King'],
		genres: ['Action', 'Science Fiction', 'Thriller'],
		href: '65_(film)',
		extract:
			'65 is a 2023 American science fiction action thriller film written and directed by Scott Beck and Bryan Woods and starring Adam Driver and Ariana Greenblatt. It is a co-production between Columbia Pictures, Bron Creative, Raimi Productions, TSG Entertainment, and Beck/Woods. In the film, a pilot crashes on an unknown planet, which turns out to be Earth during the Cretaceous period, and fights to survive the dangerous prehistoric environment.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c4/65_film_teaser_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Champions',
		year: 2023,
		cast: ['Woody Harrelson', 'Kaitlin Olson', 'Ernie Hudson', 'Cheech Marin'],
		genres: ['Comedy', 'Sports'],
		href: 'Champions_(2023_film)',
		extract:
			'Champions is a 2023 American sports comedy film directed by Bobby Farrelly in his solo directorial debut, from a screenplay written by Mark Rizzo. It is an English-language remake of the 2018 Spanish film of the same name. The film stars Woody Harrelson as a temperamental minor-league basketball coach who after an arrest must coach a team of players with intellectual disabilities as community service; Kaitlin Olson, Ernie Hudson, and Cheech Marin also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/74/Champions_xlg.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Chang Can Dunk',
		year: 2023,
		cast: ['Bloom Li', 'Ben Wang', 'Dexter Darden'],
		genres: ['Drama', 'Sports'],
		href: 'Chang_Can_Dunk',
		extract:
			"Chang Can Dunk is a 2023 American sports-drama film written and directed by Jingyi Shao in his feature length debut, starring Bloom Li, Dexter Darden, Ben Wang, Zoe Renee, Chase Liefeld and Mardy Ma. The film is an underdog coming-of-age story, involving high school basketball and the titular character's determination to overcome expectations.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/78/Chang_can_dunk.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Shazam! Fury of the Gods',
		year: 2023,
		cast: [
			'Zachary Levi',
			'Asher Angel',
			'Jack Dylan Grazer',
			'Rachel Zegler',
			'Adam Brody',
			'Ross Butler',
			'D. J. Cotrona',
			'Grace Caroline Currey',
			'Meagan Good',
			'Lucy Liu',
			'Djimon Hounsou',
			'Helen Mirren'
		],
		genres: ['Superhero'],
		href: 'Shazam!_Fury_of_the_Gods',
		extract:
			'Shazam! Fury of the Gods is a 2023 American superhero film based on the DC character Shazam. Produced by New Line Cinema, DC Films, and the Safran Company, and distributed by Warner Bros. Pictures, it is the sequel to Shazam! (2019) and the 12th installment in the DC Extended Universe (DCEU). Directed by David F. Sandberg, produced by Peter Safran, and written by Henry Gayden and Chris Morgan, it stars Zachary Levi, Asher Angel, Jack Dylan Grazer, Rachel Zegler, Adam Brody, Ross Butler, D. J. Cotrona, Grace Fulton, Meagan Good, Lucy Liu, Djimon Hounsou and Helen Mirren. In the film, Billy Batson / Shazam and his foster siblings fight the Daughters of Atlas.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/f/fb/Shazam%21_Fury_of_the_Gods_%282023%29_Main_Poster.png',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Boston Strangler',
		year: 2023,
		cast: [
			'Keira Knightley',
			'Carrie Coon',
			'Alessandro Nivola',
			'David Dastmalchian',
			'Morgan Spector',
			'Chris Cooper'
		],
		genres: ['Crime', 'Drama', 'Historical'],
		href: 'Boston_Strangler_(film)',
		extract:
			'Boston Strangler is a 2023 American historical crime drama film written and directed by Matt Ruskin. It is based on the true story of the Boston Strangler, who, in 1960s Boston, killed 13 women. The film stars Keira Knightley as Loretta McLaughlin, the reporter who broke the news for the Boston Record American, with Carrie Coon, Alessandro Nivola, Chris Cooper, David Dastmalchian, and Morgan Spector.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Boston_Strangler_Poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: "The Magician's Elephant",
		year: 2023,
		cast: [
			'Noah Jupe',
			'Benedict Wong',
			'Sian Clifford',
			'Pixie Davies',
			'Natasia Demetriou',
			'Dawn French',
			'Brian Tyree Henry',
			'Aasif Mandvi',
			'Mandy Patinkin',
			'Miranda Richardson',
			'Cree Summer',
			'Lorraine Toussaint'
		],
		genres: ['Adventure', 'Animated', 'Fantasy'],
		href: 'The_Magician%27s_Elephant_(film)',
		extract:
			"The Magician's Elephant is a 2023 computer-animated fantasy adventure film directed by Wendy Rogers, written by Martin Hynes and produced by Julia Pistor. Based on the 2009 novel of the same name by Kate DiCamillo, the film features the voices of Noah Jupe, Mandy Patinkin, Natasia Demetriou, Benedict Wong, Miranda Richardson and Aasif Mandvi. Animated by Animal Logic, the film was distributed by Netflix and released on March 17, 2023. The film received mixed reviews from critics.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/3e/The_Magician%27s_Elephant_poster.jpg',
		thumbnail_width: 251,
		thumbnail_height: 314
	},
	{
		title: 'Moving On',
		year: 2023,
		cast: ['Jane Fonda', 'Lily Tomlin', 'Malcolm McDowell', 'Sarah Burns', 'Richard Roundtree'],
		genres: ['Comedy'],
		href: 'Moving_On_(2022_film)',
		extract:
			'Moving On is a 2022 American comedy film written and directed by Paul Weitz. The film stars Jane Fonda, Lily Tomlin, Malcolm McDowell, Sarah Burns, and Richard Roundtree.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9c/MovingOnPoster.jpg',
		thumbnail_width: 255,
		thumbnail_height: 376
	},
	{
		title: 'Wildflower',
		year: 2023,
		cast: [
			'Kiernan Shipka',
			'Dash Mihok',
			'Charlie Plummer',
			'Alexandra Daddario',
			'Reid Scott',
			'Erika Alexander',
			'Samantha Hyde',
			'Jacki Weaver'
		],
		genres: ['Teen'],
		href: 'Wildflower_(2022_film)',
		extract:
			'Wildflower is a 2022 American coming of age film directed by Matt Smukler and written by Jana Savage from a story from Smukler and Savage. It stars Kiernan Shipka, Dash Mihok, Charlie Plummer, Alexandra Daddario, Reid Scott, Erika Alexander, Samantha Hyde and Jacki Weaver.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/04/Wildflower_Film_Poster.png',
		thumbnail_width: 255,
		thumbnail_height: 368
	},
	{
		title: 'Supercell',
		year: 2023,
		cast: ['Skeet Ulrich', 'Anne Heche', 'Daniel Diemer', 'Jordan Kristine Seamón', 'Alec Baldwin'],
		genres: ['Action', 'Disaster'],
		href: 'Supercell_(film)',
		extract:
			'Supercell is a 2023 American disaster action film directed by Herbert James Winterstern from a screenplay that he wrote with Anna Elizabeth James. It stars Skeet Ulrich, Anne Heche, Daniel Diemer, Jordan Kristine Seamón and Alec Baldwin.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Supercell_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'John Wick: Chapter 4',
		year: 2023,
		cast: [
			'Keanu Reeves',
			'Donnie Yen',
			'Bill Skarsgård',
			'Laurence Fishburne',
			'Hiroyuki Sanada',
			'Shamier Anderson',
			'Lance Reddick',
			'Rina Sawayama',
			'Scott Adkins',
			'Clancy Brown',
			'Natalia Tena',
			'Marko Zaror',
			'Ian McShane'
		],
		genres: ['Action', 'Noir', 'Thriller'],
		href: 'John_Wick:_Chapter_4',
		extract:
			'John Wick: Chapter 4 is a 2023 American neo-noir action thriller film directed by Chad Stahelski and written by Shay Hatten and Michael Finch. The sequel to John Wick: Chapter 3 – Parabellum (2019) and the fourth installment in the John Wick franchise, it stars Keanu Reeves as the title character, alongside Donnie Yen, Bill Skarsgård, Laurence Fishburne, Hiroyuki Sanada, Shamier Anderson, Lance Reddick, Rina Sawayama, Scott Adkins, Clancy Brown, and Ian McShane. In the film, John Wick sets out to get revenge on the High Table and those who left him for dead.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/d/d0/John_Wick_-_Chapter_4_promotional_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'A Good Person',
		year: 2023,
		cast: ['Florence Pugh', 'Molly Shannon', 'Chinaza Uche', "Celeste O'Connor", 'Morgan Freeman'],
		genres: ['Drama'],
		href: 'A_Good_Person',
		extract:
			"A Good Person is a 2023 American drama film written, directed, and produced by Zach Braff. The film stars Florence Pugh, Molly Shannon, Chinaza Uche, Celeste O'Connor, and Morgan Freeman.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b8/A_Good_Person_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'Dungeons & Dragons: Honor Among Thieves',
		year: 2023,
		cast: [
			'Chris Pine',
			'Michelle Rodriguez',
			'Regé-Jean Page',
			'Justice Smith',
			'Sophia Lillis',
			'Hugh Grant'
		],
		genres: ['Fantasy', 'Action'],
		href: 'Dungeons_%26_Dragons:_Honor_Among_Thieves',
		extract:
			'Dungeons & Dragons: Honor Among Thieves is a 2023 American fantasy heist film directed by Jonathan Goldstein and John Francis Daley, who co-wrote the screenplay with Michael Gilio from a story by Chris McKay and Gilio. Based on the tabletop role-playing game Dungeons & Dragons, it is set in the Forgotten Realms campaign setting and has no connections to the film trilogy released between 2000 and 2012. The film stars Chris Pine, Michelle Rodriguez, Regé-Jean Page, Justice Smith, Sophia Lillis, and Hugh Grant.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/0/03/Theatrical_poster_for_Dungeons_and_Dragons%2C_Honor_Among_Thieves.jpg',
		thumbnail_width: 262,
		thumbnail_height: 382
	},
	{
		title: 'Murder Mystery 2',
		year: 2023,
		cast: [
			'Adam Sandler',
			'Jennifer Aniston',
			'Mélanie Laurent',
			'Jodie Turner-Smith',
			'Annie Mumolo',
			'Tony Goldwyn',
			'Mark Strong'
		],
		genres: ['Action', 'Comedy', 'Mystery'],
		href: 'Murder_Mystery_2',
		extract:
			'Murder Mystery 2 is a 2023 American action comedy mystery film directed by Jeremy Garelick and written by James Vanderbilt. It is a sequel to the 2019 film Murder Mystery, and stars Adam Sandler and Jennifer Aniston.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/71/Murder_Mystery_2_poster.png',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Tetris',
		year: 2023,
		cast: [
			'Taron Egerton',
			'Nikita Yefremov',
			'Roger Allam',
			'Anthony Boyle',
			'Togo Igawa',
			'Ken Yamamura',
			'Ben Miles',
			'Matthew Marsh',
			'Rick Yune',
			'Toby Jones'
		],
		genres: ['Thriller', 'Biography'],
		href: 'Tetris_(film)',
		extract:
			'Tetris is a 2023 biographical thriller film directed by Jon S. Baird, written by Noah Pink, and starring Taron Egerton, Nikita Efremov, Sofia Lebedeva, Anthony Boyle, Toby Jones and Roger Allam. It is based on true events around the race to license and patent the video game Tetris in the late 1980s during the Cold War.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Tetris_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Spinning Gold',
		year: 2023,
		cast: [
			'Jeremy Jordan',
			'Wiz Khalifa',
			'Jason Isaacs',
			'Jason Derulo',
			'Jay Pharoah',
			'Michelle Monaghan',
			'Dan Fogler',
			'Sebastian Maniscalco'
		],
		genres: ['Drama', 'Biography'],
		href: 'Spinning_Gold',
		extract:
			'Spinning Gold is a 2023 American biographical drama film written and directed by Timothy Scott Bogart. It is based on the life of his father, Casablanca Records founder Neil Bogart.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/87/Spinning_gold_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'A Thousand and One',
		year: 2023,
		cast: [
			'Teyana Taylor',
			'Will Catlett',
			'Josiah Cross',
			'Aven Courtney',
			'Aaron Kingsley Adetola'
		],
		genres: ['Drama'],
		href: 'A_Thousand_and_One',
		extract:
			'A Thousand and One is a 2023 American drama film, written and directed by A.V. Rockwell. It stars Teyana Taylor, Will Catlett, Josiah Cross, Aven Courtney and Aaron Kingsley Adetola. It had its world premiere at the 2023 Sundance Film Festival on January 22, 2023 and won the Grand Jury Prize. It was released on March 31, 2023, by Focus Features.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Thousand_and_One_poster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Assassin',
		year: 2023,
		cast: ['Nomzamo Mbatha', 'Dominic Purcell', 'Bruce Willis'],
		genres: ['Action', 'Science Fiction'],
		href: 'Assassin_(2023_film)',
		extract:
			"Assassin is a 2023 American science fiction action film starring Nomzamo Mbatha, Dominic Purcell and Bruce Willis. It was directed by Jesse Atlas, in his feature film directorial debut, written by Aaron Wolfe, and is based on Atlas and Wolfe's short film Let Them Die Like Lovers.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Assassin_2023_poster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Acidman',
		year: 2023,
		cast: ['Thomas Haden Church', 'Dianna Agron'],
		genres: ['Drama', 'Science Fiction'],
		href: 'Acidman_(film)',
		extract:
			'Acidman is a 2022 American science fiction drama film directed by Alex Lehmann and written by Lehmann and Chris Dowling. It stars Thomas Haden Church and Dianna Agron.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/65/Acidman_film_poster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Malum',
		year: 2023,
		cast: ['Jessica Sula', 'Candice Coke', 'Chaney Morrow', 'Clarke Wolfe', 'Morgan Lennon'],
		genres: ['Horror'],
		href: 'Malum_(film)',
		extract:
			'Malum is a 2023 American horror film directed by Anthony DiBlasi, who co-wrote the film with Scott Poiley. It is a reboot/reimagining of the 2014 film Last Shift, also directed by DiBlasi. Malum stars Jessica Sula, Eric Olson, Chaney Morrow and Candice Coke.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Malum_%282023%29_poster.jpg',
		thumbnail_width: 245,
		thumbnail_height: 363
	},
	{
		title: 'The Super Mario Bros. Movie',
		year: 2023,
		cast: [
			'Chris Pratt',
			'Anya Taylor-Joy',
			'Charlie Day',
			'Jack Black',
			'Keegan-Michael Key',
			'Seth Rogen',
			'Fred Armisen',
			'Sebastian Maniscalco',
			'Charles Martinet',
			'Kevin Michael Richardson'
		],
		genres: ['Adventure', 'Animated'],
		href: 'The_Super_Mario_Bros._Movie',
		extract:
			"The Super Mario Bros. Movie is a 2023 American computer-animated adventure film based on Nintendo's Mario video game franchise. Produced by Illumination, Universal Pictures, and Nintendo, and distributed by Universal, it was directed by Aaron Horvath and Michael Jelenic from a screenplay by Matthew Fogel. The ensemble voice cast includes Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack Black, Keegan-Michael Key, Seth Rogen, and Fred Armisen. The film features an origin story for the brothers Mario and Luigi, Italian-American plumbers who are transported to an alternate world and become entangled in a battle between the Mushroom Kingdom, led by Princess Peach, and the Koopas, led by Bowser.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/4/44/The_Super_Mario_Bros._Movie_poster.jpg',
		thumbnail_width: 250,
		thumbnail_height: 396
	},
	{
		title: 'Air',
		year: 2023,
		cast: [
			'Matt Damon',
			'Ben Affleck',
			'Jason Bateman',
			'Marlon Wayans',
			'Chris Messina',
			'Chris Tucker',
			'Viola Davis'
		],
		genres: ['Drama', 'Sports', 'Biography'],
		href: 'Air_(2023_film)',
		extract:
			'Air is a 2023 American biographical sports drama film directed by Ben Affleck from a screenplay written by Alex Convery. It is based on true events about the origin of Air Jordan, a basketball shoeline, of which a Nike employee seeks to strike a business deal with rookie player Michael Jordan. The film stars Matt Damon, Affleck, Jason Bateman, Marlon Wayans, Chris Messina, Chris Tucker, and Viola Davis.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/de/AirFilmPoster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Showing Up',
		year: 2023,
		cast: [
			'Michelle Williams',
			'Hong Chau',
			'Maryann Plunkett',
			'John Magaro',
			'André Benjamin',
			'James LeGros',
			'Judd Hirsch'
		],
		genres: ['Comedy', 'Drama'],
		href: 'Showing_Up_(film)',
		extract:
			'Showing Up is a 2022 American comedy-drama film co-written and directed by Kelly Reichardt, in her fourth collaboration with actress Michelle Williams.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Showing_Up_film_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Paint',
		year: 2023,
		cast: [
			'Owen Wilson',
			'Michaela Watkins',
			'Wendi McLendon-Covey',
			'Ciara Renée',
			'Lucy Freyer',
			'Lusia Strus',
			'Stephen Root'
		],
		genres: ['Comedy'],
		href: 'Paint_(2023_film)',
		extract:
			'Paint is a 2023 American comedy film written and directed by Brit McAdams. The film stars Owen Wilson, Michaela Watkins, Ciara Renée, Stephen Root, Wendi McLendon-Covey, Lucy Freyer, Lusia Strus, and Michael Pemberton.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/59/Paint_Poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'On a Wing and a Prayer',
		year: 2023,
		cast: ['Dennis Quaid', 'Heather Graham', 'Jesse Metcalfe'],
		genres: ['Biography'],
		href: 'On_a_Wing_and_a_Prayer_(film)',
		extract:
			'On a Wing and a Prayer is a 2023 American biographical survival film directed by Sean McNamara and starring Dennis Quaid, Heather Graham, and Jesse Metcalfe. It was released on April 7, 2023.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a2/On_a_Wing_and_a_Prayer_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'Chupa',
		year: 2023,
		cast: ['Demián Bichir', 'Christian Slater', 'Evan Whitten'],
		genres: ['Adventure', 'Fantasy'],
		href: 'Chupa_(film)',
		extract:
			'Chupa is a 2023 American fantasy adventure film directed by Jonás Cuarón, and starring Demián Bichir and Christian Slater. Produced by 26th Street Pictures, it was released on April 7, 2023, on Netflix.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a8/Chupa_movie_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'How to Blow Up a Pipeline',
		year: 2023,
		cast: [
			'Ariela Barer',
			'Kristine Froseth',
			'Lukas Gage',
			'Forrest Goodluck',
			'Sasha Lane',
			'Jayme Lawson',
			'Marcus Scribner',
			'Jake Weary',
			'Irene Bedard'
		],
		genres: ['Action'],
		href: 'How_to_Blow_Up_a_Pipeline_(film)',
		extract:
			"How to Blow Up a Pipeline is a 2022 environmentalist action film directed by Daniel Goldhaber, who co-wrote the screenplay with Ariela Barer and Jordan Sjol. It relies on ideas advanced in Andreas Malm's 2021 book of the same name, published by Verso Books. It stars Barer, Kristine Froseth, Lukas Gage, Forrest Goodluck, Sasha Lane, Jayme Lawson, Marcus Scribner, Jake Weary and Irene Bedard.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/aa/HowtoblowuppipelinePoster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'One True Loves',
		year: 2023,
		cast: ['Phillipa Soo', 'Simu Liu', 'Luke Bracey'],
		genres: ['Romance'],
		href: 'One_True_Loves',
		extract:
			'One True Loves is a 2023 American romance film directed and produced by Andy Fickman as an adaptation of the 2016 novel of the same name by Taylor Jenkins Reid. It stars Phillipa Soo, Simu Liu and Luke Bracey.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4e/One_True_Loves_poster.jpg',
		thumbnail_width: 258,
		thumbnail_height: 382
	},
	{
		title: 'Renfield',
		year: 2023,
		cast: [
			'Nicholas Hoult',
			'Nicolas Cage',
			'Awkwafina',
			'Ben Schwartz',
			'Adrian Martinez',
			'Shohreh Aghdashloo'
		],
		genres: ['Comedy', 'Horror', 'Supernatural'],
		href: 'Renfield_(film)',
		extract:
			"Renfield is a 2023 American supernatural comedy horror film directed and co-produced by Chris McKay and written by Ryan Ridley from an original idea by Robert Kirkman. Featuring characters from Bram Stoker's 1897 novel Dracula, the film stars Nicholas Hoult as the title character and Nicolas Cage as Dracula, with Awkwafina, Ben Schwartz, Adrian Martinez, and Shohreh Aghdashloo in supporting roles.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Poster_Renfield.jpg',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: "The Pope's Exorcist",
		year: 2023,
		cast: ['Russell Crowe', 'Alex Essoe', 'Daniel Zovatto', 'Franco Nero', 'Ralph Ineson'],
		genres: ['Horror', 'Supernatural'],
		href: 'The_Pope%27s_Exorcist',
		extract:
			"The Pope's Exorcist is a 2023 American supernatural horror film directed by Julius Avery, and starring Russell Crowe as Father Gabriele Amorth. The film also stars Daniel Zovatto, Alex Essoe and Franco Nero. It is based on Amorth's memoirs An Exorcist Tells His Story and An Exorcist: More Stories.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/bd/ThePopesExorcistPoster.png',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Mafia Mamma',
		year: 2023,
		cast: ['Toni Collette', 'Monica Bellucci', 'Sophia Nomvete', 'Rob Huebel'],
		genres: ['Action', 'Comedy'],
		href: 'Mafia_Mamma',
		extract:
			'Mafia Mamma is an upcoming American action comedy film directed by Catherine Hardwicke, from a screenplay by Michael J. Feldman and Debbie Jhoon, and based on an original story by Amanda Sthers. It stars Toni Collette as an American woman who travels to Italy following the death of her grandfather, who she finds out was a mafia Don. Monica Bellucci and Sophia Nomvete also star.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/48/Mafia_mamma_film.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Sweetwater',
		year: 2023,
		cast: ['Everett Osborne', 'Cary Elwes', 'Jeremy Piven', 'Richard Dreyfuss', 'Kevin Pollak'],
		genres: ['Independent', 'Sports', 'Biography'],
		href: 'Sweetwater_(2023_film)',
		extract:
			'Sweetwater is an upcoming American sports biographical independent film directed and written by Martin Guigui. It stars Everett Osborne, Cary Elwes, Jeremy Piven, Richard Dreyfuss and Kevin Pollak. Osborne portrays Nat Clifton as the film depicts the true story of his career in the 1950s, starting with the Harlem Globetrotters before becoming the second African-American to sign a contract with the National Basketball Association (NBA).',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/83/Sweetwater_2023_Poster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Evil Dead Rise',
		year: 2023,
		cast: [
			'Lily Sullivan',
			'Alyssa Sutherland',
			'Morgan Davies',
			'Gabrielle Echols',
			'Nell Fisher'
		],
		genres: ['Horror', 'Supernatural'],
		href: 'Evil_Dead_Rise',
		extract:
			'Evil Dead Rise is a 2023 American supernatural horror film written and directed by Lee Cronin. It is the fifth installment of the Evil Dead film series. The film stars Lily Sullivan and Alyssa Sutherland as two estranged sisters trying to survive and save their family from demonic creatures. Morgan Davies, Gabrielle Echols, and Nell Fisher appear in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/98/EvilDeadRiseTeaser.jpg',
		thumbnail_width: 243,
		thumbnail_height: 360
	},
	{
		title: 'The Covenant',
		year: 2023,
		cast: [
			'Jake Gyllenhaal',
			'Dar Salim',
			'Antony Starr',
			'Alexander Ludwig',
			'Bobby Schofield',
			'Emily Beecham',
			'Jonny Lee Miller'
		],
		genres: ['Action', 'Thriller'],
		href: 'The_Covenant_(2023_film)',
		extract:
			"Guy Ritchie's The Covenant is an upcoming action thriller film co-written, co-produced and directed by Guy Ritchie. The film stars Jake Gyllenhaal and Dar Salim, and is scheduled to be released theatrically in the United States on April 21, 2023, by Metro-Goldwyn-Mayer.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1d/TheCovenantPoster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Ghosted',
		year: 2023,
		cast: [
			'Chris Evans',
			'Ana de Armas',
			'Adrien Brody',
			'Mike Moh',
			'Amy Sedaris',
			'Tim Blake Nelson',
			'Tate Donovan'
		],
		genres: ['Action', 'Adventure', 'Comedy', 'Romance'],
		href: 'Ghosted_(2023_film)',
		extract:
			'Ghosted is an upcoming American romantic comedy action-adventure film directed by Dexter Fletcher and written by Rhett Reese, Paul Wernick, Chris McKenna, and Erik Sommers, from a story by Reese and Wernick. The film stars Chris Evans and Ana de Armas. Produced by Apple Studios and Skydance Media, it is set to be released by Apple TV+ on April 21, 2023.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/89/Ghosted_Promo.png',
		thumbnail_width: 255,
		thumbnail_height: 383
	},
	{
		title: 'Beau Is Afraid',
		year: 2023,
		cast: [
			'Joaquin Phoenix',
			'Nathan Lane',
			'Amy Ryan',
			'Stephen McKinley Henderson',
			'Zoe Lister-Jones',
			'Armen Nahapetian',
			'Parker Posey',
			'Patti LuPone'
		],
		genres: ['Comedy', 'Horror'],
		href: 'Beau_Is_Afraid',
		extract:
			"Beau Is Afraid is a 2023 American surrealist black comedy horror film written, directed, and co-produced by Ari Aster. The film stars Joaquin Phoenix as the titular Beau Wassermann, a mild-mannered but paranoia-ridden man who embarks on a surreal odyssey to his hometown for his mother's funeral, confronting his greatest fears along the way. The film also includes a supporting ensemble cast that includes Patti LuPone, Nathan Lane, Amy Ryan, Kylie Rogers, Parker Posey, Stephen McKinley Henderson, Hayley Squires, Michael Gandolfini, Zoe Lister-Jones, and Richard Kind.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/92/Beau_Is_Afraid_poster.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Chevalier',
		year: 2023,
		cast: [
			'Kelvin Harrison Jr.',
			'Samara Weaving',
			'Lucy Boynton',
			'Marton Csokas',
			'Alex Fitzalan',
			'Minnie Driver'
		],
		genres: ['Drama', 'Biography'],
		href: 'Chevalier_(2022_film)',
		extract:
			'Chevalier is a 2022 American biographical drama film directed by Stephen Williams and written by Stefani Robinson. It is based on the life of the titular French-Caribbean musician Joseph Bologne, Chevalier de Saint-Georges, played by Kelvin Harrison Jr. The film also stars Samara Weaving, Lucy Boynton, Marton Csokas, Alex Fitzalan, and Minnie Driver.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Chevalier_poster.jpeg',
		thumbnail_width: 258,
		thumbnail_height: 387
	},
	{
		title: 'Somewhere in Queens',
		year: 2023,
		cast: [
			'Ray Romano',
			'Laurie Metcalf',
			'Jacob Ward',
			'Sadie Stanley',
			'Jennifer Esposito',
			'Dierdre Friel',
			'Jon Manfrellotti',
			'Sebastian Maniscalco',
			'Tony Lo Bianco'
		],
		genres: ['Comedy'],
		href: 'Somewhere_in_Queens',
		extract:
			'Somewhere in Queens is a 2022 American comedy film directed by Ray Romano from a screenplay by Romano and Mark Stegemann. The film stars Romano and Laurie Metcalf. It premiered at the Tribeca Film Festival on June 10, 2022. It is scheduled to be released in the United States on April 21, 2023, by Roadside Attractions and Lionsgate.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Somewhere_in_queens_poster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: "A Tourist's Guide to Love",
		year: 2023,
		cast: [
			'Rachael Leigh Cook',
			'Scott Ly',
			'Missi Pyle',
			'Ben Feldman',
			'Nondumiso Tembe',
			'Andrew Barth Feldman'
		],
		genres: ['Comedy', 'Romance'],
		href: 'A_Tourist%27s_Guide_to_Love',
		extract:
			"A Tourist's Guide to Love is an upcoming romantic comedy film directed by Steven K. Tsuchida and written by Eirene Donohue. It stars Rachael Leigh Cook, Scott Ly, Missi Pyle, Ben Feldman, Nondumiso Tembe and Andrew Barth Feldman.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/63/A-Tourists-Guide-To-Love.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Peter Pan & Wendy',
		year: 2023,
		cast: [
			'Jude Law',
			'Alexander Molony',
			'Ever Anderson',
			'Yara Shahidi',
			'Alyssa Wapanatâhk',
			'Joshua Pickering',
			'Jacobi Jupe',
			'Molly Parker',
			'Alan Tudyk',
			'Jim Gaffigan'
		],
		genres: ['Adventure', 'Fantasy'],
		href: 'Peter_Pan_%26_Wendy',
		extract:
			"Peter Pan & Wendy is an upcoming American fantasy adventure film directed by David Lowery from a screenplay he co-wrote with Toby Halbrooks. Jim Whitaker served as producer on the Walt Disney Pictures production, which is a live-action adaptation of Walt Disney's 1953 animated film Peter Pan, in turn based on the 1904 play Peter Pan; or, the Boy Who Wouldn't Grow Up by J. M. Barrie. The film stars Alexander Molony and Ever Anderson in the title roles. Jude Law, Yara Shahidi, Alyssa Wapanatâhk, Joshua Pickering, Jacobi Jupe, Molly Parker, Alan Tudyk, and Jim Gaffigan also appear in supporting roles.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Peter_Pan_%26_Wendy_poster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: "Are You There God? It's Me, Margaret",
		year: 2023,
		cast: ['Rachel McAdams', 'Abby Ryder Fortson', 'Elle Graham', 'Benny Safdie', 'Kathy Bates'],
		genres: ['Comedy', 'Drama'],
		href: 'Are_You_There_God%3F_It%27s_Me,_Margaret_(film)',
		extract:
			"Are You There God? It's Me, Margaret. is an upcoming American coming-of-age comedy drama film written for the screen and directed by Kelly Fremon Craig, based on the 1970 novel of the same name by Judy Blume. It stars Abby Ryder Fortson as the title character of Margaret Simon, Rachel McAdams as her mother Barbara, and Kathy Bates as her grandmother Sylvia.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/cd/AreYouThereGodFilmPoster.png',
		thumbnail_width: 250,
		thumbnail_height: 385
	},
	{
		title: 'Big George Foreman',
		year: 2023,
		cast: [
			'Khris Davis',
			'Jasmine Mathews',
			'John Magaro',
			'Sullivan Jones',
			'Lawrence Gilliard Jr.',
			'Sonja Sohn',
			'Forest Whitaker'
		],
		genres: ['Drama', 'Sports', 'Biography'],
		href: 'Big_George_Foreman',
		extract:
			'Big George Foreman is an upcoming American biographical sports drama film directed by George Tillman Jr. The film focuses on the life of world heavyweight boxing champion George Foreman, played by Khris Davis. It also stars Jasmine Mathews, John Magaro, Sullivan Jones, Lawrence Gilliard Jr., Sonja Sohn, and Forest Whitaker.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/cb/BigGeorgePoster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Sisu',
		year: 2023,
		cast: ['Jorma Tommila', 'Aksel Hennie', 'Jack Doolan', 'Mimosa Willamo'],
		genres: ['Action', 'Historical'],
		href: 'Sisu_(film)',
		extract:
			'Sisu is a 2022 historical action film written and directed by Jalmari Helander. Set in Finnish Lapland during World War II, the film follows a gold prospector who attempts to secure his gold from a Nazi death squad led by a brutal Schutzstaffel officer. Shot in 2021 in Lapland with a budget of about six million euros, the film stars Jorma Tommila, Aksel Hennie, Jack Doolan and Mimosa Willamo.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c6/Sisu_ver2.png',
		thumbnail_width: 250,
		thumbnail_height: 370
	},
	{
		title: 'Guardians of the Galaxy Vol. 3',
		year: 2023,
		cast: [
			'Chris Pratt',
			'Zoe Saldaña',
			'Dave Bautista',
			'Karen Gillan',
			'Pom Klementieff',
			'Vin Diesel',
			'Bradley Cooper',
			'Sean Gunn',
			'Chukwudi Iwuji',
			'Will Poulter',
			'Elizabeth Debicki',
			'Maria Bakalova',
			'Sylvester Stallone'
		],
		genres: ['Superhero'],
		href: 'Guardians_of_the_Galaxy_Vol._3',
		extract:
			'Guardians of the Galaxy Vol. 3 is an upcoming American superhero film based on the Marvel Comics superhero team Guardians of the Galaxy, produced by Marvel Studios, and distributed by Walt Disney Studios Motion Pictures. It is intended to be the sequel to Guardians of the Galaxy (2014) and Guardians of the Galaxy Vol. 2 (2017), and the 32nd film in the Marvel Cinematic Universe (MCU). The film is written and directed by James Gunn and stars an ensemble cast featuring Chris Pratt, Zoe Saldaña, Dave Bautista, Karen Gillan, Pom Klementieff, Vin Diesel, Bradley Cooper, Sean Gunn, Chukwudi Iwuji, Will Poulter, Elizabeth Debicki, Maria Bakalova, and Sylvester Stallone. In the film, the Guardians embark on a mission to protect Rocket (Cooper).',
		thumbnail: 'src/data/movies/Guardians3.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Book Club: The Next Chapter',
		year: 2023,
		cast: [
			'Diane Keaton',
			'Jane Fonda',
			'Candice Bergen',
			'Mary Steenburgen',
			'Craig T. Nelson',
			'Giancarlo Giannini',
			'Andy García',
			'Don Johnson'
		],
		genres: ['Comedy', 'Romance'],
		href: 'Book_Club:_The_Next_Chapter',
		extract:
			'Book Club: The Next Chapter is an upcoming American romantic comedy film, written and directed by Bill Holderman, and starring Diane Keaton, Jane Fonda, Candice Bergen and Mary Steenburgen. The film is a sequel to 2018 film Book Club.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fe/Book-Club-The-Next-Chapter.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Love Again',
		year: 2023,
		cast: [
			'Priyanka Chopra',
			'Sam Heughan',
			'Russell Tovey',
			'Omid Djalili',
			'Celia Imrie',
			'Celine Dion'
		],
		genres: ['Comedy', 'Drama', 'Romance'],
		href: 'Love_Again_(film)',
		extract:
			'Love Again is an upcoming American romantic comedy-drama film written and directed by James C. Strouse. It is an English-language remake of the 2016 German film SMS für Dich, itself based on a novel by Sofie Cramer. The film stars Priyanka Chopra Jonas, Sam Heughan, and Celine Dion portraying a fictionalized version of herself in her first film role.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/21/Love_Again_film_poster.jpg',
		thumbnail_width: 282,
		thumbnail_height: 352
	},
	{
		title: 'The Mother',
		year: 2023,
		cast: ['Jennifer Lopez', 'Joseph Fiennes', 'Omari Hardwick', 'Gael García Bernal', 'Paul Raci'],
		genres: ['Action', 'Drama'],
		href: 'The_Mother_(2023_film)',
		extract:
			'The Mother is an upcoming American action drama film directed by Niki Caro with a screenplay by Misha Green, Andrea Berloff and Peter Craig, from a story by Green. The film stars Jennifer Lopez, Joseph Fiennes, Omari Hardwick, and Gael García Bernal.',
		thumbnail: 'src/data/movies/TheMother.jpg',
		thumbnail_width: 282,
		thumbnail_height: 352
	},
	{
		title: 'Knights of the Zodiac',
		year: 2023,
		cast: [
			'Mackenyu',
			'Famke Janssen',
			'Madison Iseman',
			'Diego Tinoco',
			'Mark Dacascos',
			'Nick Stahl',
			'Sean Bean'
		],
		genres: ['Action', 'Fantasy'],
		href: 'Knights_of_the_Zodiac_(film)',
		extract:
			'Knights of the Zodiac  is a 2023 action fantasy film directed by Tomasz Bagiński from a screenplay by Josh Campbell, Matt Stuecken, and Kiel Murray, based on the manga Saint Seiya by Masami Kurumada. The film stars Mackenyu, Famke Janssen, Madison Iseman, Diego Tinoco, Mark Dacascos, Nick Stahl, and Sean Bean.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Knights_of_the_Zodiac_poster.jpg',
		thumbnail_width: 280,
		thumbnail_height: 350
	},
	{
		title: 'Monica',
		year: 2023,
		cast: [
			'Trace Lysette',
			'Patricia Clarkson',
			'Emily Browning',
			'Joshua Close',
			'Adriana Barraza'
		],
		genres: ['Drama'],
		href: 'Monica_(2022_film)',
		extract:
			'Monica is a 2022 drama film directed by Andrea Pallaoro, from a screenplay by Pallaoro and Orlando Tirado. It stars Trace Lysette, Patricia Clarkson, Emily Browning, and Adriana Barraza.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Monica_%282022_film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 357
	},
	{
		title: 'Fast X',
		year: 2023,
		cast: [
			'Vin Diesel',
			'Michelle Rodriguez',
			'Tyrese Gibson',
			'Chris "Ludacris" Bridges',
			'Jason Momoa',
			'Nathalie Emmanuel',
			'Jordana Brewster',
			'John Cena',
			'Jason Statham',
			'Sung Kang',
			'Alan Ritchson',
			'Daniela Melchior',
			'Scott Eastwood',
			'Helen Mirren',
			'Charlize Theron',
			'Brie Larson',
			'Rita Moreno'
		],
		genres: ['Action'],
		href: 'Fast_X',
		extract:
			'Fast X is an upcoming American action film directed by Louis Leterrier from a screenplay by Justin Lin, Zach Dean, and Dan Mazeau. It is the sequel to F9 (2021), serving as the tenth and penultimate main installment, and the eleventh full-length film in the Fast & Furious franchise. The film stars an ensemble cast including Vin Diesel, Michelle Rodriguez, Tyrese Gibson, Chris "Ludacris" Bridges, Jason Momoa, Nathalie Emmanuel, Jordana Brewster, John Cena, Jason Statham, Sung Kang, Alan Ritchson, Daniela Melchior, Scott Eastwood, Helen Mirren, Charlize Theron, Brie Larson, and Rita Moreno.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Fast_X_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 348
	},
	{
		title: 'Master Gardener',
		year: 2023,
		cast: ['Joel Edgerton', 'Sigourney Weaver', 'Quintessa Swindell', 'Esai Morales'],
		genres: ['Crime', 'Independent', 'Thriller'],
		href: 'Master_Gardener_(film)',
		extract:
			'Master Gardener is a 2022 American independent crime thriller film written and directed by Paul Schrader and starring Joel Edgerton, Sigourney Weaver, and Quintessa Swindell. The film had its world premiere at the 79th Venice International Film Festival on September 3, 2022.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/48/Master_Gardener_%28film%29.jpg',
		thumbnail_width: 250,
		thumbnail_height: 380
	},
	{
		title: 'The Little Mermaid',
		year: 2023,
		cast: [
			'Halle Bailey',
			'Jonah Hauer-King',
			'Daveed Diggs',
			'Awkwafina',
			'Jacob Tremblay',
			'Noma Dumezweni',
			'Javier Bardem',
			'Melissa McCarthy'
		],
		genres: ['Fantasy', 'Musical'],
		href: 'The_Little_Mermaid_(2023_film)',
		extract:
			"The Little Mermaid is an upcoming American musical fantasy film directed by Rob Marshall from a screenplay written by David Magee. It is a live-action adaptation of Disney's 1989 animated film of the same name, which itself is loosely based on the 1837 fairy tale of the same title by Hans Christian Andersen. The film stars Halle Bailey in the titular role, Jonah Hauer-King, Daveed Diggs, Awkwafina, Jacob Tremblay, Noma Dumezweni, Javier Bardem, and Melissa McCarthy.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/f/f4/The_Little_Mermaid_%282023_film%29.png',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'About My Father',
		year: 2023,
		cast: [
			'Sebastian Maniscalco',
			'Robert De Niro',
			'Leslie Bibb',
			'Anders Holm',
			'David Rasche',
			'Kim Cattrall'
		],
		genres: ['Comedy'],
		href: 'About_My_Father',
		extract:
			'About My Father is an upcoming American comedy film directed by Laura Terruso from a screenplay by Sebastian Maniscalco and Austen Earl. The film stars Maniscalco and is loosely based on his life and his relationship with his father, played by Robert De Niro. Leslie Bibb, Anders Holm, David Rasche, and Kim Cattrall co-star in supporting roles.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/94/About_My_Father_poster.jpg',
		thumbnail_width: 254,
		thumbnail_height: 392
	},
	{
		title: 'The Machine',
		year: 2023,
		cast: ['Bert Kreischer', 'Mark Hamill', 'Jimmy Tatro', 'Iva Babić', 'Stephanie Kurtzuba'],
		genres: ['Action', 'Comedy'],
		href: 'The_Machine_(2023_film)',
		extract:
			'The Machine is an upcoming American action comedy film directed by Peter Atencio inspired by the 2016 stand-up routine of the same name created by Bert Kreischer, who also stars as a fictionalized version of himself. The film also stars Mark Hamill, Jess Gabor, Jimmy Tatro, Stephanie Kurtzuba and Mercedes De La Cruz.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6b/TheMachine2023poster.png',
		thumbnail_width: 184,
		thumbnail_height: 273
	},
	{
		title: 'You Hurt My Feelings',
		year: 2023,
		cast: [
			'Julia Louis-Dreyfus',
			'Tobias Menzies',
			'Michaela Watkins',
			'Arian Moayed',
			'Owen Teague',
			'Amber Tamblyn',
			'David Cross',
			'Jeannie Berlin'
		],
		genres: ['Comedy', 'Drama'],
		href: 'You_Hurt_My_Feelings_(2023_film)',
		extract:
			'You Hurt My Feelings is a 2023 American comedy-drama film written, directed and produced by Nicole Holofcener. It stars Julia Louis-Dreyfus, Tobias Menzies, Michaela Watkins, Arian Moayed and Jeannie Berlin.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/df/You_hurt_my_feelings_2023.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Spider-Man: Across the Spider-Verse',
		year: 2023,
		cast: [
			'Shameik Moore',
			'Hailee Steinfeld',
			'Jake Johnson',
			'Issa Rae',
			'Daniel Kaluuya',
			'Karan Soni',
			'Jason Schwartzman',
			'Brian Tyree Henry',
			'Luna Lauren Vélez',
			'Greta Lee',
			'Rachel Dratch',
			'Jorma Taccone',
			'Shea Whigham',
			'Oscar Isaac'
		],
		genres: ['Animated', 'Superhero'],
		href: 'Spider-Man:_Across_the_Spider-Verse',
		extract:
			'Spider-Man: Across the Spider-Verse is an upcoming American computer-animated superhero film featuring the Marvel Comics character Miles Morales / Spider-Man. It is produced by Columbia Pictures and Sony Pictures Animation in association with Marvel Entertainment, and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Into the Spider-Verse (2018) and is set in a shared multiverse of alternate universes called the "Spider-Verse". The film is directed by Joaquim Dos Santos, Kemp Powers, and Justin K. Thompson, from a screenplay written by Phil Lord, Christopher Miller, and David Callaham. Shameik Moore voices Miles, starring alongside Hailee Steinfeld, Jake Johnson, Issa Rae, Daniel Kaluuya, Karan Soni, Jason Schwartzman, Brian Tyree Henry, Luna Lauren Vélez, Greta Lee, Rachel Dratch, Jorma Taccone, Shea Whigham and Oscar Isaac. In the film, Miles goes on an adventure with Gwen Stacy / Spider-Woman across the multiverse where he meets a new team of Spider-People, known as the Spider-Society, but comes into conflict with them over handling a new threat.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg',
		thumbnail_width: 263,
		thumbnail_height: 379
	},
	{
		title: 'The Boogeyman',
		year: 2023,
		cast: [
			'Sophie Thatcher',
			'Chris Messina',
			'Vivien Lyra Blair',
			'Marin Ireland',
			'Madison Hu',
			'LisaGay Hamilton',
			'David Dastmalchian'
		],
		genres: ['Horror', 'Supernatural'],
		href: 'The_Boogeyman_(2023_film)',
		extract:
			'The Boogeyman is an upcoming American supernatural horror film directed by Rob Savage from a screenplay by Scott Beck, Bryan Woods and Mark Heyman, based on the 1973 short story of the same name by Stephen King. The film stars Madison Hu, Vivien Lyra Blair, Sophie Thatcher, David Dastmalchian, Chris Messina, and Jaynie Verdin.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/89/The_Boogeyman_2023_poster.png',
		thumbnail_width: 262,
		thumbnail_height: 381
	},
	{
		title: 'Past Lives',
		year: 2023,
		cast: ['Greta Lee', 'Teo Yoo', 'John Magaro'],
		genres: ['Drama', 'Romance'],
		href: 'Past_Lives_(film)',
		extract:
			'Past Lives is a 2023 American romantic drama film written and directed by Celine Song in her feature directorial debut. The film stars Greta Lee, Teo Yoo and John Magaro, and follows a reunion between two childhood friends as they contemplate their relationship and their own lives.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/da/Past_Lives_film_poster.png',
		thumbnail_width: 255,
		thumbnail_height: 378
	},
	{
		title: 'Transformers: Rise of the Beasts',
		year: 2023,
		cast: [
			'Anthony Ramos',
			'Dominique Fishback',
			'Peter Cullen',
			'Ron Perlman',
			'Pete Davidson',
			'Liza Koshy',
			'Peter Dinklage',
			'Michelle Yeoh'
		],
		genres: ['Action', 'Science Fiction'],
		href: 'Transformers:_Rise_of_the_Beasts',
		extract:
			"Transformers: Rise of the Beasts is an upcoming American science fiction action film based on Hasbro's Transformers toy line and primarily influenced by the Beast Wars storyline. The film is the seventh installment in the Transformers film series and a standalone sequel to Bumblebee (2018). The film is directed by Steven Caple Jr. from a screenplay by Joby Harold, Darnell Metayer, Josh Peters, Erich Hoeber, and Jon Hoeber. It will star Anthony Ramos, Dominique Fishback, Luna Lauren Vélez and Tobe Nwigwe in his film debut, as well the voice talents of Ron Perlman, Peter Dinklage, Michelle Yeoh, Pete Davidson, Liza Koshy, Cristo Fernández, Michaela Jaé Rodriguez, Tongayi Chirisa, and previous voice actors, Peter Cullen, John DiMaggio and David Sobolov.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/1/1c/Transformers-_Rise_of_the_Beasts.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Flash',
		year: 2023,
		cast: [
			'Ezra Miller',
			'Sasha Calle',
			'Michael Shannon',
			'Ron Livingston',
			'Maribel Verdú',
			'Kiersey Clemons',
			'Antje Traue',
			'Michael Keaton',
			'Ben Affleck'
		],
		genres: ['Superhero'],
		href: 'The_Flash_(film)',
		extract:
			"The Flash is an upcoming American superhero film based on the DC Comics character of the same name. Produced by DC Studios, Double Dream, and the Disco Factory, and set for distribution by Warner Bros. Pictures, it is intended to be the 13th installment in the DC Extended Universe (DCEU). The film is directed by Andy Muschietti from a screenplay by Christina Hodson and stars Ezra Miller as Barry Allen / The Flash alongside Sasha Calle, Michael Shannon, Ron Livingston, Maribel Verdú, Kiersey Clemons, Antje Traue, and Michael Keaton. In the film, Barry travels back in time to prevent his mother's murder, which brings unintended consequences.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/ed/The_Flash_%28film%29_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Elemental',
		year: 2023,
		cast: [
			'Leah Lewis',
			'Mamoudou Athie',
			'Ronnie del Carmen',
			'Shila Omni',
			'Wendi McLendon-Covey',
			'Mason Wertheimer',
			"Catherine O'Hara",
			'Joe Pera',
			'Matt Yang King'
		],
		genres: ['Animated', 'Comedy', 'Drama', 'Romance'],
		href: 'Elemental_(2023_film)',
		extract:
			"Elemental is an upcoming American computer-animated romantic comedy-drama film produced by Walt Disney Pictures and Pixar Animation Studios and distributed by Walt Disney Studios Motion Pictures. Directed by Peter Sohn and produced by Denise Ream, it is written by John Hoberg, Kat Likkel, Brenda Hsueh, and Sohn. The overall twenty-seventh feature film produced by the studio, the film stars the voices of Leah Lewis, Mamoudou Athie, Ronnie del Carmen, Shila Ommi, Wendi McLendon-Covey, Catherine O'Hara, Mason Wertheimer, Joe Pera, and Matt Yang King. Set in a world inhabited by anthropomorphic elements of nature, the story depicts the bond between a fire element Ember Lumen (Lewis) and a water element Wade Ripple (Athie), who cannot touch each other but discover how much they have in common.",
		thumbnail: 'src/data/movies/elemental.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Asteroid City',
		year: 2023,
		cast: [
			'Jason Schwartzman',
			'Scarlett Johansson',
			'Tom Hanks',
			'Jeffrey Wright',
			'Tilda Swinton',
			'Bryan Cranston',
			'Edward Norton',
			'Adrien Brody',
			'Liev Schreiber',
			'Hope Davis',
			'Stephen Park',
			'Rupert Friend',
			'Maya Hawke',
			'Steve Carell',
			'Matt Dillon',
			'Hong Chau',
			'Willem Dafoe',
			'Margot Robbie',
			'Tony Revolori',
			'Jake Ryan',
			'Jeff Goldblum'
		],
		genres: ['Comedy', 'Drama', 'Science Fiction', 'Romance'],
		href: 'Asteroid_City',
		extract:
			'Asteroid City is an upcoming American science fiction romantic comedy drama film written, directed and co-produced by Wes Anderson, based on a story by Anderson and Roman Coppola. The film follows the transformative events that occur at an annual Junior Stargazer convention in 1955. It features a large ensemble cast that includes Jason Schwartzman, Scarlett Johansson, Tom Hanks, Jeffrey Wright, Tilda Swinton, Bryan Cranston, Edward Norton, Adrien Brody, Liev Schreiber, Hope Davis, Steve Park, Rupert Friend, Maya Hawke, Steve Carell, Matt Dillon, Hong Chau, Willem Dafoe, Margot Robbie, Tony Revolori, Jake Ryan, and Jeff Goldblum.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/78/Asteroidcity.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'The Blackening',
		year: 2023,
		cast: [
			'Grace Byers',
			'Jermaine Fowler',
			'Melvin Gregg',
			'X Mayo',
			'Dewayne Perkins',
			'Antoinette Robertson',
			'Sinqua Walls',
			'Jay Pharoah',
			'Yvonne Orji'
		],
		genres: ['Comedy', 'Horror'],
		href: 'The_Blackening_(film)',
		extract:
			'The Blackening is a 2022 American comedy horror film directed by Tim Story and co-written by Tracy Oliver and Dewayne Perkins, who also stars. Expanded from a 2018 short film by the improv comedy troupe 3Peat, the film follows an all-Black group of friends who encounter a killer while staying at a cabin in the woods.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/cf/The-blackening-poster.png',
		thumbnail_width: 255,
		thumbnail_height: 319
	},
	{
		title: 'Indiana Jones and the Dial of Destiny',
		year: 2023,
		cast: [
			'Harrison Ford',
			'Phoebe Waller-Bridge',
			'Antonio Banderas',
			'John Rhys-Davies',
			'Shaunette Renée Wilson',
			'Thomas Kretschmann',
			'Toby Jones',
			'Boyd Holbrook',
			'Ethann Isidore',
			'Mads Mikkelsen'
		],
		genres: ['Action', 'Adventure'],
		href: 'Indiana_Jones_and_the_Dial_of_Destiny',
		extract:
			'Indiana Jones and the Dial of Destiny is an upcoming American action adventure film directed by James Mangold, who co-wrote it with Jez Butterworth, John-Henry Butterworth, and David Koepp. Produced by Lucasfilm and Walt Disney Pictures, and distributed by Walt Disney Studios Motion Pictures, the film is a sequel to Indiana Jones and the Kingdom of the Crystal Skull (2008) and will serve as the fifth and final installment in the Indiana Jones film series. The film stars Harrison Ford in his final portrayal of archaeologist Indiana Jones. John Rhys-Davies reprises his role as Sallah from earlier films, along with new cast members including Phoebe Waller-Bridge, Antonio Banderas, Shaunette Renée Wilson, Thomas Kretschmann, Toby Jones, Boyd Holbrook, Ethann Isidore, and Mads Mikkelsen.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/c/c3/Indiana_Jones_and_the_Dial_of_Destiny_theatrical_poster.jpg',
		thumbnail_width: 255,
		thumbnail_height: 391
	},
	{
		title: 'Ruby Gillman, Teenage Kraken',
		year: 2023,
		cast: [
			'Lana Condor',
			'Toni Collette',
			'Annie Murphy',
			'Sam Richardson',
			'Liza Koshy',
			'Will Forte',
			'Colman Domingo',
			'Jaboukie Young-White',
			'Nicole Byer',
			'Jane Fonda'
		],
		genres: ['Action', 'Animated', 'Comedy', 'Fantasy'],
		href: 'Ruby_Gillman,_Teenage_Kraken',
		extract:
			"Ruby Gillman, Teenage Kraken is an upcoming American computer-animated coming-of-age fantasy action-comedy film produced by DreamWorks Animation and distributed by Universal Pictures. It is directed by Kirk DeMicco and co-directed by Faryn Pearl, from a screenplay written by DeMicco and Pam Brady, and a story by Brady, Brian C. Brown, and Elliott DiGuiseppi. The film features an ensemble voice cast including Lana Condor, Toni Collette, Annie Murphy, Sam Richardson, Liza Koshy, Will Forte, Colman Domingo, Jaboukie Young-White, Blue Chapman, Eduardo Franco, Ramona Young, Echo Kellum, Nicole Byer, and Jane Fonda. In the film, sixteen-year-old Ruby Gillman (Condor) is desperate to fit in at Oceanside High, but when she breaks her mother's (Collette) rule about going on the beach with any would-be friends, Ruby discovers that she is a direct descendant of the warrior Kraken queens and is destined to inherit the throne from her commanding grandmother, the Warrior Queen of the Seven Seas (Fonda).",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/6/61/Ruby_Gillman_Teenage_Kraken_2023_poster.jpeg',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: 'Insidious: The Red Door',
		year: 2023,
		cast: ['Ty Simpkins', 'Patrick Wilson', 'Rose Byrne'],
		genres: ['Horror', 'Supernatural'],
		href: 'Insidious:_The_Red_Door',
		extract:
			'Insidious: The Red Door is an upcoming American supernatural horror film directed by Patrick Wilson in his directorial debut, with a screenplay by Scott Teems from a story by series creator Leigh Whannell. The film is a direct sequel to Insidious (2010) and Insidious: Chapter 2 (2013), and serves as both the fifth installment in the Insidious franchise and the fifth installment in terms of chronology. Wilson, Rose Byrne, Ty Simpkins and Andrew Astor reprise their roles from the films.',
		thumbnail: 'src/data/movies/TheRedDoor.jpeg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Joy Ride',
		year: 2023,
		cast: ['Ashley Park', 'Sherry Cola', 'Stephanie Hsu', 'Sabrina Wu'],
		genres: ['Comedy'],
		href: 'Joy_Ride_(2023_film)',
		extract:
			'Joy Ride is a 2023 American comedy film directed by Adele Lim, in her feature directorial debut, and written by Cherry Chevapravatdumrong and Teresa Hsiao, from a story by Lim, Chevapravatdumrong and Hsiao. The film stars Ashley Park, Sherry Cola, Stephanie Hsu, and Sabrina Wu.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Joy_Ride_2023_film.jpg',
		thumbnail_width: 259,
		thumbnail_height: 383
	},
	{
		title: 'Mission: Impossible – Dead Reckoning Part One',
		year: 2023,
		cast: [
			'Tom Cruise',
			'Simon Pegg',
			'Ving Rhames',
			'Rebecca Ferguson',
			'Vanessa Kirby',
			'Esai Morales',
			'Hayley Atwell',
			'Pom Klementieff',
			'Shea Whigham',
			'Henry Czerny',
			'Cary Elwes'
		],
		genres: ['Action', 'Spy'],
		href: 'Mission:_Impossible_%E2%80%93_Dead_Reckoning_Part_One',
		extract:
			'Mission: Impossible – Dead Reckoning Part One is an upcoming American action spy film written, produced, and directed by Christopher McQuarrie. It is the sequel to Mission: Impossible – Fallout (2018) and is the seventh installment in the Mission: Impossible film series. The film stars Tom Cruise, Ving Rhames, Simon Pegg, Rebecca Ferguson, Vanessa Kirby, Hayley Atwell, Shea Whigham, Pom Klementieff, Esai Morales, Rob Delaney, Henry Czerny, and Cary Elwes.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/e/ed/Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg',
		thumbnail_width: 261,
		thumbnail_height: 384
	},
	{
		title: 'Oppenheimer',
		year: 2023,
		cast: [
			'Cillian Murphy',
			'Emily Blunt',
			'Matt Damon',
			'Robert Downey Jr.',
			'Rami Malek',
			'Florence Pugh',
			'Benny Safdie',
			'Michael Angarano',
			'Josh Hartnett',
			'Kenneth Branagh',
			'Dane DeHaan',
			'Dylan Arnold',
			'David Krumholtz',
			'Alden Ehrenreich',
			'Matthew Modine'
		],
		genres: ['Biography'],
		href: 'Oppenheimer_(film)',
		extract:
			'Oppenheimer is an upcoming biographical film written and directed by Christopher Nolan. It is based on American Prometheus, a biography written by Kai Bird and Martin J. Sherwin. The film stars Cillian Murphy as J. Robert Oppenheimer, an American theoretical physicist credited with being the "father of the atomic bomb" for his role in the Manhattan Project—the World War II undertaking that developed the first nuclear weapons, with a supporting ensemble cast that includes Emily Blunt, Robert Downey Jr., Matt Damon, Rami Malek, Florence Pugh, Benny Safdie, Michael Angarano, Josh Hartnett and Kenneth Branagh. It is a co-production between Universal Pictures, Syncopy Inc. and Atlas Entertainment, with Nolan producing the film alongside Emma Thomas and Charles Roven.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: 'Barbie',
		year: 2023,
		cast: [
			'Margot Robbie',
			'Ryan Gosling',
			'America Ferrera',
			'Kate McKinnon',
			'Issa Rae',
			'Rhea Perlman',
			'Hari Nef',
			'Alexandra Shipp',
			'Emma Mackey',
			'Connor Swindells',
			'Michael Cera',
			'Sharon Rooney',
			'John Cena',
			'Kingsley Ben-Adir',
			'Simu Liu',
			'Ariana Greenblatt',
			'Scott Evans',
			'Jamie Demetriou',
			'Dua Lipa',
			'Ncuti Gatwa',
			'Nicola Coughlan',
			'Emerald Fennell',
			'Ana Cruz Kayne',
			'Will Ferrell',
			'Helen Mirren'
		],
		genres: ['Comedy'],
		href: 'Barbie_(film)',
		extract:
			'Barbie is an upcoming comedy film directed by Greta Gerwig, who co-wrote it with Noah Baumbach. Based on the Barbie fashion dolls by Mattel, the film is the first live-action Barbie film after several computer-animated direct-to-video and streaming television films. The film stars Margot Robbie and Ryan Gosling as Barbie and Ken, respectively, alongside a large ensemble supporting cast.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg',
		thumbnail_width: 260,
		thumbnail_height: 385
	},
	{
		title: 'Haunted Mansion',
		year: 2023,
		cast: [
			'LaKeith Stanfield',
			'Tiffany Haddish',
			'Owen Wilson',
			'Danny DeVito',
			'Rosario Dawson',
			'Chase W. Dillon',
			'Dan Levy',
			'Jamie Lee Curtis',
			'Jared Leto'
		],
		genres: ['Comedy', 'Horror', 'Supernatural'],
		href: 'Haunted_Mansion_(2023_film)',
		extract:
			"Haunted Mansion is an upcoming American supernatural horror comedy film directed by Justin Simien from a screenplay by Katie Dippold. The film stars LaKeith Stanfield, Tiffany Haddish, Owen Wilson, Danny DeVito, Rosario Dawson, Chase W. Dillon, Dan Levy, Jamie Lee Curtis, and Jared Leto. Produced by Walt Disney Pictures and Rideback, it is the second theatrical film adaptation of Walt Disney's theme park attraction The Haunted Mansion, following the 2003 film of the same name. In the film, Gabbie (Dawson) and Travis (Dillon) enlists the aid of a team to help exorcise the mansion and destroy the ghosts around them.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/3/31/Haunted_Mansion_%282023%29_poster.jpg',
		thumbnail_width: 220,
		thumbnail_height: 326
	},
	{
		title: 'Gran Turismo',
		year: 2023,
		cast: [
			'David Harbour',
			'Orlando Bloom',
			'Archie Madekwe',
			'Darren Barnet',
			'Geri Halliwell Horner',
			'Djimon Hounsou'
		],
		genres: ['Drama', 'Sports', 'Biography', 'Teen'],
		href: 'Gran_Turismo_(film)',
		extract:
			'Gran Turismo is an upcoming American biographical coming of age sports drama film directed by Neill Blomkamp from a screenplay by Jason Hall and Zach Baylin. Produced by Columbia Pictures, PlayStation Productions, Trigger Street Productions, and 2.0 Entertainment, the film is based on the video game series of the same name developed by Polyphony Digital. Also based on a true story, the film stars Archie Madekwe as Jann Mardenborough, a teenage Gran Turismo player aspiring to be a race car driver. It also stars David Harbour, Orlando Bloom, Darren Barnet, Geri Halliwell Horner, and Djimon Hounsou.',
		thumbnail: 'src/data/movies/gran_turismo.jpg',
		thumbnail_width: 320,
		thumbnail_height: 180
	},
	{
		title: 'Blue Beetle',
		year: 2023,
		cast: [
			'Xolo Maridueña',
			'Adriana Barraza',
			'Damián Alcázar',
			'Elpidia Carrillo',
			'Bruna Marquezine',
			'Raoul Max Trujillo',
			'Susan Sarandon',
			'George Lopez'
		],
		genres: ['Superhero'],
		href: 'Blue_Beetle_(film)',
		extract:
			'Blue Beetle is an upcoming American superhero film based on the DC Comics character Jaime Reyes / Blue Beetle, produced by DC Studios and the Safran Company, and directed by Angel Manuel Soto from a screenplay by Gareth Dunnet-Alcocer. It is intended to be the 14th film in the DC Extended Universe (DCEU). The film stars Xolo Maridueña as Jaime Reyes / Blue Beetle alongside Adriana Barraza, Damián Alcázar, Elpidia Carrillo, Bruna Marquezine, Raoul Max Trujillo, Susan Sarandon, and George Lopez.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Blue_Beetle_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'White Bird: A Wonder Story',
		year: 2023,
		cast: [
			'Ariella Glaser',
			'Orlando Schwerdt',
			'Bryce Gheisar',
			'Gillian Anderson',
			'Helen Mirren'
		],
		genres: ['Drama', 'War'],
		href: 'White_Bird:_A_Wonder_Story',
		extract:
			'White Bird: A Wonder Story is an upcoming American war drama film directed by Marc Forster and written by Mark Bomback, based on the 2019 graphic novel of the same name by R. J. Palacio. A spin-off, prequel and "companion piece" to the 2017 coming-of-age film Wonder, based on Palacio\'s 2012 novel, the film stars Ariella Glaser, Orlando Schwerdt, Bryce Gheisar, Gillian Anderson, and Helen Mirren, with Gheisar reprising his role as Julian from Wonder.',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/d/da/White_Bird_-_A_Wonder_Story_film_poster.png',
		thumbnail_width: 264,
		thumbnail_height: 394
	},
	{
		title: 'The Hill',
		year: 2023,
		cast: ['Colin Ford', 'Dennis Quaid', 'Joelle Carter', 'Scott Glenn'],
		genres: ['Drama', 'Sports', 'Biography'],
		href: 'The_Hill_(2023_film)',
		extract:
			'The Hill is an upcoming American biographical sports drama film directed by Jeff Celentano and written by Angelo Pizzo and Scott Marshall Smith. It stars Dennis Quaid, Colin Ford, Joelle Carter, Randy Houser, Bonnie Bedelia and Scott Glenn.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/07/The_Hill_2023_Poster.png',
		thumbnail_width: 255,
		thumbnail_height: 377
	},
	{
		title: 'The Nun 2',
		year: 2023,
		cast: ['Storm Reid', 'Taissa Farmiga', 'Anna Popplewell'],
		genres: ['Horror', 'Supernatural'],
		href: 'The_Nun_2',
		extract:
			'The Nun 2 is an upcoming American gothic supernatural horror film directed by Michael Chaves and written by Akela Cooper, Ian Goldberg, and Richard Naing from a story by Cooper. It serves as the sequel to The Nun (2018) and the ninth installment in The Conjuring Universe franchise. The film stars Storm Reid, Taissa Farmiga, and Anna Popplewell. Wan and Peter Safran return as co-producers, with Judson Scott also serving as a producer.',
		thumbnail: 'src/data/movies/TheNun.jpeg',
		thumbnail_width: 255,
		thumbnail_height: 377
	},
	{
		title: 'A Haunting in Venice',
		year: 2023,
		cast: [
			'Kyle Allen',
			'Kenneth Branagh',
			'Camille Cottin',
			'Jamie Dornan',
			'Tina Fey',
			'Jude Hill',
			'Kelly Reilly',
			'Michelle Yeoh'
		],
		genres: ['Mystery'],
		href: 'A_Haunting_in_Venice',
		extract:
			"A Haunting in Venice is an upcoming American mystery film directed by Kenneth Branagh, based on Hallowe'en Party by Agatha Christie. The film is a sequel to Murder on the Orient Express (2017) and Death on the Nile (2022). Branagh reprises his role as Hercule Poirot, alongside Kyle Allen, Camille Cottin, Jamie Dornan, Tina Fey, Jude Hill, Kelly Reilly, and Michelle Yeoh.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/A_Haunting_in_Venice_logo.jpg/320px-A_Haunting_in_Venice_logo.jpg',
		thumbnail_width: 320,
		thumbnail_height: 216
	},
	{
		title: 'Kraven the Hunter',
		year: 2023,
		cast: [
			'Aaron Taylor-Johnson',
			'Ariana DeBose',
			'Alessandro Nivola',
			'Fred Hechinger',
			'Levi Miller',
			'Christopher Abbott',
			'Russell Crowe'
		],
		genres: ['Superhero'],
		href: 'Kraven_the_Hunter_(film)',
		extract:
			"Kraven the Hunter is an upcoming American superhero film based on the Marvel Comics character of the same name, produced by Columbia Pictures in association with Marvel. Distributed by Sony Pictures Releasing, it is intended to be the fourth film in Sony's Spider-Man Universe (SSU). The film is being directed by J. C. Chandor from a screenplay by Art Marcum & Matt Holloway and Richard Wenk, and stars Aaron Taylor-Johnson in the title role alongside Ariana DeBose and Fred Hechinger.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Kraven_the_Hunter_%28film%29.jpg/320px-Kraven_the_Hunter_%28film%29.jpg',
		thumbnail_width: 320,
		thumbnail_height: 107
	},
	{
		title: "Five Nights at Freddy's",
		year: 2023,
		cast: ['Josh Hutcherson', 'Matthew Lillard', 'Mary Stuart Masterson', 'Elizabeth Lail'],
		genres: ['Horror', 'Supernatural'],
		href: 'Five_Nights_at_Freddy%27s_(film)',
		extract:
			"Five Nights at Freddy's is an upcoming American supernatural horror film directed by Emma Tammi, from a screenplay she co-wrote with Scott Cawthon and Seth Cuddeback, based on the video game franchise of the same name created and developed by Cawthon. It stars Josh Hutcherson, Matthew Lillard, Mary Stuart Masterson, Piper Rubio, Kat Conner Sterling, and Elizabeth Lail.",
		thumbnail: 'src/data/movies/FiveNights.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'The Marvels',
		year: 2023,
		cast: ['Brie Larson', 'Teyonah Parris', 'Iman Vellani', 'Zawe Ashton', 'Samuel L. Jackson'],
		genres: ['Superhero'],
		href: 'The_Marvels',
		extract:
			'The Marvels is an upcoming American superhero film based on Marvel Comics featuring the characters Carol Danvers / Captain Marvel, Kamala Khan / Ms. Marvel, and Monica Rambeau. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is intended to be the sequel to the film Captain Marvel (2019), a continuation of the television series Ms. Marvel (2022), and the 33rd film in the Marvel Cinematic Universe (MCU). The film is directed by Nia DaCosta from a screenplay she co-wrote with Megan McDonnell, Elissa Karasik, and Zeb Wells. It stars Brie Larson as Carol Danvers, Iman Vellani as Kamala Khan, and Teyonah Parris as Monica Rambeau, alongside Samuel L. Jackson. In the film, Danvers, Khan, and Rambeau begin swapping places with each other every time they use their powers and must team-up.',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7a/The_Marvels_poster.jpg',
		thumbnail_width: 259,
		thumbnail_height: 384
	},
	{
		title: 'Chicken Run: Dawn of the Nugget',
		year: 2023,
		cast: [
			'Zachary Levi',
			'Thandiwe Newton',
			'Bella Ramsey',
			'Romesh Ranganathan',
			'David Bradley',
			'Daniel Mays',
			'Jane Horrocks',
			'Imelda Staunton',
			'Lynn Ferguson',
			'Nick Mohammed'
		],
		genres: ['Adventure', 'Animated', 'Comedy'],
		href: 'Chicken_Run:_Dawn_of_the_Nugget',
		extract:
			"Chicken Run is a 2000 stop-motion animated adventure comedy film produced by Pathé and Aardman Animations in partnership with DreamWorks Animation. Aardman's first feature-length film, it was directed by Peter Lord and Nick Park from a screenplay by Karey Kirkpatrick and based on an original story by Lord and Park. The film stars the voices of Julia Sawalha, Mel Gibson, Tony Haygarth, Miranda Richardson, Phil Daniels, Lynn Ferguson, Timothy Spall, Imelda Staunton, and Benjamin Whitrow. The plot centres on a group of British anthropomorphic chickens who see an American rooster named Rocky Rhodes as their only hope to escape the farm when their owners want to turn them into meat pies.",
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Chicken_run_ver1.jpg/320px-Chicken_run_ver1.jpg',
		thumbnail_width: 320,
		thumbnail_height: 228
	},
	{
		title: 'The Hunger Games: The Ballad of Songbirds and Snakes',
		year: 2023,
		cast: [
			'Tom Blyth',
			'Rachel Zegler',
			'Josh Andrés Rivera',
			'Hunter Schafer',
			'Jason Schwartzman',
			'Burn Gorman',
			'Peter Dinklage',
			'Viola Davis'
		],
		genres: ['Action', 'Science Fiction'],
		href: 'The_Hunger_Games:_The_Ballad_of_Songbirds_and_Snakes',
		extract:
			'The Hunger Games: The Ballad of Songbirds and Snakes is an upcoming American science fiction action film directed by Francis Lawrence from a screenplay by Michael Arndt and Michael Lesslie, based on the 2020 novel The Ballad of Songbirds and Snakes by Suzanne Collins. It is the fifth installment in The Hunger Games film series, serving as a prequel to The Hunger Games (2012). The film stars Tom Blyth, Rachel Zegler, Josh Andrés Rivera, Hunter Schafer, Jason Schwartzman, Burn Gorman, Peter Dinklage, and Viola Davis. Set 64 years before the first film, it follows the origins of Coriolanus Snow (Blyth) and his relationship with a young Hunger Games tribute Lucy Gray Baird (Zegler), which lead him on the path to becoming the tyrannical leader of Panem.',
		thumbnail: 'src/data/movies/the_hunger_games_the_ballad_of_songbirds_and_snakes.jpg',
		thumbnail_width: 255,
		thumbnail_height: 393
	},
	{
		title: 'Trolls Band Together',
		year: 2023,
		cast: [
			'Anna Kendrick',
			'Justin Timberlake',
			'Kenan Thompson',
			'Kunal Nayyar',
			'Camila Cabello',
			'Troye Sivan',
			'Kid Cudi',
			'Andrew Rannells',
			'Amy Schumer',
			'Daveed Diggs',
			'RuPaul',
			'Zosia Mamet'
		],
		genres: ['Animated', 'Comedy', 'Musical'],
		href: 'Trolls_Band_Together',
		extract:
			"Trolls Band Together is an upcoming American computer-animated musical comedy film produced by DreamWorks Animation and distributed by Universal Pictures, based on the Good Luck Trolls dolls from Thomas Dam. It is directed by Walt Dohrn and co-directed by Tim Heitz, from a screenplay by Elizabeth Tippet and the writing team of Jonathan Aibel and Glenn Berger. The film serves as the sequel to Trolls World Tour (2020) and the third installment in the Trolls franchise. Anna Kendrick, Justin Timberlake, Zooey Deschanel, Christopher Mintz-Plasse, Icona Pop, Anderson .Paak, Ron Funches, Kenan Thompson, Kunal Nayyar, and Dohrn reprise their voice roles from its predecessors, with newcomers Eric André, Kid Cudi, Daveed Diggs, Troye Sivan, Camila Cabello, Amy Schumer, Andrew Rannells, RuPaul, and Zosia Mamet joining the ensemble voice cast. In the film, Poppy (Kendrick) and Branch (Timberlake), who are officially a couple, attempt to rescue Floyd (Sivan) while reuniting Branch's brothers after the boyband phenomenon, BroZone, was disbanded.",
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Trolls3film.jpg',
		thumbnail_width: 251,
		thumbnail_height: 397
	},
	{
		title: 'Napoleon',
		year: 2023,
		cast: ['Joaquin Phoenix', 'Vanessa Kirby', 'Tahar Rahim'],
		genres: ['Drama', 'Historical'],
		href: 'Napoleon_(2023_film)',
		extract:
			"Napoleon is an upcoming epic historical drama film directed and produced by Ridley Scott and written by David Scarpa. It stars Joaquin Phoenix as Napoleon and depicts the French leader's rise to power. The film is scheduled to be theatrically released by Sony Pictures Releasing on November 22, 2023, before streaming on Apple TV+ at a later date.",
		thumbnail: 'src/data/movies/Napoleon.jpg',
		thumbnail_width: 320,
		thumbnail_height: 163
	},
	{
		title: 'Wonka',
		year: 2023,
		cast: [
			'Timothée Chalamet',
			'Keegan-Michael Key',
			'Sally Hawkins',
			'Jim Carter',
			'Matt Lucas',
			'Natasha Rothwell',
			'Olivia Colman',
			'Rowan Atkinson'
		],
		genres: ['Fantasy', 'Musical'],
		href: 'Wonka_(film)',
		extract:
			'Wonka is an upcoming musical fantasy film directed by Paul King, who co-wrote the screenplay with Simon Farnaby. The film serves as a prequel to the 1964 novel Charlie and the Chocolate Factory by Roald Dahl and stars Timothée Chalamet as the titular character, following his early days as an eccentric chocolatier. Keegan-Michael Key, Rowan Atkinson, Sally Hawkins, Olivia Colman, and Jim Carter star in supporting roles.',
		thumbnail: 'src/data/movies/Wonka.jpg',
		thumbnail_width: 320,
		thumbnail_height: 163
	}
];

export const peliculasConEstrellas = peliculas.forEach((element) => {
	let estrellas = parseFloat((Math.random() * 9 + 1).toFixed(2)); //toFixed(2)con 2 decimales de 1 a 10
	let minutos = parseFloat((Math.random() * (240 - 80) + 80).toFixed(2)); //minutos entre 80 y 240
	let nombredirector = directoresDeCine[Math.floor(Math.random() * directoresDeCine.length)];
	let nombrefotografo = fotografosDeCine[Math.floor(Math.random() * fotografosDeCine.length)];
	let id=1;

	element.stars = estrellas; // añadimos propiedad "stars" a las peliculas
	element.duration = minutos; // añadimos propiedad "duration" a las peliculas
	element.director = nombredirector; // añadimos propiedad "director" a las peliculas
	element.photographer = nombrefotografo; // añadimos propiedad "photographer" a las peliculas
	element.year = Math.floor(Math.random() * (2023 - 2000 + 1)) + 2000;
	element.id=id++;
});
