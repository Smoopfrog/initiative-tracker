import { conditionIcons } from './ConditionIcons';

export type DndCondition = {
    name: string;
    description: string;
    levels?: string[];
    icon: keyof typeof conditionIcons;
  };
  
export const dndConditions: DndCondition[] = [
    {
      name: "Blinded",
      description: `A blinded creature can't see and automatically fails any ability check that requires sight. 
  Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.`,
      icon: "Blinded",
    },
    {
      name: "Charmed",
      description: `A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects. 
  The charmer has advantage on any ability check to interact socially with the creature.`,
      icon: "Charmed",
    },
    {
      name: "Deafened",
      description: `A deafened creature can't hear and automatically fails any ability check that requires hearing.`,
      icon: "Deafened",
    },
    {
      name: "Exhaustion",
      description: `Some abilities and environmental hazards can cause exhaustion, measured in six levels. 
  A creature suffers the effects of its current level and all lower levels.`,
      levels: [
        "1: Disadvantage on ability checks",
        "2: Speed halved",
        "3: Disadvantage on attack rolls and saving throws",
        "4: Hit point maximum halved",
        "5: Speed reduced to 0",
        "6: Death",
      ],
      icon: "Exhaustion",
    },
    {
      name: "Frightened",
      description: `A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is in line of sight. 
  It can't willingly move closer to the source of its fear.`,
      icon: "Frightened",
    },
    {
      name: "Grappled",
      description: `A grappled creature's speed becomes 0, and it can't benefit from bonuses to speed. 
  The condition ends if the grappler is incapacitated or the creature is removed from their reach.`,
      icon: "Grappled",
    },
    {
      name: "Incapacitated",
      description: `An incapacitated creature can't take actions or reactions.`,
      icon: "Incapacitated",
    },
    {
      name: "Invisible",
      description: `An invisible creature is impossible to see without magic or special sense. 
  Attack rolls against it have disadvantage, and its attack rolls have advantage.`,
      icon: "Invisible",
    },
    {
      name: "Paralyzed",
      description: `A paralyzed creature is incapacitated and can't move or speak. 
  It automatically fails Strength and Dexterity saving throws. 
  Attack rolls against it have advantage. 
  Any attack that hits is a critical hit if the attacker is within 5 feet.`,
      icon: "Paralyzed",
    },
    {
      name: "Petrified",
      description: `A petrified creature is transformed into inanimate material (usually stone). 
  It is incapacitated, can't move or speak, and is unaware of its surroundings. 
  Attack rolls have advantage. 
  It automatically fails Strength and Dexterity saving throws, has resistance to all damage, and is immune to poison and disease.`,
      icon: "Petrified",
    },
    {
      name: "Poisoned",
      description: `A poisoned creature has disadvantage on attack rolls and ability checks.`,
      icon: "Poisoned",
    },
    {
      name: "Prone",
      description: `A prone creature can only crawl unless it stands up. 
  It has disadvantage on attack rolls. 
  Attack rolls against it have advantage if within 5 feet; otherwise, the attack has disadvantage.`,
      icon: "Prone",
    },
    {
      name: "Restrained",
      description: `A restrained creature's speed becomes 0, and it can't benefit from speed bonuses. 
  Attack rolls against it have advantage, and its own attacks have disadvantage. 
  It has disadvantage on Dexterity saving throws.`,
      icon: "Restrained",
    },
    {
      name: "Stunned",
      description: `A stunned creature is incapacitated, can't move, and can speak only falteringly. 
  It automatically fails Strength and Dexterity saving throws. 
  Attack rolls against it have advantage.`,
      icon: "Stunned",
    },
    {
      name: "Unconscious",
      description: `An unconscious creature is incapacitated, can't move or speak, and is unaware of its surroundings. 
  It drops whatever it's holding and falls prone. 
  It automatically fails Strength and Dexterity saving throws. 
  Attack rolls against it have advantage, and attacks from within 5 feet are critical hits.`,
      icon: "Unconscious",
    },
  ];
  