const express = require("express");
const mysql = require("mysql2")
const cors = require("cors");
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

/* -------------------- Connection --------------------- */

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'solene',
	password: 'password',
	database: 'teamup' //database: 'teamuptest' ou 'temuptestdeux'
})

connection.connect((err) => {
	if(err) {
		console.error("Erreur de connection : "+ err.stack)
		return;
	}
	console.log("Connexion reussie a la bdd !")
});

// ------------------------- Base de données ------------------------------- //

app.get("/bdd/users", (req, res) => {
	let request = `SELECT 
			users.*, 
			users_sports.us_level_comp,
			users_sports.us_frequency, 
			users_sports.us_match_played,
			users_sports.us_match_won,
			users_sports.us_winstreak,
			users_sports.us_mvp_count,
			sports.sport_name, 
			levels.level_name 
		FROM users 
		JOIN users_sports ON users_sports.us_user_id = users.user_id 
		JOIN sports ON users_sports.us_sport_id = sports.sport_id 
		JOIN levels ON users_sports.us_level_id = levels.level_id`

	console.log("req.query:", req.query, "| keys:", Object.keys(req.query), "| length:", Object.keys(req.query).length);

	let filter = [];
	let conditions = ""

	// conditions -> username or id, sport (and level), location
	if (!req.query || Object.keys(req.query).length > 0) {
    	console.log("GET Request Called with filters for /bdd/users");
		
		if(req.query.username !== undefined){
			conditions += ` WHERE users.user_username = ?`;
			filter.push(req.query.username);
		}
		else if(req.query.id !== undefined){
			conditions += ` WHERE users.user_id = ?`;
			filter.push(req.query.id);
		}

		if (req.query.sport !== undefined){
			if(conditions === ""){
				conditions += ` WHERE sports.sport_name = ?`;
			} else {
				conditions += ` AND sports.sport_name = ?`;
			}
			filter.push(req.query.sport);

			if (req.query.level !== undefined){
				conditions += ` AND levels.level_name = ?`;
				filter.push(req.query.level);
			}
		}

		if(req.query.location !== undefined){
			if(conditions === ""){
				conditions += ` WHERE users.user_location = ?`;
			} else {
				conditions += ` AND users.user_location = ?`;
			}
			filter.push(req.query.location)
		}

		request += conditions;
		
	} else {
		console.log("GET Request Called without filters, just show all users base");
	}


	connection.query(request, filter, (err, rows) => {
			if (err) throw err

			const usersMap = [];

			rows.forEach(row => {
				if (!usersMap[row.user_id]) {
					usersMap[row.user_id]={
						id: row.user_id,
						username: row.user_username,
						name: row.user_name,
						age: row.user_age,
						location: row.user_location,
						bio: row.user_bio,
						url_image: row.user_url_image,
						sports: [],
						stats: {
							match_played: row.user_match_played,
							match_won: row.user_match_won,
							winstreak: row.user_winstreak,
							mvp_count: row.user_mvp_count,
						}
					};
				}

				usersMap[row.user_id].sports.push({
					name: row.sport_name,
					level: row.level_name,
					level_comp: row.us_level_comp,
					frequecy: row.us_frequency,
					match_played: row.us_match_played,
					match_won: row.us_match_won,
					winstreak: row.us_winstreak,
					mvp_count: row.us_mvp_count
				})
			});

		res.json(Object.values(usersMap))
	});
});

