let experience = {
	orders: [
		{ 	
			// Security
			1: { 
				order: [3, 4, 7, 6, 2, 5, 1],
				order_africa: [3, 4, 7, 6, 2, 5, 0] 
			},
			// Archiving
			2: { 
				order: [4, 7, 3, 6, 2, 5, 1],
				order_africa: [4, 7, 3, 6, 2, 5, 0] 
			},
			// Office365
			3: { 
				order: [7, 3, 4, 6, 2, 5, 1],
				order_africa: [7, 3, 4, 6, 2, 5, 0] 
			},
		}
	],
	questions: [
		// 0 - Foreign Ambassadors or Fidget Spinners - AFRICAN AUDIENCE
		{
			option_one: {
				image: 'img/game-ambassador.png',
				question_title: '“Foreign Ambassadors”',
				answer_title: '“Foreign Ambassadors” — who appointed those guys?',
				answer_body: 'Every day the volume and sophistication of email impersonation attacks keeps growing. Mimecast Impersonation Protect scans, detects, and prevents suspicious emails before it’s too late.',
				type: 'See how we beat Impersonation'
			},
			option_two: {
				image: 'img/game-fidgetspinner.png',
				question_title: 'Fidget Spinners',
				answer_title: '‘Round and ‘round the annoying fidgety thing goes.',
				answer_body: 'People just can’t resist them— a lot like those email impersonation attacks that keep coming. Mimecast Impersonation Protect scans, detects, and prevents suspicious emails before it’s too late.',
				type: 'See how we beat Impersonation'
			},
			url: 'https://www.mimecast.com/solutions/email-security/impersonation/',
			btn: 'SEE YOUR RESULTS'
		},
		// 1 - Nigerian Princes or People 'Dabbing'- NON-AFRICAN AUDIENCE
		{
			option_one: {
				image: 'img/game-prince.png',
				question_title: '“Nigerian Princes”',
				answer_title: '“Nigerian Princes” – those guys are STILL royal pains.',
				answer_body: 'Every day the volume and sophistication of email impersonation attacks keeps growing. Mimecast Impersonation Protect scans, detects, and prevents suspicious emails before it’s too late.',
				type: 'See how we beat Impersonation'
			},
			option_two: {
				image: 'img/game-dabber.png',
				question_title: 'People ‘Dabbing’',
				answer_title: 'Yeah, people ‘dabbing’ is hard on your eyes.',
				answer_body: 'But email impersonation attacks are malicious to your business. Mimecast Impersonation Protect scans, detects, and prevents suspicious emails before it’s too late.',
				type: 'See how we beat Impersonation'
			},
			url: 'https://www.mimecast.com/solutions/email-security/impersonation/',
			btn: 'SEE YOUR RESULTS'
		},
		// 2 - Malicious URLs like ClickMe.com/FreeVacation or Annoying Texting Abbreviations
		{
			option_one: {
				image: 'img/game-malware.png',
				question_title: 'Malicious URLs like ClickMe.com/ FreeVacation ',
				answer_title: 'Sadly, people are gonna click that link.',
				answer_body: 'And you’ll have to pay a ransom. Mimecast TTP solution helps you prevent email-borne ransomware attacks and protects your organization from data loss.',
				type: 'See how we beat Ransomware'
			},
			option_two: {
				image: 'img/game-abbrev.png',
				question_title: 'Annoying Texting Abbreviations',
				answer_title: 'WTF do all these abbreviations even mean?',
				answer_body: 'IDK, but I do know that ransomware is a much bigger problem. Mimecast TTP solution helps you prevent email-borne ransomware attacks and protects your organization from data loss.',
				type: 'See how we beat Ransomware'
			},
			url: 'https://www.mimecast.com/solutions/email-security/ransomware/',
			btn: 'NEXT MATCHUP'
		},
		// 3 - "Friends" Spear-phishing or Close Talkers
		{
			option_one: {
				image: 'img/game-spearphishing.png',
				question_title: '“Friends” Spear-phishing ',
				answer_title: 'Spear-phishing emails are far from friendly.',
				answer_body: 'That’s why our security solution helps detect and block email impersonating familiar sources that are asking for sensitive info or the fraudulent wiring of money.',
				type: 'See how we beat spear-phishing'
			},
			option_two: {
				image: 'img/game-closetalkers.png',
				question_title: 'Close Talkers',
				answer_title: 'Haven’t they ever heard of this thing called “personal space?” ',
				answer_body: 'Nothing is more annoying—or invasive—than the close talker—except Spear-phishing attacks which are still very prevalent. Mimecast URL Protection scans, detects, and prevents phishing attacks before it’s too late.',
				type: 'See how we beat spear-phishing'
			},
			url: 'https://www.mimecast.com/solutions/email-security/spear-phishing/',
			btn: 'NEXT MATCHUP'
		},
		// 4 - Data Overload or Man Buns
		{
			option_one: {
				image: 'img/game-dataoverload.png',
				question_title: 'Data Overload',
				answer_title: 'Bet you wish all that data was in one place.',
				answer_body: 'Packed with years of files, emails, and your most important data. Yet you have no clue where  to start looking for the exact thing you need. Our Enterprise Information Archive Solution consolidates all your data into a single, fully-indexed cloud archive that\'s easy to navigate – and accessible from any device.',
				type: 'See how we make archiving easier'
			},
			option_two: {
				image: 'img/game-manbun.png',
				question_title: 'Man Buns',
				answer_title: 'Hopefully the man bun fad ends soon.',
				answer_body: 'But even if it doesn’t, they aren’t nearly as bad as wasting hours searching for files. With our Enterprise Information Archiving Solution, you’ll have a 7 second search SLA on virtually any device — so you can quickly find files, emails or your most important data anytime, anywhere.',
				type: 'See how we make archiving easier'
			},
			url: 'https://www.mimecast.com/products/email-archiving/legacy-archive-data-management/',
			btn: 'NEXT MATCHUP'
		},
		// 5 - Unplanned Email Outages or Empty Toilet Paper Rolls
		{
			option_one: {
				image: 'img/game-email.png',
				question_title: 'Unplanned Email Outages',
				answer_title: 'Email outages do more than slow you down. They bring work to a standstill.',
				answer_body: 'It’s inevitable — you’re going have an Office 365 outage someday. With Mimecast’s continuity solutions, your business won’t go down too. Users can still access information, send and receive emails without interruption from any device.',
				type: 'See how we handle office 365 outages'
			},
			option_two: {
				image: 'img/game-emptytoiletpaper.png',
				question_title: 'Empty Toilet Paper Rolls',
				answer_title: 'When you run out of toilet paper, things can get messy.',
				answer_body: 'But unplanned email outages, nothing gets messier than that. It’s inevitable — you’re going have an Office 365 outage someday. With Mimecast’s continuity solutions, your business won’t go down too. Users can still access information, send and receive emails without interruption from any device.',
				type: 'See how we handle office 365 outages'
			},
			url: 'https://www.mimecast.com/content/office-365-business-continuity/',
			btn: 'NEXT MATCHUP'
		},
		// 6 - Wasting 8 Hours Finding a File from '08 or Rush Hour
		{
			option_one: {
				image: 'img/game-wastingtime.png',
				question_title: 'Wasting 8 Hours Finding a File from ’08',
				answer_title: 'We get it. When you need files, you need them fast.',
				answer_body: 'And if it takes a whole work day to find a single file, you need a faster archive. Add our Enterprise Information Archiving Solution and you’ll have a 7 second search SLA on virtually any device — so you can quickly find files, emails or your most important data anytime, anywhere.',
				type: 'See how we make archiving easier'
			},
			option_two: {
				image: 'img/game-slowdrivers.png',
				question_title: 'Rush Hour',
				answer_title: 'Getting stuck in rush hour costs you time.',
				answer_body: 'Our Enterprise Information Archiving Solution makes up for lost time by consolidating all your data into a single, fully-indexed cloud archive and a 7 second search SLA on virtually any device — so you can quickly find files, emails or your most important data anytime, anywhere.',
				type: 'See how we make archiving easier'
			},
			url: 'https://www.mimecast.com/products/email-archiving/file-archiving/',
			btn: 'NEXT MATCHUP'
		},
		// 7 - Naked Reality Shows or Office 365 "Surprises"
		{
			option_one: {
				image: 'img/game-realityshows.png',
				question_title: 'Naked Reality Shows',
				answer_title: 'Dear Network, can you help me unsee that now? ',
				answer_body: 'Don’t expose your business to malicious threats or unplanned downtime on Office 365. Mimecast’s Integrated Cloud Suite ensures data integrity, and provides you with continuous access to email without disruption.',
				type: 'See how we ensure continuity'
			},
			option_two: {
				image: 'img/game-office365.png',
				question_title: 'Office 365 “Surprises“',
				answer_title: 'Unexpected downtime, yeah, we all know what that feels like.',
				answer_body: 'Just when you think everything’s going smoothly—BAM!—someone in your organization clicked on something they shouldn’t have and all your productivity comes to a halt. Mimecast’s Targeted Threat protection alongside Mimecast email continuity services ensures data integrity and provides continuous access to email without disruption.',
				type: 'See how we ensure continuity'
			},
			url: 'https://www.mimecast.com/content/office-365-business-continuity/',
			btn: 'NEXT MATCHUP'
		}
	],

	results: [
		// mimecast security items 
		{
			title: 'Seems like you’re laid-back, but email disasters could be right around the corner.',
			body: 'Take the necessary measures to always be prepared for the worst. Learn more about all of Mimecast’s Integrated Cloud Suite to Stop IT Spin and make email safer for business.'
		},
		// fun items
		{
			title: 'Looks like you’re an email champ, but there’s no such thing as being “too safe.”',
			body: 'Learn more about all of Mimecast’s Integrated Cloud Suite to Stop IT Spin and make email safer for business.'
		}
	]
}