const STORAGE_KEY = 'fieldnotes-vault-v1';
const DATABASE_NAME = 'fieldnotes-local-v1';
const QUESTION_BANK = [
	{ id: 'm1', subject: 'Mathematics', type: 'choice', prompt: 'A line has gradient 3 and passes through (2, 5). Which equation represents the line?', choices: ['y = 3x - 1', 'y = 3x + 1', 'y = 2x + 3', 'y = 5x - 3'], answer: 0, explanation: 'Using y - y1 = m(x - x1), we get y - 5 = 3(x - 2), so y = 3x - 1.' },
	{ id: 'm2', subject: 'Mathematics', type: 'short', prompt: 'Solve 2x + 7 = 19. Give the value of x.', answer: '6', explanation: 'Subtract 7 from both sides to get 2x = 12, then divide by 2. Therefore x = 6.' },
	{ id: 'm3', subject: 'Mathematics', type: 'boolean', prompt: 'The sum of the interior angles of any triangle is 180 degrees.', answer: true, explanation: 'A triangle has an interior angle sum of 180 degrees in Euclidean geometry.' },
	{ id: 'm4', subject: 'Mathematics', type: 'choice', prompt: 'A rectangle is 8 cm long and 5 cm wide. What is its area?', choices: ['13 cm²', '26 cm²', '40 cm²', '80 cm²'], answer: 2, explanation: 'Area of a rectangle = length × width = 8 × 5 = 40 cm².' },
	{ id: 'm5', subject: 'Mathematics', type: 'boolean', prompt: 'A quadratic equation can have more than two real roots.', answer: false, explanation: 'A quadratic polynomial has degree 2, so it can have at most two real roots.' },
	{ id: 'e1', subject: 'English', paper: 'Paper 2', type: 'choice', prompt: 'Which word is closest in meaning to “concise”?', choices: ['Brief', 'Uncertain', 'Elaborate', 'Repetitive'], answer: 0, explanation: 'Concise means giving information clearly in few words; “brief” is the closest match.' },
	{ id: 'e2', subject: 'English', paper: 'Paper 2', type: 'short', prompt: 'Name the literary device in: “The wind whispered through the trees.”', answer: 'personification', explanation: 'The wind is given the human action of whispering, which is personification.' },
	{ id: 'e3', subject: 'English', paper: 'Paper 2', type: 'boolean', prompt: 'A subordinate clause can always stand alone as a complete sentence.', answer: false, explanation: 'A subordinate clause depends on a main clause to complete its meaning.' },
	{ id: 'e4', subject: 'English', paper: 'Paper 2', type: 'choice', prompt: 'Neither of the students ___ submitted the assignment.', choices: ['have', 'has', 'were', 'are'], answer: 1, explanation: '“Neither” is singular, so it takes the singular verb “has.”' },
	{ id: 'e5', subject: 'English', paper: 'Paper 2', type: 'short', prompt: 'Change to passive voice: “The team won the match.”', answer: 'the match was won by the team', explanation: 'The object becomes the subject: “The match was won by the team.”' },
	{ id: 'e6', subject: 'English', paper: 'Paper 3', type: 'choice', prompt: 'Who wrote the compulsory novel Fathers of Nations?', choices: ['John Lara', 'Paul B. Vitta', 'Adipo Sidang', 'Kazuo Ishiguro'], answer: 1, explanation: 'Fathers of Nations, the compulsory novel for the 2022–2026 setbook cycle, was written by Paul B. Vitta.' },
	{ id: 'e7', subject: 'English', paper: 'Paper 3', type: 'short', prompt: 'Name the author of the compulsory play The Samaritan.', answer: 'john lara', explanation: 'The Samaritan is the compulsory play by John Lara for the 2022–2026 setbook cycle.' },
	{ id: 'e8', subject: 'English', paper: 'Paper 3', type: 'boolean', prompt: 'A Silent Song and Other Stories is an anthology of short stories.', answer: true, explanation: 'A Silent Song and Other Stories, edited by Godwin Siundu, is the optional short-story anthology.' },
	{ id: 'e9', subject: 'English', paper: 'Paper 1', type: 'choice', prompt: 'Which details are essential in a formal invitation?', choices: ['Date, time, and venue', 'A long personal story', 'The writer’s favourite quotation', 'A list of unrelated events'], answer: 0, explanation: 'A clear invitation states when and where the event will take place.' },
	{ id: 'e10', subject: 'English', paper: 'Paper 1', type: 'short', prompt: 'What is the written record of a meeting called?', answer: 'minutes', explanation: 'Minutes are the formal written record of a meeting’s proceedings and decisions.' },
	{ id: 'e11', subject: 'English', paper: 'Paper 1', type: 'boolean', prompt: 'An agenda lists the items to be discussed at a meeting.', answer: true, explanation: 'An agenda is prepared before a meeting to outline the business for discussion.' },
	{ id: 'e12', subject: 'English', paper: 'Paper 1', type: 'choice', prompt: 'Which is the most suitable opening for a formal speech at a school assembly?', choices: ['Good morning, Chairperson, teachers, and fellow students.', 'Hey everyone, what’s up?', 'Listen, I have something to say.', 'You all know why I am here.'], answer: 0, explanation: 'A formal address acknowledges the chair and audience respectfully.' },
	{ id: 'e13', subject: 'English', paper: 'Paper 1', type: 'short', prompt: 'What is the name for the rise and fall of the voice while speaking?', answer: 'intonation', explanation: 'Intonation is the pattern of rising and falling pitch in spoken language.' },
	{ id: 'b1', subject: 'Biology', type: 'choice', prompt: 'Which cell structure is the main site of aerobic respiration?', choices: ['Ribosome', 'Mitochondrion', 'Golgi apparatus', 'Vacuole'], answer: 1, explanation: 'Mitochondria are the main site of aerobic respiration and ATP production in eukaryotic cells.' },
	{ id: 'b2', subject: 'Biology', type: 'short', prompt: 'What is the name of the process by which green plants make glucose using light?', answer: 'photosynthesis', explanation: 'Photosynthesis uses light energy to convert carbon dioxide and water into glucose and oxygen.' },
	{ id: 'b3', subject: 'Biology', type: 'boolean', prompt: 'Arteries always carry oxygenated blood.', answer: false, explanation: 'Most arteries carry oxygenated blood, but the pulmonary artery carries deoxygenated blood to the lungs.' },
	{ id: 'b4', subject: 'Biology', type: 'choice', prompt: 'What is the functional unit of the kidney?', choices: ['Alveolus', 'Neuron', 'Nephron', 'Villus'], answer: 2, explanation: 'The nephron filters blood and forms urine; each kidney contains many nephrons.' },
	{ id: 'b5', subject: 'Biology', type: 'boolean', prompt: 'Enzymes are biological catalysts.', answer: true, explanation: 'Enzymes speed up biochemical reactions without being used up in the process.' },
	{ id: 'c1', subject: 'Chemistry', type: 'choice', prompt: 'What is the pH of a neutral solution at 25°C?', choices: ['0', '5', '7', '14'], answer: 2, explanation: 'At 25°C, a neutral aqueous solution has equal hydrogen and hydroxide ion concentrations, giving pH 7.' },
	{ id: 'c2', subject: 'Chemistry', type: 'short', prompt: 'What is the chemical symbol for potassium?', answer: 'k', explanation: 'Potassium has the symbol K, from its Latin name kalium.' },
	{ id: 'c3', subject: 'Chemistry', type: 'boolean', prompt: 'An acid turns blue litmus paper red.', answer: true, explanation: 'Blue litmus turns red in acidic conditions; red litmus turns blue in alkaline conditions.' },
	{ id: 'c4', subject: 'Chemistry', type: 'choice', prompt: 'How many protons are in a carbon atom?', choices: ['4', '6', '8', '12'], answer: 1, explanation: 'Carbon has atomic number 6, which is the number of protons in its nucleus.' },
	{ id: 'c5', subject: 'Chemistry', type: 'boolean', prompt: 'The total mass is conserved during a chemical reaction in a closed system.', answer: true, explanation: 'The law of conservation of mass states that matter is not created or destroyed in a chemical reaction.' },
	{ id: 'p1', subject: 'Physics', type: 'choice', prompt: 'What is the SI unit of force?', choices: ['Joule', 'Watt', 'Newton', 'Pascal'], answer: 2, explanation: 'Force is measured in newtons (N), named after Isaac Newton.' },
	{ id: 'p2', subject: 'Physics', type: 'short', prompt: 'A car travels 100 metres in 5 seconds. What is its average speed in m/s?', answer: '20', explanation: 'Average speed = distance ÷ time = 100 ÷ 5 = 20 m/s.' },
	{ id: 'p3', subject: 'Physics', type: 'boolean', prompt: 'Sound can travel through a vacuum.', answer: false, explanation: 'Sound is a mechanical wave and needs a medium, such as air or water, to travel.' },
	{ id: 'p4', subject: 'Physics', type: 'short', prompt: 'A 2 kg object accelerates at 3 m/s². What force acts on it, in newtons?', answer: '6', explanation: 'Newton’s second law gives force = mass × acceleration = 2 × 3 = 6 N.' },
	{ id: 'p5', subject: 'Physics', type: 'choice', prompt: 'Which energy transfer occurs when a hot object warms the surrounding air?', choices: ['Conduction only', 'Convection', 'Reflection', 'Refraction'], answer: 1, explanation: 'Convection transfers heat through the movement of fluids, including air.' },
	{ id: 'h1', subject: 'History', type: 'choice', prompt: 'In which year did Kenya gain independence?', choices: ['1960', '1963', '1964', '1965'], answer: 1, explanation: 'Kenya became independent on 12 December 1963.' },
	{ id: 'h2', subject: 'History', type: 'short', prompt: 'Who became Kenya’s first Prime Minister at independence?', answer: 'jomo kenyatta', explanation: 'Jomo Kenyatta became Prime Minister when Kenya attained independence in 1963.' },
	{ id: 'h3', subject: 'History', type: 'boolean', prompt: 'The Berlin Conference of 1884–1885 formalized European claims in Africa.', answer: true, explanation: 'The conference set rules for European occupation and claims in Africa during the Scramble for Africa.' },
	{ id: 'h4', subject: 'History', type: 'choice', prompt: 'What was a major purpose of the Uganda Railway during colonial rule?', choices: ['Connect the coast with the interior', 'Link Nairobi to Cape Town', 'Carry only local passengers', 'Mark the boundary with Ethiopia'], answer: 0, explanation: 'The railway connected Mombasa to the interior, supporting colonial administration, trade, and settlement.' },
	{ id: 'h5', subject: 'History', type: 'short', prompt: 'In which year was the State of Emergency declared in Kenya during the Mau Mau uprising?', answer: '1952', explanation: 'The colonial government declared a State of Emergency in October 1952.' },
	{ id: 'cre1', subject: 'C.R.E.', type: 'choice', prompt: 'In which Gospel is the parable of the Good Samaritan found?', choices: ['Matthew', 'Mark', 'Luke', 'John'], answer: 2, explanation: 'The parable of the Good Samaritan is recorded in Luke 10:25–37.' },
	{ id: 'cre2', subject: 'C.R.E.', type: 'short', prompt: 'What is the first book of the New Testament?', answer: 'matthew', explanation: 'Matthew is the first book in the New Testament.' },
	{ id: 'cre3', subject: 'C.R.E.', type: 'boolean', prompt: 'According to the Gospels, Jesus chose twelve apostles.', answer: true, explanation: 'The Gospel accounts describe Jesus appointing twelve apostles.' },
	{ id: 'cre4', subject: 'C.R.E.', type: 'choice', prompt: 'Which event is described in the opening chapters of Genesis?', choices: ['The Exodus', 'Creation', 'The Exile', 'Pentecost'], answer: 1, explanation: 'Genesis 1–2 describes the creation of the world and humanity.' },
	{ id: 'cre5', subject: 'C.R.E.', type: 'short', prompt: 'Who baptized Jesus in the River Jordan?', answer: 'john the baptist', explanation: 'John the Baptist baptized Jesus in the River Jordan.' },
	{ id: 'sw1', subject: 'Kiswahili', type: 'choice', prompt: 'Methali “Haraka haraka haina baraka” inamaanisha nini?', choices: ['Pupa huweza kusababisha makosa', 'Safari ndefu huanza kwa hatua', 'Umoja huleta nguvu', 'Subira huleta mafanikio'], answer: 0, explanation: 'Methali hii huonya kuwa kufanya mambo kwa pupa kunaweza kuleta makosa au matokeo mabaya.' },
	{ id: 'sw2', subject: 'Kiswahili', type: 'short', prompt: 'Andika wingi wa nomino “kitabu”.', answer: 'vitabu', explanation: 'Nomino “kitabu” imo katika ngeli ya KI-VI; wingi wake ni “vitabu”.' },
	{ id: 'sw3', subject: 'Kiswahili', type: 'boolean', prompt: 'Kiswahili ni lugha ya Kibantu.', answer: true, explanation: 'Kiswahili huainishwa kama lugha ya Kibantu, ingawa kina msamiati wa asili mbalimbali.' },
	{ id: 'sw4', subject: 'Kiswahili', type: 'choice', prompt: 'Katika sentensi “Watoto wanacheza nje”, neno “watoto” limo katika ngeli gani?', choices: ['A-WA', 'KI-VI', 'U-I', 'LI-YA'], answer: 0, explanation: '“Mtoto/watoto” ni nomino za ngeli ya A-WA.' },
	{ id: 'sw5', subject: 'Kiswahili', type: 'short', prompt: 'Taja kinyume cha neno “furaha”.', answer: 'huzuni', explanation: '“Huzuni” ni kinyume cha “furaha”.' }
];
const SUBJECTS = [
	{ name: 'Mathematics', color: '#d56e54' }, { name: 'English', color: '#6388a1' },
	{ name: 'Biology', color: '#6f9876' }, { name: 'Chemistry', color: '#d2ad42' }, { name: 'Physics', color: '#8c7c9a' },
	{ name: 'History', color: '#596f82' }, { name: 'C.R.E.', color: '#9a7245' }, { name: 'Kiswahili', color: '#34847b' }
];
const PAPERS = [
	{ year: 2026, subject: 'History', paper: 'Paper 1', detail: 'History and Government · 311/1' }, { year: 2026, subject: 'History', paper: 'Paper 2', detail: 'History and Government · 311/2' },
	{ year: 2026, subject: 'C.R.E.', paper: 'Paper 1', detail: 'Christian Religious Education · 313/1' }, { year: 2026, subject: 'C.R.E.', paper: 'Paper 2', detail: 'Christian Religious Education · 313/2' },
	{ year: 2026, subject: 'Kiswahili', paper: 'Paper 1', detail: 'Lugha · 102/1' }, { year: 2026, subject: 'Kiswahili', paper: 'Paper 2', detail: 'Fasihi · 102/2' },
	{ year: 2026, subject: 'English', paper: 'Paper 1', detail: 'Functional Skills · 101/1' }, { year: 2026, subject: 'English', paper: 'Paper 2', detail: 'Comprehension, Literary Appreciation and Grammar · 101/2' },
	{ year: 2026, subject: 'English', paper: 'Paper 3', detail: 'Imaginative Composition and Essays Based on Set Texts · 101/3' },
	{ year: 2023, subject: 'Mathematics', paper: 'Paper 1', questions: 22 }, { year: 2022, subject: 'English', paper: 'Paper 2', questions: 18 },
	{ year: 2021, subject: 'Biology', paper: 'Paper 1', questions: 20 }, { year: 2020, subject: 'Chemistry', paper: 'Paper 2', questions: 19 },
	{ year: 2019, subject: 'Physics', paper: 'Paper 1', questions: 17 }, { year: 2018, subject: 'Mathematics', paper: 'Paper 2', questions: 21 }
];
const SETBOOKS = [
	{ subject: 'English', title: 'Fathers of Nations', author: 'Paul B. Vitta', genre: 'Compulsory novel' },
	{ subject: 'English', title: 'The Samaritan', author: 'John Lara', genre: 'Compulsory play' },
	{ subject: 'English', title: 'A Silent Song and Other Stories', author: 'Edited by Godwin Siundu', genre: 'Optional short-story anthology' },
	{ subject: 'English', title: 'A Parliament of Owls', author: 'Adipo Sidang', genre: 'Optional play' },
	{ subject: 'English', title: 'An Artist of the Floating World', author: 'Kazuo Ishiguro', genre: 'Optional novel' },
	{ subject: 'Kiswahili', title: 'Bembea', author: 'Dr. Timothy Moriasi', genre: 'Tamthilia' },
	{ subject: 'Kiswahili', title: 'Mapambazuko ya Machweo na Hadithi Nyingine', author: 'Short-story anthology', genre: 'Hadithi fupi' },
	{ subject: 'Kiswahili', title: 'Nguu za Jadi', author: 'Prof. Cara Momanyi', genre: 'Riwaya' }
];
const freshState = () => ({ name: '', plan: SUBJECTS.map((subject) => ({ subject: subject.name, active: true, sessions: 3, minutes: 30 })), attempts: [], studyDays: [], savedPapers: [], syncUrl: '', consent: false });
function withPlanDefaults(savedState) {
	const merged = { ...freshState(), ...savedState };
	const planned = new Set(merged.plan.map((item) => item.subject));
	merged.plan.push(...freshState().plan.filter((item) => !planned.has(item.subject)));
	return merged;
}
let state = freshState();
let currentView = 'overview';
let vaultKey;
let vaultSalt;
let vaultPassphrase;
let quiz = null;
let toastTimer;

