const express = require("express");
const port = 3310;
const app = express();

const events = [
	{
		id: 1,
		name: "Match de foot du dimanche",
		host: "jean_dupont",
		localisation: "Stade municipal de Lyon, Lyon",
		description:
			"Match amical entre deux équipes de quartier. Tous niveaux bienvenus, venez avec vos crampons !",
		date: "2024-11-17",
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
		name: "Footing matinal Parc",
		host: "marie_sport",
		localisation: "Parc de la Tête d'Or, Lyon",
		description:
			"Session de course légère de 8 km autour du parc. Ambiance détendue, on attend personne !",
		date: "2024-11-18",
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
		name: "Tournoi de tennis doubles",
		host: "tennisman42",
		localisation: "Club de Tennis Gerland, Lyon",
		description:
			"Tournoi interne au club en format doubles. 8 équipes maximum, inscriptions fermes.",
		date: "2024-11-09",
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
		name: "Yoga en plein air",
		host: "zen_claire",
		localisation: "Berges du Rhône, Lyon",
		description:
			"Séance de yoga Vinyasa en extérieur. Tapis indispensable, prévoir une tenue confortable.",
		date: "2024-11-20",
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
		name: "Basket 3x3 place Bellecour",
		host: "slam_dunk_leo",
		localisation: "Place Bellecour, Lyon",
		description:
			"Pickup game de basket en 3x3. On joue jusqu'à 15 points, les perdants laissent la place.",
		date: "2024-11-19",
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
		name: "Escalade salle mardi",
		host: "grip_sarah",
		localisation: "Salle Climb Up, Villeurbanne",
		description:
			"Session bloc en salle. On se retrouve à l'entrée et on grimpe ensemble. Chaussons fournis sur place.",
		date: "2024-11-19",
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
		name: "Vélo sortie Beaujolais",
		host: "pedal_thomas",
		localisation: "Départ Place des Terreaux, Lyon",
		description:
			"Grande sortie vélo de route vers les collines du Beaujolais, environ 80 km. Niveau cardio requis.",
		date: "2024-11-23",
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
		name: "Natation libre piscine Garibaldi",
		host: "aqua_remi",
		localisation: "Piscine Garibaldi, Lyon 7",
		description:
			"Créneaux de natation libre réservé en groupe. Idéal pour travailler son endurance.",
		date: "2024-11-21",
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
		name: "Pétanque apéro Croix-Rousse",
		host: "boule_francois",
		localisation: "Square de la Croix-Rousse, Lyon",
		description:
			"Partie de pétanque conviviale suivie d'un apéro. Bouliers disponibles sur place.",
		date: "2024-11-10",
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
		name: "Badminton en salle",
		host: "shuttle_ines",
		localisation: "Gymnase Joliot-Curie, Lyon 8",
		description:
			"Séance de badminton mixte. Raquettes disponibles en nombre limité, préférez la vôtre.",
		date: "2024-11-22",
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
		name: "Trail urbain nocturne",
		host: "night_runner_kim",
		localisation: "Départ Fourvière, Lyon",
		description:
			"Trail de nuit sur les collines de Fourvière et Saint-Just. Frontale obligatoire, environ 12 km.",
		date: "2024-11-22",
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
		name: "Boxe débutants samedi matin",
		host: "coach_victor",
		localisation: "Salle de Boxe Lyon Centre",
		description:
			"Initiation à la boxe anglaise pour les novices. Gants fournis, tenue de sport requise.",
		date: "2024-11-16",
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
		name: "Frisbee ultimate Gerland",
		host: "disc_leo",
		localisation: "Parc de Gerland, Lyon",
		description:
			"Match d'ultimate frisbee en format 7v7. Pas besoin d'expérience, l'esprit fair-play prime.",
		date: "2024-11-24",
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
		name: "Volleyball de plage",
		host: "spike_valeria",
		localisation: "Plage des Berges du Rhône, Lyon",
		description:
			"Beach volley 2v2 et 3v3 sur les terrains de sable des berges. Ambiance estivale garantie.",
		date: "2024-11-25",
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
		name: "Randonnée Mont Pilat",
		host: "hike_bernard",
		localisation: "Départ Col de la Croix de Chaubouret, Loire",
		description:
			"Randonnée en groupe de 18 km sur les crêtes du Pilat. Chaussures de marche obligatoires, pique-nique à prévoir.",
		date: "2024-11-30",
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
    "id": 1,
    "username": "alice_fit",
    "name": "Alice",
    "age": 25,
    "sport": [
      { "name": "Football", "niveau": "intermediate", "duration": 3 },
      { "name": "Running", "niveau": "beginner", "duration": 2 }
    ],
    "url_image": "https://example.com/user1.jpg",
    "location": "Paris"
  },
  {
    "id": 2,
    "username": "bob_pro",
    "name": "Bob",
    "age": 30,
    "sport": [
      { "name": "Basketball", "niveau": "advanced", "duration": 5 },
      { "name": "Running", "niveau": "beginner", "duration": 4 },
      { "name": "Gym", "niveau": "intermediate", "duration": 3 }
    ],
    "url_image": "https://example.com/user2.jpg",
    "location": "Lyon"
  },
  {
    "id": 3,
    "username": "charlie_run",
    "name": "Charlie",
    "age": 22,
    "sport": [
      { "name": "Running", "niveau": "beginner", "duration": 4 }
    ],
    "url_image": "https://example.com/user3.jpg",
    "location": "Marseille"
  },
  {
    "id": 4,
    "username": "david_tennis",
    "name": "David",
    "age": 28,
    "sport": [
      { "name": "Tennis", "niveau": "intermediate", "duration": 2 },
      { "name": "Swimming", "niveau": "beginner", "duration": 2 }
    ],
    "url_image": "https://example.com/user4.jpg",
    "location": "Bordeaux"
  },
  {
    "id": 5,
    "username": "emma_zen",
    "name": "Emma",
    "age": 24,
    "sport": [
      { "name": "Yoga", "niveau": "beginner", "duration": 6 }
    ],
    "url_image": "https://example.com/user5.jpg",
    "location": "Nice"
  },
  {
    "id": 6,
    "username": "lucas_cycle",
    "name": "Lucas",
    "age": 27,
    "sport": [
      { "name": "Cycling", "niveau": "advanced", "duration": 5 },
      { "name": "Running", "niveau": "intermediate", "duration": 3 }
    ],
    "url_image": "https://example.com/user6.jpg",
    "location": "Lille"
  },
  {
    "id": 7,
    "username": "sofia_swim",
    "name": "Sofia",
    "age": 21,
    "sport": [
      { "name": "Swimming", "niveau": "intermediate", "duration": 3 },
      { "name": "Yoga", "niveau": "beginner", "duration": 2 }
    ],
    "url_image": "https://example.com/user7.jpg",
    "location": "Toulouse"
  },
  {
    "id": 8,
    "username": "nathan_box",
    "name": "Nathan",
    "age": 29,
    "sport": [
      { "name": "Boxing", "niveau": "advanced", "duration": 4 }
    ],
    "url_image": "https://example.com/user8.jpg",
    "location": "Nantes"
  },
  {
    "id": 9,
    "username": "chloe_dance",
    "name": "Chloe",
    "age": 23,
    "sport": [
      { "name": "Dance", "niveau": "intermediate", "duration": 5 },
      { "name": "Pilates", "niveau": "beginner", "duration": 3 }
    ],
    "url_image": "https://example.com/user9.jpg",
    "location": "Strasbourg"
  },
  {
    "id": 10,
    "username": "hugo_fit",
    "name": "Hugo",
    "age": 31,
    "sport": [
      { "name": "Gym", "niveau": "advanced", "duration": 6 },
      { "name": "Climbing", "niveau": "intermediate", "duration": 2 }
    ],
    "url_image": "https://example.com/user10.jpg",
    "location": "Rennes"
  },
  {
    "id": 11,
    "username": "lina_pilates",
    "name": "Lina",
    "age": 26,
    "sport": [
      { "name": "Pilates", "niveau": "beginner", "duration": 3 }
    ],
    "url_image": "https://example.com/user11.jpg",
    "location": "Montpellier"
  },
  {
    "id": 12,
    "username": "tom_climb",
    "name": "Tom",
    "age": 28,
    "sport": [
      { "name": "Climbing", "niveau": "intermediate", "duration": 2 },
      { "name": "Gym", "niveau": "beginner", "duration": 3 }
    ],
    "url_image": "https://example.com/user12.jpg",
    "location": "Grenoble"
  },
  {
    "id": 13,
    "username": "sarah_run",
    "name": "Sarah",
    "age": 24,
    "sport": [
      { "name": "Running", "niveau": "advanced", "duration": 5 }
    ],
    "url_image": "https://example.com/user13.jpg",
    "location": "Dijon"
  },
  {
    "id": 14,
    "username": "leo_foot",
    "name": "Leo",
    "age": 27,
    "sport": [
      { "name": "Football", "niveau": "beginner", "duration": 2 },
      { "name": "Basketball", "niveau": "beginner", "duration": 2 }
    ],
    "url_image": "https://example.com/user14.jpg",
    "location": "Reims"
  },
  {
    "id": 15,
    "username": "maya_flow",
    "name": "Maya",
    "age": 22,
    "sport": [
      { "name": "Yoga", "niveau": "intermediate", "duration": 4 },
      { "name": "Dance", "niveau": "beginner", "duration": 3 }
    ],
    "url_image": "https://example.com/user15.jpg",
    "location": "Angers"
  }
];

app.get("/", (req, res) => {});

app.get("/users", (req, res) => {
	res.json(users);
});

app.get("/events", (req, res) => {
	res.json(events);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
