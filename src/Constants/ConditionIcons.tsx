import {
	MdVisibilityOff,
	MdFavorite,
	MdHearingDisabled,
	MdBattery0Bar,
	MdRunCircle,
	MdGpsFixed,
	MdBlock,
	MdVisibility,
	MdAcUnit,
	MdLandscape,
	MdLocalHospital,
	MdAccessibilityNew,
	MdLock,
	MdStar,
	MdBedtime,
} from "react-icons/md";

export const conditionIcons = {
	Blinded: MdVisibilityOff,
	Charmed: MdFavorite,
	Deafened: MdHearingDisabled,
	Exhaustion: MdBattery0Bar,
	Frightened: MdRunCircle,
	Grappled: MdGpsFixed,
	Incapacitated: MdBlock,
	Invisible: MdVisibility,
	Paralyzed: MdAcUnit,
	Petrified: MdLandscape,
	Poisoned: MdLocalHospital,
	Prone: MdAccessibilityNew,
	Restrained: MdLock,
	Stunned: MdStar,
	Unconscious: MdBedtime,
};

export type ConditionIconType = keyof typeof conditionIcons;