const $ = (selector, root = document) => root.querySelector(selector);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const todayKey = () => new Date().toISOString().slice(0, 10);
const base64 = (bytes) => btoa(String.fromCharCode(...new Uint8Array(bytes)));
const fromBase64 = (value) => Uint8Array.from(atob(value), (char) => char.charCodeAt(0));

async function deriveKey(passphrase, salt) {
	const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(passphrase), 'PBKDF2', false, ['deriveKey']);
	return crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: 310000, hash: 'SHA-256' }, material, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}

async function encryptState(value, key = vaultKey, salt = vaultSalt) {
	const iv = crypto.getRandomValues(new Uint8Array(12));
	const data = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(JSON.stringify(value)));
	return `FIELDNOTES1.${base64(new Uint8Array([...salt, ...iv, ...new Uint8Array(data)]))}`;
}

function openLocalDatabase() {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open(DATABASE_NAME, 1);
		request.onupgradeneeded = () => request.result.createObjectStore('vault');
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error);
	});
}

async function readStoredVault() {
	try {
		const database = await openLocalDatabase();
		const stored = await new Promise((resolve, reject) => {
			const request = database.transaction('vault', 'readonly').objectStore('vault').get('encrypted');
			request.onsuccess = () => resolve(request.result);
			request.onerror = () => reject(request.error);
		});
		database.close();
		if (stored) return stored;
		const legacy = localStorage.getItem(STORAGE_KEY);
		if (legacy) await writeStoredVault(legacy);
		return legacy;
	} catch {
		return localStorage.getItem(STORAGE_KEY);
	}
}

