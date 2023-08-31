import React from "react";

const Video = (props) => {
    const {url} = props
    return (
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Bxq8ic18tKI?si=m7epAfqMUSv3h38J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    )
}

export default Video;