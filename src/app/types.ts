export interface Message {
  teamData: TeamData;
}

export interface TeamData {
  teams: Team[];
}

export interface Team {
  name: string;
  id: number;
  logo: string;
  facebook: string;
  twitter: string;
  instagram: string;
  rank: number;
  players: Player[];
  change: number;
  isNew: boolean;
  points: number;
  place: number;
}

export interface Player {
  name: string;
  id: number;
  timeOnTeam: string;
  mapsPlayed: number;
  type: string;
}

export interface Country {
  name: string;
  code: string;
}