async function writeStoredVault(envelope) {
	try {
		const database = await openLocalDatabase();
		await new Promise((resolve, reject) => {
			const transaction = database.transaction('vault', 'readwrite');
			transaction.objectStore('vault').put(envelope, 'encrypted');
			transaction.oncomplete = resolve;
			transaction.onerror = () => reject(transaction.error);
			transaction.onabort = () => reject(transaction.error);
		});
		database.close();
		localStorage.removeItem(STORAGE_KEY);
	} catch {
		localStorage.setItem(STORAGE_KEY, envelope);
	}
}

async function decryptState(envelope, passphrase) {
	if (!envelope.startsWith('FIELDNOTES1.')) throw new Error('This backup format is not recognized.');
	const bytes = fromBase64(envelope.slice('FIELDNOTES1.'.length));
	const salt = bytes.slice(0, 16);
	const iv = bytes.slice(16, 28);
	const key = await deriveKey(passphrase, salt);
	const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, bytes.slice(28));
	return { data: JSON.parse(new TextDecoder().decode(plaintext)), key, salt };
}

async function persist() {
	if (!vaultKey) return;
	await writeStoredVault(await encryptState(state));
	updateConnection();
}

function showToast(message) {
	const toast = $('#toast');
	toast.textContent = message;
	toast.classList.add('visible');
	clearTimeout(toastTimer);
	toastTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
}

function updateConnection() {
	const offline = !navigator.onLine;
	const label = $('#connection-label');
	const dot = $('.status-dot');
	if (label) label.textContent = offline ? 'Offline · saved on device' : 'Saved on this device';
	if (dot) dot.classList.toggle('is-offline', offline);
}

