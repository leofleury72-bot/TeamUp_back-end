/* DROP DATABASE teamup */

CREATE DATABASE teamup;
USE teamup;

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_username VARCHAR(255) UNIQUE,
    user_name VARCHAR(255) NOT NULL,
    user_age INT NOT NULL,
    user_location VARCHAR(255) NOT NULL,
    user_bio TEXT NOT NULL,
    user_url_image VARCHAR(255) NOT NULL,
    user_match_played INT DEFAULT 0,
    user_match_won INT DEFAULT 0,
    user_winstreak INT DEFAULT 0,
    user_mvp_count INT DEFAULT 0,
    PRIMARY KEY (user_id)
) ENGINE=InnoDB;

INSERT INTO users VALUES
(1,'alice_fit','Alice',25,'Paris','Passionnée de sport collectif et de running, toujours prête pour un nouveau défi.','https://randomuser.me/api/portraits/women/1.jpg',0,0,0,0),
(2,'bob_pro','Bob',30,'Lyon','Athlète confirmé, j’adore me dépasser entre salle de sport et terrain.','https://randomuser.me/api/portraits/men/2.jpg',0,0,0,0),
(3,'charlie_run','Charlie',22,'Marseille','Débutant en course à pied, objectif : courir un semi-marathon.','https://randomuser.me/api/portraits/men/3.jpg',0,0,0,0),
(4,'david_tennis','David',28,'Bordeaux','Fan de tennis et amateur de natation pour garder la forme.','https://randomuser.me/api/portraits/men/4.jpg',0,0,0,0),
(5,'emma_zen','Emma',24,'Nice','Yoga lover à la recherche d’équilibre et de sérénité au quotidien.','https://randomuser.me/api/portraits/women/5.jpg',0,0,0,0),
(6,'lucas_cycle','Lucas',27,'Lille','Cycliste passionné, toujours partant pour une sortie longue distance.','https://randomuser.me/api/portraits/men/6.jpg',0,0,0,0),
(7,'sofia_swim','Sofia',21,'Toulouse','Entre piscine et yoga, je cherche l’équilibre parfait.','https://randomuser.me/api/portraits/women/7.jpg',0,0,0,0),
(8,'nathan_box','Nathan',29,'Nantes','Boxeur passionné, discipline et détermination sont mes moteurs.','https://randomuser.me/api/portraits/men/8.jpg',0,0,0,0),
(9,'chloe_dance','Chloe',23,'Strasbourg','Danseuse dans l’âme, j’aime m’exprimer à travers le mouvement.','https://randomuser.me/api/portraits/women/9.jpg',0,0,0,0),
(10,'hugo_fit','Hugo',31,'Rennes','Accro à la salle et à l’escalade, toujours en quête de performance.','https://randomuser.me/api/portraits/men/10.jpg',0,0,0,0),
(11,'lina_pilates','Lina',26,'Montpellier','Pilates pour renforcer le corps et l’esprit en douceur.','https://randomuser.me/api/portraits/women/11.jpg',0,0,0,0),
(12,'tom_climb','Tom',28,'Grenoble','Grimpeur amateur, toujours à la recherche de nouvelles sensations.','https://randomuser.me/api/portraits/men/12.jpg',0,0,0,0),
(13,'sarah_run','Sarah',24,'Dijon','Runner expérimentée, j’adore les longues distances et les défis.','https://randomuser.me/api/portraits/women/13.jpg',0,0,0,0),
(14,'leo_foot','Leo',27,'Reims','Débutant mais motivé, je découvre différents sports collectifs.','https://randomuser.me/api/portraits/men/14.jpg',1,0,0,0),
(15,'maya_flow','Maya',22,'Angers','Entre yoga et danse, je cultive énergie et créativité.','https://randomuser.me/api/portraits/women/15.jpg',0,0,0,0);

CREATE TABLE sports (
    sport_id INT NOT NULL AUTO_INCREMENT,
    sport_name VARCHAR(255) NOT NULL,
    sport_image VARCHAR(255) NOT NULL,
    PRIMARY KEY (sport_id)
) ENGINE=InnoDB;

