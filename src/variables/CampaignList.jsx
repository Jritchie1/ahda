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
      campaign_path: [
        {
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
      "setup_steps": [
        {
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
          "tokens": [
            {
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
    "scenarios": [
      {
        "title": "Part I: The Gathering",
        "introductions": [
          {
            "number": 1,
            "text": "You and your partners have been investigating strange events taking place in your home city of Arkham, Massachusetts. Over the past few weeks, several townspeople have mysteriously gone missing. Recently, their corpses turned up in the woods, savaged and half-eaten. The police and newspapers have stated that wild animals are responsible, but you believe there is something else going on. You are gathered together at the lead investigator’s home to discuss these bizarre events."
          }
        ],
        "setup": [
          {
            "text": "Gather all cards from the following encounter sets: The Gathering, Rats, Ghouls, Striking Fear, Ancient Evils, and Chilling Cold. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [
              {
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
        "resolution_checks": [
          {
            "id": "victory_display",
            "type": Number,
            "text": "Victory Display",
            "default": 0
          }
        ],
        "resolution": [
          {
            "id": 0,
            "title": "no resolution",
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "You barely manage to escape your house with your lives. The woman on your parlor follows you out the front door, slamming it behind her. \"You fools! See what you have done?\" She pushes a chair in front of the door, lodging it beneath the doorknob. \"We must get out of here. Come with me, and I will tell you what I know. We are the only ones who can stop the threat that lurks beneath om being unleashed throughout the city.\" You’re in no state to argue. Nodding, you follow the woman as she runs from your front porch out into the rainy street, toward Rivertown.",
            "steps": [
              {
                "text": "Your house is still standing.",
                "addToLog": true,
                "check": true,
                check_function(variables)
                {
                  variables.house_burned_down = false;
                  return variables;
                }
              },
              {
                "text": "The Ghoul Priest is still alive.",
                "addToLog": true,
                "check": true,
                check_function(variables)
                {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
            "steps": [
              {
                "text": "Your house has burned to the ground.",
                "addToLog": true,
                "check": true,
                check_function(variables)
                {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
            "steps": [
              {
                "text": "Your house is still standing.",
                "addToLog": true,
                "check": true,
                check_function(variables)
                {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
            "steps": [
              {
                "text": "Lita was forced to find others to help her cause.",
                "addToLog": true
              },
              {
                "text": "Your house is still standing.",
                "addToLog": true,
                "check": true,
                check_function(variables)
                {
                  variables.house_burned_down = false;
                  return variables;
                }
              },
              {
                "text": "The Ghoul Priest is still alive.",
                "addToLog": true,
                "check": true,
                check_function(variables)
                {
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
        "introductions": [
          {
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
        "setup": [
          {
            "text": "Gather all cards from the following encounter sets: Midnight Masks, Chilling Cold, Nightgaunts, Dark Cult, and Locked Doors. These sets are indicated by the following icons:>",
            "icons": true,
            "icon_list": [
              {
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
            "icon_list": [
              {
                "name": "cult_of_umordoth",
                "icon": "icon-cult_of_umordoth"
              }
            ]
          },
          {
            "text": "Choose one of the two Downtown locations and one of the two Southside locations at random and put them into play. Remove the other versions of Downtown and Southside from the game. Then, put the Northside, Easttown, Rivertown, St. Mary’s Hospital, Graveyard, Miskatonic University, and Your House locations into play."
          },
          {
            "check": true,
            check_function(variables)
            {
              if (variables.number_of_players === 1)
                return 0;
              if (variables.number_of_players === 2)
                return 1;
              if (variables.number_of_players === 3)
                return 2;
              if (variables.number_of_players === 4)
                return 3;
            },
            "options": [
              {
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
            check_function(variables)
            {
              if (variables.house_burned_down === true)
                return 0;
              if (variables.house_burned_down === false)
                return 1;
            },
            "options": [
              {
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
            check_function(variables)
            {
              if (variables.ghoul_priest_alive === true)
                return 0;
              else
                return 1;
            },
            "options": [
              {
                "text": "Shuffle \"The Ghoul Priest\" into the encounter deck."
              },
              {
                "text": ""
              }
            ]
          }
        ],
        "resolution_checks": [
          {
            "id": "victory_display",
            "type": Number,
            "text": "Victory Display",
            "default": 0
          },
          {
            "id": "cultists_interrogated",
            "text": "Cultists We Interrogated",
            "type": Array,
            "data": [
              {
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
            "data": [
              {
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
        "resolution": [
          {
            "id": 0,
            "title": "no resolution",
            "header": "If no resolution was reached (each investigator resigned or was defeated)",
            "description": "You’ve managed to obtain some useful information about the cult and its plans. You can only hope it’s enough.",
            "steps": [
              {
                "id": "cultists_interrogated",
                "text": "Cultists we interrogated: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item =>{
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
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
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
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
            "steps": [
              {
                "id": "cultists_interrogated",
                "text": "Cultists we interrogated: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item =>{
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
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
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
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
            "steps": [
              {
                "id": "cultists_interrogated",
                "text": "Cultists we interrogated: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item =>{
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
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
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
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
        "introductions": [
          {
            "text": "After a frantic nighttime search throughout Arkham, you have tracked down and questioned several members of the cult. Your findings are disturbing: they claim to worship a being known as Umôrdhoth, a monstrous entity from another realm."
          },
          {
            "text": "You are able to confirm much of Lita’s story: the cult is agitated over the destruction of a ghoul lair. However, a surprising detail also turns up: the one who invaded the lair and set this night’s events in motion was none other than Lita Chantler herself! You are not sure why this important detail was omitted from Lita’s story, did she tell you only as much as was necessary to draw you into her conflict? But in another light, she seems to be fighting to protect the city of Arkham from a terrible menace."
          },
          {
            "text": "The final piece of the puzzle was found written in a journal possessed by one of the cultists. It describes a dark ritual to be performed deep within the woods south of Arkham, this very night. According to the journal, the ritual’s completion will open a gate and bring forth the cult’s dark master into this world. \"If the cult is not stopped,\" Lita warns, \"there is a possibility that Umôrdhoth’s vengeance will consume all in its path.\" Frightened but determined to stop the ritual, you head into the woods..."
          }
        ],
        "setup": [
          {
            "text": "Gather all cards from the following encounter sets: The Devourer Below, Ancient Evils, Striking Fear, Ghouls, and Dark Cult. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [
              {
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
            "icon_list": [
              {
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
            check_function(variables)
            {
              if (variables.cultists_escaped.length === 0)
                return 0;
              if (variables.cultists_escaped.length >= 1 && variables.cultists_escaped.length <= 2)
                return 1;
              if (variables.cultists_escaped.length >= 3 && variables.cultists_escaped.length <= 4)
                return 2;
              if (variables.cultists_escaped.length >= 5 && variables.cultists_escaped.length <= 6)
                return 3;
            },
            "options": [
              {
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
            "icon_list": [
              {
                "name": "elder_thing",
                "icon": "icon-elder_thing"
              }
            ],
            "tokensToAdd": [
              {
                "tokenID":13,
                "symbol": true,
                "token": "elder_thing",
                "icon": "icon-elder_thing",
                "color": "primary",
                "quantity": 1
              }
            ]
          },
          {
            "check": true,
            check_function(variables)
            {
              if (variables.past_midnight === true)
                return 0;
              else
                return 1;
            },
            "options": [
              {
                "text": "Each player discards 2 random cards from his or her starting hand."
              },
              {
                "text": ""
              }
            ]
          },
          {
            "check": true,
            check_function(variables)
            {
              if (variables.ghoul_priest_alive === true)
                return 0;
              else
                return 1;
            },
            "options": [
              {
                "text": "Shuffle \"The Ghoul Priest\" into the encounter deck."
              },
              {
                "text": ""
              }
            ]
          }
        ],
        "resolution_checks": [
          {
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
        "resolution": [
          {
            "id": 0,
            "title": "no resolution",
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "Too frightened to face her fate, Lita flees into the night. She realizes that she has failed and Umôrdhoth's vengeance will pursue her wherever she goes. Thee creature's tendrils spread throughout the city of Arkham, searching for her. It lurks in the darkness of every corner, tugging at the seams of reality. But Lita is nowhere to be found, so the creature dwells in the shadows to this day, searching... Killing...",
            "steps": [
              {
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
            "steps": [
              {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
            "steps": [
              {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
            "steps": [
              {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
      campaign_path: [
        {
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
      "setup_steps": [
        {
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
          "tokens": [
            {
              "tokenID":0,
              "token": "+1"
            },
            {
              "tokenID":0,
              "token": "+1"
            },
            {
              "tokenID":1,
              "token": "0"
            },
            {
              "tokenID":1,
              "token": "0"
            },
            {
              "tokenID":1,
              "token": "0"
            },
            {
              "tokenID":2,
              "token": "-1"
            },
            {
              "tokenID":2,
              "token": "-1"
            },
            {
              "tokenID":2,
              "token": "-1"
            },
            {
              "tokenID":3,
              "token": "-2"
            },
            {
              "tokenID":3,
              "token": "-2"
            },
            {
              "tokenID":10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID":10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID":11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID":12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID":20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "tokenID":21,
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
          "tokens": [
            {
              "tokenID":0,
              "token": "+1"
            },
            {
              "tokenID":1,
              "token": "0"
            },
            {
              "tokenID":1,
              "token": "0"
            },
            {
              "tokenID":2,
              "token": "-1"
            },
            {
              "tokenID":2,
              "token": "-1"
            },
            {
              "tokenID":2,
              "token": "-1"
            },
            {
              "tokenID":3,
              "token": "-2"
            },
            {
              "tokenID":3,
              "token": "-2"
            },
            {
              "tokenID":4,
              "token": "-3",
              "quantity": 1
            },
            {
              "tokenID":5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID":10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID":10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID":11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID":12,
              "token": "tablet",
              "symbol": true,
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID":20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "tokenID":21,
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
          "tokens": [
            {
              "tokenID":1,
              "token": "0"
            },
            {
              "tokenID":1,
              "token": "0"
            },
            {
              "tokenID":1,
              "token": "0"
            },
            {
              "tokenID":2,
              "token": "-1"
            },
            {
              "tokenID":2,
              "token": "-1"
            },
            {
              "tokenID":3,
              "token": "-2"
            },
            {
              "tokenID":3,
              "token": "-2"
            },
            {
              "tokenID":4,
              "token": "-3"
            },
            {
              "tokenID":4,
              "token": "-3"
            },
            {
              "tokenID":5,
              "token": "-4",
              "quantity": 1
            },
            {
              "tokenID":6,
              "token": "-5",
              "quantity": 1
            },
            {
              "tokenID":10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID":10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID":11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID":12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID":20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "tokenID":21,
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
          "tokens": [
            {
              "tokenID":1,
              "token": "0",
              "quantity": 1
            },
            {
              "tokenID":2,
              "token": "-1"
            },
            {
              "tokenID":2,
              "token": "-1"
            },
            {
              "tokenID":3,
              "token": "-2",
            },
            {
              "tokenID":3,
              "token": "-2",
            },
            {
              "tokenID":4,
              "token": "-3"
            },
            {
              "tokenID":4,
              "token": "-3"
            },
            {
              "tokenID":5,
              "token": "-4"
            },
            {
              "tokenID":5,
              "token": "-4"
            },
            {
              "tokenID":6,
              "token": "-5"
            },
            {
              "tokenID":7,
              "token": "-6"
            },
            {
              "tokenID":9,
              "token": "-8"
            },
            {
              "tokenID":10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID":10,
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose"
            },
            {
              "tokenID":11,
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "tokenID":12,
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "tokenID":20,
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "tokenID":21,
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
    "scenarios": [
      {
        "title": "Part I: The Gathering",
        "introductions": [
          {
            "number": 1,
            "text": "You and your partners have been investigating strange events taking place in your home city of Arkham, Massachusetts. Over the past few weeks, several townspeople have mysteriously gone missing. Recently, their corpses turned up in the woods, savaged and half-eaten. The police and newspapers have stated that wild animals are responsible, but you believe there is something else going on. You are gathered together at the lead investigator’s home to discuss these bizarre events."
          }
        ],
        "setup": [
          {
            "text": "Gather all cards from the following encounter sets: The Gathering, Return to the Gathering, Rats, Ghouls of Umôrdhoth, Striking Fear, Ancient Evils, and Chilling Cold. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [
              {
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
        "resolution_checks": [
          {
            "id": "victory_display",
            "type": Number,
            "text": "Victory Display",
            "default": 0
          }
        ],
        "resolution": [
          {
            "id": 0,
            "title": "no resolution",
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "You barely manage to escape your house with your lives. The woman on your parlor follows you out the front door, slamming it behind her. \"You fools! See what you have done?\" She pushes a chair in front of the door, lodging it beneath the doorknob. \"We must get out of here. Come with me, and I will tell you what I know. We are the only ones who can stop the threat that lurks beneath om being unleashed throughout the city.\" You’re in no state to argue. Nodding, you follow the woman as she runs from your front porch out into the rainy street, toward Rivertown.",
            "steps": [
              {
                "text": "Your house is still standing.",
                "addToLog": true,
                "check": true,
                check_function(variables)
                {
                  variables.house_burned_down = false;
                  return variables;
                }
              },
              {
                "text": "The Ghoul Priest is still alive.",
                "addToLog": true,
                "check": true,
                check_function(variables)
                {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
            "steps": [
              {
                "text": "Your house has burned to the ground.",
                "addToLog": true,
                "check": true,
                check_function(variables)
                {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
            "steps": [
              {
                "text": "Your house is still standing.",
                "addToLog": true,
                "check": true,
                check_function(variables)
                {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
            "steps": [
              {
                "text": "Lita was forced to find others to help her cause.",
                "addToLog": true
              },
              {
                "text": "Your house is still standing.",
                "addToLog": true,
                "check": true,
                check_function(variables)
                {
                  variables.house_burned_down = false;
                  return variables;
                }
              },
              {
                "text": "The Ghoul Priest is still alive.",
                "addToLog": true,
                "check": true,
                check_function(variables)
                {
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
        "introductions": [
          {
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
        "setup": [
          {
            "text": "Gather all cards from the following encounter sets: Midnight Masks, Return to the Midnight Masks, Chilling Cold, Nightgaunts, Cult of the Devourer, and Locked Doors. These sets are indicated by the following icons:>",
            "icons": true,
            "icon_list": [
              {
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
            "icon_list": [
              {
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
            check_function(variables)
            {
              if (variables.number_of_players === 1)
                return 0;
              if (variables.number_of_players === 2)
                return 1;
              if (variables.number_of_players === 3)
                return 2;
              if (variables.number_of_players === 4)
                return 3;
            },
            "options": [
              {
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
            check_function(variables)
            {
              if (variables.house_burned_down === true)
                return 0;
              if (variables.house_burned_down === false)
                return 1;
            },
            "options": [
              {
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
            check_function(variables)
            {
              if (variables.ghoul_priest_alive === true)
                return 0;
              else
                return 1;
            },
            "options": [
              {
                "text": "Shuffle \"The Ghoul Priest\" into the encounter deck."
              },
              {
                "text": ""
              }
            ]
          }
        ],
        "resolution_checks": [
          {
            "id": "victory_display",
            "type": Number,
            "text": "Victory Display",
            "default": 0
          },
          {
            "id": "cultists_interrogated",
            "text": "Cultists We Interrogated",
            "type": Array,
            "data": [
              {
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
            "data": [
              {
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
        "resolution": [
          {
            "id": 0,
            "title": "no resolution",
            "header": "If no resolution was reached (each investigator resigned or was defeated)",
            "description": "You’ve managed to obtain some useful information about the cult and its plans. You can only hope it’s enough.",
            "steps": [
              {
                "id": "cultists_interrogated",
                "text": "Cultists we interrogated: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item =>{
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
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
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
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
            "steps": [
              {
                "id": "cultists_interrogated",
                "text": "Cultists we interrogated: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item =>{
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
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
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
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
            "steps": [
              {
                "id": "cultists_interrogated",
                "text": "Cultists we interrogated: ",
                "addToLog": true,
                "varCheck": true,
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
                    let varText = "";
                    // eslint-disable-next-line
                    variables[id].map(item =>{
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
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
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
                var_check_function(variables, id)
                {
                  if (variables.hasOwnProperty(id) === true)
                  {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
        "introductions": [
          {
            "text": "After a frantic nighttime search throughout Arkham, you have tracked down and questioned several members of the cult. Your findings are disturbing: they claim to worship a being known as Umôrdhoth, a monstrous entity from another realm."
          },
          {
            "text": "You are able to confirm much of Lita’s story: the cult is agitated over the destruction of a ghoul lair. However, a surprising detail also turns up: the one who invaded the lair and set this night’s events in motion was none other than Lita Chantler herself! You are not sure why this important detail was omitted from Lita’s story, did she tell you only as much as was necessary to draw you into her conflict? But in another light, she seems to be fighting to protect the city of Arkham from a terrible menace."
          },
          {
            "text": "The final piece of the puzzle was found written in a journal possessed by one of the cultists. It describes a dark ritual to be performed deep within the woods south of Arkham, this very night. According to the journal, the ritual’s completion will open a gate and bring forth the cult’s dark master into this world. \"If the cult is not stopped,\" Lita warns, \"there is a possibility that Umôrdhoth’s vengeance will consume all in its path.\" Frightened but determined to stop the ritual, you head into the woods..."
          }
        ],
        "setup": [
          {
            "text": "Gather all cards from the following encounter sets: The Devourer Below, Return to the Devourer Below, Ancient Evils, Striking Fear, Ghouls of Umôrdhoth and The Devourer's Cult. These sets are indicated by the following icons:",
            "icons": true,
            "icon_list": [
              {
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
            "icon_list": [
              {
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
            check_function(variables)
            {
              if (variables.cultists_escaped.length === 0)
                return 0;
              if (variables.cultists_escaped.length >= 1 && variables.cultists_escaped.length <= 2)
                return 1;
              if (variables.cultists_escaped.length >= 3 && variables.cultists_escaped.length <= 4)
                return 2;
              if (variables.cultists_escaped.length >= 5 && variables.cultists_escaped.length <= 6)
                return 3;
            },
            "options": [
              {
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
            "check": true,
            check_function(variables)
            {
              if (variables.past_midnight === true)
                return 0;
              else
                return 1;
            },
            "options": [
              {
                "text": "Each player discards 2 random cards from his or her starting hand."
              },
              {
                "text": ""
              }
            ]
          },
          {
            "check": true,
            check_function(variables)
            {
              if (variables.ghoul_priest_alive === true)
                return 0;
              else
                return 1;
            },
            "options": [
              {
                "text": "Shuffle \"The Ghoul Priest\" into the encounter deck."
              },
              {
                "text": ""
              }
            ]
          }
        ],

        "resolution_checks": [
          {
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
        "resolution": [
          {
            "id": 0,
            "title": "no resolution",
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "Too frightened to face her fate, Lita flees into the night. She realizes that she has failed and Umôrdhoth's vengeance will pursue her wherever she goes. Thee creature's tendrils spread throughout the city of Arkham, searching for her. It lurks in the darkness of every corner, tugging at the seams of reality. But Lita is nowhere to be found, so the creature dwells in the shadows to this day, searching... Killing...",
            "steps": [
              {
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
            "steps": [
              {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
            "steps": [
              {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
            "steps": [
              {
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
                var_function(app_state, id)
                {
                  if (app_state.hasOwnProperty(id))
                  {
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
      campaign_path: [
        {
          "section": 1,
          "section_type": "setup",
          "section_color": "warning",
          "section_key": "SETUP",
          "title": "Campaign Setup"
        },
        {
          "section": 2,
          "section_type": "scenario",
          "section_color": "danger",
          "section_key": "S1",
          "title": "Part I: The Example"
        },
        {
          "section": 5,
          "section_type": "finish",
          "section_color": "info",
          "section_key": "FINISH",
          "title": "Campaign Finish"
        }
      ],
      campaign_log: []
      },
    introduction_title: "Example introduction title",
    introduction: "Example introduction",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up the Example campaign, perform the following steps in order:",
      "setup_steps": [
        {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 2
            },
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 1
            },
            {
              "token": "0",
              "quantity": 2
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 1
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 1
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 2
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "token": "-6",
              "quantity": 1
            },
            {
              "token": "-8",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up Part I: The Example"
    },
    "scenarios": [
      {
        "number": 1,
        "section": 2,
        "title": "Part I: The Example",
        "introductions": [
          {
            "number": 1,
            "text": "Example text"
          }
        ],
        "setup": [
          {
            "number": 1,
            "text": "Example instructions"
          },
          {
            "number": 2,
            "text": "Example instructions"
          },
          {
            "number": 3,
            "text": "Example instructions"
          },
          {
            "number": 4,
            "text": "Example instructions"
          }
        ],
        "resolution": [
          {
            "number": 0,
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "Example no resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          },
          {
            "number": 1,
            "header": "Resolution 1",
            "description": "Example resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          }
        ]
      }
    ]
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
        campaign_path: [
          {
            "section": 1,
            "section_type": "setup",
            "section_color": "warning",
            "section_key": "SETUP",
            "title": "Campaign Setup"
          },
          {
            "section": 2,
            "section_type": "scenario",
            "section_color": "danger",
            "section_key": "S1",
            "title": "Part I: The Example"
          },
          {
            "section": 5,
            "section_type": "finish",
            "section_color": "info",
            "section_key": "FINISH",
            "title": "Campaign Finish"
          }
        ],
        campaign_log: []
      },
    introduction_title: "Example introduction title",
    introduction: "Example introduction",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up the Example campaign, perform the following steps in order:",
      "setup_steps": [
        {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 2
            },
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 1
            },
            {
              "token": "0",
              "quantity": 2
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 1
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 1
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 2
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "token": "-6",
              "quantity": 1
            },
            {
              "token": "-8",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up Part I: The Example"
    },
    "scenarios": [
      {
        "number": 1,
        "section": 2,
        "title": "Part I: The Example",
        "introductions": [
          {
            "number": 1,
            "text": "Example text"
          }
        ],
        "setup": [
          {
            "number": 1,
            "text": "Example instructions"
          },
          {
            "number": 2,
            "text": "Example instructions"
          },
          {
            "number": 3,
            "text": "Example instructions"
          },
          {
            "number": 4,
            "text": "Example instructions"
          }
        ],
        "resolution": [
          {
            "number": 0,
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "Example no resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          },
          {
            "number": 1,
            "header": "Resolution 1",
            "description": "Example resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
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
        campaignRef: 4,
        current_section: 0,
        current_scenario: 0,
        current_interlude: 0,
        current_state: "",
        number_of_players: 1,
        participating_investigators: [],
        participating_players: [],
        difficulty: 0,
        chaos_bag: [],
        campaign_path: [
          {
            "section": 1,
            "section_type": "setup",
            "section_color": "warning",
            "section_key": "SETUP",
            "title": "Campaign Setup"
          },
          {
            "section": 2,
            "section_type": "scenario",
            "section_color": "danger",
            "section_key": "S1",
            "title": "Part I: The Example"
          },
          {
            "section": 5,
            "section_type": "finish",
            "section_color": "info",
            "section_key": "FINISH",
            "title": "Campaign Finish"
          }
        ],
        campaign_log: []
      },
    introduction_title: "Example introduction title",
    introduction: "Example introduction",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up the Example campaign, perform the following steps in order:",
      "setup_steps": [
        {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 2
            },
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 1
            },
            {
              "token": "0",
              "quantity": 2
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 1
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 1
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 2
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "token": "-6",
              "quantity": 1
            },
            {
              "token": "-8",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up Part I: The Example"
    },
    "scenarios": [
      {
        "number": 1,
        "section": 2,
        "title": "Part I: The Example",
        "introductions": [
          {
            "number": 1,
            "text": "Example text"
          }
        ],
        "setup": [
          {
            "number": 1,
            "text": "Example instructions"
          },
          {
            "number": 2,
            "text": "Example instructions"
          },
          {
            "number": 3,
            "text": "Example instructions"
          },
          {
            "number": 4,
            "text": "Example instructions"
          }
        ],
        "resolution": [
          {
            "number": 0,
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "Example no resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          },
          {
            "number": 1,
            "header": "Resolution 1",
            "description": "Example resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          }
        ]
      }
    ]
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
        campaign_path: [
          {
            "section": 1,
            "section_type": "setup",
            "section_color": "warning",
            "section_key": "SETUP",
            "title": "Campaign Setup"
          },
          {
            "section": 2,
            "section_type": "scenario",
            "section_color": "danger",
            "section_key": "S1",
            "title": "Part I: The Example"
          },
          {
            "section": 5,
            "section_type": "finish",
            "section_color": "info",
            "section_key": "FINISH",
            "title": "Campaign Finish"
          }
        ],
        campaign_log: []
      },
    introduction_title: "Example introduction title",
    introduction: "Example introduction",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up the Example campaign, perform the following steps in order:",
      "setup_steps": [
        {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 2
            },
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 1
            },
            {
              "token": "0",
              "quantity": 2
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 1
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 1
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 2
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "token": "-6",
              "quantity": 1
            },
            {
              "token": "-8",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up Part I: The Example"
    },
    "scenarios": [
      {
        "number": 1,
        "section": 2,
        "title": "Part I: The Example",
        "introductions": [
          {
            "number": 1,
            "text": "Example text"
          }
        ],
        "setup": [
          {
            "number": 1,
            "text": "Example instructions"
          },
          {
            "number": 2,
            "text": "Example instructions"
          },
          {
            "number": 3,
            "text": "Example instructions"
          },
          {
            "number": 4,
            "text": "Example instructions"
          }
        ],
        "resolution": [
          {
            "number": 0,
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "Example no resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          },
          {
            "number": 1,
            "header": "Resolution 1",
            "description": "Example resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "The Path to Carcosa",
    code: "carcosa",
    color_code: "warning",
    icon: "icon-carcosa",
    campaign_variables: {
        active: false,
        campaignRef: 6,
        current_section: 0,
        current_scenario: 0,
        current_interlude: 0,
        current_state: "",
        number_of_players: 1,
        participating_investigators: [],
        participating_players: [],
        difficulty: 0,
        chaos_bag: [],
        campaign_path: [
          {
            "section": 1,
            "section_type": "setup",
            "section_color": "warning",
            "section_key": "SETUP",
            "title": "Campaign Setup"
          },
          {
            "section": 2,
            "section_type": "scenario",
            "section_color": "danger",
            "section_key": "S1",
            "title": "Part I: The Example"
          },
          {
            "section": 5,
            "section_type": "finish",
            "section_color": "info",
            "section_key": "FINISH",
            "title": "Campaign Finish"
          }
        ],
        campaign_log: []
      },
    introduction_title: "Example introduction title",
    introduction: "Example introduction",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up the Example campaign, perform the following steps in order:",
      "setup_steps": [
        {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 2
            },
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 1
            },
            {
              "token": "0",
              "quantity": 2
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 1
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 1
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 2
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "token": "-6",
              "quantity": 1
            },
            {
              "token": "-8",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up Part I: The Example"
    },
    "scenarios": [
      {
        "number": 1,
        "section": 2,
        "title": "Part I: The Example",
        "introductions": [
          {
            "number": 1,
            "text": "Example text"
          }
        ],
        "setup": [
          {
            "number": 1,
            "text": "Example instructions"
          },
          {
            "number": 2,
            "text": "Example instructions"
          },
          {
            "number": 3,
            "text": "Example instructions"
          },
          {
            "number": 4,
            "text": "Example instructions"
          }
        ],
        "resolution": [
          {
            "number": 0,
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "Example no resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          },
          {
            "number": 1,
            "header": "Resolution 1",
            "description": "Example resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Labyrinths of Lunacy",
    code: "lol",
    color_code: "primary",
    icon: "icon-lol",
    campaign_variables: {
        active: false,
        campaignRef: 7,
        current_section: 0,
        current_scenario: 0,
        current_interlude: 0,
        current_state: "",
        number_of_players: 1,
        participating_investigators: [],
        participating_players: [],
        difficulty: 0,
        chaos_bag: [],
        campaign_path: [
          {
            "section": 1,
            "section_type": "setup",
            "section_color": "warning",
            "section_key": "SETUP",
            "title": "Campaign Setup"
          },
          {
            "section": 2,
            "section_type": "scenario",
            "section_color": "danger",
            "section_key": "S1",
            "title": "Part I: The Example"
          },
          {
            "section": 5,
            "section_type": "finish",
            "section_color": "info",
            "section_key": "FINISH",
            "title": "Campaign Finish"
          }
        ],
        campaign_log: []
      },
    introduction_title: "Example introduction title",
    introduction: "Example introduction",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up the Example campaign, perform the following steps in order:",
      "setup_steps": [
        {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 2
            },
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 1
            },
            {
              "token": "0",
              "quantity": 2
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 1
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 1
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 2
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "token": "-6",
              "quantity": 1
            },
            {
              "token": "-8",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up Part I: The Example"
    },
    "scenarios": [
      {
        "number": 1,
        "section": 2,
        "title": "Part I: The Example",
        "introductions": [
          {
            "number": 1,
            "text": "Example text"
          }
        ],
        "setup": [
          {
            "number": 1,
            "text": "Example instructions"
          },
          {
            "number": 2,
            "text": "Example instructions"
          },
          {
            "number": 3,
            "text": "Example instructions"
          },
          {
            "number": 4,
            "text": "Example instructions"
          }
        ],
        "resolution": [
          {
            "number": 0,
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "Example no resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          },
          {
            "number": 1,
            "header": "Resolution 1",
            "description": "Example resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 8,
    name: "The Forgotten Age",
    code: "the_forgotten_age",
    color_code: "warning",
    icon: "icon-the_forgotten_age",
    campaign_variables: {
        active: false,
        campaignRef: 8,
        current_section: 0,
        current_scenario: 0,
        current_interlude: 0,
        current_state: "",
        number_of_players: 1,
        participating_investigators: [],
        participating_players: [],
        difficulty: 0,
        chaos_bag: [],
        campaign_path: [
          {
            "section": 1,
            "section_type": "setup",
            "section_color": "warning",
            "section_key": "SETUP",
            "title": "Campaign Setup"
          },
          {
            "section": 2,
            "section_type": "scenario",
            "section_color": "danger",
            "section_key": "S1",
            "title": "Part I: The Example"
          },
          {
            "section": 5,
            "section_type": "finish",
            "section_color": "info",
            "section_key": "FINISH",
            "title": "Campaign Finish"
          }
        ],
        campaign_log: []
      },
    introduction_title: "Example introduction title",
    introduction: "Example introduction",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up the Example campaign, perform the following steps in order:",
      "setup_steps": [
        {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 2
            },
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 1
            },
            {
              "token": "0",
              "quantity": 2
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 1
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 1
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 2
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "token": "-6",
              "quantity": 1
            },
            {
              "token": "-8",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up Part I: The Example"
    },
    "scenarios": [
      {
        "number": 1,
        "section": 2,
        "title": "Part I: The Example",
        "introductions": [
          {
            "number": 1,
            "text": "Example text"
          }
        ],
        "setup": [
          {
            "number": 1,
            "text": "Example instructions"
          },
          {
            "number": 2,
            "text": "Example instructions"
          },
          {
            "number": 3,
            "text": "Example instructions"
          },
          {
            "number": 4,
            "text": "Example instructions"
          }
        ],
        "resolution": [
          {
            "number": 0,
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "Example no resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          },
          {
            "number": 1,
            "header": "Resolution 1",
            "description": "Example resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 9,
    name: "Guardians of the Abyss",
    code: "guardians",
    color_code: "primary",
    icon: "icon-guardians",
    campaign_variables: {
        active: false,
        campaignRef: 9,
        current_section: 0,
        current_scenario: 0,
        current_interlude: 0,
        current_state: "",
        number_of_players: 1,
        participating_investigators: [],
        participating_players: [],
        difficulty: 0,
        chaos_bag: [],
        campaign_path: [
          {
            "section": 1,
            "section_type": "setup",
            "section_color": "warning",
            "section_key": "SETUP",
            "title": "Campaign Setup"
          },
          {
            "section": 2,
            "section_type": "scenario",
            "section_color": "danger",
            "section_key": "S1",
            "title": "Part I: The Example"
          },
          {
            "section": 5,
            "section_type": "finish",
            "section_color": "info",
            "section_key": "FINISH",
            "title": "Campaign Finish"
          }
        ],
        campaign_log: []
      },
    introduction_title: "Example introduction title",
    introduction: "Example introduction",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up the Example campaign, perform the following steps in order:",
      "setup_steps": [
        {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 2
            },
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 1
            },
            {
              "token": "0",
              "quantity": 2
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 1
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 1
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 2
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "token": "-6",
              "quantity": 1
            },
            {
              "token": "-8",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up Part I: The Example"
    },
    "scenarios": [
      {
        "number": 1,
        "section": 2,
        "title": "Part I: The Example",
        "introductions": [
          {
            "number": 1,
            "text": "Example text"
          }
        ],
        "setup": [
          {
            "number": 1,
            "text": "Example instructions"
          },
          {
            "number": 2,
            "text": "Example instructions"
          },
          {
            "number": 3,
            "text": "Example instructions"
          },
          {
            "number": 4,
            "text": "Example instructions"
          }
        ],
        "resolution": [
          {
            "number": 0,
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "Example no resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          },
          {
            "number": 1,
            "header": "Resolution 1",
            "description": "Example resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 10,
    name: "The Circle Undone",
    code: "the_circle_undone",
    color_code: "warning",
    icon: "icon-the_circle_undone",
    campaign_variables: {
        active: false,
        campaignRef: 10,
        current_section: 0,
        current_scenario: 0,
        current_interlude: 0,
        current_state: "",
        number_of_players: 1,
        participating_investigators: [],
        participating_players: [],
        difficulty: 0,
        chaos_bag: [],
        campaign_path: [
          {
            "section": 1,
            "section_type": "setup",
            "section_color": "warning",
            "section_key": "SETUP",
            "title": "Campaign Setup"
          },
          {
            "section": 2,
            "section_type": "scenario",
            "section_color": "danger",
            "section_key": "S1",
            "title": "Part I: The Example"
          },
          {
            "section": 5,
            "section_type": "finish",
            "section_color": "info",
            "section_key": "FINISH",
            "title": "Campaign Finish"
          }
        ],
        campaign_log: []
      },
    introduction_title: "Example introduction title",
    introduction: "Example introduction",
    "setup": {
      "section": 1,
      "setup_start_text": "To set up the Example campaign, perform the following steps in order:",
      "setup_steps": [
        {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 2
            },
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "+1",
              "quantity": 1
            },
            {
              "token": "0",
              "quantity": 2
            },
            {
              "token": "-1",
              "quantity": 3
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 1
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 3
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 1
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
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
          "tokens": [
            {
              "token": "0",
              "quantity": 1
            },
            {
              "token": "-1",
              "quantity": 2
            },
            {
              "token": "-2",
              "quantity": 2
            },
            {
              "token": "-3",
              "quantity": 2
            },
            {
              "token": "-4",
              "quantity": 2
            },
            {
              "token": "-5",
              "quantity": 1
            },
            {
              "token": "-6",
              "quantity": 1
            },
            {
              "token": "-8",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "skull",
              "icon": "icon-skull",
              "color": "rose",
              "quantity": 2
            },
            {
              "symbol": true,
              "token": "cultist",
              "icon": "icon-cultist",
              "color": "success",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "tablet",
              "icon": "icon-tablet",
              "color": "warning",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "elder_sign",
              "icon": "icon-elder_sign",
              "color": "info",
              "quantity": 1
            },
            {
              "symbol": true,
              "token": "auto_fail",
              "icon": "icon-auto_fail",
              "color": "danger",
              "quantity": 1
            }
          ]
        }
      ],
      "setup_end_text": "Players are now ready to set up Part I: The Example"
    },
    "scenarios": [
      {
        "number": 1,
        "section": 2,
        "title": "Part I: The Example",
        "introductions": [
          {
            "number": 1,
            "text": "Example text"
          }
        ],
        "setup": [
          {
            "number": 1,
            "text": "Example instructions"
          },
          {
            "number": 2,
            "text": "Example instructions"
          },
          {
            "number": 3,
            "text": "Example instructions"
          },
          {
            "number": 4,
            "text": "Example instructions"
          }
        ],
        "resolution": [
          {
            "number": 0,
            "header": "If no resolution was reached (each investigator resigned or was defeated):",
            "description": "Example no resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          },
          {
            "number": 1,
            "header": "Resolution 1",
            "description": "Example resolution",
            "steps": [
              {
                "number": 1,
                "text": "Example log add",
                "addToLog": true
              },
              {
                "number": 2,
                "text": "Example no log add",
                "addToLog": false
              },
              {
                "number": 3,
                "text": "Example card add",
                "addToLog": false
              },
              {
                "number": 4,
                "text": "Each investigator earns 2 bonus experience as an example.  Each investigator has earned ",
                "addToLog": false
              }
            ]
          }
        ]
      }
    ]
  }
];

export default Campaigns;
