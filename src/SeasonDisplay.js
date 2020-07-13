import React from 'react';

const seasonConfig = {
    winter: {
        textSeason: "Brr it is chilly",
        iconSeason: "snowflake"
    },
    summer: {
        textSeason: "Let's at beach",
        iconSeason: "sun"
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9)
        return lat > 0 ? "summer" : "winter";
    else
        return lat > 0 ? "winter" : "summer";

}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    console.log(season);

    const { textSeason, iconSeason } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconSeason} icon massive icon-left`}></i>
            <h1>
                {textSeason}
            </h1>
            <i className={`${iconSeason} icon massive icon-right`}></i>
        </div>

    );
}

export default SeasonDisplay;