app.get("/bdd/events", (req, res) => {
	let request = `SELECT 
		e.event_id, 
		e.event_name, 
        e.event_is_comp,
		e.event_description,
		e.event_date, 
		e.event_location, 
		e.event_max_people, 
		e.event_is_done,
		e.event_rating, 
		h.user_username AS host_username, 
		s.sport_name, l.level_name, 
		u.user_username AS participant_username,
        m.user_username AS mvp_username,
        w.user_username AS winner_username
		FROM events e 
		JOIN users h ON h.user_id = e.event_host_id 
		JOIN sports s ON s.sport_id = e.event_sport_id 
		LEFT JOIN levels l ON l.level_id = e.event_level_id 
		LEFT JOIN events_user eu ON eu.eu_event_id = e.event_id 
		LEFT JOIN users u ON u.user_id = eu.eu_user_id
        LEFT JOIN users m ON m.user_id = e.event_mvp_id
        LEFT JOIN events_winners ew ON ew.ew_event_id = e.event_id
        LEFT JOIN users w ON w.user_id = ew.ew_user_id`;

	console.log("req.query:", req.query, "| keys:", Object.keys(req.query), "| length:", Object.keys(req.query).length);

	let conditions = "";
	let filters = [];

	// id, host username, is comp, location, user joining, by sport (level/ comp level), is done, mvp, winner
	if (!req.query || Object.keys(req.query).length > 0) {
    	console.log("GET Request Called with filters for /bdd/events");

		if (req.query.id !== undefined){
			if (conditions === "") {
				conditions += ` WHERE e.event_id = ?`;
			} else {
				conditions += ` AND e.event_id = ?`;
			}
			filters.push(req.query.id);
		}
		if (req.query.host !== undefined){
			if (conditions === "") {
				conditions += ` WHERE h.user_username = ?`;
			} else {
				conditions += ` AND h.user_username = ?`;
			}
			filters.push(req.query.host);
		}
		if (req.query.isComp !== undefined){
			if (conditions === "") {
				conditions += ` WHERE e.event_is_comp = ?`;
			} else {
				conditions += ` AND e.event_is_comp = ?`;
			}
			filters.push(req.query.isComp ? 1 : 0);

			if (req.query.sport !== undefined && req.query.level !== undefined) {
				if (req.query.isComp) {
					conditions += ` AND e.event_sport_level_comp = ?`;
				} else {
					conditions += ` AND l.level_name = ?`;
				}
				filters.push(req.query.level);
			}
		}
		if (req.query.location !== undefined){
			if (conditions === "") {
				conditions += ` WHERE e.event_location = ?`;
			} else {
				conditions += ` AND e.event_location = ?`;
			}
			filters.push(req.query.location);
		}
		if (req.query.user_joining !== undefined){
			if (conditions === "") {
				conditions += ` WHERE u.user_username = ?`;
			} else {
				conditions += ` AND u.user_username = ?`;
			}
			filters.push(req.query.user_joining);
		}
		if (req.query.sport !== undefined){
			if (conditions === "") {
				conditions += ` WHERE s.sport_name = ?`;
			} else {
				conditions += ` AND s.sport_name = ?`;
			}
			filters.push(req.query.sport);
		}
		if (req.query.isDone !== undefined){
			if (conditions === "") {
				conditions += ` WHERE e.event_is_done = ?`;
			} else {
				conditions += ` AND e.event_is_done = ?`;
			}
			filters.push(req.query.isDone ? 1 : 0);
		}
		if (req.query.mvp !== undefined){
			if (conditions === "") {
				conditions += ` WHERE m.user_username = ?`;
			} else {
				conditions += ` AND m.user_username = ?`;
			}
			filters.push(req.query.mvp);
		}
		if (req.query.winner !== undefined){
			if (conditions === "") {
				conditions += ` WHERE w.user_username = ?`;
			} else {
				conditions += ` AND w.user_username = ?`;
			}
			filters.push(req.query.winner);
		}

		request += conditions;
	} else {
		console.log("GET Request Called without filters, just show all events base");
	}

	connection.query(request, filters, (err, rows) => {
		if(err) throw err;

		const eventsMap = [];

		rows.forEach((row) => {
			if (!eventsMap[row.event_id]) {
				eventsMap[row.event_id] = {
					id: row.event_id,
					name: row.event_name,
					host: row.host_username,
					is_comp : row.event_is_comp? true : false,
					location: row.event_location,
					description: row.event_description,
					date: row.event_date,
					max_people: row.event_max_people,
					user_joining: [],
					sports: {
						name: row.sport_name,
						level: row.event_is_comp ? row.event_sport_level_comp : row.level_name,
					},
					is_done: row.event_is_done? true:false,
					mvp: row.event_is_done? row.mvp_username:false,
					winners : [],
			}
		}

		eventsMap[row.event_id].user_joining.push(row.participant_username);
		if (row.event_is_done && eventsMap[row.event_id].winners[0]!= row.winner_username) {eventsMap[row.event_id].winners.push(row.winner_username)}
		});

		res.json(Object.values(eventsMap));
	});
});

app.get("/bdd/sports", (req, res) => {
	connection.query(`SELECT * FROM sports`, (err, rows) => {
		if (err) throw err

		res.json(Object.values(rows))
	})
})

app.get("/bdd/levels", (req, res) => {
	connection.query(`SELECT * FROM levels`, (err, rows) => {
		if (err) throw err

		res.json(Object.values(rows))
	})
})

app.use(express.json());

/*
app.post("/bdd/addsport", (req, res) => {
	console.log("POST Request Called for /bdd/2/addevent endpoint")

	const user = req.body.user_id;
	const sport = req.body.sport_id;
	const level = req.body.level_id;
	const frenquecy = req.body.frequency

	connection.query("INSERT INTO `users_sports`(`us_user_id`, `us_sport_id`, `us_level_id`, `us_frequency`) VALUES (?, ?, ?, ?)", [user, sport, level, frenquecy], (err, result) => {
		if(err) throw err

		res.send("Sport Added!");
	});
});
*/

/* --------------------------------------------------- */

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
