import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap';

class CamperLeaderboard extends Component {
    constructor(props){
        super(props);
        this.state =  {
            points30Days: {},
            pointsAllTimes: {}
        }
    }

    getData(url, stateName) {
        axios.get(url)
        then(({ data}) => {
            this.setState({ [stateName]: data });

        } )
    }

    componentDidMount(){
        this.getData('https://fcctop100.herokuapp.com/api/fccusers/top/recent', points30Days);
        this.getData('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', pointsAllTimes);
    }



}
render() {
    return (
        <div className="Table">
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Camper Name</th>
                        <th>Points last 30 Days</th>
                        <th>Points All Times</th>
                        </tr>
                </thead>

                <tbody>
             

                    </tbody>

            </Table>    
        
        </div>
    )
}

export default CamperLeaderboard;


