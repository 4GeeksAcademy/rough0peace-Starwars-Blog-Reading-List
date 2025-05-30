// columns and rows not bootsrap carousel
// column that scrolls d-flex 
// overflow-auto boostrap component to not overflow off screen, allow scroll to happen
// things to go evenly across it, justify-content-evenly 

// can break down components more
// could use things like People/Planet/Starships make files for these and call inside carousel rows 
// make files 3 cards for people planet vehicle 
// one function for rows/columns here, call each file in here 

import { PeopleCard } from "./PeopleCard";

export const Carousel = () => {
    return (
        <div className="container text-center">
            <div className="d-flex row justify-content-evenly overflow-x-auto border mb-5">
               <PeopleCard />
            </div>
        </div>
    )
}