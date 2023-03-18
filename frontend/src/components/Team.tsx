import React, { Component } from 'react';

// interface TeamProps {
//    school: string;
//    name: string;
//    city: string;
//   // add any other props your component is expecting here
// }
// if you do use an interface, make sure to add <TeamProps> after the "extends Component" (and before the "{")

export default class Team extends Component
{
   render()
   {

      const team: any = this.props;

      return (
         <div>
            <div className="card text-white bg-primary mb-3" style={{ maxWidth: '20rem' }}>
               <div className="card-header"><b>{team.school}</b></div>
               <div className="card-body">
                  <h4 className="card-title">{team.name}</h4>
                  <h5 className="card-text text-secondary">{team.city}, {team.state}</h5>
               </div>
            </div>
         </div>
      );
   }
}