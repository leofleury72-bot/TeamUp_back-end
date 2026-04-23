const express = require("express");
const cors = require("cors");
const port = 3310;
const app = express();

const sports = [
	"Archery",
	"Badminton",
	"Basketball",
	"Boxing",
	"Climbing",
	"Cycling",
	"Dance",
	"Football",
	"Gym",
	"Handball",
	"Judo",
	"Karate",
	"Kayaking",
	"Paddleboarding",
	"Pilates",
	"Rugby",
	"Running",
	"Skating",
	"Surfing",
	"Swimming",
	"Tennis",
	"Volleyball",
	"Yoga",
];

const events = [
	{
		id: 1,
		img_url_event:
			"https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80",
		name: "Foot du dimanche",
		host: "jean_dupont",
		localisation: "Stade municipal, Lyon",
		description:
			"Match amical entre deux équipes de quartier. Tous niveaux bienvenus, venez avec vos crampons !",
		date: "2026-11-17",
		heure: "10:00",
		max_people: 22,
		people_joining: ["alice93", "bob_runner", "carlos_v"],
		sport: {
			name: "Football",
			niveau: "Débutant",
		},
		is_done: false,
		comments: [],
	},
	{
		id: 2,
		img_url_event:
			"https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
		name: "Footing matinal",
		host: "marie_sport",
		localisation: "Parc de la Tête d'Or, Lyon",
		description:
			"Session de course légère de 8 km autour du parc. Ambiance détendue, on attend personne !",
		date: "2026-11-18",
		heure: "07:30",
		max_people: 15,
		people_joining: ["jean_dupont", "lucia_m"],
		sport: {
			name: "Running",
			niveau: "Intermédiaire",
		},
		is_done: false,
		comments: ["Prévoyez de l'eau !"],
	},
	{
		id: 3,
		img_url_event:
			"https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80",
		name: "Tournoi tennis doubles",
		host: "tennisman42",
		localisation: "Club Tennis, Bordeaux",
		description:
			"Tournoi interne au club en format doubles. 8 équipes maximum, inscriptions fermes.",
		date: "2026-11-09",
		heure: "14:00",
		max_people: 16,
		people_joining: [
			"alice93",
			"pierre_k",
			"natalia_s",
			"omar_b",
			"yuki_t",
			"hugo_lp",
		],
		sport: {
			name: "Tennis",
			niveau: "Avancé",
		},
		is_done: true,
		comments: ["Belle journée, les vainqueurs : alice93 & pierre_k"],
	},
	{
		id: 4,
		img_url_event:
			"https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
		name: "Yoga plein air",
		host: "zen_claire",
		localisation: "Berges de la Garonne, Bordeaux",
		description:
			"Séance de yoga Vinyasa en extérieur. Tapis indispensable, prévoir une tenue confortable.",
		date: "2026-11-20",
		heure: "08:00",
		max_people: 20,
		people_joining: ["marie_sport", "lucia_m", "natalia_s"],
		sport: {
			name: "Yoga",
			niveau: "Tous niveaux",
		},
		is_done: false,
		comments: [],
	},
	{
		id: 5,
		img_url_event:
			"https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
		name: "Basket 3x3",
		host: "slam_dunk_leo",
		localisation: "Place du Capitole, Toulouse",
		description:
			"Pickup game de basket en 3x3. On joue jusqu'à 15 points, les perdants laissent la place.",
		date: "2026-11-19",
		heure: "18:00",
		max_people: 12,
		people_joining: ["carlos_v", "omar_b", "hugo_lp"],
		sport: {
			name: "Basketball",
			niveau: "Intermédiaire",
		},
		is_done: false,
		comments: [],
	},
	{
		id: 6,
		img_url_event:
			"https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
		name: "Escalade salle",
		host: "grip_sarah",
		localisation: "Salle Climb Up, Lille",
		description:
			"Session bloc en salle. On se retrouve à l'entrée et on grimpe ensemble. Chaussons fournis sur place.",
		date: "2026-11-19",
		heure: "19:30",
		max_people: 8,
		people_joining: ["yuki_t", "pierre_k"],
		sport: {
			name: "Escalade",
			niveau: "Débutant",
		},
		is_done: false,
		comments: [],
	},
	{
		id: 7,
		img_url_event:
			"https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80",
		name: "Vélo Beaujolais",
		host: "pedal_thomas",
		localisation: "Vieux-Port, Marseille",
		description:
			"Grande sortie vélo de route vers les collines du Beaujolais, environ 80 km. Niveau cardio requis.",
		date: "2026-11-23",
		heure: "08:30",
		max_people: 10,
		people_joining: ["jean_dupont", "marie_sport", "carlos_v", "alice93"],
		sport: {
			name: "Cyclisme",
			niveau: "Avancé",
		},
		is_done: false,
		comments: ["Vérifiez vos pneus avant de venir !"],
	},
	{
		id: 8,
		img_url_event:
			"https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80",
		name: "Natation libre",
		host: "aqua_remi",
		localisation: "Piscine Municipale, Nantes",
		description:
			"Créneaux de natation libre réservé en groupe. Idéal pour travailler son endurance.",
		date: "2026-11-21",
		heure: "12:00",
		max_people: 6,
		people_joining: ["lucia_m", "natalia_s"],
		sport: {
			name: "Natation",
			niveau: "Intermédiaire",
		},
		is_done: false,
		comments: [],
	},
	{
		id: 9,
		img_url_event:
			"https://images.unsplash.com/photo-1565078682561-700bdf3cdfcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0YW5xdWV8ZW58MHx8MHx8fDA%3D",

		name: "Pétanque apéro",
		host: "boule_francois",
		localisation: "Place du Général de Gaulle, Lille",
		description:
			"Partie de pétanque conviviale suivie d'un apéro. Bouliers disponibles sur place.",
		date: "2026-11-10",
		heure: "16:00",
		max_people: 12,
		people_joining: [
			"bob_runner",
			"pierre_k",
			"hugo_lp",
			"zen_claire",
			"marie_sport",
		],
		sport: {
			name: "Pétanque",
			niveau: "Tous niveaux",
		},
		is_done: true,
		comments: ["Super ambiance, on remet ça bientôt !"],
	},
	{
		id: 10,
		img_url_event:
			"https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80",
		name: "Badminton salle",
		host: "shuttle_ines",
		localisation: "Gymnase Central, Paris",
		description:
			"Séance de badminton mixte. Raquettes disponibles en nombre limité, préférez la vôtre.",
		date: "2026-11-22",
		heure: "20:00",
		max_people: 8,
		people_joining: ["yuki_t", "omar_b", "lucia_m"],
		sport: {
			name: "Badminton",
			niveau: "Débutant",
		},
		is_done: false,
		comments: [],
	},
	{
		id: 11,
		img_url_event:
			"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
		name: "Trail nocturne",
		host: "night_runner_kim",
		localisation: "Butte Montmartre, Paris",
		description:
			"Trail de nuit sur les collines de Fourvière et Saint-Just. Frontale obligatoire, environ 12 km.",
		date: "2026-11-22",
		heure: "21:00",
		max_people: 20,
		people_joining: ["marie_sport", "pedal_thomas", "grip_sarah"],
		sport: {
			name: "Trail",
			niveau: "Avancé",
		},
		is_done: false,
		comments: ["Météo ok, feu vert pour vendredi"],
	},
	{
		id: 12,
		img_url_event:
			"https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
		name: "Boxe débutants",
		host: "coach_victor",
		localisation: "Salle de Boxe, Strasbourg",
		description:
			"Initiation à la boxe anglaise pour les novices. Gants fournis, tenue de sport requise.",
		date: "2026-11-16",
		heure: "10:30",
		max_people: 10,
		people_joining: ["carlos_v", "hugo_lp", "alice93", "bob_runner"],
		sport: {
			name: "Boxe",
			niveau: "Débutant",
		},
		is_done: true,
		comments: ["Excellent coaching, on revient !"],
	},
	{
		id: 13,
		img_url_event:
			"https://images.unsplash.com/photo-1584846884362-e1ea3d18e53f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpc2JlZSUyMHVsdGltYXRlfGVufDB8fDB8fHww",
		name: "Frisbee ultimate",
		host: "disc_leo",
		localisation: "Parc de la Citadelle, Strasbourg",
		description:
			"Match d'ultimate frisbee en format 7v7. Pas besoin d'expérience, l'esprit fair-play prime.",
		date: "2026-11-24",
		heure: "15:00",
		max_people: 14,
		people_joining: ["jean_dupont", "natalia_s", "yuki_t"],
		sport: {
			name: "Ultimate Frisbee",
			niveau: "Tous niveaux",
		},
		is_done: false,
		comments: [],
	},
	{
		id: 14,
		img_url_event:
			"https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
		name: "Volleyball plage",
		host: "spike_valeria",
		localisation: "Plage du Prado, Marseille",
		description:
			"Beach volley 2v2 et 3v3 sur les terrains de sable des berges. Ambiance estivale garantie.",
		date: "2026-11-25",
		heure: "14:00",
		max_people: 12,
		people_joining: ["slam_dunk_leo", "aqua_remi", "zen_claire"],
		sport: {
			name: "Volleyball",
			niveau: "Intermédiaire",
		},
		is_done: false,
		comments: ["Prévoir crème solaire même en novembre !"],
	},
	{
		id: 15,
		img_url_event:
			"https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
		name: "Rando Mont Pilat",
		host: "hike_bernard",
		localisation: "Col de Chaubouret, Saint-Étienne",
		description:
			"Randonnée en groupe de 18 km sur les crêtes du Pilat. Chaussures de marche obligatoires, pique-nique à prévoir.",
		date: "2026-11-30",
		heure: "09:00",
		max_people: 15,
		people_joining: [
			"marie_sport",
			"pedal_thomas",
			"night_runner_kim",
			"boule_francois",
		],
		sport: {
			name: "Randonnée",
			niveau: "Intermédiaire",
		},
		is_done: false,
		comments: ["Covoiturage organisé depuis Lyon, voir le fil de discussion"],
	},
];

