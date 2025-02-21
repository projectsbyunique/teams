//% weight=100
//% color=#6C5CA4
namespace Teams {
    export const enum TeamEnum {
        ARI, ATL, BAL, BUF, CAR, CHI, CIN, CLE, DAL, DEN, DET, GB, HOU, IND, JAX, KC,
        LV, LAC, LAR, MIA, MIN, NE, NO, NYG, NYJ, PHI, PIT, SF, SEA, TB, TEN, WAS
    }

    export const enum TeamProperty {
        TeamLocation,
        TeamAbbreviation,
        MainColor,
        SecondaryColor,
        SockColor
    }

    const teamData: {
        teamLocation: string;
        teamAbbreviation: string;
        mainColor: number;
        secondaryColor: number;
        sockColor: number;
    }[] = [
            { teamLocation: "Arizona", teamAbbreviation: "ARI", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Atlanta", teamAbbreviation: "ATL", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Baltimore", teamAbbreviation: "BAL", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Buffalo", teamAbbreviation: "BUF", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Carolina", teamAbbreviation: "CAR", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Chicago", teamAbbreviation: "CHI", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Cincinnati", teamAbbreviation: "CIN", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Cleveland", teamAbbreviation: "CLE", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Dallas", teamAbbreviation: "DAL", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Denver", teamAbbreviation: "DEN", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Detroit", teamAbbreviation: "DET", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Green Bay", teamAbbreviation: "GB", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Houston", teamAbbreviation: "HOU", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Indianapolis", teamAbbreviation: "IND", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Jacksonville", teamAbbreviation: "JAX", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Kansas City", teamAbbreviation: "KC", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Las Vegas", teamAbbreviation: "LV", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Los Angeles (Chargers)", teamAbbreviation: "LAC", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Los Angeles (Rams)", teamAbbreviation: "LAR", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Miami", teamAbbreviation: "MIA", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Minnesota", teamAbbreviation: "MIN", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "New England", teamAbbreviation: "NE", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "New Orleans", teamAbbreviation: "NO", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "New York (Giants)", teamAbbreviation: "NYG", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "New York (Jets)", teamAbbreviation: "NYJ", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Philadelphia", teamAbbreviation: "PHI", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Pittsburgh", teamAbbreviation: "PIT", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "San Francisco", teamAbbreviation: "SF", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Seattle", teamAbbreviation: "SEA", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Tampa Bay", teamAbbreviation: "TB", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Tennessee", teamAbbreviation: "TEN", mainColor: 0, secondaryColor: 0, sockColor: 0 },
            { teamLocation: "Washington", teamAbbreviation: "WAS", mainColor: 0, secondaryColor: 0, sockColor: 0 }
        ];

    export class Team {
        teamEnum: TeamEnum;
        teamLocation: string;
        teamAbbreviation: string;
        mainColor: number;
        secondaryColor: number;
        sockColor: number;

        constructor(teamEnum: TeamEnum) {
            this.teamEnum = teamEnum;
            const data = teamData[teamEnum];
            this.teamLocation = data.teamLocation;
            this.teamAbbreviation = data.teamAbbreviation;
            this.mainColor = data.mainColor;
            this.secondaryColor = data.secondaryColor;
            this.sockColor = data.sockColor;
        }

        // Method to get the TeamEnum associated with this team
        getTeamEnum(): TeamEnum {
            return this.teamEnum;
        }
    }

    //% block
    export function getTeamData(team: TeamEnum): {
        teamLocation: string;
        teamAbbreviation: string;
        mainColor: number;
        secondaryColor: number;
        sockColor: number;
    } {
        return teamData[team];
    }

    //% block="get property $property from team $team"
    //% property.defl=TeamProperty.TeamLocation
    //% team.shadow="team_enum_shim"
    export function getTeamProperty(team: number, property: TeamProperty): string | number {
        let data = teamData[team];

        switch (property) {
            case TeamProperty.TeamLocation:
                return data.teamLocation;
            case TeamProperty.TeamAbbreviation:
                return data.teamAbbreviation;
            case TeamProperty.MainColor:
                return data.mainColor;
            case TeamProperty.SecondaryColor:
                return data.secondaryColor;
            case TeamProperty.SockColor:
                return data.sockColor;
            default:
                return "";
        }
    }

    //% block="$team"
    //% blockId=team_enum_shim
    //% team.defl=TeamEnum.PHI
    export function getTeamFromEnum(team: TeamEnum): TeamEnum {
        return team
    }
    
    //% block="array of teams"
    export function getAllTeamsEnum(): TeamEnum[] {
        return [
            TeamEnum.PHI,  // Philadelphia Eagles
            TeamEnum.KC,   // Kansas City Chiefs
            TeamEnum.DEN,  // Denver Broncos
            TeamEnum.ARI,  // Arizona Cardinals
            TeamEnum.ATL,  // Atlanta Falcons
            TeamEnum.BAL,  // Baltimore Ravens
            TeamEnum.BUF,  // Buffalo Bills
            TeamEnum.CAR,  // Carolina Panthers
            TeamEnum.CIN,  // Cincinnati Bengals
            TeamEnum.CLE,  // Cleveland Browns
            TeamEnum.DAL,  // Dallas Cowboys
            TeamEnum.DET,  // Detroit Lions
            TeamEnum.GB,   // Green Bay Packers
            TeamEnum.HOU,  // Houston Texans
            TeamEnum.IND,  // Indianapolis Colts
            TeamEnum.JAX,  // Jacksonville Jaguars
            TeamEnum.LAC,  // Los Angeles Chargers
            TeamEnum.LAR,  // Los Angeles Rams
            TeamEnum.MIA,  // Miami Dolphins
            TeamEnum.MIN,  // Minnesota Vikings
            TeamEnum.NE,   // New England Patriots
            TeamEnum.NO,   // New Orleans Saints
            TeamEnum.NYG,  // New York Giants
            TeamEnum.NYJ,  // New York Jets
            TeamEnum.LV,  // Las Vegas Raiders
            TeamEnum.PIT,  // Pittsburgh Steelers
            TeamEnum.SF,   // San Francisco 49ers
            TeamEnum.SEA,  // Seattle Seahawks
            TeamEnum.TB,   // Tampa Bay Buccaneers
            TeamEnum.TEN,  // Tennessee Titans
            TeamEnum.WAS   // Washington Commanders
        ];
    }


}
