/* Indian Constitution — Preamble + Parts I to IVA (Articles 1–51A) */
window.CONSTITUTION_PREAMBLE =
  "WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a " +
  "SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens: " +
  "JUSTICE, social, economic and political; " +
  "LIBERTY of thought, expression, belief, faith and worship; " +
  "EQUALITY of status and of opportunity; and to promote among them all " +
  "FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation; " +
  "IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, " +
  "ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.";

window.CONSTITUTION_PARTS = (window.CONSTITUTION_PARTS || []).concat([

  {
    id: "part-1",
    name: "Part I",
    title: "The Union and its Territory",
    range: "Articles 1–4",
    note: "Part I defines India as a 'Union of States' — the territory is not the result of an agreement among states and states have no right to secede.",
    articles: [
      { n: "1", t: "Name and territory of the Union", d: "India, that is Bharat, shall be a Union of States. The territory comprises state territories, union territories and any territory acquired. The word 'Union' was chosen to signal indestructibility and indissolubility of the federation.", tags: ["key"] },
      { n: "2", t: "Admission or establishment of new States", d: "Parliament may by law admit new States into the Union or establish new States on such terms as it thinks fit. Used for admission of States that were outside British India (e.g., Sikkim in 1975)." },
      { n: "2A", t: "Sikkim (as an associate State) — omitted", d: "Inserted by the 35th Amendment (1974) to make Sikkim an associate State, and omitted by the 36th Amendment (1975) when Sikkim became a full State of the Union.", tags: ["repealed"] },
      { n: "3", t: "Formation of new States and alteration of areas, boundaries or names of existing States", d: "Parliament may reorganise States — increase, diminish, alter boundaries or rename them. A Bill requires the President's recommendation and reference to the affected State legislature, whose views are not binding.", tags: ["key"] },
      { n: "4", t: "Laws made under Articles 2 and 3 to amend the First and Fourth Schedules", d: "Such reorganisation laws may amend the First and Fourth Schedules and are not deemed a constitutional amendment under Article 368 — hence subject to ordinary legislative majorities." }
    ]
  },

  {
    id: "part-2",
    name: "Part II",
    title: "Citizenship",
    range: "Articles 5–11",
    note: "The Constitution provides only transitional citizenship at commencement; Parliament has comprehensive power to regulate citizenship (Citizenship Act, 1955).",
    articles: [
      { n: "5", t: "Citizenship at the commencement of the Constitution", d: "A person domiciled in India at commencement was a citizen if born in India, or either parent born in India, or ordinarily resident in India for five years before commencement." },
      { n: "6", t: "Rights of citizenship of certain persons who have migrated to India from Pakistan", d: "Granted citizenship to migrants from Pakistan who came before 19 July 1948 (if resident since migration), and to those who came later upon registration after residence of prescribed period." },
      { n: "7", t: "Rights of citizenship of certain migrants to Pakistan", d: "Persons who migrated to Pakistan after 1 March 1947 ceased to be citizens, but those who returned under a permit for resettlement could regain citizenship by registration." },
      { n: "8", t: "Rights of citizenship of certain persons of Indian origin residing outside India", d: "Persons of Indian origin residing abroad could acquire citizenship by registration with the diplomatic or consular representative of India in the country of residence." },
      { n: "9", t: "Persons voluntarily acquiring citizenship of a foreign State not to be citizens", d: "Any person who voluntarily acquired the citizenship of a foreign State ceased to be an Indian citizen — codifying single citizenship and rejection of dual nationality." },
      { n: "10", t: "Continuance of the rights of citizenship", d: "Every person who is or is deemed to be a citizen under Part II continues to be a citizen, subject to laws made by Parliament." },
      { n: "11", t: "Parliament to regulate the right of citizenship by law", d: "Parliament may make any provision on acquisition, renunciation, termination and deprivation of citizenship — the source of the Citizenship Act, 1955 and later amendments." }
    ]
  },

  {
    id: "part-3",
    name: "Part III",
    title: "Fundamental Rights",
    range: "Articles 12–35",
    note: "Fundamental Rights are justiciable and enforceable against the State through Article 32 (Supreme Court) and Article 226 (High Courts). Described by Dr. Ambedkar as the 'heart and soul' of the Constitution (Article 32).",
    articles: [
      { n: "12", t: "Definition of 'State'", d: "For Part III, 'the State' includes the Union and State Governments, Parliament and State Legislatures, all local authorities, and 'other authorities' within India — a phrase courts have interpreted expansively to cover statutory bodies and State instrumentalities.", tags: ["fr"] },
      { n: "13", t: "Laws inconsistent with or in derogation of the fundamental rights", d: "Declares that any law (pre- or post-Constitution) inconsistent with fundamental rights is void. Foundation for judicial review, the doctrine of eclipse, severability and the rule against waiver.", tags: ["key", "fr"] },
      { n: "14", t: "Equality before law", d: "The State shall not deny to any person equality before the law or the equal protection of the laws. Prohibits arbitrariness and class legislation, while permitting reasonable classification. Cornerstone of rule of law.", tags: ["key", "fr"] },
      { n: "15", t: "Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth", d: "Forbids discrimination generally and in access to shops, wells, roads etc. Clauses (4)–(6) permit special provisions for backward classes, SCs/STs, and (via the 103rd Amendment) for economically weaker sections.", tags: ["key", "fr"] },
      { n: "16", t: "Equality of opportunity in matters of public employment", d: "Guarantees equality of opportunity in public employment; clauses (4), (4A) and (4B) enable reservation for backward classes and SCs/STs, including in promotions, with consequential seniority.", tags: ["key", "fr"] },
      { n: "17", t: "Abolition of Untouchability", d: "Untouchability is abolished and its practice in any form is forbidden; enforcement of any disability arising out of it is an offence punishable by law (Protection of Civil Rights Act, 1955).", tags: ["fr"] },
      { n: "18", t: "Abolition of titles", d: "Prohibits the State from conferring titles, except military and academic distinctions. Citizens cannot accept titles from foreign States. National awards cannot be used as prefixes or suffixes (per Balaji Raghavan).", tags: ["fr"] },
      { n: "19", t: "Protection of certain rights regarding freedom of speech, etc.", d: "Guarantees six freedoms: speech and expression; peaceful assembly; association; free movement; residence; and profession, occupation, trade or business — each subject to reasonable restrictions set out in clauses (2) to (6).", tags: ["key", "fr"] },
      { n: "20", t: "Protection in respect of conviction for offences", d: "Protects against ex post facto criminal laws (no conviction for an act that was not an offence when done, no heavier retrospective penalty), double jeopardy, and compulsion to be a witness against oneself.", tags: ["fr"] },
      { n: "21", t: "Protection of life and personal liberty", d: "No person shall be deprived of life or personal liberty except according to procedure established by law. Since Maneka Gandhi (1978), 'procedure' must be fair, just and reasonable. The source of unenumerated rights — privacy, dignity, livelihood, clean environment, health and more.", tags: ["key", "fr"] },
      { n: "21A", t: "Right to education", d: "Inserted by the 86th Amendment (2002): the State shall provide free and compulsory education to all children of the age of six to fourteen years in the manner determined by law. Given effect by the RTE Act, 2009.", tags: ["key", "fr"] },
      { n: "22", t: "Protection against arrest and detention in certain cases", d: "A person arrested must be informed of the grounds, allowed to consult a lawyer and produced before a magistrate within 24 hours. Clause (4)–(7) lay safeguards — including an Advisory Board for detention beyond three months — for preventive detention.", tags: ["fr"] },
      { n: "23", t: "Prohibition of traffic in human beings and forced labour", d: "Traffic in human beings, begar and other similar forms of forced labour are prohibited and punishable. The State may impose compulsory service for public purposes such as conscription.", tags: ["fr"] },
      { n: "24", t: "Prohibition of employment of children in factories, etc.", d: "No child below the age of fourteen years shall be employed in any factory or mine or engaged in other hazardous employment.", tags: ["fr"] },
      { n: "25", t: "Freedom of conscience and free profession, practice and propagation of religion", d: "All persons have freedom of conscience and the right to freely profess, practise and propagate religion, subject to public order, morality and health, and to other provisions of Part III.", tags: ["fr"] },
      { n: "26", t: "Freedom to manage religious affairs", d: "Religious denominations may establish and maintain institutions, manage their own affairs in matters of religion, and own, acquire and administer property — subject to public order, morality and health.", tags: ["fr"] },
      { n: "27", t: "Freedom as to payment of taxes for promotion of any particular religion", d: "No person is compelled to pay taxes for the promotion or maintenance of any particular religion or religious denomination." },
      { n: "28", t: "Freedom as to attendance at religious instruction or religious worship in certain educational institutions", d: "No religious instruction in wholly State-funded institutions; in aided or recognised institutions, no student may be compelled to attend religious instruction or worship without consent." },
      { n: "29", t: "Protection of interests of minorities", d: "Any section of citizens with a distinct language, script or culture may conserve it; no citizen may be denied admission to State-aided educational institutions on grounds of religion, race, caste or language.", tags: ["fr"] },
      { n: "30", t: "Right of minorities to establish and administer educational institutions", d: "Religious and linguistic minorities have the right to establish and administer educational institutions of their choice; the State cannot discriminate against them in granting aid. Central to the T.M.A. Pai (2002) line of cases.", tags: ["key", "fr"] },
      { n: "31", t: "Compulsory acquisition of property — repealed", d: "Originally a fundamental right to property. Repealed by the 44th Amendment (1978); property is now a legal (not fundamental) right under Article 300A.", tags: ["repealed"] },
      { n: "31A", t: "Saving of laws providing for acquisition of estates, etc.", d: "Inserted by the 1st Amendment (1951): laws for acquisition of estates, abolition of zamindari, etc., are protected from challenge under Articles 14 and 19 — a key plank of land reform.", tags: ["fr"] },
      { n: "31B", t: "Validation of certain Acts and Regulations", d: "Laws placed in the Ninth Schedule are immune from challenge on the ground of violation of fundamental rights — subject, since I.R. Coelho (2007), to the basic structure test for post-1973 laws.", tags: ["key", "fr"] },
      { n: "31C", t: "Saving of laws giving effect to certain directive principles", d: "Laws implementing Articles 39(b) and (c) cannot be challenged as violating Articles 14 and 19. Enlarged by the 42nd Amendment, partially struck down in Minerva Mills.", tags: ["fr"] },
      { n: "32", t: "Remedies for enforcement of rights conferred by this Part", d: "Guarantees the right to move the Supreme Court for enforcement of fundamental rights; the Court may issue writs of habeas corpus, mandamus, prohibition, quo warranto and certiorari. Called the 'heart and soul' of the Constitution by Dr. Ambedkar.", tags: ["key", "fr"] },
      { n: "33", t: "Power of Parliament to modify the rights conferred by this Part in their application to Forces, etc.", d: "Parliament may restrict or abrogate the fundamental rights of members of the armed forces, police, intelligence and analogous services to ensure proper discharge of duties." },
      { n: "34", t: "Restriction on rights conferred by this Part while martial law is in force in any area", d: "Parliament may indemnify acts done to restore order while martial law is in force in any area." },
      { n: "35", t: "Legislation to give effect to the provisions of this Part", d: "Where Part III empowers Parliament to make laws or prescribe punishments, only Parliament — not State legislatures — may legislate on those matters." }
    ]
  },

  {
    id: "part-4",
    name: "Part IV",
    title: "Directive Principles of State Policy",
    range: "Articles 36–51",
    note: "Borrowed from the Irish Constitution, the DPSPs are non-justiciable guidelines for governance aimed at establishing a welfare State. Where conflict arises, courts have harmonised them with Fundamental Rights (see Minerva Mills, Kesavananda Bharati).",
    articles: [
      { n: "36", t: "Definition", d: "'State' in Part IV has the same meaning as in Part III (Article 12).", tags: ["dpsp"] },
      { n: "37", t: "Application of the principles contained in this Part", d: "The DPSPs are not enforceable by any court but are fundamental in the governance of the country; the State must apply them in making laws.", tags: ["dpsp"] },
      { n: "38", t: "State to secure a social order for the promotion of welfare of the people", d: "The State shall strive for a social order informed by justice — social, economic and political — and minimise inequalities of income, status, facilities and opportunities.", tags: ["dpsp"] },
      { n: "39", t: "Certain principles of policy to be followed by the State", d: "Directs adequate means of livelihood; equitable distribution of material resources; prevention of concentration of wealth; equal pay for equal work; protection of children and workers' health.", tags: ["dpsp"] },
      { n: "39A", t: "Equal justice and free legal aid", d: "Inserted by the 42nd Amendment (1976): the State shall secure equal justice and provide free legal aid to the poor.", tags: ["dpsp"] },
      { n: "40", t: "Organisation of village panchayats", d: "The State shall organise village panchayats and endow them with powers to function as units of self-government — foundational to the 73rd Amendment.", tags: ["dpsp"] },
      { n: "41", t: "Right to work, to education and to public assistance in certain cases", d: "Within the limits of its economic capacity, the State shall secure the right to work, education, and public assistance in unemployment, old age, sickness and disablement.", tags: ["dpsp"] },
      { n: "42", t: "Provision for just and humane conditions of work and maternity relief", d: "The State shall make provision for just and humane conditions of work and for maternity relief.", tags: ["dpsp"] },
      { n: "43", t: "Living wage, etc., for workers", d: "The State shall endeavour to secure a living wage, conditions of work ensuring a decent standard of life, and promote cottage industries.", tags: ["dpsp"] },
      { n: "43A", t: "Participation of workers in management of industries", d: "Inserted by the 42nd Amendment (1976): the State shall take steps for workers' participation in the management of industries.", tags: ["dpsp"] },
      { n: "43B", t: "Promotion of co-operative societies", d: "Inserted by the 97th Amendment (2011): the State shall promote voluntary formation and democratic, autonomous functioning of co-operative societies.", tags: ["dpsp"] },
      { n: "44", t: "Uniform civil code for the citizens", d: "The State shall endeavour to secure a uniform civil code throughout the territory of India — a perennial subject of constitutional and political debate.", tags: ["key", "dpsp"] },
      { n: "45", t: "Provision for early childhood care and education to children below the age of six years", d: "Recast by the 86th Amendment (2002) after education for 6–14 year olds became a fundamental right (Article 21A).", tags: ["dpsp"] },
      { n: "46", t: "Promotion of educational and economic interests of Scheduled Castes, Scheduled Tribes and other weaker sections", d: "The State shall promote the educational and economic interests of SCs, STs and weaker sections and protect them from social injustice and exploitation.", tags: ["dpsp"] },
      { n: "47", t: "Duty of the State to raise the level of nutrition and the standard of living and to improve public health", d: "Includes the duty to prohibit intoxicating drinks and drugs injurious to health — a key plank of prohibition policy.", tags: ["dpsp"] },
      { n: "48", t: "Organisation of agriculture and animal husbandry", d: "The State shall organise agriculture and animal husbandry on modern and scientific lines, including preserving and improving breeds and prohibiting cow slaughter.", tags: ["dpsp"] },
      { n: "48A", t: "Protection and improvement of environment and safeguarding of forests and wild life", d: "Inserted by the 42nd Amendment (1976): the State shall protect and improve the environment. Basis for environmental jurisprudence (MC Mehta, Vellore Citizens cases).", tags: ["key", "dpsp"] },
      { n: "49", t: "Protection of monuments and places and objects of national importance", d: "The State shall protect every monument, place or object of artistic or historic interest declared to be of national importance." },
      { n: "50", t: "Separation of judiciary from executive", d: "The State shall take steps to separate the judiciary from the executive in the public services of the State.", tags: ["dpsp"] },
      { n: "51", t: "Promotion of international peace and security", d: "The State shall endeavour to promote international peace and security, maintain just and honourable relations between nations, foster respect for international law and treaty obligations, and encourage settlement of international disputes by arbitration.", tags: ["dpsp"] }
    ]
  },

  {
    id: "part-4a",
    name: "Part IVA",
    title: "Fundamental Duties",
    range: "Article 51A",
    note: "Added on the recommendation of the Swaran Singh Committee by the 42nd Amendment (1976). There are currently eleven duties; the eleventh was added by the 86th Amendment (2002). Like DPSPs, they are non-justiciable.",
    articles: [
      { n: "51A", t: "Fundamental duties", d: "Calls upon every citizen to respect the Constitution, the national flag and anthem; cherish the ideals of the freedom struggle; uphold sovereignty and integrity; defend the country; promote harmony and brotherhood; protect heritage, the environment and public property; develop scientific temper and spirit of inquiry; safeguard public property and abjure violence; and provide education to children between six and fourteen years (added 2002).", tags: ["key", "duty"] }
    ]
  }

]);
