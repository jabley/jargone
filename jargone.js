/*
 * Jargone
 * 
 * Highlight jargon on the page. Jargon, begone.
 * Roo Reynolds | rooreynolds.com | @rooreynolds
 * 
 * [NB: jargone.js is built using build.sh. Expect changes here to be overwritten]
 */

javascript:(function () { 

    // list of words to avoid based on https://www.gov.uk/designprinciples/styleguide#item_4_1_3
    var words = [
            ['a depressive',"a person with / someone who has depression - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['a diabetic',"a person with / someone who has diabetes - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['able-bodied',"non-disabled - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['acid test',"from time to time one can even, if one jeers loudly enough, send some worn-out and useless phrase … into the dustbin where it belongs. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['across-the-piece',"(Local Government Association banned words, 2009)"],
            ['actioned'],
            ['actively contemplating',"Journalese, Keith Waterhouse, On Newspaper Style"],
            ['advancing',"www.gov.uk/design-principles/style-guide"],
            ['advocate',"(Local Government Association banned words, 2009)"],
            ['against the grain',"Cliches, Keith Waterhouse, On Newspaper Style"],
            ['agenda', "Unless it's for a meeting - www.gov.uk/design-principles/style-guide"],
            ['ameliorate', "Bad writers, and especially scientific, political and sociological writers, are nearly always haunted by the notion that Latin or Greek words are grander than Saxon ones. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['an epileptic',"a person with / someone who has epilepsy - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['approximately', "Consider 'about' - www.gov.uk/design-principles/style-guide"],
            ['area based',"(Local Government Association banned words, 2009)"],
            ['area focused',"(Local Government Association banned words, 2009)"],
            ['assailant',"attacker, not assailant - Jargon, Keith Waterhouse, On Newspaper Style"],
            ['assist', "Consider 'help' - www.gov.uk/design-principles/style-guide"],
            ['assisted', "Consider 'helped' - www.gov.uk/design-principles/style-guide"],
            ['assisting', "Consider 'helping' - www.gov.uk/design-principles/style-guide"],
            ['autonomous',"(Local Government Association banned words, 2009)"],
            ['axe to grind',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['back to square one',"Cliches, Keith Waterhouse, On Newspaper Style"],
            ['baseline',"(Local Government Association banned words, 2009)"],
            ['beacon',"(Local Government Association banned words, 2007)"],
            ['beggars belief',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['beggars description',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['being done', "Use the active voice. 'We are doing this'"],
            ['benchmarking',"(Local Government Association banned words, 2009)"],
            ['best practice',"(Local Government Association banned words, 2007)"],
            ['best-practice',"(Local Government Association banned words, 2007)"],
            ['bestial atrocities',"When one watches some tired hack on the platform mechanically repeating the familiar phrases … one often has a curious feeling that one is not watching a live human being but some kind of dummy… - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['bitter row',"Tabloidese, Keith Waterhouse, On Newspaper Style"],
            ['bitter row',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['blind drunk',"Common phrases that may associate impairments with negative things should be avoided, for example 'deaf to our pleas' or 'blind drunk' - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['bloodstained tyranny',"When one watches some tired hack on the platform mechanically repeating the familiar phrases … one often has a curious feeling that one is not watching a live human being but some kind of dummy… - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['blue sky thinking',"(Local Government Association banned words, 2009)"],
            ['bonanza',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['bottom-up',"(Local Government Association banned words, 2007)"],
            ['brought to a satisfactory conclusion',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['burning issue',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['by dint of',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['by examination',"Why not 'by examining'?"],
            ['CAAs',"(Local Government Association banned words, 2007)"],
            ['can do culture',"(Local Government Association banned words, 2007)"],
            ['can-do culture',"(Local Government Association banned words, 2007)"],
            ['capabilities',"(Local Government Association banned words, 2009)"],
            ['capacity',"(Local Government Association banned words, 2007)"],
            ['cascading',"(Local Government Association banned words, 2007)"],
            ['categorical',"Words like … categorical … are used to dress up simple statements and give an air of scientific impartiality to biased judgments. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['cautiously welcome...',"(Local Government Association banned words, 2007)"],
            ['challenge',"(Local Government Association banned words, 2009)"],
            ['champion',"(Local Government Association banned words, 2007)"],
            ['citizen empowerment',"(Local Government Association banned words, 2007)"],
            ['clampdown',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['clash',"disagreement? - Tabloidese, Keith Waterhouse, On Newspaper Style"],
            ['client',"(Local Government Association banned words, 2009)"],
            ['cohesive communities',"(Local Government Association banned words, 2009)"],
            ['cohesiveness',"(Local Government Association banned words, 2009)"],
            ['cold comfort',"Cliches, Keith Waterhouse, On Newspaper Style"],
            ['collaborate', "Use 'working with' - www.gov.uk/design-principles/style-guide"],
            ['collaborated', "Use 'worked with' - www.gov.uk/design-principles/style-guide"],
            ['collaborating', "Use 'working with' - www.gov.uk/design-principles/style-guide"],
            ['collaboration',"(Local Government Association banned words, 2009)"],
            ['combating',"www.gov.uk/design-principles/style-guide"],
            ['coming home to roost',"Cliches, Keith Waterhouse, On Newspaper Style"],
            ['coming home to roost',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['commissioning',"(Local Government Association banned words, 2009)"],
            ['commit',"We need to be more specific – we’re either doing something or we’re not - www.gov.uk/design-principles/style-guide"],
            ['committing',"We need to be more specific – we’re either doing something or we’re not - www.gov.uk/design-principles/style-guide"],
            ['community engagement',"(Local Government Association banned words, 2007)"],
            ['compact',"(Local Government Association banned words, 2009)"],
            ['conditionality',"(Local Government Association banned words, 2007)"],
            ['confined to a wheelchair',"wheelchair user - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['consensual',"(Local Government Association banned words, 2007)"],
            ['contestability',"(Local Government Association banned words, 2007)"],
            ['contextual',"(Local Government Association banned words, 2009)"],
            ['core developments',"(Local Government Association banned words, 2009)"],
            ['core message',"(Local Government Association banned words, 2007)"],
            ['core principles',"(Local Government Association banned words, 2009)"],
            ['core value',"(Local Government Association banned words, 2007)"],
            ['coterminosity',"(Local Government Association banned words, 2007)"],
            ['coterminous',"(Local Government Association banned words, 2007)"],
            ['countering',"www.gov.uk/design-principles/style-guide"],
            ['crackdown',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['cripple',"disabled person - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['cross-cutting',"(Local Government Association banned words, 2007)"],
            ['cross-fertilisation',"(Local Government Association banned words, 2009)"],
            ['crucial new',"Journalese, Keith Waterhouse, On Newspaper Style"],
            ['curb growing menaces',"Journalese, Keith Waterhouse, On Newspaper Style"],
            ['customer',"(Local Government Association banned words, 2007)"],
            ['deaf and dumb',"deaf, user of British sign language, person with a hearing impairment - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['deaf mute',"deaf, user of British sign language, person with a hearing impairment - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['deaf to our pleas',"Common phrases that may associate impairments with negative things should be avoided, for example 'deaf to our pleas' or 'blind drunk' - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['death toll',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['deliver', "Pizzas, post and services are delivered – not abstract concepts like 'improvements' or 'priorities' - www.gov.uk/design-principles/style-guide"],
            ['democratic legitimacy',"(Local Government Association banned words, 2007)"],
            ['democratic mandate',"(Local Government Association banned words, 2007)"],
            ['deploy',"unless it's military or software - www.gov.uk/design-principles/style-guide"],
            ['deserved serious consideration',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['deserves serious consideration',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['deserving serious consideration',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['deus ex machine', "Bad writers, and especially scientific, political and sociological writers, are nearly always haunted by the notion that Latin or Greek words are grander than Saxon ones. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['development to be expected',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['dialogue', "We speak to people - www.gov.uk/design-principles/style-guide"],
            ['direction of travel',"(Local Government Association banned words, 2009)"],
            ['discourse', "Discussion"],
            ['disincentivise',"www.gov.uk/design-principles/style-guide"],
            ['disincentivised',"www.gov.uk/design-principles/style-guide"],
            ['disincentivising',"www.gov.uk/design-principles/style-guide"],
            ['distorts spending priorities',"(Local Government Association banned words, 2007)"],
            ['do well to bear in mind',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['double devolution',"(Local Government Association banned words, 2009)"],
            ['downstream',"(Local Government Association banned words, 2009)"],
            ['drive forward'],
            ['drive out', "Unless it is cattle - www.gov.uk/design-principles/style-guide"],
            ['drive',"You can only drive vehicles; not schemes or people - www.gov.uk/design-principles/style-guide"],
            ['driven forward'],
            ['driven out', "Unless it is cattle - www.gov.uk/design-principles/style-guide"],
            ['driving forward'],
            ['driving out', "Unless it is cattle - www.gov.uk/design-principles/style-guide"],
            ['dropped a clanger',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['dwarf',"someone with restricted growth - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['early win',"(Local Government Association banned words, 2007)"],
            ['edge-fit',"(Local Government Association banned words, 2009)"],
            ['embedded',"(Local Government Association banned words, 2009)"],
            ['empower',"www.gov.uk/design-principles/style-guide"],
            ['empowerment',"(Local Government Association banned words, 2007)"],
            ['enabler',"(Local Government Association banned words, 2009)"],
            ['end user',"Jargon, Keith Waterhouse, On Newspaper Style"],
            ['end-user',"Jargon, Keith Waterhouse, On Newspaper Style"],
            ['engagement',"(Local Government Association banned words, 2007)"],
            ['engaging users',"(Local Government Association banned words, 2007)"],
            ['enhance',"(Local Government Association banned words, 2007)"],
            ['epic', "Adjectives like .. epic … are used to dignify the sordid processes of international politics. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['epoch-making', "Adjectives like epoch-making … are used to dignify the sordid processes of international politics. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['evidence base',"(Local Government Association banned words, 2007)"],
            ['exemplar',"(Local Government Association banned words, 2009)"],
            ['exhibit',"Words like … exhibit … are used to dress up simple statements and give an air of scientific impartiality to biased judgments. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['expected in the near future',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['expedite', "Bad writers, and especially scientific, political and sociological writers, are nearly always haunted by the notion that Latin or Greek words are grander than Saxon ones. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['explore every avenue',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['external challenge',"(Local Government Association banned words, 2007)"],
            ['facilitate', "Instead, say something specific about how you are helping - www.gov.uk/design-principles/style-guide"],
            ['facilitating', "Instead, say something specific about how you are helping - www.gov.uk/design-principles/style-guide"],
            ['facing broadsides',"Journalese, Keith Waterhouse, On Newspaper Style"],
            ['faq', "Instead, improve the original communication piece so that questions are asked *in*frequently. See www.gov.uk/design-principles/style-guide#faqs"],
            ['fast track',"(Local Government Association banned words, 2007)"],
            ['fast-track',"(Local Government Association banned words, 2007)"],
            ['feathers really flew',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['flex',"(Local Government Association banned words, 2009)"],
            ['flexibilities and freedoms',"(Local Government Association banned words, 2009)"],
            ['focusing', "Unless in the photographic sense - www.gov.uk/design-principles/style-guide"],
            ['foster', "Unless it is children - www.gov.uk/design-principles/style-guide"],
            ['fostering', "Unless it is children - www.gov.uk/design-principles/style-guide"],
            ['framework',"(Local Government Association banned words, 2007)"],
            ['free peoples of the world',"When one watches some tired hack on the platform mechanically repeating the familiar phrases … one often has a curious feeling that one is not watching a live human being but some kind of dummy… - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['front door'],
            ['fulcrum',"(Local Government Association banned words, 2007)"],
            ['functionality',"(Local Government Association banned words, 2009)"],
            ['fundamental restructuring',"Journalese, Keith Waterhouse, On Newspaper Style"],
            ['funding streams',"(Local Government Association banned words, 2009)"],
            ['game plan',"Jargon, Keith Waterhouse, On Newspaper Style"],
            ['game-plan',"Jargon, Keith Waterhouse, On Newspaper Style"],
            ['gateway review',"(Local Government Association banned words, 2009)"],
            ['gave rise to',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['give rise to',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['given rise to',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['given the go ahead',"Journalese, Keith Waterhouse, On Newspaper Style"],
            ['given the go-ahead',"Journalese, Keith Waterhouse, On Newspaper Style"],
            ['go forward'],
            ['going forward', "Use 'in future' - www.gov.uk/design-principles/style-guide"],
            ['good practice',"(Local Government Association banned words, 2007)"],
            ['good-practice',"(Local Government Association banned words, 2007)"],
            ['governance',"(Local Government Association banned words, 2007)"],
            ['greatly to be desired',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['grist to the mill',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['having regard to',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['head on',"Tabloidese, Keith Waterhouse, On Newspaper Style"],
            ['head-on',"Tabloidese, Keith Waterhouse, On Newspaper Style"],
            ['holistic',"(Local Government Association banned words, 2007)"],
            ['horizon scanning',"(Local Government Association banned words, 2009)"],
            ['hotbed',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['hurdle',"difficulty? - Tabloidese, Keith Waterhouse, On Newspaper Style"],
            ['impact', "Don't use it as a verb - www.gov.uk/design-principles/style-guide"],
            ['improvement levers',"(Local Government Association banned words, 2007)"],
            ['in order to',"Superfluous – don’t use it - www.gov.uk/design-principles/style-guide"],
            ['in the interests of',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['incentivise',"(Local Government Association banned words, 2007)"],
            ['incentivise',"www.gov.uk/design-principles/style-guide"],
            ['incentivised',"www.gov.uk/design-principles/style-guide"],
            ['incentivising',"(Local Government Association banned words, 2007)"],
            ['incentivising',"www.gov.uk/design-principles/style-guide"],
            ['income streams',"(Local Government Association banned words, 2009)"],
            ['indicators',"(Local Government Association banned words, 2009)"],
            ['initiate',"www.gov.uk/design-principles/style-guide"],
            ['initiating',"www.gov.uk/design-principles/style-guide"],
            ['initiative',"(Local Government Association banned words, 2007)"],
            ['innovative capacity',"(Local Government Association banned words, 2009)"],
            ['inspectorates',"(Local Government Association banned words, 2009)"],
            ['interdepartmental',"(Local Government Association banned words, 2009)"],
            ['interface',"(Local Government Association banned words, 2009)"],
            ['iron heel',"When one watches some tired hack on the platform mechanically repeating the familiar phrases … one often has a curious feeling that one is not watching a live human being but some kind of dummy… - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['iron resolution',"a metaphor which is technically “dead” (e.g., iron resolution) has in effect reverted to being an ordinary word and can generally be used without loss of vividness. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['iteration',"(Local Government Association banned words, 2009)"],
            ['jackboot',"from time to time one can even, if one jeers loudly enough, send some worn-out and useless phrase … into the dustbin where it belongs. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['joined up',"(Local Government Association banned words, 2007)"],
            ['joined-up',"(Local Government Association banned words, 2007)"],
            ['joint working',"(Local Government Association banned words, 2007)"],
            ['key', "Unless it unlocks something. A subject/thing isn't 'key' – it's probably 'important' - www.gov.uk/design-principles/style-guide"],
            ['LAAs',"(Local Government Association banned words, 2007)"],
            ['land', "Don't use 'land' as a verb unless you are talking about aircraft - www.gov.uk/design-principles/style-guide"],
            ['landed', "Don't use 'land' as a verb unless you are talking about aircraft - www.gov.uk/design-principles/style-guide"],
            ['landing', "Don't use 'land' as a verb unless you are talking about aircraft - www.gov.uk/design-principles/style-guide"],
            ['lay the foundations',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['learnings', "Try 'lessons' - www.gov.uk/design-principles/style-guide"],
            ['leave much to be desired',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['leave no stone unturned',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['leaves much to be desired',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['leaving no stone unturned',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['leaving no stone unturned',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['left no stone unturned',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['level playing field',"(Local Government Association banned words, 2007)"],
            ['leverage', "Unless in the financial or mechanical sense - www.gov.uk/design-principles/style-guide"],
            ['leveraging', "Unless in the financial sense - www.gov.uk/design-principles/style-guide"],
            ['liaise',"www.gov.uk/design-principles/style-guide"],
            ['liaising',"www.gov.uk/design-principles/style-guide"],
            ['limped into port',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['living in a dream world',"Cliches, Keith Waterhouse, On Newspaper Style"],
            ['localities',"(Local Government Association banned words, 2007)"],
            ['low hanging fruit'],
            ['lowlights',"(Local Government Association banned words, 2009)"],
            ['MAAs',"(Local Government Association banned words, 2007)"],
            ['mainstreaming',"(Local Government Association banned words, 2009)"],
            ['make itself felt',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['management capacity',"(Local Government Association banned words, 2009)"],
            ['meaningful consultation',"(Local Government Association banned words, 2007)"],
            ['meaningful dialogue',"(Local Government Association banned words, 2007)"],
            ['meaningful dialogue',"(Local Government Association banned words, 2009)"],
            ['mechanisms',"(Local Government Association banned words, 2009)"],
            ['melting pot',"from time to time one can even, if one jeers loudly enough, send some worn-out and useless phrase … into the dustbin where it belongs. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['mental patient',"person with a mental health condition - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['mentally defective',"with a learning disability (singular) with learning disabilities (plural) - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['mentally handicapped',"with a learning disability (singular) with learning disabilities (plural) - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['menu of options',"(Local Government Association banned words, 2007)"],
            ['midget',"someone with restricted growth - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['mobilise'],
            ['moving forward'],
            ['moving toward'],
            ['multi-agency',"(Local Government Association banned words, 2007)"],
            ['multidisciplinary',"(Local Government Association banned words, 2007)"],
            ['municipalities',"(Local Government Association banned words, 2009)"],
            ['neither confirm nor deny',"Jargon, Keith Waterhouse, On Newspaper Style"],
            ['network model',"(Local Government Association banned words, 2009)"],
            ['never-never land',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['new controls',"Journalese, Keith Waterhouse, On Newspaper Style"],
            ['no wrong door'],
            ['normalising',"(Local Government Association banned words, 2009)"],
            ['not un',"banal statements are given an appearance of profundity by means of the not un- formation. … One can cure oneself of the not un-formation by memorising this sentence: A not unblock dog was chasing a not unsmall rabbit across a not ungreen field. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['on the hypothesis that',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['one front door'],
            ['one stop shop'],
            ['one-stop shop'],
            ['order of the day',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['outcomes',"(Local Government Association banned words, 2007)"],
            ['output',"(Local Government Association banned words, 2007)"],
            ['outrage',"Tabloidese, Keith Waterhouse, On Newspaper Style"],
            ['outsourced',"(Local Government Association banned words, 2009)"],
            ['overarching'],
            ['overarching',"(Local Government Association banned words, 2007)"],
            ['paradigm',"(Local Government Association banned words, 2009)"],
            ['parameter',"(Local Government Association banned words, 2009)"],
            ['participatory',"(Local Government Association banned words, 2007)"],
            ['partnership working',"(Local Government Association banned words, 2009)"],
            ['partnerships',"(Local Government Association banned words, 2007)"],
            ['pathfinder',"(Local Government Association banned words, 2007)"],
            ['peer challenge',"(Local Government Association banned words, 2007)"],
            ['performance network',"(Local Government Association banned words, 2007)"],
            ['place shaping',"(Local Government Association banned words, 2007)"],
            ['play a leading part',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['play into the hands',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['played a leading part',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['played into the hands',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['pledge',"We need to be more specific – we’re either doing something or we’re not - www.gov.uk/design-principles/style-guide"],
            ['pledging',"We need to be more specific – we’re either doing something or we’re not - www.gov.uk/design-principles/style-guide"],
            ['poised',"about to? - Tabloidese, Keith Waterhouse, On Newspaper Style"],
            ['pooled budgets',"(Local Government Association banned words, 2009)"],
            ['pooled resources',"(Local Government Association banned words, 2009)"],
            ['pooled risk',"(Local Government Association banned words, 2009)"],
            ['populace',"(Local Government Association banned words, 2009)"],
            ['potentialities',"(Local Government Association banned words, 2009)"],
            ['practitioners',"(Local Government Association banned words, 2009)"],
            ['predictors of beaconicity',"(Local Government Association banned words, 2007)"],
            ['preventative services',"(Local Government Association banned words, 2007)"],
            ['prioritization',"(Local Government Association banned words, 2009)"],
            ['priority',"(Local Government Association banned words, 2007)"],
            ['proactive',"(Local Government Association banned words, 2009)"],
            ['process driven',"(Local Government Association banned words, 2007)"],
            ['procure',"(Local Government Association banned words, 2009)"],
            ['progress',"As a verb – what are you actually doing? - www.gov.uk/design-principles/style-guide"],
            ['progressed',"As a verb – what are you actually doing? - www.gov.uk/design-principles/style-guide"],
            ['promote', "Unless you are talking about an ad campaign or similar - www.gov.uk/design-principles/style-guide"],
            ['promoted', "Unless you are talking about an ad campaign or similar - www.gov.uk/design-principles/style-guide"],
            ['promoting', "Unless you are talking about an ad campaign or similar - www.gov.uk/design-principles/style-guide"],
            ['promulgate',"(Local Government Association banned words, 2009)"],
            ['proportionality',"(Local Government Association banned words, 2009)"],
            ['protocol',"(Local Government Association banned words, 2009)"],
            ['provider',"(Local Government Association banned words, 2009)"],
            ['purchase', "Consider 'buy' - www.gov.uk/design-principles/style-guide"],
            ['quantum',"(Local Government Association banned words, 2009)"],
            ['quick hit',"(Local Government Association banned words, 2007)"],
            ['quick win',"(Local Government Association banned words, 2007)"],
            ['radical change',"Journalese, Keith Waterhouse, On Newspaper Style"],
            ['radical transformation',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['rationalisation',"(Local Government Association banned words, 2009)"],
            ['reach epidemic proportions',"Journalese, Keith Waterhouse, On Newspaper Style"],
            ['reach out to', "Consider 'contact'"],
            ['reached out to', "Consider 'contacted'"],
            ['rebaselining',"(Local Government Association banned words, 2009)"],
            ['reconfigured',"(Local Government Association banned words, 2009)"],
            ['render inoperative',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['rendered inoperative',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['resource allocation',"(Local Government Association banned words, 2007)"],
            ['retarded',"with a learning disability (singular) with learning disabilities (plural) - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['revenue streams',"(Local Government Association banned words, 2007)"],
            ['ride roughshod over',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['ride roughshod',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['riding roughshod',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['ring fence',"www.gov.uk/design-principles/style-guide"],
            ['ring fenced',"www.gov.uk/design-principles/style-guide"],
            ['ring fencing',"www.gov.uk/design-principles/style-guide"],
            ['ring the changes',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['ringed the changes',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['ringfence',"www.gov.uk/design-principles/style-guide"],
            ['ringfenced',"www.gov.uk/design-principles/style-guide"],
            ['ringing the changes',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['risk based',"(Local Government Association banned words, 2007)"],
            ['robust','www.gov.uk/design-principles/style-guide'],
            ['scaled-back',"(Local Government Association banned words, 2007)"],
            ['scoping',"(Local Government Association banned words, 2007)"],
            ['sector wise',"(Local Government Association banned words, 2009)"],
            ['seedbed',"(Local Government Association banned words, 2007)"],
            ['self-aggrandizement',"(Local Government Association banned words, 2009)"],
            ['serve no good purpose',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['service users',"(Local Government Association banned words, 2007)"],
            ['set ablaze',"Tabloidese, Keith Waterhouse, On Newspaper Style"],
            ['set to',"Tabloidese, Keith Waterhouse, On Newspaper Style"],
            ['shake up',"reform? - Tabloidese, Keith Waterhouse, On Newspaper Style"],
            ['shake-up',"reform? - Tabloidese, Keith Waterhouse, On Newspaper Style"],
            ['shared priority',"(Local Government Association banned words, 2007)"],
            ['shared priority',"(Local Government Association banned words, 2009)"],
            ['shell developments',"(Local Government Association banned words, 2009)"],
            ['signpost',"(Local Government Association banned words, 2007)"],
            ['single conversations',"(Local Government Association banned words, 2009)"],
            ['single point of contact',"(Local Government Association banned words, 2007)"],
            ['situational',"(Local Government Association banned words, 2009)"],
            ['slim down',"www.gov.uk/design-principles/style-guide"],
            ['slimmed down',"Processes don’t diet – we are probably removing x amount of paperwork, etc - www.gov.uk/design-principles/style-guide"],
            ['slimming down',"Processes don’t diet – we are probably removing x amount of paperwork, etc - www.gov.uk/design-principles/style-guide"],
            ['slippage',"(Local Government Association banned words, 2007)"],
            ['social contracts',"(Local Government Association banned words, 2007)"],
            ['social exclusion',"(Local Government Association banned words, 2009)"],
            ['spark off',"Journalese, Keith Waterhouse, On Newspaper Style"],
            ['spastic',"person with cerebral palsy - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['spatial',"(Local Government Association banned words, 2009)"],
            ['speculation was rife',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['spelled out',"Journalese, Keith Waterhouse, On Newspaper Style"],
            ['stakeholder',"(Local Government Association banned words, 2007)"],
            ['stand shoulder to shoulder',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['standing shoulder to shoulder',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['status quo', "Bad writers, and especially scientific, political and sociological writers, are nearly always haunted by the notion that Latin or Greek words are grander than Saxon ones. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['step change',"(Local Government Association banned words, 2007)"],
            ['stood shoulder to shoulder',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['strategic',"(Local Government Association banned words, 2007)"],
            ['streamline',"www.gov.uk/design-principles/style-guide"],
            ['streamlined',"(Local Government Association banned words, 2007)"],
            ['streamlined',"www.gov.uk/design-principles/style-guide"],
            ['streamlining',"www.gov.uk/design-principles/style-guide"],
            ['strengthened', "Unless it is strengthening bridges or other structures - www.gov.uk/design-principles/style-guide"],
            ['strengthening', "Unless it is strengthening bridges or other structures - www.gov.uk/design-principles/style-guide"],
            ['sub-regional',"(Local Government Association banned words, 2009)"],
            ['subnormal',"with a learning disability (singular) with learning disabilities (plural) - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['subsidiarity',"(Local Government Association banned words, 2009)"],
            ['subsidiary',"(Local Government Association banned words, 2007)"],
            ['such as', "Consider 'like' - www.gov.uk/design-principles/style-guide"],
            ['sustainable',"(Local Government Association banned words, 2007)"],
            ['swan song',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['sweet smell of success',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['symposium',"(Local Government Association banned words, 2007)"],
            ['synergies',"(Local Government Association banned words, 2007)"],
            ['synergy'],
            ['systematics',"(Local Government Association banned words, 2009)"],
            ['tackle', "Unless it is rugby, football, some other sport - www.gov.uk/design-principles/style-guide"],
            ['tackled', "Unless it is rugby, football, some other sport - www.gov.uk/design-principles/style-guide"],
            ['tackling', "Unless it is rugby, football, some other sport - www.gov.uk/design-principles/style-guide"],
            ['takes the biscuit',"Cliches, Keith Waterhouse, On Newspaper Style"],
            ['tasked'],
            ['taxonomy',"(Local Government Association banned words, 2009)"],
            ['tested for soundness',"(Local Government Association banned words, 2007)"],
            ['the blind',"people with visual impairments; blind people; blind and partially sighted people - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['the disabled',"disabled (people) - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['the disabled',"Use 'disabled people' not 'the disabled' as the collective term - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['the fact that',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['the handicapped',"disabled (people) - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['thematic',"(Local Government Association banned words, 2009)"],
            ['thinking outside of the box',"(Local Government Association banned words, 2009)"],
            ['third sector',"(Local Government Association banned words, 2007)"],
            ['toe the line',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['toolkit',"(Local Government Association banned words, 2009)"],
            ['top down',"(Local Government Association banned words, 2007)"],
            ['top-down',"(Local Government Association banned words, 2007)"],
            ['tow the line',"Some metaphors now current have been twisted out of their original meaning without those who use them even being aware of the fact. For example, 'toe the line' is sometimes written 'tow the line'. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['tragedy struck',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['trajectory',"(Local Government Association banned words, 2009)"],
            ['tranche',"(Local Government Association banned words, 2009)"],
            ['transactional',"(Local Government Association banned words, 2009)"],
            ['transform', "What are you actually doing to change it? - www.gov.uk/design-principles/style-guide"],
            ['transformational',"(Local Government Association banned words, 2007)"],
            ['transformed', "What actualled happened to change it? - www.gov.uk/design-principles/style-guide"],
            ['transforming', "What are you actually doing to change it? - www.gov.uk/design-principles/style-guide"],
            ['transparency',"(Local Government Association banned words, 2007)"],
            ['triumphant', "Adjectives like .. triumphant … are used to dignify the sordid processes of international politics. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['troubled waters',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['unforgettable', "Adjectives like .. unforgettable … are used to dignify the sordid processes of international politics. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['unprecedented move',"Journalese, Keith Waterhouse, On Newspaper Style"],
            ['upstream',"(Local Government Association banned words, 2009)"],
            ['upward trend',"(Local Government Association banned words, 2009)"],
            ['user friendly',"Jargon, Keith Waterhouse, On Newspaper Style"],
            ['utilise', "Use - www.gov.uk/design-principles/style-guide"],
            ['utilised', "Used - www.gov.uk/design-principles/style-guide"],
            ['utilising', "Using - www.gov.uk/design-principles/style-guide"],
            ['utilize',"Words like … utilize … are used to dress up simple statements and give an air of scientific impartiality to biased judgments. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['value-added',"(Local Government Association banned words, 2007)"],
            ['vision',"(Local Government Association banned words, 2007)"],
            ['visionary',"(Local Government Association banned words, 2007)"],
            ['waiting game',"Cliches, Keith Waterhouse, On Newspaper Style"],
            ['webinar'],
            ['wellbeing',"(Local Government Association banned words, 2009)"],
            ['wheelchair-bound',"wheelchair user - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['with respect to',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['worklessness',"(Local Government Association banned words, 2009)"],
            ['writing is on the wall',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['writing on the wall',"Trade cliches, Keith Waterhouse, On Newspaper Style"],
            ['you may be able to',"Do not let caveats dictate unwieldy grammar – eg say 'You can' rather than 'You may be able to' - www.gov.uk/design-principles/style-guide - odi.dwp.gov.uk/inclusive-communications/representation/language.php"]
	],
	wordsLen = words.length,
	idx;

    function addEvent(elem, eventType, handler) {
        if (elem.addEventListener) {
            elem.addEventListener (eventType, handler, false);
        } else if (elem.attachEvent) {
            handler = function (e) {
                var target = (typeof e.target === 'undefined') ? e.srcElement : e.target;

                handler.call(target, { 'target' : target });
            };
            elem.attachEvent ('on' + eventType, handler);
        } else {
            return false;
        }
    };	

	var popup = {
		add : function (element, notes, idx) {
			var popup;

			popup = document.createElement("div");
			popup.id = "jargonepopup-" + (idx + 1);
			popup.className = "jargonepopup";
			document.body.appendChild(popup);
			popup.innerHTML = notes;
			popup.style.left = element.getBoundingClientRect().left + 'px';
			popup.style.top = element.getBoundingClientRect().top + 20 + 'px';
			popup.style.visibility = 'visible';
			element.setAttribute('aria-describedby', popup.id);
			this.current.idx = (idx + 1);
			this.current.element = element;
		},
		remove : function () {
			var popup = document.getElementById("jargonepopup-" + this.current.idx);

			if (popup) {
				document.body.removeChild(popup);
				this.current.element.removeAttribute('aria-describedby');
				this.current.idx = null;
				this.current.element = null;
			}
		},
		current : {
			idx : null,
			element : null
		}
	};

	var popupEvt = (function () {
		var openIdx = null,
			focusedWord = null;

		return (function (e) {
			var element = e.target,
				term;

			if (!element.className || !element.className.match(/jargonehighlight/)) { return; }

			if ((openIdx !== null) || (e.type === 'focusout')) {
				popup.remove();
				focusedElement = null;
			} else {
				term = element.firstChild.nodeValue.toLowerCase();
				for (idx = 0; idx < wordsLen; idx++) {
						if (term.match(new RegExp(words[idx][0])) && words[idx][1]) {
						// clicks give focus so use it for capturing both events
						// focus is retained by elements when scrolling clears their popup so use clicks as backup
						if (e.type === 'click') {
							if ((focusedWord === element) && (popup.current.element === null)) {
								popup.add(element, words[idx][1], idx);
							}
						} else { // focusin
							focusedWord = element;
							popup.add(element, words[idx][1], idx);
						}
					}
				}
			}

			if (event.stopPropagation) {
				event.stopPropagation();
			} else {
				event.cancelBubble = true;
			}
		});
	}());

    // From http://james.padolsey.com/javascript/find-and-replace-text-with-javascript/
    function findAndReplace(searchText, replacement, searchNode) {
        if (!searchText || typeof replacement === 'undefined') {
            // Throw error here if you want...
            return;
        }
        var regex = typeof searchText === 'string' ?
                    new RegExp(searchText, 'g') : searchText,
            childNodes = (searchNode || document.body).childNodes,
            cnLength = childNodes.length,
            excludes = 'html,head,style,title,link,meta,script,object,iframe';
        while (cnLength--) {
            var currentNode = childNodes[cnLength];
            if (currentNode.nodeType === 1 &&
                (excludes + ',').indexOf(currentNode.nodeName.toLowerCase() + ',') === -1) {
                arguments.callee(searchText, replacement, currentNode);
            }
            if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
                continue;
            }
            var parent = currentNode.parentNode,
                frag = (function(){
                    var html = currentNode.data.replace(regex, replacement),
                        wrap = document.createElement('div'),
                        frag = document.createDocumentFragment();
                    wrap.innerHTML = html;
                    while (wrap.firstChild) {
                        frag.appendChild(wrap.firstChild);
                    }
                    return frag;
                })();
            parent.insertBefore(frag, currentNode);
            parent.removeChild(currentNode);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".jargonehighlight { background-color: #FFFF88 !important; color: black; } .jargonehasnotes { cursor: help; border-bottom:1px dashed !important; } .jargonepopup { position: fixed; z-index: 1000 !important; visibility: hidden; background-color: #FFFFCC; color: black; border: solid silver 1px; margin: 5px; padding: 6px;} ";
    document.getElementsByTagName("head")[0].appendChild(css);

	for (idx = 0; idx < wordsLen; idx++) { // for each word
		words[idx][0] = words[idx][0].replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
		var pattern = '\\b' + words[idx][0];
		if (pattern.slice(-6) == '\\.\\.\\.') { // don't include end word boundary check if word ended with '...'
			pattern = pattern.slice(0, -6);
		    words[idx][0] = words[idx][0].slice(0, -6);
		} else {
        	if (pattern.slice(-1) != '.') {
            	pattern = pattern + '\\b';
        	}
        }
        var regex = new RegExp('(' + pattern + ')', 'ig');
    
		if (words[idx].length > 0 && words[idx][1] != undefined) {
          findAndReplace( regex, '<span class="jargonehighlight jargonehasnotes" tabindex="0">$1<\/span>');
        } else { // only use jargonehasnotes class if the entry has associated notes
          findAndReplace( regex, '<span class="jargonehighlight" tabindex="0">$1<\/span>');
        }
	}
	addEvent(document, 'focusin', popupEvt);
	addEvent(document, 'focusout', popupEvt);
	addEvent(document, 'click', popupEvt);
	addEvent(document, 'scroll', function () { popup.remove(); });
})();