async function showVault() {
	const saved = await readStoredVault();
	const creating = !saved;
	$('#app').innerHTML = `<main class="vault-screen"><section class="vault-box">
		<a class="brand" href="#"><span class="brand-mark">f.</span><span>fieldnotes<span class="brand-dot">.</span></span></a>
		<p class="eyebrow">A quieter way to revise</p><h1>${creating ? 'Create your study vault.' : 'Welcome back.'}</h1>
		<p>${creating ? 'Your notes, plans, and results stay encrypted on this device. Choose a passphrase you can remember.' : 'Unlock your encrypted study space to pick up where you left off.'}</p>
		<form id="vault-form">
			${creating ? '<div class="field"><label for="student-name">Your name</label><input id="student-name" name="name" autocomplete="name" placeholder="First name" required maxlength="32"></div>' : ''}
			<div class="field"><label for="passphrase">Vault passphrase</label><input id="passphrase" name="passphrase" type="password" autocomplete="${creating ? 'new-password' : 'current-password'}" minlength="8" required placeholder="At least 8 characters"></div>
			${creating ? '<div class="field"><label for="confirm-passphrase">Confirm passphrase</label><input id="confirm-passphrase" name="confirm" type="password" autocomplete="new-password" minlength="8" required placeholder="Enter it once more"></div>' : ''}
			<p class="vault-error" id="vault-error"></p><button class="button" type="submit">${creating ? 'Create my vault' : 'Unlock my vault'} <span aria-hidden="true">→</span></button>
		</form>
		<p class="field-help">Encryption uses AES-GCM. Your passphrase is never sent anywhere. Losing it means this vault cannot be recovered.</p>
	</section></main>`;
	$('#vault-form').addEventListener('submit', async (event) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const passphrase = String(form.get('passphrase'));
		const error = $('#vault-error');
		try {
			if (creating) {
				if (passphrase !== String(form.get('confirm'))) throw new Error('Those passphrases do not match.');
				vaultSalt = crypto.getRandomValues(new Uint8Array(16));
				vaultKey = await deriveKey(passphrase, vaultSalt);
				vaultPassphrase = passphrase;
				state = freshState();
				state.name = String(form.get('name')).trim() || 'Student';
				await persist();
			} else {
				const unlocked = await decryptState(saved, passphrase);
				state = withPlanDefaults(unlocked.data);
				vaultKey = unlocked.key;
				vaultSalt = unlocked.salt;
				vaultPassphrase = passphrase;
			}
			renderApp();
		} catch (reason) {
			error.textContent = creating ? reason.message : 'That passphrase did not unlock this vault.';
		}
	});
}

function getSubjectStats(subject) {
	const attempts = state.attempts.filter((attempt) => attempt.subject === subject);
	const total = attempts.reduce((sum, attempt) => sum + attempt.total, 0);
	const correct = attempts.reduce((sum, attempt) => sum + attempt.score, 0);
	return { attempts: attempts.length, percent: total ? Math.round((correct / total) * 100) : 0 };
}

function getStreak() {
	const days = new Set(state.studyDays);
	let date = new Date();
	if (!days.has(date.toISOString().slice(0, 10))) date.setDate(date.getDate() - 1);
	let count = 0;
	while (days.has(date.toISOString().slice(0, 10))) { count += 1; date.setDate(date.getDate() - 1); }
	return count;
}

function renderOverview() {
	const points = state.attempts.reduce((sum, attempt) => sum + attempt.score * 10 + attempt.total, 0);
	const activeSubjects = state.plan.filter((item) => item.active).length;
	const totalQuestions = state.attempts.reduce((sum, attempt) => sum + attempt.total, 0);
	const streak = getStreak();
	const days = Array.from({ length: 7 }, (_, index) => {
		const date = new Date(); date.setDate(date.getDate() - (6 - index));
		const key = date.toISOString().slice(0, 10);
		return { label: date.toLocaleDateString('en', { weekday: 'short' }).slice(0, 1), done: state.studyDays.includes(key), today: key === todayKey() };
	});
	const bars = Array.from({ length: 7 }, (_, index) => {
		const date = new Date(); date.setDate(date.getDate() - (6 - index));
		const key = date.toISOString().slice(0, 10);
		const sessions = state.attempts.filter((attempt) => attempt.date === key).length;
		return { label: date.toLocaleDateString('en', { weekday: 'short' }).slice(0, 1), value: sessions ? Math.min(100, 24 + sessions * 29) : 4, today: key === todayKey() };
	});
	const badges = [
		{ title: 'First steps', detail: 'Complete a quiz', icon: '01', earned: state.attempts.length > 0 },
		{ title: 'On a roll', detail: '3-day study streak', icon: '03', earned: streak >= 3 },
		{ title: 'Sharp focus', detail: 'Score 80% in a quiz', icon: '◎', earned: state.attempts.some((attempt) => attempt.total && attempt.score / attempt.total >= .8) },
		{ title: 'Well rounded', detail: 'Study 3 subjects', icon: '✳', earned: new Set(state.attempts.map((attempt) => attempt.subject)).size >= 3 }
	];
	return `<div class="page-heading"><div><p class="eyebrow">${new Date().toLocaleDateString('en', { weekday: 'long', month: 'long', day: 'numeric' })}</p><h1>Your study space.</h1><p class="subheading">A little progress adds up, ${escapeHTML(state.name)}.</p></div><button class="button" data-action="start-quiz">Start a quiz <span aria-hidden="true">→</span></button></div>
		<div class="overview-grid"><section class="welcome-panel"><p class="eyebrow">A good place to begin</p><h1>Small sessions.<br>Stronger recall.</h1><p class="subheading">${activeSubjects} subjects in your plan. Pick one and get a quick win today.</p><button class="button" data-action="start-quiz">Choose a subject <span aria-hidden="true">↗</span></button></section>
		<section class="streak-panel"><div class="streak-top"><div><p class="eyebrow">Your rhythm</p><div class="streak-number">${streak}<span style="font: 400 15px 'DM Sans', sans-serif"> day${streak === 1 ? '' : 's'}</span></div><p class="subheading">${streak ? 'Keep showing up.' : 'Start a streak today.'}</p></div><div class="streak-mark" aria-hidden="true">✳</div></div><div class="week-dots">${days.map((day) => `<span class="day-dot">${day.label}<i class="${day.done ? 'done' : ''}" ${day.today ? 'style="outline:2px solid rgba(255,255,255,.4);outline-offset:2px"' : ''}></i></span>`).join('')}</div></section></div>
		<div class="stats-row"><div class="stat"><span class="stat-label">Questions answered</span><strong class="stat-value">${totalQuestions}</strong></div><div class="stat"><span class="stat-label">Average accuracy</span><strong class="stat-value">${state.attempts.length ? Math.round(state.attempts.reduce((sum, attempt) => sum + (attempt.total ? attempt.score / attempt.total : 0), 0) / state.attempts.length * 100) : 0}%</strong></div><div class="stat"><span class="stat-label">Study points</span><strong class="stat-value">${points}</strong><span class="stat-trend">${Math.floor(points / 100) + 1} · Level</span></div><div class="stat"><span class="stat-label">Quizzes completed</span><strong class="stat-value">${state.attempts.length}</strong></div></div>
		<section><div class="section-title"><h2>Subject pulse</h2><button class="text-button" data-view="plan">Edit study plan →</button></div><div class="subject-list">${SUBJECTS.map((subject) => { const stats = getSubjectStats(subject.name); return `<div class="subject-row"><div class="subject-name"><span class="subject-swatch" style="--swatch:${subject.color}"></span><span>${subject.name}<span class="subject-meta">${stats.attempts ? `${stats.attempts} quiz${stats.attempts === 1 ? '' : 'zes'} completed` : 'Ready when you are'}</span></span></div><div class="progress-track"><div class="progress-fill" style="--swatch:${subject.color};width:${stats.percent}%"></div></div><strong class="subject-score">${stats.percent}%</strong><div class="subject-action"><button class="text-button" data-action="start-subject" data-subject="${subject.name}">Practice →</button></div></div>`; }).join('')}</div></section>
		<div class="bottom-grid"><section><div class="section-title"><h2>Study activity</h2><span class="field-help">Last 7 days</span></div><div class="activity-chart">${bars.map((bar) => `<div class="chart-column"><div class="chart-bar ${bar.today ? 'today' : ''}" style="height:${bar.value}%"></div>${bar.label}</div>`).join('')}</div></section><section><div class="section-title"><h2>Milestones</h2><span class="field-help">${badges.filter((badge) => badge.earned).length} of ${badges.length} earned</span></div><div class="badge-list">${badges.map((badge) => `<div class="badge ${badge.earned ? '' : 'locked'}"><span class="badge-icon">${badge.icon}</span><span><strong class="badge-title">${badge.title}</strong><span class="badge-detail">${badge.detail}</span></span></div>`).join('')}</div></section></div>`;
}

