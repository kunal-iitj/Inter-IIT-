import React from "react";
import LikePhoto from "../Images/LikePhoto.jpg";
import Leftpanel from "../components/Leftpanel";
import Tile2 from "../components/Tile2";
import { getLikedSongs } from "../services/localStorage";

export default function LikePage() {
    const likedSongs = getLikedSongs();
    var likedSongsArray = [];
    var a = 0;
    var n = likedSongs.length;

    for (let i = 0; i < n; i++) {
        likedSongsArray.push({ Tile2: <Tile2 />, key: i });
    }

    return (
        <>
            <div className="splithome leftbox">
                <Leftpanel />
            </div>
            <div className="splithome LikePage">
                <div className="edit_playlist">
                    <img id="likeProfile" src={LikePhoto} alt="Reload" />

                    <div className="Liked">Liked Songs</div>
                    <div className="songCount">{n} Songs</div>
                </div>
                <div className="container">
                    <div className="songList">
                        <div className="songItemContainer">
                            <div className="row">
                                {likedSongsArray.map((i) => {
                                    return (
                                        <Tile2
                                            songName={likedSongs[a]}
                                            number={a}
                                            key={a++}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
