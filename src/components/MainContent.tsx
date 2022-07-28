import PlaceEntry from "./PlaceEntry"

function MainContent(): JSX.Element{
    return(
<PlaceEntry
title={"Hebden Bridge"}
place={"Yorkshire"}
body = {"walks in and around Hebden Bridge is really testimony to the things that make this town so popular with its locals and visitors alike"}
visited= {6}
link={"https://www.creativetourist.com/west-yorkshire/walks-in-hebden-bridge/"}
postDate= {{ month: "July", day: 12, year: 2022}}
/>
 ); 

}

export default MainContent;