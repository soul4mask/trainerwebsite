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
	{ id: 'sw5', subject: 'Kiswahili', type: 'short', prompt: 'Taja kinyume cha neno “furaha”.', answer: 'huzuni', explanation: '“Huzuni” ni kinyume cha “furaha”.' },
	{ id: 'm6', subject: 'Mathematics', type: 'choice', prompt: 'A right-angled triangle has shorter sides of 6 cm and 8 cm. What is the length of its hypotenuse?', choices: ['9 cm', '10 cm', '12 cm', '14 cm'], answer: 1, explanation: 'By Pythagoras’ theorem, the hypotenuse is √(6² + 8²) = √100 = 10 cm.' },
	{ id: 'm7', subject: 'Mathematics', type: 'short', prompt: 'Solve 3(x − 2) = 15.', answer: '7', explanation: 'Divide both sides by 3 to get x − 2 = 5, so x = 7.' },
	{ id: 'm8', subject: 'Mathematics', type: 'choice', prompt: 'The ratio of two quantities is 2:5 and their sum is 42. What is the smaller quantity?', choices: ['10', '12', '14', '30'], answer: 1, explanation: 'There are 7 equal parts, so each part is 42 ÷ 7 = 6. The smaller quantity is 2 × 6 = 12.' },
	{ id: 'm9', subject: 'Mathematics', type: 'short', prompt: 'The first terms of an arithmetic sequence are 4, 7, 10, … What is its tenth term?', answer: '31', explanation: 'The common difference is 3. The tenth term is 4 + 9 × 3 = 31.' },
	{ id: 'm10', subject: 'Mathematics', type: 'choice', prompt: 'A bag contains 3 red counters and 2 blue counters. What is the probability of choosing a red counter at random?', choices: ['2/5', '3/5', '1/2', '3/2'], answer: 1, explanation: 'There are 3 red counters among 5 counters, so the probability is 3/5.' },
	{ id: 'm11', subject: 'Mathematics', type: 'short', prompt: 'A shirt costs KSh 2,000 before a 15% discount. What is its price after the discount, in KSh?', answer: '1700', explanation: 'The discount is 0.15 × 2,000 = KSh 300, leaving a price of KSh 1,700.' },
	{ id: 'm12', subject: 'Mathematics', type: 'short', prompt: 'Find the area of a circle with radius 7 cm. Use π = 22/7.', answer: '154', explanation: 'Area = πr² = (22/7) × 7² = 154 cm².' },
	{ id: 'm13', subject: 'Mathematics', type: 'short', prompt: 'Find the simple interest on KSh 5,000 invested at 8% per year for 2 years.', answer: '800', explanation: 'Simple interest = principal × rate × time = 5,000 × 0.08 × 2 = KSh 800.' },
	{ id: 'm14', subject: 'Mathematics', type: 'short', prompt: 'Find the mean of 4, 6, 8, and 10.', answer: '7', explanation: 'The sum is 28 and there are 4 values, so the mean is 28 ÷ 4 = 7.' },
	{ id: 'm15', subject: 'Mathematics', type: 'short', prompt: 'Solve the simultaneous equations x + y = 9 and x − y = 3. Give x.', answer: '6', explanation: 'Adding the equations gives 2x = 12, so x = 6.' },
	{ id: 'e14', subject: 'English', paper: 'Paper 1', type: 'choice', prompt: 'Which sentence uses the apostrophe correctly?', choices: ['The teachers room is open.', 'The teacher’s room is open.', 'The teachers’ room’s is open.', 'The teachers room’s are open.'], answer: 1, explanation: 'The singular possessive “teacher’s” shows that the room belongs to one teacher.' },
	{ id: 'e15', subject: 'English', paper: 'Paper 1', type: 'short', prompt: 'Rewrite in reported speech: She said, “I am tired.”', answer: 'she said that she was tired', explanation: 'In reported speech, the pronoun changes to “she” and the present tense “am” shifts to “was.”' },
	{ id: 'e16', subject: 'English', paper: 'Paper 1', type: 'choice', prompt: 'Choose the correct word: The committee reached ___ decision after a long discussion.', choices: ['it’s', 'its', 'their’s', 'there'], answer: 1, explanation: '“Its” is the possessive form of “it.” “It’s” means “it is” or “it has.”' },
	{ id: 'e17', subject: 'English', paper: 'Paper 2', type: 'short', prompt: 'What is the main purpose of a topic sentence in a paragraph?', answer: 'to state the main idea', explanation: 'A topic sentence introduces the central idea that the paragraph develops.' },
	{ id: 'e18', subject: 'English', paper: 'Paper 2', type: 'choice', prompt: 'Which phrase is an example of a simile?', choices: ['The classroom was a zoo.', 'She ran like the wind.', 'The sun smiled.', 'A mountain of homework'], answer: 1, explanation: 'A simile compares unlike things using “like” or “as.”' },
	{ id: 'e19', subject: 'English', paper: 'Paper 2', type: 'boolean', prompt: 'A fact can be checked against evidence, while an opinion expresses a personal judgement.', answer: true, explanation: 'Facts are verifiable statements; opinions express a viewpoint or evaluation.' },
	{ id: 'e20', subject: 'English', paper: 'Paper 3', type: 'choice', prompt: 'Which feature most clearly establishes the setting at the opening of a narrative?', choices: ['A description of the time and place', 'A list of characters’ exam marks', 'A conclusion to the conflict', 'A definition of the title'], answer: 0, explanation: 'The opening can orient the reader by establishing when and where the events occur.' },
	{ id: 'e21', subject: 'English', paper: 'Paper 1', type: 'short', prompt: 'Give the plural form of “criterion”.', answer: 'criteria', explanation: '“Criterion” has the irregular Greek-derived plural “criteria.”' },
	{ id: 'e22', subject: 'English', paper: 'Paper 2', type: 'choice', prompt: 'In the sentence “Although it was raining, we continued the match,” which word introduces the subordinate clause?', choices: ['it', 'raining', 'although', 'continued'], answer: 2, explanation: '“Although” is a subordinating conjunction introducing the dependent clause.' },
	{ id: 'e23', subject: 'English', paper: 'Paper 1', type: 'boolean', prompt: 'A semicolon can join two closely related independent clauses.', answer: true, explanation: 'A semicolon can link independent clauses that are closely related in meaning.' },
	{ id: 'b6', subject: 'Biology', type: 'choice', prompt: 'Which blood component is primarily responsible for clotting?', choices: ['Red blood cells', 'Platelets', 'Plasma water', 'Lymphocytes'], answer: 1, explanation: 'Platelets gather at damaged vessels and help form a clot.' },
	{ id: 'b7', subject: 'Biology', type: 'short', prompt: 'What is the term for the loss of water vapour from a plant’s leaves?', answer: 'transpiration', explanation: 'Transpiration is the loss of water vapour from the aerial parts of a plant, mainly through stomata.' },
	{ id: 'b8', subject: 'Biology', type: 'boolean', prompt: 'In a food chain, energy is transferred from producers to consumers.', answer: true, explanation: 'Producers capture energy, which passes to consumers when organisms feed.' },
	{ id: 'b9', subject: 'Biology', type: 'choice', prompt: 'Which structure controls the movement of substances into and out of a cell?', choices: ['Cell membrane', 'Nucleus', 'Cell wall', 'Chromosome'], answer: 0, explanation: 'The cell membrane is selectively permeable and regulates exchange with the surroundings.' },
	{ id: 'b10', subject: 'Biology', type: 'short', prompt: 'Name the type of cell division that produces two genetically identical daughter cells.', answer: 'mitosis', explanation: 'Mitosis produces two daughter cells with the same chromosome number and genetic information as the parent cell.' },
	{ id: 'b11', subject: 'Biology', type: 'choice', prompt: 'Which part of the human digestive system absorbs most digested nutrients?', choices: ['Stomach', 'Small intestine', 'Large intestine', 'Oesophagus'], answer: 1, explanation: 'Villi in the small intestine provide a large surface area for nutrient absorption.' },
	{ id: 'b12', subject: 'Biology', type: 'boolean', prompt: 'Mammalian red blood cells are adapted for oxygen transport by containing haemoglobin.', answer: true, explanation: 'Haemoglobin binds oxygen reversibly, allowing red blood cells to transport it around the body.' },
	{ id: 'b13', subject: 'Biology', type: 'short', prompt: 'What is the name of the tissue that transports water and mineral salts from roots in a plant?', answer: 'xylem', explanation: 'Xylem vessels conduct water and dissolved mineral salts from roots toward the rest of the plant.' },
	{ id: 'b14', subject: 'Biology', type: 'choice', prompt: 'Which organism is a decomposer in an ecosystem?', choices: ['Green grass', 'Mushroom', 'Hawk', 'Grasshopper'], answer: 1, explanation: 'Fungi such as mushrooms break down dead organic material and recycle nutrients.' },
	{ id: 'b15', subject: 'Biology', type: 'short', prompt: 'What is the name of the biological process by which organisms produce offspring?', answer: 'reproduction', explanation: 'Reproduction is the process through which organisms produce new individuals of their species.' },
	{ id: 'c6', subject: 'Chemistry', type: 'choice', prompt: 'What is the chemical formula for water?', choices: ['HO', 'H₂O', 'H₂O₂', 'OH₂₂'], answer: 1, explanation: 'A water molecule contains two hydrogen atoms and one oxygen atom, giving H₂O.' },
	{ id: 'c7', subject: 'Chemistry', type: 'short', prompt: 'What is the name of the process in which a solid changes directly into a gas?', answer: 'sublimation', explanation: 'Sublimation is the direct change from solid to gas without passing through the liquid state.' },
	{ id: 'c8', subject: 'Chemistry', type: 'boolean', prompt: 'A catalyst increases reaction rate without being permanently consumed.', answer: true, explanation: 'A catalyst provides an alternative reaction pathway and is regenerated by the end of the reaction.' },
	{ id: 'c9', subject: 'Chemistry', type: 'choice', prompt: 'Which particle has a negative electric charge?', choices: ['Proton', 'Neutron', 'Electron', 'Nucleus'], answer: 2, explanation: 'Electrons carry a negative charge; protons are positive and neutrons are neutral.' },
	{ id: 'c10', subject: 'Chemistry', type: 'short', prompt: 'What is the chemical symbol for sodium?', answer: 'na', explanation: 'Sodium’s symbol is Na, derived from its Latin name, natrium.' },
	{ id: 'c11', subject: 'Chemistry', type: 'choice', prompt: 'Which method is most suitable for separating an insoluble solid from a liquid?', choices: ['Filtration', 'Fractional distillation', 'Chromatography', 'Crystallisation'], answer: 0, explanation: 'Filtration traps the insoluble solid while the liquid passes through the filter.' },
	{ id: 'c12', subject: 'Chemistry', type: 'boolean', prompt: 'An isotope has the same number of protons as other atoms of the same element but a different number of neutrons.', answer: true, explanation: 'Isotopes share an atomic number but have different mass numbers because their neutron counts differ.' },
	{ id: 'c13', subject: 'Chemistry', type: 'short', prompt: 'What gas is released when a reactive metal reacts with a dilute acid?', answer: 'hydrogen', explanation: 'A typical metal-acid reaction produces a salt and hydrogen gas.' },
	{ id: 'c14', subject: 'Chemistry', type: 'choice', prompt: 'Which state of matter has a fixed volume but takes the shape of its container?', choices: ['Solid', 'Liquid', 'Gas', 'Plasma'], answer: 1, explanation: 'A liquid has a fixed volume, but its particles can move past one another so it takes the container’s shape.' },
	{ id: 'c15', subject: 'Chemistry', type: 'short', prompt: 'What is the name for a substance that changes colour to show whether a solution is acidic or alkaline?', answer: 'indicator', explanation: 'An acid-base indicator changes colour over a particular pH range.' },
	{ id: 'p6', subject: 'Physics', type: 'choice', prompt: 'Which instrument is used to measure electric current?', choices: ['Voltmeter', 'Ammeter', 'Thermometer', 'Barometer'], answer: 1, explanation: 'An ammeter measures current and is connected in series in a circuit.' },
	{ id: 'p7', subject: 'Physics', type: 'short', prompt: 'A 12 V potential difference drives a current of 3 A through a component. Find its resistance in ohms.', answer: '4', explanation: 'By Ohm’s law, resistance = voltage ÷ current = 12 ÷ 3 = 4 Ω.' },
	{ id: 'p8', subject: 'Physics', type: 'boolean', prompt: 'The image formed by a plane mirror is virtual and the same size as the object.', answer: true, explanation: 'A plane mirror forms a virtual, upright image with magnification of one.' },
	{ id: 'p9', subject: 'Physics', type: 'choice', prompt: 'Which form of energy is stored in a stretched spring?', choices: ['Chemical energy', 'Elastic potential energy', 'Nuclear energy', 'Sound energy'], answer: 1, explanation: 'Deforming an elastic object stores elastic potential energy.' },
	{ id: 'p10', subject: 'Physics', type: 'short', prompt: 'A 2 kg object is raised 5 m. Taking gravitational field strength as 10 N/kg, find its gain in gravitational potential energy in joules.', answer: '100', explanation: 'Gain in gravitational potential energy = mgh = 2 × 10 × 5 = 100 J.' },
	{ id: 'p11', subject: 'Physics', type: 'choice', prompt: 'What happens to the current in a simple series circuit if another identical lamp is added in series to a fixed-voltage supply?', choices: ['It increases', 'It decreases', 'It stays exactly the same', 'It becomes zero in every case'], answer: 1, explanation: 'Adding another lamp in series increases total resistance, so current decreases for a fixed supply voltage.' },
	{ id: 'p12', subject: 'Physics', type: 'boolean', prompt: 'The frequency of a wave is the number of complete oscillations passing a point each second.', answer: true, explanation: 'Frequency measures cycles per second and is measured in hertz.' },
	{ id: 'p13', subject: 'Physics', type: 'short', prompt: 'A wave travels at 300 m/s and has a frequency of 150 Hz. Find its wavelength in metres.', answer: '2', explanation: 'Wavelength = wave speed ÷ frequency = 300 ÷ 150 = 2 m.' },
	{ id: 'p14', subject: 'Physics', type: 'choice', prompt: 'Which heat transfer process can occur through a vacuum?', choices: ['Conduction', 'Convection', 'Radiation', 'Evaporation'], answer: 2, explanation: 'Radiation transfers energy by electromagnetic waves and does not require a material medium.' },
	{ id: 'p15', subject: 'Physics', type: 'short', prompt: 'What is the SI unit of power?', answer: 'watt', explanation: 'Power is the rate of energy transfer and its SI unit is the watt (W).' },
	{ id: 'h6', subject: 'History', type: 'choice', prompt: 'Which body is responsible for making laws in Kenya?', choices: ['The Judiciary', 'Parliament', 'The Cabinet Secretariat', 'County assemblies only'], answer: 1, explanation: 'At the national level, Parliament exercises legislative authority by making laws.' },
	{ id: 'h7', subject: 'History', type: 'short', prompt: 'What is the term for the movement of people from rural areas to towns?', answer: 'rural-urban migration', explanation: 'Rural-urban migration is the movement of people from the countryside to urban areas.' },
	{ id: 'h8', subject: 'History', type: 'boolean', prompt: 'The East African Community is a regional organisation that promotes cooperation among member states.', answer: true, explanation: 'The EAC works toward regional integration and cooperation in areas including trade and development.' },
	{ id: 'h9', subject: 'History', type: 'choice', prompt: 'Which document sets out the fundamental laws and structure of a state?', choices: ['A census report', 'A constitution', 'A trade invoice', 'A population map'], answer: 1, explanation: 'A constitution establishes a state’s governing framework, institutions, and fundamental rules.' },
	{ id: 'h10', subject: 'History', type: 'short', prompt: 'What is the study of past human events and societies called?', answer: 'history', explanation: 'History studies and interprets evidence about past human events and societies.' },
	{ id: 'h11', subject: 'History', type: 'choice', prompt: 'Which is a primary source for studying an event witnessed by its author?', choices: ['A later textbook summary', 'A diary written at the time', 'A modern fictional novel', 'An undated online comment'], answer: 1, explanation: 'A contemporary diary is a first-hand source created by someone close to the event.' },
	{ id: 'h12', subject: 'History', type: 'boolean', prompt: 'Archaeology can use material remains to investigate past societies.', answer: true, explanation: 'Archaeologists examine objects, structures, and other physical remains as evidence of past life.' },
	{ id: 'h13', subject: 'History', type: 'short', prompt: 'What term describes the system in which citizens choose representatives through voting?', answer: 'representative democracy', explanation: 'In a representative democracy, citizens elect representatives to make decisions on their behalf.' },
	{ id: 'h14', subject: 'History', type: 'choice', prompt: 'Which activity is most closely associated with pastoralism?', choices: ['Keeping livestock', 'Mining underground coal', 'Manufacturing electronics', 'Growing crops in a greenhouse only'], answer: 0, explanation: 'Pastoralism is a livelihood centred on keeping and managing livestock.' },
	{ id: 'h15', subject: 'History', type: 'short', prompt: 'What is the term for goods brought into a country from abroad?', answer: 'imports', explanation: 'Imports are goods or services brought into a country from another country.' },
	{ id: 'cre6', subject: 'C.R.E.', type: 'choice', prompt: 'In the Christian creation narrative, what did God create on the first day?', choices: ['The sun and moon', 'Light', 'Land animals', 'Human beings'], answer: 1, explanation: 'Genesis 1 describes light being created on the first day.' },
	{ id: 'cre7', subject: 'C.R.E.', type: 'short', prompt: 'What is the Christian term for showing compassion and forgiveness to someone in need?', answer: 'mercy', explanation: 'Mercy involves compassion and forgiveness toward someone who is vulnerable or has done wrong.' },
	{ id: 'cre8', subject: 'C.R.E.', type: 'boolean', prompt: 'In the parable of the lost sheep, the shepherd searches for the one sheep that is missing.', answer: true, explanation: 'The parable describes the shepherd leaving the ninety-nine to look for the lost sheep.' },
	{ id: 'cre9', subject: 'C.R.E.', type: 'choice', prompt: 'Which Christian practice involves communicating with God?', choices: ['Prayer', 'Pilgrimage only', 'Fasting only', 'Tithing'], answer: 0, explanation: 'Prayer is communication with God and may include praise, confession, thanksgiving, and requests.' },
	{ id: 'cre10', subject: 'C.R.E.', type: 'short', prompt: 'What is the Christian celebration of Jesus’ resurrection called?', answer: 'easter', explanation: 'Easter is the Christian celebration of Jesus’ resurrection.' },
	{ id: 'cre11', subject: 'C.R.E.', type: 'choice', prompt: 'Which quality is shown by keeping a promise even when it is difficult?', choices: ['Faithfulness', 'Greed', 'Impatience', 'Pride'], answer: 0, explanation: 'Faithfulness includes reliability and keeping commitments.' },
	{ id: 'cre12', subject: 'C.R.E.', type: 'boolean', prompt: 'The Ten Commandments are associated with Moses in the biblical account.', answer: true, explanation: 'The biblical narrative associates Moses with receiving the commandments at Mount Sinai.' },
	{ id: 'cre13', subject: 'C.R.E.', type: 'short', prompt: 'What is the term for giving thanks to God?', answer: 'thanksgiving', explanation: 'Thanksgiving is the expression of gratitude to God for blessings received.' },
	{ id: 'cre14', subject: 'C.R.E.', type: 'choice', prompt: 'Which action best demonstrates stewardship of the environment?', choices: ['Wasting clean water', 'Planting and caring for trees', 'Dumping rubbish in a river', 'Burning all household waste'], answer: 1, explanation: 'Caring for trees helps conserve the environment and reflects responsible stewardship.' },
	{ id: 'cre15', subject: 'C.R.E.', type: 'short', prompt: 'What is the name of the Christian season of preparation before Easter?', answer: 'lent', explanation: 'Lent is a period of reflection and preparation observed by many Christians before Easter.' },
	{ id: 'sw6', subject: 'Kiswahili', type: 'choice', prompt: 'Chagua wingi sahihi wa neno “jicho”.', choices: ['Majicho', 'Macho', 'Vijicho', 'Jichos'], answer: 1, explanation: 'Neno “jicho” liko katika ngeli ya LI-YA; wingi wake ni “macho”.' },
	{ id: 'sw7', subject: 'Kiswahili', type: 'short', prompt: 'Taja kinyume cha neno “refu”.', answer: 'fupi', explanation: '“Fupi” ni kinyume cha “refu”.' },
	{ id: 'sw8', subject: 'Kiswahili', type: 'choice', prompt: 'Katika sentensi “Mwanafunzi amesoma kitabu”, kitenzi ni kipi?', choices: ['Mwanafunzi', 'amesoma', 'kitabu', 'hakuna'], answer: 1, explanation: '“Amesoma” linaeleza tendo lililofanywa, kwa hiyo ni kitenzi.' },
	{ id: 'sw9', subject: 'Kiswahili', type: 'boolean', prompt: 'Nomino “maji” imo katika ngeli ya YA-YA.', answer: true, explanation: '“Maji” ni nomino ya ngeli ya YA-YA.' },
	{ id: 'sw10', subject: 'Kiswahili', type: 'short', prompt: 'Taja neno lenye maana sawa na “furaha”.', answer: 'shangwe', explanation: '“Shangwe” linaweza kutumika kama kisawe cha “furaha”.' },
	{ id: 'sw11', subject: 'Kiswahili', type: 'choice', prompt: 'Methali “Asiyesikia la mkuu huvunjika guu” hufundisha nini?', choices: ['Umuhimu wa kusikiliza ushauri', 'Umuhimu wa kusafiri', 'Faida ya kula mapema', 'Umuhimu wa kufanya kazi peke yako'], answer: 0, explanation: 'Methali hii huonya kuhusu madhara ya kupuuza ushauri wa wenye uzoefu.' },
	{ id: 'sw12', subject: 'Kiswahili', type: 'short', prompt: 'Weka katika wakati uliopita: “Watoto wanacheza.”', answer: 'watoto walicheza', explanation: 'Kiambishi “-na-” cha wakati uliopo hubadilishwa kuwa “-li-” kuonyesha wakati uliopita.' },
	{ id: 'sw13', subject: 'Kiswahili', type: 'boolean', prompt: 'Kivumishi hutoa maelezo zaidi kuhusu nomino.', answer: true, explanation: 'Kivumishi hueleza sifa, idadi, au hali ya nomino.' },
	{ id: 'sw14', subject: 'Kiswahili', type: 'choice', prompt: 'Chagua kiwakilishi katika sentensi “Yeye alifika mapema.”', choices: ['Yeye', 'alifika', 'mapema', 'hakuna'], answer: 0, explanation: '“Yeye” kinasimama badala ya jina la mtu, kwa hiyo ni kiwakilishi.' },
	{ id: 'sw15', subject: 'Kiswahili', type: 'short', prompt: 'Taja wingi wa nomino “mti”.', answer: 'miti', explanation: 'Nomino “mti” imo katika ngeli ya U-I; wingi wake ni “miti”.' }
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
const PAST_PAPERS = [
	...Array.from({ length: 14 }, (_, index) => 2013 - index).flatMap((year) => Array.from({ length: year >= 2010 && year !== 2012 ? 3 : 2 }, (_, index) => {
		const number = index + 1;
		const filename = year === 2010 && number === 3
			? 'KCSE-2010-Chemistry-P3.pdf'
			: year <= 2009
			? `KCSE-${year}-CHEMISTRY-PAPER-${number}-E.pdf`
			: year === 2013
				? `KCSE-2013-Chemistry-P${number}.pdf`
				: `KCSE-${year}-CHEMISTRY-P${number}.pdf`;
		return { subject: 'Chemistry', year, paper: `Paper ${number}`, number, file: `chemistry/${filename}` };
	})),
	{ subject: 'Chemistry', year: 2012, paper: 'Question collection', number: null, file: 'chemistry/KCSE-2012-CHEMISTRY-QUESTIONS.pdf' },
	{ subject: 'Chemistry', year: null, paper: 'Question collection', number: null, file: 'chemistry/KCSE-CHEMISTRY-QUESTIONS.pdf' }
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
const freshState = () => ({ name: '', plan: SUBJECTS.map((subject) => ({ subject: subject.name, active: true, sessions: 3, minutes: 30 })), attempts: [], studyDays: [], savedPapers: [], paperQuestions: [], syncUrl: '', consent: false });
function withPlanDefaults(savedState) {
	const merged = { ...freshState(), ...savedState };
	const planned = new Set(merged.plan.map((item) => item.subject));
	merged.plan.push(...freshState().plan.filter((item) => !planned.has(item.subject)));
	return merged;
}
let state = freshState();
let currentView = 'overview';
let selectedPastPaperFile = PAST_PAPERS[0].file;
let paperQuiz = null;
let extractedPaperDrafts = { file: '', questions: [], message: '', loading: false };
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
	return `<div class="page-heading"><div><p class="eyebrow">Your revision shelf</p><h1>Paper library.</h1><p class="subheading">KCSE paper outlines and prescribed 2026 language setbooks.</p></div><div class="library-tools"><input id="paper-search" type="search" placeholder="Find a subject, title, or year" aria-label="Search papers and setbooks"><a class="button secondary small" href="https://www.freekcsepastpapers.com/kcse-past-papers/" target="_blank" rel="noopener noreferrer">Browse archive ↗</a><button class="button small" data-action="import-paper">Add answer sheet</button><input id="paper-file" type="file" accept=".pdf,.jpg,.jpeg,.png,.webp" hidden></div></div><section><div class="section-title"><h2>Paper outlines</h2><span class="field-help">Past paper files are not included</span></div><div class="paper-grid" id="paper-grid">${paperCards}</div></section><section style="margin-top:30px"><div class="section-title"><h2>English and Kiswahili setbooks</h2><span class="field-help">KCSE class of 2026 · 2022–2026 cycle</span></div><div class="paper-grid">${setbookCards}</div></section>${sheets.length ? `<section style="margin-top:30px"><div class="section-title"><h2>Your answer sheets</h2><span class="field-help">Encrypted and stored on this device</span></div><div class="paper-grid">${sheetCards}</div></section>` : ''}<div class="notice">Setbook titles and paper outlines are study references; the app does not include copyrighted full-text books or official exam papers.</div>`;
}