function renderQuizSetup() {
	return `<div class="page-heading"><div><p class="eyebrow">Practice, then understand</p><h1>Quiz room.</h1><p class="subheading">Quick questions with explanations after every answer.</p></div></div><div class="quiz-layout"><section class="surface quiz-config"><h2>Set up a session</h2><p class="subheading" style="margin-bottom:23px">Questions are drawn from the local revision set and work offline.</p><form id="quiz-setup"><div class="field"><label for="quiz-subject">Subject</label><select id="quiz-subject">${SUBJECTS.map((subject) => `<option>${subject.name}</option>`).join('')}<option value="Mixed">Mixed subjects</option></select></div><div class="field"><label for="quiz-count">Questions</label><select id="quiz-count"><option value="5">5 questions · about 5 min</option><option value="10">10 questions · about 10 min</option><option value="15">15 questions · about 15 min</option></select></div><button class="button" type="submit">Begin session <span aria-hidden="true">→</span></button></form></section><aside class="surface quiz-side"><p class="eyebrow">How it works</p><h2>Learn from every try.</h2><p>Choose an answer to see whether it is correct, then read a short explanation before moving on.</p><p>Multiple choice, true or false, and short answer questions keep recall active.</p><div class="notice">Revision prompts in this starter set are original examples, not reproductions of KCSE examination papers.</div></aside></div>`;
}

function renderQuestion() {
	const question = quiz.questions[quiz.index];
	const answered = quiz.answers[quiz.index] !== undefined;
	const selected = quiz.answers[quiz.index];
	const correct = answered && isCorrect(question, selected);
	let response = '';
	if (question.type === 'choice') response = `<div class="answer-list">${question.choices.map((choice, index) => `<button class="answer-option ${selected === index ? 'selected' : ''} ${answered && index === question.answer ? 'correct' : ''} ${answered && selected === index && !correct ? 'incorrect' : ''}" data-action="select-answer" data-answer="${index}" ${answered ? 'disabled' : ''}><span class="answer-letter">${String.fromCharCode(65 + index)}</span>${escapeHTML(choice)}</button>`).join('')}</div>`;
	if (question.type === 'boolean') response = `<div class="answer-list">${[true, false].map((value) => `<button class="answer-option ${selected === value ? 'selected' : ''} ${answered && value === question.answer ? 'correct' : ''} ${answered && selected === value && !correct ? 'incorrect' : ''}" data-action="select-answer" data-answer="${value}" ${answered ? 'disabled' : ''}><span class="answer-letter">${value ? 'T' : 'F'}</span>${value ? 'True' : 'False'}</button>`).join('')}</div>`;
	if (question.type === 'short') response = `<form id="short-answer-form"><div class="field"><label for="short-answer">Your answer</label><input id="short-answer" autocomplete="off" ${answered ? `value="${escapeHTML(String(selected))}" disabled` : ''} placeholder="Type a short answer" required></div>${answered ? '' : '<button class="button small" type="submit">Check answer</button>'}</form>`;
	return `<section class="surface quiz-card"><div class="question-count">QUESTION ${quiz.index + 1} / ${quiz.questions.length} · ${escapeHTML(question.subject.toUpperCase())}${question.paper ? ` · ${escapeHTML(question.paper.toUpperCase())}` : ''} · ${question.type === 'choice' ? 'MULTIPLE CHOICE' : question.type === 'boolean' ? 'TRUE OR FALSE' : 'SHORT ANSWER'}</div><div class="quiz-progress"><span style="width:${(quiz.index + (answered ? 1 : 0)) / quiz.questions.length * 100}%"></span></div><h2 class="question-text">${escapeHTML(question.prompt)}</h2>${response}${answered ? `<div class="answer-feedback ${correct ? '' : 'is-wrong'}"><strong>${correct ? 'That is right.' : `Not quite. The answer is ${escapeHTML(formatAnswer(question))}.`}</strong> ${escapeHTML(question.explanation)}</div>` : ''}<div class="quiz-actions"><button class="text-button" data-action="exit-quiz">Exit session</button>${answered ? `<button class="button" data-action="next-question">${quiz.index === quiz.questions.length - 1 ? 'See results' : 'Next question'} <span aria-hidden="true">→</span></button>` : ''}</div></section>`;
}

function formatAnswer(question) {
	return question.type === 'choice' ? question.choices[question.answer] : question.type === 'boolean' ? (question.answer ? 'True' : 'False') : question.answer;
}

function isCorrect(question, answer) {
	if (question.type === 'short') return String(answer).trim().toLowerCase().replace(/[.!?]$/, '') === String(question.answer).toLowerCase();
	return answer === question.answer;
}

function renderQuizResult() {
	const score = quiz.questions.reduce((total, question, index) => total + (isCorrect(question, quiz.answers[index]) ? 1 : 0), 0);
	const percent = Math.round(score / quiz.questions.length * 100);
	return `<section class="surface quiz-card"><p class="eyebrow">Session complete</p><h1>${percent >= 80 ? 'A strong session.' : percent >= 50 ? 'Good work showing up.' : 'Every try teaches you.'}</h1><div class="result-score">${score}<span style="font:400 18px 'DM Sans',sans-serif;color:var(--muted)"> / ${quiz.questions.length}</span></div><p class="subheading">${percent}% correct · ${percent >= 80 ? 'Keep that momentum going.' : 'Revisit the explanations and try another round.'}</p><div class="answer-feedback">Points earned: <strong>${score * 10 + quiz.questions.length}</strong>. Your subject pulse has been updated.</div><div class="quiz-actions"><button class="button secondary" data-view="overview">Back to overview</button><button class="button secondary" data-action="share-result">Share result</button><button class="button" data-action="retry-quiz">Another quiz <span aria-hidden="true">→</span></button></div></section>`;
}

