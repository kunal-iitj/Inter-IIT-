import React from 'react'
import LikePhoto from '../Images/LikePhoto.jpg'
import Leftpanel from '../components/Leftpanel';
function LikePage() {
  return (
    <>
    <div className="splithome leftbox">
        <Leftpanel/>
      </div>
    <div className="splithome LikePage">
        
        <div className="edit_playlist">
            <img id="likeProfile" src={LikePhoto} alt="Reload"/>

            <div className='Liked'>Liked Songs</div>
            <div className="songCount">10 Songs</div>
        </div>



        <div className="container">
            <div className="songList">
                <div className="songItemContainer">
                    <div className="songItem">
                        <img alt="1"/>
                        <span className="songName">#SongName</span>
                        <span className="songlistplay"><span className="timestamp">05:34 <i id="0"
                                    className="far songItemPlay fa-play-circle"></i> </span></span>
                    </div>
                    <div className="songItem">
                        <img alt="1"/>
                        <span className="songName">#SongName</span>
                        <span className="songlistplay"><span className="timestamp">05:34 <i id="1"
                                    className="far songItemPlay fa-play-circle"></i> </span></span>
                    </div>
                    <div className="songItem">
                        <img alt="1"/>
                        <span className="songName">#SongName</span>
                        <span className="songlistplay"><span className="timestamp">05:34 <i id="2"
                                    className="far songItemPlay fa-play-circle"></i> </span></span>
                    </div>
                    <div className="songItem">
                        <img alt="1"/>
                        <span className="songName">#SongName</span>
                        <span className="songlistplay"><span className="timestamp">05:34 <i id="3"
                                    className="far songItemPlay fa-play-circle"></i> </span></span>
                    </div>
                    <div className="songItem">
                        <img alt="1"/>
                        <span className="songName">#SongName</span>
                        <span className="songlistplay"><span className="timestamp">05:34 <i id="4"
                                    className="far songItemPlay fa-play-circle"></i> </span></span>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>

    
    </>
  );
}

export default LikePage;
