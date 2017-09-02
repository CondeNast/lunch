import {WorkLocation, LunchGenre, PriceType} from "../types";

const location: WorkLocation = {
    name: "222",
    lunchLocations: [
        {
            name: "Rosellas",
            genres: [LunchGenre.Pizza],
            description: "Not the best example of NYC pizza in all of NYC, but probably the best in the FiDi",
            vouchedBy: "Bruce Lee",
            priceType: PriceType.EveryDay
        }
    ]
};
export default location;