function renderQuiz() {
	if (!quiz) return renderQuizSetup();
	if (quiz.complete) return renderQuizResult();
	return renderQuestion();
}

function renderPlan() {
	const minutes = state.plan.filter((item) => item.active).reduce((sum, item) => sum + item.sessions * item.minutes, 0);
	const focus = state.plan.filter((item) => item.active && getSubjectStats(item.subject).attempts).sort((a, b) => getSubjectStats(a.subject).percent - getSubjectStats(b.subject).percent)[0];
	const suggestion = focus ? `${focus.subject} is currently your lowest-scoring active subject at ${getSubjectStats(focus.subject).percent}%. Consider adding a short session.` : 'Complete a quiz to get a focus suggestion based on your recent accuracy.';
	return `<div class="page-heading"><div><p class="eyebrow">A plan that bends with you</p><h1>Study plan.</h1><p class="subheading">Choose your focus and set a weekly rhythm that feels doable.</p></div><button class="button" data-action="add-subject">Add a subject <span aria-hidden="true">+</span></button></div><section class="surface"><div class="section-title"><h2>Your subjects</h2><span class="field-help">Changes save automatically</span></div><div class="plan-list">${state.plan.map((item, index) => `<div class="plan-row"><input class="plan-check" type="checkbox" data-plan-index="${index}" data-plan-field="active" ${item.active ? 'checked' : ''} aria-label="Include ${escapeHTML(item.subject)} in plan"><div><span class="plan-subject">${escapeHTML(item.subject)}</span><span class="plan-meta">${getSubjectStats(item.subject).percent ? `${getSubjectStats(item.subject).percent}% recent accuracy` : 'No quiz results yet'}</span></div><label class="field-help">Sessions / week<select data-plan-index="${index}" data-plan-field="sessions">${[1, 2, 3, 4, 5, 6, 7].map((num) => `<option ${item.sessions === num ? 'selected' : ''}>${num}</option>`).join('')}</select></label><label class="field-help">Minutes / session<select data-plan-index="${index}" data-plan-field="minutes">${[15, 20, 30, 45, 60].map((num) => `<option ${item.minutes === num ? 'selected' : ''}>${num}</option>`).join('')}</select></label><button class="icon-button" data-action="remove-subject" data-index="${index}" aria-label="Remove ${escapeHTML(item.subject)}">×</button></div>`).join('')}</div><div class="plan-summary"><span><strong>${Math.round(minutes / 60 * 10) / 10} hrs</strong><span class="field-help"> planned per week</span></span><span class="field-help">${state.plan.filter((item) => item.active).length} subjects · adjust any time</span></div></section><div class="notice">${escapeHTML(suggestion)} Your plan stays on this device.</div>`;
}

function renderLibrary() {
	const sheets = state.answerSheets || [];
	const paperCards = PAPERS.map((paper) => {
		const key = `${paper.year}-${paper.subject}-${paper.paper}`;
		const saved = state.savedPapers.includes(key);
		const practiceButton = paper.subject === 'English'
			? `<button class="button small" data-action="start-subject" data-subject="English" data-paper="${escapeHTML(paper.paper)}">Practice ${escapeHTML(paper.paper)}</button>`
			: `<button class="button small" data-action="start-subject" data-subject="${escapeHTML(paper.subject)}">Practice ${escapeHTML(paper.subject)}</button>`;
		return `<article class="paper-item" data-paper-search="${paper.year} ${paper.subject} ${paper.paper}"><div><div class="paper-top"><span class="paper-year">KCSE · ${paper.year}</span><span class="saved-mark">${saved ? 'Saved' : 'Paper outline'}</span></div><h2 class="paper-subject">${escapeHTML(paper.subject)}</h2><p class="paper-detail">${escapeHTML(paper.detail || `${paper.paper} · ${paper.questions} questions`)}</p></div><div class="paper-actions"><button class="text-button" data-action="toggle-paper" data-paper="${key}">${saved ? 'Remove from shelf' : 'Save to shelf'}</button>${practiceButton}</div></article>`;
	}).join('');
	const setbookCards = SETBOOKS.map((book) => `<article class="paper-item" data-paper-search="2026 ${book.subject} ${book.title} ${book.author} ${book.genre}"><div><div class="paper-top"><span class="paper-year">KCSE · CLASS OF 2026</span><span class="saved-mark">${escapeHTML(book.genre)}</span></div><h2 class="paper-subject">${escapeHTML(book.title)}</h2><p class="paper-detail">${escapeHTML(book.subject)} · ${escapeHTML(book.author)}</p></div><div class="paper-actions"><span class="field-help">2022–2026 setbook cycle</span><button class="text-button" data-action="start-subject" data-subject="English" data-paper="Paper 3">Practice Paper 3 →</button></div></article>`).join('');
	const sheetCards = sheets.map((sheet) => `<article class="paper-item"><div><span class="paper-year">ANSWER SHEET</span><h2 class="paper-subject">${escapeHTML(sheet.name)}</h2><p class="paper-detail">Added ${new Date(sheet.savedAt).toLocaleDateString()}</p></div><div class="paper-actions"><a class="text-button" href="${sheet.data}" download="${escapeHTML(sheet.name)}">Open / download</a><button class="text-button" data-action="remove-sheet" data-sheet="${sheet.id}">Remove</button></div></article>`).join('');
	return `<div class="page-heading"><div><p class="eyebrow">Your revision shelf</p><h1>Paper library.</h1><p class="subheading">KCSE paper outlines and prescribed 2026 language setbooks.</p></div><div class="library-tools"><input id="paper-search" type="search" placeholder="Find a subject, title, or year" aria-label="Search papers and setbooks"><button class="button small" data-action="import-paper">Add answer sheet</button><input id="paper-file" type="file" accept=".pdf,.jpg,.jpeg,.png,.webp" hidden></div></div><section><div class="section-title"><h2>Paper outlines</h2><span class="field-help">Past paper files are not included</span></div><div class="paper-grid" id="paper-grid">${paperCards}</div></section><section style="margin-top:30px"><div class="section-title"><h2>English and Kiswahili setbooks</h2><span class="field-help">KCSE class of 2026 · 2022–2026 cycle</span></div><div class="paper-grid">${setbookCards}</div></section>${sheets.length ? `<section style="margin-top:30px"><div class="section-title"><h2>Your answer sheets</h2><span class="field-help">Encrypted and stored on this device</span></div><div class="paper-grid">${sheetCards}</div></section>` : ''}<div class="notice">Setbook titles and paper outlines are study references; the app does not include copyrighted full-text books or official exam papers.</div>`;
}

