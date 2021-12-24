//import { red } from '@material-ui/core/colors';
import React, { Component } from 'react';
import {Doughnut} from'react-chartjs-2';


class Near_expire_certificates extends Component {

 

    render() {
        return (
            
                <Doughnut
                width={100}
                height={500}
              options={{
                responsive: true,
                maintainAspectRatio: true,
              }}
                

                />
            
        );
    }
}


export default Near_expire_certificates;
/*Made With Love by Abdullah Aladham

Linkedin:https://www.linkedin.com/in/abdullah-aladham/




*/