const users = [
	{
		id: 1,
		username: "alice_fit",
		name: "Alice",
		age: 25,
		sport: [
			{ name: "Football", niveau: "intermediate", duration: 3 },
			{ name: "Running", niveau: "beginner", duration: 2 },
		],
		bio: "Passionnée de sport collectif et de running, toujours prête pour un nouveau défi.",
		url_image: "https://randomuser.me/api/portraits/women/1.jpg",
		location: "Paris",
	},
	{
		id: 2,
		username: "bob_pro",
		name: "Bob",
		age: 30,
		sport: [
			{ name: "Basketball", niveau: "advanced", duration: 5 },
			{ name: "Running", niveau: "beginner", duration: 4 },
			{ name: "Gym", niveau: "intermediate", duration: 3 },
		],
		bio: "Athlète confirmé, j’adore me dépasser entre salle de sport et terrain.",
		url_image: "https://randomuser.me/api/portraits/men/2.jpg",
		location: "Lyon",
	},
	{
		id: 3,
		username: "charlie_run",
		name: "Charlie",
		age: 22,
		sport: [{ name: "Running", niveau: "beginner", duration: 4 }],
		bio: "Débutant en course à pied, objectif : courir un semi-marathon.",
		url_image: "https://randomuser.me/api/portraits/men/3.jpg",
		location: "Marseille",
	},
	{
		id: 4,
		username: "david_tennis",
		name: "David",
		age: 28,
		sport: [
			{ name: "Tennis", niveau: "intermediate", duration: 2 },
			{ name: "Swimming", niveau: "beginner", duration: 2 },
		],
		bio: "Fan de tennis et amateur de natation pour garder la forme.",
		url_image: "https://randomuser.me/api/portraits/men/4.jpg",
		location: "Bordeaux",
	},
	{
		id: 5,
		username: "emma_zen",
		name: "Emma",
		age: 24,
		sport: [{ name: "Yoga", niveau: "beginner", duration: 6 }],
		bio: "Yoga lover 🧘‍♀️ à la recherche d’équilibre et de sérénité au quotidien.",
		url_image: "https://randomuser.me/api/portraits/women/5.jpg",
		location: "Nice",
	},
	{
		id: 6,
		username: "lucas_cycle",
		name: "Lucas",
		age: 27,
		sport: [
			{ name: "Cycling", niveau: "advanced", duration: 5 },
			{ name: "Running", niveau: "intermediate", duration: 3 },
		],
		bio: "Cycliste passionné, toujours partant pour une sortie longue distance.",
		url_image: "https://randomuser.me/api/portraits/men/6.jpg",
		location: "Lille",
	},
	{
		id: 7,
		username: "sofia_swim",
		name: "Sofia",
		age: 21,
		sport: [
			{ name: "Swimming", niveau: "intermediate", duration: 3 },
			{ name: "Yoga", niveau: "beginner", duration: 2 },
		],
		bio: "Entre piscine et yoga, je cherche l’équilibre parfait.",
		url_image: "https://randomuser.me/api/portraits/women/7.jpg",
		location: "Toulouse",
	},
	{
		id: 8,
		username: "nathan_box",
		name: "Nathan",
		age: 29,
		sport: [{ name: "Boxing", niveau: "advanced", duration: 4 }],
		bio: "Boxeur passionné, discipline et détermination sont mes moteurs.",
		url_image: "https://randomuser.me/api/portraits/men/8.jpg",
		location: "Nantes",
	},
	{
		id: 9,
		username: "chloe_dance",
		name: "Chloe",
		age: 23,
		sport: [
			{ name: "Dance", niveau: "intermediate", duration: 5 },
			{ name: "Pilates", niveau: "beginner", duration: 3 },
		],
		bio: "Danseuse dans l’âme, j’aime m’exprimer à travers le mouvement.",
		url_image: "https://randomuser.me/api/portraits/women/9.jpg",
		location: "Strasbourg",
	},
	{
		id: 10,
		username: "hugo_fit",
		name: "Hugo",
		age: 31,
		sport: [
			{ name: "Gym", niveau: "advanced", duration: 6 },
			{ name: "Climbing", niveau: "intermediate", duration: 2 },
		],
		bio: "Accro à la salle et à l’escalade, toujours en quête de performance.",
		url_image: "https://randomuser.me/api/portraits/men/10.jpg",
		location: "Rennes",
	},
	{
		id: 11,
		username: "lina_pilates",
		name: "Lina",
		age: 26,
		sport: [{ name: "Pilates", niveau: "beginner", duration: 3 }],
		bio: "Pilates pour renforcer le corps et l’esprit en douceur.",
		url_image: "https://randomuser.me/api/portraits/women/11.jpg",
		location: "Montpellier",
	},
	{
		id: 12,
		username: "tom_climb",
		name: "Tom",
		age: 28,
		sport: [
			{ name: "Climbing", niveau: "intermediate", duration: 2 },
			{ name: "Gym", niveau: "beginner", duration: 3 },
		],
		bio: "Grimpeur amateur, toujours à la recherche de nouvelles sensations.",
		url_image: "https://randomuser.me/api/portraits/men/12.jpg",
		location: "Grenoble",
	},
	{
		id: 13,
		username: "sarah_run",
		name: "Sarah",
		age: 24,
		sport: [{ name: "Running", niveau: "advanced", duration: 5 }],
		bio: "Runner expérimentée, j’adore les longues distances et les défis.",
		url_image: "https://randomuser.me/api/portraits/women/13.jpg",
		location: "Dijon",
	},
	{
		id: 14,
		username: "leo_foot",
		name: "Leo",
		age: 27,
		sport: [
			{ name: "Football", niveau: "beginner", duration: 2 },
			{ name: "Basketball", niveau: "beginner", duration: 2 },
		],
		bio: "Débutant mais motivé, je découvre différents sports collectifs.",
		url_image: "https://randomuser.me/api/portraits/men/14.jpg",
		location: "Reims",
	},
	{
		id: 15,
		username: "maya_flow",
		name: "Maya",
		age: 22,
		sport: [
			{ name: "Yoga", niveau: "intermediate", duration: 4 },
			{ name: "Dance", niveau: "beginner", duration: 3 },
		],
		bio: "Entre yoga et danse, je cultive énergie et créativité.",
		url_image: "https://randomuser.me/api/portraits/women/15.jpg",
		location: "Angers",
	},
];

app.use(cors("*"));
app.get("/", (req, res) => {});

app.get("/users", (req, res) => {
	res.json(users);
});

app.get("/events", (req, res) => {
	res.json(events);
});

app.get("/sports", (req, res) => {
	res.json(sports);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