function renderSettings() {
	return `<div class="page-heading"><div><p class="eyebrow">Your data, your choice</p><h1>Settings.</h1><p class="subheading">Manage your encrypted vault and optional remote sync.</p></div></div><div class="settings-grid"><section class="surface"><div class="settings-section"><h2>Remote sync</h2><p class="subheading">Sync an encrypted copy to an endpoint you control. The endpoint must support GET (download) and PUT (upload) of the encrypted text payload.</p><div class="field" style="margin-top:17px"><label for="sync-url">HTTPS sync endpoint</label><input id="sync-url" type="url" value="${escapeHTML(state.syncUrl)}" placeholder="https://your-server.example/study-sync"><span class="field-help">Use an HTTPS endpoint that you trust. Your passphrase is never sent; only the AES-GCM encrypted vault is transmitted.</span></div><label class="consent-row"><input id="sync-consent" type="checkbox" ${state.consent ? 'checked' : ''}>I understand encrypted vault data will be sent to this endpoint when I sync.</label><div style="display:flex;gap:9px;margin-top:14px"><button class="button small" data-action="save-sync">Save endpoint</button><button class="button secondary small" data-action="sync-now">Sync now</button></div><p class="sync-status" id="sync-status">Sync is optional. No server is configured by this app.</p></div><div class="settings-section"><h2>Encrypted backup</h2><p class="subheading">Export a portable, AES-GCM encrypted backup or restore one on this device.</p><div style="display:flex;gap:9px;margin-top:15px"><button class="button secondary small" data-action="export-backup">Export backup</button><button class="button secondary small" data-action="import-backup">Import backup</button><input id="backup-file" type="file" accept=".fieldnotes,.txt" hidden></div></div></section><aside class="surface"><p class="eyebrow">Privacy notes</p><h2>Private by default.</h2><p class="subheading" style="line-height:1.7">Your study data is encrypted on this device using AES-256-GCM. The encryption key is derived from your passphrase with PBKDF2. Your passphrase is not stored or transmitted.</p><div class="notice">Keep your passphrase safe. There is no password reset service, and losing it means your encrypted data cannot be recovered.</div><p class="field-help" style="margin-top:14px">Quiz activity and study plans stay local unless you explicitly configure sync. No analytics or leaderboard service is connected.</p></aside></div>`;
}

function renderApp() {
	$('#app').innerHTML = `<header class="topbar"><a class="brand" href="#overview" aria-label="Fieldnotes home"><span class="brand-mark">f.</span><span>fieldnotes<span class="brand-dot">.</span></span></a><nav class="main-nav" aria-label="Main navigation">${[['overview', 'Overview'], ['quiz', 'Quizzes'], ['plan', 'Study plan'], ['library', 'Library']].map(([key, title]) => `<button class="nav-link ${currentView === key ? 'is-active' : ''}" data-view="${key}">${title}</button>`).join('')}</nav><div class="topbar-tools"><span class="connection-status"><span class="status-dot"></span><span id="connection-label">Saved on this device</span></span><button class="avatar-button" id="settings-button" aria-label="Open settings">${escapeHTML(state.name.slice(0, 1).toUpperCase())}</button></div></header><main id="view" class="page-content">${currentView === 'overview' ? renderOverview() : currentView === 'quiz' ? renderQuiz() : currentView === 'plan' ? renderPlan() : currentView === 'library' ? renderLibrary() : renderSettings()}</main><footer class="app-footer"><span>KCSE revision, at your pace.</span><span>Made for steady progress.</span></footer><div id="toast" class="toast" role="status" aria-live="polite"></div>`;
	updateConnection();
}


function beginQuiz(subject = $('#quiz-subject')?.value || 'Mathematics', count = Number($('#quiz-count')?.value || 5), paper = '') {
	const subjectPool = subject === 'Mixed' ? [...QUESTION_BANK] : QUESTION_BANK.filter((question) => question.subject === subject);
	const paperPool = paper ? subjectPool.filter((question) => question.paper === paper) : subjectPool;
	const pool = paperPool.length ? paperPool : subjectPool;
	const shuffled = pool.sort(() => Math.random() - .5);
	const questions = Array.from({ length: count }, (_, index) => shuffled[index % shuffled.length]);
	quiz = { subject: subject === 'Mixed' ? 'Mixed' : subject, paper: paperPool.length ? paper : '', questions, index: 0, answers: {}, complete: false };
	currentView = 'quiz';
	renderApp();
}

async function answerCurrent(answer) {
	const question = quiz.questions[quiz.index];
	if (quiz.answers[quiz.index] !== undefined) return;
	quiz.answers[quiz.index] = answer;
	const correct = isCorrect(question, answer);
	renderApp();
	if (correct) showToast('Correct. +10 points');
}

async function completeQuiz() {
	const score = quiz.questions.reduce((total, question, index) => total + (isCorrect(question, quiz.answers[index]) ? 1 : 0), 0);
	state.attempts.push({ id: crypto.randomUUID(), subject: quiz.subject, paper: quiz.paper, score, total: quiz.questions.length, date: todayKey() });
	if (!state.studyDays.includes(todayKey())) state.studyDays.push(todayKey());
	quiz.complete = true;
	await persist();
	renderApp();
}

