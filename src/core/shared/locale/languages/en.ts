import { LOCALE_KEYS } from './keys';

/**
 * Locales are written with a key and value type.
 * When you get the key of 'greet-user' from the LocaleController
 * It will return a string of 'Hello someVariableYouPass, welcome to the server.'
 * It's a simple way to create locales without hurting performance too much.
 */
export default {
    // Commands
    [LOCALE_KEYS.COMMAND_ADMIN_CHAT]: `_%_ [message] - Speak to other admins`,
    [LOCALE_KEYS.COMMAND_ACCEPT_DEATH]: `_%_ - Respawn at hospital after death`,
    [LOCALE_KEYS.COMMAND_ACTION_MENU]: `_%_ - Create a test action menu`,
    [LOCALE_KEYS.COMMAND_ADD_VEHICLE]: `_%_ [model] - Add a vehicle to your player`,
    [LOCALE_KEYS.COMMAND_ADD_WHITELIST]: `_%_ [discord] - Whitelist a player by Discord ID`,
    [LOCALE_KEYS.COMMAND_OOC]: `_%_ [message] - Speak out of character`,
    [LOCALE_KEYS.COMMAND_BROADCAST]: `_%_ [message] - Announce message server wide`,
    [LOCALE_KEYS.COMMAND_COORDS]: `_%_ [x] [y] [z] - Teleport to some coordinates`,
    [LOCALE_KEYS.COMMAND_DO]: `_%_ [message] - Describe an object, sound, etc.`,
    [LOCALE_KEYS.COMMAND_DUMMY_ITEM]: `_%_ - Get some debug items`,
    [LOCALE_KEYS.COMMAND_GET_ITEM]: `_%_ [item-name] - Get an item by name`,
    [LOCALE_KEYS.COMMAND_LOW]: `_%_ [message] - Speak quietly`,
    [LOCALE_KEYS.COMMAND_MOD_CHAT]: `_%_ [message] - Speak to Admins & Mods`,
    [LOCALE_KEYS.COMMAND_ME]: `_%_ [message] - Describe a roleplay action`,
    [LOCALE_KEYS.COMMAND_NO_CLIP]: `_%_ - Toggle No Clip Mode`,
    [LOCALE_KEYS.COMMAND_QUIT_JOB]: `_%_ - Quit a Job`,
    [LOCALE_KEYS.COMMAND_REMOVE_ALL_WEAPONS]: `_%_ - Remove all weapons`,
    [LOCALE_KEYS.COMMAND_REMOVE_WHITELIST]: `_%_ [discord] - Remove Discord ID from whitelist`,
    [LOCALE_KEYS.COMMAND_REVIVE]: `_%_ [player_id]* - Revive self or others`,
    [LOCALE_KEYS.COMMAND_SEATBELT]: `_%_ - Put on a seatbelt or helmet`,
    [LOCALE_KEYS.COMMAND_SET_ARMOUR]: `_%_ [0-100][player_id]* - Set armour for self or others`,
    [LOCALE_KEYS.COMMAND_SET_CASH]: `_%_ [value] - Set your cash on hand`,
    [LOCALE_KEYS.COMMAND_SET_FOOD]: `_%_ [0-100] - Set your hunger level`,
    [LOCALE_KEYS.COMMAND_SET_HEALTH]: `_%_ [99-199][player_id]* - Set health for self or others`,
    [LOCALE_KEYS.COMMAND_SET_WATER]: `_%_ [0-100] - Set your thirst level`,
    [LOCALE_KEYS.COMMAND_SPAWN_VEHICLE]: `_%_ [index] - Spawn personal vehicle by index`,
    [LOCALE_KEYS.COMMAND_TELEPORTER]: `_%_ - Teleport back to current location with an item`,
    [LOCALE_KEYS.COMMAND_TELEPORT_WAYPOINT]: `_%_ - Teleport to a waypoint. Create Waypoint First`,
    [LOCALE_KEYS.COMMAND_TOGGLE_VEH_LOCK]: `_%_ - Toggle the vehicle lock`,
    [LOCALE_KEYS.COMMAND_TOGGLE_VEH_DOOR]: `_%_ - [0-5] - Toggle a vehicle door`,
    [LOCALE_KEYS.COMMAND_TOGGLE_ENGINE]: `_%_ - Toggle the vehicle engine`,
    [LOCALE_KEYS.COMMAND_VEHICLE]: `_%_ [model] - Spawn an admin vehicle`,
    [LOCALE_KEYS.COMMAND_WANTED]: `_%_ [player_id] [stars] - Set player wanted level`,
    [LOCALE_KEYS.COMMAND_WHISPER]: `_%_ [player_id][message] - Privately whisper to a nearby player`,
    [LOCALE_KEYS.COMMAND_WEAPON]: `_%_ [name] - Get a weapon by name`,
    [LOCALE_KEYS.COMMAND_CLEAR_INVENTORY]: `_%_ - Clear your Inventory`,
    [LOCALE_KEYS.COMMAND_CLEAR_TOOLBAR]: `_%_ - Clear your Toolbar`,
    [LOCALE_KEYS.COMMAND_CLEAR_EQUIPMENT]: `_%_ - Clear your Equipment`,
    [LOCALE_KEYS.COMMAND_NOT_PERMITTED_CHARACTER]: `Command is not permitted for your character.`,
    [LOCALE_KEYS.COMMAND_NOT_PERMITTED_ADMIN]: `Command is not permitted for your account.`,
    [LOCALE_KEYS.COMMAND_NOT_VALID]: `_%_ is not a valid command.`,
    [LOCALE_KEYS.COMMAND_SET_WEATHER]: `_%_ [weather name] - Override all region weathers`,
    [LOCALE_KEYS.COMMAND_CLEAR_WEATHER]: `_%_ - Turn off weather override`,
    [LOCALE_KEYS.COMMAND_SET_TIME]: `_%_ [hour] - Override time to this hour`,
    [LOCALE_KEYS.COMMAND_CLEAR_TIME]: `_%_ - Clear override for time`,
    // Cannot
    [LOCALE_KEYS.CANNOT_CHAT_WHILE_DEAD]: `Cannot chat while dead.`,
    [LOCALE_KEYS.CANNOT_FIND_PLAYER]: `Could not find that player.`,
    [LOCALE_KEYS.CANNOT_PERFORM_WHILE_DEAD]: `Cannot perform this command while you are dead.`,
    [LOCALE_KEYS.CANNOT_FIND_PERSONAL_VEHICLES]: `Cannot find any personal vehicles.`,
    [LOCALE_KEYS.CANNOT_FIND_THAT_PERSONAL_VEHICLE]: 'Cannot locate that personal vehicle.',
    // Clothing
    [LOCALE_KEYS.CLOTHING_ITEM_IN_INVENTORY]: `A clothing item was sent to your inventory.`,
    // Discord
    [LOCALE_KEYS.DISCORD_ID_NOT_LONG_ENOUGH]: `Discord ID must be at least 18 characters long.`,
    [LOCALE_KEYS.DISCORD_ALREADY_WHITELISTED]: `_%_ is already whitelisted.`,
    [LOCALE_KEYS.DISCORD_NOT_WHITELISTED]: `_%_ is not whitelisted.`,
    [LOCALE_KEYS.DISCORD_ADDED_WHITELIST]: `_%_ was added to the whitelist.`,
    [LOCALE_KEYS.DISCORD_REMOVED_WHITELIST]: `_%_ was removed from the whitelist.`,
    // FUEL
    [LOCALE_KEYS.FUEL_EXIT_VEHICLE_FIRST]: `You must exit your vehicle before fueling.`,
    [LOCALE_KEYS.FUEL_UPDATE_VEHICLE_FIRST]: `You must enter and exit a vehicle first to fuel.`,
    [LOCALE_KEYS.FUEL_VEHICLE_NOT_CLOSE]: `Vehicle is not close enough to fuel.`,
    [LOCALE_KEYS.FUEL_ALREADY_FULL]: `Vehicle already has enough fuel.`,
    [LOCALE_KEYS.FUEL_TOO_FAR_FROM_PUMP]: `Pump is too far from vehicle.`,
    [LOCALE_KEYS.FUEL_HAS_UNLIMITED]: `Vehicle has unlimited fuel. No refuel necessary.`,
    [LOCALE_KEYS.FUEL_CANNOT_AFFORD]: `You cannot afford any fuel.`,
    [LOCALE_KEYS.FUEL_PAYMENT]: `You will pay $_%_ for _%_ units of fuel. Run this menu again to cancel fueling.`,
    [LOCALE_KEYS.FUEL_PAID]: `You paid $_%_ for _%_ units of fuel.`,
    // Garage
    [LOCALE_KEYS.GARAGE_BLIP_NAME]: `Garage`,
    [LOCALE_KEYS.GARAGE_DESCRIPTION]: `Garage for _%_ Type`,
    // House
    [LOCALE_KEYS.INTERIOR_INTERACT]: `Interact with House`,
    //Translations related to interiors
    [LOCALE_KEYS.INTERIOR_TOO_FAR_FROM_ENTRANCE]: `Too far from entrance.`,
    [LOCALE_KEYS.INTERIOR_TOO_FAR_FROM_EXIT]: `Too far from exit.`,
    [LOCALE_KEYS.INTERIOR_NOT_ENOUGH_CURRENCY]: `Not Enough Currency`,
    [LOCALE_KEYS.INTERIOR_DOOR_LOCKED]: `Door is locked`,
    [LOCALE_KEYS.INTERIOR_PURCHASED]: `Purchased property with id _%_ for $_%_.`,
    [LOCALE_KEYS.INTERIOR_SOLD]: `Sold property with id _%_ for $_%_.`,
    [LOCALE_KEYS.INTERIOR_NO_STORAGE]: `Interior does not have storage.`,
    // Invalid
    [LOCALE_KEYS.INVALID_VEHICLE_MODEL]: `Vehicle model is not vehicle.`,
    // Interaction
    [LOCALE_KEYS.INTERACTION_TOO_FAR_AWAY]: `You are too far away to interact. Move closer.`,
    [LOCALE_KEYS.INTERACTION_INVALID_OBJECT]: `This object does not have an interaction.`,
    [LOCALE_KEYS.INTERACTION_INTERACT_WITH_OBJECT]: `Interact with Object`,
    [LOCALE_KEYS.INTERACTION_INTERACT_VEHICLE]: `Interact with Vehicle`,
    [LOCALE_KEYS.INTERACTION_VIEW_OPTIONS]: `View Options`,
    // Item
    [LOCALE_KEYS.ITEM_NOT_EQUIPPED]: `No item is equipped in that slot.`,
    [LOCALE_KEYS.ITEM_DOES_NOT_EXIST]: `_%_ does not exist.`,
    [LOCALE_KEYS.ITEM_WAS_ADDED_INVENTORY]: `_%_ was added to your inventory.`,
    [LOCALE_KEYS.ITEM_WAS_ADDED_EQUIPMENT]: `_%_ was added to your equipment.`,
    [LOCALE_KEYS.ITEM_WAS_ADDED_TOOLBAR]: `_%_ was added to your toolbar.`,
    // Job
    [LOCALE_KEYS.JOB_ALREADY_WORKING]: `You are already working on a job.`,
    [LOCALE_KEYS.JOB_NOT_WORKING]: `You are not currently working.`,
    [LOCALE_KEYS.JOB_QUIT]: `You have quit your current job.`,
    // Labels
    [LOCALE_KEYS.LABEL_ON]: `ON`,
    [LOCALE_KEYS.LABEL_OFF]: `OFF`,
    [LOCALE_KEYS.LABEL_BROADCAST]: `Broadcast`,
    [LOCALE_KEYS.LABEL_ENGINE]: `Engine`,
    // Player
    [LOCALE_KEYS.PLAYER_IS_TOO_FAR]: `That player is too far away.`,
    [LOCALE_KEYS.PLAYER_IS_TOO_CLOSE]: `That player is too close.`,
    [LOCALE_KEYS.PLAYER_IS_NOT_DEAD]: `That player is not dead.`,
    [LOCALE_KEYS.PLAYER_ARMOUR_SET_TO]: `Your armour was set to: _%_`,
    [LOCALE_KEYS.PLAYER_HEALTH_SET_TO]: `Your health was set to: _%_`,
    [LOCALE_KEYS.PLAYER_SEATBELT_ON]: `You put on your seatbelt.`,
    [LOCALE_KEYS.PLAYER_SEATBELT_OFF]: `You take off your seatbelt.`,
    [LOCALE_KEYS.PLAYER_RECEIVED_BLANK]: `You received _%_ from _%_`,
    // Use
    [LOCALE_KEYS.USE_FUEL_PUMP]: 'Use Fuel Pump',
    [LOCALE_KEYS.USE_ATM]: 'Use ATM',
    [LOCALE_KEYS.USE_VENDING_MACHINE]: 'Use Vending Machine',
    [LOCALE_KEYS.USE_CLOTHING_STORE]: 'Browse Clothing',
    // Weapon
    [LOCALE_KEYS.WEAPON_NO_HASH]: `Weapon does not have a hash.`,
    // Vehicle
    [LOCALE_KEYS.VEHICLE_NO_FUEL]: `Vehicle has no fuel.`,
    [LOCALE_KEYS.VEHICLE_LOCK_SET_TO]: `Vehicle lock has been set to: _%_`,
    [LOCALE_KEYS.VEHICLE_TOGGLE_LOCK]: `Toggle Lock`,
    [LOCALE_KEYS.VEHICLE_TOGGLE_ENGINE]: `Toggle Engine`,
    [LOCALE_KEYS.VEHICLE_IS_LOCKED]: `Closest vehicle is locked.`,
    [LOCALE_KEYS.VEHICLE_ENTER_VEHICLE]: `Get Into / Exit Vehicle`,
    [LOCALE_KEYS.VEHICLE_TOO_FAR]: `Vehicle is too far away.`,
    [LOCALE_KEYS.VEHICLE_NO_VEHICLES_IN_GARAGE]: `There are no vehicles in this garage.`,
    [LOCALE_KEYS.VEHICLE_NO_PARKING_SPOTS]: `There are no parking spots at this garage.`,
    [LOCALE_KEYS.VEHICLE_ALREADY_SPAWNED]: `That vehicle is already spawned.`,
    [LOCALE_KEYS.VEHICLE_COUNT_EXCEEDED]: `You may only have _%_ vehicles spawned at a time. You have exceeded the vehicle spawn count.`,
    [LOCALE_KEYS.VEHICLE_LOCKED]: `Locked`,
    [LOCALE_KEYS.VEHICLE_UNLOCKED]: `Unlocked`,
    [LOCALE_KEYS.VEHICLE_FUEL]: `Fuel`,
    [LOCALE_KEYS.VEHICLE_NO_KEYS]: `You do not have keys for this vehicle.`,
    [LOCALE_KEYS.VEHICLE_NO_STORAGE]: `This vehicle does not have storage.`,
    [LOCALE_KEYS.VEHICLE_NO_TRUNK_ACCESS]: `You do not have access to the trunk.`,
    [LOCALE_KEYS.VEHICLE_NOT_UNLOCKED]: `Vehicle is not currently unlocked.`,
    [LOCALE_KEYS.VEHICLE_NO_OPEN_SEAT]: `Could not find an open seat.`,
    [LOCALE_KEYS.VEHICLE_REFUEL_INCOMPLETE]: `Vehicle Refuel Not Completed`,
    [LOCALE_KEYS.VEHICLE_NO_LONGER_NEAR_VEHICLE]: `You are no longer near this vehicle.`,
    [LOCALE_KEYS.VEHICLE_NOT_RIGHT_SIDE_UP]: `Vehicle is not right side up.`,
    [LOCALE_KEYS.VEHICLE_IS_ALREADY_BEING_PUSHED]: `Vehicle is already being pushed.`,
    [LOCALE_KEYS.VEHICLE_STORAGE_VIEW_NAME]: `Vehicle - _%_ - Storage`,
    // Faction
    [LOCALE_KEYS.FACTION_PLAYER_IS_ALREADY_IN_FACTION]: `_%_ is already in a faction or does not exist.`,
    [LOCALE_KEYS.FACTION_CANNOT_CHANGE_OWNERSHIP]: `You are unable to change ownership of the faction.`,
    [LOCALE_KEYS.FACTION_STORAGE_NOT_ACCESSIBLE]: `Storage Not Accessible`,
    [LOCALE_KEYS.FACTION_STORAGE_NO_ACCESS]: `You do not have access to this.`,
    [LOCALE_KEYS.FACTION_ONLY_OWNER_IS_ALLOWED]: `Only the owner can append rank permission(s) or super admin flag to a rank.`,
    [LOCALE_KEYS.FACTION_UNABLE_TO_DISBAND]: `You are unable to disband the faction.`,
    [LOCALE_KEYS.FACTION_NAME_DOESNT_MATCH]: `Passed faction name does not match actual faction name.`,
    [LOCALE_KEYS.FACTION_NOT_THE_OWNER]: `You are not the owner of this faction.`,
    [LOCALE_KEYS.FACTION_COULD_NOT_FIND]: `Could not find your faction.`,
    [LOCALE_KEYS.FACTION_DISABNDED]: `Faction disbanded.`,
    [LOCALE_KEYS.FACTION_BANK_COULD_NOT_WITHDRAW]: `Could not withdraw $_%_.`,
    [LOCALE_KEYS.FACTION_BANK_COULD_NOT_DEPOSIT]: `Could not deposit $_%_`,
    [LOCALE_KEYS.FACTION_BANK_WITHDREW]: `Withdrew $_%_`,
    [LOCALE_KEYS.FACTION_PLAYER_QUITTED]: `_%_ quit the faction.`,
    [LOCALE_KEYS.FACTION_COULDNT_QUIT]: `Could not quit faction because you are the leader.`,
    // World
    [LOCALE_KEYS.WORLD_TIME_IS]: `Current World Time is _%_:_%_`,
    // ============================
    // WebView Locales Start Here
    // ============================
    [LOCALE_KEYS.WEBVIEW_ATM]: {
        LABEL_ATM: 'ATM',
        LABEL_CASH: 'Cash',
        LABEL_BANK: 'Bank',
        LABEL_DEPOSIT: 'Deposit',
        LABEL_WITHDRAW: 'Withdraw',
        LABEL_TRANSFER: 'Transfer',
        LABEL_CASH_TO_DEPOSIT: 'Cash to Deposit',
        LABEL_CASH_TO_WITHDRAW: 'Cash to Withdraw',
        LABEL_BANK_TO_TRANSFER: 'Bank amount to transfer',
        LABEL_USER_ID: `User ID to transfer to`,
        FIELD_IS_REQUIRED: `Field is required`,
        GREATER_THAN_ZERO: `Value must be greater than zero`,
        LESS_THAN_CASH: `Value must be less than cash`,
        LESS_THAN_BANK: `Value must be less than bank`,
        USER_ID_POSITIVE: `User ID must be positive`,
    },
    [LOCALE_KEYS.WEBVIEW_CHARACTERS]: {
        LABEL_DELETE: 'Delete',
        LABEL_NEW: 'New',
        LABEL_SELECT: 'Select',
        LABEL_YES: 'Yes',
        LABEL_NO: 'No',
        LABEL_CONFIRM_DELETE: 'Are you sure you want to delete your character ', // Leave space at end.
        LABEL_NAME: 'Name',
        LABEL_AGE: 'Age',
        LABEL_GENDER: 'Gender',
        LABEL_HOURS: 'Hours',
        LABEL_CASH: 'Cash',
        LABEL_BANK: 'Bank',
    },
    [LOCALE_KEYS.WEBVIEW_CREATOR]: {
        titles: ['Appearance', 'Facial Structure', 'Hair', 'Details', 'Makeup', 'Info', 'Done'],
        LABEL_FIRST_NAME: 'First Name',
        LABEL_LAST_NAME: 'Last Name',
        LABEL_BIRTHDAY: 'Birthday',
        LABEL_GENDER: 'Gender',
        LABEL_DAY: 'Day',
        LABEL_MONTH: 'Month',
        LABEL_YEAR: 'Year',
        LABEL_PREV: 'Prev',
        LABEL_NEXT: 'Next',
        LABEL_SAVE: 'Save',
        LABEL_FIELD_REQUIRED: 'This field is required',
        LABEL_CANNOT_EXCEED: 'cannot exceed',
        LABEL_CANNOT_BE_LESS: 'cannot be less than',
        LABEL_CHARACTER: 'character',
        LABEL_NO_SPECIAL: 'Cannot use special characters',
        LABEL_NAME_NOT_AVAILABLE: 'Name is not available',
        LABEL_CHARACTER_GENDER: 'Male, Female, Other...',
        LABEL_VERIFIED: 'All Data Verified',
        characterName: "What is your character's name?",
        characterBirth: 'When was your character born?',
        characterGender: 'What does your character identify as?',
        appearanceComponent: {
            LABEL_FRAME: 'Physical Frame',
            DESC_FRAME: 'How does your character model look?',
            LABEL_MASCULINE: 'Masculine',
            LABEL_FEMININE: 'Feminine',
            LABEL_PRESETS: 'Presets',
            DESC_PRESETS: 'Not feeling creative? Choose a preset.',
            LABEL_FATHER: 'Father',
            DESC_FATHER: 'What did your father look like?',
            LABEL_MOTHER: 'Mother',
            DESC_MOTHER: 'What did your mother look like?',
            LABEL_FACEBLEND: 'Face Blend',
            DESC_FACEBLEND: 'Blend your mother and father facial structure.',
            LABEL_SKINBLEND: 'Skin Blend',
            DESC_SKINBLEND: 'Blend your mother and father skin colours.',
            LABEL_EYECOLOUR: 'Eye Colour',
            DESC_EYECOLOUR: 'Use this slider to pick an eye colour.',
            LABEL_FACE: 'Face',
            LABEL_SKIN: 'Skin',
        },
        hairComponent: {
            LABEL_HAIRSTYLE: 'Hairstyle',
            DESC_HAIRSTYLE: `Choose your hair style, colour, and highlights.`,
            LABEL_HAIRSTYLE_COLOUR: 'Hairstyle Colour',
            LABEL_HAIRSTYLE_HIGHLIGHTS: 'Hairstyle Highlights',
            LABEL_EYEBROWS: 'Eyebrows',
            DESC_EYEBROWS: 'Choose your eyebrow shape, and colour.',
            LABEL_EYEBROWS_COLOUR: 'Eyebrows Colour',
            LABEL_FACIAL_HAIR: 'Facial Hair',
            DESC_FACIAL_HAIR: 'Choose your facial hair style, colour, opacity, and highlights.',
            LABEL_OPACITY: 'Opacity',
            LABEL_FACIAL_HAIR_COLOUR: 'Facial Hair Colour',
            masculine: [
                'Close Shave',
                'Buzzcut',
                'Faux Hawk',
                'Shaved Sides Slicked Back',
                'Raised Front Same Length',
                'Col De Sacs and Long Back',
                'Close Shave and Loose Mohawk',
                'Ponytail',
                'Corn Rows',
                'Slicked Back Curly Back',
                'Slicked Back',
                'Spiked',
                'Short Bowl Cut',
                'Messy Long Length',
                'Dreads',
                'Straight Long Length',
                'Curly Long',
                'Straight Long Partial Messy',
                'Side Part Front Short',
                'Slicked Back Short',
                'Side Part Front Long',
                'Razer Side Part Slick',
                'Mullet',
                'Nightvision',
                'Corn Rows',
                'Starfish Corn Rows',
                'Zig Zag Corn Rows',
                'Large Snakelike Corn Rows',
                'Small Snakelike Corn Rows',
                'Side Swirl Corn Rows',
                'Flat Top',
                'Front Crown Long Back',
                'Shaved Sided Slicked Back',
                'Side Parted Shaved Sides',
                'Mohawk',
                'Messy Long Back',
                'Center Parted Bob',
                'Buzz Cut',
                'Faux Hawk',
                'Shaved Sides Slicked Back',
                'Raised Front Same Length',
                'Col De Sacs and Long Back',
                'Close Shave and Loose Mohawk',
                'Ponytail',
                'Corn Rows',
                'Slicked Back Curly Back',
                'Slicked Back',
                'Spiked',
                'Short Bowl Cut',
                'Messy Long Length',
                'Dreads',
                'Straight Long Length',
                'Curly Long',
                'Straight Long Partial Messy',
                'Side Part Front Short',
                'Slicked Back Short',
                'Side Part Front Long',
                'Razer Side Part Slick',
                'Mullet',
                'Corn Rows',
                'Starfish Corn Rows',
                'Zig Zag Corn Rows',
                'Large Snakelike Corn Rows',
                'Small Snakelike Corn Rows',
                'Side Swirl Corn Rows',
                'Flat Top',
                'Front Crown Long Back',
                'Shaved Sided Slicked Back',
                'Side Parted Shaved Sides',
                'Mohawk',
                'Messy Long Back',
                'Center Parted Bob',
                'Shaved Sides Flat Top',
                'Shaved Sides Short Top',
                'Elvis',
            ],
            feminine: [
                'Close Shave',
                'Short Bob',
                'Bob',
                'Pigtails',
                'Ponytail',
                'Braided Mohawk',
                'Braids',
                'Bob',
                'Faux Hawk',
                'French Twist',
                'Long Bob',
                'Loose Tied Ponytail',
                'Pixie',
                'Side Parted Shaved Bangs',
                'Top Knot',
                'Wavy Long',
                'Messy Tied Bandana',
                'Messy Bun with Cropped Bangs',
                'Bob with Feathers',
                'Tight Bun Cropped Bangs',
                'Frizzy Curly Afro',
                'Messy Wavy Bangs',
                'Tight Top Bun Braided',
                'Mullet',
                'Night Vision',
                'Braided Corn Rows',
                'Center Part Braided Corn Rows',
                'Diamond Corn Rows',
                'Pigtails with Bangs',
                'Star Braided Corn Rows',
                'Vertical Shaved Corn Rows',
                'Loose Tied Ponytail',
                'Short Mullet',
                'Shaved Sides Slicked Back',
                'Side Parted Shaved Bangs',
                'Mohawk',
                'Tied Pigtails with Bandana',
                'The Karen',
                'Center Parted Bob',
                'Pixie',
                'Bob',
                'Pigtails',
                'Loose Tied Ponytail',
                'Braided Mohawk',
                'Braids',
                'Straight Bob',
                'Faux Hawk',
                'French Twist',
                'Long Bob',
                'Ponytail Bun',
                'Pixie',
                'Side Parted Shaved Bangs',
                'Top Knot',
                'Wavy Long',
                'Messy Tied Bandana',
                'Messy Top Knot with Bangs',
                'Bob with Feathers',
                'Tight Bun Cropped Bangs',
                'Frizzy Curly Afro',
                'Messy Wavy Bangs',
                'Tight Top Bun Braided',
                'Mullet',
                'Corn Rows',
                'Center Parted Corn Rows',
                'Diamond Corn Rows',
                'Pigtails',
                'Star Braided Corn Rows',
                'Vertical Shaved Corn Rows',
                'Loosely Tied Ponytail',
                'Short Mullet',
                'Shaved Sides Slicked Back',
                'Side Parted Shaved Bangs',
                'Mohawk',
                'Tied Pigtails with Bandana',
                'The Karen',
                'Pixie Bob',
                'Tight Pony Tail Bun',
                'Pixie Cut',
                'Elvis',
            ],
            facial: [
                'Stubble',
                'Balbo',
                'Circle Beard',
                'Goatee',
                'Chin',
                'Chin Fuzz',
                'Pencil Chin Strap',
                'Scruffy',
                'Musketeer',
                'Mustache',
                'Trimmed Beard',
                'Stubble Beard',
                'Thin Circle Beard',
                'Horseshoe',
                'Pencil and Chops',
                'Chin Strap',
                'Balbo and Sideburns',
                'Mutton Chops',
                'Scruffy Beard',
                'Curly',
                'Curly and Beard',
                'Handlebar',
                'Faustic',
                'Otto and Patch',
                'Otto and Beard',
                'Light Franz',
                'The Hampstead',
                'The Ambrose',
                'Lincoln Curtain',
                'Clean Shaven',
            ],
            eyebrows: [
                'Balanced',
                'Fashion',
                'Cleopatra',
                'Quizzical',
                'Femme',
                'Seductive',
                'Pinched',
                'Chola',
                'Triomphe',
                'Carefree',
                'Curvaceous',
                'Rodent',
                'Double Tram',
                'Thin',
                'Penciled',
                'Mother Plucker',
                'Straight and Narrow',
                'Natural',
                'Fuzzy',
                'Unkempt',
                'Caterpillar',
                'Regular',
                'Mediterranean',
                'Groomed',
                'Bushels',
                'Feathered',
                'Prickly',
                'Monobrow',
                'Winged',
                'Triple Tram',
                'Arched Tram',
                'Cutouts',
                'Fade Away',
                'Solo Tram',
                'None',
            ],
        },
        structureComponent: [
            'Nose Width',
            'Nose Bottom Height',
            'Nose Tip Length',
            'Nose Bridge Depth',
            'Nose Tip Height',
            'Nose Broken',
            'Brow Height',
            'Brow Depth',
            'Cheekbone Height',
            'Cheekbone Width',
            'Cheek Depth',
            'Eye Size',
            'Lip Thickness',
            'Jaw Width',
            'Jaw Shape',
            'Chin Height',
            'Chin Depth',
            'Chin Width',
            'Chin Indent',
            'Neck Width',
        ],
        makeupComponent: {
            LABEL_STYLE: 'Style',
            LABEL_OPACITY: 'Opacity',
            LABEL_COLOUR1: 'Colour 1',
            LABEL_COLOUR2: 'Colour 2',
            ids: {
                4: {
                    name: 'Makeup',
                    description: 'Enhance or alter your appearance with this cosmetic.',
                    labels: [
                        'Smoky Black',
                        'Bronze',
                        'Soft Gray',
                        'Retro Glam',
                        'Natural Look',
                        'Cat Eyes',
                        'Chola',
                        'Vamp',
                        'Vinewood Glamour',
                        'Bubblegum',
                        'Aqua Dream',
                        'Pin up',
                        'Purple Passion',
                        'Smoky Cat Eye',
                        'Smoldering Ruby',
                        'Pop Princess',
                        'Kiss My Axe',
                        'Panda Pussy',
                        'The Bat',
                        'Skull in Scarlet',
                        'Serpentine',
                        'The Veldt',
                        'Unknown 1',
                        'Unknown 2',
                        'Unknown 3',
                        'Unknown 4',
                        'Tribal Lines',
                        'Tribal Swirls',
                        'Tribal Orange',
                        'Tribal Red',
                        'Trapped in A Box',
                        'Clowning',
                        'Guyliner',
                        'Unknown 5',
                        'Blood Tears',
                        'Heavy Metal',
                        'Sorrow',
                        'Prince of Darkness',
                        'Rocker',
                        'Goth',
                        'Punk',
                        'Devastated',
                    ],
                },
                5: {
                    name: 'Blush',
                    description: 'Makeup that goes on your cheeks.',
                    labels: ['Full', 'Angled', 'Round', 'Horizontal', 'High', 'Sweetheart', 'Eighties'],
                },
                8: {
                    name: 'Lipstick',
                    description: 'Coloured cosmetic applied to the lips.',
                    labels: [
                        'Color Matte',
                        'Color Gloss',
                        'Lined Matte',
                        'Lined Gloss',
                        'Heavy Lined Matte',
                        'Heavy Lined Gloss',
                        'Lined Nude Matte',
                        'Liner Nude Gloss',
                        'Smudged',
                        'Geisha',
                    ],
                },
            },
        },
        overlaysComponent: {
            LABEL_STYLE: 'Style',
            LABEL_OPACITY: 'Opacity',
            ids: {
                0: {
                    name: 'Blemish',
                    description: 'Do you have any imperfections?',
                    labels: [
                        'Measles',
                        'Pimples',
                        'Spots',
                        'Break Out',
                        'Blackheads',
                        'Build Up',
                        'Pustules',
                        'Zits',
                        'Full Acne',
                        'Acne',
                        'Cheek Rash',
                        'Face Rash',
                        'Picker',
                        'Puberty',
                        'Eyesore',
                        'Chin Rash',
                        'Two Face',
                        'T Zone',
                        'Greasy',
                        'Marked',
                        'Acne Scarring',
                        'Full Acne Scarring',
                        'Cold Sores',
                        'Impetigo',
                    ],
                },
                3: {
                    name: 'Age',
                    description: 'How old should your character look?',
                    labels: [
                        "Crow's Feet",
                        'First Signs',
                        'Middle Aged',
                        'Worry Lines',
                        'Depression',
                        'Distinguished',
                        'Aged',
                        'Weathered',
                        'Wrinkled',
                        'Sagging',
                        'Tough Life',
                        'Vintage',
                        'Retired',
                        'Junkie',
                        'Geriatric',
                    ],
                },
                6: {
                    name: 'Complexion',
                    description: 'How about some acne, rashes, etc.',
                    labels: [
                        'Rosy Cheeks',
                        'Stubble Rash',
                        'Hot Flush',
                        'Sunburn',
                        'Bruised',
                        'Alchoholic',
                        'Patchy',
                        'Totem',
                        'Blood Vessels',
                        'Damaged',
                        'Pale',
                        'Ghostly',
                    ],
                },
                7: {
                    name: 'Sun Damage',
                    description: 'Pitted dry skin and wrinkles.',
                    labels: [
                        'Uneven',
                        'Sandpaper',
                        'Patchy',
                        'Rough',
                        'Leathery',
                        'Textured',
                        'Coarse',
                        'Rugged',
                        'Creased',
                        'Cracked',
                        'Gritty',
                    ],
                },
                9: {
                    name: 'Freckles',
                    description: 'Moles and things for your face.',
                    labels: [
                        'Cherub',
                        'All Over',
                        'Irregular',
                        'Dot Dash',
                        'Over the Bridge',
                        'Baby Doll',
                        'Pixie',
                        'Sun Kissed',
                        'Beauty Marks',
                        'Line Up',
                        'Modelesque',
                        'Occasional',
                        'Speckled',
                        'Rain Drops',
                        'Double Dip',
                        'One Sided',
                        'Pairs',
                        'Growth',
                    ],
                },
                11: {
                    name: 'Body Blemish',
                    description: 'Do you have any body imperfections?',
                    labels: [
                        'unk0',
                        'unk1',
                        'unk2',
                        'unk3',
                        'unk4',
                        'unk5',
                        'unk6',
                        'unk7',
                        'unk8',
                        'unk9',
                        'unk10',
                        'unk11',
                    ],
                },
            },
        },
        faces: [
            'Benjamin',
            'Daniel',
            'Joshua',
            'Noah',
            'Andrew',
            'Joan',
            'Alex',
            'Isaac',
            'Evan',
            'Ethan',
            'Vincent',
            'Angel',
            'Diego',
            'Adrian',
            'Gabriel',
            'Michael',
            'Santiago',
            'Kevin',
            'Louis',
            'Samuel',
            'Anthony',
            'Hannah',
            'Audrey',
            'Jasmine',
            'Giselle',
            'Amelia',
            'Isabella',
            'Zoe',
            'Ava',
            'Camilla',
            'Violet',
            'Sophia',
            'Eveline',
            'Nicole',
            'Ashley',
            'Grace',
            'Brianna',
            'Natalie',
            'Olivia',
            'Elizabeth',
            'Charlotte',
            'Emma',
            'Claude',
            'Niko',
            'John',
            'Misty',
        ],
        color: {
            hair: [
                'Black',
                'Dark Gray',
                'Medium Gray',
                'Darkest Brown',
                'Dark Brown',
                'Brown',
                'Light Brown',
                'Lighter Brown',
                'Lightest Brown',
                'Faded Brown',
                'Faded Blonde',
                'Lightest Blonde',
                'Lighter Blonde',
                'Light Blonde',
                'White Blonde',
                'Grayish Brown',
                'Redish Brown',
                'Red Brown',
                'Dark Red',
                'Red',
                'Very Red',
                'Vibrant Red',
                'Orangeish Red',
                'Faded Red',
                'Faded Orange',
                'Gray',
                'Light Gray',
                'Lighter Gray',
                'Lightest Gray',
                'Dark Purple',
                'Purple',
                'Light Purple',
                'Violet',
                'Vibrant Violet',
                'Candy Pink',
                'Light Pink',
                'Cyan',
                'Blue',
                'Dark Blue',
                'Green',
                'Emerald',
                'Oil Slick',
                'Shiney Green',
                'Vibrant Green',
                'Green',
                'Bleach Blonde',
                'Golden Blonde',
                'Orange Blonde',
                'Orange',
                'Vibrant Orange',
                'Shiny Orange',
                'Dark Orange',
                'Red',
                'Dark Red',
                'Very Dark Red',
                'Black',
                'Black',
                'Black',
                'Black',
                'Black',
            ],
            overlays: [
                'Red',
                'Pink',
                'Light Pink',
                'Lighter Pink',
                'Lightest Pink',
                'Light Maroon',
                'Maroon',
                'Light Brown',
                'Lighter Brown',
                'Lightest Brown',
                'White Pink',
                'Beige',
                'Brown Red',
                'Orange',
                'Orange Pink',
                'Lightest Pink',
                'Lighter Pink',
                'Pink',
                'Vibrant Pink',
                'Dark Pink',
                'Darker Pink',
                'Darkest Pink',
                'Red',
                'Lighter Red',
                'Vibrant Red',
                'Red Pink',
                'Purple',
                'Light Purple',
                'Dark Purple',
                'Darker Purple',
                'Darkest Purple',
                'Vibrant Purple',
                'Black Purple',
                'Blue',
                'Light Blue',
                'Lighter Blue',
                'Lightest Blue',
                'Cyan',
                'Sea Green',
                'Deep Sea Green',
                'Green',
                'Dark Green',
                'Light Green',
                'Yellow Green',
                'Dark Yellow',
                'Yellow',
                'Yellow Orange',
                'Dark Yellow Orange',
                'Vigrant Orange',
                'Dark Orange',
                'Blonde',
                'Blonde White',
                'White',
                'Gray',
                'Dark Gray',
                'Darkest Gray',
                'Black',
                'Light Blue',
                'Dark Blue',
                'Darkest Blue',
                'Light Brown',
                'Brown',
                'Dark Brown',
                'Darker Brown',
            ],
            eyes: [
                'Green',
                'Emerald',
                'Light Blue',
                'Ocean Blue',
                'Light Brown',
                'Dark Brown',
                'Hazel',
                'Dark Gray',
                'Light Gray',
                'Pink',
                'Yellow',
                'Purple',
                'Blackout',
                'Shades of Gray',
                'Tequila Sunrise',
                'Atomic',
                'Warp',
                'ECola',
                'Space Ranger',
                'Ying Yang',
                'Bullseye',
                'Lizard',
                'Dragon',
                'Extra Terrestrial',
                'Goat',
                'Smiley',
                'Possessed',
                'Demon',
                'Infected',
                'Alien',
                'Undead',
                'Zombie',
            ],
        },
    },
    [LOCALE_KEYS.WEBVIEW_JOB]: {
        LABEL_DECLINE: 'Decline',
        LABEL_ACCEPT: 'Accept',
    },
    [LOCALE_KEYS.WEBVIEW_STORAGE]: {
        LABEL_SPLIT_TEXT: 'Move a stack of this quantity?',
    },
    [LOCALE_KEYS.WEBVIEW_INVENTORY]: {
        ITEM_SLOTS: [
            'Hat',
            'Mask',
            'Shirt',
            'Pants',
            'Feet',
            'Glasses',
            'Ears',
            'Bag',
            'Armour',
            'Watches',
            'Bracelets',
        ],
        LABEL_SPLIT: 'split',
        LABEL_CANCEL: 'cancel',
        LABEL_DROP_ITEM: 'Drop Item',
        LABEL_WEIGHT: 'Weight',
        LABEL_SPLIT_TEXT: 'Make a stack of this quantity?',
    },
    [LOCALE_KEYS.WEBVIEW_CLOTHING]: {
        LABEL_HAT: 'Hat',
        LABEL_SHIRT: 'Shirt',
        LABEL_MASK: 'Mask',
        LABEL_BOTTOMS: 'Bottoms',
        LABEL_SHOES: 'Shoes',
        LABEL_GLASSES: 'Glasses',
        LABEL_EARRINGS: 'Earrings / Ear Pieces',
        LABEL_BAG: 'Bags / Backpacks',
        LABEL_ARMOUR: 'Armour',
        LABEL_WATCH: 'Wrist Watch',
        LABEL_BRACELET: 'Wrist Bracelet',
        LABEL_TOP: 'Shirt Top',
        LABEL_UNDERSHIRT: 'Undershirt',
        LABEL_TORSO: 'Arms / Torso / Gloves',
        LABEL_BUY: 'purchase',
        LABEL_EXIT: 'exit',
    },
    [LOCALE_KEYS.WEBVIEW_LOGIN]: {
        LABEL_OPEN_PAGE: `A page will open up outside of your game and assist you with logging in.`,
        LABEL_LOGIN_WITH_DISCORD: `Login with Discord`,
        LABEL_TRY_AGAIN: `Try again...`,
        LABEL_TAB_OUT: `Tab out and check your browser to finish authentication. If this fails try opening the
        window again.`,
        LABEL_FINISH_LOGIN: `Finish Login`,
        LABEL_OPEN_WINDOW: `Open Login Window Again`,
    },
    [LOCALE_KEYS.WEBVIEW_GARAGE]: {
        LABEL_GARAGE: 'Garage',
        LABEL_DESC: 'Spawn your vehicles through this terminal.',
        LABEL_MODEL: 'Model',
        LABEL_FUEL: 'Fuel',
        LABEL_CONTROLS: 'Controls',
        LABEL_SPAWN: 'spawn',
        LABEL_DESPAWN: 'despawn',
    },
};
