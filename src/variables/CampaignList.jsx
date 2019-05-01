const Campaigns = [
  {
    id: 0,
    name: "Night of the Zealot",
    code: "notz",
    color_code: "warning",
    icon: "icon-elder_sign",
    campaign_variables: {
      active: false,
      campaignRef: 0,
      current_section: 0,
      current_scenario: 0,
      current_interlude: 0,
      current_state: "",
      number_of_players: 1,
      participating_investigators: [],
      participating_players: [],
      difficulty: 0,
      chaos_bag: [],
      campaign_path: [{
          "section_type": "setup",
          "section_color": "primary",
          "section_key": "SETUP",
          "title": "Campaign Setup"
        },
        {
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S1",
          "title": "Part I: The Gathering"
        },
        {
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S2",
          "title": "Part II: The Midnight Masks"
        },
        {
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S3",
          "title": "Part III: The Devourer Below"
        },
        {
          "section_type": "finish",
          "section_color": "info",
          "section_key": "FINISH",
          "title": "Campaign Finish"
        }
      ],
      campaign_log: [],
      ghoul_priest_alive: false,
      house_burned_down: false,
      cultists_interrogated: [],
      cultists_escaped: [],
      past_midnight: false
    },
    introduction_title: "The Ghouls Hunger",
    introduction: "<em>Friday, September 18, 1925. Arkham, Massachusetts. It is the end of a long and abnormally hot summer. The first hints of autumn beckon, but a heavy heat persists, relentless. A silent, unspoken anger grips the town. Tempers are short, and in the last week alone there have been numerous reports of townspeople coming to heated, violent blows with one another over simple misunderstandings.<br></br>And now, a call from James Hankerson.<br></br>He claims to have found a dismembered body in his barn. Blaming the weather would be too easy. There is something wrong with this town, and not a whole lot this old soothsayer can do to stop the slide. My auguries indicate a small group of investigators will soon take note of these strange happenings and set forth to make things right. I’ll be watching their progress... But I won’t be holding my breath.</em>",
    "setup": {
      "setup_start_text": "To set up the Night of the Zealot campaign, perform the following steps in order:",
      "setup_steps": [{
          "number": 1,
          "text": "Choose number of players"
        },
        {
          "number": 2,
          "text": "Assemble investigator decks"
        },
        {
          "number": 3,
          "text": "Choose difficulty level"
        },
        {
          "number": 4,
          "text": "Assemble the campaign chaos bag."
        },
      ],
      "chaos_bag_setup": [{
          "difficulty": "Easy",
          "difficulty_text": "I want to experience the story",
          "difficulty_color": "success",
          "tokens": [{
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        },
        {
          "difficulty": "Normal",
          "difficulty_text": "I want a challenge",
          "difficulty_color": "info",
          "tokens": [{
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3",
              "quantity": 1
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 12,
              "token": "tablet",
              "symbol": true,
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        },
        {
          "difficulty": "Hard",
          "difficulty_text": "I want a true nightmare",
          "difficulty_color": "warning",
          "tokens": [{
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        },
        {
          "difficulty": "Expert",
          "difficulty_text": "I want Arkham Horror",
          "difficulty_color": "danger",
          "tokens": [{
              "tokenID": 1,
              "token": "0",
              "quantity": 1
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2",
            },
            {
              "tokenID": 3,
              "token": "-2",
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 6,
              "token": "-5"
            },
            {
              "tokenID": 7,
              "token": "-6"
            },
            {
              "tokenID": 9,
              "token": "-8"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up Part I: The Gathering"
    },
    "scenarios": [{
        "title": "Part I: The Gathering",
        "introductions": [{
          "number": 1,
          "text": "You and your partners have been investigating strange events taking place in your home city of Arkham, Massachusetts. Over the past few weeks, several townspeople have mysteriously gone missing. Recently, their corpses turned up in the woods, savaged and half-eaten. The police and newspapers have stated that wild animals are responsible, but you believe there is something else going on. You are gathered together at the lead investigator’s home to discuss these bizarre events."
        }],
        "setup": [{
            "text": "Gather all cards from the following encounter sets: The Gathering, Rats, Ghouls, Striking Fear, Ancient Evils, and Chilling Cold. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [{
                "name": "the_gathering",
                "icon": "icon-the_gathering"
              },
              {
                "name": "rats",
                "icon": "icon-rats"
              },
              {
                "name": "ghouls",
                "icon": "icon-ghouls"
              },
              {
                "name": "striking_fear",
                "icon": "icon-striking_fear"
              },
              {
                "name": "ancient_evils",
                "icon": "icon-ancient_evils"
              },
              {
                "name": "chilling_cold",
                "icon": "icon-chilling_cold"
              }
            ]
          },
          {
            "text": "Put the Study location into play. Set each other location aside, out of play. Each investigator begins play in the Study."
          },
          {
            "text": "Set the Ghoul Priest and Lita Chantler cards aside, out of play."
          },
          {
            "text": "Shuffle the remainder of the encounter cards to form the encounter deck."
          }
        ],
        "resolution_checks": [{
          "id": "victory_display",
          "type": Number,
          "text": "Victory Display",
          "default": 0
        }],
        "resolution": [{
            "id": 0,
            "title": "no resolution",
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "You barely manage to escape your house with your lives. The woman on your parlor follows you out the front door, slamming it behind her. \"You fools! See what you have done?\" She pushes a chair in front of the door, lodging it beneath the doorknob. \"We must get out of here. Come with me, and I will tell you what I know. We are the only ones who can stop the threat that lurks beneath om being unleashed throughout the city.\" You’re in no state to argue. Nodding, you follow the woman as she runs from your front porch out into the rainy street, toward Rivertown.",
            "steps": [{
                "text": "Your house is still standing.",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.house_burned_down = false;
                  return variables;
                }
              },
              {
                "text": "The Ghoul Priest is still alive.",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.ghoul_priest_alive = true;
                  return variables;
                }
              },
              {
                "text": "The lead investigator has earned the Lita Chantler card and may include it in his or her deck. This card does not count toward that investigator’s deck size."
              },
              {
                "text": "Each investigator earns 2 bonus experience as he or she gains insight into the hidden world of the Mythos.",
                "addToLog": false
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 1,
            "title": "resolution 1",
            "header": "Resolution 1",
            "description": "You nod and allow the red-haired woman to set the walls and floor of your house ablaze. The fire spreads quickly, and you run out the front door to avoid being caught in the inferno. From the sidewalk, you watch as everything you own is consumed by the flames. \"Come with me,\" the woman says. \"You must be told of the threat that lurks below. Alone, we are surely doomed...  But together, we can stop it.\"",
            "steps": [{
                "text": "Your house has burned to the ground.",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.house_burned_down = true;
                  return variables;
                },
                "varLinked": false
              },
              {
                "text": "The lead investigator has earned the Lita Chantler card and may include it in his or her deck. This card does not count toward that investigator’s deck size.",
                "addToLog": false
              },
              {
                "text": "The lead investigator suffers 1 mental trauma from watching their home become a smoldering ruin.",
                "addToLog": false
              },
              {
                "text": "Each investigator earns 2 bonus experience as he or she gains insight into the hidden world of the Mythos.",
                "addToLog": false
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 2,
            "title": "resolution 2",
            "header": "Resolution 2",
            "description": "You refuse to follow the overzealous woman’s order and kick her out of your home for fear that she will set it ablaze without your permission. \"Fools! You are making a grave mistake!\" she warns. \"You do not understand the threat that lurks below…the grave danger we are all in!\" Still shaken by the night’s events, you decide to hear the woman out. Perhaps she can shed some light on these bizarre events...  But she doesn’t seem to trust you very much.",
            "steps": [{
                "text": "Your house is still standing.",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.house_burned_down = false;
                  return variables;
                }
              },
              {
                "text": "The lead investigator earns 1 experience, as he or she refuses to let the night’s events destroy their life.",
                "addToLog": false
              },
              {
                "text": "Each investigator earns 2 bonus experience as he or she gains insight into the hidden world of the Mythos.",
                "addToLog": false
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 3,
            "title": "resolution 3",
            "header": "Resolution 3",
            "description": "You run to the hallway to try to find a way to escape the house, but the burning-hot barrier still blocks your path. Trapped, the horde of feral creatures that have invaded your home close in, and you have nowhere to run.",
            "steps": [{
                "text": "Lita was forced to find others to help her cause.",
                "addToLog": true
              },
              {
                "text": "Your house is still standing.",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.house_burned_down = false;
                  return variables;
                }
              },
              {
                "text": "The Ghoul Priest is still alive.",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.ghoul_priest_alive = true;
                  return variables;
                }
              },
              {
                "text": "Each investigator who has not resigned is killed. If there are not enough investigators to continue the campaign, the campaign is over and the players lose. Otherwise, advance to the next scenario.",
                "addToLog": false
              },
              {
                "text": "If the lead investigator was killed, choose an investigator to earn the Lita Chantler card. that investigator may include this card in his or her deck. It does not count toward that investigator’s deck size.",
                "addToLog": false
              },
            ]
          }
        ]
      },
      {
        "title": "Part II: The Midnight Masks",
        "introductions": [{
            "text": "The woman came to you in a panic, raving about monsters emerging from the ground in a home near Rivertown. \"I managed to trap them,\" she explains, \"but there are others. Other pits. Other domains.\" Only last week, you would have thought she was a lunatic. Recent events, however, have challenged your preconceptions of normality. You decide to hear her out."
          },
          {
            "text": "She introduces herself as Lita Chantler and lays out a tale that strains the limits of your belief. \"The creatures I speak of, \" she claims, \"are called ghouls, cruel beings who plague the crypts, caverns, and tunnels beneath the city of Arkham...\""
          },
          {
            "text": "In the wake of the disaster at your home, Lita Chantler, the red‑haired woman from your parlor, lays out a tale that, even in light of what you have just witnessed, strains the limits of your belief. \"The creatures in your home,\" she claims, \"are called ghouls—cruel beings who plague the crypts, caverns, and tunnels beneath the city of Arkham...\""
          },
          {
            "text": "\"These creatures feed on the corpses of humans, and they are served by a dark cult within Arkham whose members have inexplicably come to worship the ancient master of the ghouls. This cult has been killing innocent people and feeding them to the ghouls, satiating a monstrous hunger. A dark balance was maintained. Until now.\""
          },
          {
            "text": "\"Recently,\" Lita continues, \"one of their lairs, where the corpses were stored, was destroyed. Since then, the ghouls have been more active than usual. I have tracked their movements and tried my best to stop them from running amok throughout the city. But I think there is something worse going on. The cult has been planning something darker, and more ominous, than anything I have yet observed. Indications are that this plan shall come to fruition tonight, shortly after midnight. Beyond that, I cannot fathom what to expect.\""
          },
          {
            "text": "\"Many of the cultists,\" Lita continues, \"will seem like everyday people, despite their foul intentions. Whenever the cult meets, its members don masks shaped like the skulls of various animals to protect their identities from one another. These masks are our mark. Symbols of death and decay. We must unmask the cultists to expose and derail their plans. We have but a few hours. The more cultists we find before midnight, the better.\""
          }
        ],
        "setup": [{
            "text": "Gather all cards from the following encounter sets: Midnight Masks, Chilling Cold, Nightgaunts, Dark Cult, and Locked Doors. These sets are indicated by the following icons:>",
            "icons": true,
            "icon_list": [{
                "name": "midnight_masks",
                "icon": "icon-midnight_masks"
              },
              {
                "name": "chilling_cold",
                "icon": "icon-chilling_cold"
              },
              {
                "name": "nightgaunts",
                "icon": "icon-nightgaunts"
              },
              {
                "name": "dark_cult",
                "icon": "icon-dark_cult"
              },
              {
                "name": "locked_doors",
                "icon": "icon-locked_doors"
              }
            ]
          },
          {
            "text": "Set the Cult of Umôrdhoth encounter set aside as a separate \"Cultist deck,\" and shuffle it. This set is indicated by the following icon:",
            "icons": true,
            "icon_list": [{
              "name": "cult_of_umordoth",
              "icon": "icon-cult_of_umordoth"
            }]
          },
          {
            "text": "Choose one of the two Downtown locations and one of the two Southside locations at random and put them into play. Remove the other versions of Downtown and Southside from the game. Then, put the Northside, Easttown, Rivertown, St. Mary’s Hospital, Graveyard, Miskatonic University, and Your House locations into play."
          },
          {
            "check": true,
            check_function(variables) {
              if (variables.number_of_players === 1)
                return 0;
              if (variables.number_of_players === 2)
                return 1;
              if (variables.number_of_players === 3)
                return 2;
              if (variables.number_of_players === 4)
                return 3;
            },
            "options": [{
                "text": ""
              },
              {
                "text": "Search the gathered encounter sets for 1 copy of Acolyte and spawn it at Southside."
              },
              {
                "text": "Search the gathered encounter sets for 2 copies of Acolyte. Spawn 1 at Southside and 1 at Downtown."
              },
              {
                "text": "Search the gathered encounter sets for 3 copies of Acolyte. Spawn 1 at Southside, 1 at Downtown, and 1 at the Graveyard."
              },
            ]
          },
          {
            "check": true,
            check_function(variables) {
              if (variables.house_burned_down === true)
                return 0;
              if (variables.house_burned_down === false)
                return 1;
            },
            "options": [{
                "text": "Remove Your House from the game. Each investigator begins play at Rivertown."
              },
              {
                "text": "Each investigator begins play at Your House."
              }
            ]
          },
          {
            "text": "Shuffle the remainder of the encounter cards to form the encounter deck."
          },
          {
            "check": true,
            check_function(variables) {
              if (variables.ghoul_priest_alive === true)
                return 0;
              else
                return 1;
            },
            "options": [{
                "text": "Shuffle \"The Ghoul Priest\" into the encounter deck."
              },
              {
                "text": ""
              }
            ]
          }
        ],
        "resolution_checks": [{
            "id": "victory_display",
            "type": Number,
            "text": "Victory Display",
            "default": 0
          },
          {
            "id": "cultists_interrogated",
            "text": "Cultists We Interrogated",
            "type": Array,
            "data": [{
                "text": "\"Wolf-Man\" Drew: The Cannibal"
              },
              {
                "text": "Herman Collins:  The Undertaker"
              },
              {
                "text": "Peter Warren: The Occult Professor"
              },
              {
                "text": "Victoria Devereux: The Collector"
              },
              {
                "text": "Ruth Turner: The Mortician"
              },
              {
                "text": "The Masked Hunter"
              }
            ],
          },
          {
            "id": "cultists_escaped",
            "text": "Cultists Who Got Away",
            "type": Array,
            "data": [{
                "text": "\"Wolf-Man\" Drew: The Cannibal"
              },
              {
                "text": "Herman Collins:  The Undertaker"
              },
              {
                "text": "Peter Warren: The Occult Professor"
              },
              {
                "text": "Victoria Devereux: The Collector"
              },
              {
                "text": "Ruth Turner: The Mortician"
              },
              {
                "text": "The Masked Hunter"
              }
            ],
          },
          {
            "id": "ghoul_priest_alive",
            "type": Boolean,
            "text": "Is the Ghoul Priest alive?",
            "default": false
          }
        ],
        "resolution": [{
            "id": 0,
            "title": "no resolution",
            "header": "If no resolution was reached (each investigator resigned or was defeated)",
            "description": "You’ve managed to obtain some useful information about the cult and its plans. You can only hope it’s enough.",
            "steps": [{
                "id": "cultists_interrogated",
                "text": "Cultists we interrogated: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item => {
                      if (variables[id][variables[id].length - 1] === item)
                        varText = varText + item;
                      else
                        varText = varText + item + ", ";
                    })
                    if (varText === "") {
                      varText = "None";
                    }
                    return varText;
                  }
                }
              },
              {
                "id": "cultists_escaped",
                "text": "Cultists who got away: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item => {
                      if (variables[id][variables[id].length - 1] === item)
                        varText = varText + item;
                      else
                        varText = varText + item + ", ";
                    })
                    if (varText === "") {
                      varText = "None";
                    }
                    return varText;
                  }
                }
              },
              {
                "id": "ghoul_priest_alive",
                "text": "",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    if (variables[id] === true) {
                      let varText = "The Ghoul Priest is still alive.";
                      return varText;
                    }
                    return null
                  }
                }
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 1,
            "title": "resolution 1",
            "header": "Resolution 1",
            "description": "You’ve managed to obtain some useful information about the cult and its plans. You can only hope it’s enough.",
            "steps": [{
                "id": "cultists_interrogated",
                "text": "Cultists we interrogated: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item => {
                      if (variables[id][variables[id].length - 1] === item)
                        varText = varText + item;
                      else
                        varText = varText + item + ", ";
                    })
                    if (varText === "") {
                      varText = "None";
                    }
                    return varText;
                  }
                }
              },
              {
                "id": "cultists_escaped",
                "text": "Cultists who got away: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item => {
                      if (variables[id][variables[id].length - 1] === item)
                        varText = varText + item;
                      else
                        varText = varText + item + ", ";
                    })
                    if (varText === "") {
                      varText = "None";
                    }
                    return varText;
                  }
                }
              },
              {
                "id": "ghoul_priest_alive",
                "text": "",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    if (variables[id] === true) {
                      let varText = "The Ghoul Priest is still alive.";
                      return varText;
                    }
                    return null
                  }
                }
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 2,
            "title": "resolution 2",
            "header": "Resolution 2",
            "description": "Twelve bells ring out, signaling midnight. You’re out of time; the cult’s ritual will begin shortly. You’ve managed to obtain some useful information about the cult and its plans. You can only hope it’s enough",
            "steps": [{
                "id": "cultists_interrogated",
                "text": "Cultists we interrogated: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item => {
                      if (variables[id][variables[id].length - 1] === item)
                        varText = varText + item;
                      else
                        varText = varText + item + ", ";
                    })
                    if (varText === "") {
                      varText = "None";
                    }
                    return varText;
                  }
                }
              },
              {
                "id": "cultists_escaped",
                "text": "Cultists who got away: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item => {
                      if (variables[id][variables[id].length - 1] === item)
                        varText = varText + item;
                      else
                        varText = varText + item + ", ";
                    })
                    if (varText === "") {
                      varText = "None";
                    }
                    return varText;
                  }
                }
              },
              {
                "id": "ghoul_priest_alive",
                "text": "",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    if (variables[id] === true) {
                      let varText = "The Ghoul Priest is still alive.";
                      return varText;
                    }
                    return null
                  }
                }
              },
              {
                "text": "It is past midnight",
                "addToLog": true
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          }
        ]
      },
      {
        "title": "Part III: The Devourer Below",
        "introductions": [{
            "text": "After a frantic nighttime search throughout Arkham, you have tracked down and questioned several members of the cult. Your findings are disturbing: they claim to worship a being known as Umôrdhoth, a monstrous entity from another realm."
          },
          {
            "text": "You are able to confirm much of Lita’s story: the cult is agitated over the destruction of a ghoul lair. However, a surprising detail also turns up: the one who invaded the lair and set this night’s events in motion was none other than Lita Chantler herself! You are not sure why this important detail was omitted from Lita’s story, did she tell you only as much as was necessary to draw you into her conflict? But in another light, she seems to be fighting to protect the city of Arkham from a terrible menace."
          },
          {
            "text": "The final piece of the puzzle was found written in a journal possessed by one of the cultists. It describes a dark ritual to be performed deep within the woods south of Arkham, this very night. According to the journal, the ritual’s completion will open a gate and bring forth the cult’s dark master into this world. \"If the cult is not stopped,\" Lita warns, \"there is a possibility that Umôrdhoth’s vengeance will consume all in its path.\" Frightened but determined to stop the ritual, you head into the woods..."
          }
        ],
        "setup": [{
            "text": "Gather all cards from the following encounter sets: The Devourer Below, Ancient Evils, Striking Fear, Ghouls, and Dark Cult. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [{
                "name": "the_devourer_below",
                "icon": "icon-the_devourer_below"
              },
              {
                "name": "ancient_evils",
                "icon": "icon-ancient_evils"
              },
              {
                "name": "striking_fear",
                "icon": "icon-striking_fear"
              },
              {
                "name": "ghouls",
                "icon": "icon-ghouls"
              },
              {
                "name": "dark_cult",
                "icon": "icon-dark_cult"
              }
            ]
          },
          {
            "text": "Put the Main Path location into play. Shuffle the 6 copies of Arkham Woods, choose 4 of them at random, and put them into play without looking at their revealed sides. Remove the other 2 from the game. Each investigator begins play at the Main Path."
          },
          {
            "text": "Set the Ghoul Priest and Lita Chantler cards aside, out of play."
          },
          {
            "text": "Set the Ritual Site and Umôrdhoth cards aside, out of play."
          },
          {
            "text": "Randomly choose one of following 4 encounter sets: Agents of Yog- Sothoth, Agents of Shub-Niggurath, Agents of Cthulhu, or Agents of Hastur.  Without looking at the chosen encounter set, shuffle it and the remainder of the encounter cards together to form the encounter deck. Remove the other 3 encounter sets from the game. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [{
                "name": "agents_of_yog",
                "icon": "icon-agents_of_yog"
              },
              {
                "name": "agents_of_shub",
                "icon": "icon-agents_of_shub"
              },
              {
                "name": "agents_of_cthulhu",
                "icon": "icon-agents_of_cthulhu"
              },
              {
                "name": "agents_of_hastur",
                "icon": "icon-agents_of_hastur"
              }
            ]
          },
          {
            "check": true,
            check_function(variables) {
              if (variables.cultists_escaped.length === 0)
                return 0;
              if (variables.cultists_escaped.length >= 1 && variables.cultists_escaped.length <= 2)
                return 1;
              if (variables.cultists_escaped.length >= 3 && variables.cultists_escaped.length <= 4)
                return 2;
              if (variables.cultists_escaped.length >= 5 && variables.cultists_escaped.length <= 6)
                return 3;
            },
            "options": [{
                "text": ""
              },
              {
                "text": "Place 1 doom on Agenda 1a."
              },
              {
                "text": "Place 2 doom on Agenda 1a."
              },
              {
                "text": "Place 3 doom on Agenda 1a."
              },
            ]
          },
          {
            "text": "Add the following chaos tokens to the chaos bag for the remainder of the campaign.",
            "addToBag": true,
            "icons": true,
            "icon_list": [{
              "name": "elder_thing",
              "icon": "icon-elder_thing"
            }],
            "tokensToAdd": [{
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary",
              "quantity": 1
            }]
          },
          {
            "check": true,
            check_function(variables) {
              if (variables.past_midnight === true)
                return 0;
              else
                return 1;
            },
            "options": [{
                "text": "Each player discards 2 random cards from his or her starting hand."
              },
              {
                "text": ""
              }
            ]
          },
          {
            "check": true,
            check_function(variables) {
              if (variables.ghoul_priest_alive === true)
                return 0;
              else
                return 1;
            },
            "options": [{
                "text": "Shuffle \"The Ghoul Priest\" into the encounter deck."
              },
              {
                "text": ""
              }
            ]
          }
        ],
        "resolution_checks": [{
            "type": Number,
            "text": "Victory Display",
            "default": 0
          },
          {
            "type": Boolean,
            "text": "Is the Ghoul Priest alive?",
            "default": false
          }
        ],
        "resolution": [{
            "id": 0,
            "title": "no resolution",
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "Too frightened to face her fate, Lita flees into the night. She realizes that she has failed and Umôrdhoth's vengeance will pursue her wherever she goes. Thee creature's tendrils spread throughout the city of Arkham, searching for her. It lurks in the darkness of every corner, tugging at the seams of reality. But Lita is nowhere to be found, so the creature dwells in the shadows to this day, searching... Killing...",
            "steps": [{
                "text": "Arkham succumbed to Umôrdhoth's terrible vengeance.",
                "addToLog": true
              },
              {
                "text": "The investigators lost the campaign.",
                "addToLog": true
              }
            ]
          },
          {
            "id": 1,
            "title": "resolution 1",
            "header": "Resolution 1",
            "description": "You have managed to prevent the cult from summoning its master. Although you’re unsure what would have happened had the cult succeeded, you're relieved that, at least for the time being, Arkham is safe. You capture as many cultists as you can find, but very few townspeople believe your tale. Perhaps it was all in your head, after all...",
            "steps": [{
                "text": "The ritual to summon Umôrdhoth was broken",
                "addToLog": true
              },
              {
                "text": "Each investigator has suffered 2 mental trauma, as he or she never fully recovers from their ordeal.",
                "addToLog": false
              },
              {
                "text": "Each investigator earns 5 bonus experience, as he or she has saved Arkham from a terrible fate.",
                "addToLog": false
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              },
              {
                "text": "The investigators have won the campaign!",
                "addToLog": true
              }
            ]
          },
          {
            "id": 2,
            "title": "resolution 2",
            "header": "Resolution 2",
            "description": "Through force of arms and strength of will, you are somehow able to harm Umôrdhoth enough to send it reeling back to the dimension om which it emerged. Warmth and light return to the woods as the void-like mass is sucked in upon itself, vanishing in an instant. You aren’t sure if a being such as this can be killed, but for the time being it seems to have retreated. As their master vanishes, the ghouls nearby climb into the open pit below, fleeing with terrible cries and shrieks. You have stopped an evil plot, but the fight has taken its toll on your body and mind. Worse, you can’t help but feel insignificant in the face of the world's mysteries. What other terrors exist in the deep, dark corners of reality?",
            "steps": [{
                "text": "The invesigators repelled Umôrdhoth",
                "addToLog": true
              },
              {
                "text": "Each investigator has suffered 2 physical trauma and 2 mental trauma, as the fight against Umôrdhoth has taken its toll on his or her body and mind.",
                "addToLog": false
              },
              {
                "text": "Each investigator earns 10 bonus experience, as he or she has triumphed in battle against a truly terrible foe.",
                "addToLog": false
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              },
              {
                "text": "The investigators have won the campaign!",
                "addToLog": true
              }
            ]
          },

          {
            "id": 3,
            "title": "resolution 3",
            "header": "Resolution 3",
            "description": "In the face of this horror, you don’t believe there is anything you can do to stop it. You have but one hope if you are to survive. You turn on Lita and throw her at the terrible monstrosity, watching in dread as its swirling void-like mass consumes her. She cries out in torment as the life is sucked om her body. Umôrdhoth... Umôrdhoth...” the cultists chant.  Lita Chantler vanishes without a trace. For a moment, you fear that the creature will now turn on you, but you hear one of the cultists say, \"Umôrdhoth is a just god who claims only the guilty and the dead. Go, and you shall be spared.\" The swirling mass vanishes, and warmth and light return to the woods. The cultists slink away, leaving you alive. Lita's last moments are forever etched upon your memory.",
            "steps": [{
                "text": "The investigators sacrificed Lita Chantler to Umôrdhoth.",
                "addToLog": true
              },
              {
                "text": "Each investigator has suffered 2 physical trauma and 2 mental trauma, as the mere sight of Umôrdhoth has taken its toll on his or her body and mind.",
                "addToLog": false
              },
              {
                "text": "The guilt over sacrificing Lita forever haunts your memory. A random madness weakness has been added to your deck.",
                "addToLog": true
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              },
              {
                "text": "The investigators have survived, but their actions weigh heavily on their consciences.",
                "addToLog": true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 1,
    name: "Return to Night of the Zealot",
    code: "rtnotz",
    color_code: "danger",
    icon: "icon-rtnotz",
    campaign_variables: {
      active: false,
      campaignRef: 1,
      current_section: 0,
      current_scenario: 0,
      current_interlude: 0,
      current_state: "",
      number_of_players: 1,
      participating_investigators: [],
      difficulty: 0,
      chaos_bag: [],
      campaign_path: [{
          "section_type": "setup",
          "section_color": "primary",
          "section_key": "SETUP",
          "title": "Campaign Setup"
        },
        {
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S1",
          "title": "Part I: The Gathering"
        },
        {
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S2",
          "title": "Part II: The Midnight Masks"
        },
        {
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S3",
          "title": "Part III: The Devourer Below"
        },
        {
          "section_type": "finish",
          "section_color": "info",
          "section_key": "FINISH",
          "title": "Campaign Finish"
        }
      ],
      campaign_log: [],
      ghoul_priest_alive: false,
      house_burned_down: false,
      cultists_interrogated: [],
      cultists_escaped: [],
      past_midnight: false
    },
    introduction_title: "The Ghouls Hunger",
    introduction: "<em>Friday, September 18, 1925. Arkham, Massachusetts. It is the end of a long and abnormally hot summer. The first hints of autumn beckon, but a heavy heat persists, relentless. A silent, unspoken anger grips the town. Tempers are short, and in the last week alone there have been numerous reports of townspeople coming to heated, violent blows with one another over simple misunderstandings.<br></br>And now, a call from James Hankerson.<br></br>He claims to have found a dismembered body in his barn. Blaming the weather would be too easy. There is something wrong with this town, and not a whole lot this old soothsayer can do to stop the slide. My auguries indicate a small group of investigators will soon take note of these strange happenings and set forth to make things right. I’ll be watching their progress... But I won’t be holding my breath.<br></br>Somehow, you feel as though you've been here before...</em>",
    "setup": {
      "setup_start_text": "To set up the Return to Night of the Zealot campaign, perform the following steps in order:",
      "setup_steps": [{
          "number": 1,
          "text": "Choose number of players"
        },
        {
          "number": 2,
          "text": "Assemble investigator decks"
        },
        {
          "number": 3,
          "text": "Choose difficulty level"
        },
        {
          "number": 4,
          "text": "Assemble the campaign chaos bag."
        },
      ],
      "chaos_bag_setup": [{
          "difficulty": "Easy",
          "difficulty_text": "I want to experience the story",
          "difficulty_color": "success",
          "tokens": [{
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        },
        {
          "difficulty": "Normal",
          "difficulty_text": "I want a challenge",
          "difficulty_color": "info",
          "tokens": [{
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3",
              "quantity": 1
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 12,
              "token": "tablet",
              "symbol": true,
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        },
        {
          "difficulty": "Hard",
          "difficulty_text": "I want a true nightmare",
          "difficulty_color": "warning",
          "tokens": [{
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        },
        {
          "difficulty": "Expert",
          "difficulty_text": "I want Arkham Horror",
          "difficulty_color": "danger",
          "tokens": [{
              "tokenID": 1,
              "token": "0",
              "quantity": 1
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2",
            },
            {
              "tokenID": 3,
              "token": "-2",
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 6,
              "token": "-5"
            },
            {
              "tokenID": 7,
              "token": "-6"
            },
            {
              "tokenID": 9,
              "token": "-8"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up Part I: The Gathering"
    },
    "scenarios": [{
        "title": "Part I: The Gathering",
        "introductions": [{
          "number": 1,
          "text": "You and your partners have been investigating strange events taking place in your home city of Arkham, Massachusetts. Over the past few weeks, several townspeople have mysteriously gone missing. Recently, their corpses turned up in the woods, savaged and half-eaten. The police and newspapers have stated that wild animals are responsible, but you believe there is something else going on. You are gathered together at the lead investigator’s home to discuss these bizarre events."
        }],
        "setup": [{
            "text": "Gather all cards from the following encounter sets: The Gathering, Return to the Gathering, Rats, Ghouls of Umôrdhoth, Striking Fear, Ancient Evils, and Chilling Cold. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [{
                "name": "the_gathering",
                "icon": "icon-the_gathering"
              },
              {
                "name": "return_to_the_gathering",
                "icon": "icon-return_to_the_gathering"
              },
              {
                "name": "rats",
                "icon": "icon-rats"
              },
              {
                "name": "ghouls_of_umrdhoth",
                "icon": "icon-ghouls_of_umrdhoth"
              },
              {
                "name": "striking_fear",
                "icon": "icon-striking_fear"
              },
              {
                "name": "ancient_evils",
                "icon": "icon-ancient_evils"
              },
              {
                "name": "chilling_cold",
                "icon": "icon-chilling_cold"
              }
            ]
          },
          {
            "text": "Put the Study location into play. Set each other location aside, out of play. Each investigator begins play in the Study."
          },
          {
            "text": "Set the Ghoul Priest and Lita Chantler cards aside, out of play."
          },
          {
            "text": "Shuffle the remainder of the encounter cards to form the encounter deck."
          }
        ],
        "resolution_checks": [{
          "id": "victory_display",
          "type": Number,
          "text": "Victory Display",
          "default": 0
        }],
        "resolution": [{
            "id": 0,
            "title": "no resolution",
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "You barely manage to escape your house with your lives. The woman on your parlor follows you out the front door, slamming it behind her. \"You fools! See what you have done?\" She pushes a chair in front of the door, lodging it beneath the doorknob. \"We must get out of here. Come with me, and I will tell you what I know. We are the only ones who can stop the threat that lurks beneath om being unleashed throughout the city.\" You’re in no state to argue. Nodding, you follow the woman as she runs from your front porch out into the rainy street, toward Rivertown.",
            "steps": [{
                "text": "Your house is still standing.",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.house_burned_down = false;
                  return variables;
                }
              },
              {
                "text": "The Ghoul Priest is still alive.",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.ghoul_priest_alive = true;
                  return variables;
                }
              },
              {
                "text": "The lead investigator has earned the Lita Chantler card and may include it in his or her deck. This card does not count toward that investigator’s deck size."
              },
              {
                "text": "Each investigator earns 2 bonus experience as he or she gains insight into the hidden world of the Mythos.",
                "addToLog": false
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 1,
            "title": "resolution 1",
            "header": "Resolution 1",
            "description": "You nod and allow the red-haired woman to set the walls and floor of your house ablaze. The fire spreads quickly, and you run out the front door to avoid being caught in the inferno. From the sidewalk, you watch as everything you own is consumed by the flames. \"Come with me,\" the woman says. \"You must be told of the threat that lurks below. Alone, we are surely doomed...  But together, we can stop it.\"",
            "steps": [{
                "text": "Your house has burned to the ground.",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.house_burned_down = true;
                  return variables;
                },
                "varLinked": false
              },
              {
                "text": "The lead investigator has earned the Lita Chantler card and may include it in his or her deck. This card does not count toward that investigator’s deck size.",
                "addToLog": false
              },
              {
                "text": "The lead investigator suffers 1 mental trauma from watching their home become a smoldering ruin.",
                "addToLog": false
              },
              {
                "text": "Each investigator earns 2 bonus experience as he or she gains insight into the hidden world of the Mythos.",
                "addToLog": false
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 2,
            "title": "resolution 2",
            "header": "Resolution 2",
            "description": "You refuse to follow the overzealous woman’s order and kick her out of your home for fear that she will set it ablaze without your permission. \"Fools! You are making a grave mistake!\" she warns. \"You do not understand the threat that lurks below…the grave danger we are all in!\" Still shaken by the night’s events, you decide to hear the woman out. Perhaps she can shed some light on these bizarre events...  But she doesn’t seem to trust you very much.",
            "steps": [{
                "text": "Your house is still standing.",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.house_burned_down = false;
                  return variables;
                }
              },
              {
                "text": "The lead investigator earns 1 experience, as he or she refuses to let the night’s events destroy their life.",
                "addToLog": false
              },
              {
                "text": "Each investigator earns 2 bonus experience as he or she gains insight into the hidden world of the Mythos.",
                "addToLog": false
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },

          {
            "id": 3,
            "title": "resolution 3",
            "header": "Resolution 3",
            "description": "You run to the hallway to try to find a way to escape the house, but the burning-hot barrier still blocks your path. Trapped, the horde of feral creatures that have invaded your home close in, and you have nowhere to run.",
            "steps": [{
                "text": "Lita was forced to find others to help her cause.",
                "addToLog": true
              },
              {
                "text": "Your house is still standing.",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.house_burned_down = false;
                  return variables;
                }
              },
              {
                "text": "The Ghoul Priest is still alive.",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.ghoul_priest_alive = true;
                  return variables;
                }
              },
              {
                "text": "Each investigator who has not resigned is killed. If there are not enough investigators to continue the campaign, the campaign is over and the players lose. Otherwise, advance to the next scenario.",
                "addToLog": false
              },
              {
                "text": "If the lead investigator was killed, choose an investigator to earn the Lita Chantler card. that investigator may include this card in his or her deck. It does not count toward that investigator’s deck size.",
                "addToLog": false
              },
            ]
          }
        ]
      },
      {
        "title": "Part II: The Midnight Masks",
        "introductions": [{
            "text": "The woman came to you in a panic, raving about monsters emerging from the ground in a home near Rivertown. \"I managed to trap them,\" she explains, \"but there are others. Other pits. Other domains.\" Only last week, you would have thought she was a lunatic. Recent events, however, have challenged your preconceptions of normality. You decide to hear her out."
          },
          {
            "text": "She introduces herself as Lita Chantler and lays out a tale that strains the limits of your belief. \"The creatures I speak of, \" she claims, \"are called ghouls, cruel beings who plague the crypts, caverns, and tunnels beneath the city of Arkham...\""
          },
          {
            "text": "In the wake of the disaster at your home, Lita Chantler, the red‑haired woman from your parlor, lays out a tale that, even in light of what you have just witnessed, strains the limits of your belief. \"The creatures in your home,\" she claims, \"are called ghouls—cruel beings who plague the crypts, caverns, and tunnels beneath the city of Arkham...\""
          },
          {
            "text": "\"These creatures feed on the corpses of humans, and they are served by a dark cult within Arkham whose members have inexplicably come to worship the ancient master of the ghouls. This cult has been killing innocent people and feeding them to the ghouls, satiating a monstrous hunger. A dark balance was maintained. Until now.\""
          },
          {
            "text": "\"Recently,\" Lita continues, \"one of their lairs, where the corpses were stored, was destroyed. Since then, the ghouls have been more active than usual. I have tracked their movements and tried my best to stop them from running amok throughout the city. But I think there is something worse going on. The cult has been planning something darker, and more ominous, than anything I have yet observed. Indications are that this plan shall come to fruition tonight, shortly after midnight. Beyond that, I cannot fathom what to expect.\""
          },
          {
            "text": "\"Many of the cultists,\" Lita continues, \"will seem like everyday people, despite their foul intentions. Whenever the cult meets, its members don masks shaped like the skulls of various animals to protect their identities from one another. These masks are our mark. Symbols of death and decay. We must unmask the cultists to expose and derail their plans. We have but a few hours. The more cultists we find before midnight, the better.\""
          }
        ],
        "setup": [{
            "text": "Gather all cards from the following encounter sets: Midnight Masks, Return to the Midnight Masks, Chilling Cold, Nightgaunts, Cult of the Devourer, and Locked Doors. These sets are indicated by the following icons:>",
            "icons": true,
            "icon_list": [{
                "name": "midnight_masks",
                "icon": "icon-midnight_masks"
              },
              {
                "name": "return_to_the_midnight_masks",
                "icon": "icon-return_to_the_midnight_masks"
              },
              {
                "name": "chilling_cold",
                "icon": "icon-chilling_cold"
              },
              {
                "name": "nightgaunts",
                "icon": "icon-nightgaunts"
              },
              {
                "name": "the_devourers_cult",
                "icon": "icon-the_devourers_cult"
              },
              {
                "name": "locked_doors",
                "icon": "icon-locked_doors"
              }
            ]
          },
          {
            "text": "Set the Cult of Umôrdhoth and Return to the Cult of Umôrdhoth encounter sets aside as a separate \"Cultist deck,\" and shuffle it. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [{
                "name": "cult_of_umordoth",
                "icon": "icon-cult_of_umordoth"
              },
              {
                "name": "return_cult",
                "icon": "icon-return_cult"
              }
            ]
          },
          {
            "text": "Choose one of the two Downtown locations and one of the two Southside locations at random and put them into play. Remove the other versions of Downtown and Southside from the game. Then, put the Northside, Easttown, Rivertown, St. Mary’s Hospital, Graveyard, Miskatonic University, and Your House locations into play."
          },
          {
            "check": true,
            check_function(variables) {
              if (variables.number_of_players === 1)
                return 0;
              if (variables.number_of_players === 2)
                return 1;
              if (variables.number_of_players === 3)
                return 2;
              if (variables.number_of_players === 4)
                return 3;
            },
            "options": [{
                "text": ""
              },
              {
                "text": "Search the gathered encounter sets for 1 copy of Acolyte and spawn it at Southside."
              },
              {
                "text": "Search the gathered encounter sets for 2 copies of Acolyte. Spawn 1 at Southside and 1 at Downtown."
              },
              {
                "text": "Search the gathered encounter sets for 3 copies of Acolyte. Spawn 1 at Southside, 1 at Downtown, and 1 at the Graveyard."
              },
            ]
          },
          {
            "check": true,
            check_function(variables) {
              if (variables.house_burned_down === true)
                return 0;
              if (variables.house_burned_down === false)
                return 1;
            },
            "options": [{
                "text": "Remove Your House from the game. Each investigator begins play at Rivertown."
              },
              {
                "text": "Each investigator begins play at Your House."
              }
            ]
          },
          {
            "text": "Shuffle the remainder of the encounter cards to form the encounter deck."
          },
          {
            "check": true,
            check_function(variables) {
              if (variables.ghoul_priest_alive === true)
                return 0;
              else
                return 1;
            },
            "options": [{
                "text": "Shuffle \"The Ghoul Priest\" into the encounter deck."
              },
              {
                "text": ""
              }
            ]
          }
        ],
        "resolution_checks": [{
            "id": "victory_display",
            "type": Number,
            "text": "Victory Display",
            "default": 0
          },
          {
            "id": "cultists_interrogated",
            "text": "Cultists We Interrogated",
            "type": Array,
            "data": [{
                "text": "\"Wolf-Man\" Drew: The Cannibal"
              },
              {
                "text": "Herman Collins:  The Undertaker"
              },
              {
                "text": "Peter Warren: The Occult Professor"
              },
              {
                "text": "Victoria Devereux: The Collector"
              },
              {
                "text": "Ruth Turner: The Mortician"
              },
              {
                "text": "The Masked Hunter"
              },
              {
                "text": "Jeremiah Pierce: Your Next-Door Neighbour"
              },
              {
                "text": "Billy Cooper: The Crooked Cop"
              },
              {
                "text": "Alma Hill: The Inquisitve Historian"
              }
            ],
          },
          {
            "id": "cultists_escaped",
            "text": "Cultists Who Got Away",
            "type": Array,
            "data": [{
                "text": "\"Wolf-Man\" Drew: The Cannibal"
              },
              {
                "text": "Herman Collins:  The Undertaker"
              },
              {
                "text": "Peter Warren: The Occult Professor"
              },
              {
                "text": "Victoria Devereux: The Collector"
              },
              {
                "text": "Ruth Turner: The Mortician"
              },
              {
                "text": "The Masked Hunter"
              },
              {
                "text": "Jeremiah Pierce: Your Next-Door Neighbour"
              },
              {
                "text": "Billy Cooper: The Crooked Cop"
              },
              {
                "text": "Alma Hill: The Inquisitve Historian"
              }
            ],
          },
          {
            "id": "ghoul_priest_alive",
            "type": Boolean,
            "text": "Is the Ghoul Priest alive?",
            "default": false
          }
        ],
        "resolution": [{
            "id": 0,
            "title": "no resolution",
            "header": "If no resolution was reached (each investigator resigned or was defeated)",
            "description": "You’ve managed to obtain some useful information about the cult and its plans. You can only hope it’s enough.",
            "steps": [{
                "id": "cultists_interrogated",
                "text": "Cultists we interrogated: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item => {
                      if (variables[id][variables[id].length - 1] === item)
                        varText = varText + item;
                      else
                        varText = varText + item + ", ";
                    })
                    if (varText === "") {
                      varText = "None";
                    }
                    return varText;
                  }
                }
              },
              {
                "id": "cultists_escaped",
                "text": "Cultists who got away: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item => {
                      if (variables[id][variables[id].length - 1] === item)
                        varText = varText + item;
                      else
                        varText = varText + item + ", ";
                    })
                    if (varText === "") {
                      varText = "None";
                    }
                    return varText;
                  }
                }
              },
              {
                "id": "ghoul_priest_alive",
                "text": "",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    if (variables[id] === true) {
                      let varText = "The Ghoul Priest is still alive.";
                      return varText;
                    }
                    return null
                  }
                }
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 1,
            "title": "resolution 1",
            "header": "Resolution 1",
            "description": "You’ve managed to obtain some useful information about the cult and its plans. You can only hope it’s enough.",
            "steps": [{
                "id": "cultists_interrogated",
                "text": "Cultists we interrogated: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item => {
                      if (variables[id][variables[id].length - 1] === item)
                        varText = varText + item;
                      else
                        varText = varText + item + ", ";
                    })
                    if (varText === "") {
                      varText = "None";
                    }
                    return varText;
                  }
                }
              },
              {
                "id": "cultists_escaped",
                "text": "Cultists who got away: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item => {
                      if (variables[id][variables[id].length - 1] === item)
                        varText = varText + item;
                      else
                        varText = varText + item + ", ";
                    })
                    if (varText === "") {
                      varText = "None";
                    }
                    return varText;
                  }
                }
              },
              {
                "id": "ghoul_priest_alive",
                "text": "",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    if (variables[id] === true) {
                      let varText = "The Ghoul Priest is still alive.";
                      return varText;
                    }
                    return null
                  }
                }
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 2,
            "title": "resolution 2",
            "header": "Resolution 2",
            "description": "Twelve bells ring out, signaling midnight. You’re out of time; the cult’s ritual will begin shortly. You’ve managed to obtain some useful information about the cult and its plans. You can only hope it’s enough",
            "steps": [{
                "id": "cultists_interrogated",
                "text": "Cultists we interrogated: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item => {
                      if (variables[id][variables[id].length - 1] === item)
                        varText = varText + item;
                      else
                        varText = varText + item + ", ";
                    })
                    if (varText === "") {
                      varText = "None";
                    }
                    return varText;
                  }
                }
              },
              {
                "id": "cultists_escaped",
                "text": "Cultists who got away: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item => {
                      if (variables[id][variables[id].length - 1] === item)
                        varText = varText + item;
                      else
                        varText = varText + item + ", ";
                    })
                    if (varText === "") {
                      varText = "None";
                    }
                    return varText;
                  }
                }
              },
              {
                "id": "ghoul_priest_alive",
                "text": "",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id) {
                  if (variables.hasOwnProperty(id) === true) {
                    if (variables[id] === true) {
                      let varText = "The Ghoul Priest is still alive.";
                      return varText;
                    }
                    return null
                  }
                }
              },
              {
                "text": "It is past midnight",
                "addToLog": true
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          }
        ]
      },
      {
        "title": "Part III: The Devourer Below",
        "introductions": [{
            "text": "After a frantic nighttime search throughout Arkham, you have tracked down and questioned several members of the cult. Your findings are disturbing: they claim to worship a being known as Umôrdhoth, a monstrous entity from another realm."
          },
          {
            "text": "You are able to confirm much of Lita’s story: the cult is agitated over the destruction of a ghoul lair. However, a surprising detail also turns up: the one who invaded the lair and set this night’s events in motion was none other than Lita Chantler herself! You are not sure why this important detail was omitted from Lita’s story, did she tell you only as much as was necessary to draw you into her conflict? But in another light, she seems to be fighting to protect the city of Arkham from a terrible menace."
          },
          {
            "text": "The final piece of the puzzle was found written in a journal possessed by one of the cultists. It describes a dark ritual to be performed deep within the woods south of Arkham, this very night. According to the journal, the ritual’s completion will open a gate and bring forth the cult’s dark master into this world. \"If the cult is not stopped,\" Lita warns, \"there is a possibility that Umôrdhoth’s vengeance will consume all in its path.\" Frightened but determined to stop the ritual, you head into the woods..."
          }
        ],
        "setup": [{
            "text": "Gather all cards from the following encounter sets: The Devourer Below, Return to the Devourer Below, Ancient Evils, Striking Fear, Ghouls of Umôrdhoth and The Devourer's Cult. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [{
                "name": "the_devourer_below",
                "icon": "icon-the_devourer_below"
              },
              {
                "name": "return_to_the_devourer_below",
                "icon": "icon-return_to_the_devourer_below"
              },
              {
                "name": "ancient_evils",
                "icon": "icon-ancient_evils"
              },
              {
                "name": "striking_fear",
                "icon": "icon-striking_fear"
              },
              {
                "name": "ghouls_of_umrdhoth",
                "icon": "icon-ghouls_of_umrdhoth"
              },
              {
                "name": "the_devourers_cult",
                "icon": "icon-the_devourers_cult"
              }
            ]
          },
          {
            "text": "Put the Main Path location into play. Shuffle the 6 copies of Arkham Woods, choose 4 of them at random, and put them into play without looking at their revealed sides. Remove the other 2 from the game. Each investigator begins play at the Main Path."
          },
          {
            "text": "Set the Ghoul Priest and Lita Chantler cards aside, out of play."
          },
          {
            "text": "Set the Ritual Site and Umôrdhoth cards aside, out of play."
          },
          {
            "text": "Randomly choose one of following 4 encounter sets: Agents of Yog- Sothoth, Agents of Shub-Niggurath, Agents of Cthulhu, or Agents of Hastur.  Without looking at the chosen encounter set, shuffle it and the remainder of the encounter cards together to form the encounter deck. Remove the other 3 encounter sets from the game. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [{
                "name": "agents_of_yog",
                "icon": "icon-agents_of_yog"
              },
              {
                "name": "agents_of_shub",
                "icon": "icon-agents_of_shub"
              },
              {
                "name": "agents_of_cthulhu",
                "icon": "icon-agents_of_cthulhu"
              },
              {
                "name": "agents_of_hastur",
                "icon": "icon-agents_of_hastur"
              }
            ]
          },
          {
            "check": true,
            check_function(variables) {
              if (variables.cultists_escaped.length === 0)
                return 0;
              if (variables.cultists_escaped.length >= 1 && variables.cultists_escaped.length <= 2)
                return 1;
              if (variables.cultists_escaped.length >= 3 && variables.cultists_escaped.length <= 4)
                return 2;
              if (variables.cultists_escaped.length >= 5 && variables.cultists_escaped.length <= 6)
                return 3;
            },
            "options": [{
                "text": ""
              },
              {
                "text": "Place 1 doom on Agenda 1a."
              },
              {
                "text": "Place 2 doom on Agenda 1a."
              },
              {
                "text": "Place 3 doom on Agenda 1a."
              },
            ]
          },
          {
            "text": "Add the following chaos tokens to the chaos bag for the remainder of the campaign.",
            "addToBag": true,
            "icons": true,
            "icon_list": [{
              "name": "elder_thing",
              "icon": "icon-elder_thing"
            }],
            "tokensToAdd": [{
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary",
              "quantity": 1
            }]
          },
          {
            "check": true,
            check_function(variables) {
              if (variables.past_midnight === true)
                return 0;
              else
                return 1;
            },
            "options": [{
                "text": "Each player discards 2 random cards from his or her starting hand."
              },
              {
                "text": ""
              }
            ]
          },
          {
            "check": true,
            check_function(variables) {
              if (variables.ghoul_priest_alive === true)
                return 0;
              else
                return 1;
            },
            "options": [{
                "text": "Shuffle \"The Ghoul Priest\" into the encounter deck."
              },
              {
                "text": ""
              }
            ]
          }
        ],

        "resolution_checks": [{
            "type": Number,
            "text": "Victory Display",
            "default": 0
          },
          {
            "type": Boolean,
            "text": "Is the Ghoul Priest alive?",
            "default": false
          }
        ],
        "resolution": [{
            "id": 0,
            "title": "no resolution",
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "Too frightened to face her fate, Lita flees into the night. She realizes that she has failed and Umôrdhoth's vengeance will pursue her wherever she goes. Thee creature's tendrils spread throughout the city of Arkham, searching for her. It lurks in the darkness of every corner, tugging at the seams of reality. But Lita is nowhere to be found, so the creature dwells in the shadows to this day, searching... Killing...",
            "steps": [{
                "text": "Arkham succumbed to Umôrdhoth's terrible vengeance.",
                "addToLog": true
              },
              {
                "text": "The investigators lost the campaign.",
                "addToLog": true
              }
            ]
          },
          {
            "id": 1,
            "title": "resolution 1",
            "header": "Resolution 1",
            "description": "You have managed to prevent the cult om summoning its master. Although you’re unsure what would have happened had the cult succeeded, you're relieved that, at least for the time being, Arkham is safe. You capture as many cultists as you can find, but very few townspeople believe your tale. Perhaps it was all in your head, after all...",
            "steps": [{
                "text": "The ritual to summon Umôrdhoth was broken",
                "addToLog": true
              },
              {
                "text": "Each investigator has suffered 2 mental trauma, as he or she never fully recovers from their ordeal.",
                "addToLog": false
              },
              {
                "text": "Each investigator earns 5 bonus experience, as he or she has saved Arkham from a terrible fate.",
                "addToLog": false
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              },
              {
                "text": "The investigators have won the campaign!",
                "addToLog": true
              }
            ]
          },
          {
            "id": 2,
            "title": "resolution 2",
            "header": "Resolution 2",
            "description": "Through force of arms and strength of will, you are somehow able to harm Umôrdhoth enough to send it reeling back to the dimension om which it emerged. Warmth and light return to the woods as the void-like mass is sucked in upon itself, vanishing in an instant. You aren’t sure if a being such as this can be killed, but for the time being it seems to have retreated. As their master vanishes, the ghouls nearby climb into the open pit below, fleeing with terrible cries and shrieks. You have stopped an evil plot, but the fight has taken its toll on your body and mind. Worse, you can’t help but feel insignificant in the face of the world's mysteries. What other terrors exist in the deep, dark corners of reality?",
            "steps": [{
                "text": "The invesigators repelled Umôrdhoth",
                "addToLog": true
              },
              {
                "text": "Each investigator has suffered 2 physical trauma and 2 mental trauma, as the fight against Umôrdhoth has taken its toll on his or her body and mind.",
                "addToLog": false
              },
              {
                "text": "Each investigator earns 10 bonus experience, as he or she has triumphed in battle against a truly terrible foe.",
                "addToLog": false
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              },
              {
                "text": "The investigators have won the campaign!",
                "addToLog": true
              }
            ]
          },

          {
            "id": 3,
            "title": "resolution 3",
            "header": "Resolution 3",
            "description": "In the face of this horror, you don’t believe there is anything you can do to stop it. You have but one hope if you are to survive. You turn on Lita and throw her at the terrible monstrosity, watching in dread as its swirling void-like mass consumes her. She cries out in torment as the life is sucked om her body. Umôrdhoth... Umôrdhoth...” the cultists chant.  Lita Chantler vanishes without a trace. For a moment, you fear that the creature will now turn on you, but you hear one of the cultists say, \"Umôrdhoth is a just god who claims only the guilty and the dead. Go, and you shall be spared.\" The swirling mass vanishes, and warmth and light return to the woods. The cultists slink away, leaving you alive. Lita's last moments are forever etched upon your memory.",
            "steps": [{
                "text": "The investigators sacrificed Lita Chantler to Umôrdhoth.",
                "addToLog": true
              },
              {
                "text": "Each investigator has suffered 2 physical trauma and 2 mental trauma, as the mere sight of Umôrdhoth has taken its toll on his or her body and mind.",
                "addToLog": false
              },
              {
                "text": "The guilt over sacrificing Lita forever haunts your memory. A random madness weakness has been added to your deck.",
                "addToLog": true
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              },
              {
                "text": "The investigators have survived, but their actions weigh heavily on their consciences.",
                "addToLog": true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Curse of the Rougarou",
    code: "curse_of_the_rougarou",
    color_code: "primary",
    icon: "icon-curse_of_the_rougarou",
    campaign_variables: {
      active: false,
      campaignRef: 2,
      current_section: 0,
      current_scenario: 0,
      current_interlude: 0,
      current_state: "",
      number_of_players: 1,
      participating_investigators: [],
      participating_players: [],
      difficulty: 0,
      chaos_bag: [],
      campaign_path: [{
          "section": 1,
          "section_type": "setup",
          "section_color": "warning",
          "section_key": "SETUP",
          "title": "Scenario Setup"
        },
        {
          "section": 2,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S1",
          "title": "Curse of the Rougarou"
        },
        {
          "section": 5,
          "section_type": "finish",
          "section_color": "info",
          "section_key": "FINISH",
          "title": "Scenario Finish"
        }
      ],
      campaign_log: []
    },
    introduction_title: "'Terror Grips New Orleans!''",
    introduction: "<em>Minnie Klein, your contact at the 'Arkham Advertiser', had slipped you a draft of the article over a cup of coffee at Velma's Diner.  It would have gone to print had Doyle Jeffries, the lead editor, not scoffed at the concept.  \"I believe his exact words were, 'I ain't printing the ravings of some Voodoo lunatic and passing it off as news,\" she explained.  From the sly grin spreading across her face, you could tell she smelled a story.<br></br>The headline was sensationalist.  Three killings in nine days was enough to spook a town, sure.  But you doubt all of New Orleans is gripped by terror, or even knows about the killings.  Still, something piqued your interest.  \"Lady Espirit,\" the Voodoo priestess from the article, claimed that a malign curse had taken root in the bayou.<br></br>\"There's something to this, isn't there?  I know that look,\" Minnie said.  You weren't sure.  If Lady Espirit was right, this \"roux-ga-roux\" wouldn't stop killing at three, that's for sure.  But curses?  Wolf-people?  How could such things be real?  Only one way to find out.  You put on your coat and head for the Northside Station...</em>",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up Curse of the Rougarou, perform the following steps in order:",
      "setup_steps": [{
          "number": 1,
          "text": "Choose number of players"
        },
        {
          "number": 2,
          "text": "Assemble investigator decks"
        },
        {
          "number": 3,
          "text": "Choose difficulty level"
        },
        {
          "number": 4,
          "text": "Assemble the campaign chaos bag."
        },
      ],
      "chaos_bag_setup": [{
          "difficulty": "Normal",
          "difficulty_text": "I want a challenge",
          "difficulty_color": "success",
          "tokens": [{
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 6,
              "token": "-5"
            },
            {
              "tokenID": 7,
              "token": "-6"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 12,
              "token": "tablet",
              "symbol": true,
              "icon": "icon-tablet",
              "color": "warning"
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        },
        {
          "difficulty": "Hard",
          "difficulty_text": "I want a true nightmare",
          "difficulty_color": "danger",
          "tokens": [
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 7,
              "token": "-6",
              "quantity": 1
            },
            {
              "tokenID": 9,
              "token": "-8",
              "quantity": 1
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up Curse of the Rougarou"
    },
    "scenarios": [{
      "title": "The Curse of the Rougarou",
      "introductions": [
        {
          "number": 1,
          "text": "Minnie Klein, your contact at the 'Arkham Advertiser', had slipped you a draft of the article over a cup of coffee at Velma's Diner.  It would have gone to print had Doyle Jeffries, the lead editor, not scoffed at the concept.  \"I believe his exact words were, 'I ain't printing the ravings of some Voodoo lunatic and passing it off as news,\" she explained.  From the sly grin spreading across her face, you could tell she smelled a story."
        },
        {
          "number": 2,
          "text": "The headline was sensationalist.  Three killings in nine days was enough to spook a town, sure.  But you doubt all of New Orleans is gripped by terror, or even knows about the killings.  Still, something piqued your interest.  \"Lady Espirit,\" the Voodoo priestess from the article, claimed that a malign curse had taken root in the bayou.\""
        },
        {
          "number": 3,
          "text": "There's something to this, isn't there?  I know that look,\" Minnie said.  You weren't sure.  If Lady Espirit was right, this \"roux-ga-roux\" wouldn't stop killing at three, that's for sure.  But curses?  Wolf-people?  How could such things be real?  Only one way to find out.  You put on your coat and head for the Northside Station..."
        },
      ],
      "setup": [
        {
          "text": "Gather all cards from the following encounter sets: Curse of the Rougarou, The Bayou. These sets are indicated by the following icons:",
          "icons": true,
          "icon_list": [{
              "name": "curse_of_the_rougarou",
              "icon": "icon-curse_of_the_rougarou"
            },
            {
              "name": "the_bayou",
              "icon": "icon-the_bayou"
            }
          ]
        },
        {
          "text": "Set the Curse of the Rougarou encounter set aside, out of play."
        },
        {
          "text": "Sort each of the locations into 4 piles, by trait (New Orleans, Riverside, Wilderness and Unhallowed)."
        },
        {
          "text": "Randomly choose 1 of these piles and remove these locations from the game."
        },
        {
          "text": "Randomly choose another 1 of these piles and put those locations into play."
        },
        {
          "text": "Set each location in the other two piles aside, out of play."
        },
        {
          "text": "Each investigator begins play at a Bayou location in play."
        },
        {
          "text": "Set the following cards aside, out of play:  Lady Espirit, Bear Trap and Fishing Net."
        },
        {
          "text": "Shuffle the remainder of the encounter cards to form the encounter deck."
        }
      ],
      "resolution_checks": [{
        "id": "victory_display",
        "type": Number,
        "text": "Victory Display",
        "default": 0
      }],
      "resolution": [
        {
          "id": 0,
          "title": "no resolution",
          "header": "If no resolution was reached (each investigator resigned or was defeated):",
          "description": "Somehow, you manage to make it back to safety before daybreak, resting until late in the afternoon.  It isn't until you seek out Lady Espirit the next day that you realise who last night's victim was.  With a heavy heart and an unshakable dread, you choose to bury her body instead of contacting the authorities - the less people who delve this deep into the bayou, the better.",
          "steps": [
            {
              "text": "The Rougarou continues to haunt the bayou.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 1,
          "title": "resolution 1",
          "header": "Resolution 1:",
          "description": "Somehow, you manage to make it back to safety before daybreak, resting until late in the afternoon.  It isn't until you seek out Lady Espirit the next day that you realise who last night's victim was.  With a heavy heart and an unshakable dread, you choose to bury her body instead of contacting the authorities - the less people who delve this deep into the bayou, the better.",
          "steps": [
            {
              "text": "The Rougarou continues to haunt the bayou.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 2,
          "title": "resolution 2",
          "header": "Resolution 2:",
          "description": "The creature gives a pitiful wail as dark, miry blood oozes from its wounds.  By the time its body collapses into the mud, it has transformed back into its original form - the form of a young, dark-skinned man, his expression twisted in agony.  You bring his body back to Lady Espirit, and she works her strange magic, removing the stain of the curse from the land.  \"Call on me, should ever need my help,\" the mysterious woman tells you.",
          "steps": [
            {
              "text": "The Rougarou is destroyed, and the curse is lifted.",
              "addToLog": true
            },
            {
              "text": "Remove the Curse of the Rougarou weakness from it's bearer's deck.",
              "addToLog": false
            },
            {
              "text": "Any one investigator may choose to add Lady Espirit to their deck.  This card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 3,
          "title": "resolution 3",
          "header": "Resolution 3:",
          "description": "Somehow, you have managed to quell the rage and bloodlust of the curse within the creature, and in moments the shape of a young, dark-skinned man stands before you, panting and sweating.  He seems to only just now understand everything he's done, and agrees to flee to a secluded corner of the earth, where he can harm no one.  However, the curse lives on.  He sees it in your eyes and grips your arm tightly.  \"Don't let it take control,\" he warns.  \"I was weak, but you - I can tell you are strong.  Control the curse as I could not.\"",
          "steps": [
            {
              "text": "The Rougarou escaped, and you embraced the curse.",
              "addToLog": true
            },
            {
              "text": "The bearer of the Curse of the Rougarou weakness must add Monstrous Transformation to their deck.  This card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
      ]
    }]
  },
  {
    id: 3,
    name: "The Dunwich Legacy",
    code: "set",
    color_code: "warning",
    icon: "icon-set",
    campaign_variables: {
      active: false,
      campaignRef: 3,
      current_section: 0,
      current_scenario: 0,
      current_interlude: 0,
      current_state: "",
      number_of_players: 1,
      participating_investigators: [],
      participating_players: [],
      difficulty: 0,
      chaos_bag: [],
      campaign_path: [{
          "section": 1,
          "section_type": "setup",
          "section_color": "warning",
          "section_key": "SETUP",
          "title": "Scenario Setup"
        },
        {
          "section": 2,
          "section_type": "interlude",
          "section_color": "info",
          "section_key": "I1",
          "title": "Prologue"
        },
        {
          "section": 3,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S1A",
          "title": "Extracurricular Activities",
          "swap_to": 0
        },
        {
          "section": 4,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S1B",
          "title": "The House Always Wins",
          "swap_to": 1
        },
        {
          "section": 5,
          "section_type": "interlude",
          "section_color": "info",
          "section_key": "I2",
          "title": "Armitage's Fate"
        },
        {
          "section": 6,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S2",
          "title": "The Miskatonic Museum",
          "swap_to": 2
        },
        {
          "section": 7,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S3",
          "title": "The Essex County Express"
        },
        {
          "section": 8,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S4",
          "title": "Blood on the Altar"
        },
        {
          "section": 9,
          "section_type": "interlude",
          "section_color": "info",
          "section_key": "I3",
          "title": "The Survivors"
        },
        {
          "section": 10,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S5",
          "title": "Undimensioned and Unseen"
        },
        {
          "section": 11,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S6",
          "title": "Where Doom Awaits"
        },
        {
          "section": 12,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S7",
          "title": "Lost in Time and Space"
        },
        {
          "section": 13,
          "section_type": "interlude",
          "section_color": "info",
          "section_key": "I4",
          "title": "Epilogue"
        },
        {
          "section": 14,
          "section_type": "finish",
          "section_color": "info",
          "section_key": "FINISH",
          "title": "Scenario Finish"
        }
      ],
      campaign_log: [],
      swap: false,
      rice_kidnapped: false,
      morgan_kidnapped: false,
      students_saved: true,
      experiment_defeated: false,
      unconscious: false,
      bone_to_pick: false,
      has_your_back: false,
      cheated: false
    },
    introduction_title: "Their hand is at your throat, yet ye see Them not...",
    introduction: "<em>\"I’m going to burn his accursed diary, and if you men are wise you'll dynamite that altar-stone up there, and pull down all the rings of standing stones on the other hills. Things like that brought down the beings those Whateleys were so fond of...\" - H.P. Lovecraft, \"The Dunwich Horror\"<br></br>Dr. Henry Armitage pours himself a glass of pinot and sits down at his desk, gesturing for you to sit across from him. \"I apologize for the short notice,\" he begins. His face is pale, his forehead sweaty and wrinkled with worry. Armitage — the head librarian of Miskatonic University, and a former mentor of yours — privately contacted you in the hopes of gaining your assistance.<br></br>Eager to help, you made your way to his home in Southside. Upon entering, you were surprised to find his home in disarray. Books and notes litter his desk, and an empty bottle of wine has tipped over onto the ground by the fireplace. You’d always known Armitage to be neat and well-organized...</em>",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up The Dunwich Horror, perform the following steps in order:",
      "setup_steps": [{
          "number": 1,
          "text": "Choose number of players"
        },
        {
          "number": 2,
          "text": "Assemble investigator decks"
        },
        {
          "number": 3,
          "text": "Choose difficulty level"
        },
        {
          "number": 4,
          "text": "Assemble the campaign chaos bag."
        },
      ],
      "chaos_bag_setup": [
        {
          "difficulty": "Easy",
          "difficulty_text": "I want to experience the story",
          "difficulty_color": "success",
          "tokens": [
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        },
        {
          "difficulty": "Normal",
          "difficulty_text": "I want a challenge",
          "difficulty_color": "info",
          "tokens": [
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        },
        {
          "difficulty": "Hard",
          "difficulty_text": "I want a true nightmare",
          "difficulty_color": "warning",
          "tokens": [
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 6,
              "token": "-5"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        },
        {
          "difficulty": "Expert",
          "difficulty_text": "I want Arkham Horror",
          "difficulty_color": "danger",
          "tokens": [
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 6,
              "token": "-5"
            },
            {
              "tokenID": 7,
              "token": "-6"
            },
            {
              "tokenID": 9,
              "token": "-8"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to begin at the Prologue"
    },
    "interludes": [
      {
        "title": "Prologue",
        "introductions": [
          {
            "number": 1,
            "text": "The elderly man takes a moment to collect his thoughts. \"I am looking for two of my colleagues - Dr. Francis Morgan, professor of archaeology, and Warren Rice, professor of languages. Warren was supposed to meet up with me over supper earlier today to discuss several important findings, but he has since gone missing.\""
          },
          {
            "number": 2,
            "text": "\"At first I thought nothing of it, but I have a nagging feeling something else is going on. A very... Familiar feeling.\" You’ve never seen Armitage quite this worried before. His hands tremble as he reaches for the glass on his desk, and he sips from it nervously. \"I tried to find Francis, hoping he knew where Warren was, but he too is out of touch. Francis has been spending a lot of time in some gambling den, or so I am told.\""
          },
          {
            "number": 3,
            "text": "\"I sent for you because I am worried Warren might be in trouble. I would appreciate it greatly if you could find him for me. You may also wish to ask Francis for help, if you can reach him.\""
          }
        ],
        "decision_checks": [],
        "decisions": [
          {
            "id": 0,
            "title": "to find Warren Rice first",
            "header": "Search for Professor Warren Rice first",
            "description": "Professor Warren Rice was last seen working late at night in the humanities department of Miskatonic University.  Let's search for him there.",
            "steps": [
              {
                "text": "Your next scenario will be Scenario I-A: Extracurricular Activity.",
                "addToLog": false
              }
            ]
          },
          {
            "id": 1,
            "title": "to find Francis Morgan first",
            "header": "Search for Dr. Francis Morgan first",
            "description": "Dr. Francis Morgan was last seen gambling at the Clover Club, an upscale speakeasy and gambling joint located downtown. Let’s go talk to him",
            "steps": [
              {
                "text": "Your next scenario will be Scenario I-B: The House Always Wins.",
                "addToLog": false,
                "check": true,
                check_function(variables)
          			{
          			  variables.swap = true;
                  [variables.campaign_path[2], variables.campaign_path[3]] = [variables.campaign_path[3], variables.campaign_path[2]];
                  console.log(variables);
          			  return variables;
          			}
              }
            ]
          },
        ]
      }
    ],
    "scenarios": [{
        "title": "Part I-A: Extracurricular Activity",
        "introductions": [{
          "number": 1,
          "text": "Dr. Armitage is worried his colleague, Professor Warren Rice, might be in trouble, so he has asked for your help in finding his friend. He seems unreasonably nervous about his colleague’s disappearance considering Professor Rice has only been “missing” for a matter of hours..."
        }],
        "setup": [{
            "text": "Gather all cards from the following encounter sets: Extracurricular Activity, Sorcery, The Beyond, Bishop’s Thralls, Whippoorwills, Ancient Evils, Locked Doors, and Agents of Yog-Sothoth. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [{
                "name": "extracurricular_activity",
                "icon": "icon-extracurricular_activity"
              },
              {
                "name": "sorcery",
                "icon": "icon-sorcery"
              },
              {
                "name": "the_beyond",
                "icon": "icon-the_beyond"
              },
              {
                "name": "bishops_thralls",
                "icon": "icon-bishops_thralls"
              },
              {
                "name": "whippoorwills",
                "icon": "icon-whippoorwills"
              },
              {
                "name": "ancient_evils",
                "icon": "icon-ancient_evils"
              },
              {
                "name": "locked_doors",
                "icon": "icon-locked_doors"
              },
              {
                "name": "agents_of_yog",
                "icon": "icon-agents_of_yog"
              }
            ]
          },
          {
        		"check": true,
        		check_function(variables)
        		{
        		  if (variables.swap === false)
        			return 0;
        		  if (variables.swap === true)
        			return 1;
        		},
        		"options": [
          		  {
        			     "text": "Set Faculty Offices (The Night is Still Young) aside, out of play.  Remove Faculty Offices (The Hour is Late) from the game."
          		  },
          		  {
        			     "text": "Set Faculty Offices (The Hour is Late) aside, out of play.  Remove Faculty Offices (The Night is Still Young) from the game."
          		  }
          		]
        	  },
          {
            "text": "Set the following cards aside, out of play: “Jazz” Mulligan, Alchemical Concoction, The Experiment, Professor Warren Rice, Dormitories, and Alchemy Labs."
          },
          {
            "text": "Put the Miskatonic Quad, Orne Library, Humanities Building, Student Union, Science Building, and Administration Building locations into play. Each investigator begins play at the Miskatonic Quad."
          },
          {
            "text": "Shuffle the remainder of the encounter cards to form the encounter deck."
          }
        ],
        "resolution_checks": [{
          "id": "victory_display",
          "type": Number,
          "text": "Victory Display",
          "default": 0
        }],
        "resolution": [
          {
            "id": 0,
            "title": "no resolution",
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "As you flee from the university, you hear screaming from the northern end of the campus. An ambulance passes you by, and you fear the worst. Hours later, you learn that a ‘rabid dog of some sort’ found its way into the university dormitories. The creature attacked the students inside and many were mauled or killed in the attack.",
            "steps": [{
                "text": "Professor Warren Rice was kidnapped",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.rice_kidnapped = true;
                  return variables;
                }
              },
              {
                "text": "You failed to save the students",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.students_saved = false;
                  return variables;
                }
              },
              {
            		"text": "You are haunted by guilt.  Add the following chaos tokens to the chaos bag for the remainder of the campaign.",
            		"addToBag": true,
            		"icons": true,
            		"icon_list": [
            		  {
            			"name": "tablet",
            			"icon": "icon-tablet"
            		  }
            		],
            		"tokensToAdd": [
            		  {
            			"tokenID": 12,
            			"symbol": true,
            			"token": "tablet",
            			"icon": "icon-tablet",
            			"color": "warning",
            			"quantity": 1
            		  }
            		]
          	  },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 1,
            "title": "resolution 1",
            "header": "Resolution 1",
            "description": "You find Professor Rice bound and gagged in the closet of his office. When you free him, he informs you that the strange men and women wandering around the campus had been stalking him for hours. They cornered him in his office and tied him up, although for what purpose, Rice isn’t sure. You inform him that Dr. Armitage sent you, and Rice looks relieved, although he suspects that Dr. Morgan might be in danger as well. Because the strangers on campus seem to have been targeting Professor Rice, you decide that the best course of action is to escort him away from the campus as quickly as possible. As you leave the university, you hear screaming from the northern end of the campus. An ambulance passes you by, and you fear the worst. Hours later, you learn that a ‘rabid dog of some sort’ found its way into the university dormitories. The creature attacked the students inside, and many were mauled or killed in the attack.",
            "steps": [{
                "text": "You rescued Professor Warren Rice",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.rice_kidnapped = false;
                  return variables;
                }
              },
              {
                "text": "You failed to save the students",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.students_saved = false;
                  return variables;
                }
              },
              {
            		"text": "You are haunted by guilt.  Add the following chaos tokens to the chaos bag for the remainder of the campaign.",
            		"addToBag": true,
            		"icons": true,
            		"icon_list": [
            		  {
            			"name": "tablet",
            			"icon": "icon-tablet"
            		  }
            		],
            		"tokensToAdd": [
            		  {
            			"tokenID": 12,
            			"symbol": true,
            			"token": "tablet",
            			"icon": "icon-tablet",
            			"color": "warning",
            			"quantity": 1
            		  }
            		]
          	  },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 2,
            "title": "resolution 2",
            "header": "Resolution 2",
            "description": "You pull each of the dormitory’s fire alarms and usher the students out of the building’s north exit, hoping to make your way off campus. Many of the students are confused and exhausted, but you believe an attempt to explain the situation will do more harm than good. Minutes later, a terrible screech echoes across the campus, piercing and shrill. You tell the students to wait and head back to the dormitories to investigate. Oddly, you find no trace of the strange creature—a prospect that worries you more than it relieves you. You hurry to the faculty offices to find Professor Rice, but there is no sign of him anywhere.",
            "steps": [{
                "text": "Professor Warren Rice was kidnapped",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.rice_kidnapped = true;
                  return variables;
                }
              },
              {
                "text": "The students were rescued",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.students_saved = true;
                  return variables;
                }
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 3,
            "title": "resolution 3",
            "header": "Resolution 3",
            "description": "After defeating the strange and terrifying creature from the Department of Alchemy, you rush to the faculty offices to find Professor Rice. By the time you get to his office, there is no sign of him anywhere.",
            "steps": [{
                "text": "Professor Warren Rice was kidnapped",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.rice_kidnapped = true;
                  return variables;
                }
              },
              {
                "text": "The Experiment was defeated",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.experiment_defeated = true;
                  return variables;
                }
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 4,
            "title": "resolution 4",
            "header": "Resolution 4",
            "description": "You awaken hours later, exhausted and injured. You’re not sure what you saw, but the sight of it filled your mind with terror. From other survivors, you learn that a ‘rabid dog of some sort’ found its way into the university dormitories. The creature attacked the students inside, and many were mauled or killed in the attack",
            "steps": [{
                "text": "You were unconscious for several hours",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.unconscious = true;
                  return variables;
                }
              },
              {
                "text": "Professor Warren Rice was kidnapped",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.rice_kidnapped = true;
                  return variables;
                }
              },
              {
                "text": "You failed to save the students",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.students_saved = false;
                  return variables;
                }
              },
              {
            		"text": "You are haunted by guilt.  Add the following chaos tokens to the chaos bag for the remainder of the campaign.",
            		"addToBag": true,
            		"icons": true,
            		"icon_list": [
            		  {
            			"name": "tablet",
            			"icon": "icon-tablet"
            		  }
            		],
            		"tokensToAdd": [
            		  {
            			"tokenID": 12,
            			"symbol": true,
            			"token": "tablet",
            			"icon": "icon-tablet",
            			"color": "warning",
            			"quantity": 1
            		  }
            		]
          	  },
        		  {
        			"text": "Each investigator earns 1 bonus experience as they reflect on the night's events.",
        			"addToLog": false
        		  },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          }
        ],
      },
      {
        "title": "Part I-B: The House Always Wins",
        "introductions": [{
            "text": "Dr. Armitage suggested you track down his associate Dr. Francis Morgan. He’s not sure whether Dr. Morgan is in trouble, but he’s not particularly happy with his colleague’s present choice of company. He’s in the Clover Club, a notorious gambling joint somewhere downtown."
          },
          {
            "text": "Finding the club’s exact location isn’t easy — You have to grease a few palms just to learn which of the Downtown restaurants operates as the club’s front. That restaurant is La Bella Luna, a somewhat upscale Italian eatery by the theatre. You change into your Sunday best and make your way there."
          },
          {
            "text": "In front of La Bella Luna stands a man in a pinstripe suit who sizes you up as you approach. “Enjoy yourselves,” he says with a snake-like grin as he holds open the restaurant’s front door."
          }
        ],
        "setup": [{
            "text": "Gather all cards from the following encounter sets: The House Always Wins, Bad Luck, Naomi’s Crew, Rats. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [{
                "name": "the_house_always_wins",
                "icon": "icon-the_house_always_wins"
              },
              {
                "name": "bad_luck",
                "icon": "icon-bad_luck"
              },
              {
                "name": "naomis_crew",
                "icon": "icon-naomis_crew"
              },
              {
                "name": "rats",
                "icon": "icon-rats"
              }
            ]
          },
          {
            "text": "Set the Hideous Abominations and Striking Fear encounter sets aside, out of play. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [{
                "name": "hideous_abominations",
                "icon": "icon-hideous_abominations"
              },
              {
                "name": "striking_fear",
                "icon": "icon-striking_fear"
              }
            ]
          },
          {
            "text": "Put the Clover Club Lounge, Clover Club Bar, Clover Club Cardroom, and La Bella Luna locations into play. Each investigator begins play in La Bella Luna."
          },
          {
            "text": "Put Clover Club Pit Boss into play in the Clover Club Lounge."
          },
          {
            "text": "Set the following cards aside, out of play: Darkened Hall, Peter Clover, Dr. Francis Morgan, and each copy of Back Hall Doorway."
          },
          {
            "text": "Shuffle the remainder of the encounter cards to form the encounter deck."
          }
        ],
        "resolution_checks": [{
            "id": "victory_display",
            "type": Number,
            "text": "Victory Display",
            "default": 0
          },
      	  {
        		"id": "cheated",
        		"type": Boolean,
        		"text": "Did anyone cheat?",
        		"default": false
      	  }
        ],
        "resolution": [{
            "id": 0,
            "title": "no resolution",
            "header": "If no resolution was reached (each investigator resigned before Act 3 or was defeated)",
            "description": "You barely make it out of the club alive, and flee to the end of the block and pause to recover. Before you can catch your breath, the ground shakes with a thunderous crash. People emerge from their homes and storefronts to see what the ruckus is, and a crowd forms on the street. You head to the front of the crowd and are horrified to see the building from which you fled just minutes earlier reduced to rubble. There is no sign of Dr. Morgan anywhere...",
            "steps": [{
                "text": "The O'Bannion Gang has a bone to pick with the investigators",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.bone_to_pick = true;
                  return variables;
                }
              },
              {
                "text": "Dr. Francis Morgan was kidnapped",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.students_saved = false;
                  return variables;
                }
              },
              {
            		"text": "Add the following chaos tokens to the chaos bag for the remainder of the campaign.  You really shouldn't cheat...",
            		"addToBag": true,
            		"icons": true,
            		"icon_list": [
            		  {
              			"name": "elder_thing",
              			"icon": "icon-elder_thing"
            		  }
            		],
            		"tokensToAdd": [
            		  {
              			"tokenID": 13,
              			"symbol": true,
              			"token": "elder_thing",
              			"icon": "icon-elder_thing",
              			"color": "primary",
              			"quantity": 1
            		  }
            		]
          	  },
        		  {
          			"text": "Each investigator earns 1 bonus experience as they reflect on the night's events.",
          			"addToLog": false
        		  },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 1,
            "title": "resolution 1",
            "header": "Resolution 1",
            "description": "You flee to the end of the block and pause to recover. Before you can catch your breath, the ground shakes with a thunderous crash. People emerge from their homes and storefronts to see what the ruckus is, and a crowd forms on the street. You head to the front of the crowd and are horrified to see the building from which you fled just minutes earlier reduced to rubble. There is no sign of Dr. Morgan anywhere...",
            "steps": [{
                "text": "The O'Bannion Gang has a bone to pick with the investigators",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.bone_to_pick = true;
                  return variables;
                }
              },
              {
                "text": "Dr. Francis Morgan was kidnapped",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.morgan_kidnapped = false;
                  return variables;
                }
              },
              {
            		"text": "Add the following chaos tokens to the chaos bag for the remainder of the campaign.  You really shouldn't cheat...",
            		"addToBag": true,
            		"icons": true,
            		"icon_list": [
            		  {
              			"name": "elder_thing",
              			"icon": "icon-elder_thing"
            		  }
            		],
            		"tokensToAdd": [
            		  {
              			"tokenID": 13,
              			"symbol": true,
              			"token": "elder_thing",
              			"icon": "icon-elder_thing",
              			"color": "primary",
              			"quantity": 1
            		  }
            		]
          	  },
        		  {
          			"text": "Each investigator earns 1 bonus experience as they reflect on the night's events.",
          			"addToLog": false
        		  },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 2,
            "title": "resolution 2",
            "header": "Resolution 2",
            "description": "“What in the world…?” Dr. Morgan finally breaks out of his daze as you make your way to safety. You ask him what he remembers, and he sputters and shakes his head. “It’s all a haze,” he explains, visibly exhausted. “I was having the run of my life! Perhaps I had one too many shots. But, those creatures — I haven’t seen anything like that since...” He trails off, and you can tell that his mind is racing. His eyes widen with realization and his face pales. “I may not be in the best shape, but I’ll help with your investigation. Whatever it takes.”",
            "steps": [{
                "text": "The O'Bannion Gang has a bone to pick with the investigators",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.bone_to_pick = true;
                  return variables;
                }
              },
              {
                "text": "You rescued Dr. Francis Morgan",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.morgan_kidnapped = false;
                  return variables;
                }
              },
              {
            		"text": "Add the following chaos tokens to the chaos bag for the remainder of the campaign.  You really shouldn't cheat...",
            		"addToBag": true,
            		"icons": true,
            		"icon_list": [
            		  {
              			"name": "elder_thing",
              			"icon": "icon-elder_thing"
            		  }
            		],
            		"tokensToAdd": [
            		  {
              			"tokenID": 13,
              			"symbol": true,
              			"token": "elder_thing",
              			"icon": "icon-elder_thing",
              			"color": "primary",
              			"quantity": 1
            		  }
            		]
          	  },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 3,
            "title": "resolution 3",
            "header": "Resolution 3",
            "description": "Although you were unable to find Dr. Morgan in the club, the man you rescued is grateful for your help. He introduces himself as Peter Clover, the owner of the establishment you’d just left. Despite the situation, he maintains an air of quiet professionalism. As you make your way towards the street, a well-polished Chrysler B-70 rolls up to you, and a gorgeous woman with long brown hair and narrow eyes exits. She is flanked by dangerous-looking men who slip their hands under their suit jackets when they see you. “Peter,” she says with a sigh of relief, “Good, you’re okay. I heard there was trouble?” She turns and glares at you with deadly eyes. “Who are they?” Mr. Clover dusts off his vest, unworried. “Naomi, my dear, these are friends of mine. They…” he clears his throat. “They escorted me off the premises,” he explains after a short pause. “They have earned our gratitude.” The woman crosses her arms and takes a moment to size you up before giving you a smirk. “Very well then. I must thank you for taking care of Peter. Run along now; we’ll handle things from here.” She nods to the goons flanking her and they walk past you toward the club’s rear entrance, pulling firearms out from underneath their coats. You’re not sure what ‘handling things’ means, but you’re pretty sure you don’t want to be here when the gunfire starts. You thank Naomi and Peter, and head off.",
            "steps": [{
                "text": "Naomi has your back",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.has_your_back = true;
                  return variables;
                }
              },
              {
                "text": "Dr. Francis Morgan was kidnapped",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.morgan_kidnapped = true;
                  return variables;
                }
              },
              {
            		"text": "Add the following chaos tokens to the chaos bag for the remainder of the campaign.  You really shouldn't cheat...",
            		"addToBag": true,
            		"icons": true,
            		"icon_list": [
            		  {
              			"name": "elder_thing",
              			"icon": "icon-elder_thing"
            		  }
            		],
            		"tokensToAdd": [
            		  {
              			"tokenID": 13,
              			"symbol": true,
              			"token": "elder_thing",
              			"icon": "icon-elder_thing",
              			"color": "primary",
              			"quantity": 1
            		  }
            		]
          	  },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
          {
            "id": 4,
            "title": "resolution 4",
            "header": "Resolution 4",
            "description": "You are pulled from the debris by several firefighters, one of whom exclaims, “We’ve got a live one!” A few of them patch you up, and the cops ask you what happened. You’re certain they wouldn’t believe your story about horrible monstrosities demolishing the building from within. Unsure of what to say, you give a vague statement about not remembering much. “We’re bringing you to St. Mary’s,” one of the nurses says, pointing to a nearby ambulance. Knowing now how dire the situation is, you slip away while she is distracted by something else in the rubble…",
            "steps": [{
                "text": "The O'Bannion Gang has a bone to pick with the investigators",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.bone_to_pick = true;
                  return variables;
                }
              },
              {
                "text": "Dr. Francis Morgan was kidnapped",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.morgan_kidnapped = true;
                  return variables;
                }
              },
              {
            		"text": "Add the following chaos tokens to the chaos bag for the remainder of the campaign.  You really shouldn't cheat...",
            		"addToBag": true,
            		"icons": true,
            		"icon_list": [
            		  {
              			"name": "elder_thing",
              			"icon": "icon-elder_thing"
            		  }
            		],
            		"tokensToAdd": [
            		  {
              			"tokenID": 13,
              			"symbol": true,
              			"token": "elder_thing",
              			"icon": "icon-elder_thing",
              			"color": "primary",
              			"quantity": 1
            		  }
            		]
          	  },
              {
                "text": "You were unconscious for several hours",
                "addToLog": true,
                "check": true,
                check_function(variables) {
                  variables.unconscious = true;
                  return variables;
                }
              },
        		  {
          			"text": "Each investigator suffers 1 physical trauma.",
          			"addToLog": false
        		  },
        		  {
          			"text": "Each investigator earns 1 bonus experience as they reflect on the night's events.",
          			"addToLog": false
        		  },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              }
            ]
          },
        ],
      },
      {
        "title": "Part III: The Devourer Below",
        "introductions": [{
            "text": "After a frantic nighttime search throughout Arkham, you have tracked down and questioned several members of the cult. Your findings are disturbing: they claim to worship a being known as Umôrdhoth, a monstrous entity from another realm."
          },
          {
            "text": "You are able to confirm much of Lita’s story: the cult is agitated over the destruction of a ghoul lair. However, a surprising detail also turns up: the one who invaded the lair and set this night’s events in motion was none other than Lita Chantler herself! You are not sure why this important detail was omitted from Lita’s story, did she tell you only as much as was necessary to draw you into her conflict? But in another light, she seems to be fighting to protect the city of Arkham from a terrible menace."
          },
          {
            "text": "The final piece of the puzzle was found written in a journal possessed by one of the cultists. It describes a dark ritual to be performed deep within the woods south of Arkham, this very night. According to the journal, the ritual’s completion will open a gate and bring forth the cult’s dark master into this world. \"If the cult is not stopped,\" Lita warns, \"there is a possibility that Umôrdhoth’s vengeance will consume all in its path.\" Frightened but determined to stop the ritual, you head into the woods..."
          }
        ],
        "setup": [{
            "text": "Gather all cards from the following encounter sets: The Devourer Below, Return to the Devourer Below, Ancient Evils, Striking Fear, Ghouls of Umôrdhoth and The Devourer's Cult. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [{
                "name": "the_devourer_below",
                "icon": "icon-the_devourer_below"
              },
              {
                "name": "return_to_the_devourer_below",
                "icon": "icon-return_to_the_devourer_below"
              },
              {
                "name": "ancient_evils",
                "icon": "icon-ancient_evils"
              },
              {
                "name": "striking_fear",
                "icon": "icon-striking_fear"
              },
              {
                "name": "ghouls_of_umrdhoth",
                "icon": "icon-ghouls_of_umrdhoth"
              },
              {
                "name": "the_devourers_cult",
                "icon": "icon-the_devourers_cult"
              }
            ]
          },
          {
            "text": "Put the Main Path location into play. Shuffle the 6 copies of Arkham Woods, choose 4 of them at random, and put them into play without looking at their revealed sides. Remove the other 2 from the game. Each investigator begins play at the Main Path."
          },
          {
            "text": "Set the Ghoul Priest and Lita Chantler cards aside, out of play."
          },
          {
            "text": "Set the Ritual Site and Umôrdhoth cards aside, out of play."
          },
          {
            "text": "Randomly choose one of following 4 encounter sets: Agents of Yog- Sothoth, Agents of Shub-Niggurath, Agents of Cthulhu, or Agents of Hastur.  Without looking at the chosen encounter set, shuffle it and the remainder of the encounter cards together to form the encounter deck. Remove the other 3 encounter sets from the game. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [{
                "name": "agents_of_yog",
                "icon": "icon-agents_of_yog"
              },
              {
                "name": "agents_of_shub",
                "icon": "icon-agents_of_shub"
              },
              {
                "name": "agents_of_cthulhu",
                "icon": "icon-agents_of_cthulhu"
              },
              {
                "name": "agents_of_hastur",
                "icon": "icon-agents_of_hastur"
              }
            ]
          },
          {
            "check": true,
            check_function(variables) {
              if (variables.cultists_escaped.length === 0)
                return 0;
              if (variables.cultists_escaped.length >= 1 && variables.cultists_escaped.length <= 2)
                return 1;
              if (variables.cultists_escaped.length >= 3 && variables.cultists_escaped.length <= 4)
                return 2;
              if (variables.cultists_escaped.length >= 5 && variables.cultists_escaped.length <= 6)
                return 3;
            },
            "options": [{
                "text": ""
              },
              {
                "text": "Place 1 doom on Agenda 1a."
              },
              {
                "text": "Place 2 doom on Agenda 1a."
              },
              {
                "text": "Place 3 doom on Agenda 1a."
              },
            ]
          },
          {
            "text": "Add the following chaos tokens to the chaos bag for the remainder of the campaign.",
            "addToBag": true,
            "icons": true,
            "icon_list": [{
              "name": "elder_thing",
              "icon": "icon-elder_thing"
            }],
            "tokensToAdd": [{
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary",
              "quantity": 1
            }]
          },
          {
            "check": true,
            check_function(variables) {
              if (variables.past_midnight === true)
                return 0;
              else
                return 1;
            },
            "options": [{
                "text": "Each player discards 2 random cards from his or her starting hand."
              },
              {
                "text": ""
              }
            ]
          },
          {
            "check": true,
            check_function(variables) {
              if (variables.ghoul_priest_alive === true)
                return 0;
              else
                return 1;
            },
            "options": [{
                "text": "Shuffle \"The Ghoul Priest\" into the encounter deck."
              },
              {
                "text": ""
              }
            ]
          }
        ],

        "resolution_checks": [{
            "type": Number,
            "text": "Victory Display",
            "default": 0
          },
          {
            "type": Boolean,
            "text": "Is the Ghoul Priest alive?",
            "default": false
          }
        ],
        "resolution": [{
            "id": 0,
            "title": "no resolution",
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "Too frightened to face her fate, Lita flees into the night. She realizes that she has failed and Umôrdhoth's vengeance will pursue her wherever she goes. Thee creature's tendrils spread throughout the city of Arkham, searching for her. It lurks in the darkness of every corner, tugging at the seams of reality. But Lita is nowhere to be found, so the creature dwells in the shadows to this day, searching... Killing...",
            "steps": [{
                "text": "Arkham succumbed to Umôrdhoth's terrible vengeance.",
                "addToLog": true
              },
              {
                "text": "The investigators lost the campaign.",
                "addToLog": true
              }
            ]
          },
          {
            "id": 1,
            "title": "resolution 1",
            "header": "Resolution 1",
            "description": "You have managed to prevent the cult om summoning its master. Although you’re unsure what would have happened had the cult succeeded, you're relieved that, at least for the time being, Arkham is safe. You capture as many cultists as you can find, but very few townspeople believe your tale. Perhaps it was all in your head, after all...",
            "steps": [{
                "text": "The ritual to summon Umôrdhoth was broken",
                "addToLog": true
              },
              {
                "text": "Each investigator has suffered 2 mental trauma, as he or she never fully recovers from their ordeal.",
                "addToLog": false
              },
              {
                "text": "Each investigator earns 5 bonus experience, as he or she has saved Arkham from a terrible fate.",
                "addToLog": false
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              },
              {
                "text": "The investigators have won the campaign!",
                "addToLog": true
              }
            ]
          },
          {
            "id": 2,
            "title": "resolution 2",
            "header": "Resolution 2",
            "description": "Through force of arms and strength of will, you are somehow able to harm Umôrdhoth enough to send it reeling back to the dimension om which it emerged. Warmth and light return to the woods as the void-like mass is sucked in upon itself, vanishing in an instant. You aren’t sure if a being such as this can be killed, but for the time being it seems to have retreated. As their master vanishes, the ghouls nearby climb into the open pit below, fleeing with terrible cries and shrieks. You have stopped an evil plot, but the fight has taken its toll on your body and mind. Worse, you can’t help but feel insignificant in the face of the world's mysteries. What other terrors exist in the deep, dark corners of reality?",
            "steps": [{
                "text": "The invesigators repelled Umôrdhoth",
                "addToLog": true
              },
              {
                "text": "Each investigator has suffered 2 physical trauma and 2 mental trauma, as the fight against Umôrdhoth has taken its toll on his or her body and mind.",
                "addToLog": false
              },
              {
                "text": "Each investigator earns 10 bonus experience, as he or she has triumphed in battle against a truly terrible foe.",
                "addToLog": false
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              },
              {
                "text": "The investigators have won the campaign!",
                "addToLog": true
              }
            ]
          },

          {
            "id": 3,
            "title": "resolution 3",
            "header": "Resolution 3",
            "description": "In the face of this horror, you don’t believe there is anything you can do to stop it. You have but one hope if you are to survive. You turn on Lita and throw her at the terrible monstrosity, watching in dread as its swirling void-like mass consumes her. She cries out in torment as the life is sucked om her body. Umôrdhoth... Umôrdhoth...” the cultists chant.  Lita Chantler vanishes without a trace. For a moment, you fear that the creature will now turn on you, but you hear one of the cultists say, \"Umôrdhoth is a just god who claims only the guilty and the dead. Go, and you shall be spared.\" The swirling mass vanishes, and warmth and light return to the woods. The cultists slink away, leaving you alive. Lita's last moments are forever etched upon your memory.",
            "steps": [{
                "text": "The investigators sacrificed Lita Chantler to Umôrdhoth.",
                "addToLog": true
              },
              {
                "text": "Each investigator has suffered 2 physical trauma and 2 mental trauma, as the mere sight of Umôrdhoth has taken its toll on his or her body and mind.",
                "addToLog": false
              },
              {
                "text": "The guilt over sacrificing Lita forever haunts your memory. A random madness weakness has been added to your deck.",
                "addToLog": true
              },
              {
                "id": "victory_display",
                "varLinked": true,
                var_function(app_state, id) {
                  if (app_state.hasOwnProperty(id)) {
                    let newText = "Experience earned from victory display: " + app_state[id];
                    return newText;
                  }
                }
              },
              {
                "text": "The investigators have survived, but their actions weigh heavily on their consciences.",
                "addToLog": true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Return to the Dunwich Legacy",
    code: "return_to_the_dunwich_legacy",
    color_code: "danger",
    icon: "icon-return_to_the_dunwich_legacy",
    campaign_variables: {
      active: false,
      campaignRef: 2,
      current_section: 0,
      current_scenario: 0,
      current_interlude: 0,
      current_state: "",
      number_of_players: 1,
      participating_investigators: [],
      participating_players: [],
      difficulty: 0,
      chaos_bag: [],
      campaign_path: [{
          "section": 1,
          "section_type": "setup",
          "section_color": "warning",
          "section_key": "SETUP",
          "title": "Scenario Setup"
        },
        {
          "section": 2,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S1",
          "title": "The Curse of the Rougarou"
        },
        {
          "section": 5,
          "section_type": "finish",
          "section_color": "info",
          "section_key": "FINISH",
          "title": "Scenario Finish"
        }
      ],
      campaign_log: []
    },
    introduction_title: "Terror Grips New Orleans!",
    introduction: "<em>Minnie Klein, your contact at the 'Arkham Advertiser', had slipped you a draft of the article over a cup of coffee at Velma's Diner.  It would have gone to print had Doyle Jeffries, the lead editor, not scoffed at the concept.  \"I believe his exact words were, 'I ain't printing the ravings of some Voodoo lunatic and passing it off as news,\" she explained.  From the sly grin spreading across her face, you could tell she smelled a story.<br></br>The headline was sensationalist.  Three killings in nine days was enough to spook a town, sure.  But you doubt all of New Orleans is gripped by terror, or even knows about the killings.  Still, something piqued your interest.  \"Lady Espirit,\" the Voodoo priestess from the article, claimed that a malign curse had taken root in the bayou.<br></br>\"There's something to this, isn't there?  I know that look,\" Minnie said.  You weren't sure.  If Lady Espirit was right, this \"roux-ga-roux\" wouldn't stop killing at three, that's for sure.  But curses?  Wolf-people?  How could such things be real?  Only one way to find out.  You put on your coat and head for the Northside Station...</em>",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up the Curse of the Rougarou, perform the following steps in order:",
      "setup_steps": [{
          "number": 1,
          "text": "Choose number of players"
        },
        {
          "number": 2,
          "text": "Assemble investigator decks"
        },
        {
          "number": 3,
          "text": "Choose difficulty level"
        },
        {
          "number": 4,
          "text": "Assemble the campaign chaos bag."
        },
      ],
      "chaos_bag_setup": [{
          "difficulty": "Normal",
          "difficulty_text": "I want a challenge",
          "difficulty_color": "success",
          "tokens": [{
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 6,
              "token": "-5"
            },
            {
              "tokenID": 7,
              "token": "-6"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 12,
              "token": "tablet",
              "symbol": true,
              "icon": "icon-tablet",
              "color": "warning"
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        },
        {
          "difficulty": "Hard",
          "difficulty_text": "I want a true nightmare",
          "difficulty_color": "danger",
          "tokens": [
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 7,
              "token": "-6",
              "quantity": 1
            },
            {
              "tokenID": 9,
              "token": "-8",
              "quantity": 1
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up The Curse of the Rougarou"
    },
    "scenarios": [{
      "title": "The Curse of the Rougarou",
      "introductions": [
        {
          "number": 1,
          "text": "Minnie Klein, your contact at the 'Arkham Advertiser', had slipped you a draft of the article over a cup of coffee at Velma's Diner.  It would have gone to print had Doyle Jeffries, the lead editor, not scoffed at the concept.  \"I believe his exact words were, 'I ain't printing the ravings of some Voodoo lunatic and passing it off as news,\" she explained.  From the sly grin spreading across her face, you could tell she smelled a story."
        },
        {
          "number": 2,
          "text": "The headline was sensationalist.  Three killings in nine days was enough to spook a town, sure.  But you doubt all of New Orleans is gripped by terror, or even knows about the killings.  Still, something piqued your interest.  \"Lady Espirit,\" the Voodoo priestess from the article, claimed that a malign curse had taken root in the bayou.\""
        },
        {
          "number": 3,
          "text": "There's something to this, isn't there?  I know that look,\" Minnie said.  You weren't sure.  If Lady Espirit was right, this \"roux-ga-roux\" wouldn't stop killing at three, that's for sure.  But curses?  Wolf-people?  How could such things be real?  Only one way to find out.  You put on your coat and head for the Northside Station..."
        },
      ],
      "setup": [
        {
          "text": "Gather all cards from the following encounter sets: Curse of the Rougarou, The Bayou. These sets are indicated by the following icons:",
          "icons": true,
          "icon_list": [{
              "name": "curse_of_the_rougarou",
              "icon": "icon-curse_of_the_rougarou"
            },
            {
              "name": "the_bayou",
              "icon": "icon-the_bayou"
            }
          ]
        },
        {
          "text": "Set the Curse of the Rougarou encounter set aside, out of play."
        },
        {
          "text": "Sort each of the locations into 4 piles, by trait (New Orleans, Riverside, Wilderness and Unhallowed)."
        },
        {
          "text": "Randomly choose 1 of these piles and remove these locations from the game."
        },
        {
          "text": "Randomly choose another 1 of these piles and put those locations into play."
        },
        {
          "text": "Set each location in the other two piles aside, out of play."
        },
        {
          "text": "Each investigator begins play at a Bayou location in play."
        },
        {
          "text": "Set the following cards aside, out of play:  Lady Espirit, Bear Trap and Fishing Net."
        },
        {
          "text": "Shuffle the remainder of the encounter cards to form the encounter deck."
        }
      ],
      "resolution_checks": [{
        "id": "victory_display",
        "type": Number,
        "text": "Victory Display",
        "default": 0
      }],
      "resolution": [
        {
          "id": 0,
          "title": "no resolution",
          "header": "If no resolution was reached (each investigator resigned or was defeated):",
          "description": "Somehow, you manage to make it back to safety before daybreak, resting until late in the afternoon.  It isn't until you seek out Lady Espirit the next day that you realise who last night's victim was.  With a heavy heart and an unshakable dread, you choose to bury her body instead of contacting the authorities - the less people who delve this deep into the bayou, the better.",
          "steps": [
            {
              "text": "The Rougarou continues to haunt the bayou.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 1,
          "title": "resolution 1",
          "header": "Resolution 1:",
          "description": "Somehow, you manage to make it back to safety before daybreak, resting until late in the afternoon.  It isn't until you seek out Lady Espirit the next day that you realise who last night's victim was.  With a heavy heart and an unshakable dread, you choose to bury her body instead of contacting the authorities - the less people who delve this deep into the bayou, the better.",
          "steps": [
            {
              "text": "The Rougarou continues to haunt the bayou.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 2,
          "title": "resolution 2",
          "header": "Resolution 2:",
          "description": "The creature gives a pitiful wail as dark, miry blood oozes from its wounds.  By the time its body collapses into the mud, it has transformed back into its original form - the form of a young, dark-skinned man, his expression twisted in agony.  You bring his body back to Lady Espirit, and she works her strange magic, removing the stain of the curse from the land.  \"Call on me, should ever need my help,\" the mysterious woman tells you.",
          "steps": [
            {
              "text": "The Rougarou is destroyed, and the curse is lifted.",
              "addToLog": true
            },
            {
              "text": "Remove the Curse of the Rougarou weakness from it's bearer's deck.",
              "addToLog": false
            },
            {
              "text": "Any one investigator may choose to add Lady Espirit to their deck.  This card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 3,
          "title": "resolution 3",
          "header": "Resolution 3:",
          "description": "Somehow, you have managed to quell the rage and bloodlust of the curse within the creature, and in moments the shape of a young, dark-skinned man stands before you, panting and sweating.  He seems to only just now understand everything he's done, and agrees to flee to a secluded corner of the earth, where he can harm no one.  However, the curse lives on.  He sees it in your eyes and grips your arm tightly.  \"Don't let it take control,\" he warns.  \"I was weak, but you - I can tell you are strong.  Control the curse as I could not.\"",
          "steps": [
            {
              "text": "The Rougarou escaped, and you embraced the curse.",
              "addToLog": true
            },
            {
              "text": "The bearer of the Curse of the Rougarou weakness must add Monstrous Transformation to their deck.  This card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
      ]
    }]
  },
  {
    id: 5,
    name: "Carnevale of Horrors",
    code: "carnevale",
    color_code: "primary",
    icon: "icon-carnevale",
    campaign_variables: {
      active: false,
      campaignRef: 5,
      current_section: 0,
      current_scenario: 0,
      current_interlude: 0,
      current_state: "",
      number_of_players: 1,
      participating_investigators: [],
      participating_players: [],
      difficulty: 0,
      chaos_bag: [],
      campaign_path: [{
          "section": 1,
          "section_type": "setup",
          "section_color": "warning",
          "section_key": "SETUP",
          "title": "Scenario Setup"
        },
        {
          "section": 2,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S1",
          "title": "Carnevale of Horrors"
        },
        {
          "section": 5,
          "section_type": "finish",
          "section_color": "info",
          "section_key": "FINISH",
          "title": "Scenario Finish"
        }
      ],
      campaign_log: [],
      revelers_under_act: 0,
      revelers_under_agenda: 0
    },
    introduction_title: "The Carnevale is Coming...",
    introduction: "<em>\"Look,\" Sheriff Engel insists, \"I know it sounds crazy, but that's really all there is to it.\"  He sighs and sits back down, pouring a cup of joe for you, and one for himself.  \"A dame in Uptown spotted a cracked egg wearing this mask, and holdin' a bloody butcher's cleaver,\" he says, motioning to the black leather mask sitting on his desk.  It has a comically long nose and a strange symbol scrawled in yellow on its forehead.<br></br>\"So, she calls it in.  My boys and I picked him up on the corner of Saltonstall & Garrison.\"  The sheriff's jaw clenches and his brows furrow as he recounts the story.  \"Fella did nothing but laugh as we slapped the bracelets on him.  Called himself Zanni.  Said nothing except 'the carnival is coming,' whatever the hell that meant.  Wasn't until the next day we found the victim's body.  Defense wanted him in a straitjacket.  We were happy to oblige.\"<br></br>There isn't much time to spare.  If your research is right, there is more to this case than meets the eye.  This \"Zanni\" wasn't talking about Darke's Carnival, but rather, the Carnevale of Venice, which begins just before the next full moon...</em>",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up Carnevale of Horrors, perform the following steps in order:",
      "setup_steps": [{
          "number": 1,
          "text": "Choose number of players"
        },
        {
          "number": 2,
          "text": "Assemble investigator decks"
        },
        {
          "number": 3,
          "text": "Choose difficulty level"
        },
        {
          "number": 4,
          "text": "Assemble the campaign chaos bag."
        },
      ],
      "chaos_bag_setup": [
        {
          "difficulty": "Normal",
          "difficulty_text": "I want a challenge",
          "difficulty_color": "success",
          "tokens": [{
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 7,
              "token": "-6"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 12,
              "token": "tablet",
              "symbol": true,
              "icon": "icon-tablet",
              "color": "warning"
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        },
        {
          "difficulty": "Hard",
          "difficulty_text": "I want a true nightmare",
          "difficulty_color": "danger",
          "tokens": [{
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 6,
              "token": "-5"
            },
            {
              "tokenID": 7,
              "token": "-6"
            },
            {
              "tokenID": 8,
              "token": "-7"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 12,
              "token": "tablet",
              "symbol": true,
              "icon": "icon-tablet",
              "color": "warning"
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up Carnevale of Horrors"
    },
    "scenarios": [{
      "title": "Carnevale of Horrors",
      "introductions": [
        {
          "number": 1,
          "text": "\"Look,\" Sheriff Engel insists, \"I know it sounds crazy, but that's really all there is to it.\"  He sighs and sits back down, pouring a cup of joe for you, and one for himself.  \"A dame in Uptown spotted a cracked egg wearing this mask, and holdin' a bloody butcher's cleaver,\" he says, motioning to the black leather mask sitting on his desk.  It has a comically long nose and a strange symbol scrawled in yellow on its forehead."
        },
        {
          "number": 2,
          "text": "\"So, she calls it in.  My boys and I picked him up on the corner of Saltonstall & Garrison.\"  The sheriff's jaw clenches and his brows furrow as he recounts the story.  \"Fella did nothing but laugh as we slapped the bracelets on him.  Called himself Zanni.  Said nothing except 'the carnival is coming,' whatever the hell that meant.  Wasn't until the next day we found the victim's body.  Defense wanted him in a straitjacket.  We were happy to oblige.\""
        },
        {
          "number": 3,
          "text": "There isn't much time to spare.  If your research is right, there is more to this case than meets the eye.  This \"Zanni\" wasn't talking about Darke's Carnival, but rather, the Carnevale of Venice, which begins just before the next full moon..."
        },
      ],
      "setup": [
        {
          "text": "Gather all cards from the Carnevale of Horrors encounter set, indicated by this icon:",
          "icons": true,
          "icon_list": [{
              "name": "carnevale",
              "icon": "icon-carnevale"
            }
          ]
        },
        {
          "text": "Choose one location at random and remove it from the game.  If San Marco Basilica or Canal-side is chosen, randomly choose a different location instead."
        },
        {
          "text": "Put the other 8 locations into play, in a random circular formation."
        },
        {
          "text": "Each investigator begins play at San Marco Basilica."
        },
        {
          "text": "Put Abbess Allegria Di Biase into play at San Marco Basilica."
        },
        {
          "text": "Shuffle the 7 Masked Carnevale-Goers and put 1 into play at each location other than San Marco Basilica, Masked Carnevale-Goer side up.  Do not look at their other sides."
        },
        {
          "text": "Set the following cards aside, out of play:  Cnidathqua, Pantalone, Medico Della Pesta, Bauta, Gilded Volto."
        },
        {
          "text": "Shuffle the remainder of the encounter cards to form the encounter deck."
        },
        {
          "text": "In this scenario, locations are placed in a circle.  Due to the parade during the Carnevale, each location is only connected to the location next to it in the clockwise direction.  This means investigators and monsters may only travel, and count the nearest location, in the clockwise direction, unless otherwise directed."
        },
        {
          "text": "Some cards will instruct you to find the nearest location in the counter-clockwise direction.  This is an exception to the above rule, and should be followed as though locations are connected counter-clockwise."
        },
        {
          "text": "The location \"across from\" another location is the farthest location, equidistant in both clockwise and counter-clockwise directions.  For the purposes of this scenario, \"across from your location\" and \"across from you\" have the same meaning."
        },
      ],
      "resolution_checks": [
        {
          "id": "victory_display",
          "type": Number,
          "text": "Victory Display",
          "default": 0
        },
        {
          "id": "revelers_under_act",
          "type": Number,
          "text": "Innocent Revelers Under Act Deck",
          "default": 0
        },
        {
          "id": "revelers_under_agenda",
          "type": Number,
          "text": "Innocent Revelers Under Agenda Deck",
          "default": 0
        }
      ],
      "resolution": [
        {
          "id": 0,
          "title": "no resolution",
          "header": "If no resolution was reached (each investigator resigned or was defeated):",
          "description": "You sputter awake as an oar gently taps your shoulder.  \"Tutto bene?\" the gondolier holding the oar sayts with a concerned expression.  You nod, and drag yourself onto the docks from his gondola, drenched and aching all over.  The city is devastated.  Most of the boats in the canal are wrecked, and the streets are covered not in confetti, but in blood...",
          "steps": [
            {
              "text": "Many were sacrificed to Cnidathqua during the Carnevale.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            },
            {
              "text": "-- Additional Rewards --",
              "addToLog": false
            },
            {
              "text": "In player order, each investigator may choose one of the following Mask cards to add to their deck:  Pantalone, Medico Della Pesta, Bauta or Gilded Volto.  The chosen card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
        			"text": "",
        			"varCheck": true,
        			var_check_function(variables, id)
        			{
        				if (variables["revelers_under_act"] <= 1)
                {
        				  let varText = "-- Sacrifice Made --";
        				  return varText;
  				      }
        				return null;
      			  }
      			},
            {
        			"text": "",
        			"varCheck": true,
        			var_check_function(variables, id)
        			{
        				if (variables["revelers_under_act"] <= 1)
                {
        				  let varText = "Too many lives were lost during the eclipse to stop the machinations of Cnidathqua's servants.  The best has been fed, its minions empowered.  You find yourself hoping you don't live long enough to see the fallout of your failure.";
        				  return varText;
  				      }
        				return null;
      			  }
      			},
            {
        			"text": "",
        			"varCheck": true,
        			var_check_function(variables, id)
        			{
        				if (variables["revelers_under_act"] <= 1)
                {
        				  let varText = "Each investigator searches the collection for a random basic Madness, Injury, or Monster weakness and adds it to their deck for the remainder of the campaign.";
        				  return varText;
  				      }
        				return null;
      			  }
      			}
          ]
        },
        {
          "id": 1,
          "title": "resolution 1",
          "header": "Resolution 1:",
          "description": "The city is still recovering from the events during the eclipse.  With nearly all evidence of the creature melted away by the hot sun, many attribute the violence during the Carnevale to local crime lord Cascio Di Boerio and his crew.  Those that know the truth know better than to speak of the elder creature that lives in Laguna Veneta.  With any luck, it's name will never be spoken again.",
          "steps": [
            {
              "text": "The sun banished Cnidathqua into the depths.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            },
            {
              "text": "-- Additional Rewards --",
              "addToLog": false
            },
            {
              "text": "In player order, each investigator may choose one of the following Mask cards to add to their deck:  Pantalone, Medico Della Pesta, Bauta or Gilded Volto.  The chosen card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
        			"text": "",
        			"varCheck": true,
        			var_check_function(variables, id)
        			{
        				if (variables["revelers_under_act"] === 0 && variables["revelers_under_agenda"] >= 1)
                {
        				  let varText = "-- Sacrifice Made --";
        				  return varText;
  				      }
        				return null;
      			  }
      			},
            {
        			"text": "",
        			"varCheck": true,
        			var_check_function(variables, id)
        			{
        				if (variables["revelers_under_act"] === 0 && variables["revelers_under_agenda"] >= 1)
                {
        				  let varText = "Too many lives were lost during the eclipse to stop the machinations of Cnidathqua's servants.  The best has been fed, its minions empowered.  You find yourself hoping you don't live long enough to see the fallout of your failure.";
        				  return varText;
  				      }
        				return null;
      			  }
      			},
            {
        			"text": "",
        			"varCheck": true,
        			var_check_function(variables, id)
        			{
        				if (variables["revelers_under_act"] <= 1)
                {
        				  let varText = "Each investigator searches the collection for a random basic Madness, Injury, or Monster weakness and adds it to their deck for the remainder of the campaign.";
        				  return varText;
  				      }
        				return null;
      			  }
      			},
            {
        			"text": "",
        			"varCheck": true,
        			var_check_function(variables, id)
        			{
        				if (variables["revelers_under_act"] >= 3 && variables["revelers_under_agenda"] === 0)
                {
        				  let varText = "-- Abbess Satisfied --";
        				  return varText;
  				      }
        				return null
      			  }
      			},
            {
        			"text": "",
        			"varCheck": true,
        			var_check_function(variables, id)
        			{
        				if (variables["revelers_under_act"] >= 3 && variables["revelers_under_agenda"] === 0)
                {
        				  let varText = "\"Grazie mille - thank you for all your help,\" Allegria says to you as you return to the basilica.  \"Thanks to you, there were few casualties.  I shudden to think what might have happened had you not arrived.  Should you ever require assistance, please do not hesitate to ask.\"";
        				  return varText;
  				      }
        				return null
      			  }
      			},
            {
        			"text": "",
        			"varCheck": true,
        			var_check_function(variables, id)
        			{
        				if (variables["revelers_under_act"] >= 3 && variables["revelers_under_agenda"] === 0)
                {
        				  let varText = "Any one investigator may choose to add Abbess Allegria Di Biase to their deck.  This card does not count toward that investigator's deck size.";
        				  return varText;
  				      }
        				return null
      			  }
      			}
          ]
        },
        {
          "id": 2,
          "title": "resolution 2",
          "header": "Resolution 2",
          "description": "The creature recoils as globules of it's jelly-like flesh rip and tear from it's body, splashing into the lagoon.  The chanting in the city plunges into mournful silence.  As you return to the canal-side streets, black feathers fall from the sky where bright confetti once fluttered.  You can only wonder how long it will take for the creature to recover.",
          "steps": [
            {
              "text": "Cnidathqua retreated to nurse its wounds.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            },

            {
              "text": "-- Additional Rewards --",
              "addToLog": false
            },
            {
              "text": "In player order, each investigator may choose one of the following Mask cards to add to their deck:  Pantalone, Medico Della Pesta, Bauta or Gilded Volto.  The chosen card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
        			"text": "",
        			"varCheck": true,
        			var_check_function(variables, id)
        			{
        				if (variables["revelers_under_act"] === 0 && variables["revelers_under_agenda"] >= 1)
                {
        				  let varText = "-- Sacrifice Made --";
        				  return varText;
  				      }
        				return null;
      			  }
      			},
            {
        			"text": "",
        			"varCheck": true,
        			var_check_function(variables, id)
        			{
        				if (variables["revelers_under_act"] === 0 && variables["revelers_under_agenda"] >= 1)
                {
        				  let varText = "Too many lives were lost during the eclipse to stop the machinations of Cnidathqua's servants.  The best has been fed, its minions empowered.  You find yourself hoping you don't live long enough to see the fallout of your failure.";
        				  return varText;
  				      }
        				return null;
      			  }
      			},
            {
        			"text": "",
        			"varCheck": true,
        			var_check_function(variables, id)
        			{
        				if (variables["revelers_under_act"] <= 1)
                {
        				  let varText = "Each investigator searches the collection for a random basic Madness, Injury, or Monster weakness and adds it to their deck for the remainder of the campaign.";
        				  return varText;
  				      }
        				return null;
      			  }
      			},
            {
        			"text": "",
        			"varCheck": true,
        			var_check_function(variables, id)
        			{
        				if (variables["revelers_under_act"] >= 3 && variables["revelers_under_agenda"] === 0)
                {
        				  let varText = "-- Abbess Satisfied --";
        				  return varText;
  				      }
        				return null
      			  }
      			},
            {
        			"text": "",
        			"varCheck": true,
        			var_check_function(variables, id)
        			{
        				if (variables["revelers_under_act"] >= 3 && variables["revelers_under_agenda"] === 0)
                {
        				  let varText = "\"Grazie mille - thank you for all your help,\" Allegria says to you as you return to the basilica.  \"Thanks to you, there were few casualties.  I shudden to think what might have happened had you not arrived.  Should you ever require assistance, please do not hesitate to ask.\"";
        				  return varText;
  				      }
        				return null
      			  }
      			},
            {
        			"text": "",
        			"varCheck": true,
        			var_check_function(variables, id)
        			{
        				if (variables["revelers_under_act"] >= 3 && variables["revelers_under_agenda"] === 0)
                {
        				  let varText = "Any one investigator may choose to add Abbess Allegria Di Biase to their deck.  This card does not count toward that investigator's deck size.";
        				  return varText;
  				      }
        				return null
      			  }
      			}
          ]
        }
      ]
    }]
  },
  {
    id: 6,
    name: "The Path to Carcosa",
    code: "carcosa",
    color_code: "warning",
    icon: "icon-carcosa",
    campaign_variables: {
      active: false,
      campaignRef: 2,
      current_section: 0,
      current_scenario: 0,
      current_interlude: 0,
      current_state: "",
      number_of_players: 1,
      participating_investigators: [],
      participating_players: [],
      difficulty: 0,
      chaos_bag: [],
      campaign_path: [{
          "section": 1,
          "section_type": "setup",
          "section_color": "warning",
          "section_key": "SETUP",
          "title": "Scenario Setup"
        },
        {
          "section": 2,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S1",
          "title": "The Curse of the Rougarou"
        },
        {
          "section": 5,
          "section_type": "finish",
          "section_color": "info",
          "section_key": "FINISH",
          "title": "Scenario Finish"
        }
      ],
      campaign_log: []
    },
    introduction_title: "Terror Grips New Orleans!",
    introduction: "<em>Minnie Klein, your contact at the 'Arkham Advertiser', had slipped you a draft of the article over a cup of coffee at Velma's Diner.  It would have gone to print had Doyle Jeffries, the lead editor, not scoffed at the concept.  \"I believe his exact words were, 'I ain't printing the ravings of some Voodoo lunatic and passing it off as news,\" she explained.  From the sly grin spreading across her face, you could tell she smelled a story.<br></br>The headline was sensationalist.  Three killings in nine days was enough to spook a town, sure.  But you doubt all of New Orleans is gripped by terror, or even knows about the killings.  Still, something piqued your interest.  \"Lady Espirit,\" the Voodoo priestess from the article, claimed that a malign curse had taken root in the bayou.<br></br>\"There's something to this, isn't there?  I know that look,\" Minnie said.  You weren't sure.  If Lady Espirit was right, this \"roux-ga-roux\" wouldn't stop killing at three, that's for sure.  But curses?  Wolf-people?  How could such things be real?  Only one way to find out.  You put on your coat and head for the Northside Station...</em>",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up the Curse of the Rougarou, perform the following steps in order:",
      "setup_steps": [{
          "number": 1,
          "text": "Choose number of players"
        },
        {
          "number": 2,
          "text": "Assemble investigator decks"
        },
        {
          "number": 3,
          "text": "Choose difficulty level"
        },
        {
          "number": 4,
          "text": "Assemble the campaign chaos bag."
        },
      ],
      "chaos_bag_setup": [{
          "difficulty": "Normal",
          "difficulty_text": "I want a challenge",
          "difficulty_color": "success",
          "tokens": [{
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 6,
              "token": "-5"
            },
            {
              "tokenID": 7,
              "token": "-6"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 12,
              "token": "tablet",
              "symbol": true,
              "icon": "icon-tablet",
              "color": "warning"
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        },
        {
          "difficulty": "Hard",
          "difficulty_text": "I want a true nightmare",
          "difficulty_color": "danger",
          "tokens": [
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 7,
              "token": "-6",
              "quantity": 1
            },
            {
              "tokenID": 9,
              "token": "-8",
              "quantity": 1
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up The Curse of the Rougarou"
    },
    "scenarios": [{
      "title": "The Curse of the Rougarou",
      "introductions": [
        {
          "number": 1,
          "text": "Minnie Klein, your contact at the 'Arkham Advertiser', had slipped you a draft of the article over a cup of coffee at Velma's Diner.  It would have gone to print had Doyle Jeffries, the lead editor, not scoffed at the concept.  \"I believe his exact words were, 'I ain't printing the ravings of some Voodoo lunatic and passing it off as news,\" she explained.  From the sly grin spreading across her face, you could tell she smelled a story."
        },
        {
          "number": 2,
          "text": "The headline was sensationalist.  Three killings in nine days was enough to spook a town, sure.  But you doubt all of New Orleans is gripped by terror, or even knows about the killings.  Still, something piqued your interest.  \"Lady Espirit,\" the Voodoo priestess from the article, claimed that a malign curse had taken root in the bayou.\""
        },
        {
          "number": 3,
          "text": "There's something to this, isn't there?  I know that look,\" Minnie said.  You weren't sure.  If Lady Espirit was right, this \"roux-ga-roux\" wouldn't stop killing at three, that's for sure.  But curses?  Wolf-people?  How could such things be real?  Only one way to find out.  You put on your coat and head for the Northside Station..."
        },
      ],
      "setup": [
        {
          "text": "Gather all cards from the following encounter sets: Curse of the Rougarou, The Bayou. These sets are indicated by the following icons:",
          "icons": true,
          "icon_list": [{
              "name": "curse_of_the_rougarou",
              "icon": "icon-curse_of_the_rougarou"
            },
            {
              "name": "the_bayou",
              "icon": "icon-the_bayou"
            }
          ]
        },
        {
          "text": "Set the Curse of the Rougarou encounter set aside, out of play."
        },
        {
          "text": "Sort each of the locations into 4 piles, by trait (New Orleans, Riverside, Wilderness and Unhallowed)."
        },
        {
          "text": "Randomly choose 1 of these piles and remove these locations from the game."
        },
        {
          "text": "Randomly choose another 1 of these piles and put those locations into play."
        },
        {
          "text": "Set each location in the other two piles aside, out of play."
        },
        {
          "text": "Each investigator begins play at a Bayou location in play."
        },
        {
          "text": "Set the following cards aside, out of play:  Lady Espirit, Bear Trap and Fishing Net."
        },
        {
          "text": "Shuffle the remainder of the encounter cards to form the encounter deck."
        }
      ],
      "resolution_checks": [{
        "id": "victory_display",
        "type": Number,
        "text": "Victory Display",
        "default": 0
      }],
      "resolution": [
        {
          "id": 0,
          "title": "no resolution",
          "header": "If no resolution was reached (each investigator resigned or was defeated):",
          "description": "Somehow, you manage to make it back to safety before daybreak, resting until late in the afternoon.  It isn't until you seek out Lady Espirit the next day that you realise who last night's victim was.  With a heavy heart and an unshakable dread, you choose to bury her body instead of contacting the authorities - the less people who delve this deep into the bayou, the better.",
          "steps": [
            {
              "text": "The Rougarou continues to haunt the bayou.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 1,
          "title": "resolution 1",
          "header": "Resolution 1:",
          "description": "Somehow, you manage to make it back to safety before daybreak, resting until late in the afternoon.  It isn't until you seek out Lady Espirit the next day that you realise who last night's victim was.  With a heavy heart and an unshakable dread, you choose to bury her body instead of contacting the authorities - the less people who delve this deep into the bayou, the better.",
          "steps": [
            {
              "text": "The Rougarou continues to haunt the bayou.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 2,
          "title": "resolution 2",
          "header": "Resolution 2:",
          "description": "The creature gives a pitiful wail as dark, miry blood oozes from its wounds.  By the time its body collapses into the mud, it has transformed back into its original form - the form of a young, dark-skinned man, his expression twisted in agony.  You bring his body back to Lady Espirit, and she works her strange magic, removing the stain of the curse from the land.  \"Call on me, should ever need my help,\" the mysterious woman tells you.",
          "steps": [
            {
              "text": "The Rougarou is destroyed, and the curse is lifted.",
              "addToLog": true
            },
            {
              "text": "Remove the Curse of the Rougarou weakness from it's bearer's deck.",
              "addToLog": false
            },
            {
              "text": "Any one investigator may choose to add Lady Espirit to their deck.  This card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 3,
          "title": "resolution 3",
          "header": "Resolution 3:",
          "description": "Somehow, you have managed to quell the rage and bloodlust of the curse within the creature, and in moments the shape of a young, dark-skinned man stands before you, panting and sweating.  He seems to only just now understand everything he's done, and agrees to flee to a secluded corner of the earth, where he can harm no one.  However, the curse lives on.  He sees it in your eyes and grips your arm tightly.  \"Don't let it take control,\" he warns.  \"I was weak, but you - I can tell you are strong.  Control the curse as I could not.\"",
          "steps": [
            {
              "text": "The Rougarou escaped, and you embraced the curse.",
              "addToLog": true
            },
            {
              "text": "The bearer of the Curse of the Rougarou weakness must add Monstrous Transformation to their deck.  This card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
      ]
    }]
  },
  {
    id: 7,
    name: "Labyrinths of Lunacy",
    code: "lol",
    color_code: "primary",
    icon: "icon-lol",
    campaign_variables: {
      active: false,
      campaignRef: 2,
      current_section: 0,
      current_scenario: 0,
      current_interlude: 0,
      current_state: "",
      number_of_players: 1,
      participating_investigators: [],
      participating_players: [],
      difficulty: 0,
      chaos_bag: [],
      campaign_path: [{
          "section": 1,
          "section_type": "setup",
          "section_color": "warning",
          "section_key": "SETUP",
          "title": "Scenario Setup"
        },
        {
          "section": 2,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S1",
          "title": "The Curse of the Rougarou"
        },
        {
          "section": 5,
          "section_type": "finish",
          "section_color": "info",
          "section_key": "FINISH",
          "title": "Scenario Finish"
        }
      ],
      campaign_log: []
    },
    introduction_title: "Terror Grips New Orleans!",
    introduction: "<em>Minnie Klein, your contact at the 'Arkham Advertiser', had slipped you a draft of the article over a cup of coffee at Velma's Diner.  It would have gone to print had Doyle Jeffries, the lead editor, not scoffed at the concept.  \"I believe his exact words were, 'I ain't printing the ravings of some Voodoo lunatic and passing it off as news,\" she explained.  From the sly grin spreading across her face, you could tell she smelled a story.<br></br>The headline was sensationalist.  Three killings in nine days was enough to spook a town, sure.  But you doubt all of New Orleans is gripped by terror, or even knows about the killings.  Still, something piqued your interest.  \"Lady Espirit,\" the Voodoo priestess from the article, claimed that a malign curse had taken root in the bayou.<br></br>\"There's something to this, isn't there?  I know that look,\" Minnie said.  You weren't sure.  If Lady Espirit was right, this \"roux-ga-roux\" wouldn't stop killing at three, that's for sure.  But curses?  Wolf-people?  How could such things be real?  Only one way to find out.  You put on your coat and head for the Northside Station...</em>",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up the Curse of the Rougarou, perform the following steps in order:",
      "setup_steps": [{
          "number": 1,
          "text": "Choose number of players"
        },
        {
          "number": 2,
          "text": "Assemble investigator decks"
        },
        {
          "number": 3,
          "text": "Choose difficulty level"
        },
        {
          "number": 4,
          "text": "Assemble the campaign chaos bag."
        },
      ],
      "chaos_bag_setup": [{
          "difficulty": "Normal",
          "difficulty_text": "I want a challenge",
          "difficulty_color": "success",
          "tokens": [{
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 6,
              "token": "-5"
            },
            {
              "tokenID": 7,
              "token": "-6"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 12,
              "token": "tablet",
              "symbol": true,
              "icon": "icon-tablet",
              "color": "warning"
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        },
        {
          "difficulty": "Hard",
          "difficulty_text": "I want a true nightmare",
          "difficulty_color": "danger",
          "tokens": [
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 7,
              "token": "-6",
              "quantity": 1
            },
            {
              "tokenID": 9,
              "token": "-8",
              "quantity": 1
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up The Curse of the Rougarou"
    },
    "scenarios": [{
      "title": "The Curse of the Rougarou",
      "introductions": [
        {
          "number": 1,
          "text": "Minnie Klein, your contact at the 'Arkham Advertiser', had slipped you a draft of the article over a cup of coffee at Velma's Diner.  It would have gone to print had Doyle Jeffries, the lead editor, not scoffed at the concept.  \"I believe his exact words were, 'I ain't printing the ravings of some Voodoo lunatic and passing it off as news,\" she explained.  From the sly grin spreading across her face, you could tell she smelled a story."
        },
        {
          "number": 2,
          "text": "The headline was sensationalist.  Three killings in nine days was enough to spook a town, sure.  But you doubt all of New Orleans is gripped by terror, or even knows about the killings.  Still, something piqued your interest.  \"Lady Espirit,\" the Voodoo priestess from the article, claimed that a malign curse had taken root in the bayou.\""
        },
        {
          "number": 3,
          "text": "There's something to this, isn't there?  I know that look,\" Minnie said.  You weren't sure.  If Lady Espirit was right, this \"roux-ga-roux\" wouldn't stop killing at three, that's for sure.  But curses?  Wolf-people?  How could such things be real?  Only one way to find out.  You put on your coat and head for the Northside Station..."
        },
      ],
      "setup": [
        {
          "text": "Gather all cards from the following encounter sets: Curse of the Rougarou, The Bayou. These sets are indicated by the following icons:",
          "icons": true,
          "icon_list": [{
              "name": "curse_of_the_rougarou",
              "icon": "icon-curse_of_the_rougarou"
            },
            {
              "name": "the_bayou",
              "icon": "icon-the_bayou"
            }
          ]
        },
        {
          "text": "Set the Curse of the Rougarou encounter set aside, out of play."
        },
        {
          "text": "Sort each of the locations into 4 piles, by trait (New Orleans, Riverside, Wilderness and Unhallowed)."
        },
        {
          "text": "Randomly choose 1 of these piles and remove these locations from the game."
        },
        {
          "text": "Randomly choose another 1 of these piles and put those locations into play."
        },
        {
          "text": "Set each location in the other two piles aside, out of play."
        },
        {
          "text": "Each investigator begins play at a Bayou location in play."
        },
        {
          "text": "Set the following cards aside, out of play:  Lady Espirit, Bear Trap and Fishing Net."
        },
        {
          "text": "Shuffle the remainder of the encounter cards to form the encounter deck."
        }
      ],
      "resolution_checks": [{
        "id": "victory_display",
        "type": Number,
        "text": "Victory Display",
        "default": 0
      }],
      "resolution": [
        {
          "id": 0,
          "title": "no resolution",
          "header": "If no resolution was reached (each investigator resigned or was defeated):",
          "description": "Somehow, you manage to make it back to safety before daybreak, resting until late in the afternoon.  It isn't until you seek out Lady Espirit the next day that you realise who last night's victim was.  With a heavy heart and an unshakable dread, you choose to bury her body instead of contacting the authorities - the less people who delve this deep into the bayou, the better.",
          "steps": [
            {
              "text": "The Rougarou continues to haunt the bayou.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 1,
          "title": "resolution 1",
          "header": "Resolution 1:",
          "description": "Somehow, you manage to make it back to safety before daybreak, resting until late in the afternoon.  It isn't until you seek out Lady Espirit the next day that you realise who last night's victim was.  With a heavy heart and an unshakable dread, you choose to bury her body instead of contacting the authorities - the less people who delve this deep into the bayou, the better.",
          "steps": [
            {
              "text": "The Rougarou continues to haunt the bayou.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 2,
          "title": "resolution 2",
          "header": "Resolution 2:",
          "description": "The creature gives a pitiful wail as dark, miry blood oozes from its wounds.  By the time its body collapses into the mud, it has transformed back into its original form - the form of a young, dark-skinned man, his expression twisted in agony.  You bring his body back to Lady Espirit, and she works her strange magic, removing the stain of the curse from the land.  \"Call on me, should ever need my help,\" the mysterious woman tells you.",
          "steps": [
            {
              "text": "The Rougarou is destroyed, and the curse is lifted.",
              "addToLog": true
            },
            {
              "text": "Remove the Curse of the Rougarou weakness from it's bearer's deck.",
              "addToLog": false
            },
            {
              "text": "Any one investigator may choose to add Lady Espirit to their deck.  This card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 3,
          "title": "resolution 3",
          "header": "Resolution 3:",
          "description": "Somehow, you have managed to quell the rage and bloodlust of the curse within the creature, and in moments the shape of a young, dark-skinned man stands before you, panting and sweating.  He seems to only just now understand everything he's done, and agrees to flee to a secluded corner of the earth, where he can harm no one.  However, the curse lives on.  He sees it in your eyes and grips your arm tightly.  \"Don't let it take control,\" he warns.  \"I was weak, but you - I can tell you are strong.  Control the curse as I could not.\"",
          "steps": [
            {
              "text": "The Rougarou escaped, and you embraced the curse.",
              "addToLog": true
            },
            {
              "text": "The bearer of the Curse of the Rougarou weakness must add Monstrous Transformation to their deck.  This card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
      ]
    }]
  },
  {
    id: 8,
    name: "The Forgotten Age",
    code: "the_forgotten_age",
    color_code: "warning",
    icon: "icon-the_forgotten_age",
    campaign_variables: {
      active: false,
      campaignRef: 2,
      current_section: 0,
      current_scenario: 0,
      current_interlude: 0,
      current_state: "",
      number_of_players: 1,
      participating_investigators: [],
      participating_players: [],
      difficulty: 0,
      chaos_bag: [],
      campaign_path: [{
          "section": 1,
          "section_type": "setup",
          "section_color": "warning",
          "section_key": "SETUP",
          "title": "Scenario Setup"
        },
        {
          "section": 2,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S1",
          "title": "The Curse of the Rougarou"
        },
        {
          "section": 5,
          "section_type": "finish",
          "section_color": "info",
          "section_key": "FINISH",
          "title": "Scenario Finish"
        }
      ],
      campaign_log: []
    },
    introduction_title: "Terror Grips New Orleans!",
    introduction: "<em>Minnie Klein, your contact at the 'Arkham Advertiser', had slipped you a draft of the article over a cup of coffee at Velma's Diner.  It would have gone to print had Doyle Jeffries, the lead editor, not scoffed at the concept.  \"I believe his exact words were, 'I ain't printing the ravings of some Voodoo lunatic and passing it off as news,\" she explained.  From the sly grin spreading across her face, you could tell she smelled a story.<br></br>The headline was sensationalist.  Three killings in nine days was enough to spook a town, sure.  But you doubt all of New Orleans is gripped by terror, or even knows about the killings.  Still, something piqued your interest.  \"Lady Espirit,\" the Voodoo priestess from the article, claimed that a malign curse had taken root in the bayou.<br></br>\"There's something to this, isn't there?  I know that look,\" Minnie said.  You weren't sure.  If Lady Espirit was right, this \"roux-ga-roux\" wouldn't stop killing at three, that's for sure.  But curses?  Wolf-people?  How could such things be real?  Only one way to find out.  You put on your coat and head for the Northside Station...</em>",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up the Curse of the Rougarou, perform the following steps in order:",
      "setup_steps": [{
          "number": 1,
          "text": "Choose number of players"
        },
        {
          "number": 2,
          "text": "Assemble investigator decks"
        },
        {
          "number": 3,
          "text": "Choose difficulty level"
        },
        {
          "number": 4,
          "text": "Assemble the campaign chaos bag."
        },
      ],
      "chaos_bag_setup": [{
          "difficulty": "Normal",
          "difficulty_text": "I want a challenge",
          "difficulty_color": "success",
          "tokens": [{
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 6,
              "token": "-5"
            },
            {
              "tokenID": 7,
              "token": "-6"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 12,
              "token": "tablet",
              "symbol": true,
              "icon": "icon-tablet",
              "color": "warning"
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        },
        {
          "difficulty": "Hard",
          "difficulty_text": "I want a true nightmare",
          "difficulty_color": "danger",
          "tokens": [
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 7,
              "token": "-6",
              "quantity": 1
            },
            {
              "tokenID": 9,
              "token": "-8",
              "quantity": 1
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up The Curse of the Rougarou"
    },
    "scenarios": [{
      "title": "The Curse of the Rougarou",
      "introductions": [
        {
          "number": 1,
          "text": "Minnie Klein, your contact at the 'Arkham Advertiser', had slipped you a draft of the article over a cup of coffee at Velma's Diner.  It would have gone to print had Doyle Jeffries, the lead editor, not scoffed at the concept.  \"I believe his exact words were, 'I ain't printing the ravings of some Voodoo lunatic and passing it off as news,\" she explained.  From the sly grin spreading across her face, you could tell she smelled a story."
        },
        {
          "number": 2,
          "text": "The headline was sensationalist.  Three killings in nine days was enough to spook a town, sure.  But you doubt all of New Orleans is gripped by terror, or even knows about the killings.  Still, something piqued your interest.  \"Lady Espirit,\" the Voodoo priestess from the article, claimed that a malign curse had taken root in the bayou.\""
        },
        {
          "number": 3,
          "text": "There's something to this, isn't there?  I know that look,\" Minnie said.  You weren't sure.  If Lady Espirit was right, this \"roux-ga-roux\" wouldn't stop killing at three, that's for sure.  But curses?  Wolf-people?  How could such things be real?  Only one way to find out.  You put on your coat and head for the Northside Station..."
        },
      ],
      "setup": [
        {
          "text": "Gather all cards from the following encounter sets: Curse of the Rougarou, The Bayou. These sets are indicated by the following icons:",
          "icons": true,
          "icon_list": [{
              "name": "curse_of_the_rougarou",
              "icon": "icon-curse_of_the_rougarou"
            },
            {
              "name": "the_bayou",
              "icon": "icon-the_bayou"
            }
          ]
        },
        {
          "text": "Set the Curse of the Rougarou encounter set aside, out of play."
        },
        {
          "text": "Sort each of the locations into 4 piles, by trait (New Orleans, Riverside, Wilderness and Unhallowed)."
        },
        {
          "text": "Randomly choose 1 of these piles and remove these locations from the game."
        },
        {
          "text": "Randomly choose another 1 of these piles and put those locations into play."
        },
        {
          "text": "Set each location in the other two piles aside, out of play."
        },
        {
          "text": "Each investigator begins play at a Bayou location in play."
        },
        {
          "text": "Set the following cards aside, out of play:  Lady Espirit, Bear Trap and Fishing Net."
        },
        {
          "text": "Shuffle the remainder of the encounter cards to form the encounter deck."
        }
      ],
      "resolution_checks": [{
        "id": "victory_display",
        "type": Number,
        "text": "Victory Display",
        "default": 0
      }],
      "resolution": [
        {
          "id": 0,
          "title": "no resolution",
          "header": "If no resolution was reached (each investigator resigned or was defeated):",
          "description": "Somehow, you manage to make it back to safety before daybreak, resting until late in the afternoon.  It isn't until you seek out Lady Espirit the next day that you realise who last night's victim was.  With a heavy heart and an unshakable dread, you choose to bury her body instead of contacting the authorities - the less people who delve this deep into the bayou, the better.",
          "steps": [
            {
              "text": "The Rougarou continues to haunt the bayou.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 1,
          "title": "resolution 1",
          "header": "Resolution 1:",
          "description": "Somehow, you manage to make it back to safety before daybreak, resting until late in the afternoon.  It isn't until you seek out Lady Espirit the next day that you realise who last night's victim was.  With a heavy heart and an unshakable dread, you choose to bury her body instead of contacting the authorities - the less people who delve this deep into the bayou, the better.",
          "steps": [
            {
              "text": "The Rougarou continues to haunt the bayou.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 2,
          "title": "resolution 2",
          "header": "Resolution 2:",
          "description": "The creature gives a pitiful wail as dark, miry blood oozes from its wounds.  By the time its body collapses into the mud, it has transformed back into its original form - the form of a young, dark-skinned man, his expression twisted in agony.  You bring his body back to Lady Espirit, and she works her strange magic, removing the stain of the curse from the land.  \"Call on me, should ever need my help,\" the mysterious woman tells you.",
          "steps": [
            {
              "text": "The Rougarou is destroyed, and the curse is lifted.",
              "addToLog": true
            },
            {
              "text": "Remove the Curse of the Rougarou weakness from it's bearer's deck.",
              "addToLog": false
            },
            {
              "text": "Any one investigator may choose to add Lady Espirit to their deck.  This card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 3,
          "title": "resolution 3",
          "header": "Resolution 3:",
          "description": "Somehow, you have managed to quell the rage and bloodlust of the curse within the creature, and in moments the shape of a young, dark-skinned man stands before you, panting and sweating.  He seems to only just now understand everything he's done, and agrees to flee to a secluded corner of the earth, where he can harm no one.  However, the curse lives on.  He sees it in your eyes and grips your arm tightly.  \"Don't let it take control,\" he warns.  \"I was weak, but you - I can tell you are strong.  Control the curse as I could not.\"",
          "steps": [
            {
              "text": "The Rougarou escaped, and you embraced the curse.",
              "addToLog": true
            },
            {
              "text": "The bearer of the Curse of the Rougarou weakness must add Monstrous Transformation to their deck.  This card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
      ]
    }]
  },
  {
    id: 9,
    name: "Guardians of the Abyss",
    code: "guardians",
    color_code: "primary",
    icon: "icon-guardians",
    campaign_variables: {
      active: false,
      campaignRef: 2,
      current_section: 0,
      current_scenario: 0,
      current_interlude: 0,
      current_state: "",
      number_of_players: 1,
      participating_investigators: [],
      participating_players: [],
      difficulty: 0,
      chaos_bag: [],
      campaign_path: [{
          "section": 1,
          "section_type": "setup",
          "section_color": "warning",
          "section_key": "SETUP",
          "title": "Scenario Setup"
        },
        {
          "section": 2,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S1",
          "title": "The Curse of the Rougarou"
        },
        {
          "section": 5,
          "section_type": "finish",
          "section_color": "info",
          "section_key": "FINISH",
          "title": "Scenario Finish"
        }
      ],
      campaign_log: []
    },
    introduction_title: "Terror Grips New Orleans!",
    introduction: "<em>Minnie Klein, your contact at the 'Arkham Advertiser', had slipped you a draft of the article over a cup of coffee at Velma's Diner.  It would have gone to print had Doyle Jeffries, the lead editor, not scoffed at the concept.  \"I believe his exact words were, 'I ain't printing the ravings of some Voodoo lunatic and passing it off as news,\" she explained.  From the sly grin spreading across her face, you could tell she smelled a story.<br></br>The headline was sensationalist.  Three killings in nine days was enough to spook a town, sure.  But you doubt all of New Orleans is gripped by terror, or even knows about the killings.  Still, something piqued your interest.  \"Lady Espirit,\" the Voodoo priestess from the article, claimed that a malign curse had taken root in the bayou.<br></br>\"There's something to this, isn't there?  I know that look,\" Minnie said.  You weren't sure.  If Lady Espirit was right, this \"roux-ga-roux\" wouldn't stop killing at three, that's for sure.  But curses?  Wolf-people?  How could such things be real?  Only one way to find out.  You put on your coat and head for the Northside Station...</em>",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up the Curse of the Rougarou, perform the following steps in order:",
      "setup_steps": [{
          "number": 1,
          "text": "Choose number of players"
        },
        {
          "number": 2,
          "text": "Assemble investigator decks"
        },
        {
          "number": 3,
          "text": "Choose difficulty level"
        },
        {
          "number": 4,
          "text": "Assemble the campaign chaos bag."
        },
      ],
      "chaos_bag_setup": [{
          "difficulty": "Normal",
          "difficulty_text": "I want a challenge",
          "difficulty_color": "success",
          "tokens": [{
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 6,
              "token": "-5"
            },
            {
              "tokenID": 7,
              "token": "-6"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 12,
              "token": "tablet",
              "symbol": true,
              "icon": "icon-tablet",
              "color": "warning"
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        },
        {
          "difficulty": "Hard",
          "difficulty_text": "I want a true nightmare",
          "difficulty_color": "danger",
          "tokens": [
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 7,
              "token": "-6",
              "quantity": 1
            },
            {
              "tokenID": 9,
              "token": "-8",
              "quantity": 1
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up The Curse of the Rougarou"
    },
    "scenarios": [{
      "title": "The Curse of the Rougarou",
      "introductions": [
        {
          "number": 1,
          "text": "Minnie Klein, your contact at the 'Arkham Advertiser', had slipped you a draft of the article over a cup of coffee at Velma's Diner.  It would have gone to print had Doyle Jeffries, the lead editor, not scoffed at the concept.  \"I believe his exact words were, 'I ain't printing the ravings of some Voodoo lunatic and passing it off as news,\" she explained.  From the sly grin spreading across her face, you could tell she smelled a story."
        },
        {
          "number": 2,
          "text": "The headline was sensationalist.  Three killings in nine days was enough to spook a town, sure.  But you doubt all of New Orleans is gripped by terror, or even knows about the killings.  Still, something piqued your interest.  \"Lady Espirit,\" the Voodoo priestess from the article, claimed that a malign curse had taken root in the bayou.\""
        },
        {
          "number": 3,
          "text": "There's something to this, isn't there?  I know that look,\" Minnie said.  You weren't sure.  If Lady Espirit was right, this \"roux-ga-roux\" wouldn't stop killing at three, that's for sure.  But curses?  Wolf-people?  How could such things be real?  Only one way to find out.  You put on your coat and head for the Northside Station..."
        },
      ],
      "setup": [
        {
          "text": "Gather all cards from the following encounter sets: Curse of the Rougarou, The Bayou. These sets are indicated by the following icons:",
          "icons": true,
          "icon_list": [{
              "name": "curse_of_the_rougarou",
              "icon": "icon-curse_of_the_rougarou"
            },
            {
              "name": "the_bayou",
              "icon": "icon-the_bayou"
            }
          ]
        },
        {
          "text": "Set the Curse of the Rougarou encounter set aside, out of play."
        },
        {
          "text": "Sort each of the locations into 4 piles, by trait (New Orleans, Riverside, Wilderness and Unhallowed)."
        },
        {
          "text": "Randomly choose 1 of these piles and remove these locations from the game."
        },
        {
          "text": "Randomly choose another 1 of these piles and put those locations into play."
        },
        {
          "text": "Set each location in the other two piles aside, out of play."
        },
        {
          "text": "Each investigator begins play at a Bayou location in play."
        },
        {
          "text": "Set the following cards aside, out of play:  Lady Espirit, Bear Trap and Fishing Net."
        },
        {
          "text": "Shuffle the remainder of the encounter cards to form the encounter deck."
        }
      ],
      "resolution_checks": [{
        "id": "victory_display",
        "type": Number,
        "text": "Victory Display",
        "default": 0
      }],
      "resolution": [
        {
          "id": 0,
          "title": "no resolution",
          "header": "If no resolution was reached (each investigator resigned or was defeated):",
          "description": "Somehow, you manage to make it back to safety before daybreak, resting until late in the afternoon.  It isn't until you seek out Lady Espirit the next day that you realise who last night's victim was.  With a heavy heart and an unshakable dread, you choose to bury her body instead of contacting the authorities - the less people who delve this deep into the bayou, the better.",
          "steps": [
            {
              "text": "The Rougarou continues to haunt the bayou.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 1,
          "title": "resolution 1",
          "header": "Resolution 1:",
          "description": "Somehow, you manage to make it back to safety before daybreak, resting until late in the afternoon.  It isn't until you seek out Lady Espirit the next day that you realise who last night's victim was.  With a heavy heart and an unshakable dread, you choose to bury her body instead of contacting the authorities - the less people who delve this deep into the bayou, the better.",
          "steps": [
            {
              "text": "The Rougarou continues to haunt the bayou.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 2,
          "title": "resolution 2",
          "header": "Resolution 2:",
          "description": "The creature gives a pitiful wail as dark, miry blood oozes from its wounds.  By the time its body collapses into the mud, it has transformed back into its original form - the form of a young, dark-skinned man, his expression twisted in agony.  You bring his body back to Lady Espirit, and she works her strange magic, removing the stain of the curse from the land.  \"Call on me, should ever need my help,\" the mysterious woman tells you.",
          "steps": [
            {
              "text": "The Rougarou is destroyed, and the curse is lifted.",
              "addToLog": true
            },
            {
              "text": "Remove the Curse of the Rougarou weakness from it's bearer's deck.",
              "addToLog": false
            },
            {
              "text": "Any one investigator may choose to add Lady Espirit to their deck.  This card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 3,
          "title": "resolution 3",
          "header": "Resolution 3:",
          "description": "Somehow, you have managed to quell the rage and bloodlust of the curse within the creature, and in moments the shape of a young, dark-skinned man stands before you, panting and sweating.  He seems to only just now understand everything he's done, and agrees to flee to a secluded corner of the earth, where he can harm no one.  However, the curse lives on.  He sees it in your eyes and grips your arm tightly.  \"Don't let it take control,\" he warns.  \"I was weak, but you - I can tell you are strong.  Control the curse as I could not.\"",
          "steps": [
            {
              "text": "The Rougarou escaped, and you embraced the curse.",
              "addToLog": true
            },
            {
              "text": "The bearer of the Curse of the Rougarou weakness must add Monstrous Transformation to their deck.  This card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
      ]
    }]
  },
  {
    id: 10,
    name: "The Circle Undone",
    code: "the_circle_undone",
    color_code: "warning",
    icon: "icon-the_circle_undone",
    campaign_variables: {
      active: false,
      campaignRef: 2,
      current_section: 0,
      current_scenario: 0,
      current_interlude: 0,
      current_state: "",
      number_of_players: 1,
      participating_investigators: [],
      participating_players: [],
      difficulty: 0,
      chaos_bag: [],
      campaign_path: [{
          "section": 1,
          "section_type": "setup",
          "section_color": "warning",
          "section_key": "SETUP",
          "title": "Scenario Setup"
        },
        {
          "section": 2,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S1",
          "title": "The Curse of the Rougarou"
        },
        {
          "section": 5,
          "section_type": "finish",
          "section_color": "info",
          "section_key": "FINISH",
          "title": "Scenario Finish"
        }
      ],
      campaign_log: []
    },
    introduction_title: "Terror Grips New Orleans!",
    introduction: "<em>Minnie Klein, your contact at the 'Arkham Advertiser', had slipped you a draft of the article over a cup of coffee at Velma's Diner.  It would have gone to print had Doyle Jeffries, the lead editor, not scoffed at the concept.  \"I believe his exact words were, 'I ain't printing the ravings of some Voodoo lunatic and passing it off as news,\" she explained.  From the sly grin spreading across her face, you could tell she smelled a story.<br></br>The headline was sensationalist.  Three killings in nine days was enough to spook a town, sure.  But you doubt all of New Orleans is gripped by terror, or even knows about the killings.  Still, something piqued your interest.  \"Lady Espirit,\" the Voodoo priestess from the article, claimed that a malign curse had taken root in the bayou.<br></br>\"There's something to this, isn't there?  I know that look,\" Minnie said.  You weren't sure.  If Lady Espirit was right, this \"roux-ga-roux\" wouldn't stop killing at three, that's for sure.  But curses?  Wolf-people?  How could such things be real?  Only one way to find out.  You put on your coat and head for the Northside Station...</em>",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up the Curse of the Rougarou, perform the following steps in order:",
      "setup_steps": [{
          "number": 1,
          "text": "Choose number of players"
        },
        {
          "number": 2,
          "text": "Assemble investigator decks"
        },
        {
          "number": 3,
          "text": "Choose difficulty level"
        },
        {
          "number": 4,
          "text": "Assemble the campaign chaos bag."
        },
      ],
      "chaos_bag_setup": [{
          "difficulty": "Normal",
          "difficulty_text": "I want a challenge",
          "difficulty_color": "success",
          "tokens": [{
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 5,
              "token": "-4"
            },
            {
              "tokenID": 6,
              "token": "-5"
            },
            {
              "tokenID": 7,
              "token": "-6"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success"
            },
            {
              "tokenID": 12,
              "token": "tablet",
              "symbol": true,
              "icon": "icon-tablet",
              "color": "warning"
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        },
        {
          "difficulty": "Hard",
          "difficulty_text": "I want a true nightmare",
          "difficulty_color": "danger",
          "tokens": [
            {
              "tokenID": 0,
              "token": "+1"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 1,
              "token": "0"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 2,
              "token": "-1"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 3,
              "token": "-2"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 4,
              "token": "-3"
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID": 7,
              "token": "-6",
              "quantity": 1
            },
            {
              "tokenID": 9,
              "token": "-8",
              "quantity": 1
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID": 12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID": 13,
              "symbol": true,
              "token": "elder_thing",
              "icon": "icon-elder_thing",
              "color": "primary"
            },
            {
              "tokenID": 20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info"
            },
            {
              "tokenID": 21,
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger"
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up The Curse of the Rougarou"
    },
    "scenarios": [{
      "title": "The Curse of the Rougarou",
      "introductions": [
        {
          "number": 1,
          "text": "Minnie Klein, your contact at the 'Arkham Advertiser', had slipped you a draft of the article over a cup of coffee at Velma's Diner.  It would have gone to print had Doyle Jeffries, the lead editor, not scoffed at the concept.  \"I believe his exact words were, 'I ain't printing the ravings of some Voodoo lunatic and passing it off as news,\" she explained.  From the sly grin spreading across her face, you could tell she smelled a story."
        },
        {
          "number": 2,
          "text": "The headline was sensationalist.  Three killings in nine days was enough to spook a town, sure.  But you doubt all of New Orleans is gripped by terror, or even knows about the killings.  Still, something piqued your interest.  \"Lady Espirit,\" the Voodoo priestess from the article, claimed that a malign curse had taken root in the bayou.\""
        },
        {
          "number": 3,
          "text": "There's something to this, isn't there?  I know that look,\" Minnie said.  You weren't sure.  If Lady Espirit was right, this \"roux-ga-roux\" wouldn't stop killing at three, that's for sure.  But curses?  Wolf-people?  How could such things be real?  Only one way to find out.  You put on your coat and head for the Northside Station..."
        },
      ],
      "setup": [
        {
          "text": "Gather all cards from the following encounter sets: Curse of the Rougarou, The Bayou. These sets are indicated by the following icons:",
          "icons": true,
          "icon_list": [{
              "name": "curse_of_the_rougarou",
              "icon": "icon-curse_of_the_rougarou"
            },
            {
              "name": "the_bayou",
              "icon": "icon-the_bayou"
            }
          ]
        },
        {
          "text": "Set the Curse of the Rougarou encounter set aside, out of play."
        },
        {
          "text": "Sort each of the locations into 4 piles, by trait (New Orleans, Riverside, Wilderness and Unhallowed)."
        },
        {
          "text": "Randomly choose 1 of these piles and remove these locations from the game."
        },
        {
          "text": "Randomly choose another 1 of these piles and put those locations into play."
        },
        {
          "text": "Set each location in the other two piles aside, out of play."
        },
        {
          "text": "Each investigator begins play at a Bayou location in play."
        },
        {
          "text": "Set the following cards aside, out of play:  Lady Espirit, Bear Trap and Fishing Net."
        },
        {
          "text": "Shuffle the remainder of the encounter cards to form the encounter deck."
        }
      ],
      "resolution_checks": [{
        "id": "victory_display",
        "type": Number,
        "text": "Victory Display",
        "default": 0
      }],
      "resolution": [
        {
          "id": 0,
          "title": "no resolution",
          "header": "If no resolution was reached (each investigator resigned or was defeated):",
          "description": "Somehow, you manage to make it back to safety before daybreak, resting until late in the afternoon.  It isn't until you seek out Lady Espirit the next day that you realise who last night's victim was.  With a heavy heart and an unshakable dread, you choose to bury her body instead of contacting the authorities - the less people who delve this deep into the bayou, the better.",
          "steps": [
            {
              "text": "The Rougarou continues to haunt the bayou.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 1,
          "title": "resolution 1",
          "header": "Resolution 1:",
          "description": "Somehow, you manage to make it back to safety before daybreak, resting until late in the afternoon.  It isn't until you seek out Lady Espirit the next day that you realise who last night's victim was.  With a heavy heart and an unshakable dread, you choose to bury her body instead of contacting the authorities - the less people who delve this deep into the bayou, the better.",
          "steps": [
            {
              "text": "The Rougarou continues to haunt the bayou.",
              "addToLog": true
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 2,
          "title": "resolution 2",
          "header": "Resolution 2:",
          "description": "The creature gives a pitiful wail as dark, miry blood oozes from its wounds.  By the time its body collapses into the mud, it has transformed back into its original form - the form of a young, dark-skinned man, his expression twisted in agony.  You bring his body back to Lady Espirit, and she works her strange magic, removing the stain of the curse from the land.  \"Call on me, should ever need my help,\" the mysterious woman tells you.",
          "steps": [
            {
              "text": "The Rougarou is destroyed, and the curse is lifted.",
              "addToLog": true
            },
            {
              "text": "Remove the Curse of the Rougarou weakness from it's bearer's deck.",
              "addToLog": false
            },
            {
              "text": "Any one investigator may choose to add Lady Espirit to their deck.  This card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
        {
          "id": 3,
          "title": "resolution 3",
          "header": "Resolution 3:",
          "description": "Somehow, you have managed to quell the rage and bloodlust of the curse within the creature, and in moments the shape of a young, dark-skinned man stands before you, panting and sweating.  He seems to only just now understand everything he's done, and agrees to flee to a secluded corner of the earth, where he can harm no one.  However, the curse lives on.  He sees it in your eyes and grips your arm tightly.  \"Don't let it take control,\" he warns.  \"I was weak, but you - I can tell you are strong.  Control the curse as I could not.\"",
          "steps": [
            {
              "text": "The Rougarou escaped, and you embraced the curse.",
              "addToLog": true
            },
            {
              "text": "The bearer of the Curse of the Rougarou weakness must add Monstrous Transformation to their deck.  This card does not count toward that investigator's deck size.",
              "addToLog": false
            },
            {
              "id": "victory_display",
              "varLinked": true,
              var_function(app_state, id) {
                if (app_state.hasOwnProperty(id)) {
                  let newText = "Experience earned from victory display: " + app_state[id];
                  return newText;
                }
              }
            }
          ]
        },
      ]
    }]
  }
];

export default Campaigns;