function attachEvents() {
	document.addEventListener('click', async (event) => {
		const viewButton = event.target.closest('[data-view]');
		const actionButton = event.target.closest('[data-action]');
		if (viewButton) {
			currentView = viewButton.dataset.view;
			if (currentView === 'quiz') quiz = null;
			renderApp();
			return;
		}
		if (!actionButton) return;
		const { action } = actionButton.dataset;
		if (action === 'start-quiz') { currentView = 'quiz'; quiz = null; renderApp(); }
		if (action === 'start-subject') beginQuiz(actionButton.dataset.subject, 5, actionButton.dataset.paper || '');
		if (action === 'select-answer') await answerCurrent(actionButton.dataset.answer === 'true' ? true : actionButton.dataset.answer === 'false' ? false : Number(actionButton.dataset.answer));
		if (action === 'next-question') {
			if (quiz.index === quiz.questions.length - 1) await completeQuiz();
			else { quiz.index += 1; renderApp(); }
		}
		if (action === 'exit-quiz') { quiz = null; currentView = 'overview'; renderApp(); }
		if (action === 'retry-quiz') beginQuiz(quiz.subject, quiz.questions.length, quiz.paper);
		if (action === 'share-result') {
			const score = quiz.questions.reduce((total, question, index) => total + (isCorrect(question, quiz.answers[index]) ? 1 : 0), 0);
			const message = `${state.name} scored ${score}/${quiz.questions.length} in a ${quiz.subject} revision quiz on Fieldnotes.`;
			try {
				if (navigator.share) await navigator.share({ title: 'My Fieldnotes quiz result', text: message });
				else await navigator.clipboard.writeText(message);
				showToast(navigator.share ? 'Result shared.' : 'Result copied to clipboard.');
			} catch { showToast('Sharing was cancelled.'); }
		}
		if (action === 'add-subject') {
			const available = SUBJECTS.map((item) => item.name).filter((name) => !state.plan.some((entry) => entry.subject === name));
			if (!available.length) { showToast('All available subjects are already in your plan.'); return; }
			state.plan.push({ subject: available[0], active: true, sessions: 2, minutes: 30 });
			await persist(); renderApp();
		}
		if (action === 'remove-subject') { state.plan.splice(Number(actionButton.dataset.index), 1); await persist(); renderApp(); }
		if (action === 'toggle-paper') {
			const key = actionButton.dataset.paper;
			state.savedPapers = state.savedPapers.includes(key) ? state.savedPapers.filter((item) => item !== key) : [...state.savedPapers, key];
			await persist(); renderApp();
		}
		if (action === 'remove-sheet') { state.answerSheets = (state.answerSheets || []).filter((sheet) => sheet.id !== actionButton.dataset.sheet); await persist(); renderApp(); }
		if (action === 'import-paper') $('#paper-file').click();
		if (action === 'import-backup') $('#backup-file').click();
		if (action === 'save-sync') {
			state.syncUrl = $('#sync-url').value.trim(); state.consent = $('#sync-consent').checked;
			await persist(); showToast('Sync settings saved.');
		}
		if (action === 'sync-now') await syncVault();
		if (action === 'export-backup') await exportBackup();
	});
	document.addEventListener('submit', async (event) => {
		if (event.target.id === 'quiz-setup') { event.preventDefault(); beginQuiz($('#quiz-subject').value, Number($('#quiz-count').value)); }
		if (event.target.id === 'short-answer-form') { event.preventDefault(); await answerCurrent($('#short-answer').value); }
	});
	document.addEventListener('change', async (event) => {
		if (event.target.matches('[data-plan-index]')) {
			const item = state.plan[Number(event.target.dataset.planIndex)];
			const field = event.target.dataset.planField;
			item[field] = field === 'active' ? event.target.checked : Number(event.target.value);
			await persist();
			const focusedIndex = event.target.dataset.planIndex;
			renderApp();
			const updated = $(`[data-plan-index="${focusedIndex}"][data-plan-field="${field}"]`);
			updated?.focus();
		}
		if (event.target.id === 'paper-file' && event.target.files[0]) await storeAnswerSheet(event.target.files[0]);
		if (event.target.id === 'backup-file' && event.target.files[0]) await importBackup(event.target.files[0]);
	});
	document.addEventListener('input', (event) => {
		if (event.target.id === 'paper-search') {
			const query = event.target.value.toLowerCase();
			document.querySelectorAll('[data-paper-search]').forEach((item) => { item.hidden = !item.dataset.paperSearch.toLowerCase().includes(query); });
		}
	});
	document.addEventListener('click', (event) => { if (event.target.id === 'settings-button') { currentView = 'settings'; renderApp(); } });
	window.addEventListener('online', async () => {
		updateConnection();
		if (vaultKey && state.syncUrl && state.consent) await syncVault(true);
	});
	window.addEventListener('offline', updateConnection);
}

async function storeAnswerSheet(file) {
	if (file.size > 12 * 1024 * 1024) { showToast('Please choose a file smaller than 12 MB.'); return; }
	const reader = new FileReader();
	reader.onload = async () => {
		const sheets = state.answerSheets || [];
		sheets.push({ id: crypto.randomUUID(), name: file.name, type: file.type, data: reader.result, savedAt: new Date().toISOString() });
		state.answerSheets = sheets;
		await persist();
		renderApp();
		showToast(`${file.name} saved in your encrypted vault.`);
	};
	reader.readAsDataURL(file);
}

async function exportBackup() {
	const passphrase = window.prompt('Enter your vault passphrase to encrypt this backup:');
	if (!passphrase) return;
	try {
		const envelope = await encryptState(state, await deriveKey(passphrase, vaultSalt), vaultSalt);
		const link = document.createElement('a');
		link.href = URL.createObjectURL(new Blob([envelope], { type: 'text/plain' }));
		link.download = 'fieldnotes-backup.fieldnotes';
		link.click();
		URL.revokeObjectURL(link.href);
		showToast('Encrypted backup exported.');
	} catch { showToast('Could not create the backup.'); }
}

async function importBackup(file) {
	const passphrase = window.prompt('Enter the passphrase used for this backup:');
	if (!passphrase) return;
	try {
		const unlocked = await decryptState(await file.text(), passphrase);
		state = withPlanDefaults(unlocked.data);
		vaultKey = unlocked.key; vaultSalt = unlocked.salt;
		vaultPassphrase = passphrase;
		await persist(); renderApp(); showToast('Backup restored to this device.');
	} catch { showToast('Could not decrypt that backup. Check the passphrase and file.'); }
}

async function syncVault(automatic = false) {
	const setStatus = (message) => { const status = $('#sync-status'); if (status) status.textContent = message; };
	if (!state.syncUrl || !state.consent) { setStatus('Save an HTTPS endpoint and confirm consent before syncing.'); return; }
	if (!navigator.onLine) { setStatus('You are offline. Your data remains saved locally.'); return; }
	if (!state.syncUrl.startsWith('https://')) { setStatus('For security, the sync endpoint must use HTTPS.'); return; }
	const passphrase = vaultPassphrase || (automatic ? '' : window.prompt('Enter your vault passphrase to sync encrypted data:'));
	if (!passphrase) { setStatus('Unlock your vault before syncing.'); return; }
	setStatus('Connecting to your endpoint…');
	try {
		const response = await fetch(state.syncUrl, { method: 'GET', headers: { Accept: 'text/plain' }, cache: 'no-store' });
		let merged = state;
		if (response.ok && response.status !== 204) {
			const remoteEnvelope = await response.text();
			if (remoteEnvelope.trim()) {
				const remote = (await decryptState(remoteEnvelope.trim(), passphrase)).data;
				merged = mergeStates(state, remote);
			}
		} else if (!response.ok && response.status !== 404) throw new Error(`Download returned ${response.status}`);
		state = merged;
		const upload = await fetch(state.syncUrl, { method: 'PUT', headers: { 'Content-Type': 'text/plain; charset=utf-8' }, body: await encryptState(state) });
		if (!upload.ok) throw new Error(`Upload returned ${upload.status}`);
		await persist();
		renderApp();
		setStatus('Sync complete. Your endpoint stores an encrypted vault copy.');
		showToast('Encrypted vault synced.');
	} catch (error) {
		setStatus(`Sync failed: ${error.message || 'check endpoint and passphrase.'}`);
	}
}

function mergeStates(local, remote) {
	const attempts = new Map([...(remote.attempts || []), ...(local.attempts || [])].map((attempt) => [attempt.id, attempt]));
	const sheets = new Map([...(remote.answerSheets || []), ...(local.answerSheets || [])].map((sheet) => [sheet.id, sheet]));
	const planMap = new Map((remote.plan || []).map((item) => [item.subject, item]));
	(local.plan || []).forEach((item) => planMap.set(item.subject, item));
	return { ...remote, ...local, attempts: [...attempts.values()], answerSheets: [...sheets.values()], studyDays: [...new Set([...(remote.studyDays || []), ...(local.studyDays || [])])], savedPapers: [...new Set([...(remote.savedPapers || []), ...(local.savedPapers || [])])], plan: [...planMap.values()] };
}

async function start() {
	if (!crypto?.subtle) {
		$('#app').innerHTML = '<main class="vault-screen"><section class="vault-box"><h1>Secure storage needs HTTPS.</h1><p>Open this app on HTTPS or localhost so your browser can provide encrypted local storage.</p></section></main>';
		return;
	}
	attachEvents();
	if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
	await showVault();
}

start();
