// import React, { Component } from 'react';
// import Team from './Team';
// import CollegeBasketballTeams from '../CollegeBasketballTeams.json';
//
// export default class TeamList extends Component
// {
//    render()
//    {
//       const TeamInfo = CollegeBasketballTeams;
//
//       return (
//          <>
//             <h2>Team List</h2>
//             {TeamInfo.map(team => <Team {...team} />)}
//          </>
//       );
//    }
// }
import React, { Component } from 'react';
import Team from './Team';
import CollegeBasketballTeams from '../CollegeBasketballTeams.json';

export default class TeamList extends Component {
   render() {
      const TeamsInfo = CollegeBasketballTeams.teams;

      return (
      <div className="text-center">
         <h2>Team List</h2>
         {TeamsInfo.map((team) => (
            <Team key={team.tid} {...team} />
         ))}
      </div>
      );
   }
}
