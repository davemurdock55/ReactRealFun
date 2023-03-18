// import React, { Component } from 'react';
// import Team from './Team';
// import CollegeBasketballTeams from '../CollegeBasketballTeams.json';
// 
// export default class TeamList extends Component {
//    render() {
//       const TeamsInfo = CollegeBasketballTeams.teams;
// 
//       return (
//       <div className="text-center">
//          <h2>Team List</h2>
//          {TeamsInfo.map((team) => (
//             <Team key={team.tid} {...team} />
//          ))}
//       </div>
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
         <div className="mt-5 text-center text-primary card border-primary mb-3" id="teams">
            <h3 className="mt-3 card-header">Teams List</h3>
            <div className="row justify-content-center p-5">
               {TeamsInfo.map((team) => (
                  <div key={team.tid} className="col-sm-6 col-md-4 col-lg-3 mb-3">
                     <Team {...team} />
                  </div>
               ))}
            </div>
         </div>
      );
   }
}





