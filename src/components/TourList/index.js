import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData';
export default class TourList extends Component {
    state = {
        tours: tourData
    }
    removeTour = id =>{
        const {tours} = this.state;
        const sortedTours = tours.filter((tour) =>{
            return tour.id !==id;
        })
        this.setState({
            tours: sortedTours
        })
    }
    render(){
        // preferaly,u can destructure like below
        //to avoid typing this.state while mapping through tourData imported
        //const{tours} = this.state
        return(
            <section className="tourlist">
                {this.state.tours.map( tour =>{
                    // console.log(tour)
                    return <Tour
                        key={tour.id}
                        tour={tour}
                        removeTour = {this.removeTour}
                     />
                })}
            </section>
        )
    }
}