function renderExtractedDrafts(file) {
	if (extractedPaperDrafts.file !== file) return '';
	if (extractedPaperDrafts.loading) return '<p class="field-help extract-status">Reading the PDF and finding numbered questions…</p>';
	if (extractedPaperDrafts.message) return `<p class="field-help extract-status">${escapeHTML(extractedPaperDrafts.message)}</p>`;
	if (!extractedPaperDrafts.questions.length) return '<p class="field-help extract-status">No numbered questions found. Add one manually below or check the PDF’s layout.</p>';
	return `<div class="extracted-drafts"><div class="section-title"><h3>${extractedPaperDrafts.questions.length} question drafts found</h3><span class="field-help">Review each draft and set its answer before saving</span></div>${extractedPaperDrafts.questions.map((question, index) => `<div class="extracted-draft"><div><span class="draft-meta">Question ${question.number} · PDF page ${question.page}${question.extraction === 'OCR' ? ' · OCR, verify text' : ''}${question.choices.length === 4 ? ' · four A–D options detected' : ''}</span><p>${escapeHTML(question.prompt.slice(0, 360))}${question.prompt.length > 360 ? '…' : ''}</p></div><button class="button secondary small" data-action="use-paper-draft" data-draft-index="${index}">Review draft</button></div>`).join('')}</div>`;
}