INSERT INTO sports (sport_name, sport_image) VALUES
('Archery', "https://images.unsplash.com/photo-1510925758641-869d353cecc7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
('Badminton',"https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80"),
('Basketball', "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80"),
('Boxing', "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80"),
('Climbing', "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80"),
('Cycling', "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80"),
('Dance', "https://plus.unsplash.com/premium_photo-1681492514899-089902cd417a?q=80&w=682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
('Football', "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80"),
('Gym', "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"),
('Handball', "https://st.depositphotos.com/1170398/4489/i/450/depositphotos_44898315-handball-team-female-jump-shot.jpg"),
('Judo', "https://images.unsplash.com/photo-1676220672943-5100a727ba36?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
('Karate',"https://images.unsplash.com/photo-1603210185246-b1662978ea37?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
('Kayaking',"https://images.unsplash.com/photo-1587987687216-aadda9308c9c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
('Paddleboarding',"https://images.unsplash.com/photo-1635110982680-2df6c0f397f2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
('Pétanque', "https://images.unsplash.com/photo-1565078682561-700bdf3cdfcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0YW5xdWV8ZW58MHx8MHx8fDA%3D"),
('Rugby', "https://images.unsplash.com/photo-1635356164637-92da6fb2072d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
('Running', "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80"),
('Skating', "https://images.unsplash.com/photo-1705529135167-b55f3f205251?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
('Surfing',"https://images.unsplash.com/photo-1705529135167-b55f3f205251?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
('Swimming', "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80"),
('Tennis', "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80"),
('Volleyball', "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80"),
('Yoga', "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"),
('Pilates', "https://images.unsplash.com/photo-1747239069226-55382c570116?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
('Frisbee', "https://images.unsplash.com/photo-1584846884362-e1ea3d18e53f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpc2JlZSUyMHVsdGltYXRlfGVufDB8fDB8fHww");

CREATE TABLE levels (
    level_id INT NOT NULL AUTO_INCREMENT,
    level_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (level_id)
) ENGINE=InnoDB;

INSERT INTO levels (level_name) VALUES
('Beginner'),
('Intermediate'),
('Advanced'),
('Pro'),
('All level');

CREATE TABLE users_sports (
    us_user_id INT NOT NULL,
    us_sport_id INT NOT NULL,
    us_level_id INT,
    us_frequency INT,
    us_level_comp INT DEFAULT 50,
    us_match_played INT DEFAULT 0,
    us_match_won INT DEFAULT 0,
    us_winstreak INT DEFAULT 0,
    us_mvp_count INT DEFAULT 0,
    PRIMARY KEY (us_user_id, us_sport_id)
) ENGINE=InnoDB;

INSERT INTO users_sports (
    us_user_id, us_sport_id, us_level_id, us_frequency,
    us_level_comp, us_match_played, us_match_won, us_winstreak, us_mvp_count
)
VALUES
(1,8,2,3,50,0,0,0,0),(1,17,1,2,50,0,0,0,0),
(2,3,3,4,50,0,0,0,0),(2,17,1,2,50,0,0,0,0),(2,9,2,3,50,0,0,0,0),
(3,17,1,1,50,0,0,0,0),(4,21,2,3,50,0,0,0,0),(4,20,1,2,50,0,0,0,0),
(5,23,1,2,50,0,0,0,0),(6,6,3,4,50,0,0,0,0),(6,17,2,3,50,0,0,0,0),
(7,20,2,3,50,0,0,0,0),(7,23,1,2,50,0,0,0,0),(8,4,3,5,50,0,0,0,0),
(9,7,2,3,50,0,0,0,0),(9,15,1,2,50,0,0,0,0),(10,9,3,4,50,0,0,0,0),
(10,5,2,3,50,0,0,0,0),(11,15,1,2,50,0,0,0,0),(12,5,2,3,50,0,0,0,0),
(12,9,1,2,50,0,0,0,0),(13,17,3,4,50,0,0,0,0),(14,8,1,2,50,0,0,0,0),
(14,3,1,2,50,0,0,0,0),(15,23,2,3,50,0,0,0,0),(15,7,1,2,50,0,0,0,0);

CREATE TABLE events (
    event_id INT NOT NULL AUTO_INCREMENT,
    event_host_id INT NOT NULL,
    event_name VARCHAR(255) NOT NULL,
    event_date DATETIME NOT NULL,
    event_description TEXT NOT NULL,
    event_location VARCHAR(255) NOT NULL,
    event_is_comp TINYINT(1) DEFAULT 0,
    event_is_done TINYINT(1) DEFAULT 0,
    event_sport_id INT NOT NULL,
    event_level_id INT,
    event_rating INT,
    event_max_people INT NOT NULL,
    event_mvp_id INT,
    PRIMARY KEY (event_id)
) ENGINE=InnoDB;

INSERT INTO events (
    event_id,
    event_host_id,
    event_name,
    event_date,
    event_description,
    event_location,
    event_is_comp,
    event_is_done,
    event_sport_id,
    event_level_id,
    event_rating,
    event_max_people,
    event_mvp_id
) VALUES
(1,7,'Yoga en plein air','2026-05-15 16:45:00','Séance de yoga Vinyasa en extérieur.','Berges du Rhône, Lyon',0,0,23,5,NULL,20,NULL),
(2,14,'Compétition Gym Full Body','2026-05-10 16:00:00','Compétition de gym.','Salle Fitness Pro, Paris',1,1,9,NULL,20,20,2),
(3,2,'small basketball match','2026-05-10 16:00:00','basketball match for fun','Lyon',0,0,3,NULL,10,10,NULL),
(4,2,'Pétanque + Apéro','2026-05-10 17:30:00','Pétanque + apéro','Stade de pétanque, Lyon',0,0,15,NULL,6,6,NULL),
(5,2,'Qui pour un 2v2 Judo ?','2026-05-13 05:00:00','ALED','Lyon',1,0,11,4,3,3,NULL),
(6,3,'Running matinal','2026-06-01 07:30:00','Sortie running 5km','Parc Borély, Marseille',0,0,17,1,12,12,NULL),
(7,9,'Atelier danse freestyle','2026-06-03 18:00:00','Exprime-toi','Strasbourg Centre',0,0,7,5,20,20,NULL),
(8,6,'Ride vélo urbain','2026-06-05 10:00:00','Balade vélo','Lille Grand Place',0,0,6,2,15,15,NULL),
(9,11,'Pilates douceur','2026-05-02 09:00:00','Renforcement','Montpellier Studio',0,1,24,1,10,10,NULL),
(10,10,'Challenge escalade','2026-05-03 14:00:00','Bloc et vitesse','Salle Climb Rennes',1,1,5,3,10,10,10),
(11,13,'Semi-marathon training race','2026-05-04 08:00:00','Course 10km','Dijon Parc',1,1,17,3,25,25,13),
(12,8,'Tournoi Boxe amateur','2026-06-10 19:00:00','Matchs amateurs','Nantes Gym Hall',1,0,4,3,8,8,NULL),
(13,14,'Mini coupe football','2026-06-12 16:00:00','Tournoi 5v5','Reims Stade',1,0,8,2,14,14,NULL),
(14,7,'Yoga flow avancé','2026-06-08 18:30:00','Flow dynamique','Toulouse Jardin',0,0,23,3,15,15,NULL),
(15,4,'Tennis détente','2026-06-06 17:00:00','Matchs amicaux','Bordeaux Club',0,0,21,2,8,8,NULL);

CREATE TABLE events_user (
    eu_event_id INT NOT NULL,
    eu_user_id INT NOT NULL,
    PRIMARY KEY (eu_event_id, eu_user_id)
) ENGINE=InnoDB;
INSERT INTO events_user VALUES
(1,5),(1,9),(1,11),(1,15),
(2,2),(2,10),(2,12),
(6,1),(6,2),(6,5),
(7,3),(7,7),(7,11),
(8,6),(8,10),(8,12),
(9,5),(9,11),
(10,2),(10,10),(10,12),
(11,2),(11,3),(11,13),
(12,2),(12,8),(12,10),
(13,1),(13,4),(13,14),
(14,5),(14,7),(14,15),
(15,1),(15,4),(15,9);

CREATE TABLE events_winners (
    ew_event_id INT NOT NULL,
    ew_user_id INT NOT NULL,
    PRIMARY KEY (ew_event_id, ew_user_id)
) ENGINE=InnoDB;
INSERT INTO events_winners VALUES
(2,12),
(10,10),
(11,13);