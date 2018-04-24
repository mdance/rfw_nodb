import axios from 'axios';
import React, { Component } from 'react';

const apiKey = '7740f124758295f3deea367c18f010e4'; //This is api key for movie database
const apiURL = 'https://api.themoviedb.org/3/movie/';


//let searchQuery = `${apiURL}${/*input from the input field*/}?api_key=${apikey}`; //will use title
// Request from toprated https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
// export function this will be the list of top 10 current movies or something to this effect.

// title and year from OMDB

export default class Blockbusters extends Component {
    constructor() {
        super();

        this.state = {
            blockbusters: []
        };

        this.updateList = this.updateList.bind( this );
    }

    updateList() {
        let newRandomList = [];

        for (let i = 0; i<9; i++) {
            let randomMovie = Math.floor(Math.random()*100000);
            let url = `${apiURL}${randomMovie}?api_key=${apiKey}`
    
            axios.get(url)
            .then(
                results => {
                    if (results.status_code===34) {
                        i--;
                    } else {
                        let title = results.data.title;

                        newRandomList.push(title)
            
                        console.log(randomMovie);
                        console.log(title)
                    }
                }
            ).catch(
                error => {
                    console.log(error)
                }
            )
        }
        
        this.setState(
            {
                blockbusters:newRandomList
            }
        );       
    }

    render() {
        const {blockbusters} = this.state;
        
        return (
            <div>
                <p>{blockbusters}</p>
                <button onClick={this.updateList}>Update List</button>
            </div>
        )
    }
}