async function extractPaperQuestions(file) {
	if (!window.pdfjsLib) { showToast('PDF reader is unavailable. Reload the app and try again.'); return; }
	extractedPaperDrafts = { file, questions: [], message: '', loading: true };
	renderApp();
	let ocrWorker = null;
	try {
		pdfjsLib.GlobalWorkerOptions.workerSrc = 'vendor/pdf.worker.min.js';
		const pdf = await pdfjsLib.getDocument({ url: file, isEvalSupported: false }).promise;
		const blocks = [];
		let current = null;
		let lastQuestionNumber = 0;
		let ocrPageNumber = 0;
		for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
			const page = await pdf.getPage(pageNumber);
			const content = await page.getTextContent();
			const items = content.items.filter((item) => item.str.trim()).map((item) => ({ text: item.str.trim(), x: item.transform[4], y: item.transform[5] })).sort((a, b) => b.y - a.y || a.x - b.x);
			let lines = [];
			const usedOcr = items.reduce((sum, item) => sum + item.text.length, 0) < 80;
			if (!usedOcr) {
				for (const item of items) {
					const row = lines[lines.length - 1];
					if (row && Math.abs(row.y - item.y) < 3) row.parts.push(item.text);
					else lines.push({ y: item.y, parts: [item.text] });
				}
				lines = lines.map((row) => row.parts.join(' '));
			} else {
				if (!window.Tesseract) throw new Error('OCR reader unavailable');
				ocrPageNumber = pageNumber;
				if (!ocrWorker) ocrWorker = await Tesseract.createWorker('eng', 1, {
					workerPath: new URL('vendor/tesseract.worker.min.js', document.baseURI).href,
					corePath: new URL('vendor/tesseract-core/', document.baseURI).href,
					langPath: new URL('vendor/tessdata', document.baseURI).href,
					gzip: true,
					workerBlobURL: false,
					logger: (status) => {
						const progress = $('.extract-status');
						if (progress) progress.textContent = `Scanning page ${ocrPageNumber} of ${pdf.numPages} for question text… ${status.progress ? `${Math.round(status.progress * 100)}%` : ''}`;
					}
				});
				const viewport = page.getViewport({ scale: 1.7 });
				const canvas = document.createElement('canvas');
				canvas.width = Math.ceil(viewport.width);
				canvas.height = Math.ceil(viewport.height);
				await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
				const result = await ocrWorker.recognize(canvas);
				lines = result.data.text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
				canvas.width = 0;
				canvas.height = 0;
			}
			for (const line of lines) {
				const text = (typeof line === 'string' ? line : line.parts.join(' ')).replace(/(\d)\s+([.)])/g, '$1$2').replace(/\s+/g, ' ').trim();
				const match = text.match(/^(?:QUESTION\s+)?(\d{1,2})(?:\s*([.)])\s+|\s+)(.+)$/i);
				const questionNumber = match ? Number(match[1]) : 0;
				const looksLikeQuestion = match && (!usedOcr || /^[A-Z(]/.test(match[3]));
				if (looksLikeQuestion && questionNumber > lastQuestionNumber && questionNumber <= 40) {
					if (current) blocks.push(current);
					current = { number: questionNumber, page: pageNumber, extraction: usedOcr ? 'OCR' : 'PDF text', lines: [match[3]] };
					lastQuestionNumber = questionNumber;
				} else if (current && text && !/^\d{1,3}$/.test(text)) current.lines.push(text);
			}
		}
		if (current) blocks.push(current);
		const questions = blocks.map((block) => {
			let optionRun = [];
			let options = [];
			const optionPattern = /^\(?([A-D])\)?[.)]\s*(.+)$/i;
			for (const line of block.lines) {
				const match = line.match(optionPattern);
				if (!match) { optionRun = []; continue; }
				const letter = match[1].toUpperCase();
				const expected = String.fromCharCode(65 + optionRun.length);
				if (letter !== expected) optionRun = letter === 'A' ? [] : optionRun;
				if (letter === String.fromCharCode(65 + optionRun.length)) optionRun.push(match[2]);
				if (optionRun.length === 4) { options = optionRun; break; }
			}
			const promptLines = options.length === 4
				? block.lines.filter((line) => !optionPattern.test(line))
				: block.lines;
			return { number: block.number, page: block.page, extraction: block.extraction, prompt: promptLines.join('\n').trim(), choices: options };
		}).filter((question) => question.prompt.length > 5 && !/instructions to candidates|examiner'?s use only/i.test(question.prompt.slice(0, 500))).slice(0, 100);
		extractedPaperDrafts = { file, questions, message: '', loading: false };
		if (!questions.length) extractedPaperDrafts.message = 'No selectable question text found. Scanned image PDFs need OCR before they can be imported.';
	} catch {
		extractedPaperDrafts = { file, questions: [], message: 'Could not read this PDF. Open or download it to check the file, then try again.', loading: false };
	} finally {
		if (ocrWorker) await ocrWorker.terminate();
	}
	renderApp();
}

function usePaperQuestionDraft(index) {
	const draft = extractedPaperDrafts.questions[index];
	if (!draft) return;
	const typeSelect = $('#paper-question-type');
	$('#paper-question-prompt').value = draft.prompt;
	typeSelect.value = draft.choices.length === 4 ? 'choice' : 'short';
	typeSelect.dispatchEvent(new Event('change', { bubbles: true }));
	if (draft.choices.length === 4) draft.choices.forEach((choice, choiceIndex) => { $(`#paper-choice-${choiceIndex}`).value = choice; });
	$('#paper-correct-choice').value = '';
	$('#paper-correct-answer').value = '';
	$('#paper-question-explanation').value = '';
	$('.paper-authoring').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderPastPapers() {
	const selected = PAST_PAPERS.find((paper) => paper.file === selectedPastPaperFile) || PAST_PAPERS[0];
	selectedPastPaperFile = selected.file;
	const subjects = [...new Set(PAST_PAPERS.map((paper) => paper.subject))];
	const years = [...new Set(PAST_PAPERS.filter((paper) => paper.subject === selected.subject).map((paper) => paper.year))].sort((a, b) => (b ?? -Infinity) - (a ?? -Infinity));
	const papers = PAST_PAPERS.filter((paper) => paper.subject === selected.subject && paper.year === selected.year);
	const questions = (state.paperQuestions || []).filter((question) => question.file === selected.file);
	const paperTitle = `${selected.year || 'Undated'} ${selected.subject} ${selected.paper}`;
	return `<div class="page-heading"><div><p class="eyebrow">Work through original papers</p><h1>Past paper revision.</h1><p class="subheading">Choose a subject, year, and paper to read it here.</p></div></div>
		<div class="revision-filters"><label class="field">Subject<select id="revision-subject">${subjects.map((subject) => `<option value="${escapeHTML(subject)}" ${selected.subject === subject ? 'selected' : ''}>${escapeHTML(subject)}</option>`).join('')}</select></label><label class="field">Year<select id="revision-year">${years.map((year) => `<option value="${year ?? ''}" ${selected.year === year ? 'selected' : ''}>${year ?? 'Year not listed'}</option>`).join('')}</select></label><label class="field">Paper<select id="revision-paper">${papers.map((paper) => `<option value="${escapeHTML(paper.file)}" ${selected.file === paper.file ? 'selected' : ''}>${escapeHTML(paper.paper)}${paper.number ? ` · ${paper.number}` : ''}</option>`).join('')}</select></label></div>
		<div class="paper-viewer-heading"><div><h2>${escapeHTML(paperTitle)}</h2></div><div class="paper-viewer-actions"><a class="button secondary small" href="${escapeHTML(selected.file)}" target="_blank" rel="noopener noreferrer">Open PDF</a><a class="button small" href="${escapeHTML(selected.file)}" download>Download PDF</a></div></div>
		<iframe class="past-paper-frame" src="${escapeHTML(selected.file)}" title="${escapeHTML(paperTitle)}" loading="lazy"></iframe>
		${renderPaperQuiz(selected, questions)}
		<section class="surface paper-authoring"><div class="section-title"><div><h2>Build this paper’s quiz</h2><p class="field-help">Scan the selected PDF to draft questions. Review the extracted text and mark the correct answer before saving.</p></div><div class="paper-authoring-tools"><span class="paper-question-count">${questions.length} saved</span><button class="button secondary small" data-action="read-paper" data-file="${escapeHTML(selected.file)}" ${extractedPaperDrafts.loading ? 'disabled' : ''}>Scan this PDF</button></div></div>
			${renderExtractedDrafts(selected.file)}
			<form id="paper-question-form"><label class="field" for="paper-question-prompt">Question text<textarea id="paper-question-prompt" name="prompt" rows="3" required maxlength="10000" placeholder="Enter a question from the paper"></textarea></label>
				<div class="paper-question-fields"><label class="field" for="paper-question-type">Answer format<select id="paper-question-type" name="type"><option value="choice">Multiple choice</option><option value="short">Written answer</option></select></label></div>
				<div id="paper-choice-fields" class="paper-authoring-choices">${[0, 1, 2, 3].map((index) => `<label class="field" for="paper-choice-${index}">Choice ${String.fromCharCode(65 + index)}<input id="paper-choice-${index}" name="choice${index}" maxlength="240" required></label>`).join('')}<label class="field" for="paper-correct-choice">Correct choice<select id="paper-correct-choice" name="correctChoice" required><option value="" selected disabled>Select answer</option><option value="0">A</option><option value="1">B</option><option value="2">C</option><option value="3">D</option></select></label></div>
				<div id="paper-short-fields" class="paper-question-fields" hidden><label class="field" for="paper-correct-answer">Expected answer<input id="paper-correct-answer" name="shortAnswer" maxlength="500" placeholder="Answer to check against"></label></div>
				<label class="field" for="paper-question-explanation">Explanation <span class="field-help">Optional, shown after each answer</span><textarea id="paper-question-explanation" name="explanation" rows="2" maxlength="1000" placeholder="Why is this the correct answer?"></textarea></label>
				<button class="button small" type="submit">Save question</button>
			</form>
			${questions.length ? `<div class="paper-question-list"><h3>Saved for this paper</h3>${questions.map((question) => `<div class="paper-question-row"><div><strong>${escapeHTML(question.prompt)}</strong><span>${question.type === 'choice' ? 'Multiple choice' : 'Written answer'}</span></div><button class="text-button" data-action="remove-paper-question" data-question-id="${escapeHTML(question.id)}">Remove</button></div>`).join('')}</div>` : ''}
		</section>`;
}

function renderPaperQuiz(paper, questions) {
	if (!paperQuiz || paperQuiz.file !== paper.file) return `<section class="paper-quiz-launch"><div><p class="eyebrow">Active recall</p><h2>Practice this paper.</h2><p class="subheading">${questions.length ? `${questions.length} saved question${questions.length === 1 ? '' : 's'} ready` : 'Add questions below to build a quiz for this paper.'}</p></div><button class="button" data-action="begin-paper-quiz" data-file="${escapeHTML(paper.file)}" ${questions.length ? '' : 'disabled'}>Start quiz <span aria-hidden="true">→</span></button></section>`;
	if (paperQuiz.complete) {
		const score = paperQuiz.questions.reduce((total, question, index) => total + (isCorrect(question, paperQuiz.answers[index]) ? 1 : 0), 0);
		const missed = paperQuiz.questions.filter((question, index) => !isCorrect(question, paperQuiz.answers[index]));
		return `<section class="surface paper-quiz-session"><p class="eyebrow">Session complete</p><h2>${score === paperQuiz.questions.length ? 'Excellent recall.' : 'Review, then try again.'}</h2><p class="paper-quiz-score">${score} <span>/ ${paperQuiz.questions.length} correct</span></p><p class="subheading">${missed.length ? `${missed.length} question${missed.length === 1 ? '' : 's'} to revisit.` : 'You got every question right.'}</p><div class="quiz-actions"><button class="text-button" data-action="end-paper-quiz">Back to paper</button>${missed.length ? `<button class="button secondary" data-action="retry-missed-paper-quiz">Retry missed (${missed.length})</button>` : ''}<button class="button" data-action="begin-paper-quiz" data-file="${escapeHTML(paper.file)}">Practice again</button></div></section>`;
	}
	const question = paperQuiz.questions[paperQuiz.index];
	const answered = paperQuiz.answers[paperQuiz.index] !== undefined;
	const selected = paperQuiz.answers[paperQuiz.index];
	const correct = answered && isCorrect(question, selected);
	const response = question.type === 'choice'
		? `<div class="answer-list">${question.choices.map((choice, index) => `<button class="answer-option ${selected === index ? 'selected' : ''} ${answered && index === question.answer ? 'correct' : ''} ${answered && selected === index && !correct ? 'incorrect' : ''}" data-action="answer-paper-choice" data-answer="${index}" ${answered ? 'disabled' : ''}><span class="answer-letter">${String.fromCharCode(65 + index)}</span>${escapeHTML(choice)}</button>`).join('')}</div>`
		: `<form id="paper-short-answer-form"><label class="field" for="paper-short-answer">Your answer<input id="paper-short-answer" autocomplete="off" ${answered ? `value="${escapeHTML(String(selected))}" disabled` : ''} placeholder="Type your answer" required></label>${answered ? '' : '<button class="button small" type="submit">Check answer</button>'}</form>`;
	return `<section class="surface paper-quiz-session"><div class="question-count">QUESTION ${paperQuiz.index + 1} / ${paperQuiz.questions.length} · ${question.type === 'choice' ? 'MULTIPLE CHOICE' : 'WRITTEN ANSWER'}</div><div class="quiz-progress"><span style="width:${(paperQuiz.index + (answered ? 1 : 0)) / paperQuiz.questions.length * 100}%"></span></div><h2 class="question-text">${escapeHTML(question.prompt)}</h2>${response}${answered ? `<div class="answer-feedback ${correct ? '' : 'is-wrong'}"><strong>${correct ? 'That is right.' : `Not quite. The answer is ${escapeHTML(formatAnswer(question))}.`}</strong>${question.explanation ? ` ${escapeHTML(question.explanation)}` : ''}</div>` : ''}<div class="quiz-actions"><button class="text-button" data-action="end-paper-quiz">Exit session</button>${answered ? `<button class="button" data-action="next-paper-question">${paperQuiz.index === paperQuiz.questions.length - 1 ? 'See results' : 'Next question'} <span aria-hidden="true">→</span></button>` : ''}</div></section>`;
}

function beginPaperQuiz(file, questionSet) {
	const questions = questionSet || (state.paperQuestions || []).filter((question) => question.file === file);
	if (!questions.length) { showToast('Add questions to this paper before starting a quiz.'); return; }
	paperQuiz = { file, questions: [...questions].sort(() => Math.random() - .5), index: 0, answers: {}, complete: false };
	selectedPastPaperFile = file;
	currentView = 'past-papers';
	renderApp();
}

function answerPaperQuestion(answer) {
	if (!paperQuiz || paperQuiz.answers[paperQuiz.index] !== undefined) return;
	paperQuiz.answers[paperQuiz.index] = answer;
	renderApp();
}

async function completePaperQuiz() {
	const score = paperQuiz.questions.reduce((total, question, index) => total + (isCorrect(question, paperQuiz.answers[index]) ? 1 : 0), 0);
	const paper = PAST_PAPERS.find((item) => item.file === paperQuiz.file);
	state.attempts.push({ id: crypto.randomUUID(), subject: paper?.subject || 'Chemistry', paper: `${paper?.year || 'Undated'} ${paper?.paper || 'Paper'}`, score, total: paperQuiz.questions.length, date: todayKey() });
	if (!state.studyDays.includes(todayKey())) state.studyDays.push(todayKey());
	paperQuiz.complete = true;
	await persist();
	renderApp();
}

async function savePaperQuestion(form) {
	const data = new FormData(form);
	const type = String(data.get('type'));
	const question = { id: crypto.randomUUID(), file: selectedPastPaperFile, prompt: String(data.get('prompt')).trim(), type, explanation: String(data.get('explanation')).trim() };
	if (type === 'choice') {
		question.choices = [0, 1, 2, 3].map((index) => String(data.get(`choice${index}`)).trim());
		if (question.choices.some((choice) => !choice)) { showToast('Add all four answer choices.'); return; }
		question.answer = Number(data.get('correctChoice'));
	} else {
		question.answer = String(data.get('shortAnswer')).trim();
		if (!question.answer) { showToast('Enter the expected answer.'); return; }
	}
	state.paperQuestions = [...(state.paperQuestions || []), question];
	await persist();
	renderApp();
	showToast('Question saved to this paper.');
}

function renderSettings() {
	return `<div class="page-heading"><div><p class="eyebrow">Your data, your choice</p><h1>Settings.</h1><p class="subheading">Manage your encrypted vault and optional remote sync.</p></div></div><div class="settings-grid"><section class="surface"><div class="settings-section"><h2>Remote sync</h2><p class="subheading">Sync an encrypted copy to an endpoint you control. The endpoint must support GET (download) and PUT (upload) of the encrypted text payload.</p><div class="field" style="margin-top:17px"><label for="sync-url">HTTPS sync endpoint</label><input id="sync-url" type="url" value="${escapeHTML(state.syncUrl)}" placeholder="https://your-server.example/study-sync"><span class="field-help">Use an HTTPS endpoint that you trust. Your passphrase is never sent; only the AES-GCM encrypted vault is transmitted.</span></div><label class="consent-row"><input id="sync-consent" type="checkbox" ${state.consent ? 'checked' : ''}>I understand encrypted vault data will be sent to this endpoint when I sync.</label><div style="display:flex;gap:9px;margin-top:14px"><button class="button small" data-action="save-sync">Save endpoint</button><button class="button secondary small" data-action="sync-now">Sync now</button></div><p class="sync-status" id="sync-status">Sync is optional. No server is configured by this app.</p></div><div class="settings-section"><h2>Encrypted backup</h2><p class="subheading">Export a portable, AES-GCM encrypted backup or restore one on this device.</p><div style="display:flex;gap:9px;margin-top:15px"><button class="button secondary small" data-action="export-backup">Export backup</button><button class="button secondary small" data-action="import-backup">Import backup</button><input id="backup-file" type="file" accept=".fieldnotes,.txt" hidden></div></div></section><aside class="surface"><p class="eyebrow">Privacy notes</p><h2>Private by default.</h2><p class="subheading" style="line-height:1.7">Your study data is encrypted on this device using AES-256-GCM. The encryption key is derived from your passphrase with PBKDF2. Your passphrase is not stored or transmitted.</p><div class="notice">Keep your passphrase safe. There is no password reset service, and losing it means your encrypted data cannot be recovered.</div><p class="field-help" style="margin-top:14px">Quiz activity and study plans stay local unless you explicitly configure sync. No analytics or leaderboard service is connected.</p></aside></div>`;
}

function renderApp() {
	$('#app').innerHTML = `<header class="topbar"><a class="brand" href="#overview" aria-label="Fieldnotes home"><span class="brand-mark">f.</span><span>fieldnotes<span class="brand-dot">.</span></span></a><nav class="main-nav" aria-label="Main navigation">${[['overview', 'Overview'], ['quiz', 'Quizzes'], ['plan', 'Study plan'], ['library', 'Library'], ['past-papers', 'Past papers']].map(([key, title]) => `<button class="nav-link ${currentView === key ? 'is-active' : ''}" data-view="${key}">${title}</button>`).join('')}</nav><div class="topbar-tools"><span class="connection-status"><span class="status-dot"></span><span id="connection-label">Saved on this device</span></span><button class="avatar-button" id="settings-button" aria-label="Open settings">${escapeHTML(state.name.slice(0, 1).toUpperCase())}</button></div></header><main id="view" class="page-content">${currentView === 'overview' ? renderOverview() : currentView === 'quiz' ? renderQuiz() : currentView === 'plan' ? renderPlan() : currentView === 'library' ? renderLibrary() : currentView === 'past-papers' ? renderPastPapers() : renderSettings()}</main><footer class="app-footer"><span>KCSE revision, at your pace.</span><span>Made for steady progress.</span></footer><div id="toast" class="toast" role="status" aria-live="polite"></div>`;
	updateConnection();
}


function beginQuiz(subject = $('#quiz-subject')?.value || 'Mathematics', count = Number($('#quiz-count')?.value || 5), paper = '') {
	const subjectPool = subject === 'Mixed' ? [...QUESTION_BANK] : QUESTION_BANK.filter((question) => question.subject === subject);
	const paperPool = paper ? subjectPool.filter((question) => question.paper === paper) : subjectPool;
	const pool = paperPool.length ? paperPool : subjectPool;
	const shuffled = [...pool].sort(() => Math.random() - .5);
	const questions = shuffled.slice(0, Math.min(count, shuffled.length));
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
		if (action === 'begin-paper-quiz') beginPaperQuiz(actionButton.dataset.file);
		if (action === 'read-paper') await extractPaperQuestions(actionButton.dataset.file);
		if (action === 'use-paper-draft') usePaperQuestionDraft(Number(actionButton.dataset.draftIndex));
		if (action === 'end-paper-quiz') { paperQuiz = null; renderApp(); }
		if (action === 'answer-paper-choice') answerPaperQuestion(Number(actionButton.dataset.answer));
		if (action === 'next-paper-question') {
			if (paperQuiz.index === paperQuiz.questions.length - 1) await completePaperQuiz();
			else { paperQuiz.index += 1; renderApp(); }
		}
		if (action === 'retry-missed-paper-quiz') {
			const missed = paperQuiz.questions.filter((question, index) => !isCorrect(question, paperQuiz.answers[index]));
			beginPaperQuiz(paperQuiz.file, missed);
		}
		if (action === 'remove-paper-question') {
			state.paperQuestions = (state.paperQuestions || []).filter((question) => question.id !== actionButton.dataset.questionId);
			await persist(); renderApp();
		}
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
		if (event.target.id === 'paper-question-form') { event.preventDefault(); await savePaperQuestion(event.target); }
		if (event.target.id === 'paper-short-answer-form') { event.preventDefault(); answerPaperQuestion($('#paper-short-answer').value); }
	});
	document.addEventListener('change', async (event) => {
		if (event.target.id === 'paper-question-type') {
			const multipleChoice = event.target.value === 'choice';
			$('#paper-choice-fields').hidden = !multipleChoice;
			$('#paper-short-fields').hidden = multipleChoice;
			document.querySelectorAll('#paper-choice-fields input').forEach((input) => { input.required = multipleChoice; });
			$('#paper-correct-choice').required = multipleChoice;
			$('#paper-correct-answer').required = !multipleChoice;
		}
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
		if (event.target.id === 'revision-subject' || event.target.id === 'revision-year') {
			const subject = event.target.id === 'revision-subject' ? event.target.value : $('#revision-subject').value;
			const year = event.target.id === 'revision-year' ? event.target.value : $('#revision-year').value;
			const paper = PAST_PAPERS.find((item) => item.subject === subject && String(item.year ?? '') === year);
			if (paper) { selectedPastPaperFile = paper.file; renderApp(); }
		}
		if (event.target.id === 'revision-paper') { selectedPastPaperFile = event.target.value; renderApp(); }
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
